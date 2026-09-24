// Hero content for the "Online İşitme Testi" page
// (/degerlendirme/online-isitme-testi). Renders through the shared
// BrandPageHero component — same component every "Değerlendirme"
// series page uses. Sixth page of the series (after Ücretsiz İşitme
// Testi, Odyometri, Timpanometri, Çocuk İşitme Testi, Tinnitus
// Değerlendirme) — but a distinct topic: a self-administered,
// browser-based screening tool, not a clinical/in-person procedure.
// Positioning must stay consistent with
// src/data/ucretsiz-isitme-testi/comparison.ts's "Klinik vs Online
// Test" table: online results are a general impression only, never a
// diagnosis and never expressed in dB/dB HL (PRINCIPLES.md §5).
//
// accentColor: gül kırmızısı / rose-600 (#e11d48) — sixth color in the
// Değerlendirme series' accent rotation (cyan, indigo, purple, orange,
// emerald, now rose) — distinct from every sibling and from the site's
// primary blue.
//
// image: an existing, already-used product photo (ReSound Omnia),
// following the same pattern as every non-photographic Değerlendirme
// sibling (odyometri → Unitron Blu, timpanometri → Bernafon Encanta,
// vb.) — no new/fake photo asset invented for this page.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const onlineIsitmeTestiHero: BrandPageHeroContent = {
  badge: "HİZMETLERİMİZ · DEĞERLENDİRME · ONLINE İŞİTME TESTİ",
  headingLines: ["Online İşitme Testi", "Ücretsiz Ön Değerlendirme"],
  paragraphs: [
    "Online işitme taraması; bilgisayarınıza veya telefonunuza taktığınız kulaklıkla, tarayıcınız üzerinden birkaç dakikada tamamlayabileceğiniz, ücretsiz bir ön değerlendirmedir. Sağ ve sol kulağınız ayrı ayrı test edilir.",
    "Darıca, Gebze ve Çayırova'da yaşıyorsanız, bu taramadan hemen sonra Avrasya İşitme'deki profesyonel işitme testine yönlendirilirsiniz — online tarama klinik odyometrinin yerini tutmaz, yalnızca genel bir ön fikir verir.",
  ],
  ctaPrimary: { label: "Taramayı Hemen Başlat", href: "#online-isitme-taramasi" },
  ctaSecondary: { label: "Hemen Ara", href: contactConfig.phone.href },
  features: [
    {
      label: "SAF SES TONLARI",
      accent: "#e11d48",
      title: "500–8000 Hz Arası 5 Frekans",
      description: "Web Audio API ile üretilen saf sinüs tonlarıyla farklı frekanslardaki duyma yanıtınız ölçülür.",
    },
    {
      label: "AYRI KULAK TESTİ",
      accent: "#be123c",
      title: "Sağ ve Sol Kulak Ayrı Ayrı Test Edilir",
      description: "Her kulak, kendi sırasında ve birbirinden bağımsız olarak taranır.",
    },
    {
      label: "TEŞHİS DEĞİL, ÖN DEĞERLENDİRME",
      accent: "#9f1239",
      title: "Sonuçlar dB Olarak Gösterilmez",
      description: "Bu bir online tarama aracıdır; kesin değerlendirme için profesyonel odyolojik test gerekir.",
    },
  ],
  image: {
    src: "/images/resound/models/omnia.webp",
    alt: "Online işitme taraması sonrasında değerlendirilebilecek ReSound Omnia kulak arkası işitme cihazı",
  },
  floatingCard: {
    title: "ReSound Omnia",
    description: "Tarama sonrasında değerlendirilebilecek modellerden biri.",
  },
  accentColor: "#e11d48",
  accentColorHover: "#be123c",
  accentColorSoft: "rgb(225 29 72 / 0.12)",
  accentColorBorder: "rgb(225 29 72 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(225,29,72,0.35) 0%, rgba(225,29,72,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #2a0a13 60%, #9f1239 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#be123c",
  heroWaveOpacity: "0.18",
};
