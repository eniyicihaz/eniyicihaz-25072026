// Homepage's own "Darıca'daki Gerçek Merkezimiz" data (own spec:
// docs/CENTER_NETWORK_SPECIFICATION.md), rendered through the existing,
// shared CenterGallery.astro (no new component for the photo half — spec
// §7). Same 4 real photos already used on /hakkimizda and
// /darica-isitme-cihazlari (public/images/pages/hakkimizda-*.webp) — no new
// image produced. Feature paragraph reuses the Darıca landing page's own
// locked definition sentence verbatim (GEO non-contradiction,
// SEARCH_STRATEGY.md §9 — the same discipline already used between the
// homepage Hero and /iletisim).
import type { CenterGalleryContent } from "../../components/shared/CenterGallery/CenterGallery.astro";

export const homeCenterGallery: CenterGalleryContent = {
  badge: "Merkezimiz",
  heading: "Darıca'daki Gerçek Merkezimiz",
  paragraphs: [
    "Darıca'daki merkezimiz; karşılama, işitme değerlendirmesi, cihaz uygulaması ve kişiye özel ayarın yapıldığı fiziksel bir mekandır.",
    "2009'dan beri aynı ekiple, aynı adreste hizmet veriyoruz.",
  ],
  featureImage: {
    src: "/images/pages/hakkimizda-danisma-odasi.webp",
    alt: "Darıca Avrasya İşitme Cihazları merkezinde danışma ve değerlendirme odası",
  },
  supportImages: [
    {
      src: "/images/pages/hakkimizda-bekleme-alani.webp",
      alt: "Darıca Avrasya İşitme Cihazları merkezinin bekleme alanı",
    },
    {
      src: "/images/pages/hakkimizda-isitme-testi-odasi.webp",
      alt: "Darıca Avrasya İşitme Cihazları merkezinde işitme testi odası",
    },
  ],
  locationImage: {
    src: "/images/pages/hakkimizda-tabela-cadde.webp",
    alt: "Darıca'da cadde üzerindeki Avrasya İşitme Cihazları tabelası",
  },
  locationCaption: "Cadde üzerinde, kolay bulunabilir bir konumdayız.",
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
