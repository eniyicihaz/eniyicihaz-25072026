// Hero content for the "Kişiye Özel Programlama" page (/uygulama-ayar/
// kisiye-ozel-programlama). Renders through the shared BrandPageHero
// component — same component every content page this session uses.
// Second page of the "Uygulama & Ayar" series (see header.data.ts's
// servicesMega second column), following Cihaz Uygulama.
//
// Distinct from Cihaz Uygulama: that page covers the first fitting
// appointment as a whole (physical check, initial audiogram-based
// programming, verification, orientation); this page goes deeper into
// the ongoing, iterative fine-tuning craftsmanship that follows —
// feedback-driven gain/compression adjustment, multiple environment-
// specific listening programs, and data-logging-informed refinement.
// comparison.ts's own axis (single general-purpose program vs. multiple
// environment-specific programs) is deliberately distinct from Cihaz
// Uygulama's own (factory setting vs. professional fitting).
//
// accentColor: eflatun / violet-600 (#7c3aed) — second color in the
// fresh accent rotation opened for the "Uygulama & Ayar" column on
// Cihaz Uygulama's hero.ts (blue #2563eb); violet is a full hue-family
// away and distinct from Değerlendirme's own purple (#9333ea), even
// though both columns are visible together in the same open
// "Hizmetlerimiz" dropdown.
//
// Hero image: Unitron Insera, a fresh model not yet used by any prior
// page this session (verified in public/images/unitron/models/
// insera.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const kisiyeOzelProgramlamaHero: BrandPageHeroContent = {
  badge: "HİZMETLERİMİZ · UYGULAMA & AYAR · KİŞİYE ÖZEL PROGRAMLAMA",
  headingLines: ["Kişiye Özel Programlama", "İle İnce Ayar Nasıl Yapılır?"],
  paragraphs: [
    "Kişiye özel programlama, ilk uygulama randevusundan sonra geri bildiriminize ve kullanım verilerinize göre cihazınızın ayarlarının zaman içinde ince ayarlanmasıdır.",
    "Avrasya İşitme'de, farklı ortamlardaki deneyiminizi dinleyerek ve gerektiğinde kullanım verilerinden faydalanarak cihazınızı size özel hale getiriyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "GERİ BİLDİRİME DAYALI",
      accent: "#7c3aed",
      title: "Deneyiminize Göre Ayarlanır",
      description: "Farklı ortamlardaki geri bildiriminiz, ince ayarların temelini oluşturur.",
    },
    {
      label: "ÇOKLU ORTAM PROGRAMLARI",
      accent: "#6d28d9",
      title: "Her Ortam İçin Ayrı Bir Program",
      description: "Sessiz, gürültülü, müzik gibi farklı ortamlar için ayrı programlar oluşturulabilir.",
    },
    {
      label: "VERİ KAYDI DESTEKLİ",
      accent: "#5b21b6",
      title: "Kullanım Verileriniz Yol Gösterir",
      description: "Bazı modellerde, günlük kullanım verileri ince ayar kararlarına katkı sağlar.",
    },
  ],
  image: {
    src: "/images/unitron/models/insera.webp",
    alt: "Kişiye özel programlama sürecinde ince ayarlanabilecek Unitron Insera işitme cihazı görseli",
  },
  floatingCard: {
    title: "Unitron Insera",
    description: "İnce ayar sürecinde kişiselleştirilebilecek modellerden biri.",
  },
  accentColor: "#7c3aed",
  accentColorHover: "#6d28d9",
  accentColorSoft: "rgb(124 58 237 / 0.12)",
  accentColorBorder: "rgb(124 58 237 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #1a0f2e 60%, #5b21b6 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#6d28d9",
  heroWaveOpacity: "0.18",
};
