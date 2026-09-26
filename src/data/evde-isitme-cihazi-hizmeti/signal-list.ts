// Merkeze Gelmeniz Gerektiğinde — BrandPageSignalList üzerinden render
// edilir. Zorunlu güvenlik/yönlendirme dili burada: evde değerlendirmenin
// KBB muayenesinin yerine geçmediği ve acil belirtilerde sağlık
// kuruluşuna başvurulması gerektiği açıkça belirtiliyor.
import { AlertTriangle, Stethoscope, Wrench, LayoutGrid } from "lucide-astro";
import type { BrandPageSignalListContent } from "../../components/brand-page/BrandPageSignalList/BrandPageSignalList.astro";

export const evdeHizmetSignalList: BrandPageSignalListContent = {
  badge: "Merkeze Gelmeniz Gerektiğinde",
  heading: "Evde Hizmet Her Zaman Yeterli Olmayabilir",
  intro: "Aşağıdaki durumlarda merkezimize gelmenizi veya bir sağlık kuruluşuna başvurmanızı öneriyoruz.",
  signals: [
    {
      icon: AlertTriangle,
      title: "Ani İşitme Kaybı veya Ani Değişiklik",
      description: "Kulağınızda aniden gelişen bir işitme kaybı, ağrı veya akıntı fark ederseniz, en kısa sürede bir sağlık kuruluşuna başvurmanızı öneririz.",
    },
    {
      icon: Stethoscope,
      title: "KBB Değerlendirmesi Gerekebilecek Durumlar",
      description: "Evde yaptığımız değerlendirme profesyonel bir işitme kontrolüdür; tıbbi bir nedene işaret eden bir bulguya rastlarsak sizi KBB uzmanına yönlendiririz.",
    },
    {
      icon: Wrench,
      title: "İleri Teknik Servis İşlemleri",
      description: "Evde giderilemeyen bir arıza tespit edilirse cihazınız, merkezimizdeki teknik servis sürecine güvenle yönlendirilir.",
    },
    {
      icon: LayoutGrid,
      title: "Geniş Cihaz Yelpazesini Görmek İsterseniz",
      description: "Daha fazla marka ve modeli aynı anda karşılaştırmak isterseniz, Darıca'daki merkezimizi ziyaret edebilirsiniz.",
    },
  ],
  closing:
    "Ani işitme kaybı, kulakta ağrı, akıntı veya benzer acil belirtilerde lütfen en kısa sürede bir sağlık kuruluşuna başvurun. Evde sunduğumuz değerlendirme, gerektiğinde uzman doktor muayenesinin yerine geçmez.",
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
