// "Markalara Göre İnceleyin" section for the /uygulama-ayar/
// kisiye-ozel-programlama page. Reuses the shared
// BrandPageRelatedContent component as a brand-link showcase, same
// technique every prior page uses. Framed around each brand's real
// data-logging / remote fine-tuning capability, consistent with the
// same fitting-software names already verified on the Cihaz Uygulama
// page (Genie 2, Target, Connexx, Compass GPS, Smart Fit).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const kisiyeOzelProgramlamaRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "İnce Ayar Sürecinde Kullanılan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un Genie 2 yazılımı, kullanım verilerine dayalı ince ayar seçenekleri sunar.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın Target yazılımı, çoklu ortam programları oluşturmaya imkân tanır.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın Connexx yazılımı, kişiye özel ince ayar seçenekleriyle bilinir.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in Compass GPS yazılımı, hassas kazanç ve sıkıştırma ayarları sunar.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un Smart Fit yazılımı, uzaktan ince ayar desteğiyle de değerlendirilebilir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "NuEar'ın uygun fiyatlı modelleri de aynı özenle kişiye özel ince ayarlanır.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
