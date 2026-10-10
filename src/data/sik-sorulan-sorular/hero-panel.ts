// "Sorunuza hızlı ulaşın" paneli — SikSorulanSorularHero'nun sağ kolonu.
// Görsel değil, gezinme aracıdır: her satır bu sayfanın kendi bölümüne gider.
// Hedef id'ler ilgili bölüm bileşenlerinin gerçek başlık id'leridir:
//   brand-page-tech-title        -> BrandPageTechnology (use-cases.ts, "Hangi Konuda Sorunuz Var?")
//   brand-page-faq-title         -> BrandPageFaq (faq.ts)
//   ka-comparison-title          -> KulakArkasiComparison (comparison.ts)
//   brand-page-related-...-title -> BrandPageRelatedContent (related-content.ts); id,
//                                   başlıktan (domId) türetilir — başlık değişirse güncellenmeli.
// Yeni içerik iddiası yok: etiketler ilgili bölümlerin kendi başlıklarıdır.

export interface SikSorulanSorularHeroPanelLink {
  label: string;
  href: string;
}

export interface SikSorulanSorularHeroPanel {
  title: string;
  links: SikSorulanSorularHeroPanelLink[];
}

export const sikSorulanSorularHeroPanel: SikSorulanSorularHeroPanel = {
  title: "Sorunuza hızlı ulaşın",
  links: [
    { label: "Hangi Konuda Sorunuz Var?", href: "#brand-page-tech-title" },
    { label: "Genel Sorularınızın Yanıtları", href: "#brand-page-faq-title" },
    { label: "Telefon ile WhatsApp Karşılaştırması", href: "#ka-comparison-title" },
    { label: "Konuya Özel Sık Sorulan Sorular", href: "#brand-page-related-konuya-ozel-sik-sorulan-sorular-title" },
  ],
};
