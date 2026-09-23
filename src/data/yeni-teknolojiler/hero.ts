// Hero content for the "Yeni Teknolojiler" page (/blog/yeni-teknolojiler).
// Renders through the shared BrandPageHero component. First page of the
// new "Blog & Haberler" series (see header.data.ts's knowledgeMega
// second column) — previously parked because a real blog/CMS with
// dated posts didn't exist; this series instead treats each column
// item as a timeless CATEGORY SHOWCASE page (same 14-section
// architecture as every other page this session), not a dated blog
// post feed. See considerations.ts for why this page avoids restating
// content already covered in depth by the real /teknolojiler/* pages.
//
// accentColor: mavi / blue-600 (#2563eb) — first color in the "Blog &
// Haberler" column's own accent rotation. Reused from elsewhere on the
// site (İşitme Kaybı Nedir? in the Rehberler column) since these pages
// live in different mega-menu columns.
//
// Hero image: Unitron Moxi Vivante, a fresh rechargeable RIC model not
// yet used by any prior page this session (verified in
// public/images/unitron/models/moxi-vivante.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const yeniTeknolojilerHero: BrandPageHeroContent = {
  badge: "BLOG & HABERLER · YENİ TEKNOLOJİLER",
  headingLines: ["İşitme Cihazlarında", "Yeni Teknolojiler"],
  paragraphs: [
    "İşitme cihazı teknolojisi hızla gelişiyor; yapay zeka destekli ses işlemeden akıllı telefon bağlantısına kadar birçok yenilik günlük kullanımı kolaylaştırıyor.",
    "Avrasya İşitme'de, bu teknolojilerin genel hatlarıyla neler sunduğunu ve size nasıl fayda sağlayabileceğini anlatıyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "YAPAY ZEKA DESTEĞİ",
      accent: "#2563eb",
      title: "Ses İşleme Akıllı Hale Geliyor",
      description: "Yapay zeka destekli cihazlar, ortama göre sesi otomatik olarak optimize edebiliyor.",
    },
    {
      label: "AKILLI BAĞLANTI",
      accent: "#1d4ed8",
      title: "Telefon ve Uygulamalarla Entegre Çalışır",
      description: "Cihazlar, akıllı telefon uygulamaları üzerinden kolayca kontrol edilebiliyor.",
    },
    {
      label: "SİZE UYGUN OLANI BİRLİKTE SEÇELİM",
      accent: "#1e40af",
      title: "Hangi Teknolojinin Size Uygun Olduğunu Değerlendiririz",
      description: "Yeni teknolojiler herkes için aynı önceliğe sahip olmayabilir; ihtiyacınıza göre yönlendiririz.",
    },
  ],
  image: {
    src: "/images/unitron/models/moxi-vivante.webp",
    alt: "Yeni nesil bağlantı teknolojilerine sahip Unitron Moxi Vivante işitme cihazı görseli",
  },
  floatingCard: {
    title: "Unitron Moxi Vivante",
    description: "Şarj edilebilir ve akıllı bağlantı özellikleriyle öne çıkan modellerden biri.",
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
