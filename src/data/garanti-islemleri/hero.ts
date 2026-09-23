// Hero content for the "Garanti İşlemleri" page (/servis-bakim/
// garanti-islemleri). Renders through the shared BrandPageHero
// component — same component every content page this session uses.
// Fifth page of the "Servis & Bakım" series (see header.data.ts's
// servicesMega third column), following Teknik Servis, Periyodik Bakım,
// Cihaz Temizliği and Pil & Aksesuar.
//
// IMPORTANT genre note: the existing /neden-orijinal/kolay-degisim page
// already covers the SATISFACTION-BASED exchange guarantee (trial
// dissatisfaction, changing needs, model swaps) as a trust/brand
// differentiator. This page deliberately does NOT repeat that — it
// covers the technical WARRANTY CLAIM process itself: what a
// manufacturing-defect warranty actually covers, what voids it, the
// claim process, and required documentation. comparison.ts stakes out
// this page's own axis (warranty repair vs. Kolay Değişim's exchange)
// to make the distinction explicit for readers.
//
// accentColor: çivit / indigo-600 (#4f46e5) — fifth color in the fresh
// accent rotation opened for the "Servis & Bakım" column; reused from
// the Değerlendirme column's own indigo (Odyometri) since that page
// lives in a different mega-menu column and never co-appears with this
// one. Indigo fits the formal/documentation nature of a warranty page.
//
// Hero image: Bernafon Encanta BTE, a fresh model variant not yet used
// by any prior page this session (verified in public/images/bernafon/
// models/encanta-bte.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const garantiIslemleriHero: BrandPageHeroContent = {
  badge: "HİZMETLERİMİZ · SERVİS & BAKIM · GARANTİ İŞLEMLERİ",
  headingLines: ["Garanti İşlemleri", "Nasıl Yürütülür?"],
  paragraphs: [
    "Garanti işlemleri, cihazınızda üretim kaynaklı bir sorun tespit edildiğinde başvurabileceğiniz, kapsamı ve koşulları net bir şekilde belirlenmiş resmi bir süreçtir.",
    "Avrasya İşitme'de, garanti kapsamınızı netleştiriyor ve gerekli belgelerle süreci sizin için şeffaf bir şekilde yürütüyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "NET KAPSAM",
      accent: "#4f46e5",
      title: "Neyin Kapsandığı Açıkça Belirtilir",
      description: "Üretim kaynaklı sorunlar ile garanti dışı durumlar arasındaki fark size açıkça anlatılır.",
    },
    {
      label: "BELGELİ SÜREÇ",
      accent: "#4338ca",
      title: "Fatura ve Garanti Belgesiyle Yürütülür",
      description: "Süreç, satın alma belgeleriniz üzerinden şeffaf bir şekilde takip edilir.",
    },
    {
      label: "YETKİLİ KANAL GÜVENCESİ",
      accent: "#3730a3",
      title: "Orijinal Ürünlerde Geçerlidir",
      description: "Garanti güvencesi, yetkili kanaldan alınan orijinal ürünlerde geçerlidir.",
    },
  ],
  image: {
    src: "/images/bernafon/models/encanta-bte.webp",
    alt: "Garanti işlemleri kapsamında değerlendirilebilecek Bernafon Encanta BTE işitme cihazı görseli",
  },
  floatingCard: {
    title: "Bernafon Encanta BTE",
    description: "Garanti kapsamında değerlendirilebilecek modellerden biri.",
  },
  accentColor: "#4f46e5",
  accentColorHover: "#4338ca",
  accentColorSoft: "rgb(79 70 229 / 0.12)",
  accentColorBorder: "rgb(79 70 229 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(79,70,229,0.35) 0%, rgba(79,70,229,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #150f2e 60%, #3730a3 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#4338ca",
  heroWaveOpacity: "0.18",
};
