// "Tinnitus Desteğiyle Neler Yapabilirsiniz?" teaser grid for the
// /teknolojiler/tinnitus-cozumleri page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique the BTE
// page's use-cases.ts uses for everyday-scenario coverage, here scoped to
// the different sound types and usage moments instead. Every description
// stays hedged ("yardımcı olabilir"), never a guarantee.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const tinnitusCozumleriUseCases: BrandPageTechnologyContent = {
  badge: "KULLANIM ALANLARI",
  heading: "Tinnitus Desteğiyle Neler Yapabilirsiniz?",
  intro: "Rahatlatıcı ses seçeneklerinin günlük yaşamın hangi anlarında fark yarattığına daha yakından bakalım.",
  items: [
    {
      label: "BEYAZ GÜRÜLTÜ",
      title: "Sabit ve Rahatlatıcı Bir Arka Plan Sesi Dinleyin",
      description: "Beyaz gürültü, çınlamanın fark edilme düzeyini azaltmaya yardımcı olabilecek sabit bir ses sunar.",
    },
    {
      label: "DOĞA SESLERİ",
      title: "Yağmur veya Dalga Sesleriyle Rahatlayın",
      description: "Doğa temalı sesler, bazı kullanıcılar için daha keyifli bir rahatlama seçeneği sunar.",
    },
    {
      label: "FRAKTAL TONLAR",
      title: "Değişken Fraktal Tonları Deneyimleyin",
      description: "Öngörülemeyen desenlerle çalan fraktal tonlar, bazı kullanıcılarda dikkat dağıtmaya yardımcı olabilir.",
    },
    {
      label: "GECE KULLANIMI",
      title: "Sessiz Ortamlarda Ek Rahatlama Sağlayın",
      description: "Gece veya sessiz ortamlarda hafif ses üretimi, rahatlamaya yardımcı olabilir.",
    },
    {
      label: "UYGULAMA KONTROLÜ",
      title: "İhtiyaç Anında Açıp Kapatın",
      description: "Ses üretecini telefonunuzdan istediğiniz an açıp kapatabilirsiniz.",
    },
    {
      label: "KOMBİNE KULLANIM",
      title: "İşitme Desteğiyle Birlikte Kullanın",
      description: "Aynı cihaz, hem işitme desteği hem de rahatlatıcı ses sunabilir.",
    },
  ],
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
  accentColorHoverBorder: "rgb(147 51 234 / 0.5)",
};
