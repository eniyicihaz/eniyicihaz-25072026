// "Teknik Servis Hangi Sorunları Kapsar?" teaser grid for the
// /servis-bakim/teknik-servis page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here scoped to the concrete
// malfunction types the service addresses.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const teknikServisUseCases: BrandPageTechnologyContent = {
  badge: "TEKNİK SERVİS HANGİ SORUNLARI KAPSAR",
  heading: "Teknik Servis Hangi Sorunları Kapsar?",
  intro: "Teknik servise sıkça başvurulan durumlara daha yakından bakalım.",
  items: [
    {
      label: "SES SORUNU",
      title: "Ses Kesintisi veya Bozukluğu",
      description: "Hiç ses gelmemesi veya bozuk/kesintili ses sorunları teknik servis kapsamında değerlendirilir.",
    },
    {
      label: "FİZİKSEL HASAR",
      title: "Düşme veya Darbe Sonrası Hasar",
      description: "Cihazın düşmesi veya darbe alması sonucu oluşan hasarlar incelenir.",
    },
    {
      label: "SU TEMASI",
      title: "Su veya Nem Teması",
      description: "Cihazın su veya aşırı nemle temas etmesi durumunda değerlendirme yapılır.",
    },
    {
      label: "BAĞLANTI SORUNU",
      title: "Bluetooth veya Uygulama Bağlantı Sorunu",
      description: "Basit adımlarla çözülemeyen kalıcı bağlantı sorunları teknik servise yönlendirilir.",
    },
    {
      label: "GÜÇ SORUNU",
      title: "Açılmama veya Şarj Olmama Sorunu",
      description: "Cihazın açılmaması veya şarj/pil sorunu yaşaması durumunda teşhis yapılır.",
    },
    {
      label: "GARANTİ DEĞERLENDİRMESİ",
      title: "Garanti Kapsamı Değerlendirmesi",
      description: "Sorununuzun garanti kapsamında olup olmadığı teknik servis süreciyle netleştirilir.",
    },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
  accentColorHoverBorder: "rgb(220 38 38 / 0.5)",
};
