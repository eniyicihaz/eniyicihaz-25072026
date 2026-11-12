// Ana sayfa hero'sunda süzülen cihaz görselini 3B görüntüleyicinin CANLI sahnesinden üretir: aynı model, aynı malzeme,
// aynı ışık, görüntüleyicinin başlangıç görünümü (bte3d.client.js → VIEW0). Çıktı şeffaf zeminli bir "kesilmiş" karedir.
//
// Şeffaflık nasıl elde edilir: sahne, zemin gölgesi gizlenerek iki kez çizilir (düz SİYAH ve düz BEYAZ fon). İki kare
// arasındaki fark, her pikselde fonun ne kadar göründüğünü verir (alfa = 1 − fark). Böylece gövde tam opak, kanca / tüp /
// kulak kalıbı ise gerçekten saydam kalır ve hero'nun kendi zemini arkalarından görünür. Renk, AÇIK zemin üzerinde
// görüntüleyicideki görünümle aynı olacak şekilde hesaplanır (hero zemini açıktır).
//
// Model, malzeme veya ışık değişirse bu betik (make-posters.cjs ile birlikte) YENİDEN çalıştırılmalıdır.
//
// Kullanım (bağımlılık projeye değil geçici bir klasöre kurulur; Chrome kurulu olmalıdır):
//   1) Projede:  npx astro dev --host 127.0.0.1 --port 4399
//      (DİKKAT: `astro preview` ile çalışmaz. Betik sahneye erişmek için three.js'i ayrı bir modül olarak içe aktarır;
//      bu yalnızca geliştirme sunucusunda mümkündür. Yayımlanan kodda sahneye dışarıdan erişim bilinçli olarak yoktur.)
//   2) Geçici klasörde:  npm init -y && npm i puppeteer-core
//      copy "<proje>\tools\bte-model\make-hero-frame.cjs" .
//      node make-hero-frame.cjs http://127.0.0.1:4399/isitme-cihazlari/kulak-arkasi-bte/ "<proje>"
//      (isteğe bağlı üçüncü değer: tam çözünürlüklü kayıpsız ana kopyanın yazılacağı klasör; verilmezse sistemin geçici klasörü)
//   3) Betiğin yazdığı boyutlar src/data/home/hero.ts → deviceStage ile aynı olmalı; değilse güncelleyin.
//   4) Sonucu sayfada görün (ana sayfa, 320–1440 px): cihazın biçimi değiştiyse hero'daki yerleşim payları
//      (HeroDeviceStage.astro, HomeHero.astro) yeniden ayarlanmalıdır — ölçüler docs/tech/BTE_3D_VIEWER.md §12.3'te.
//
// Çıktı: <proje>/public/images/homepage/hero-device-bte3d-{240,360}.{avif,webp}  (3:4, şeffaf zemin)
const path = require("path");
const fs = require("fs");
const os = require("os");
const puppeteer = require("puppeteer-core");

const [url, project, masterDir = os.tmpdir()] = process.argv.slice(2);
if (!url || !project) {
  console.error('kullanım: node make-hero-frame.cjs <BTE sayfasının astro dev adresi> "<proje klasörü>" ["<ana kopyanın yazılacağı klasör>"]');
  process.exit(1);
}
const sharp = require(path.join(project, "node_modules", "sharp"));
const outDir = path.join(project, "public", "images", "homepage");
const CHROME = process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const VIEW = { az: -32, tilt: 0 }; // görüntüleyicinin başlangıç görünümü (VIEW0) ile aynı
const RATIO = 4; // çizim yoğunluğu: tuval ≈ 2870×2150 px; çıktılar bundan küçültülür (kenarlar temiz kalır)
const WIDTHS = [240, 360]; // hero'da cihaz 100–150 CSS px genişliğinde görünür (1×–3× ekran yoğunluğu)
const ASPECT = 3 / 4; // çıktı kutusu (genişlik / yükseklik); cihaz bu kutuya ortalanır
const MARGIN = 0.015; // cihazın çevresinde bırakılan pay (kutu yüksekliğinin oranı)
const NAME = "hero-device-bte3d";

/** Şeffaf (alfası 8/255'in altındaki) piksellerin RENGİNİ komşu kenar renginden doldurur; alfa değişmez. Kayıplı
 *  sıkıştırmada kenarlarda koyu saçak oluşmasını önler. Bu pikseller zaten görünmez (ya da %3'ten az görünür). */
