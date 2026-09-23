// "Dikkat Edilmesi Gerekenler" section for the /ihtiyaciniza-gore/
// cok-ileri-derece-isitme-kaybi page. Reuses the shared
// BrandPageIdealUser component, same technique every prior feature/need
// page uses — visually differentiated from the "Günlük Yaşamdaki
// Belirtiler" section above by using the design system's own
// --color-warning token (#d97706) instead of the page's deep amber
// accent. Item 3 is this page's one real departure from its sibling
// degree pages: profound loss is the point on the scale where cochlear
// implantation becomes a genuinely relevant option for some users — noted
// factually and hedged ("bazı durumlarda", "değerlendirilebilir"),
// pointing to an ENT/CI-center evaluation rather than making any claim
// this clinic provides that pathway.

import { AlertTriangle, Stethoscope, Activity, TrendingDown, Users } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const cokIleriDereceIsitmeKaybiConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Çok İleri Derece İşitme Kaybı Değerlendirilirken Dikkat Edilmesi Gereken Noktalar",
  intro: "Kapsamlı değerlendirme bu derecede özellikle önemlidir; göz önünde bulundurulması gereken birkaç kritik nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Kendi Kendine Tanı Konulmamalıdır",
      description: "Belirtileriniz çok ileri derece işitme kaybına işaret etse de, kesin tanı yalnızca bir odyometri testiyle konulabilir.",
      suggestedFamilies: ["Profesyonel İşitme Testi"],
    },
    {
      icon: Stethoscope,
      title: "Kapsamlı KBB Değerlendirmesi Gereklidir",
      description: "Bu derecede, işitme cihazının yeterli fayda sağlayıp sağlamayacağı bir kulak burun boğaz uzmanı tarafından değerlendirilmelidir.",
      suggestedFamilies: ["KBB Değerlendirmesi"],
    },
    {
      icon: Activity,
      title: "Bazı Durumlarda Koklear İmplant Değerlendirilebilir",
      description: "İşitme cihazının yeterli fayda sağlamadığı bazı çok ileri derece kayıplarda, koklear implant seçeneği bir KBB uzmanı tarafından değerlendirilebilir.",
      suggestedFamilies: ["KBB / Koklear İmplant Merkezi Yönlendirmesi"],
    },
    {
      icon: TrendingDown,
      title: "Zamanla Değişim Gösterebilir",
      description: "İşitme kaybı, düzenli takip edilmediğinde zamanla değişebilir; bu derecede sık kontrol önemlidir.",
      suggestedFamilies: ["Sık Periyodik Kontrol"],
    },
    {
      icon: Users,
      title: "Aile ve Çevrenin Desteği Kritik Önemdedir",
      description: "Bu derecede, yakın çevrenin iletişim stratejilerine dahil olması günlük yaşam kalitesini önemli ölçüde etkileyebilir.",
      suggestedFamilies: ["Aile Bilgilendirmesi"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
