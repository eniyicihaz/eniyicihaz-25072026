// Hero content for the Maico brand page (/markalar/maico). Renders
// through the shared BrandPageHero component.
//
// Positioning axis: odyolojik ölçüm bilimi mirası + Demant Grubu
// mühendisliği — MAICO'nun gerçek, doğrulanabilir konumu, 1937'de
// Minneapolis'te "audiometer" (odyometre) terimini literatüre kazandıran
// şirket olarak kurulması, 1991'de Bosch'un odyoloji bölümüyle
// birleşmesi ve 1995'ten bu yana Demant Grubu'na (Oticon, Bernafon, Sonic
// ile aynı çatı) bağlı olmasıdır. Bu projede MAICO'nun işitme cihazı
// ürün ailelerine özgü, bağımsız kaynaklarla tam güvenle doğrulanmış bir
// isim seti bulunamadı — bu nedenle eksen, markanın somut ve doğrulanmış
// güçlü yanına, yani "ölçüm bilimindeki köklü mirası", odaklandı. Bu,
// Bernafon'un hareket algılama, Sonic'in SoundDNA veya Philips HearLink'in
// tüketici markası eksenlerinden tamamen farklı, gerçek bir konumlandırma.
//
// accentColor: koyu lacivert (#10233F), bu projenin kendi gerçek MAICO
// logosundan (/images/brands/maico-logo-seffaf.webp — koyu lacivert "M"
// simgesi ve "MAICO" yazısı) doğrudan görsel olarak okunarak belirlendi.
// Bu settteki lacivert tonlu dört markadan biri (Audio Service, Beltone,
// Unitron ile birlikte) — burada en koyu, neredeyse siyaha yakın bir
// lacivert tercih edilerek diğerlerinden ayrıştırıldı.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const maicoHero: BrandPageHeroContent = {
  badge: "MAICO · ÖLÇÜM BİLİMİ MİRASI",
  headingLines: ["MAICO ile Ölçüm Bilimine", "Dayalı Bir İşitme Deneyimi"],
  paragraphs: [
    "MAICO, 1937'de \"audiometer\" (odyometre) terimini literatüre kazandıran köklü bir markadır; bugün Oticon ve Bernafon ile aynı çatı olan Demant Grubu'na bağlıdır.",
    "MAICO'nun Bluetooth'lu, kulak arkası ve kulak içi işitme cihazı seçeneklerini Avrasya İşitme'de keşfedin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "1937",
      accent: "#10233F",
      title: "Odyometre Mirası",
      description: "\"Audiometer\" terimini literatüre kazandıran, ölçüm biliminde öncü bir marka.",
    },
    {
      label: "DEMANT",
      accent: "#2A4A78",
      title: "Demant Grubu Mühendisliği",
      description: "1995'ten bu yana Oticon ve Bernafon ile aynı global grubun bir parçasıdır.",
    },
    {
      label: "DE",
      accent: "#0A1830",
      title: "Berlin Merkezi",
      description: "MAICO Diagnostics GmbH, 2005'ten bu yana Berlin merkezli olarak faaliyet gösterir.",
    },
  ],
  image: {
    src: "/images/pages/maico-hero.webp",
    alt: "MAICO kulak arkası (BTE) işitme cihazı",
  },
  floatingCard: {
    title: "Ölçüm Bilimi Mirası",
    description: "1937'den bu yana odyolojik ölçümde öncü bir geleneğe sahiptir.",
  },
  accentColor: "#10233F",
  accentColorHover: "#0A1830",
  accentColorSoft: "rgb(16 35 63 / 0.12)",
  accentColorBorder: "rgb(16 35 63 / 0.4)",
  // Hero Background System rollout (2026-07) — same layered dark
  // composition established for Signia, using MAICO's own
  // already-researched accent (#10233F). Oticon/Phonak excluded.
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(16,35,63,0.35) 0%, rgba(16,35,63,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #070D18 60%, #0A1428 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#0A1830",
  heroWaveOpacity: "0.18",
  // Contrast fix (2026-07): MAICO's real accent (#10233F) is dark enough
  // that using it directly for the Hero's badge text / CTA button
  // background / floating-icon color was nearly invisible against the
  // Hero's own dark background (confirmed visually — the "Hemen Ara"
  // button text was unreadable). heroAccent/heroAccentHover supply a
  // brighter, same-hue navy for those Hero-only UI elements; accentColor
  // itself is untouched and still drives every other section's badges/
  // icons/borders on the page's white backgrounds, where the original
  // dark navy already reads perfectly well. ctaTextColor switches the
  // button label from the shared default (a dark near-black, meant for
  // brands with a light accent) to white. heroTextMuted nudges the
  // paragraph opacity up slightly for extra safety margin per the
  // reported "description blends into background" concern.
  heroAccent: "#2F5A96",
  heroAccentHover: "#25477A",
  ctaTextColor: "#FFFFFF",
  heroTextMuted: "rgba(255, 255, 255, 0.85)",
};
