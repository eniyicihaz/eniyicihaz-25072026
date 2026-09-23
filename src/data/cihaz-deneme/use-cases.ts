// "Cihaz Deneme Sürecinde Neler Test Edilir?" teaser grid for the
// /uygulama-ayar/cihaz-deneme page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here scoped to the concrete
// real-life scenarios covered during the trial.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const cihazDenemeUseCases: BrandPageTechnologyContent = {
  badge: "CİHAZ DENEME SÜRECİNDE NELER TEST EDİLİR",
  heading: "Cihaz Deneme Sürecinde Neler Test Edilir?",
  intro: "Deneme süresi boyunca değerlendirebileceğiniz gerçek yaşam senaryolarına daha yakından bakalım.",
  items: [
    {
      label: "EV ORTAMI",
      title: "Ev Ortamında Kullanım",
      description: "Televizyon izleme, aile içi sohbet gibi günlük ev ortamı senaryolarını test edebilirsiniz.",
    },
    {
      label: "İŞ / SOSYAL ORTAM",
      title: "İş veya Sosyal Ortamda Kullanım",
      description: "Toplantı, kalabalık ortam gibi iş veya sosyal yaşamınıza özgü senaryoları deneyimleyebilirsiniz.",
    },
    {
      label: "TELEFON GÖRÜŞMESİ",
      title: "Telefon Görüşmesi Deneyimi",
      description: "Telefon görüşmelerinde ses netliğinin sizin için nasıl olduğunu değerlendirebilirsiniz.",
    },
    {
      label: "DIŞARIDA / TRAFİK",
      title: "Dışarıda ve Trafik Ortamında Kullanım",
      description: "Sokak, trafik gibi değişken dış ortam seslerindeki performansı test edebilirsiniz.",
    },
    {
      label: "AİLE GERİ BİLDİRİMİ",
      title: "Aile ve Yakın Çevre Geri Bildirimi",
      description: "Aile üyelerinizin de deneyiminizi nasıl gözlemlediğini karar sürecine dahil edebilirsiniz.",
    },
    {
      label: "KARAR DESTEĞİ",
      title: "Satın Alma Kararı Desteği",
      description: "Deneme sonunda, gerçek deneyiminize dayanan bilinçli bir karar verme fırsatı bulursunuz.",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorHoverBorder: "rgb(13 148 136 / 0.5)",
};
