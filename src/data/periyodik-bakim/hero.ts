// Hero content for the "Periyodik Bakım" page (/servis-bakim/
// periyodik-bakim). Renders through the shared BrandPageHero
// component — same component every content page this session uses.
// Second page of the "Servis & Bakım" series (see header.data.ts's
// servicesMega third column), following Teknik Servis.
//
// Distinct from every prior sibling: this is a scheduled, PROACTIVE
// clinic appointment where wearable/consumable parts (wax guards,
// tubing, domes) are professionally replaced and the device is
// inspected before wear becomes a problem — not a reactive repair
// (Teknik Servis), not a holistic hearing+performance review (Kontrol
// Randevusu), and deliberately lighter on cleaning specifics than the
// still-unbuilt "Cihaz Temizliği" sibling, which will own the
// daily-at-home-care education angle; considerations.ts cross-
// references that page explicitly.
//
// accentColor: misket limonu / lime-600 (#65a30d) — second color in the
// fresh accent rotation opened for the "Servis & Bakım" column on
// Teknik Servis's hero.ts (red); lime evokes freshness/renewal, fitting
// a proactive maintenance service, and is a full hue-family away from
// red.
//
// Hero image: Unitron Stride, a fresh BTE model not yet used by any
// prior page this session, and thematically apt since wax-guard/tubing
// maintenance is most relevant to BTE/RIC devices (verified in
// public/images/unitron/models/stride.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const periyodikBakimHero: BrandPageHeroContent = {
  badge: "HİZMETLERİMİZ · SERVİS & BAKIM · PERİYODİK BAKIM",
  headingLines: ["Periyodik Bakım", "Randevusu Ne İçerir?"],
  paragraphs: [
    "Periyodik bakım, işitme cihazınızın balmumu filtresi, tüp ve kulak ucu gibi aşınan parçalarının düzenli aralıklarla profesyonelce yenilendiği önleyici bir randevudur.",
    "Avrasya İşitme'de, bir sorun oluşmadan önce cihazınızın aşınan parçalarını kontrol ediyor ve gerektiğinde yeniliyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "AŞINAN PARÇA YENİLEME",
      accent: "#65a30d",
      title: "Balmumu Filtresi ve Tüp Yenilenir",
      description: "Zamanla aşınan parçalar, sorun oluşmadan önce profesyonelce değiştirilir.",
    },
    {
      label: "ÖNLEYİCİ YAKLAŞIM",
      accent: "#4d7c0f",
      title: "Arıza Oluşmadan Önce Müdahale Edilir",
      description: "Düzenli bakım, aşınmadan kaynaklanan sorunların önüne geçmeye yardımcı olabilir.",
    },
    {
      label: "HIZLI RANDEVU",
      accent: "#3f6212",
      title: "Kısa Sürede Tamamlanır",
      description: "Periyodik bakım randevusu, genellikle kısa bir süre içinde tamamlanır.",
    },
  ],
  image: {
    src: "/images/unitron/models/stride.webp",
    alt: "Periyodik bakım kapsamında parçaları yenilenebilecek Unitron Stride işitme cihazı görseli",
  },
  floatingCard: {
    title: "Unitron Stride",
    description: "Periyodik bakım kapsamında değerlendirilebilecek modellerden biri.",
  },
  accentColor: "#65a30d",
  accentColorHover: "#4d7c0f",
  accentColorSoft: "rgb(101 163 13 / 0.12)",
  accentColorBorder: "rgb(101 163 13 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(101,163,13,0.35) 0%, rgba(101,163,13,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #1a220a 60%, #3f6212 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#4d7c0f",
  heroWaveOpacity: "0.18",
};
