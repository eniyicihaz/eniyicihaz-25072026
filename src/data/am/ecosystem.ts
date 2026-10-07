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
      id: "teknik-servis",
      icon: "globe",
      navLabel: "Teknik Servis",
      title: "Merkezimizde A&M Teknik Servisi",
      lead: "Sattığımız 18 markanın tamamında olduğu gibi A&M cihazları için de Darıca'daki merkezimizde teknik servis veriyoruz.",
      howItWorks:
        "Cihazınız merkezimizde incelenir; teknik serviste teslim 3 gün içindedir ve ücret cihazın durumuna göre belirlenir.",
      advantages: [
        "A&M cihazları için merkezimizde teknik servis",
        "Erişilebilir bir fiyat noktasında sunulmayı hedefler",
        "Garanti işlemleri ücretsizdir",
      ],
      models: ["XTM Serisi"],
      expertNote: "Servis randevusu için bizi arayabilirsiniz.",
    },
  ],
  // Precomputed rgb() decomposition of #F3701A.
  accentColor: "#F3701A",
  accentColorBadgeBg: "rgb(243 112 26 / 0.08)",
  accentColorBadgeBorder: "rgb(243 112 26 / 0.35)",
  accentColorBadgeText: "#A34A0C",
  accentColorNavActiveBg: "rgb(243 112 26 / 0.1)",
  accentColorCalloutBg: "rgb(243 112 26 / 0.06)",
  accentColorCalloutLabel: "#A34A0C",
};
