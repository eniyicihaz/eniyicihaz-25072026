// "Kalıp Alımı Süreci Nasıl İşler?" section for the /uygulama-ayar/
// kalip-alimi page. Reuses the shared BrandPageTechEvolution component
// in its original "stage" sense (era / what it brought / who it's for /
// tags) — repurposed here as an ordered set of impression-taking and
// fabrication steps, same technique used throughout this session's
// service pages.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const kalipAlimiEvolution: BrandPageTechEvolutionContent = {
  badge: "SÜREÇ ADIMLARI",
  heading: "Kalıp Alımı Süreci Nasıl İşler?",
  intro: "Kulak muayenesinden kalıbın teslimine kadar izlenen beş adımlık süreci bir araya getirdik.",
  stages: [
    {
      era: "Kulak Muayenesi",
      whatItBrought: "İşlem öncesinde kulak kanalınız, kalıp alımına uygunluk açısından kontrol edilir.",
      bestFor: "Sürecin ilk adımı",
      families: ["Otoskopi"],
    },
    {
      era: "Kulak Kanalı Bloke Etme",
      whatItBrought: "Kalıp malzemesinin kulak zarına ulaşmasını önlemek için kulak kanalına küçük bir bariyer yerleştirilir.",
      bestFor: "Güvenlik önlemi",
      families: ["Bloke Etme"],
    },
    {
      era: "Kalıp Malzemesi Enjeksiyonu",
      whatItBrought: "Yumuşak bir kalıp malzemesi, kulak kanalınıza ve kulak kepçenizin şekline uygun şekilde yerleştirilir.",
      bestFor: "Ölçü alımı",
      families: ["Kalıp Malzemesi"],
    },
    {
      era: "Sertleşme ve Çıkarma",
      whatItBrought: "Malzeme birkaç dakika içinde sertleşir ve kulak kanalınızın şeklini koruyarak nazikçe çıkarılır.",
      bestFor: "Ölçünün sabitlenmesi",
      families: ["Sertleşme Süresi"],
    },
    {
      era: "Laboratuvara Gönderim ve Üretim",
      whatItBrought: "Alınan kalıp, kişiye özel kulak kalıbı veya kulak içi kabuk üretimi için laboratuvara gönderilir.",
      bestFor: "Sürecin tamamlanması",
      families: ["Laboratuvar Üretimi"],
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
