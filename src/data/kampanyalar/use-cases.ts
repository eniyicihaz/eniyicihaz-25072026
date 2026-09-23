// "Kampanya Kategorileri" teaser grid for the /blog/kampanyalar page.
// Renders through the shared BrandPageTechnology component (6-card
// grid), same technique every prior series' use-cases.ts uses, here
// scoped to the general, conceptual campaign categories the clinic may
// run — deliberately no specific percentages, prices or dates,
// consistent with this page's accuracy discipline.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const kampanyalarUseCases: BrandPageTechnologyContent = {
  badge: "KAMPANYA KATEGORİLERİ",
  heading: "Düzenleyebileceğimiz Kampanya Kategorileri",
  intro: "Dönem dönem düzenlediğimiz kampanyalar genellikle aşağıdaki kategorilerden birine girer.",
  items: [
    {
      label: "YENİ KULLANICI",
      title: "Yeni Kullanıcı Kampanyaları",
      description: "İlk kez işitme cihazı alacak kullanıcılara yönelik özel avantajlar.",
    },
    {
      label: "AİLE PAKETİ",
      title: "Aile Paketi Kampanyaları",
      description: "Birden fazla aile üyesinin birlikte başvurması durumunda sunulan avantajlar.",
    },
    {
      label: "SEZONLUK",
      title: "Sezonluk Kampanyalar",
      description: "Yılın belirli dönemlerinde düzenlenen zamana bağlı kampanyalar.",
    },
    {
      label: "SADAKAT",
      title: "Sadakat Kampanyaları",
      description: "Mevcut kullanıcılarımıza yönelik yenileme ve bakım avantajları.",
    },
    {
      label: "DENEME",
      title: "Ücretsiz Deneme Fırsatları",
      description: "Cihazı satın almadan önce deneme imkânı sunan fırsatlar.",
    },
    {
      label: "SGK EK AVANTAJ",
      title: "SGK Destekli Alımlarda Ek Avantajlar",
      description: "SGK desteğiyle birlikte değerlendirilebilecek ek avantaj kampanyaları.",
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
  accentColorHoverBorder: "rgb(192 38 211 / 0.5)",
};
