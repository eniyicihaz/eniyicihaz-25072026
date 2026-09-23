// "Yaşlı Kullanıcılar İçin Hangi Özellikler Önceliklendirilir?" section
// for the /ihtiyaciniza-gore/yaslilar-icin-cihazlar page. Reuses the
// shared BrandPageTechEvolution component in its original "stage" sense
// (era / what it brought / who it's for / tags) — repurposed here not as
// a severity or laterality axis, but as an ordered set of practical
// feature priorities for this need group, each pointing toward the
// relevant deep-dive item in this page's own Ecosystem section below.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const yaslilarIcinCihazlarEvolution: BrandPageTechEvolutionContent = {
  badge: "ÖNCELİKLİ ÖZELLİKLER",
  heading: "Yaşlı Kullanıcılar İçin Hangi Özellikler Önceliklendirilir?",
  intro: "İhtiyaca göre değişmekle birlikte, yaşlı kullanıcılarda sıkça öne çıkan dört özellik grubunu bir araya getirdik.",
  stages: [
    {
      era: "Kolay Kullanım Tasarımı",
      whatItBrought: "Büyük düğmeler, basit menüler ve az sayıda ayar seçeneği günlük kullanımı kolaylaştırmaya yardımcı olabilir.",
      bestFor: "Karmaşık ayarlarla uğraşmak istemeyen kullanıcılar",
      families: ["Kolay Kullanımlı Modeller"],
    },
    {
      era: "Şarj Edilebilir Sistemler",
      whatItBrought: "Küçük pilleri değiştirme zorluğunu ortadan kaldıran, gece boyu şarj edilebilen sistemler sıkça tercih edilir.",
      bestFor: "El becerisiyle ilgili zorluk yaşayan kullanıcılar",
      families: ["Şarj Edilebilir Modeller"],
    },
    {
      era: "Aile Destekli Uzaktan Ayar",
      whatItBrought: "Bazı üreticilerin sunduğu uzaktan destek sistemleri, aile bireylerinin veya uzmanın uzaktan ayar yapmasına imkan tanır.",
      bestFor: "Kliniğe sık gelmekte zorlanan kullanıcılar",
      families: ["RemoteCare Sistemleri"],
    },
    {
      era: "Otomatik Ortam Algılama",
      whatItBrought: "Cihaz, bulunduğu ortamı otomatik olarak algılayıp ayarlarını buna göre uyarlayabilir; manuel ayar ihtiyacını azaltmaya yardımcı olur.",
      bestFor: "Manuel ayarlarla uğraşmak istemeyen kullanıcılar",
      families: ["Otomatik Ortam Algılamalı Modeller"],
    },
  ],
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
};
