// Hero content for the "Etkinlikler" page (/blog/etkinlikler). Renders
// through the shared BrandPageHero component. Sixth and final page of
// the "Blog & Haberler" series (see header.data.ts's knowledgeMega
// second column), following /blog/yeni-teknolojiler,
// /blog/uzman-gorusleri, /blog/basari-hikayeleri,
// /blog/sik-sorulan-sorular and /blog/kampanyalar.
//
// CRITICAL accuracy note: events, like campaigns, are inherently
// time-bound. This page deliberately does NOT state specific past or
// upcoming event dates, locations, or attendance figures for this
// clinic — it explains the GENERAL CATEGORIES of community and
// awareness events the clinic may take part in (health days, school
// screenings, senior-care outreach) and always defers to a live
// phone/WhatsApp call for the current schedule. Same discipline as
// /blog/kampanyalar. See considerations.ts for the explicit disclaimer.
//
// accentColor: zümrüt / emerald-600 (#059669) — sixth and final color
// in the "Blog & Haberler" column's own accent rotation (blue, violet,
// orange, sky, fuchsia before this). Reused from elsewhere on the site
// (İlk Kullanım Rehberi in the Rehberler column) since these pages
// live in different mega-menu columns.
//
// Hero image: Vista Vista-T, a fresh model not yet used by any prior
// page this session (verified in public/images/vista/models/
// vista-t.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const etkinliklerHero: BrandPageHeroContent = {
  badge: "BLOG & HABERLER · ETKİNLİKLER",
  headingLines: ["Etkinliklerimiz", "Hakkında"],
  paragraphs: [
    "Kliniğimiz, toplum sağlığını desteklemek amacıyla dönem dönem farklı kategorilerde etkinliklere katılım gösterebiliyor.",
    "Güncel etkinlik takvimimizi öğrenmek için bizi aramanızı veya WhatsApp üzerinden yazmanızı öneririz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "TOPLUM SAĞLIĞI",
      accent: "#059669",
      title: "Farkındalık Etkinliklerine Katılım Gösteriyoruz",
      description: "İşitme sağlığı farkındalığını desteklemek amacıyla çeşitli etkinliklere katılım gösterebiliyoruz.",
    },
    {
      label: "GÜNCEL TAKVİM İÇİN ARAYIN",
      accent: "#047857",
      title: "Aktif Etkinlik İçin Bizi Arayın",
      description: "Etkinlik takvimimiz değişebildiğinden, en güncel bilgiyi telefonla teyit etmenizi öneririz.",
    },
    {
      label: "KURUMLARLA İŞBİRLİĞİ",
      accent: "#065f46",
      title: "Okullar ve Kurumlarla İşbirliği Yapabiliyoruz",
      description: "Okul taramaları ve kurumsal işbirlikleri hakkında bizimle iletişime geçebilirsiniz.",
    },
  ],
  image: {
    src: "/images/vista/models/vista-t.webp",
    alt: "Toplum sağlığı etkinliklerinde tanıtılabilecek Vista Vista-T işitme cihazı görseli",
  },
  floatingCard: {
    title: "Vista Vista-T",
    description: "Etkinlik dönemlerinde tanıtılabilecek modellerden biri.",
  },
  accentColor: "#059669",
  accentColorHover: "#047857",
  accentColorSoft: "rgb(5 150 105 / 0.12)",
  accentColorBorder: "rgb(5 150 105 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(5,150,105,0.35) 0%, rgba(5,150,105,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #0a2019 60%, #065f46 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#047857",
  heroWaveOpacity: "0.18",
};
