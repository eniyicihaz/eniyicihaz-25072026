// "Ne arıyorsunuz?" paneli — KnowledgeHero'nun sağ kolonu (/bilgi-merkezi).
// Görsel değil, gezinme aracıdır: her satır bu sayfanın kendi bölümüne gider.
// Hedef id'ler ilgili bölüm bileşenlerinin gerçek başlık id'leridir:
//   brand-showcase-title -> BrandShowcase  ("En Çok Okunan Rehberlerimiz")
//   brand-extended-title -> BrandExtended  ("Diğer Bilgi Merkezi Sayfalarımız")
//   brand-decision-title -> BrandDecision
//   brand-faq-title      -> BrandFaq
// Yeni içerik iddiası yok; yalnızca bölümlere yönlendirme etiketleri.

export interface KnowledgeHeroPanelLink {
  label: string;
  href: string;
  /** KnowledgeHero içinde bir lucide ikonuna eşlenir. */
  icon: "guides" | "sgk-blog" | "match" | "faq";
}

export interface KnowledgeHeroPanel {
  title: string;
  links: KnowledgeHeroPanelLink[];
}

export const knowledgeHeroPanel: KnowledgeHeroPanel = {
  title: "Ne arıyorsunuz?",
  links: [
    { label: "Rehberler", href: "#brand-showcase-title", icon: "guides" },
    { label: "SGK ve Blog sayfaları", href: "#brand-extended-title", icon: "sgk-blog" },
    { label: "Size uygun içerik", href: "#brand-decision-title", icon: "match" },
    { label: "Merak edilenler", href: "#brand-faq-title", icon: "faq" },
  ],
};
