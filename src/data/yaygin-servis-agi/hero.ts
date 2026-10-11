// Hero content for the "Yaygın Servis Ağı" page
// (/neden-orijinal/yaygin-servis-agi). Renders through the shared
// BrandPageHero component — same component every /isitme-cihazlari/*,
// /teknolojiler/*, /ihtiyaciniza-gore/* and /neden-orijinal/* page uses.
// Third page of the "Neden Orijinal" series (see header.data.ts's
// brandsMega second column), following Güvenilir Teknoloji and Uzun
// Ömürlü Cihazlar. Same trust/authenticity content genre — the
// authorized service network's reach and quality as a direct consequence
// of buying original, authorized-channel products.
//
// accentColor: turuncu / orange-600 (#ea580c) — third color in the fresh
// accent rotation opened for this series on Güvenilir Teknoloji's
// hero.ts; see that file for the full rationale. Chosen for its warm,
// approachable "support network" association, distinct from the prior
// two siblings' trust-blue (#1d4ed8) and durability-emerald (#059669).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const yayginServisAgiHero: BrandPageHeroContent = {
  textOnly: true, // Hero Visual Paketi: görselsiz kısa hero
  badge: "MARKALAR · NEDEN ORİJİNAL · ÜRETİCİ YETKİLİ SERVİS DESTEĞİ",
  headingLines: ["Üretici Yetkili Servis", "Desteği Neden Önemlidir?"],
  paragraphs: [
    "Bir işitme cihazının uzun vadeli kullanımında, üretici yetkisiyle yürütülen servis desteği; garanti koşullarının doğru uygulanması, doğru parça ve uygun teknik müdahale açısından önemlidir.",
    "Avrasya İşitme'nin sattığı 18 markanın tamamı için üretici servis yetkisi bulunmaktadır. Fiziksel hizmet noktamız Darıca'daki merkezimizdir; gerektiğinde cihaz teknik servise gönderilebilir.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "18 MARKADA ÜRETİCİ YETKİSİ",
      accent: "#ea580c",
      title: "Sattığımız Tüm Markalarda Servis Yetkisi",
      description: "Sattığımız 18 markanın tamamı için üretici servis yetkisi bulunmaktadır.",
    },
    {
      label: "DARICA MERKEZİMİZ",
      accent: "#c2410c",
      title: "Fiziksel Hizmet Noktamız Darıca'dadır",
      description: "Servis desteği için randevu alarak Darıca'daki merkezimize başvurabilirsiniz.",
    },
    {
      label: "GARANTİ KAPSAMI",
      accent: "#9a3412",
      title: "Kapsam Garanti Şartlarına Göre Belirlenir",
      description: "Garanti kapsamı, cihazın garanti şartlarına ve arızanın niteliğine göre değerlendirilir.",
    },
  ],
  image: {
    src: "/images/signia/models/silk.webp",
    alt: "Signia Silk işitme cihazı",
  },
  floatingCard: {
    title: "Signia Silk",
    description: "Teknik servis desteği sunduğumuz markalardan biri.",
  },
  accentColor: "#ea580c",
  accentColorHover: "#c2410c",
  accentColorSoft: "rgb(234 88 12 / 0.12)",
  accentColorBorder: "rgb(234 88 12 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(234,88,12,0.35) 0%, rgba(234,88,12,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #2a1206 60%, #7c2d12 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#c2410c",
  heroWaveOpacity: "0.18",
};
