// "Etkinliklerimize Nasıl Katılabilirsiniz?" section for the
// /blog/etkinlikler page. Reuses the shared BrandPageTechEvolution
// component in its original "stage" sense (era / what it brought / who
// it's for / tags) — repurposed here as the general event-participation
// process. No specific dates — see hero.ts for the rationale.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const etkinliklerEvolution: BrandPageTechEvolutionContent = {
  badge: "SÜRECİN ADIMLARI",
  heading: "Etkinliklerimize Nasıl Katılabilirsiniz?",
  intro: "Bir etkinliğimize katılmak veya işbirliği talep etmek için izleyebileceğiniz dört adımı bir araya getirdik.",
  stages: [
    {
      era: "Bizi Arayın veya Yazın",
      whatItBrought: "Telefon veya WhatsApp üzerinden bize ulaşarak güncel etkinlik takvimimizi sorabilirsiniz.",
      bestFor: "Sürecin ilk adımı",
      families: ["İlk İletişim"],
    },
    {
      era: "Etkinlik veya İşbirliği Talebinin Netleştirilmesi",
      whatItBrought: "Katılmak istediğiniz etkinlik türü veya talep ettiğiniz işbirliği birlikte netleştirilir.",
      bestFor: "İhtiyacın belirlenmesi",
      families: ["Talep Netleştirme"],
    },
    {
      era: "Tarih ve Yer Bilgisinin Paylaşılması",
      whatItBrought: "Planlanan etkinliğin tarihi, yeri ve kapsamı size açık bir şekilde anlatılır.",
      bestFor: "Şeffaf bilgilendirme",
      families: ["Etkinlik Detayları"],
    },
    {
      era: "Etkinliğe Katılım",
      whatItBrought: "Belirlenen tarihte etkinliğe katılarak bilgilendirmeden veya değerlendirmeden faydalanabilirsiniz.",
      bestFor: "Sürecin tamamlanması",
      families: ["Katılım"],
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
