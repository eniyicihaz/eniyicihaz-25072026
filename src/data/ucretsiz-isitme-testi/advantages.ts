// "Avantajları" bento section for the /degerlendirme/
// ucretsiz-isitme-testi page — framed as the genuine advantages of the
// free-test service. Renders through the shared BrandPageAdvantages
// component — items must be exactly 5 entries: [slot1, slot2,
// slot3(wide), slot4(wide), slot5(wide)], same contract every
// brand/category page's advantages data follows. Item 4 deliberately
// cross-references the "Neden Orijinal" series' own Ücretsiz
// Danışmanlık page.

import { Stethoscope, Wallet, Clock, FileCheck, ShieldCheck, RefreshCcw } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const ucretsizIsitmeTestiAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Ücretsiz İşitme Testinin Avantajları",
  intro: "Ücretsiz işitme testini işitme sağlığınız için değerli bir ilk adım hâline getiren nedenler.",
  hero: {
    icon: Stethoscope,
    category: "Uzman Değerlendirmesi",
    title: "Odyometrist Eşliğinde Profesyonel Test",
    description: "Testiniz, alanında deneyimli bir odyometrist tarafından profesyonel ekipmanlarla gerçekleştirilir.",
  },
  items: [
    {
      icon: Wallet,
      category: "Ücretsiz",
      title: "Herhangi Bir Ücret veya Taahhüt Gerektirmez",
      description: "İşitme testi, herhangi bir ücret talep edilmeden ve satın alma taahhüdü olmadan sunulur.",
    },
    {
      icon: Clock,
      category: "Hızlı Süreç",
      title: "Kısa Sürede Tamamlanan Bir Değerlendirme",
      description: "Test genellikle kısa bir süre içinde tamamlanır ve sonuçlar aynı gün paylaşılır.",
    },
    {
      icon: FileCheck,
      category: "Net Sonuç",
      title: "Anlaşılır Bir Odyogram ile Sonuçlandırılır",
      description: "Test sonuçları, sizinle birlikte anlaşılır bir şekilde değerlendirilir.",
    },
    {
      icon: ShieldCheck,
      category: "Baskısız Süreç",
      title: "Satış Baskısı Olmadan Bilgilendirme",
      description: "Test sonrasında size cihaz satın alma zorunluluğu getirilmez.",
    },
    {
      icon: RefreshCcw,
      category: "Düzenli Takip",
      title: "Periyodik Kontrol İmkânı",
      description: "İşitme durumunuzu düzenli aralıklarla takip etmek için tekrar test yaptırabilirsiniz.",
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
  accentColorIconBg: "rgb(8 145 178 / 0.1)",
  accentColorHoverBorder: "rgb(8 145 178 / 0.45)",
  // Premium hover treatment for this section only (see
  // BrandPageAdvantages' `premium` field) — every value reuses this same
  // accent color at a different opacity, no new colors introduced.
  premium: true,
  accentColorHoverBg: "rgb(8 145 178 / 0.025)",
  accentColorGlow: "rgb(8 145 178 / 0.18)",
  accentColorIconBgHover: "rgb(8 145 178 / 0.18)",
};
