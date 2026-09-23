// "Cihaz Temizliğinde Nelere Dikkat Edilir?" teaser grid for the
// /servis-bakim/cihaz-temizligi page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here scoped to concrete daily-care
// practices.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const cihazTemizligiUseCases: BrandPageTechnologyContent = {
  badge: "CİHAZ TEMİZLİĞİNDE NELERE DİKKAT EDİLİR",
  heading: "Cihaz Temizliğinde Nelere Dikkat Edilir?",
  intro: "Günlük bakım rutininizde dikkat edebileceğiniz pratik noktalara daha yakından bakalım.",
  items: [
    {
      label: "YUMUŞAK BEZ",
      title: "Yumuşak, Kuru Bezle Silme",
      description: "Cihazın dış yüzeyi, yalnızca kuru ve yumuşak bir bezle silinmelidir.",
    },
    {
      label: "KULAK UCU KONTROLÜ",
      title: "Kulak Ucunda Görünür Kir Kontrolü",
      description: "Kulak ucunda veya kalıpta görünür kir varsa, önerilen araçla nazikçe temizlenir.",
    },
    {
      label: "KURU SAKLAMA",
      title: "Gece Boyunca Kuru Saklama",
      description: "Cihaz, gece boyunca kuru ve havadar bir kutuda saklanmalıdır.",
    },
    {
      label: "NEMDEN KORUMA",
      title: "Nemli Ortamlardan Uzak Tutma",
      description: "Cihaz, banyo gibi nemli ortamlarda bırakılmamalıdır.",
    },
    {
      label: "YASAKLI MALZEMELER",
      title: "Su, Alkol ve Kimyasallardan Kaçınma",
      description: "Cihaz asla su, alkol veya kimyasal temizleyicilerle temizlenmemelidir.",
    },
    {
      label: "NE ZAMAN DESTEK GEREKİR",
      title: "Sorun Devam Ederse Klinik Desteği",
      description: "Temizlik sonrası sorun devam ediyorsa, Periyodik Bakım veya Teknik Servis değerlendirilebilir.",
    },
  ],
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0284c7",
  accentColorHoverBorder: "rgb(14 165 233 / 0.5)",
};
