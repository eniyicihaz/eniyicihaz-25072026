// "Kablosuz Bağlantı Özellikleriyle Neler Yapabilirsiniz?" teaser grid
// for the /teknolojiler/kablosuz-baglanti page. Renders through the
// shared BrandPageTechnology component (6-card grid), same technique the
// BTE page's use-cases.ts uses for everyday-scenario coverage, here
// scoped to telecoil/Roger/NFMI-specific scenarios instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const kablosuzBaglantiUseCases: BrandPageTechnologyContent = {
  badge: "KULLANIM ALANLARI",
  heading: "Kablosuz Bağlantı Özellikleriyle Neler Yapabilirsiniz?",
  intro: "Kablosuz bağlantı protokollerinin günlük yaşamın hangi anlarında fark yarattığına daha yakından bakalım.",
  items: [
    {
      label: "TİYATRO VE SİNEMA",
      title: "Döngü Sistemli Salonlarda Net Ses Alın",
      description: "Telesarmal döngü sistemi bulunan tiyatro ve sinemalarda sesi doğrudan cihazınıza alabilirsiniz.",
    },
    {
      label: "İBADETHANE",
      title: "Cami ve Kiliselerde Vaazı Net Duyun",
      description: "Telesarmal sistemi bulunan ibadethanelerde konuşmayı doğrudan cihaza aktarabilirsiniz.",
    },
    {
      label: "OKUL",
      title: "Sınıfta Öğretmeni Doğrudan Dinleyin",
      description: "Roger/FM verici mikrofonuyla öğretmenin sesini sınıf gürültüsünden etkilenmeden alabilirsiniz.",
    },
    {
      label: "TOPLANTI",
      title: "Geniş Salonlarda Konuşmacıyı Takip Edin",
      description: "Büyük toplantı salonlarında uzaktaki konuşmacının sesini doğrudan cihazınıza alabilirsiniz.",
    },
    {
      label: "TOPLU TAŞIMA",
      title: "Anons Sistemlerinden Faydalanın",
      description: "Telesarmal destekli anons sistemi bulunan bazı toplu taşıma araçlarında duyuruları daha net alabilirsiniz.",
    },
    {
      label: "GÜNLÜK YAŞAM",
      title: "İki Cihaz Arasında Kesintisiz Geçiş Yapın",
      description: "Kulaktan kulağa bağlantı, iki cihaz arasında tutarlı bir ses deneyimi sağlar.",
    },
  ],
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
  accentColorHoverBorder: "rgb(101 163 13 / 0.5)",
};
