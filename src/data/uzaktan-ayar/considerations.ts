// "Dikkat Edilmesi Gerekenler" section for the /uygulama-ayar/
// uzaktan-ayar page. Reuses the shared BrandPageIdealUser component,
// visually differentiated by the design system's own --color-warning
// token (#d97706). The first item is this page's key limitation flag:
// not every cihaz or issue is eligible for a remote session — this is
// the honest boundary the intro.ts also states.

import { AlertTriangle, Wifi, Ear, Lock, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const uzaktanAyarConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Uzaktan Ayar Hizmetinde Dikkat Edilmesi Gereken Noktalar",
  intro: "Uzaktan ayar faydalı bir seçenektir; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Her Cihaz veya Sorun Uzaktan Ayara Uygun Olmayabilir",
      description: "Uzaktan ayar, yalnızca uyumlu cihazlarda ve belirli ayar türlerinde mümkündür; kapsamlı değişiklikler için yüz yüze randevu önerilebilir.",
      suggestedFamilies: ["Uygunluk Sınırı"],
    },
    {
      icon: Wifi,
      title: "Kararlı Bir İnternet Bağlantısı Gereklidir",
      description: "Oturumun sorunsuz ilerlemesi için stabil bir internet bağlantısı ve uyumlu bir akıllı telefon gereklidir.",
      suggestedFamilies: ["Teknik Gereksinim"],
    },
    {
      icon: Ear,
      title: "Fiziksel Uyum Sorunları Uzaktan Çözülemez",
      description: "Cihazın veya kulak kalıbının fiziksel uyumuyla ilgili sorunlar, uzaktan bir oturumla değerlendirilemez; yüz yüze kontrol gerekir.",
      suggestedFamilies: ["Fiziksel Muayene İhtiyacı"],
    },
    {
      icon: Lock,
      title: "Oturum Yalnızca Sizin Onayınızla Başlar",
      description: "Cihazınıza uzaktan erişim, önceden belirlenen bir randevu saatinde ve sizin onayınızla gerçekleşir.",
      suggestedFamilies: ["Gizlilik ve Güvenlik"],
    },
    {
      icon: RefreshCcw,
      title: "Sonuç Yeterli Olmazsa Yüz Yüze Randevu Önerilebilir",
      description: "Uzaktan yapılan güncelleme beklenen sonucu vermezse, kapsamlı bir değerlendirme için kliniğe davet edilebilirsiniz.",
      suggestedFamilies: ["Yönlendirme"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
