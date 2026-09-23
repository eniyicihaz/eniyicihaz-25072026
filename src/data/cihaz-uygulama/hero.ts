// Hero content for the "Cihaz Uygulama" page (/uygulama-ayar/
// cihaz-uygulama). Renders through the shared BrandPageHero component —
// same component every content page this session uses. First page of
// the new "Uygulama & Ayar" series (see header.data.ts's servicesMega
// second column). A new content genre distinct from both the trust
// pages (Neden Orijinal) and the diagnostic Değerlendirme series: this
// series covers the fitting/adjustment SERVICE itself — what happens
// after a device has already been chosen, from the first fitting
// appointment through ongoing programming and follow-up care.
//
// This specific page's scope is the first fitting appointment as a
// whole (physical placement check, audiogram-based initial programming,
// verification measurement, usage orientation) — distinct from the
// next sibling page "Kişiye Özel Programlama," which will go deeper
// into the personalized software-programming methodology itself
// (fitting formulas, real-ear verification detail, sound-environment
// programs). comparison.ts already stakes out this page's own axis
// (generic factory setting vs. audiogram-based professional fitting)
// to avoid overlapping that future page's territory.
//
// accentColor: mavi / blue-600 (#2563eb) — first color in a fresh
// accent rotation opened for the "Uygulama & Ayar" column; reused from
// the Kulak Arkası (BTE) page's own blue since that page lives in a
// different mega-menu column (devicesMega) and never co-appears with
// this one, consistent with the site's accent-reuse rule (never reusing
// a hue as PRIMARY within the same dropdown column; reuse across
// different columns/megas is fine).
//
// Hero image: Philips HearLink 40, a fresh model not yet used by any
// prior page this session (verified in public/images/philips-hearing/
// models/hearlink-40.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const cihazUygulamaHero: BrandPageHeroContent = {
  badge: "HİZMETLERİMİZ · UYGULAMA & AYAR · CİHAZ UYGULAMA",
  headingLines: ["İşitme Cihazı Uygulama", "Randevusu Nasıl İşler?"],
  paragraphs: [
    "Cihaz uygulama, size önerilen işitme cihazının fiziksel olarak yerleştirildiği, odyogramınıza göre ilk kez programlandığı ve kullanım konusunda bilgilendirildiğiniz randevudur.",
    "Avrasya İşitme'de, cihazınızı yalnızca teslim etmekle kalmıyor; doğrulama ölçümleri ve kullanım eğitimiyle birlikte kapsamlı bir uygulama süreci sunuyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "ODYOGRAMA DAYALI PROGRAMLAMA",
      accent: "#2563eb",
      title: "Cihazınız Size Özel Programlanır",
      description: "İlk programlama, işitme testi sonuçlarınıza göre kişiselleştirilir.",
    },
    {
      label: "DOĞRULAMA ÖLÇÜMÜ",
      accent: "#1d4ed8",
      title: "Ayarlar Ölçümle Kontrol Edilir",
      description: "Gerçek kulak ölçümü gibi yöntemlerle ayarların uygunluğu doğrulanır.",
    },
    {
      label: "KULLANIM EĞİTİMİ",
      accent: "#1e40af",
      title: "Cihazınızı Nasıl Kullanacağınızı Öğrenirsiniz",
      description: "Takma, çıkarma, temizlik ve günlük kullanım hakkında bilgilendirilirsiniz.",
    },
  ],
  image: {
    src: "/images/philips-hearing/models/hearlink-40.webp",
    alt: "Cihaz uygulama randevusunda programlanabilecek Philips HearLink 40 işitme cihazı görseli",
  },
  floatingCard: {
    title: "Philips HearLink 40",
    description: "Uygulama randevusunda programlanabilecek modellerden biri.",
  },
  accentColor: "#2563eb",
  accentColorHover: "#1d4ed8",
  accentColorSoft: "rgb(37 99 235 / 0.12)",
  accentColorBorder: "rgb(37 99 235 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(37,99,235,0.35) 0%, rgba(37,99,235,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #0a1530 60%, #1e40af 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#1d4ed8",
  heroWaveOpacity: "0.18",
};
