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
    "Değişim koşulları satın almadan önce net olarak belirlendiğinde süreç güvenilir ve öngörülebilir olur.",
    "Paralel ithal veya kaynağı belirsiz satışlarda ise değişim koşulları belirsiz olabilir; bu yüzden değişim imkânını satın almadan önce sormak önemlidir.",
    "Değişim sürecinin kapsamı ve koşulları; ürünün durumuna, kullanım süresine ve satış koşullarına göre değişebilir.",
  ],
  stats: [
    { value: "Net Koşullar", label: "Değişim Güvencesi" },
    { value: "Deneme Sonrası Değerlendirme", label: "İlk Fırsat" },
    { value: "İhtiyaç Değişikliği Desteği", label: "Uzun Vadeli Esneklik" },
    { value: "Üretici Garanti Koşulları", label: "Değişim Çerçevesi" },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
};
