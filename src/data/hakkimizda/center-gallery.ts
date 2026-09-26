// Darıca'daki Merkezimiz — CenterGallery verisi. 4 gerçek fotoğraf
// (danışma odası, bekleme alanı, işitme testi odası, cadde tabelası)
// tek bir editorial blokta.
import type { CenterGalleryContent } from "../../components/shared/CenterGallery/CenterGallery.astro";

export const hakkimizdaCenterGallery: CenterGalleryContent = {
  badge: "Merkezimiz",
  heading: "Darıca'daki Merkezimiz",
  paragraphs: [
    "Darıca'daki merkezimiz; danışan karşılama, işitme değerlendirmesi, cihaz uygulaması, kişiye özel ayar ve satış sonrası görüşmelerin yürütüldüğü fiziksel bir mekandır.",
    "Randevu alarak merkezimizi ziyaret edebilir, uzman ekibimizle yüz yüze görüşebilirsiniz.",
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
