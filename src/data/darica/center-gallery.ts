// Darıca landing page — Darıca'daki Gerçek Merkezimiz. 4 gerçek fotoğraf
// (danışma odası, bekleme alanı, işitme testi odası, cadde tabelası) —
// Hero'da kullanılan resepsiyon fotoğrafından FARKLI, tekrar yok (plan
// onayı, görsel kuralı §7). /hakkimizda'nın CenterGallery verisiyle aynı
// gerçek fotoğrafları ve doğru alt metinlerini kullanıyor (aynı gerçek
// mekan, aynı doğru açıklama — tekrar değil, doğruluk).
import type { CenterGalleryContent } from "../../components/shared/CenterGallery/CenterGallery.astro";

export const daricaCenterGallery: CenterGalleryContent = {
  badge: "Merkezimiz",
  heading: "Darıca'daki Gerçek Merkezimiz",
  paragraphs: [
    "Darıca'daki merkezimiz; karşılama, işitme değerlendirmesi, cihaz uygulaması ve kişiye özel ayarın yapıldığı fiziksel bir mekandır.",
    "Gebze ve Çayırova'dan gelen danışanlarımız da merkezimize kolayca ulaşabilir.",
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
