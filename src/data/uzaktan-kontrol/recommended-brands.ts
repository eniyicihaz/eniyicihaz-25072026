// "Önerilen Marka ve Modeller" section for the /teknolojiler/
// uzaktan-kontrol page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every
// /isitme-cihazlari/* and /teknolojiler/* feature page uses. All hrefs
// point to real, already-built /markalar/{slug} pages. "RemoteCare"
// (Oticon), "Remote Support" (Phonak), "TeleCare" (Signia) and "Assist"
// (ReSound) are real, verifiable teleaudiology feature names offered by
// these manufacturers.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const uzaktanKontrolRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Uzaktan Kontrol Özellikleriyle Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un RemoteCare özelliği, video görüşme üzerinden uzaktan ayar desteği sunar.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın Remote Support özelliği, kliniğe gelmeden uzaktan ince ayar imkânı sağlar.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın TeleCare özelliği, odyometristinizin cihazınızı uzaktan ayarlamasına imkân tanır.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in uzaktan destek özelliği, markanın doğal ses felsefesini uzaktan erişim kolaylığıyla birleştirir.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un Assist özelliği, video görüşme üzerinden uzaktan ince ayar desteği sunar.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve kolay kontrol edilebilir çözümler arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
