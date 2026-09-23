// "Olumlu Değişimin Gözlemlendiği Alanlar" teaser grid for the
// /blog/basari-hikayeleri page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here covering general life-area
// categories distinct from the five in advantages.ts, to avoid
// duplication within the same page. No named/dated testimonials.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const basariHikayeleriUseCases: BrandPageTechnologyContent = {
  badge: "OLUMLU DEĞİŞİMİN GÖZLEMLENDİĞİ ALANLAR",
  heading: "Hangi Yaşam Alanlarında Fark Yaratabilir?",
  intro: "Kullanıcılarımızın paylaştığı genel gözlemlere göre öne çıkan birkaç yaşam alanı.",
  items: [
    {
      label: "TORUNLARLA BAĞ",
      title: "Torunlarla ve Küçük Çocuklarla İletişim",
      description: "Çocukların ince ve yüksek tondaki sesleri daha rahat takip edilebilir hale gelebiliyor.",
    },
    {
      label: "HOBİLER",
      title: "Müzik ve Hobilere Geri Dönüş",
      description: "Müzik dinlemek veya sosyal hobilerle uğraşmak yeniden keyifli hale gelebiliyor.",
    },
    {
      label: "GÜNLÜK ALIŞVERİŞ",
      title: "Günlük İşlerde Daha Rahat İletişim",
      description: "Markette, eczanede veya toplu taşımada konuşmaları takip etmek kolaylaşabiliyor.",
    },
    {
      label: "TELEFON GÖRÜŞMELERİ",
      title: "Telefon Görüşmelerini Takip Etme",
      description: "Telefonda konuşmaları anlamak, bağlantılı cihazlarla daha kolay hale gelebiliyor.",
    },
    {
      label: "TELEVİZYON İZLEME",
      title: "Televizyon ve Dizi İzlemenin Keyfi",
      description: "Sesi yükseltmeden diyalogları takip edebilmek, ev içi yaşam konforunu artırabiliyor.",
    },
    {
      label: "ÖZGÜVEN",
      title: "Sosyal Ortamlarda Artan Özgüven",
      description: "Konuşmaları kaçırma endişesinin azalması, sosyal ortamlarda daha rahat hissetmeye katkı sağlayabiliyor.",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorHoverBorder: "rgb(234 88 12 / 0.5)",
};
