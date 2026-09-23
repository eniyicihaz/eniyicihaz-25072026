// "Dikkat Edilmesi Gerekenler" section for the /teknolojiler/
// tinnitus-cozumleri page. Reuses the shared BrandPageIdealUser
// component, same technique every /isitme-cihazlari/* and /teknolojiler/*
// feature page uses — visually differentiated from the "Kimler İçin
// Uygun" section above by using the design system's own --color-warning
// token (#d97706) instead of the page's purple accent. The first item is
// the most important on this page: an explicit, unhedged statement that
// this is not a treatment or diagnosis.

import { AlertTriangle, Stethoscope, Gauge, Battery, Wrench } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const tinnitusCozumleriConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Tinnitus Desteği Değerlendirilirken Dikkat Edilmesi Gereken Noktalar",
  intro: "Tinnitus desteği faydalı bir seçenek olabilir; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Bir Tedavi veya Tanı Yöntemi Değildir",
      description: "Tinnitus destek özelliği bir tedavi değildir; çınlamanın nedeni mutlaka bir hekim tarafından değerlendirilmelidir.",
      suggestedFamilies: ["Öncelikle Hekim Değerlendirmesi"],
    },
    {
      icon: Stethoscope,
      title: "Altta Yatan Nedenin Araştırılması Önemlidir",
      description: "Tinnitus, farklı sağlık durumlarının belirtisi olabilir; destek özelliğine geçmeden önce bir kulak burun boğaz değerlendirmesi önerilir.",
      suggestedFamilies: ["KBB Değerlendirmesi"],
    },
    {
      icon: Gauge,
      title: "Herkeste Aynı Şekilde Fayda Sağlamayabilir",
      description: "Rahatlatıcı seslerin etkisi kişiden kişiye değişir; bazı kullanıcılarda diğerlerine göre daha belirgin fayda gözlemlenebilir.",
      suggestedFamilies: ["Bireysel Değerlendirme"],
    },
    {
      icon: Battery,
      title: "Sürekli Kullanım Pil Tüketimini Etkileyebilir",
      description: "Ses üretecinin sürekli aktif olması, pil tüketimini bir miktar artırabilir.",
      suggestedFamilies: ["Verimli İşlemcili Modeller"],
    },
    {
      icon: Wrench,
      title: "Ayarların Düzenli Gözden Geçirilmesi Gerekebilir",
      description: "Ses türü ve seviyesi, zamanla ihtiyacınıza göre yeniden değerlendirilebilir.",
      suggestedFamilies: ["Periyodik Kontrol"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
