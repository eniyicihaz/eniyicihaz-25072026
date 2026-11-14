// Hero content for the Coselgi brand page (/markalar/coselgi). Renders
// through the shared BrandPageHero component.
//
// Bu dosyadaki metin alanları (rozet, paragraflar, özellik kartları) yayında KULLANILMAZ: sayfa içeriği
// src/data/brand-unique/coselgi.ts'ten gelir ve buildUniqueBrandPage bu alanların üzerine yazar. Buradan yalnızca
// renk/arka plan değerleri ve görsel kaydı okunur. Üretici grubu/sahiplik anlatımı sitede yer almaz
// (bkz. brand-unique/build.ts başlığı); 2026-11-14'te bu dosyadan da çıkarıldı.
//
// accentColor: parlak camgöbeği-mavi (#1595D8), bu projenin kendi gerçek
// Coselgi logosundan (/images/brands/coselgi-logo-seffaf.webp — mavi
// sarmal simge ve "coselgi" yazısı) doğrudan görsel olarak okunarak
// belirlendi. Bu settteki lacivert tonlu markalardan (Audio Service,
// Beltone, Maico, Unitron) farklı olarak, burada daha canlı ve
// turkuvaza yakın bir mavi ton kullanılarak net bir ayrışma sağlandı.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const coselgiHero: BrandPageHeroContent = {
  badge: "COSELGI · İŞİTME CİHAZLARI",
  headingLines: ["Coselgi ile Ortama", "Otomatik Uyum Sağlayan Ses"],
  paragraphs: [
    "Coselgi, merkezimizde çalıştığımız işitme cihazı markalarından biridir.",
    "Effect, Mojo ve diğer Coselgi modellerini Avrasya İşitme'de keşfedin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "AI",
      accent: "#1595D8",
      title: "Acoustic Environment Technology",
      description: "Restoran, sokak, ev gibi farklı akustik ortamları analiz ederek ses ayarlarını otomatik uyarlar.",
    },
    {
      label: "MODEL",
      accent: "#4FB3E8",
      title: "Effect ve Mojo",
      description: "Sitemizde listelenen Coselgi model aileleri.",
    },
    {
      label: "SGK",
      accent: "#0F74AC",
      title: "SGK'ya Uygun Seçenekler",
      description: "SGK anlaşmalı merkezlerde sıkça tercih edilen, erişilebilir bir fiyat noktası sunar.",
    },
  ],
  image: {
    src: "/images/pages/coselgi-hero.webp",
    alt: "Coselgi Effect kulak arkası işitme cihazı",
  },
  floatingCard: {
    title: "Otomatik Ortam Uyumu",
    description: "Bulunduğunuz ortama göre ses ayarlarını otomatik optimize eder.",
  },
  accentColor: "#1595D8",
  accentColorHover: "#0F74AC",
  accentColorSoft: "rgb(21 149 216 / 0.12)",
  accentColorBorder: "rgb(21 149 216 / 0.4)",
  // Hero Background System rollout (2026-07) — same layered dark
  // composition established for the earlier brand pages, using Coselgi's own
  // already-researched accent (#1595D8). Oticon/Phonak excluded.
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(21,149,216,0.35) 0%, rgba(21,149,216,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #061821 60%, #082234 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#0F74AC",
  heroWaveOpacity: "0.18",
};
