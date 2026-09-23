// "Avantajları" bento section for the /degerlendirme/timpanometri page —
// framed as the genuine advantages of the timpanometri procedure.
// Renders through the shared BrandPageAdvantages component — items must
// be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { Gauge, Clock, Baby, Layers, FileCheck, Stethoscope } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const timpanometriAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Timpanometrinin Sunduğu Avantajlar",
  intro: "Timpanometriyi kapsamlı bir işitme değerlendirmesinin değerli bir parçası hâline getiren nedenler.",
  hero: {
    icon: Gauge,
    category: "Objektif Değerlendirme",
    title: "Yanıt Gerektirmeyen Objektif Bir Ölçüm",
    description: "Timpanometri, hastanın aktif katılımı olmadan orta kulak fonksiyonunu objektif olarak değerlendirir.",
  },
  items: [
    {
      icon: Clock,
      category: "Hızlı Uygulama",
      title: "Birkaç Saniyede Tamamlanan Bir Test",
      description: "Test, kulak kanalına yerleştirilen küçük bir prob ile hızlıca tamamlanır.",
    },
    {
      icon: Baby,
      category: "Çocuk Dostu",
      title: "Küçük Çocuklarda Kolayca Uygulanabilir",
      description: "Aktif yanıt gerektirmediği için küçük çocuklarda sıkça tercih edilir.",
    },
    {
      icon: Layers,
      category: "Orta Kulak Odaklı",
      title: "Orta Kulak Fonksiyonuna Özel Bilgi Sağlar",
      description: "Odyometrinin göremediği orta kulak mekaniği hakkında ek bilgi sunar.",
    },
    {
      icon: FileCheck,
      category: "Tamamlayıcı Sonuç",
      title: "Odyometri Sonuçlarını Anlamlandırmaya Yardımcı Olur",
      description: "İki test birlikte değerlendirildiğinde daha kapsamlı bir tablo ortaya çıkar.",
    },
    {
      icon: Stethoscope,
      category: "Yönlendirme İmkânı",
      title: "Gerekirse KBB Yönlendirmesi Sağlar",
      description: "Anormal sonuçlar durumunda uygun bir KBB yönlendirmesi yapılabilir.",
    },
  ],
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
  accentColorIconBg: "rgb(147 51 234 / 0.1)",
  accentColorHoverBorder: "rgb(147 51 234 / 0.45)",
};
