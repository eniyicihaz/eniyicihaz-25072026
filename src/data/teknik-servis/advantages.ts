// "Avantajları" bento section for the /servis-bakim/teknik-servis
// page — framed as the genuine advantages of the clinic's repair
// service. Renders through the shared BrandPageAdvantages component —
// items must be exactly 5 entries: [slot1, slot2, slot3(wide),
// slot4(wide), slot5(wide)], same contract every brand/category page's
// advantages data follows.

import { Wrench, PackageSearch, ShieldCheck, Truck, Send, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const teknikServisAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Teknik Servisimizin Sunduğu Avantajlar",
  intro: "Merkezde ilk değerlendirme, açık bilgilendirme ve gerektiğinde teknik servise gönderim.",
  hero: {
    icon: Wrench,
    category: "Bir Arada Değerlendirme",
    title: "Sorununuz Merkezimizde Bir Arada Değerlendirilir",
    description: "Ses, güç, bağlantı veya fiziksel hasar kaynaklı sorunlar Darıca'daki merkezimizde bir arada değerlendirilir.",
  },
  items: [
    {
      icon: PackageSearch,
      category: "Şeffaf Teşhis",
      title: "Sorununuz Açıkça Sizinle Paylaşılır",
      description: "Arıza netleştikten sonra sorunun ne olduğu ve önerilen çözüm sizinle açıkça paylaşılır.",
    },
    {
      icon: ShieldCheck,
      category: "Garanti Değerlendirmesi",
      title: "Garanti Durumu Netleşir",
      description: "Sorununuzun garanti kapsamında olup olmadığı, cihazın garanti şartlarına ve arızanın niteliğine göre değerlendirilir.",
    },
    {
      icon: Truck,
      category: "Teknik Servis",
      title: "Gerektiğinde Teknik Servise Gönderim",
      description: "Merkezde çözülemeyen cihaz teknik servise gönderilir; arıza teknik serviste yapılan ilk teknik kontrolle netleşir.",
    },
    {
      icon: Sparkles,
      category: "Onarım Sonrası Kontrol",
      title: "Teslimde İşlevsellik Birlikte Kontrol Edilir",
      description: "Onarılan cihazınız teslim edilirken işlevselliği sizinle birlikte kontrol edilir.",
    },
    {
      icon: Send,
      category: "Kolay Ulaşım",
      title: "Telefon veya WhatsApp ile Bilgi Alın",
      description: "Sorununuzu telefonla veya WhatsApp üzerinden bizimle paylaşabilir, başvuru için randevu alabilirsiniz.",
    },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
  accentColorIconBg: "rgb(220 38 38 / 0.1)",
  accentColorHoverBorder: "rgb(220 38 38 / 0.45)",
};
