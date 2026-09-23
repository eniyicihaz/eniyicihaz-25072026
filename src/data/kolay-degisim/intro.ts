// "Kolay Değişim Süreci Nedir ve Neden Önemlidir?" section for the
// /neden-orijinal/kolay-degisim page. Renders through the shared
// BrandPageIntro component. Same trust-topic genre as the five prior
// pages — no self-diagnosis disclaimer here since the subject is the
// exchange process itself, not a self-assessment; paragraph 4 states
// the practical scope caveat the page builds toward.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const kolayDegisimIntro: BrandPageIntroContent = {
  badge: "KOLAY DEĞİŞİM NEDİR?",
  heading: "Kolay Değişim Süreci Nedir ve Neden Önemlidir?",
  paragraphs: [
    "Kolay değişim, satın aldığınız cihazın beklentilerinizi karşılamaması, üretim kaynaklı bir sorun taşıması veya ihtiyaçlarınızın zamanla değişmesi durumunda başvurabileceğiniz şeffaf bir süreçtir.",
    "Orijinal ve yetkili kanaldan alınan cihazlarda değişim koşulları net bir şekilde belirlenmiştir; bu da sürecin güvenilir ve öngörülebilir olmasını sağlar.",
    "Paralel ithal veya yetkisiz kanallardan alınan ürünlerde ise böyle bir değişim güvencesi genellikle bulunmaz.",
    "Değişim sürecinin kapsamı ve koşulları; ürünün durumuna, kullanım süresine ve satış koşullarına göre değişebilir.",
  ],
  stats: [
    { value: "Net Koşullar", label: "Değişim Güvencesi" },
    { value: "Deneme Sonrası Değerlendirme", label: "İlk Fırsat" },
    { value: "İhtiyaç Değişikliği Desteği", label: "Uzun Vadeli Esneklik" },
    { value: "Yetkili Kanal Güvencesi", label: "Kaynak Güvenilirliği" },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
};
