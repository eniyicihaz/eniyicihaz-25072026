// "Avantajları" bento section for the /servis-bakim/pil-aksesuar
// page — framed as the genuine advantages of getting pil/aksesuar
// support directly from the clinic. Renders through the shared
// BrandPageAdvantages component — items must be exactly 5 entries:
// [slot1, slot2, slot3(wide), slot4(wide), slot5(wide)], same contract
// every brand/category page's advantages data follows.

import { ShoppingBag, ShieldCheck, BatteryCharging, Plane, CircleDollarSign, Recycle } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const pilAksesuarAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Pil ve Aksesuar Desteğimizin Sunduğu Avantajlar",
  intro: "Pil ve aksesuar ihtiyaçlarınızı kliniğinizden karşılamanın nedenleri.",
  hero: {
    icon: ShoppingBag,
    category: "Geniş Seçenek",
    title: "Cihazınıza Uygun Seçenekler Tek Yerde",
    description: "Çinko-hava pil, şarjlı sistem ve uyumlu aksesuarları tek bir yerden, doğru rehberlikle temin edebilirsiniz.",
  },
  items: [
    {
      icon: ShieldCheck,
      category: "Uyumlu Ürünler",
      title: "Cihazınıza Uygun Ürünler Önerilir",
      description: "Size önerilen pil ve aksesuarlar, cihaz markanız ve modelinizle uyumlu olacak şekilde seçilir.",
    },
    {
      icon: BatteryCharging,
      category: "Şarjlı Seçenek",
      title: "Şarjlı Sisteme Geçiş Değerlendirilebilir",
      description: "Pil değiştirme zahmetini azaltmak isteyen kullanıcılar için şarjlı sistem seçenekleri anlatılır.",
    },
    {
      icon: Plane,
      category: "Seyahat Dostu",
      title: "Taşınabilir ve Pratik Seçenekler",
      description: "Seyahat eden kullanıcılar için taşınabilir şarj kutusu gibi pratik aksesuarlar sunulur.",
    },
    {
      icon: CircleDollarSign,
      category: "Bütçe Rehberliği",
      title: "Uzun Vadeli Maliyeti Birlikte Değerlendiririz",
      description: "Çinko-hava pil ve şarjlı sistem arasındaki uzun vadeli maliyet farkını sizinle paylaşırız.",
    },
    {
      icon: Recycle,
      category: "Sorumlu Kullanım",
      title: "Doğru Kullanım ve Geri Dönüşüm Bilgisi",
      description: "Pillerin doğru kullanımı ve geri dönüşümü hakkında bilgilendirme yapılır.",
    },
  ],
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
  accentColorIconBg: "rgb(202 138 4 / 0.1)",
  accentColorHoverBorder: "rgb(202 138 4 / 0.45)",
};
