// Hero content for the Coselgi brand page (/markalar/coselgi). Renders
// through the shared BrandPageHero component.
//
// Positioning axis: Widex'e bağlı, ortama otomatik uyum sağlayan bir
// teknoloji + SGK'ya uygun erişilebilirlik — Coselgi'nin gerçek,
// doğrulanabilir konumu, Danimarka merkezli Widex'e bağlı bir marka
// olması ve Acoustic Environment Technology ile ortamı analiz ederek ses
// ayarlarını otomatik optimize etmesidir. Kuruluş yılı (1961) tek bir
// kaynakta bulunmuştur ve bu projede tam güvenle doğrulanamamıştır —
// yayından önce insan kontrolü önerilir. Widex'in bu projede zaten
// işlenen PureSound/minimal işleme ekseninden farklı olarak, Coselgi'nin
// ekseni burada "Widex teknolojisi + SGK'ya uygun erişilebilir fiyat
// noktası" olarak konumlandırıldı.
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
  badge: "COSELGI · WIDEX GÜVENCESİ",
  headingLines: ["Coselgi ile Ortama", "Otomatik Uyum Sağlayan Ses"],
  paragraphs: [
    "Coselgi, Danimarka merkezli Widex'e bağlı, Acoustic Environment Technology ile bulunduğunuz ortamı analiz ederek ses ayarlarını otomatik optimize eden bir markadır.",
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
      label: "WIDEX",
      accent: "#4FB3E8",
      title: "Widex Güvencesi",
      description: "Dünyanın önde gelen işitme teknolojisi markalarından Widex'e bağlıdır.",
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
  // composition established for Signia, using Coselgi's own
  // already-researched accent (#1595D8). Oticon/Phonak excluded.
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(21,149,216,0.35) 0%, rgba(21,149,216,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #061821 60%, #082234 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#0F74AC",
  heroWaveOpacity: "0.18",
};
