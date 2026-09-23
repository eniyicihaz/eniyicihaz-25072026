// Technology teaser grid for the Signia brand page (/markalar/signia) —
// short, 6-item overview (see SIGNIA MASTER BLUEPRINT §9.4). Renders
// through the shared BrandPageTechnology component.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const signiaTechnology: BrandPageTechnologyContent = {
  badge: "SIGNIA TEKNOLOJİLERİ",
  heading: "Signia'yı Farklı Kılan Teknolojiler",
  intro: "Signia'nın işitme cihazlarında kullandığı temel teknoloji yaklaşımları.",
  items: [
    {
      label: "VOICE",
      title: "Own Voice Processing",
      description: "Kullanıcının kendi sesini daha doğal ve rahatsız etmeyen şekilde işler.",
    },
    {
      label: "AI CHIP",
      title: "Entegre Yapay Zekâ Çipi",
      description: "Arka plan gürültüsünü ve konuşmayı gerçek zamanlı olarak ayırt etmeye yardımcı olur.",
    },
    {
      label: "ASSISTANT",
      title: "Signia Assistant",
      description: "Uygulama üzerinden kişiselleştirilmiş ses ayarı ve destek imkânı sunar.",
    },
    {
      label: "CHARGE",
      title: "Şarjlı Sistemler",
      description: "Lityum-iyon şarjlı modellerle günlük kullanım için pratik çözümler sunar.",
    },
    {
      label: "DESIGN",
      title: "Modern Tasarım",
      description: "Styletto gibi ince, moda odaklı tasarımlarla estetik önceliklendiren kullanıcılara hitap eder.",
    },
    {
      label: "TINNITUS",
      title: "Kulak Çınlaması Desteği",
      description: "Uygun modellerde, kulak çınlamasını (tinnitus) rahatlatmaya yönelik ek ses terapisi özellikleri sunar.",
    },
  ],
  // Signia brand theme revision (2026-07): bordo (#B21F4B).
  accentColor: "#B21F4B",
  accentColorBadgeBg: "rgb(178 31 75 / 0.12)",
  accentColorBadgeBorder: "rgb(178 31 75 / 0.35)",
  accentColorBadgeText: "#B21F4B",
  accentColorHoverBorder: "rgb(178 31 75 / 0.5)",
};
