// Hero content for the Oticon brand page (/markalar/oticon). This page is
// independent of the /markalar hub page's M1...M8 modules — its own data
// namespace, only ever holding this one brand's content.
//
// Layout/ratios are a direct reproduction of an approved reference design
// (o1.png). Copy reuses Oticon's own real, public technology names —
// BrainHearing® (Oticon's actual branded hearing philosophy) and its real
// model lines (Intent, Real, Own, Zeal) — no invented specs, numbers or
// claims beyond what Oticon itself publicly markets.

export interface OticonHeroFeature {
  label: string;
  accent: string;
  title: string;
  description: string;
}

export interface OticonHeroContent {
  badge: string;
  headingLines: string[];
  paragraphs: string[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  features: OticonHeroFeature[];
  image: { src: string; alt: string };
  floatingCard: { title: string; description: string };
  accentColor: string;
  accentColorHover: string;
}

export const oticonHero: OticonHeroContent = {
  badge: "OTICON BRAINHEARING®",
  headingLines: ["Oticon ile Sesleri", "Daha Doğal Duyun"],
  paragraphs: [
    "Oticon BrainHearing® teknolojisi sayesinde konuşmaları daha net duyun, gürültülü ortamlarda sesleri daha kolay ayırt edin.",
    "Intent, Real, Own SI, Zeal ve diğer Oticon modellerini Avrasya İşitme'de keşfedin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: "tel:+905337733199" },
  ctaSecondary: { label: "WhatsApp Yaz", href: "https://wa.me/905337733199" },
  features: [
    {
      label: "OTICON",
      accent: "#3b82f6",
      title: "BrainHearing®",
      description: "Beynin doğal ses işleme sürecini destekler.",
    },
    {
      label: "AI",
      accent: "#f59e0b",
      title: "Yapay Zeka",
      description: "Ortamı analiz ederek işitmeyi optimize eder.",
    },
    {
      label: "CLEAR VOICE",
      accent: "#ec4899",
      title: "Net Konuşma",
      description: "Gürültülü ortamlarda konuşmayı öne çıkarır.",
    },
  ],
  image: {
    src: "/images/pages/oticon-hero.webp",
    alt: "Oticon Intent işitme cihazı çifti",
  },
  floatingCard: {
    title: "BrainHearing®",
    description: "Beynin doğal çalışma şeklini destekler.",
  },
  accentColor: "#5fb85a",
  accentColorHover: "#4da349",
};
