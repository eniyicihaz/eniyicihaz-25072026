// Hero content for the "Kolay Değişim" page
// (/neden-orijinal/kolay-degisim). Renders through the shared
// BrandPageHero component — same component every /isitme-cihazlari/*,
// /teknolojiler/*, /ihtiyaciniza-gore/* and /neden-orijinal/* page uses.
// Sixth and final page of the "Neden Orijinal" series (see
// header.data.ts's brandsMega second column) — completing the
// brandsMega mega menu's "Neden Orijinal" column entirely. Same trust/
// authenticity content genre — this page's own angle is the exchange/
// upgrade process itself (trial-period reconsideration, defect
// replacement, needs-change model transitions) rather than the product,
// its support infrastructure, its accessories, or the consultancy that
// precedes purchase.
//
// accentColor: gül kırmızısı / rose-600 (#e11d48) — sixth and final
// color in the fresh accent rotation opened for this series on
// Güvenilir Teknoloji's hero.ts; see that file for the full rationale.
// Chosen for its renewal/change association, distinct from the five
// prior siblings' trust-blue, durability-emerald, support-orange,
// accessory-violet and consultancy-teal.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const kolayDegisimHero: BrandPageHeroContent = {
  badge: "MARKALAR · NEDEN ORİJİNAL · KOLAY DEĞİŞİM",
  headingLines: ["Kolay Değişim", "Nasıl Bir Güven Verir?"],
  paragraphs: [
    "Seçtiğiniz cihaz beklentilerinizi karşılamadığında veya ihtiyaçlarınız zamanla değiştiğinde, orijinal ve yetkili kanaldan alınan cihazlarda değişim süreci çok daha net ve güvenilir işler.",
    "Avrasya İşitme olarak, deneme süreci sonrasında veya ihtiyaç değişikliğinde cihazınızı kolayca değiştirebilmeniz için şeffaf bir değişim süreci sunuyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "NET DEĞİŞİM KOŞULLARI",
      accent: "#e11d48",
      title: "Değişim Koşulları Baştan Nettir",
      description: "Değişim hakkının kapsamı ve süresi, satın alma öncesinde açıkça paylaşılır.",
    },
    {
      label: "İHTİYAÇ DEĞİŞİKLİĞİ DESTEĞİ",
      accent: "#be123c",
      title: "İhtiyacınız Değişirse Yanınızdayız",
      description: "İşitme kaybınız ilerlediğinde veya ihtiyaçlarınız değiştiğinde, uygun bir model geçişi değerlendirilebilir.",
    },
    {
      label: "ARIZALI ÜRÜN GÜVENCESİ",
      accent: "#9f1239",
      title: "Üretim Kaynaklı Sorunlarda Hızlı Çözüm",
      description: "Üretim kaynaklı bir sorun tespit edildiğinde, yetkili kanaldan hızlı bir değişim süreci işletilir.",
    },
  ],
  image: {
    src: "/images/oticon/models/jet-px.webp",
    alt: "Kolay değişim güvencesiyle sunulan Oticon Jet PX işitme cihazı görseli",
  },
  floatingCard: {
    title: "Oticon Jet PX",
    description: "İhtiyacınız değişirse kolayca yeni bir modele geçiş yapabilirsiniz.",
  },
  accentColor: "#e11d48",
  accentColorHover: "#be123c",
  accentColorSoft: "rgb(225 29 72 / 0.12)",
  accentColorBorder: "rgb(225 29 72 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(225,29,72,0.35) 0%, rgba(225,29,72,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #2c0a17 60%, #881337 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#be123c",
  heroWaveOpacity: "0.18",
};
