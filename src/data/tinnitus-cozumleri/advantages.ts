// "Avantajları" bento section for the /teknolojiler/tinnitus-cozumleri
// page. Renders through the shared BrandPageAdvantages component — items
// must be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows. Every claim is hedged ("yardımcı olabilir", never
// "iyileştirir" or "tedavi eder").

import { Ear, Moon, Smartphone, Stethoscope, SlidersHorizontal, Users } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const tinnitusCozumleriAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Tinnitus Desteğinin Avantajları",
  intro: "Tinnitus destek özelliğini rahatsızlık duyan kullanıcılar için sıkça değerlendirilen bir seçenek hâline getiren özellikler.",
  hero: {
    icon: Ear,
    category: "Rahatlama Desteği",
    title: "Rahatlatıcı Seslerle Çınlamaya Odaklanmayı Azaltmaya Yardımcı Olur",
    description: "Hafif, kişiye özel ayarlanmış sesler, çınlamanın günlük yaşamdaki fark edilme düzeyini azaltmaya yardımcı olabilir.",
  },
  items: [
    {
      icon: Moon,
      category: "Sessiz Ortam",
      title: "Sessiz Ortamlarda Ek Rahatlama Sağlar",
      description: "Özellikle sessiz ortamlarda ve gece, hafif ses üretimi rahatlamaya yardımcı olabilir.",
    },
    {
      icon: Smartphone,
      category: "Kolay Kontrol",
      title: "Uygulama Üzerinden İhtiyaç Anında Kontrol",
      description: "Ses üretecini istediğiniz an telefonunuzdan açıp kapatabilirsiniz.",
    },
    {
      icon: Stethoscope,
      category: "Kombine Destek",
      title: "İşitme Kaybı ile Birlikte Tek Cihazda Destek",
      description: "Aynı cihaz, hem işitme desteği hem de tinnitus rahatlatma sesi sunabilir.",
    },
    {
      icon: SlidersHorizontal,
      category: "Kişiselleştirme",
      title: "Ses Türü ve Seviyesi Size Özel Ayarlanır",
      description: "Odyometristiniz, ses türünü ve seviyesini işitme profilinize göre kişiselleştirir.",
    },
    {
      icon: Users,
      category: "Uzman Desteği",
      title: "Odyometrist Rehberliğinde Değerlendirme",
      description: "Tinnitus desteği, bir odyometrist eşliğinde ihtiyacınıza göre planlanır.",
    },
  ],
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
  accentColorIconBg: "rgb(147 51 234 / 0.1)",
  accentColorHoverBorder: "rgb(147 51 234 / 0.45)",
};
