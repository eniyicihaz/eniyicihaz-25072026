// "Kendinize Sorabileceğiniz Sorular" teaser grid for the /rehberler/
// cihaz-secim-rehberi page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here scoped to practical
// self-reflection questions rather than product features.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const cihazSecimRehberiUseCases: BrandPageTechnologyContent = {
  badge: "KENDİNİZE SORABİLECEĞİNİZ SORULAR",
  heading: "Seçim Sürecinde Kendinize Sorabileceğiniz Sorular",
  intro: "Karar verirken kendinize sorabileceğiniz pratik sorulara daha yakından bakalım.",
  items: [
    {
      label: "DERECE VE TİP",
      title: "İşitme Kaybımın Derecesi ve Türü Nedir?",
      description: "İşitme testi sonucunuz, hangi güç aralığındaki modellerin değerlendirileceğini belirler.",
    },
    {
      label: "GÜNLÜK ORTAM",
      title: "En Çok Hangi Ortamlarda Vakit Geçiriyorum?",
      description: "Sessiz, gürültülü veya sosyal ortamlar, öncelikli özellik setini şekillendirir.",
    },
    {
      label: "BÜTÇE VE SGK",
      title: "Bütçem Nedir ve SGK Desteğinden Yararlanabilir Miyim?",
      description: "Bütçeniz ve SGK durumunuz, değerlendirilecek segmenti belirlemenize yardımcı olur.",
    },
    {
      label: "FORM FAKTÖRÜ",
      title: "Hangi Yerleşim Tipini Tercih Ederim?",
      description: "Kulak arkası veya kulak içi gibi tercihleriniz konfor ve estetik beklentinizi yansıtır.",
    },
    {
      label: "BAĞLANTI İHTİYACI",
      title: "Telefonuma Bağlanabilen Bir Cihaz İster Miyim?",
      description: "Bluetooth bağlantısı gibi özellikler, günlük kullanım kolaylığını artırabilir.",
    },
    {
      label: "EL BECERİSİ",
      title: "Küçük Parçaları Rahatça Kullanabiliyor Muyum?",
      description: "Pil değişimi veya küçük düğmeler, el becerisi açısından tercih edilecek modeli etkileyebilir.",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorHoverBorder: "rgb(234 88 12 / 0.5)",
};
