// "Dikkat Edilmesi Gerekenler" section for the /sgk/katki-payi page.
// Reuses the shared BrandPageIdealUser component, visually
// differentiated by the design system's own --color-warning token
// (#d97706). The first item is this page's key accuracy flag —
// explicitly directs readers to the pillar page for current TL
// figures, consistent with hero.ts's own rationale.

import { AlertTriangle, Building2, FileText, Percent, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const sgkKatkiPayiConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Katkı Payı Hesaplamasında Dikkat Edilmesi Gereken Noktalar",
  intro: "Katkı payı sistemi net bir çerçeveye sahiptir; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Güncel Tutarlar İçin SGK Rehberimizi İnceleyin",
      description: "SGK destek tutarları zaman içinde güncellenebilir; en güncel ve tarihli rakamlar için SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi sayfamızı inceleyebilirsiniz.",
      suggestedFamilies: ["Güncel Rakamlar"],
    },
    {
      icon: Building2,
      title: "Destek Yalnızca Anlaşmalı Merkezlerde Geçerlidir",
      description: "SGK desteğinden yararlanabilmek için cihazın SGK anlaşmalı bir merkezden temin edilmesi gerekir.",
      suggestedFamilies: ["Anlaşmalı Merkez Şartı"],
    },
    {
      icon: FileText,
      title: "Rapor ve Reçete Olmadan Destek Uygulanamaz",
      description: "Katkı payı hesaplaması, geçerli bir sağlık kurulu raporu ve reçete olmadan uygulanamaz.",
      suggestedFamilies: ["Belge Şartı"],
    },
    {
      icon: Percent,
      title: "Emekli Kesintisi Ayrıca Uygulanabilir",
      description: "Emekliler için destek tutarının bir kısmı, SGK tarafından belirlenen bir oranda maaştan kesinti olarak yansıtılabilir.",
      suggestedFamilies: ["Emekli Kesintisi"],
    },
    {
      icon: RefreshCcw,
      title: "Kategori Değişikliği Destek Tutarını Etkileyebilir",
      description: "Çalışma durumunuzda (örneğin emekliliğe geçiş) bir değişiklik olması, destek tutarınızı etkileyebilir.",
      suggestedFamilies: ["Kategori Değişikliği"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
