// "Uyum Sürecinde Sık Yaşanan Deneyimler" teaser grid for the
// /rehberler/uyum-sureci page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here scoped to common adaptation
// experiences rather than product features.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const uyumSureciUseCases: BrandPageTechnologyContent = {
  badge: "UYUM SÜRECİNDE SIK YAŞANAN DENEYİMLER",
  heading: "Uyum Sürecinde Sık Yaşanan Deneyimler",
  intro: "Birçok kullanıcının uyum sürecinde yaşadığı ortak deneyimlere daha yakından bakalım.",
  items: [
    {
      label: "KENDİ SESİ",
      title: "Kendi Sesinin Farklı Gelmesi",
      description: "Birçok yeni kullanıcı, ilk günlerde kendi sesini farklı veya yankılı algılayabilir.",
    },
    {
      label: "ARKA PLAN GÜRÜLTÜSÜ",
      title: "Arka Plan Gürültüsüne Duyarlılık",
      description: "Buzdolabı uğultusu gibi sesler ilk günlerde daha belirgin fark edilebilir.",
    },
    {
      label: "DİNLEME YORGUNLUĞU",
      title: "Gün Sonunda Dinleme Yorgunluğu",
      description: "Beyin yeni bilgi işlemeye çalıştığından, ilk günlerde hafif bir yorgunluk hissedilebilir.",
    },
    {
      label: "SESLERİ YENİDEN ÖĞRENME",
      title: "Unutulmuş Sesleri Yeniden Tanıma",
      description: "Uzun süredir duyulmayan bazı sesler, yeniden tanıdık gelmeye başlar.",
    },
    {
      label: "SOSYAL ORTAM GÜVENİ",
      title: "Sosyal Ortamlarda Artan Özgüven",
      description: "Zamanla, kalabalık ortamlarda konuşmaları takip etme konusunda daha rahat hissedilebilir.",
    },
    {
      label: "UZUN VADELİ MEMNUNİYET",
      title: "Zamanla Artan Memnuniyet",
      description: "Süreç ilerledikçe, cihazdan alınan genel memnuniyet düzeyi artma eğilimindedir.",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
  accentColorHoverBorder: "rgb(124 58 237 / 0.5)",
};
