// "Rapor Sürecinde Kullanılan Değerlendirme Yöntemleri" teaser grid for
// the /sgk/rapor-sureci page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here scoped to the real audiological
// tests that feed into the sağlık kurulu raporu — cross-references the
// real Odyometri and Timpanometri pages by name (not by link; this
// component is text-only) without duplicating their content.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const raporSureciUseCases: BrandPageTechnologyContent = {
  badge: "RAPOR SÜRECİNDE KULLANILAN YÖNTEMLER",
  heading: "Raporunuzun Temelini Oluşturan Değerlendirmeler",
  intro: "Sağlık kurulu raporu, aşağıdaki değerlendirme yöntemlerinin sonuçlarına dayanılarak düzenlenir.",
  items: [
    {
      label: "SAF SES ODYOMETRİSİ",
      title: "Odyometri Testi",
      description: "İşitme kaybınızın derecesini ve frekans bazında profilini belirleyen temel test.",
    },
    {
      label: "KONUŞMA ODYOMETRİSİ",
      title: "Konuşma Anlama Testi",
      description: "Günlük konuşmaları ne düzeyde anlayabildiğinizi ölçer.",
    },
    {
      label: "ORTA KULAK DEĞERLENDİRMESİ",
      title: "Timpanometri Testi",
      description: "Orta kulağın basınç ve hareket kabiliyetini değerlendirir.",
    },
    {
      label: "KLİNİK MUAYENE",
      title: "KBB Uzman Muayenesi",
      description: "Kulak yapınızın ve genel işitme sağlığınızın hekim tarafından değerlendirilmesi.",
    },
    {
      label: "ANAMNEZ",
      title: "Tıbbi Geçmiş Değerlendirmesi",
      description: "İşitme kaybınızın süresi ve olası nedenleri hakkında bilgi toplanır.",
    },
    {
      label: "HEYET DEĞERLENDİRMESİ",
      title: "Sağlık Kurulu İncelemesi",
      description: "Tüm test sonuçları, hastanenin sağlık kurulu tarafından bir arada değerlendirilir.",
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
  accentColorHoverBorder: "rgb(8 145 178 / 0.5)",
};
