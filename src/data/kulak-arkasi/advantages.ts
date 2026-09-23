// "Avantajları" bento section for the /isitme-cihazlari/kulak-arkasi-bte
// page. Renders through the shared BrandPageAdvantages component — items
// must be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand page's advantages data follows.

import { ShieldCheck, Volume2, Baby, BatteryCharging, Bluetooth, Wallet } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const kulakArkasiAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Kulak Arkası (BTE) Cihazların Avantajları",
  intro: "BTE'yi geniş bir kullanıcı kitlesi için sıkça ilk tercih hâline getiren özellikler.",
  hero: {
    icon: Volume2,
    category: "Ses Gücü",
    title: "Her Derece Kayıpta Etkili Amplifikasyon",
    description: "Daha büyük hoparlör ve amplifikatör alanı sayesinde hafiften çok ileri dereceye kadar geniş bir aralıkta kullanılabilir.",
  },
  items: [
    {
      icon: ShieldCheck,
      category: "Dayanıklılık",
      title: "Nem ve Kulak Kirinden Daha Az Etkilenir",
      description: "Elektronik bileşenler kulak dışında olduğu için gövde daha uzun ömürlü olma eğilimindedir.",
    },
    {
      icon: Baby,
      category: "Çocuklarda Kullanım",
      title: "Büyüyen Kulağa Kolayca Uyarlanır",
      description: "Kulak kalıbı, büyümeye bağlı olarak kolayca yenilenebildiği için çocuklarda sıkça tercih edilir.",
    },
    {
      icon: BatteryCharging,
      category: "Güç Seçenekleri",
      title: "Pilli veya Şarjlı Kullanım İmkânı",
      description: "İhtiyaca göre uzun ömürlü pilli modeller veya tek dokunuşla dolan şarjlı modeller arasından seçim yapılabilir.",
    },
    {
      icon: Bluetooth,
      category: "Bağlantı",
      title: "Telefon ve TV ile Kablosuz Bağlantı",
      description: "Bluetooth özellikli modeller, telefon görüşmelerini ve TV sesini doğrudan cihaza aktarabilir.",
    },
    {
      icon: Wallet,
      category: "Bakım Kolaylığı",
      title: "Kolay Kullanım ve Erişilebilir Bakım",
      description: "Büyük kumandaları ve kolay temizliği sayesinde el becerisi sınırlı kullanıcılar için de pratiktir.",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
  accentColorHoverBorder: "rgb(37 99 235 / 0.45)",
};
