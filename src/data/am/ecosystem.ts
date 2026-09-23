// Ecosystem deep-dive for the A&M brand page (/markalar/am) — geniş güç
// aralığı, kişiye özel üretim ve grup altyapısı. Renders through the
// shared BrandPageEcosystem component (Technology Explorer pattern).
// A&M'e özgü tescilli bir teknoloji seti bağımsız kaynaklarla
// doğrulanamadığından, bu bölüm ürün hattının somut/doğrulanmış
// unsurlarına odaklanır.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const amEcosystem: BrandPageEcosystemContent = {
  badge: "EKOSİSTEM REHBERİ",
  heading: "A&M Ürün Hattını Keşfedin",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "power-range",
      icon: "layers",
      navLabel: "Güç Aralığı",
      title: "XTM Güç Serisi Nedir?",
      lead: "P4'ten P12'ye kadar farklı işitme kaybı derecelerine uygun güç seviyeleri sunan model ailesi.",
      howItWorks:
        "Her güç seviyesi, farklı derecedeki işitme kayıplarına uygun amplifikasyon aralığı sunacak şekilde yapılandırılır; odyometrist, işitme testi sonucuna göre uygun seviyeyi belirler.",
      advantages: [
        "Hafif kayıptan ileri dereceye kadar geniş bir yelpazeyi kapsar",
        "İhtiyaca göre doğru güç seviyesinin seçilmesine imkân tanır",
        "Kulak arkası (BTE) yerleşiminde sunulur",
      ],
      models: ["XTM P4", "XTM P6", "XTM P8", "XTM P12"],
      expertNote: "Doğru güç seviyesi seçimi, işitme testi sonucuna göre odyometrist tarafından belirlenmelidir.",
    },
    {
      id: "custom-ite",
      icon: "dna",
      navLabel: "Kişiye Özel Üretim",
      title: "XTM A4 Kişiye Özel Üretim",
      lead: "Kulak yapınıza özel üretilen, kulak içi (ITE) yerleşimli model seçeneği.",
      howItWorks:
        "Kulak kalıbınızın ölçüsü alınarak, kulak kanalınıza özel üretilen bir cihaz hazırlanır.",
      advantages: [
        "Kulağınıza özel, kişiselleştirilmiş bir yerleşim sunar",
        "Kulak arkası parçası olmadan, daha sade bir görünüm sunar",
        "Günlük kullanım için pratik bir seçenektir",
      ],
      models: ["XTM A4"],
      expertNote: "Kulak içi modeller, kulak kanalı yapısına bağlı olarak her kullanıcıya uygun olmayabilir; değerlendirme gereklidir.",
    },
    {
      id: "group-infra",
      icon: "globe",
      navLabel: "Grup Altyapısı",
      title: "WS Audiology Grup Altyapısı",
      lead: "A&M, Signia, Widex ve Rexton ile aynı global grubun (WS Audiology) üretim ve mühendislik altyapısından yararlanır.",
      howItWorks:
        "Ürünler, WS Audiology'nin Bengaluru, Hindistan'daki üretim merkezinde, grup standartlarına uygun olarak geliştirilir ve üretilir.",
      advantages: [
        "Büyük bir global grubun mühendislik deneyiminden yararlanır",
        "Erişilebilir bir fiyat noktasında sunulmayı hedefler",
        "Geniş bir uluslararası dağıtım ağına sahiptir",
      ],
      models: ["XTM Serisi"],
      expertNote: "A&M, WS Audiology grubunun daha erişilebilir fiyat segmentine yönelik markalarından biridir.",
    },
  ],
  // Precomputed rgb() decomposition of #F3701A.
  accentColor: "#F3701A",
  accentColorBadgeBg: "rgb(243 112 26 / 0.08)",
  accentColorBadgeBorder: "rgb(243 112 26 / 0.35)",
  accentColorBadgeText: "#C25710",
  accentColorNavActiveBg: "rgb(243 112 26 / 0.1)",
  accentColorCalloutBg: "rgb(243 112 26 / 0.06)",
  accentColorCalloutLabel: "#C25710",
};
