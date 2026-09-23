// "Avantajları" bento section for the /servis-bakim/cihaz-temizligi
// page — framed as the genuine advantages of a daily cleaning habit.
// Renders through the shared BrandPageAdvantages component — items must
// be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { Sparkles, Ear, RefreshCcw, Droplets, Clock, ShieldCheck } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const cihazTemizligiAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Düzenli Temizliğin Sunduğu Avantajlar",
  intro: "Basit bir günlük alışkanlığın cihazınıza sağladığı faydalar.",
  hero: {
    icon: Sparkles,
    category: "Basit Alışkanlık",
    title: "Günde Sadece Birkaç Dakika Yeterlidir",
    description: "Yumuşak bir bezle silme ve doğru saklama, cihazınızın performansını korumaya yardımcı olan basit bir rutindir.",
  },
  items: [
    {
      icon: Ear,
      category: "Ses Kalitesi",
      title: "Net Ses Kalitesinin Korunmasına Yardımcı Olur",
      description: "Düzenli temizlik, kir ve kulak yağı birikiminin ses kalitesini etkilemesini önlemeye yardımcı olur.",
    },
    {
      icon: RefreshCcw,
      category: "Uzun Ömür",
      title: "Periyodik Bakım Aralığını Destekler",
      description: "Günlük bakım, periyodik bakım randevuları arasında cihazınızın iyi durumda kalmasına katkı sağlar.",
    },
    {
      icon: Droplets,
      category: "Nem Koruması",
      title: "Nem Kaynaklı Sorunları Azaltmaya Yardımcı Olur",
      description: "Doğru saklama, nem birikiminden kaynaklanabilecek sorunların önüne geçmeye yardımcı olabilir.",
    },
    {
      icon: Clock,
      category: "Hızlı Rutin",
      title: "Günlük Hayatınıza Kolayca Eklenir",
      description: "Temizlik rutini, günde sadece birkaç dakikanızı alacak şekilde tasarlanabilir.",
    },
    {
      icon: ShieldCheck,
      category: "Ücretsiz Rehberlik",
      title: "Doğru Yöntemi Size Gösteriyoruz",
      description: "Cihazınıza uygun temizlik yöntemini randevunuzda size ücretsiz olarak gösteriyoruz.",
    },
  ],
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0284c7",
  accentColorIconBg: "rgb(14 165 233 / 0.1)",
  accentColorHoverBorder: "rgb(14 165 233 / 0.45)",
};
