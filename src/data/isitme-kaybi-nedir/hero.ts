// Hero content for the "İşitme Kaybı Nedir?" page (/rehberler/
// isitme-kaybi-nedir). Renders through the shared BrandPageHero
// component — same component every content page this session uses.
// First page of the new "Rehberler" series (see header.data.ts's
// knowledgeMega first column) — the flagship educational entry point
// for the entire "Bilgi Merkezi" mega menu.
//
// Distinct from the existing "İhtiyacınıza Göre" degree-specific
// product series (hafif/orta/ileri/çok ileri derece işitme kaybı, tek
// taraflı) — those pages are candidacy/product pages framed around
// device recommendations for a specific dB range. This page is the
// umbrella educational article: what hearing loss IS (mechanism, TYPE
// classification — conductive/sensorineural/mixed/central — genuinely
// distinct from the degree-based classification), common causes and
// general warning signs. related-content.ts cross-links to the
// degree-specific pages for readers who want to identify their own
// degree rather than re-explaining dB ranges here.
//
// accentColor: mavi / blue-600 (#2563eb) — first color in a fresh
// accent rotation opened for the "Rehberler" column (knowledgeMega);
// reused from elsewhere on the site since those pages live in
// different mega-menu columns and never co-appear with this one. Blue
// evokes trust and knowledge, fitting the site's flagship educational
// hub.
//
// Hero image: NuEar Circa, a fresh, general-purpose (non-pediatric,
// non-degree-specific) model not yet used by any prior page this
// session (verified in public/images/nuear/models/circa.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const isitmeKaybiNedirHero: BrandPageHeroContent = {
  badge: "BİLGİ MERKEZİ · REHBERLER · İŞİTME KAYBI NEDİR?",
  headingLines: ["İşitme Kaybı Nedir?", "Nedenleri ve Belirtileri"],
  paragraphs: [
    "İşitme kaybı, seslerin kulaktan beyne ulaşma sürecinin herhangi bir noktasında aksaması sonucu ortaya çıkan, farklı türlerde ve derecelerde görülebilen bir durumdur.",
    "Avrasya İşitme'de, işitme kaybının ne olduğunu, olası nedenlerini ve dikkat edilmesi gereken belirtileri anlaşılır bir şekilde anlatmayı amaçlıyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "FARKLI TÜRLER",
      accent: "#2563eb",
      title: "Her İşitme Kaybı Aynı Değildir",
      description: "İletim tipi, sensörinöral ve karma gibi farklı işitme kaybı türleri bulunur.",
    },
    {
      label: "ÇEŞİTLİ NEDENLER",
      accent: "#1d4ed8",
      title: "Yaş, Gürültü, Genetik ve Daha Fazlası",
      description: "İşitme kaybı, tek bir nedene değil; birçok farklı etkene bağlı olarak ortaya çıkabilir.",
    },
    {
      label: "ERKEN FARK ETME",
      accent: "#1e40af",
      title: "Belirtileri Bilmek Önemlidir",
      description: "Belirtileri erken fark etmek, uygun adımı zamanında atmanıza yardımcı olabilir.",
    },
  ],
  image: {
    src: "/images/nuear/models/circa.webp",
    alt: "İşitme kaybı tespit edildiğinde değerlendirilebilecek NuEar Circa işitme cihazı görseli",
  },
  floatingCard: {
    title: "NuEar Circa",
    description: "İşitme kaybı değerlendirmesi sonrası önerilebilecek modellerden biri.",
  },
  accentColor: "#2563eb",
  accentColorHover: "#1d4ed8",
  accentColorSoft: "rgb(37 99 235 / 0.12)",
  accentColorBorder: "rgb(37 99 235 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(37,99,235,0.35) 0%, rgba(37,99,235,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #0a1530 60%, #1e40af 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#1d4ed8",
  heroWaveOpacity: "0.18",
};
