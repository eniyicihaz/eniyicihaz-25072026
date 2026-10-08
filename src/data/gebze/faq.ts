// Gebze landing page — SSS (Faz 2 P2, Gebze V1). 5 soru 3'e indirildi.
// Ulaşım (hat/tarif) ve deneme soruları çıkarıldı: ulaşım kendi bölümünde,
// deneme kanonik sayfada (/uygulama-ayar/cihaz-deneme/). Kalan 3 soru:
// şube durumu, randevu kuralı, evde hizmet kapsamı.
// Kaynak: LOCAL_SOURCE_OF_TRUTH §1/§2/§3 (tek fiziksel merkez Darıca; walk-in
// kabul + hizmet bazında randevu birlikte), SERVICE_SOURCE_OF_TRUTH H16
// (evde hizmet: ücretsiz, randevulu, Kocaeli'nin tamamı ve İstanbul Anadolu
// Yakası; merkezde verilen hizmetlerin kapsamı doğrultusunda).
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const gebzeFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Gebze'den Gelenlerin Sık Sorduğu Sorular",
  intro: "Şube, randevu ve evde hizmet hakkında kısa cevaplar.",
  categories: [
    {
      label: "Merkez ve Hizmet",
      items: [
        {
          question: "Gebze'de şubeniz var mı?",
          answer:
            "Hayır. Tek fiziksel merkezimiz Darıca'dadır; Gebze'den gelen danışanlarımızı Darıca'daki merkezimizde ağırlıyoruz. Yol tarifi ve hat bilgileri bu sayfadaki ulaşım bölümünde.",
        },
        {
          question: "Gebze'den gelirken randevu gerekir mi?",
          answer:
            "Randevusuz gelebilirsiniz. Yine de işitme testi, cihaz ayarı ve teknik servis gibi hizmetler randevuyla verildiği için, bu hizmetlerden biri için geliyorsanız önceden aramanız iyi olur.",
        },
        {
          question: "Gebze'de evde hizmet veriyor musunuz?",
          answer:
            "Evet. Evde hizmetimiz Kocaeli'nin tamamını kapsar; Gebze de bu alandadır. Hizmet ücretsizdir ve randevuyla planlanır; merkezde verdiğimiz hizmetlerin kapsamı doğrultusunda sunulur.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
