// "Hizmet sürecimiz" paneli — ServicesHero'nun sağ kolonu (/hizmetlerimiz).
// Dekoratif görsel değil, gezinme aracıdır: her adım bu sayfanın kendi bölümüne gider.
// Adım açıklamaları yalnızca sayfadaki gerçek hizmet adlarından derlenir (showcase.ts ve
// extended.ts); yeni bir hizmet veya vaat içermez. Hedef id'ler bileşenlerin gerçek başlık id'leridir:
//   brand-showcase-title -> BrandShowcase (Değerlendirme)
//   brand-extended-title -> BrandExtended (Uygulama & Ayar + Servis & Bakım)
//   brand-decision-title -> BrandDecision
// Renk eşlemesi extended kartlarla aynıdır: Değerlendirme = mavi, Uygulama ve ayar = turkuaz,
// Servis ve bakım = amber.

export type ServicesHeroStepTone = "assess" | "apply" | "care";

export interface ServicesHeroStep {
  tone: ServicesHeroStepTone;
  title: string;
  text: string;
  href: string;
}

export interface ServicesHeroPanel {
  title: string;
  steps: ServicesHeroStep[];
  link: { label: string; href: string };
}

export const servicesHeroPanel: ServicesHeroPanel = {
  title: "Hizmet sürecimiz",
  steps: [
    {
      tone: "assess",
      title: "Değerlendirme",
      text: "Ücretsiz işitme testi, odyometri, timpanometri ve işitme danışmanlığı.",
      href: "#brand-showcase-title",
    },
    {
      tone: "apply",
      title: "Uygulama ve ayar",
      text: "Cihaz uygulama, kişiye özel programlama, kalıp alımı ve uzaktan ayar.",
      href: "#brand-extended-title",
    },
    {
      tone: "care",
      title: "Servis ve bakım",
      text: "Teknik servis, periyodik bakım, cihaz temizliği ve garanti işlemleri.",
      href: "#brand-extended-title",
    },
  ],
  link: { label: "Size uygun hizmeti belirleyin", href: "#brand-decision-title" },
};
