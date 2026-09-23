// Hero content for the "Cihaz Deneme" page (/uygulama-ayar/
// cihaz-deneme). Renders through the shared BrandPageHero component —
// same component every content page this session uses. Third page of
// the "Uygulama & Ayar" series (see header.data.ts's servicesMega
// second column), following Cihaz Uygulama and Kişiye Özel Programlama.
//
// Distinct from both prior siblings and from the unrelated "Kolay
// Değişim" page (Neden Orijinal series, a different mega-menu column):
// Cihaz Uygulama's own "Ortam Senaryoları Üzerinde Deneme" step is a
// brief, in-appointment simulation; this page covers the extended,
// take-home trial period BEFORE a purchase decision is made — real
// daily-life use across days or weeks, with no purchase obligation.
// Kolay Değişim, by contrast, covers the exchange/return guarantee
// AFTER a purchase has already happened. comparison.ts stakes out this
// page's own axis (brief in-clinic trial vs. extended take-home trial)
// to keep the distinction explicit.
//
// accentColor: deniz mavisi-yeşili / teal-600 (#0d9488) — third color in
// the fresh accent rotation opened for the "Uygulama & Ayar" column;
// reused from the Ücretsiz Danışmanlık page's own teal since that page
// lives in a different mega-menu column (brandsMega) and never
// co-appears with this one.
//
// Hero image: Rexton Reach, a fresh model not yet used by any prior
// page this session (verified in public/images/rexton/models/
// reach.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const cihazDenemeHero: BrandPageHeroContent = {
  badge: "HİZMETLERİMİZ · UYGULAMA & AYAR · CİHAZ DENEME",
  headingLines: ["Cihaz Deneme", "Süreci Nasıl İşler?"],
  paragraphs: [
    "Cihaz deneme, satın almadan önce önerilen işitme cihazını günlük hayatınızda gerçek koşullarda test etmenizi sağlayan, satın alma yükümlülüğü olmayan bir süreçtir.",
    "Avrasya İşitme'de, doğru karar verebilmeniz için cihazı ev, iş ve sosyal ortamlarınızda deneyimlemenize imkân tanıyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "SATIN ALMA YÜKÜMLÜLÜĞÜ YOK",
      accent: "#0d9488",
      title: "Karar Vermeden Önce Deneyebilirsiniz",
      description: "Deneme süresi boyunca satın alma zorunluluğunuz bulunmaz.",
    },
    {
      label: "GERÇEK YAŞAM KOŞULLARI",
      accent: "#0f766e",
      title: "Günlük Hayatınızda Test Edersiniz",
      description: "Cihazı ev, iş ve sosyal ortamlarınızda gerçek koşullarda deneyimlersiniz.",
    },
    {
      label: "ARA KONTROL DESTEĞİ",
      accent: "#115e59",
      title: "Deneme Süresince Yalnız Bırakılmazsınız",
      description: "Deneme süresi boyunca geri bildiriminizi almak için ara kontrol seansları önerilir.",
    },
  ],
  image: {
    src: "/images/rexton/models/reach.webp",
    alt: "Cihaz deneme sürecinde deneyimlenebilecek Rexton Reach işitme cihazı görseli",
  },
  floatingCard: {
    title: "Rexton Reach",
    description: "Deneme sürecinde deneyimlenebilecek modellerden biri.",
  },
  accentColor: "#0d9488",
  accentColorHover: "#0f766e",
  accentColorSoft: "rgb(13 148 136 / 0.12)",
  accentColorBorder: "rgb(13 148 136 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(13,148,136,0.35) 0%, rgba(13,148,136,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #0a2523 60%, #115e59 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#0f766e",
  heroWaveOpacity: "0.18",
};
