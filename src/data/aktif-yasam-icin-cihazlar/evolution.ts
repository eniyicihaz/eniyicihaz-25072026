// "Aktif Yaşam İçin Hangi Özellikler Önceliklendirilir?" section for the
// /ihtiyaciniza-gore/aktif-yasam-icin-cihazlar page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — repurposed here, same
// technique as the Yaşlılar İçin Cihazlar page, as an ordered set of
// practical feature priorities for this need group, each pointing
// toward the relevant deep-dive item in this page's own Ecosystem
// section below.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const aktifYasamIcinCihazlarEvolution: BrandPageTechEvolutionContent = {
  badge: "ÖNCELİKLİ ÖZELLİKLER",
  heading: "Aktif Yaşam İçin Hangi Özellikler Önceliklendirilir?",
  intro: "İhtiyaca göre değişmekle birlikte, aktif kullanıcılarda sıkça öne çıkan dört özellik grubunu bir araya getirdik.",
  stages: [
    {
      era: "Güvenli Oturma Tasarımı",
      whatItBrought: "İnce kancalar veya özel tutucular, cihazın hareket sırasında yerinde kalmasına yardımcı olabilir.",
      bestFor: "Düzenli spor yapan kullanıcılar",
      families: ["Güvenli Oturmalı Modeller"],
    },
    {
      era: "Yüksek IP Koruma Sınıfı",
      whatItBrought: "Ter, nem ve toza karşı dayanıklılık sağlayan koruma sınıfları, aktif kullanım için değerlendirilebilir.",
      bestFor: "Nemli ortamlarda aktif olan kullanıcılar",
      families: ["Suya Dayanıklı Modeller"],
    },
    {
      era: "Rüzgar Gürültüsü Azaltma",
      whatItBrought: "Gelişmiş mikrofon teknolojileri, açık havada rüzgar kaynaklı gürültüyü azaltmaya yardımcı olabilir.",
      bestFor: "Açık havada aktif olan kullanıcılar",
      families: ["Rüzgar Gürültüsü Azaltmalı Modeller"],
    },
    {
      era: "Hızlı Şarj ve Uzun Pil Ömrü",
      whatItBrought: "Kısa sürede yüksek şarj seviyesine ulaşan sistemler, yoğun bir günü tamamlamaya yardımcı olabilir.",
      bestFor: "Sık seyahat eden veya yoğun tempolu kullanıcılar",
      families: ["Hızlı Şarj Özellikli Modeller"],
    },
  ],
  accentColor: "#4b5563",
  accentColorBadgeBg: "rgb(75 85 99 / 0.08)",
  accentColorBadgeBorder: "rgb(75 85 99 / 0.35)",
  accentColorBadgeText: "#374151",
};
