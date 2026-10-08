// "Avantajları" bento section for the /neden-orijinal/yaygin-servis-agi
// page — framed as the advantages of a widespread, authorized service
// network rather than a generic device-feature list. Renders through
// the shared BrandPageAdvantages component — items must be exactly 5
// entries: [slot1, slot2, slot3(wide), slot4(wide), slot5(wide)], same
// contract every brand/category page's advantages data follows.

import { MapPin, Clock, GraduationCap, PackageCheck, ShieldCheck, Plane } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const yayginServisAgiAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Düzenli Servis Desteğinin Avantajları",
  intro: "Cihazınız için düzenli ve belgeli servis desteği almanın başlıca faydaları.",
  hero: {
    icon: MapPin,
    category: "Tek Merkezde Servis",
    title: "Sattığımız 18 Markada Teknik Servis",
    description: "Sattığımız 18 markanın tamamında Darıca'daki merkezimizde teknik servis desteği alabilirsiniz.",
  },
  items: [
    {
      icon: Clock,
      category: "Teslim Süresi",
      title: "Belirli Teslim Süreleri",
      description: "Teknik serviste teslim 3 gün, onarımda 1–3 gün içindedir.",
    },
    {
      icon: GraduationCap,
      category: "Teknik Servis Personeli",
      title: "Üretici Eğitimi Almış Ekip",
      description: "Servis işlemlerini yürüten ekibimiz üretici eğitimlerine katılmıştır.",
    },
    {
      icon: PackageCheck,
      category: "Orijinal Parça",
      title: "Orijinal Yedek Parçanın Önemi",
      description: "Orijinal yedek parça, cihazın üretici standartlarında çalışmaya devam etmesine yardımcı olur.",
    },
    {
      icon: ShieldCheck,
      category: "Garanti Koruması",
      title: "Garantinizi Koruyan Servis Süreci",
      description: "Garanti kapsamındaki işlemler üreticinin garanti koşullarına göre yürütülür.",
    },
    {
      icon: Plane,
      category: "Geçici Cihaz",
      title: "Ücretsiz Yedek / Geçici Cihaz",
      description: "Gerektiğinde ücretsiz yedek veya geçici cihaz desteği sağlıyoruz.",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorIconBg: "rgb(234 88 12 / 0.1)",
  accentColorHoverBorder: "rgb(234 88 12 / 0.45)",
};
