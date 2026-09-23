// "Avantajları" bento section for the /neden-orijinal/
// guvenilir-teknoloji page — framed as the advantages of buying through
// an authorized, original channel rather than a generic device-feature
// list. Renders through the shared BrandPageAdvantages component —
// items must be exactly 5 entries: [slot1, slot2, slot3(wide),
// slot4(wide), slot5(wide)], same contract every brand/category page's
// advantages data follows.

import { ShieldCheck, RefreshCw, Wrench, BadgeCheck, RefreshCcw, Users } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const guvenilirTeknolojiAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Orijinal Ürün Almanın Avantajları",
  intro: "Yetkili kanaldan alınan orijinal bir cihazın sunduğu güvenceleri sıkça önerilen hâle getiren nedenler.",
  hero: {
    icon: ShieldCheck,
    category: "Üretici Garantisi",
    title: "Orijinal Ürünlerde Tam Güvence",
    description: "Yetkili kanaldan alınan cihazlar, üretici garantisi ve resmi destekle güvence altındadır.",
  },
  items: [
    {
      icon: RefreshCw,
      category: "Güncel Yazılım",
      title: "Düzenli Yazılım ve Firmware Güncellemeleri",
      description: "Orijinal cihazlar, üreticinin resmi güncellemelerine sorunsuz erişebilir.",
    },
    {
      icon: Wrench,
      category: "Teknik Servis",
      title: "Yetkili Teknik Servis Desteği",
      description: "Arıza durumunda orijinal yedek parça ve yetkili servis desteği alınabilir.",
    },
    {
      icon: BadgeCheck,
      category: "Sertifikasyon",
      title: "CE ve Tıbbi Cihaz Standartlarına Uygunluk",
      description: "Orijinal ürünler, ilgili güvenlik ve kalite standartlarına uygun olarak üretilir ve test edilir.",
    },
    {
      icon: RefreshCcw,
      category: "Kolay Değişim",
      title: "Sorunlu Üründe Değişim ve İade Güvencesi",
      description: "Yetkili satış kanalından alınan ürünlerde değişim ve iade süreçleri güvence altındadır.",
    },
    {
      icon: Users,
      category: "Uzman Desteği",
      title: "Marka Yetkilisi Danışmanlığı",
      description: "Orijinal ürün satın alırken marka yetkilisi danışmanlığından da faydalanabilirsiniz.",
    },
  ],
  accentColor: "#1d4ed8",
  accentColorBadgeBg: "rgb(29 78 216 / 0.08)",
  accentColorBadgeBorder: "rgb(29 78 216 / 0.35)",
  accentColorBadgeText: "#1e40af",
  accentColorIconBg: "rgb(29 78 216 / 0.1)",
  accentColorHoverBorder: "rgb(29 78 216 / 0.45)",
};
