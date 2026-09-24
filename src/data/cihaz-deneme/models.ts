// "Deneyebileceğiniz Cihaz Örnekleri" — redesign plan §1/§5, Bölüm
// "Markalar/Teknoloji". Renders through BrandPageModels, used sitewide
// for the first time — replaces the retired recommended-brands.ts plain
// link list with real product photos + feature badges, without
// flooding the page with the full brand catalog (only 4 curated,
// visually distinct models). Each card's href goes to that model's real
// brand page (see BrandPageModels.astro's own href fix — items without
// one still render as inert "#" cards, unchanged default).
import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

export const cihazDenemeModels: BrandPageModelsContent = {
  badge: "DENEYEBİLECEĞİNİZ CİHAZ ÖRNEKLERİ",
  heading: "Deneme Sürecinde Değerlendirilebilecek Modeller",
  intro: "Farklı teknoloji ve tasarım seçeneklerine sahip modellerden birkaç örnek.",
  ctaLabel: "Markayı İncele",
  items: [
    {
      slug: "signia-styletto",
      category: "Signia",
      name: "Signia Styletto",
      description: "İnce, göze çarpmayan tasarımıyla şarjlı bir seçenek.",
      tags: ["Şarjlı", "Kulak İçi"],
      image: "/images/signia/models/styletto.webp",
      href: "/markalar/signia",
    },
    {
      slug: "widex-smartric",
      category: "Widex",
      name: "Widex SmartRIC",
      description: "Bluetooth bağlantılı, doğal ses odaklı bir model.",
      tags: ["Bluetooth", "Şarjlı"],
      image: "/images/widex/models/smartric.webp",
      href: "/markalar/widex",
    },
    {
      slug: "resound-vivia",
      category: "ReSound",
      name: "ReSound Vivia",
      description: "Bluetooth bağlantı özellikleriyle öne çıkan bir seçenek.",
      tags: ["Bluetooth"],
      image: "/images/resound/models/vivia.webp",
      href: "/markalar/resound",
    },
    {
      slug: "oticon-intent",
      category: "Oticon",
      name: "Oticon Intent",
      description: "Yapay zekâ destekli, gelişmiş teknoloji beklentisi olan kullanıcılar için.",
      tags: ["AI", "Bluetooth"],
      image: "/images/oticon/models/intent.webp",
      href: "/markalar/oticon",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorHoverBorder: "rgb(13 148 136 / 0.4)",
  accentColorGlow: "rgb(13 148 136 / 0.22)",
  accentColorFocus: "rgb(13 148 136 / 0.5)",
};
