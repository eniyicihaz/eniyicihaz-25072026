// "Kalıp Alımında Neler Yapılır?" teaser grid for the /uygulama-ayar/
// kalip-alimi page. Renders through the shared BrandPageTechnology
// component (6-card grid), same technique every prior series'
// use-cases.ts uses, here scoped to the concrete steps performed during
// the impression appointment.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const kalipAlimiUseCases: BrandPageTechnologyContent = {
  badge: "KALIP ALIMINDA NELER YAPILIR",
  heading: "Kalıp Alımında Neler Yapılır?",
  intro: "Randevu sırasında gerçekleştirilen adımlara daha yakından bakalım.",
  items: [
    {
      label: "KULAK MUAYENESİ",
      title: "Kulak Kanalı Uygunluk Kontrolü",
      description: "İşlem öncesinde kulak kanalınız, kalıp alımına uygunluk açısından kontrol edilir.",
    },
    {
      label: "BLOKE ETME",
      title: "Güvenlik İçin Kulak Kanalı Bloke Etme",
      description: "Kalıp malzemesinin güvenli bir mesafede kalması için kulak kanalına küçük bir bariyer yerleştirilir.",
    },
    {
      label: "MALZEME ENJEKSİYONU",
      title: "Kalıp Malzemesinin Yerleştirilmesi",
      description: "Yumuşak bir malzeme, kulak kanalınızın ve kepçenizin şeklini alacak şekilde yerleştirilir.",
    },
    {
      label: "SERTLEŞME SÜRESİ",
      title: "Malzemenin Sertleşmesi",
      description: "Malzeme, kulak kanalınızın şeklini koruyacak kıvama gelene kadar birkaç dakika beklenir.",
    },
    {
      label: "LABORATUVAR ÜRETİMİ",
      title: "Kalıbın Laboratuvarda Üretilmesi",
      description: "Alınan ölçü, kişiye özel kulak kalıbı veya kulak içi kabuk üretimi için laboratuvara gönderilir.",
    },
    {
      label: "SON KONTROL",
      title: "Teslim Sonrası Uyum Kontrolü",
      description: "Kalıbınız teslim edildiğinde, kulağınıza uygun oturup oturmadığı birlikte kontrol edilir.",
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
  accentColorHoverBorder: "rgb(219 39 119 / 0.5)",
};
