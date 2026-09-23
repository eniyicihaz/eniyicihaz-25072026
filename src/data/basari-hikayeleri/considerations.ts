// "Dikkat Edilmesi Gerekenler" section for the /blog/basari-hikayeleri
// page. Reuses the shared BrandPageIdealUser component, visually
// differentiated by the design system's own --color-warning token
// (#d97706). The first item is this page's key content-integrity flag
// — explicitly states no real patient stories/quotes are shared here,
// consistent with the site-wide discipline against fabricated
// testimonials. See hero.ts for the full rationale.

import { AlertTriangle, UserX, Clock, ShieldQuestion, Stethoscope } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const basariHikayeleriConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Bu Sayfayı Okurken Dikkat Edilmesi Gerekenler",
  intro: "Genel deneyim kategorileri faydalı bir fikir verse de, göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: UserX,
      title: "Burada Paylaşılan Belirli Bir Kişinin Hikayesi Değildir",
      description: "Gizlilik ilkemiz gereği hastalarımızın kişisel bilgilerini veya belirli vakalarını paylaşmıyoruz; burada yalnızca genel eğilimler yer alır.",
      suggestedFamilies: ["Gizlilik"],
    },
    {
      icon: Clock,
      title: "Her Kullanıcının Deneyimi Farklıdır",
      description: "Yaşanacak değişimin kapsamı, işitme kaybınıza, kullandığınız cihaza ve uyum sürecinize göre kişiden kişiye farklılık gösterir.",
      suggestedFamilies: ["Bireysel Farklılık"],
    },
    {
      icon: ShieldQuestion,
      title: "Kesin Bir Sonuç Garanti Edilemez",
      description: "Genel eğilimler bilgilendirici olsa da, belirli bir sonucun garanti edildiği anlamına gelmez.",
      suggestedFamilies: ["Gerçekçi Beklenti"],
    },
    {
      icon: Stethoscope,
      title: "Sonuçlar Uyum Sürecine Bağlıdır",
      description: "Olumlu değişimler genellikle zaman içinde, düzenli kullanım ve uyum süreciyle birlikte ortaya çıkar; detaylı bilgi için Uyum Süreci sayfamızı inceleyebilirsiniz.",
      suggestedFamilies: ["Uyum Süreci"],
    },
    {
      icon: AlertTriangle,
      title: "Kendi Durumunuz İçin Değerlendirme Gereklidir",
      description: "Sizin için nasıl bir deneyim mümkün olabileceğini öğrenmek için kişisel bir değerlendirme yaptırmanızı öneririz.",
      suggestedFamilies: ["Kişisel Değerlendirme"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
