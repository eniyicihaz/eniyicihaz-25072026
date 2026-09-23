// "Avantajları" bento section for the /servis-bakim/garanti-islemleri
// page — framed as the genuine advantages of a clear, documented
// warranty process. Renders through the shared BrandPageAdvantages
// component — items must be exactly 5 entries: [slot1, slot2,
// slot3(wide), slot4(wide), slot5(wide)], same contract every
// brand/category page's advantages data follows.

import { ShieldCheck, FileCheck, Building2, Timer, ScrollText, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const garantiIslemleriAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Garanti Sürecimizin Sunduğu Avantajlar",
  intro: "Net ve belgeli bir garanti sürecini tercih etmenin nedenleri.",
  hero: {
    icon: ShieldCheck,
    category: "Net Kapsam",
    title: "Neyin Kapsandığı Baştan Açıkça Belirtilir",
    description: "Garanti kapsamınızı ve koşullarınızı, herhangi bir belirsizlik olmadan sizinle paylaşırız.",
  },
  items: [
    {
      icon: FileCheck,
      category: "Belgeli Süreç",
      title: "Her Adım Belgelenir",
      description: "Garanti talebiniz, fatura ve garanti belgeniz üzerinden şeffaf bir şekilde takip edilir.",
    },
    {
      icon: Building2,
      category: "Yetkili Kanal",
      title: "Üretici Garantisi Güvencesi",
      description: "Yetkili kanaldan alınan orijinal ürünlerde üretici garantisi tam olarak geçerlidir.",
    },
    {
      icon: Timer,
      category: "Hızlı Değerlendirme",
      title: "Kapsam Hızlıca Netleştirilir",
      description: "Cihazınızın garanti kapsamında olup olmadığı kısa sürede değerlendirilir.",
    },
    {
      icon: ScrollText,
      category: "Açık Yönlendirme",
      title: "Doğru Sürece Yönlendirilirsiniz",
      description: "Garanti kapsamı dışında kalan durumlarda, Teknik Servis veya Kolay Değişim gibi uygun bir alternatif önerilir.",
    },
    {
      icon: Sparkles,
      category: "Ücretsiz Değerlendirme",
      title: "Kapsam Değerlendirmesi Herhangi Bir Ücret Talep Etmez",
      description: "Garanti kapsamı değerlendirmesi, herhangi bir ücret talep edilmeden yapılır.",
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
  accentColorIconBg: "rgb(79 70 229 / 0.1)",
  accentColorHoverBorder: "rgb(79 70 229 / 0.45)",
};
