// M1 (Hero) content for the "Bilgi Merkezi" hub page (/bilgi-merkezi) —
// the page the top-level nav's "Bilgi Merkezi" item links to, mirroring
// /markalar's role for the Markalar item. Renders through the
// now-generic BrandHero component (M1 of the shared hub-page module
// system; see src/components/brands/).
//
// Heading/description echo knowledgeMega's own promo copy ("İşitme
// Sağlığı Hakkında Her Şey") for consistency with the mega menu it's
// reached from.
//
// Hero image: Coselgi Mojo, a fresh model not yet used by any prior
// page this session (verified in public/images/coselgi/models/
// mojo.webp).

import type { BrandHeroContent } from "../../components/brands/BrandHero/BrandHero.astro";

export const knowledgeHero: BrandHeroContent = {
  badge: "20+ İçerik",
  headingLines: ["İşitme Sağlığı", "Hakkında", "Her Şey."],
  description: [
    "İşitme kaybından cihaz bakımına, SGK sürecinden güncel teknolojilere kadar merak ettiğiniz tüm konularda güvenilir bilgi kaynağınız.",
    "Genel bilgiler kişisel değerlendirmenin yerini tutmaz; kendi durumunuz için ücretsiz işitme testimizden faydalanabilirsiniz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: "tel:+905337733199" },
  ctaSecondary: { label: "WhatsApp", href: "https://wa.me/905337733199" },
  trustPills: [
    "Uzman Kaynaklı İçerik",
    "SGK Rehberleri",
    "Güncel Bilgilendirme",
    "Ücretsiz Danışmanlık",
  ],
  image: {
    src: "/images/coselgi/models/mojo.webp",
    alt: "Bilgi Merkezi içeriklerinde örnek olarak yer alan Coselgi Mojo işitme cihazı görseli",
  },
  floatingCard: {
    value: "20+",
    label: "İçerik",
    description: "Doğru Bilgi, Doğru Kararın Temelidir.",
  },
};
