// Hero content for the "Kulak İçi (ITE)" product page
// (/isitme-cihazlari/kulak-ici-ite). Renders through the shared
// BrandPageHero component — same component the Kulak Arkası (BTE) master
// page uses. Second page of the "İşitme Cihazları" product-page series
// (see header.data.ts's devicesMega -> "İşitme Cihazı Çeşitleri" column).
//
// accentColor: mor / violet (#7c3aed) — a category accent distinct from
// BTE's kurumsal mavi (#2563eb), scoped entirely to this page's own data
// (no shared design-system token touched, same pattern BTE established).
// heroBackground follows the same layered "Hero Background System" recipe
// as BTE, with the blue swapped for violet.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const kulakIciHero: BrandPageHeroContent = {
  badge: "İŞİTME CİHAZI ÇEŞİTLERİ · KULAK İÇİ (ITE)",
  headingLines: ["Kulak İçi (ITE)", "İşitme Cihazları"],
  paragraphs: [
    "Kulağınızın şekline özel üretilen tek parça bir kabuk içine yerleşen kulak içi (ITE) işitme cihazları, kompakt tasarımı ve göze az batan yapısıyla öne çıkar.",
    "Hafif ile orta-ileri derece işitme kayıplarında, görünürlüğü öncelik gören yetişkin kullanıcılar için Avrasya İşitme'de sıkça değerlendirdiğimiz bir cihaz tipidir.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "GÖRÜNÜRLÜK",
      accent: "#7c3aed",
      title: "Küçük, Göze Az Batan Tasarım",
      description: "Kulak kanalı içinde veya kepçenin iç bölümünde yer aldığından kulak arkası cihazlara göre genellikle daha az fark edilir.",
    },
    {
      label: "KİŞİYE ÖZEL KALIP",
      accent: "#6d28d9",
      title: "Kulağınızın Kalıbına Göre Üretilir",
      description: "Kulak izinize göre şekillendirilen tek parça kabuk, konforlu ve sabit bir oturma sağlamayı hedefler.",
    },
    {
      label: "KULLANIM KOLAYLIĞI",
      accent: "#5b21b6",
      title: "Tüpsüz, Tek Parça Yapı",
      description: "Ayrı bir gövde veya tüp taşımadığından takıp çıkarması genellikle basittir.",
    },
  ],
  image: {
    src: "/images/coselgi/models/effect-ite.webp",
    alt: "Kulak içi (ITE) tipi, kişiye özel kalıpla üretilmiş tek parça işitme cihazı görseli",
  },
  floatingCard: {
    title: "Kişiye Özel Kalıp",
    description: "Kulak izinizden alınan ölçüyle, kulağınıza özel üretilir.",
  },
  accentColor: "#7c3aed",
  accentColorHover: "#6d28d9",
  accentColorSoft: "rgb(124 58 237 / 0.12)",
  accentColorBorder: "rgb(124 58 237 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #150a24 60%, #260f45 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#6d28d9",
  heroWaveOpacity: "0.18",
};