function bleedEdges(buf, w, h) {
  const n = w * h;
  let known = new Uint8Array(n);
  for (let p = 0; p < n; p++) known[p] = buf[p * 4 + 3] >= 8 ? 1 : 0;
  for (let pass = 0; pass < 48; pass++) {
    const next = known.slice();
    let changed = 0;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const p = y * w + x;
        if (known[p]) continue;
        let r = 0;
        let g = 0;
        let b = 0;
        let c = 0;
        for (let dy = -1; dy <= 1; dy++) {
          const yy = y + dy;
          if (yy < 0 || yy >= h) continue;
          for (let dx = -1; dx <= 1; dx++) {
            const xx = x + dx;
            if (xx < 0 || xx >= w) continue;
            const q = yy * w + xx;
            if (!known[q]) continue;
            r += buf[q * 4];
            g += buf[q * 4 + 1];
            b += buf[q * 4 + 2];
            c++;
          }
        }
        if (!c) continue;
        buf[p * 4] = Math.round(r / c);
        buf[p * 4 + 1] = Math.round(g / c);
        buf[p * 4 + 2] = Math.round(b / c);
        next[p] = 1;
        changed++;
      }
    }
    known = next;
    if (!changed) break;
  }
  return buf;
}

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox", "--ignore-gpu-blocklist", "--enable-webgl"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "load" });
  await sleep(400);
  await page.evaluate(() => document.querySelector('[data-consent-banner]:not([hidden]) [data-consent-action="reject-all"]')?.click());
  await page.evaluate(() => document.querySelector("[data-bte3d-stage]").scrollIntoView({ block: "center" }));
  await page.waitForFunction(() => document.querySelector("[data-bte3d]")?.bteViewer?.state === "ready", { timeout: 60000 });
  await sleep(600);
  // Çizim döngüsü istenen görünümde durdurulur; bekleyen kare varsa bitmesi beklenir.
  await page.evaluate((v) => document.querySelector("[data-bte3d]").bteViewer.setView(v.az, v.tilt, 1), VIEW);
  await sleep(500);
  const shots = await page.evaluate(
    async (v, ratio) => {
      const threeUrl = performance
        .getEntriesByType("resource")
        .map((e) => e.name)
        .find((n) => /\/deps\/three\.js(\?|$)/.test(n));
      if (!threeUrl) throw new Error("three.js modülü bulunamadı: bu betik yalnızca `astro dev` ile çalışır (preview/derleme ile değil).");
      const T = await import(threeUrl);
      const root = document.querySelector("[data-bte3d]");
      const canvas = root.querySelector("canvas");
      // three.js her çizimin başında sahnenin onBeforeRender'ını çağırır; görüntüleyicinin sahnesi buradan alınır.
      let cap = null;
      const proto = T.Scene.prototype;
      const prev = proto.onBeforeRender;
      proto.onBeforeRender = function (renderer, scene) {
        if (scene.background && scene.environment) cap = { renderer, scene };
      };
      root.bteViewer.setView(v.az, v.tilt, 1);
      proto.onBeforeRender = prev;
      if (!cap) throw new Error("görüntüleyicinin sahnesine erişilemedi");
      const { renderer, scene } = cap;
      let floor = null;
      scene.traverse((o) => {
        if (o.isMesh && o.geometry && o.geometry.type === "PlaneGeometry") floor = o;
      });
      if (!floor) throw new Error("zemin gölgesi düzlemi bulunamadı");
      floor.visible = false; // hero'nun kendi (CSS) gölgesi vardır
      renderer.setPixelRatio(ratio);
      const out = {};
      for (const [key, hex] of [
        ["black", 0x000000],
        ["white", 0xffffff],
      ]) {
        scene.background = new T.Color(hex);
        root.bteViewer.setView(v.az, v.tilt, 1); // eşzamanlı çizer; arabellek aynı görevde okunur
        out[key] = canvas.toDataURL("image/png");
      }
      out.info = { three: T.REVISION, pixelRatio: renderer.getPixelRatio(), canvas: [canvas.width, canvas.height] };
      return out;
    },
    VIEW,
    RATIO,
  );
  await browser.close();
  if (shots.info.pixelRatio !== RATIO) throw new Error("çizim yoğunluğu çekim sırasında değişti");

  const dec = (d) => sharp(Buffer.from(d.split(",")[1], "base64")).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const kb = await dec(shots.black);
  const kw = await dec(shots.white);
  const W = kb.info.width;
  const H = kb.info.height;
  const K = kb.data;
  const L = kw.data;
  // Fon gerçekten düz siyah / düz beyaz mı (dört köşe)?
  for (const [x, y] of [
    [2, 2],
    [W - 3, 2],
    [2, H - 3],
    [W - 3, H - 3],
  ]) {
    const i = (y * W + x) * 3;
    if (K[i] | K[i + 1] | K[i + 2] || (L[i] & L[i + 1] & L[i + 2]) !== 255) throw new Error(`fon düz değil (${x},${y})`);
  }
  // alfa = 1 − min(beyaz − siyah); renk, BEYAZ fon üzerindeki görünümü birebir verecek şekilde çözülür.
  const rgba = Buffer.alloc(W * H * 4);
  let minX = W;
  let minY = H;
  let maxX = -1;
  let maxY = -1;
  for (let i = 0, j = 0, p = 0; p < W * H; i += 3, j += 4, p++) {
    let t = Math.min(L[i] - K[i], L[i + 1] - K[i + 1], L[i + 2] - K[i + 2]);
    if (t < 0) t = 0;
    let a = 255 - t;
    if (a <= 1) continue;
    if (a >= 254) a = 255;
    const tt = 255 - a;
    const k = 255 / a;
    rgba[j] = Math.max(0, Math.min(255, Math.round((L[i] - tt) * k)));
    rgba[j + 1] = Math.max(0, Math.min(255, Math.round((L[i + 1] - tt) * k)));
    rgba[j + 2] = Math.max(0, Math.min(255, Math.round((L[i + 2] - tt) * k)));
    rgba[j + 3] = a;
    const x = p % W;
    const y = (p - x) / W;
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  if (maxX < 0) throw new Error("cihaz bulunamadı (boş kare)");
  // Cihazı ortalayan 3:4 kutu
  const bw = maxX - minX + 1;
  const bh = maxY - minY + 1;
  const m = Math.round(bh * MARGIN);
  let boxH = bh + 2 * m;
  let boxW = Math.ceil(boxH * ASPECT);
  if (boxW < bw + 2 * m) {
    boxW = bw + 2 * m;
    boxH = Math.ceil(boxW / ASPECT);
  }
  const left = Math.round((minX + maxX + 1) / 2 - boxW / 2);
  const top = Math.round((minY + maxY + 1) / 2 - boxH / 2);
  if (left < 0 || top < 0 || left + boxW > W || top + boxH > H) throw new Error("cihaz tuvalin kenarına çok yakın; kutu sığmıyor");
  const master = await sharp(rgba, { raw: { width: W, height: H, channels: 4 } })
    .extract({ left, top, width: boxW, height: boxH })
    .png()
    .toBuffer();
  const masterPath = path.join(masterDir, `${NAME}-master.png`); // tam çözünürlüklü, kayıpsız kopya (yayımlanmaz; kontrol içindir)
  fs.writeFileSync(masterPath, master);
  console.log(`three r${shots.info.three} · tuval ${W}×${H} · cihaz ${bw}×${bh} px · kutu ${boxW}×${boxH} px · ana kopya: ${masterPath}`);

  for (const w of WIDTHS) {
    const h = Math.round(w / ASPECT);
    const { data } = await sharp(master).resize(w, h, { fit: "fill", kernel: "lanczos3" }).raw().toBuffer({ resolveWithObject: true });
    const small = sharp(bleedEdges(data, w, h), { raw: { width: w, height: h, channels: 4 } });
    const avif = path.join(outDir, `${NAME}-${w}.avif`);
    const webp = path.join(outDir, `${NAME}-${w}.webp`);
    await small.clone().avif({ quality: 50, effort: 9, chromaSubsampling: "4:4:4" }).toFile(avif);
    await small.clone().webp({ quality: 80, alphaQuality: 85, effort: 6, smartSubsample: true }).toFile(webp);
    console.log(`${NAME}-${w}: ${w}×${h} px · avif ${(fs.statSync(avif).size / 1024).toFixed(1)} KB · webp ${(fs.statSync(webp).size / 1024).toFixed(1)} KB`);
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
