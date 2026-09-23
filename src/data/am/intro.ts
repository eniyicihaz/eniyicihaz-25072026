// Brand story for the A&M brand page (/markalar/am). Renders through the
// shared BrandPageIntro component. WS Audiology grup ilişkisi ve
// Hindistan üretim merkezi bilgisi bağımsız kaynaklarla doğrulanmıştır;
// yayından önce son bir insan kontrolü önerilir.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const amIntro: BrandPageIntroContent = {
  badge: "A&M MARKASI",
  heading: "A&M Hearing Hakkında",
  paragraphs: [
    "A&M Hearing, dünyanın en büyük işitme teknolojisi gruplarından biri olan WS Audiology'nin (Signia, Widex ve Rexton'ın da içinde bulunduğu grup) bir markasıdır.",
    "Ürünler, Sivantos India Private Limited'e bağlı Bengaluru, Hindistan'daki üretim merkezinde geliştirilir ve üretilir.",
    "A&M'in XTM serisi, farklı güç seviyelerinde (P4'ten P12'ye) ve kulak içi (A4) seçeneklerinde sunularak, grup teknolojisini daha erişilebilir bir fiyat noktasında sunmayı hedefler.",
  ],
  stats: [
    { value: "WS Audiology", label: "Bağlı Olduğu Grup" },
    { value: "Bengaluru, Hindistan", label: "Üretim Merkezi" },
    { value: "XTM", label: "Öne Çıkan Seri" },
    { value: "P4–P12 / A4", label: "Güç ve Yerleşim Seçenekleri" },
  ],
  // Precomputed rgb() decomposition of #F3701A.
  accentColor: "#F3701A",
  accentColorBadgeBg: "rgb(243 112 26 / 0.08)",
  accentColorBadgeBorder: "rgb(243 112 26 / 0.35)",
  accentColorBadgeText: "#C25710",
};
