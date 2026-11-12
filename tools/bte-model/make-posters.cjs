// 3B görüntüleyicinin poster görsellerini CANLI sahneden üretir: başlangıç görünümünde WebGL tuvalinin tam pikselleri
// alınır (yeniden örnekleme yok). Böylece poster ile ilk canlı kare aynıdır ve model inince görüntü "zıplamaz".
// Model, malzeme, ışık veya sahne fonu değişirse posterler bu betikle YENİDEN üretilmelidir.
//
// Kullanım (bağımlılık projeye değil geçici bir klasöre kurulur; Chrome kurulu olmalıdır):
//   1) Projede:  npx astro build && npx astro preview --port 4321
//   2) Geçici klasörde:  npm init -y && npm i puppeteer-core
//      copy "<proje>\tools\bte-model\make-posters.cjs" .
//      node make-posters.cjs http://127.0.0.1:4321/isitme-cihazlari/kulak-arkasi-bte/ "<proje>"
//   3) Betiğin yazdığı boyutlar src/data/bte3d.ts içindeki posterWide / posterSquare ile aynı olmalı; değilse güncelleyin.
//
// Çıktı: <proje>/public/images/bte3d/bte-3d-poster-4x3.{avif,webp} ve bte-3d-poster-1x1.{avif,webp}
const path = require("path");
const fs = require("fs");
const puppeteer = require("puppeteer-core");

const [url, project] = process.argv.slice(2);
if (!url || !project) {
  console.error('kullanım: node make-posters.cjs <BTE sayfasının adresi> "<proje klasörü>"');
  process.exit(1);
}
const sharp = require(path.join(project, "node_modules", "sharp"));
const outDir = path.join(project, "public", "images", "bte3d");
const CHROME = process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// Geniş sahne: masaüstü (720×540 CSS px, 1,5× çizim). Kare sahne: dar ekran (≤ 640 px), 400 px sahne, 2× çizim.
const shots = [
  { name: "bte-3d-poster-4x3", vw: 1280, vh: 900, dpr: 1, mobile: false },
  { name: "bte-3d-poster-1x1", vw: 432, vh: 900, dpr: 2, mobile: true },
];
(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox", "--ignore-gpu-blocklist", "--enable-webgl"] });
  for (const s of shots) {
    const page = await browser.newPage();
    await page.setViewport({ width: s.vw, height: s.vh, deviceScaleFactor: s.dpr, isMobile: s.mobile, hasTouch: s.mobile });
    await page.goto(url, { waitUntil: "load" });
    await sleep(400);
    await page.evaluate(() => document.querySelector('[data-consent-banner]:not([hidden]) [data-consent-action="reject-all"]')?.click());
    await page.evaluate(() => document.querySelector("[data-bte3d-stage]").scrollIntoView({ block: "center" }));
    await page.waitForFunction(() => document.querySelector("[data-bte3d]")?.bteViewer?.state === "ready", { timeout: 60000 });
    await sleep(500);
    const data = await page.evaluate(() => {
      const r = document.querySelector("[data-bte3d]");
      r.bteViewer.setView(-32, 0, 1); // başlangıç görünümü (bte3d.client.js → VIEW0); eşzamanlı çizer
      return r.querySelector("canvas").toDataURL("image/png"); // arabellek aynı görevde okunur
    });
    await page.close();
    const png = Buffer.from(data.split(",")[1], "base64");
    const meta = await sharp(png).metadata();
    const avif = path.join(outDir, s.name + ".avif");
    const webp = path.join(outDir, s.name + ".webp");
    await sharp(png).avif({ quality: 62, effort: 8, chromaSubsampling: "4:4:4" }).toFile(avif);
    await sharp(png).webp({ quality: 84, effort: 6, smartSubsample: true }).toFile(webp);
    console.log(`${s.name}: ${meta.width}×${meta.height} px · avif ${(fs.statSync(avif).size / 1024).toFixed(1)} KB · webp ${(fs.statSync(webp).size / 1024).toFixed(1)} KB`);
  }
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
