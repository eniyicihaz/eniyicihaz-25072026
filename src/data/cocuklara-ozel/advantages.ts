// "Avantajları" bento section for the /isitme-cihazlari/cocuklara-ozel
// page. Renders through the shared BrandPageAdvantages component — items
// must be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { ShieldCheck, Palette, Activity, Ruler, GraduationCap, Smartphone } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const cocuklaraOzelAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Çocuklara Özel Cihazların Avantajları",
  intro: "Çocuklara özel tasarımı geniş bir yaş aralığı için sıkça değerlendirilen bir seçenek hâline getiren özellikler.",
  hero: {
    icon: ShieldCheck,
    category: "Güvenlik",
    title: "Kilitli Pil Kapağıyla Yutma Riskine Karşı Koruma",
    description: "Çocuğa özel cihazlar, küçük pillerin kazara yutulmasını önlemeye yardımcı olan kilitli pil kapaklarıyla üretilir.",
  },
  items: [
    {
      icon: Palette,
      category: "Kişiselleştirme",
      title: "Renkli ve Eğlenceli Tasarım Seçenekleri",
      description: "Cihazı benimsemesini kolaylaştıran canlı renk ve desen seçenekleri sunulur.",
    },
    {
      icon: Activity,
      category: "Dayanıklılık",
      title: "Oyun ve Harekete Karşı Dayanıklı Gövde",
      description: "Aktif kullanım sırasında oluşabilecek darbelere ve hafif neme karşı sağlam bir yapı sunar.",
    },
    {
      icon: Ruler,
      category: "Büyüme Uyumu",
      title: "Büyüyen Kulağa Kolayca Uyarlanabilir Kalıp",
      description: "Yumuşak silikon kulak kalıpları, çocuğun büyümesine göre sık aralıklarla kolayca yenilenebilir.",
    },
    {
      icon: GraduationCap,
      category: "Sınıf Ortamı",
      title: "Roger/FM Sistemleriyle Sınıfta Net Duyma",
      description: "Öğretmen mikrofonundan gelen ses doğrudan cihaza aktarılarak sınıf gürültüsünün etkisi azaltılır.",
    },
    {
      icon: Smartphone,
      category: "Ebeveyn Takibi",
      title: "Uygulama Üzerinden Uzaktan Takip",
      description: "Bazı modellerde ebeveynler, cihazın durumunu ve ayarlarını uygulama üzerinden takip edebilir.",
    },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
  accentColorIconBg: "rgb(225 29 72 / 0.1)",
  accentColorHoverBorder: "rgb(225 29 72 / 0.45)",
};
