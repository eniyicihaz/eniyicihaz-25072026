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
  heading: "Yaygın Bir Servis Ağına Sahip Olmanın Avantajları",
  intro: "Geniş kapsama alanını ve tutarlı hizmet kalitesini ön planda tutan bir yaklaşımı sıkça önerilen hâle getiren nedenler.",
  hero: {
    icon: MapPin,
    category: "Geniş Kapsama Alanı",
    title: "Yetkili Servise Her Yerden Erişim",
    description: "Yaygın servis ağı sayesinde, bulunduğunuz konumdan bağımsız olarak yetkili teknik desteğe ulaşabilirsiniz.",
  },
  items: [
    {
      icon: Clock,
      category: "Hızlı Yanıt",
      title: "Arızaya Hızlı Müdahale",
      description: "Yetkili servis ağı, arıza durumlarında daha hızlı çözüm süreçleri sunabilir.",
    },
    {
      icon: GraduationCap,
      category: "Uzman Teknisyenler",
      title: "Marka Sertifikalı Teknisyen Desteği",
      description: "Yetkili servis teknisyenleri, üretici tarafından eğitilmiş ve sertifikalandırılmıştır.",
    },
    {
      icon: PackageCheck,
      category: "Orijinal Parça",
      title: "Her Noktada Orijinal Yedek Parça Garantisi",
      description: "Yetkili servis ağının her noktasında orijinal yedek parça kullanımı garanti altındadır.",
    },
    {
      icon: ShieldCheck,
      category: "Garanti Koruması",
      title: "Garantinizi Koruyan Servis Süreci",
      description: "Yetkili serviste yapılan işlemler, üretici garantinizi geçersiz kılmaz.",
    },
    {
      icon: Plane,
      category: "Seyahat Kolaylığı",
      title: "Seyahat veya Taşınma Durumunda Kesintisiz Destek",
      description: "Farklı bir şehre taşınsanız veya seyahat etseniz bile yetkili servis desteğine erişebilirsiniz.",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorIconBg: "rgb(234 88 12 / 0.1)",
  accentColorHoverBorder: "rgb(234 88 12 / 0.45)",
};
