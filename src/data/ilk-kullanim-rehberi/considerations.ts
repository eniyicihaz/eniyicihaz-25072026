// "Dikkat Edilmesi Gerekenler" section for the /rehberler/
// ilk-kullanim-rehberi page. Reuses the shared BrandPageIdealUser
// component, visually differentiated by the design system's own
// --color-warning token (#d97706). Genuine practical cautions for
// first-time physical handling.

import { Droplets, AlertTriangle, FileText, Wrench, PhoneCall } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const ilkKullanimRehberiConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "İlk Günlerde Dikkat Edilmesi Gereken Noktalar",
  intro: "Cihazınızla geçireceğiniz ilk günler için göz önünde bulundurmanız gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: Droplets,
      title: "Islak Elle Takıp Çıkarmayın",
      description: "Cihazınızı takarken veya çıkarırken ellerinizin kuru olmasına dikkat edin.",
      suggestedFamilies: ["Kuru Kullanım"],
    },
    {
      icon: AlertTriangle,
      title: "Farklı Ses Algısı Normaldir, Sürekli Rahatsızlık Değildir",
      description: "İlk günlerde sesleri farklı algılamak normal olsa da, sürekli bir rahatsızlık hissederseniz Cihaz Uygulama randevunuzda bizimle paylaşmanız önerilir.",
      suggestedFamilies: ["Gerçekçi Beklenti"],
    },
    {
      icon: FileText,
      title: "Kullanım Kılavuzunuzu Saklayın",
      description: "Markaya özel talimatlar farklılık gösterebilir; teslim aldığınız kullanım kılavuzunu saklamanız önerilir.",
      suggestedFamilies: ["Marka Özel Talimatlar"],
    },
    {
      icon: Wrench,
      title: "Cihazı Kendi Başınıza Sökmeye Çalışmayın",
      description: "Bir sorunla karşılaşırsanız cihazı kendi başınıza açmaya veya sökmeye çalışmayın; bu durum hasara yol açabilir.",
      suggestedFamilies: ["Kendi Kendine Onarım Yapmayın"],
    },
    {
      icon: PhoneCall,
      title: "Emin Olamadığınız Durumlarda Bizi Arayın",
      description: "Herhangi bir konuda emin olamazsanız, tahmin yürütmek yerine bizi aramanız her zaman en güvenli seçenektir.",
      suggestedFamilies: ["Doğrudan Destek"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
