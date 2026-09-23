// Technology teaser grid for the Vista brand page (/markalar/vista).
// Renders through the shared BrandPageTechnology component. "Soundsuite
// OS" and the "Vista V/B" tier names are real, documented Sonova/Vista
// names — verified via independent hearing-aid pricing/review sources.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const vistaTechnology: BrandPageTechnologyContent = {
  badge: "VISTA TEKNOLOJİLERİ",
  heading: "Vista'yı Farklı Kılan Yaklaşımlar",
  intro: "Vista'nın işitme cihazlarında kullandığı temel teknoloji ve kademelendirme yaklaşımları.",
  items: [
    {
      label: "OS",
      title: "Soundsuite OS Teknolojisi",
      description: "Sonova'nın güncel nesil ses işleme teknolojisini erişilebilir bir fiyat noktasında taşır.",
    },
    {
      label: "TIER",
      title: "Vista V / B Kademe Sistemi",
      description: "İhtiyaç ve bütçeye göre net bir seçim sunan kademelendirme yaklaşımı.",
    },
    {
      label: "BT",
      title: "Bluetooth Bağlantısı",
      description: "Akıllı telefonlarla kablosuz bağlantı kurabilen model seçenekleri sunar.",
    },
    {
      label: "INVISIBLE",
      title: "Görünmez Kulak İçi Seçenek",
      description: "Kulak kanalı içinde neredeyse görünmez bir yerleşim seçeneği sunar.",
    },
    {
      label: "CHARGE",
      title: "Şarjlı Seçenekler",
      description: "Lityum-iyon şarjlı modellerle günlük kullanım için pratik çözümler sunar.",
    },
    {
      label: "VALUE",
      title: "Sonova Güvencesi, Erişilebilir Fiyat",
      description: "Dünyanın en büyük işitme cihazı üreticisinin teknolojisini daha uygun bir fiyat noktasında sunar.",
    },
  ],
  // Precomputed rgb() decomposition of #E85D0A.
  accentColor: "#E85D0A",
  accentColorBadgeBg: "rgb(232 93 10 / 0.08)",
  accentColorBadgeBorder: "rgb(232 93 10 / 0.35)",
  accentColorBadgeText: "#B94708",
  accentColorHoverBorder: "rgb(232 93 10 / 0.5)",
};
