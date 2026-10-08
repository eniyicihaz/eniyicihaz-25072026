// Darıca'daki Merkezimiz — CenterGallery verisi. 4 gerçek fotoğraf
// (danışma odası, bekleme alanı, işitme testi odası, cadde tabelası)
// tek bir editorial blokta.
import type { CenterGalleryContent } from "../../components/shared/CenterGallery/CenterGallery.astro";

export const hakkimizdaCenterGallery: CenterGalleryContent = {
  badge: "Merkezimiz",
  heading: "Darıca'daki Merkezimiz",
  paragraphs: [
    "Darıca'daki merkezimiz; danışan karşılama, işitme değerlendirmesi, cihaz uygulaması, kişiye özel ayar ve satış sonrası görüşmelerin yürütüldüğü fiziksel bir mekandır.",
    "Merkezimizi ziyaret edebilir, ekibimizle yüz yüze görüşebilirsiniz.",
  ],
  featureImage: {
    src: "/images/pages/hakkimizda-danisma-odasi.webp",
    width: 1214,
    height: 1295,
    alt: "Darıca Avrasya İşitme Cihazları merkezinde danışma ve değerlendirme odası",
  },
  supportImages: [
    {
      src: "/images/pages/hakkimizda-bekleme-alani.webp",
      width: 1536,
      height: 1024,
      alt: "Darıca Avrasya İşitme Cihazları merkezinin bekleme alanı",
    },
    {
      src: "/images/pages/hakkimizda-isitme-testi-odasi.webp",
      width: 1537,
      height: 1023,
      alt: "Darıca Avrasya İşitme Cihazları merkezinde işitme testi odası",
    },
  ],
  locationImage: {
    src: "/images/pages/hakkimizda-tabela-cadde.webp",
    width: 1448,
    height: 1086,
    alt: "Darıca'da cadde üzerindeki Avrasya İşitme Cihazları tabelası",
  },
  locationCaption: "Merkezimiz Palandöken Eczanesi'nin üst katında, Farabi Devlet Hastanesi durağının karşısındadır.",
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
