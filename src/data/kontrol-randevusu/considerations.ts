// "Dikkat Edilmesi Gerekenler" section for the /uygulama-ayar/
// kontrol-randevusu page. Reuses the shared BrandPageIdealUser
// component, visually differentiated by the design system's own
// --color-warning token (#d97706). The first item is this page's key
// honesty flag: don't wait for the scheduled control if something
// changes suddenly.

import { AlertTriangle, Wrench, Clock, RefreshCcw, FileCheck } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const kontrolRandevusuConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Kontrol Randevusunda Dikkat Edilmesi Gereken Noktalar",
  intro: "Kontrol randevusu önleyici ve faydalı bir adımdır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Ani Değişiklikler İçin Sıradaki Kontrolü Beklemeyin",
      description: "Cihazınızda veya işitmenizde ani bir değişiklik fark ederseniz, planlı kontrol randevunuzu beklemeden bizimle iletişime geçmeniz önerilir.",
      suggestedFamilies: ["Acil Durum Bildirimi"],
    },
    {
      icon: Wrench,
      title: "Bu Randevu Fiziksel Bakım Yerine Geçmez",
      description: "Kontrol randevusu, cihazın kapsamlı fiziksel bakımı için tasarlanmamıştır; bu tür ihtiyaçlar için ayrıca bir bakım randevusu önerilebilir.",
      suggestedFamilies: ["Fiziksel Bakım İhtiyacı"],
    },
    {
      icon: Clock,
      title: "Önerilen Sıklık Kişiden Kişiye Değişir",
      description: "Size en uygun kontrol sıklığı, yaşınıza, işitme kaybınızın derecesine ve genel sağlık durumunuza göre değişebilir.",
      suggestedFamilies: ["Kişiye Özel Sıklık"],
    },
    {
      icon: RefreshCcw,
      title: "Bulgular Ek Bir Randevu Gerektirebilir",
      description: "Kontrol sırasında tespit edilen bir durum, kişiye özel programlama veya kalıp yenileme gibi ayrı bir randevu gerektirebilir.",
      suggestedFamilies: ["Yönlendirme"],
    },
    {
      icon: FileCheck,
      title: "Kontrolü Atlamak Cihazınıza Zarar Vermez",
      description: "Bir kontrol randevusunu atlamak cihazınıza doğrudan zarar vermez; ancak küçük değişikliklerin fark edilmesi gecikebilir.",
      suggestedFamilies: ["Gerçekçi Beklenti"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
