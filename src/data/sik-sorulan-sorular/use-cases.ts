// "Konu Başlıklarına Göre Sorular" teaser grid for the
// /blog/sik-sorulan-sorular page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here summarizing the broad FAQ
// categories and where to find depth on each (text-only; the real
// cross-links live in related-content.ts).

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const sikSorulanSorularUseCases: BrandPageTechnologyContent = {
  badge: "KONU BAŞLIKLARINA GÖRE SORULAR",
  heading: "Hangi Konuda Sorunuz Var?",
  intro: "Aşağıdaki kategoriler, en çok soru aldığımız konu başlıklarını özetler.",
  items: [
    {
      label: "RANDEVU VE İLETİŞİM",
      title: "Randevu Nasıl Alınır?",
      description: "Telefon veya WhatsApp üzerinden randevu talep edebilir, size uygun bir zaman belirleyebiliriz.",
    },
    {
      label: "SGK VE ÖDEME",
      title: "SGK Desteğinden Nasıl Yararlanırım?",
      description: "SGK süreci, katkı payı ve gerekli belgeler hakkında SGK & Haklar sayfalarımızı inceleyebilirsiniz.",
    },
    {
      label: "CİHAZ SEÇİMİ",
      title: "Hangi Cihaz Bana Uygun?",
      description: "İşitme kaybınıza ve yaşam tarzınıza uygun cihazı seçerken Cihaz Seçim Rehberi sayfamız yol gösterir.",
    },
    {
      label: "SERVİS VE BAKIM",
      title: "Cihazımın Bakımı Nasıl Yapılır?",
      description: "Periyodik bakım, temizlik ve teknik servis konularında Servis & Bakım sayfalarımızı inceleyebilirsiniz.",
    },
    {
      label: "UYUM SÜRECİ",
      title: "Cihaza Nasıl Alışırım?",
      description: "Yeni cihaza alışma sürecinin nasıl işlediğini Uyum Süreci sayfamızdan öğrenebilirsiniz.",
    },
    {
      label: "GARANTİ VE DEĞİŞİM",
      title: "Garanti Kapsamı Nedir?",
      description: "Garanti işlemleri ve kolay değişim hakkı hakkında ilgili sayfalarımızı inceleyebilirsiniz.",
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
  accentColorHoverBorder: "rgb(2 132 199 / 0.5)",
};
