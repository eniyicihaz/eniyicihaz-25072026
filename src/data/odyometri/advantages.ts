// "Avantajları" bento section for the /degerlendirme/odyometri page —
// framed as the genuine advantages of the odyometri procedure. Renders
// through the shared BrandPageAdvantages component — items must be
// exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { Radar, FileCheck, Gauge, Layers, Wrench, RefreshCcw } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const odyometriAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Odyometrinin Sunduğu Avantajlar",
  intro: "Odyometriyi işitme değerlendirmesinin temel taşı hâline getiren nedenler.",
  hero: {
    icon: Radar,
    category: "Objektif Ölçüm",
    title: "İşitme Eşiğinin Objektif Ölçümü",
    description: "Odyometri, işitme durumunuzu öznel gözlemler yerine ölçülebilir verilerle ortaya koyar.",
  },
  items: [
    {
      icon: FileCheck,
      category: "Odyogram",
      title: "Kolay Anlaşılır Bir Sonuç Grafiği",
      description: "Sonuçlar, frekans ve şiddet eksenlerine sahip bir odyogram üzerinde görselleştirilir.",
    },
    {
      icon: Gauge,
      category: "Derece Belirleme",
      title: "İşitme Kaybının Derecesini Belirlemeye Yardımcı Olur",
      description: "Odyometri sonuçları, işitme kaybının hafif, orta, ileri veya çok ileri derecede olup olmadığını belirlemeye yardımcı olur.",
    },
    {
      icon: Layers,
      category: "Tür Ayrımı",
      title: "İletim Tipi ve Sensörinöral Ayrımı",
      description: "Hava ve kemik yolu sonuçlarının karşılaştırılması, işitme kaybının türünü ayırt etmeye yardımcı olabilir.",
    },
    {
      icon: Wrench,
      category: "Cihaz Programlama Temeli",
      title: "Cihaz Ayarlarının Temelini Oluşturur",
      description: "Odyometri sonuçları, işitme cihazı programlamasının başlangıç noktasını oluşturur.",
    },
    {
      icon: RefreshCcw,
      category: "Takip İmkânı",
      title: "Zaman İçindeki Değişimi Takip Etmeye Yardımcı Olur",
      description: "Düzenli tekrarlanan odyometri, işitme durumunuzdaki değişimleri takip etmeye yardımcı olur.",
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
  accentColorIconBg: "rgb(79 70 229 / 0.1)",
  accentColorHoverBorder: "rgb(79 70 229 / 0.45)",
};
