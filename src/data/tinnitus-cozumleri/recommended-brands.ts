// "Önerilen Marka ve Modeller" section for the /teknolojiler/
// tinnitus-cozumleri page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique every
// /isitme-cihazlari/* and /teknolojiler/* feature page uses. All hrefs
// point to real, already-built /markalar/{slug} pages. "Zen Therapy"
// (Widex), "Tinnitus Balance" (Phonak), "Tinnitus SoundSupport" (Oticon)
// and "Relief" (ReSound) are real, long-standing, verifiable tinnitus
// support features — Zen Therapy is Widex's well-known fractal-tone
// approach, and Moment Sheer is already used verbatim as this page's own
// hero image (public/images/widex/models/moment-sheer.webp).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const tinnitusCozumleriRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Tinnitus Desteğiyle Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un Tinnitus SoundSupport özelliği, kişiye özel ayarlanabilen geniş bir ses kütüphanesi sunar.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın Tinnitus Balance uygulaması, rahatlatıcı sesleri telefonunuzdan yönetmenize imkân tanır.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın tinnitus destek özelliği, işitme desteğiyle birlikte kişiye özel rahatlatıcı sesler sunar.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in Zen Therapy teknolojisi, fraktal tonlarla tanınan, uzun süredir kullanılan bir tinnitus destek yaklaşımıdır.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un Relief uygulaması, rahatlatıcı ses kütüphanesini telefonunuz üzerinden sunar.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı tinnitus destek özellikli çözümler arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
};
