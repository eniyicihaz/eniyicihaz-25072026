// "Cihaz Uygulama Randevusunda Neler Yapılır?" teaser grid for the
// /uygulama-ayar/cihaz-uygulama page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here scoped to the concrete steps
// performed during the appointment.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const cihazUygulamaUseCases: BrandPageTechnologyContent = {
  badge: "CİHAZ UYGULAMA RANDEVUSUNDA NELER YAPILIR",
  heading: "Cihaz Uygulama Randevusunda Neler Yapılır?",
  intro: "Randevu sırasında gerçekleştirilen adımlara daha yakından bakalım.",
  items: [
    {
      label: "FİZİKSEL YERLEŞTİRME",
      title: "Fiziksel Yerleştirme Kontrolü",
      description: "Cihazın veya kulak kalıbının kulağınıza uygun oturduğu kontrol edilir.",
    },
    {
      label: "İLK PROGRAMLAMA",
      title: "Odyograma Dayalı İlk Programlama",
      description: "Cihaz, işitme test sonuçlarınıza göre kişiselleştirilerek programlanır.",
    },
    {
      label: "DOĞRULAMA ÖLÇÜMÜ",
      title: "Ayarların Doğrulanması",
      description: "Gerekli görüldüğünde ayarlar bir ölçümle doğrulanır.",
    },
    {
      label: "ORTAM SENARYOLARI",
      title: "Farklı Ortam Senaryolarında Deneme",
      description: "Sessiz ve gürültülü ortamlarda cihazın verdiği tepki birlikte değerlendirilir.",
    },
    {
      label: "KULLANIM EĞİTİMİ",
      title: "Kullanım ve Bakım Eğitimi",
      description: "Takma, çıkarma, temizlik ve pil/şarj kullanımı konusunda bilgilendirilirsiniz.",
    },
    {
      label: "TAKİP PLANLAMASI",
      title: "Takip Randevusu Planlaması",
      description: "Alışma sürecinizdeki geri bildiriminize göre bir takip randevusu planlanır.",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorHoverBorder: "rgb(37 99 235 / 0.5)",
};
