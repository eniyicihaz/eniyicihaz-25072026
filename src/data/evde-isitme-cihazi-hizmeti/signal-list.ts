// Evde İşitme Cihazı Hizmeti — "Merkeze veya doktora başvurmanız gerektiğinde"
// (Faz 2 P2). Sağlık yönlendirmesi korundu (SERVICE_SOT P6: şüpheli
// durumda KBB hekimine yönlendirme). 4 maddeden 3'e iner; "geniş cihaz
// yelpazesi" maddesi pazarlama niteliğinde olduğu için çıkarıldı.
import { AlertTriangle, Stethoscope, Building2 } from "lucide-astro";
import type { BrandPageSignalListContent } from "../../components/brand-page/BrandPageSignalList/BrandPageSignalList.astro";

export const evdeHizmetSignalList: BrandPageSignalListContent = {
  badge: "Bilmeniz Gerekenler",
  heading: "Evde Hizmet Her Durumda Yeterli Olmayabilir",
  intro: "Aşağıdaki durumlarda bir sağlık kuruluşuna veya merkezimize başvurmanızı öneririz.",
  signals: [
    {
      icon: AlertTriangle,
      title: "Ani İşitme Kaybı veya Ani Değişiklik",
      description: "Kulağınızda aniden gelişen bir işitme kaybı, ağrı veya akıntı fark ederseniz evde hizmet talep etmeden önce en kısa sürede bir sağlık kuruluşuna başvurun.",
    },
    {
      icon: Stethoscope,
      title: "Hekim Değerlendirmesi Gerektiren Durumlar",
      description: "Tıbbi bir soruna işaret eden bir bulguyla karşılaşırsak sizi KBB hekimine yönlendiririz.",
    },
    {
      icon: Building2,
      title: "Merkezde Yapılması Gereken İşlemler",
      description: "Evde yapılamayan işlemler için sizi Darıca'daki merkezimize yönlendiririz.",
    },
  ],
  closing:
    "Evde hizmet, gerektiğinde hekim muayenesinin yerine geçmez. Acil belirtilerde lütfen en kısa sürede bir sağlık kuruluşuna başvurun.",
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
