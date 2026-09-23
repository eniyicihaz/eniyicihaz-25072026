// Hero content for the "Orijinal Aksesuar" page
// (/neden-orijinal/orijinal-aksesuar). Renders through the shared
// BrandPageHero component — same component every /isitme-cihazlari/*,
// /teknolojiler/*, /ihtiyaciniza-gore/* and /neden-orijinal/* page uses.
// Fourth page of the "Neden Orijinal" series (see header.data.ts's
// brandsMega second column), following Güvenilir Teknoloji, Uzun Ömürlü
// Cihazlar and Yaygın Servis Ağı. Same trust/authenticity content genre
// — this page's own angle is the everyday consumable/fit accessories
// (kulak ucu, cerumen filtresi, pil, şarj, streaming aksesuarları)
// rather than structural spare parts (already covered on Uzun Ömürlü
// Cihazlar) or the service network itself (already covered on Yaygın
// Servis Ağı).
//
// accentColor: eflatun / violet-600 (#7c3aed) — fourth color in the
// fresh accent rotation opened for this series on Güvenilir Teknoloji's
// hero.ts; see that file for the full rationale. Chosen for its
// premium/personal-accessory association, distinct from the three prior
// siblings' trust-blue, durability-emerald and support-orange.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const orijinalAksesuarHero: BrandPageHeroContent = {
  badge: "MARKALAR · NEDEN ORİJİNAL · ORİJİNAL AKSESUAR",
  headingLines: ["Orijinal Aksesuar", "Neden Önemlidir?"],
  paragraphs: [
    "Kulak uçlarından şarj kutusuna, cerumen filtrelerinden pillere kadar kullandığınız her aksesuar, cihazınızın performansını ve hijyenini doğrudan etkiler.",
    "Avrasya İşitme olarak, sunduğumuz markaların orijinal aksesuarlarını; doğru uyum, hijyen ve cihaz uyumluluğu garantisiyle sunuyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "DOĞRU UYUM",
      accent: "#7c3aed",
      title: "Cihazınızla Tam Uyumlu Aksesuarlar",
      description: "Orijinal aksesuarlar, cihazınızın modeline özel olarak tasarlanır ve tam uyum sağlar.",
    },
    {
      label: "HİJYEN",
      accent: "#6d28d9",
      title: "Hijyenik ve Güvenli Kullanım",
      description: "Orijinal kulak uçları ve filtreler, düzenli değişimle hijyenik bir kullanım sağlamaya yardımcı olur.",
    },
    {
      label: "PERFORMANS KORUMASI",
      accent: "#5b21b6",
      title: "Cihaz Performansını Korumaya Yardımcı Olur",
      description: "Uyumsuz aksesuarlar ses kalitesini ve performansı olumsuz etkileyebilir; orijinal aksesuarlar bu riski azaltır.",
    },
  ],
  image: {
    src: "/images/oticon/models/zircon.webp",
    alt: "Orijinal aksesuar ve yedek parça desteğiyle sunulan Oticon Zircon işitme cihazı görseli",
  },
  floatingCard: {
    title: "Oticon Zircon",
    description: "Orijinal aksesuar ve yedek parçalarla desteklenir.",
  },
  accentColor: "#7c3aed",
  accentColorHover: "#6d28d9",
  accentColorSoft: "rgb(124 58 237 / 0.12)",
  accentColorBorder: "rgb(124 58 237 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #1e1033 60%, #4c1d95 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#6d28d9",
  heroWaveOpacity: "0.18",
};
