// Hero content for the "Cihaz Temizliği" page (/servis-bakim/
// cihaz-temizligi). Renders through the shared BrandPageHero
// component — same component every content page this session uses.
// Third page of the "Servis & Bakım" series (see header.data.ts's
// servicesMega third column), following Teknik Servis and Periyodik
// Bakım. Both prior siblings' own intro.ts and considerations.ts
// explicitly cross-reference this page for "günlük temizlik ve saklama
// önerileri" — this page delivers on that promise.
//
// Distinct from both prior siblings: this is the reader's own DAILY,
// at-home cleaning routine (wiping, dry storage, what never to use) —
// not the clinic's scheduled professional part-replacement appointment
// (Periyodik Bakım) and not reactive repair for an actual malfunction
// (Teknik Servis). Both are cross-referenced here for anything beyond
// simple daily care.
//
// accentColor: gök mavisi / sky-500 (#0ea5e9) — third color in the
// fresh accent rotation opened for the "Servis & Bakım" column; evokes
// cleanliness/freshness, distinct from Teknik Servis's red and
// Periyodik Bakım's lime.
//
// Hero image: Philips HearLink 30, a fresh model not yet used by any
// prior page this session (verified in public/images/philips-hearing/
// models/hearlink-30.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const cihazTemizligiHero: BrandPageHeroContent = {
  badge: "HİZMETLERİMİZ · SERVİS & BAKIM · CİHAZ TEMİZLİĞİ",
  headingLines: ["Cihaz Temizliği", "Günlük Bakım Rehberi"],
  paragraphs: [
    "Cihaz temizliği, işitme cihazınızı her gün doğru şekilde temizleyip saklayarak performansını korumanıza yardımcı olan basit ama önemli bir alışkanlıktır.",
    "Avrasya İşitme'de, cihazınızı günlük hayatta doğru şekilde temizlemeniz ve saklamanız için size pratik bir rehber sunuyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "GÜNLÜK ALIŞKANLIK",
      accent: "#0ea5e9",
      title: "Her Gün Birkaç Dakika Yeterlidir",
      description: "Basit bir silme ve doğru saklama, cihazınızın performansını korumaya yardımcı olur.",
    },
    {
      label: "DOĞRU MALZEME",
      accent: "#0284c7",
      title: "Su ve Kimyasal Kullanılmaz",
      description: "Cihazınız yalnızca kuru bir bezle ve önerilen aksesuarlarla temizlenmelidir.",
    },
    {
      label: "KURU SAKLAMA",
      accent: "#0369a1",
      title: "Gece Boyunca Kuru Tutulmalıdır",
      description: "Cihazınızı nemden korumak için gece boyunca kuru bir kutuda saklamanız önerilir.",
    },
  ],
  image: {
    src: "/images/philips-hearing/models/hearlink-30.webp",
    alt: "Günlük temizlik rehberi kapsamında ele alınan Philips HearLink 30 işitme cihazı görseli",
  },
  floatingCard: {
    title: "Philips HearLink 30",
    description: "Günlük temizlik rutini uygulanabilecek modellerden biri.",
  },
  accentColor: "#0ea5e9",
  accentColorHover: "#0284c7",
  accentColorSoft: "rgb(14 165 233 / 0.12)",
  accentColorBorder: "rgb(14 165 233 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(14,165,233,0.35) 0%, rgba(14,165,233,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #0a1e2a 60%, #0369a1 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#0284c7",
  heroWaveOpacity: "0.18",
};
