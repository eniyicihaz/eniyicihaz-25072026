// "Dikkat Edilmesi Gerekenler" section for the /sgk/yenileme-hakki
// page. Reuses the shared BrandPageIdealUser component, visually
// differentiated by the design system's own --color-warning token
// (#d97706). The first item is this page's key accuracy flag —
// explicitly directs readers to the pillar page and the clinic for the
// current renewal period, consistent with hero.ts's own rationale.

import { AlertTriangle, FileText, Baby, Building2, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const yenilemeHakkiConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Yenileme Hakkında Dikkat Edilmesi Gereken Noktalar",
  intro: "Yenileme hakkı net bir çerçeveye sahiptir; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Güncel Yenileme Süresi İçin SGK Rehberimizi İnceleyin",
      description: "Yenileme süresi ve şartları SGK mevzuatındaki güncellemelere göre değişebilir; güncel bilgi için SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi sayfamızı veya merkezimizi inceleyebilirsiniz.",
      suggestedFamilies: ["Güncel Süre"],
    },
    {
      icon: FileText,
      title: "Erken Yenileme Gerekçe ve Rapor Gerektirir",
      description: "Süre dolmadan yapılan yenileme taleplerinde, güncel bir sağlık kurulu raporu ve durumu açıklayan gerekçe istenir.",
      suggestedFamilies: ["Erken Yenileme Şartı"],
    },
    {
      icon: Baby,
      title: "Çocuklarda Yenileme Süreci Farklı Değerlendirilebilir",
      description: "Çocuklarda büyüme ve gelişim nedeniyle yenileme ihtiyacı, yetişkinlerden farklı bir zaman çizelgesinde ortaya çıkabilir.",
      suggestedFamilies: ["Çocuklarda SGK"],
    },
    {
      icon: Building2,
      title: "Yenileme de Anlaşmalı Merkez Şartına Tabidir",
      description: "Yenileme başvurusunda da cihazın SGK anlaşmalı bir merkezden temin edilmesi gerekir.",
      suggestedFamilies: ["Anlaşmalı Merkez Şartı"],
    },
    {
      icon: RefreshCcw,
      title: "Yenileme Belgeleri İlk Başvuruya Benzer",
      description: "Yenileme başvurusunda da güncel rapor, reçete ve kimlik belgeleri istenir; detaylı bilgi için Gerekli Belgeler sayfamızı inceleyebilirsiniz.",
      suggestedFamilies: ["Belge Şartı"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
