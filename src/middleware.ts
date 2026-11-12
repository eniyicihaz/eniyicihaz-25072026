// Merkezî HTML son-işlemi (geliştirme ve statik derlemede aynı çalışır).
//
// 1) Sayfadaki YALIN WhatsApp bağlantılarına (`href="https://wa.me/<numara>"`) o sayfaya özel, önceden doldurulmuş
//    mesaj eklenir (`?text=…`). 680'den fazla bağlantı yüzlerce veri dosyasında dağınık olduğu için bu işi tek yerde
//    yapmak, numaraya ve mevcut bileşenlere dokunmadan tutarlılık sağlar. Metinler: src/lib/whatsapp.ts.
//     • Numara değişmez; zaten `?text=` taşıyan bağlantılar olduğu gibi kalır.
//     • JSON-LD / meta içindeki wa.me adresleri `href="…"` olmadığı için etkilenmez.
// 2) Ana içerikte "…<Sayfa adı> sayfamızı inceleyebilirsiniz" biçiminde geçen ve sitedeki gerçek bir sayfanın adına
//    birebir uyan düz metin atıfları iç bağlantıya çevrilir (src/lib/ref-links.ts). Cümle ve bilgi değişmez.
//
// HTML olmayan yanıtlara (sitemap, robots, görseller) dokunulmaz.
import { defineMiddleware } from "astro:middleware";
import { WA_BASE, whatsappUrlFor } from "./lib/whatsapp";
import { linkPageRefs } from "./lib/ref-links";

const PLAIN = `href="${WA_BASE}"`;

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const type = response.headers.get("content-type") ?? "";
  if (!type.includes("text/html")) return response;

  const html = await response.text();
  const path = context.url.pathname;
  let out = html.includes(PLAIN) ? html.split(PLAIN).join(`href="${whatsappUrlFor(path)}"`) : html;
  out = linkPageRefs(out, path);
  return new Response(out, { status: response.status, statusText: response.statusText, headers: response.headers });
});
