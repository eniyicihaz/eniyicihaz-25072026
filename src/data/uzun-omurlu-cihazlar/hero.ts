// Hero content for the "Uzun Ömürlü Cihazlar" page
// (/neden-orijinal/uzun-omurlu-cihazlar). Renders through the shared
// BrandPageHero component — same component every /isitme-cihazlari/*,
// /teknolojiler/*, /ihtiyaciniza-gore/* and /neden-orijinal/* page uses.
// Second page of the "Neden Orijinal" series (see header.data.ts's
// brandsMega second column), following Güvenilir Teknoloji. Same trust/
// authenticity content genre — device longevity as a direct consequence
// of buying original, authorized-channel products with genuine parts
// and proper maintenance support.
//
// accentColor: zümrüt yeşili / emerald-600 (#059669) — second color in
// this fresh accent rotation for the brandsMega "Neden Orijinal" column
// (see guvenilir-teknoloji/hero.ts for why this rotation doesn't need to
// avoid devicesMega's already-used hues; within this series itself, each
// sibling still gets its own distinct color since these pages do share a
// dropdown column). Chosen deliberately for its durability/longevity
// association, distinct from Güvenilir Teknoloji's trust-blue (#1d4ed8).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const uzunOmurluCihazlarHero: BrandPageHeroContent = {
  badge: "MARKALAR · NEDEN ORİJİNAL · UZUN ÖMÜRLÜ CİHAZLAR",
  headingLines: ["Uzun Ömürlü Cihazlar", "Neyle Mümkün Olur?"],
  paragraphs: [
    "Orijinal işitme cihazları; kaliteli bileşenler, düzenli bakım ve orijinal yedek parça desteğiyle uzun yıllar güvenilir bir şekilde kullanılabilir.",
    "Avrasya İşitme olarak sunduğumuz orijinal cihazlar, üretici garantisi ve yetkili teknik servis desteğiyle uzun ömürlü bir kullanım deneyimi sunar.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "KALİTELİ BİLEŞENLER",
      accent: "#059669",
      title: "Orijinal Parçalar Daha Uzun Dayanır",
      description: "Orijinal cihazlarda kullanılan sertifikalı bileşenler, taklit parçalara kıyasla daha uzun ömürlüdür.",
    },
    {
      label: "DÜZENLİ BAKIM",
      accent: "#047857",
      title: "Periyodik Bakım Cihaz Ömrünü Uzatır",
      description: "Düzenli temizlik ve kontrol, cihazın performansını uzun süre korumasına yardımcı olur.",
    },
    {
      label: "YEDEK PARÇA DESTEĞİ",
      accent: "#065f46",
      title: "Orijinal Yedek Parça Her Zaman Temin Edilebilir",
      description: "Yetkili kanaldan alınan cihazlarda orijinal yedek parçalara uzun yıllar erişim sağlanabilir.",
    },
  ],
  image: {
    src: "/images/phonak/models/virto.webp",
    alt: "Kaliteli bileşenleri ve kişiye özel üretimiyle uzun ömürlü kullanım sunan orijinal Phonak Virto işitme cihazı görseli",
  },
  floatingCard: {
    title: "Phonak Virto",
    description: "Kişiye özel üretim, uzun ömürlü kullanım için tasarlanır.",
  },
  accentColor: "#059669",
  accentColorHover: "#047857",
  accentColorSoft: "rgb(5 150 105 / 0.12)",
  accentColorBorder: "rgb(5 150 105 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(5,150,105,0.35) 0%, rgba(5,150,105,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #052e21 60%, #065f46 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#047857",
  heroWaveOpacity: "0.18",
};
