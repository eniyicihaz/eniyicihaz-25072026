// "Avantajları" bento section for the /uygulama-ayar/
// kontrol-randevusu page — framed as the genuine advantages of routine,
// preventive check-ups. Renders through the shared BrandPageAdvantages
// component — items must be exactly 5 entries: [slot1, slot2,
// slot3(wide), slot4(wide), slot5(wide)], same contract every
// brand/category page's advantages data follows.

import { Activity, Ear, Gauge, ShieldCheck, ClipboardCheck, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const kontrolRandevusuAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Düzenli Kontrolün Sunduğu Avantajlar",
  intro: "Şikayet beklemeden düzenli kontrol randevusu almanın nedenleri.",
  hero: {
    icon: Activity,
    category: "Önleyici Yaklaşım",
    title: "Değişiklikleri Erken Yakalamaya Yardımcı Olur",
    description: "Düzenli kontroller, işitme veya cihaz performansındaki küçük değişikliklerin daha erken fark edilmesine yardımcı olabilir.",
  },
  items: [
    {
      icon: Ear,
      category: "İşitme Takibi",
      title: "İşitme Durumunuz Periyodik Olarak İzlenir",
      description: "Kısa bir yeniden test, işitme durumunuzdaki değişimleri takip etmenize yardımcı olur.",
    },
    {
      icon: Gauge,
      category: "Cihaz Performansı",
      title: "Cihazınızın En İyi Performansta Kaldığından Emin Olursunuz",
      description: "Cihaz performans kontrolü, ayarların hâlâ ihtiyacınıza uygun olup olmadığını gösterir.",
    },
    {
      icon: ShieldCheck,
      category: "Garanti Sürekliliği",
      title: "Garanti ve Servis Sürecinizi Takip Edersiniz",
      description: "Düzenli kontroller, cihazınızın garanti kapsamındaki durumunu takip etmenize yardımcı olur.",
    },
    {
      icon: ClipboardCheck,
      category: "Bütünsel Değerlendirme",
      title: "İşitme ve Cihaz Birlikte Değerlendirilir",
      description: "Tek bir randevuda, hem işitme durumunuz hem de cihazınızın fiziksel ve teknik durumu gözden geçirilir.",
    },
    {
      icon: Sparkles,
      category: "Ücretsiz",
      title: "Kontrol Randevusu Herhangi Bir Ücret Talep Etmez",
      description: "Kontrol randevusu, herhangi bir ücret talep edilmeden sunulur.",
    },
  ],
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
  accentColorIconBg: "rgb(71 85 105 / 0.1)",
  accentColorHoverBorder: "rgb(71 85 105 / 0.45)",
};
