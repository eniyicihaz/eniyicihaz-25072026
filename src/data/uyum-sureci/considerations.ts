// "Dikkat Edilmesi Gerekenler" section for the /rehberler/uyum-sureci
// page. Reuses the shared BrandPageIdealUser component, visually
// differentiated by the design system's own --color-warning token
// (#d97706). The second item is this page's key honesty flag:
// persistent discomfort should be evaluated, not simply endured.

import { History, AlertTriangle, Ban, Users, Scale } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const uyumSureciConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Uyum Sürecinde Dikkat Edilmesi Gereken Noktalar",
  intro: "Uyum süreci doğal bir yolculuktur; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: History,
      title: "Uzun Süredir Tedavi Edilmemiş Kayıplarda Süreç Daha Uzun Olabilir",
      description: "Beyniniz uzun süre bazı seslere maruz kalmadıysa, yeniden alışması daha fazla zaman gerektirebilir; bu normaldir.",
      suggestedFamilies: ["Gerçekçi Zaman Beklentisi"],
    },
    {
      icon: AlertTriangle,
      title: "Sürekli Rahatsızlık Beklenip Geçmesi Gereken Bir Şey Değildir",
      description: "Hafif bir alışma hissi normal olsa da, sürekli devam eden bir rahatsızlık durumunda Kontrol Randevusu veya Kişiye Özel Programlama değerlendirilmelidir.",
      suggestedFamilies: ["Profesyonel Değerlendirme"],
    },
    {
      icon: Ban,
      title: "Cihazı Bırakmak Yerine Kademeli Devam Edin",
      description: "Zorlandığınız bir an cihazı tamamen bırakmak yerine, kısa bir mola sonrası kademeli olarak devam etmeniz önerilir.",
      suggestedFamilies: ["Kademeli Devamlılık"],
    },
    {
      icon: Users,
      title: "Aile Desteği Önemlidir, Ancak Deneyim Size Aittir",
      description: "Yakınlarınızın desteği değerlidir; ancak uyum sürecinin hızı ve deneyimi kişiden kişiye değişir.",
      suggestedFamilies: ["Kişisel Deneyim"],
    },
    {
      icon: Scale,
      title: "Başkalarıyla Karşılaştırma Yapmayın",
      description: "Her kullanıcının uyum hızı farklıdır; başka bir kullanıcının deneyimiyle kendinizinkini karşılaştırmak gerçekçi olmayabilir.",
      suggestedFamilies: ["Kişiye Özel Süreç"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
