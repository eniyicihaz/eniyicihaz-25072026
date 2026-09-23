// Hero content for the "Teknik Servis" page (/servis-bakim/
// teknik-servis). Renders through the shared BrandPageHero component —
// same component every content page this session uses. First page of
// the new "Servis & Bakım" series (see header.data.ts's servicesMega
// third column). A new content genre distinct from both Değerlendirme
// (diagnostic) and Uygulama & Ayar (fitting/adjustment services): this
// series covers what happens when something is actually malfunctioning
// or needs physical upkeep, starting with reactive repair.
//
// Distinct from the still-unbuilt "Periyodik Bakım" sibling (same
// column): that page will cover routine, scheduled physical
// maintenance (cleaning, filter changes) done preventively; this page
// covers REACTIVE repair when a device is already malfunctioning
// (no sound, won't turn on, physical or water damage, unresolved
// connectivity issues). Also distinct from Kontrol Randevusu
// (Uygulama & Ayar) — that page's own routine hearing+performance
// review is cross-referenced here for users whose issue may not
// actually require a hardware repair.
//
// accentColor: kırmızı / red-600 (#dc2626) — first color in a fresh
// accent rotation opened for the "Servis & Bakım" column; reused from
// elsewhere on the site since that page lives in a different mega-menu
// column and never co-appears with this one. Red fits the
// urgency/repair connotation appropriately here, distinct from every
// color used in the Değerlendirme and Uygulama & Ayar columns.
//
// Hero image: Sonic Enchant, a fresh model not yet used by any prior
// page this session (verified in public/images/sonic/models/
// enchant.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const teknikServisHero: BrandPageHeroContent = {
  badge: "HİZMETLERİMİZ · SERVİS & BAKIM · TEKNİK SERVİS",
  headingLines: ["Teknik Servis", "Hizmetimiz Nasıl İşler?"],
  paragraphs: [
    "Teknik servis, ses kesintisi, açılmama sorunu veya fiziksel hasar gibi durumlarla karşılaştığınızda cihazınızın teşhis ve onarım sürecini kapsayan hizmetimizdir.",
    "Avrasya İşitme'de, sorununuzu yerinde teşhis etmeye çalışıyor; gerektiğinde cihazınızı orijinal yedek parça kullanan yetkili üretici servisine yönlendiriyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "YERİNDE TEŞHİS",
      accent: "#dc2626",
      title: "Sorununuz Önce Kliniğimizde İncelenir",
      description: "Birçok sorun, üreticiye göndermeden önce kliniğimizde teşhis edilebilir.",
    },
    {
      label: "YETKİLİ SERVİS AĞI",
      accent: "#b91c1c",
      title: "Gerektiğinde Üretici Servisine Yönlendirilir",
      description: "Kapsamlı onarımlar, orijinal yedek parça kullanan yetkili servis ağına iletilir.",
    },
    {
      label: "TAKİP EDİLEBİLİR SÜREÇ",
      accent: "#991b1b",
      title: "Onarım Durumunuzu Takip Edebilirsiniz",
      description: "Cihazınızın onarım sürecindeki durumu hakkında bilgi alabilirsiniz.",
    },
  ],
  image: {
    src: "/images/sonic/models/enchant.webp",
    alt: "Teknik servis sürecinde teşhis edilebilecek Sonic Enchant işitme cihazı görseli",
  },
  floatingCard: {
    title: "Sonic Enchant",
    description: "Teknik servis kapsamında değerlendirilebilecek modellerden biri.",
  },
  accentColor: "#dc2626",
  accentColorHover: "#b91c1c",
  accentColorSoft: "rgb(220 38 38 / 0.12)",
  accentColorBorder: "rgb(220 38 38 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(220,38,38,0.35) 0%, rgba(220,38,38,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #2a0a0a 60%, #991b1b 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#b91c1c",
  heroWaveOpacity: "0.18",
};
