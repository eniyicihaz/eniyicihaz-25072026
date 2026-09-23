// "Nasıl Yardım Alırsınız?" section for the /blog/sik-sorulan-sorular
// page. Reuses the shared BrandPageTechEvolution component in its
// original "stage" sense (era / what it brought / who it's for / tags)
// — repurposed here as the general support-seeking sequence.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const sikSorulanSorularEvolution: BrandPageTechEvolutionContent = {
  badge: "NASIL YARDIM ALIRSINIZ?",
  heading: "Sorunuza Nasıl Yanıt Bulabilirsiniz?",
  intro: "Sorunuza en hızlı şekilde yanıt bulmak için izleyebileceğiniz dört adımı bir araya getirdik.",
  stages: [
    {
      era: "Bu Sayfayı İnceleyin",
      whatItBrought: "Randevu, süreç ve hizmet bölgesi gibi genel sorularınızın yanıtını bu sayfada bulabilirsiniz.",
      bestFor: "Genel sorular",
      families: ["Genel SSS"],
    },
    {
      era: "Konuya Özel Sayfaya Geçin",
      whatItBrought: "SGK, cihaz seçimi veya servis gibi konularda derinlemesine bilgi için ilgili sayfamıza yönlendirilirsiniz.",
      bestFor: "Derinlemesine bilgi",
      families: ["Konuya Özel Sayfa"],
    },
    {
      era: "Bizi Arayın veya Yazın",
      whatItBrought: "Yanıtını bulamadığınız sorularınızı telefon veya WhatsApp üzerinden doğrudan bize sorabilirsiniz.",
      bestFor: "Doğrudan iletişim",
      families: ["Telefon / WhatsApp"],
    },
    {
      era: "Randevunuzu Planlayın",
      whatItBrought: "Kişisel durumunuzu netleştirmek için size uygun bir randevu zamanı belirleriz.",
      bestFor: "Sürecin tamamlanması",
      families: ["Randevu"],
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
