// Product family showcase for the Widex brand page (/markalar/widex).
// Renders through the shared BrandPageModels component, including its
// feature-badge system. All 6 names are real, current Widex product
// families (Allure, SmartRIC, Moment Sheer, Beyond, Evoke, Unique) —
// verified via multiple 2026 hearing-aid review sources.
//
// Gerçek Widex ürün fotoğrafları eklendi (bkz. public/images/widex/models/).
// Beyond, Evoke ve Unique için henüz sağlanmış fotoğraf yok; bu alanlar
// geçici olarak marka logosuna işaret etmeye devam ediyor.

import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

export const widexModels: BrandPageModelsContent = {
  badge: "WIDEX MODELLERİ",
  heading: "Widex Ürün Ailesini Keşfedin",
  intro: "İhtiyacınıza uygun Widex modelini birlikte belirleyelim.",
  ctaLabel: "Detaylı İncele",
  items: [
    {
      slug: "allure",
      category: "Güncel Nesil",
      name: "Widex Allure",
      description: "Widex'in en güncel çip mimarisini taşıyan, RIC/BTE/ITE seçenekleriyle sunulan model ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/widex/models/allure.webp",
    },
    {
      slug: "smartric",
      category: "Gürültü Engelleme",
      name: "Widex SmartRIC",
      description: "Arka plan gürültüsünü azaltmaya yönelik özel mikrofon yerleşimiyle öne çıkan model ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/widex/models/smartric.webp",
    },
    {
      slug: "moment-sheer",
      category: "İnce Tasarım (RIC)",
      name: "Widex Moment Sheer",
      description: "PureSound™ teknolojisini ince bir kulak arkası tasarımda sunan model ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/widex/models/moment-sheer.webp",
    },
    {
      slug: "beyond",
      category: "Güçlü Kayıplar (BTE)",
      name: "Widex Beyond",
      description: "Geniş güç aralığı sunan, ileri derece işitme kayıpları için değerlendirilebilecek BTE ailesi.",
      tags: ["BTE", "Bluetooth", "Pilli"],
      image: "/images/brands/widex-logo-seffaf.webp",
    },
    {
      slug: "evoke",
      category: "Önceki Nesil",
      name: "Widex Evoke",
      description: "Widex'in önceki nesil teknolojisini taşıyan, kanıtlanmış bir model ailesi.",
      tags: ["RIC", "Bluetooth"],
      image: "/images/brands/widex-logo-seffaf.webp",
    },
    {
      slug: "unique",
      category: "Klasik Seri",
      name: "Widex Unique",
      description: "Temel işitme ihtiyaçları için sade ve kanıtlanmış bir yaklaşım sunan klasik model ailesi.",
      tags: ["BTE", "Pilli"],
      image: "/images/brands/widex-logo-seffaf.webp",
    },
  ],
  // Precomputed rgb() decomposition of #14b8a6.
  accentColor: "#14b8a6",
  accentColorBadgeBg: "rgb(20 184 166 / 0.08)",
  accentColorBadgeBorder: "rgb(20 184 166 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorHoverBorder: "rgb(20 184 166 / 0.5)",
  accentColorGlow: "rgb(20 184 166 / 0.14)",
  accentColorFocus: "rgb(20 184 166 / 0.35)",
};
