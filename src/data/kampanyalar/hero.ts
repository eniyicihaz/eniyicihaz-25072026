// Hero content for the "Kampanyalar" page (/blog/kampanyalar). Renders
// through the shared BrandPageHero component. Fifth page of the "Blog
// & Haberler" series (see header.data.ts's knowledgeMega second
// column), following /blog/yeni-teknolojiler, /blog/uzman-gorusleri,
// /blog/basari-hikayeleri and /blog/sik-sorulan-sorular.
//
// CRITICAL accuracy note: campaigns are inherently time-limited —
// specific discount percentages, prices, or expiry dates stated here
// would go stale almost immediately and risk misleading users about
// pricing that may no longer be valid. This page deliberately contains
// NO specific dated/expiring offer figures. Instead it explains the
// GENERAL CATEGORIES of campaigns the clinic may run and always
// defers to a live phone/WhatsApp call for the current, active
// campaign — same discipline as the SGK financial-figure pages. See
// considerations.ts for the explicit disclaimer.
//
// accentColor: fuşya / fuchsia-600 (#c026d3) — fifth color in the
// "Blog & Haberler" column's own accent rotation (blue, violet,
// orange, sky before this). Reused from elsewhere on the site (Onarım
// Takibi in the Servis & Bakım column) since these pages live in
// different mega-menu columns; vibrant fuchsia fits a
// promotional/campaign topic.
//
// Hero image: Audio Service Quix, a fresh model not yet used by any
// prior page this session (verified in public/images/audio-service/
// models/quix.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const kampanyalarHero: BrandPageHeroContent = {
  badge: "BLOG & HABERLER · KAMPANYALAR",
  headingLines: ["Kampanyalarımız", "Hakkında"],
  paragraphs: [
    "Kliniğimizde dönem dönem farklı kategorilerde kampanyalar düzenliyoruz; kampanya içerikleri ve şartları zaman içinde değişebilir.",
    "Güncel ve aktif kampanyalarımızı öğrenmek için bizi aramanızı veya WhatsApp üzerinden yazmanızı öneririz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "DÖNEMSEL KAMPANYALAR",
      accent: "#c026d3",
      title: "Farklı Kategorilerde Kampanyalar Sunuyoruz",
      description: "Yeni kullanıcı, aile paketi ve sezonluk gibi farklı kategorilerde kampanyalar düzenleyebiliyoruz.",
    },
    {
      label: "GÜNCEL BİLGİ İÇİN ARAYIN",
      accent: "#a21caf",
      title: "Aktif Kampanya İçin Bizi Arayın",
      description: "Kampanya içerikleri değişebildiğinden, en güncel bilgiyi telefonla teyit etmenizi öneririz.",
    },
    {
      label: "ŞEFFAF SÜREÇ",
      accent: "#701a75",
      title: "Kampanya Şartlarını Net Şekilde Paylaşırız",
      description: "İlgilendiğiniz kampanyanın şartlarını randevunuzda açık bir şekilde anlatırız.",
    },
  ],
  image: {
    src: "/images/audio-service/models/quix.webp",
    alt: "Kampanya dönemlerinde değerlendirilebilecek Audio Service Quix işitme cihazı görseli",
  },
  floatingCard: {
    title: "Audio Service Quix",
    description: "Kampanya dönemlerinde değerlendirilebilecek modellerden biri.",
  },
  accentColor: "#c026d3",
  accentColorHover: "#a21caf",
  accentColorSoft: "rgb(192 38 211 / 0.12)",
  accentColorBorder: "rgb(192 38 211 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(192,38,211,0.35) 0%, rgba(192,38,211,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #26082b 60%, #701a75 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#a21caf",
  heroWaveOpacity: "0.18",
};
