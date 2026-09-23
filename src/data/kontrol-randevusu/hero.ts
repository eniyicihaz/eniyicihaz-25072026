// Hero content for the "Kontrol Randevusu" page (/uygulama-ayar/
// kontrol-randevusu). Renders through the shared BrandPageHero
// component — same component every content page this session uses.
// Sixth and final page of the "Uygulama & Ayar" series (see
// header.data.ts's servicesMega second column), following Cihaz
// Uygulama, Kişiye Özel Programlama, Cihaz Deneme, Kalıp Alımı and
// Uzaktan Ayar. Once this page is built, every item in this column is
// a real route.
//
// Distinct from every prior sibling: this is a routine, PREVENTIVE
// check-up visit (hearing re-screen + device performance review + a
// physical/mold check together), typically recommended on a fixed
// cadence regardless of complaints — not triggered by a specific
// dissatisfaction the way Kişiye Özel Programlama or Uzaktan Ayar are.
// Also deliberately distinct from the still-unbuilt "Periyodik Bakım"
// page (servicesMega's third column, Servis & Bakım) which will cover
// the device's own physical/hardware maintenance — this page is framed
// around the holistic hearing+device review, not hardware servicing;
// comparison.ts and considerations.ts both make this framing explicit.
//
// accentColor: grafit / slate-600 (#475569) — sixth and final color in
// the fresh accent rotation opened for this series; a deliberately
// muted, steady tone fitting a routine, low-drama check-up visit,
// distinct from every warmer/more vivid color used by the five prior
// siblings.
//
// Hero image: Beltone Serene, a fresh model not yet used by any prior
// page this session (verified in public/images/beltone/models/
// serene.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const kontrolRandevusuHero: BrandPageHeroContent = {
  badge: "HİZMETLERİMİZ · UYGULAMA & AYAR · KONTROL RANDEVUSU",
  headingLines: ["Kontrol Randevusu", "Ne Zaman ve Neden Gereklidir?"],
  paragraphs: [
    "Kontrol randevusu, herhangi bir şikayetiniz olmasa dahi işitme durumunuzu ve cihazınızın performansını düzenli aralıklarla birlikte gözden geçirdiğimiz önleyici bir ziyarettir.",
    "Avrasya İşitme'de, kısa bir işitme yeniden değerlendirmesinden cihaz performans kontrolüne kadar uzanan kontrol randevularını sizin için planlıyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "DÜZENLİ ARALIKLARLA",
      accent: "#475569",
      title: "Şikayet Beklemeden Yapılır",
      description: "Kontrol randevuları, herhangi bir şikayet olmasa da önleyici olarak planlanır.",
    },
    {
      label: "BÜTÜNSEL DEĞERLENDİRME",
      accent: "#334155",
      title: "İşitme ve Cihaz Birlikte İncelenir",
      description: "Hem işitme durumunuz hem de cihazınızın performansı aynı randevuda gözden geçirilir.",
    },
    {
      label: "ERKEN FARK ETME",
      accent: "#1e293b",
      title: "Küçük Değişiklikleri Erken Yakalar",
      description: "Zamanla oluşabilecek küçük değişiklikler, düzenli kontrollerle daha erken fark edilebilir.",
    },
  ],
  image: {
    src: "/images/beltone/models/serene.webp",
    alt: "Kontrol randevusunda performansı gözden geçirilebilecek Beltone Serene işitme cihazı görseli",
  },
  floatingCard: {
    title: "Beltone Serene",
    description: "Kontrol randevusunda performansı değerlendirilebilecek modellerden biri.",
  },
  accentColor: "#475569",
  accentColorHover: "#334155",
  accentColorSoft: "rgb(71 85 105 / 0.12)",
  accentColorBorder: "rgb(71 85 105 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(71,85,105,0.35) 0%, rgba(71,85,105,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #161b26 60%, #1e293b 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#334155",
  heroWaveOpacity: "0.18",
};
