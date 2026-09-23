// Hero content for the SGK pillar page (/sgk-isitme-cihazi-odemesi).
// This is the future SGK content hub — its own data namespace,
// independent of the Oticon page's M1...M8 modules and of the
// /markalar hub. Only the Hero exists so far; the page will grow into a
// full pillar page (SGK katkı payı, rapor süreci, gerekli belgeler,
// çocuklarda SGK, yenileme hakkı, SSS) in later passes.
//
// Every keyword phrase below (SGK işitme cihazı ödemesi, SGK katkı
// payı, işitme cihazı devlet desteği, işitme cihazı raporu, SGK
// anlaşmalı işitme merkezi, işitme cihazı SGK desteği) is worked into
// natural sentences — no stuffing, no invented numbers or percentages,
// no claims beyond what's already established elsewhere on this site
// (free hearing test, SGK-affiliated status, expert audiometrist
// support — see COMPANY.md).

export interface SgkHeroTrustItem {
  title: string;
  description: string;
}

export interface SgkHeroContent {
  badge: string;
  heading: string;
  intro: string;
  trustItems: SgkHeroTrustItem[];
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
  image: { src: string; alt: string; width: number; height: number };
  floatingCard: { title: string; description: string };
}

export const sgkHero: SgkHeroContent = {
  badge: "SGK Anlaşmalı İşitme Merkezi",
  heading: "2026 SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
  intro:
    "İşitme cihazı raporu sürecinden gerekli belgelere, çocuklarda SGK hakkından cihaz yenileme sürecine kadar merak ettiğiniz her şeyi bu rehberde bulabilirsiniz. Uzman odyometristlerimizle işitme cihazı SGK desteğinden en doğru şekilde faydalanmanız için yanınızdayız.",
  trustItems: [
    {
      title: "SGK Katkı Payı",
      description: "Devlet destekli ödeme süreci hakkında bilgi alın.",
    },
    {
      title: "Ücretsiz İşitme Testi",
      description: "Uzman odyometristlerle değerlendirme yapılır.",
    },
    {
      title: "Aynı Gün Başvuru",
      description: "Hızlı ve kolay bir süreçle yanınızdayız.",
    },
  ],
  ctaPrimaryLabel: "Hemen Ara",
  ctaSecondaryLabel: "WhatsApp'tan Yaz",
  image: {
    src: "/images/pages/sgk-isitme-cihazi.webp",
    alt: "SGK anlaşmalı işitme merkezinde odyometrist eşliğinde işitme cihazı değerlendirmesi",
    width: 1414,
    height: 1113,
  },
  floatingCard: {
    title: "SGK Anlaşmalı Merkez",
    description: "İşitme cihazı devlet desteğinden faydalanın.",
  },
};
