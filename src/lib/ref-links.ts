// Metin içi sayfa atıflarını gerçek iç bağlantıya çevirir.
//
// Sorun: yüzlerce veri alanında "…detaylı bilgi için Şarj Edilebilir Cihazlar sayfamızı inceleyebilirsiniz." gibi
// cümleler düz metindi; okur adı geçen sayfaya tıklayamıyordu (denetim: ~120 atıf, 84 veri dosyası).
// Çözüm: derlenmiş HTML'in <main> bölümünde, YALNIZCA "<Sayfa adı> sayfamız… / sayfalarımız…" kalıbında geçen ve
// sitedeki gerçek bir sayfanın adına birebir uyan ifadeler <a> ile sarılır. Yeni metin üretilmez, cümle değişmez.
//
// Güvenlik sınırları:
//  • Yalnızca <main>…</main> içi; <a>, <button>, <summary>, başlıklar (h1–h6), <script>, <style>, <label>, <option>
//    içindeki metne dokunulmaz (iç içe bağlantı / düğme metni bozulmaz).
//  • Sayfa kendi kendine bağlanmaz.
//  • Ad eşleşmesi büyük-küçük harf duyarlıdır ("diğer marka sayfalarımıza" ≠ "Markalar").
//  • JSON-LD (FAQPage vb.) <script> içinde olduğundan etkilenmez; yapılandırılmış veri metni aynen kalır.
import { ROUTES, normalizePath } from "../config/site-map";

// Metinlerde kullanılan, rota etiketinden farklı adlar → gerçek sayfa. Yalnızca tek anlamlı olanlar.
const ALIASES: Record<string, string> = {
  "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi": "/sgk-isitme-cihazi-odemesi/",
  "Rapor Süreci": "/sgk/rapor-sureci/",
  "Katkı Payı": "/sgk/katki-payi/",
  "Uzaktan Kontrol Özellikleri": "/teknolojiler/uzaktan-kontrol/",
  "Kablosuz Bağlantı Özellikleri": "/teknolojiler/kablosuz-baglanti/",
  "Gürültü Engelleme Teknolojisi": "/teknolojiler/gurultu-engelleme/",
  "Pil & Aksesuar": "/servis-bakim/pil-aksesuar/",
  "Servis & Bakım": "/servis-bakim/",
  "İşitme Kaybı Nedir": "/rehberler/isitme-kaybi-nedir/",
  Gebze: "/gebze-isitme-cihazlari/",
  Çayırova: "/cayirova-isitme-cihazlari/",
  Darıca: "/darica-isitme-cihazlari/",
  Kocaeli: "/kocaeli-isitme-cihazlari/",
};

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const reEsc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// HTML'de görünen biçim (& → &amp;) → yol. Uzun adlar önce denenir ("SGK İşitme Cihazı Ödemesi ve…" > "Katkı Payı").
const TARGETS = new Map<string, string>();
for (const r of ROUTES) if (r.path !== "/") TARGETS.set(esc(r.label), r.path);
for (const [label, path] of Object.entries(ALIASES)) TARGETS.set(esc(label), path);
const NAMES = [...TARGETS.keys()].sort((a, b) => b.length - a.length);
const NAME_ALT = NAMES.map(reEsc).join("|");

// "<Ad> sayfamız…"  veya  "<Ad> ve <Ad> sayfalarımız…" / "<Ad>, <Ad> ve <Ad> sayfalarımız…"
const BEFORE = "(?<![\\p{L}\\p{N}&;])";
const LIST = new RegExp(`${BEFORE}((?:${NAME_ALT})(?:(?:, | ve | veya )(?:${NAME_ALT}))*)(?= sayfa(?:mız|larımız))`, "gu");
const ONE = new RegExp(`(${NAME_ALT})`, "gu");

// Dokunulmayacak bloklar (içerikleriyle birlikte atlanır).
const SKIP = /<(a|button|summary|h[1-6]|script|style|label|option|textarea|svg|title)\b[^>]*>[\s\S]*?<\/\1>/gi;

function linkText(text: string, current: string): string {
  if (!text.includes(" sayfa")) return text;
  return text.replace(LIST, (list: string) =>
    list.replace(ONE, (name: string) => {
      const href = TARGETS.get(name);
      return href && href !== current ? `<a href="${href}" data-ref-link>${name}</a>` : name;
    }),
  );
}

/** <main> içindeki düz metin atıflarını bağlantıya çevirir; başka hiçbir şeyi değiştirmez. */
export function linkPageRefs(html: string, pathname: string): string {
  const start = html.indexOf("<main");
  const end = html.lastIndexOf("</main>");
  if (start < 0 || end < start) return html;
  const current = normalizePath(pathname);
  const main = html.slice(start, end);
  if (!main.includes(" sayfa")) return html;

  let out = "";
  let last = 0;
  SKIP.lastIndex = 0;
  const process = (chunk: string) =>
    // Yalnızca etiketler arasındaki metin düğümleri ( >metin< ); öznitelik değerlerine dokunulmaz.
    chunk.replace(/>([^<]+)</g, (_m, text: string) => `>${linkText(text, current)}<`);
  for (let m = SKIP.exec(main); m; m = SKIP.exec(main)) {
    out += process(main.slice(last, m.index)) + m[0];
    last = m.index + m[0].length;
  }
  out += process(main.slice(last));
  return html.slice(0, start) + out + html.slice(end);
}
