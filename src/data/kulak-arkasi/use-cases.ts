// "Kullanım Alanları" teaser grid for the /isitme-cihazlari/
// kulak-arkasi-bte page. Renders through the shared BrandPageTechnology
// component (6-card grid), reused here for everyday use-case coverage
// instead of technology items.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const kulakArkasiUseCases: BrandPageTechnologyContent = {
  badge: "KULLANIM ALANLARI",
  heading: "Günlük Hayatta Kulak Arkası (BTE) Kullanımı",
  intro: "BTE cihazların günlük yaşamın hangi anlarında fark yarattığına daha yakından bakalım.",
  items: [
    {
      label: "EV İÇİ",
      title: "Ev İçi ve Aile Ortamı",
      description: "Televizyon, telefon görüşmeleri ve aile içi sohbetlerde daha net iletişim sağlar.",
    },
    {
      label: "İŞ HAYATI",
      title: "Toplantılar ve İş Ortamı",
      description: "Toplantı odalarında ve ofis ortamında konuşmaları takip etmeyi kolaylaştırır.",
    },
    {
      label: "SOSYAL ORTAM",
      title: "Kalabalık ve Sosyal Ortamlar",
      description: "Gürültü azaltma özellikli modeller, restoran ve davet gibi ortamlarda konuşmayı öne çıkarmaya yardımcı olur.",
    },
    {
      label: "AKTİF YAŞAM",
      title: "Spor ve Dış Mekân Aktiviteleri",
      description: "Sağlam gövdesi ve aksesuar seçenekleriyle hareketli yaşam tarzına uyum sağlar.",
    },
    {
      label: "EĞİTİM",
      title: "Okul ve Eğitim Ortamı",
      description: "Öğretmen mikrofonu gibi Bluetooth destekli sistemlerle sınıf ortamında dinlemeyi destekler.",
    },
    {
      label: "SEYAHAT",
      title: "Seyahat ve Yolculuk",
      description: "Uzun pil ömrü ve kolay şarj imkânıyla seyahat sırasında kesintisiz kullanım sunar.",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorHoverBorder: "rgb(37 99 235 / 0.5)",
};
