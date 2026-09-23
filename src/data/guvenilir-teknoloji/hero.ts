// Hero content for the "Güvenilir Teknoloji" page
// (/neden-orijinal/guvenilir-teknoloji). Renders through the shared
// BrandPageHero component — same component every /isitme-cihazlari/*,
// /teknolojiler/* and /ihtiyaciniza-gore/* page uses. First page of the
// "Neden Orijinal" series (see header.data.ts's brandsMega second
// column) — a new content genre for this component set: not a device
// category or a needs profile, but a trust/authenticity topic within
// the Markalar mega (why buying original, authorized-channel devices
// matters). The Brand Component Architecture is repurposed accordingly:
// "candidacy" sections become authenticity red-flags and verification
// steps, and the KulakArkasiComparison table compares an original,
// authorized-channel product against a parallel-import/counterfeit one.
//
// accentColor: koyu mavi / blue-700 (#1d4ed8) — this page opens a fresh
// accent rotation for the brandsMega "Neden Orijinal" column. It is not
// bound by the devicesMega rotation's "never reuse a hue" rule, since
// Neden Orijinal pages live under an entirely different top-nav mega
// (Markalar) and will never appear side-by-side with devicesMega pages
// in the same menu — the risk of visual collision that rule guarded
// against doesn't apply across megas. Blue was chosen deliberately here
// (rather than avoided as "already used" on the BTE page) for its
// trust/certification association; the shade (blue-700) is a full step
// darker than BTE's blue-600 (#2563eb) so the two remain visually
// distinguishable if ever seen in the same session.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const guvenilirTeknolojiHero: BrandPageHeroContent = {
  badge: "MARKALAR · NEDEN ORİJİNAL · GÜVENİLİR TEKNOLOJİ",
  headingLines: ["Güvenilir Teknoloji", "Neden Önemlidir?"],
  paragraphs: [
    "Orijinal ve yetkili distribütör güvencesiyle satılan işitme cihazları; üretici tarafından test edilmiş, sertifikalı ve güncel yazılıma sahip güvenilir bir teknoloji sunar.",
    "Avrasya İşitme olarak, dünyaca tanınan markaların yalnızca orijinal ve yetkili kanaldan gelen ürünlerini sunuyor; her cihazın güvenilirliğini garanti belgesi ve seri numarasıyla doğruluyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "YETKİLİ DİSTRİBÜTÖRLÜK",
      accent: "#1d4ed8",
      title: "Dünyaca Tanınan Markaların Yetkili Satıcısıyız",
      description: "Oticon, Phonak, Signia, Widex, ReSound ve NuEar gibi markaların orijinal ürünlerini yetkili kanaldan sunuyoruz.",
    },
    {
      label: "ÜRETİCİ GARANTİSİ",
      accent: "#1e40af",
      title: "Her Cihaz Üretici Garantisiyle Gelir",
      description: "Orijinal ürünler, üretici garantisi ve resmi kayıt sistemiyle güvence altındadır.",
    },
    {
      label: "SERİ NUMARASI DOĞRULAMA",
      accent: "#1e3a8a",
      title: "Seri Numarası ile Orijinallik Doğrulanabilir",
      description: "Her cihazın seri numarası, üreticinin resmi sistemi üzerinden doğrulanabilir.",
    },
  ],
  image: {
    src: "/images/oticon/models/opn-s.webp",
    alt: "Güvenilir ve kanıtlanmış teknolojisiyle öne çıkan orijinal Oticon Opn S işitme cihazı görseli",
  },
  floatingCard: {
    title: "Oticon Opn S",
    description: "Kanıtlanmış ve güvenilir bir teknoloji.",
  },
  accentColor: "#1d4ed8",
  accentColorHover: "#1e40af",
  accentColorSoft: "rgb(29 78 216 / 0.12)",
  accentColorBorder: "rgb(29 78 216 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(29,78,216,0.35) 0%, rgba(29,78,216,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #0f172a 60%, #1e3a8a 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#1e40af",
  heroWaveOpacity: "0.18",
};
