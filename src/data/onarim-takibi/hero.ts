// Hero content for the "Onarım Takibi" page (/servis-bakim/
// onarim-takibi). Renders through the shared BrandPageHero component —
// same component every content page this session uses. Sixth and
// final page of the "Servis & Bakım" series (see header.data.ts's
// servicesMega third column), following Teknik Servis, Periyodik
// Bakım, Cihaz Temizliği, Pil & Aksesuar and Garanti İşlemleri. Every
// item in this column is now a real route.
//
// Distinct from every prior sibling: this page covers the STATUS
// TRACKING experience itself — once a device has already been sent for
// repair (via Teknik Servis) or a warranty claim (via Garanti
// İşlemleri), how the customer follows its progress stage by stage,
// receives notifications, and knows when to expect it back. evolution.ts
// is repurposed as literal tracking stages (like a package tracker)
// rather than a clinic-visit sequence.
//
// accentColor: eflatun / fuchsia-600 (#c026d3) — sixth and final color
// in the fresh accent rotation opened for this series; a vivid,
// attention-grabbing tone fitting a notification/status-tracking
// topic, distinct from every other color used across this column.
//
// Hero image: Vista V, a fresh model not yet used by any prior page
// this session (verified in public/images/vista/models/vista-v.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const onarimTakibiHero: BrandPageHeroContent = {
  badge: "HİZMETLERİMİZ · SERVİS & BAKIM · ONARIM TAKİBİ",
  headingLines: ["Onarım Takibi", "Sürecinizi Nasıl İzlersiniz?"],
  paragraphs: [
    "Onarım takibi, teknik servise veya garanti kapsamına alınan cihazınızın hangi aşamada olduğunu adım adım görebilmenizi sağlayan bir hizmettir.",
    "Avrasya İşitme'de, cihazınız teslim alındığı andan size geri teslim edilene kadar sürecin her aşamasında sizi bilgilendiriyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "AŞAMA AŞAMA GÖRÜNÜRLÜK",
      accent: "#c026d3",
      title: "Hangi Aşamada Olduğunuzu Bilirsiniz",
      description: "Cihazınızın teslim alma, teşhis, onarım ve teslim aşamalarını takip edebilirsiniz.",
    },
    {
      label: "OTOMATİK BİLDİRİM",
      accent: "#a21caf",
      title: "Durum Değiştiğinde Haberdar Olursunuz",
      description: "Onarım sürecinizdeki önemli aşamalarda SMS veya WhatsApp üzerinden bilgilendirilirsiniz.",
    },
    {
      label: "SORU SORMA İMKÂNI",
      accent: "#86198f",
      title: "İstediğiniz Zaman Bilgi Alabilirsiniz",
      description: "Sürecin herhangi bir aşamasında bizimle iletişime geçerek güncel durumu öğrenebilirsiniz.",
    },
  ],
  image: {
    src: "/images/vista/models/vista-v.webp",
    alt: "Onarım takibi kapsamında süreci izlenebilecek Vista V işitme cihazı görseli",
  },
  floatingCard: {
    title: "Vista V",
    description: "Onarım sürecinde takip edilebilecek modellerden biri.",
  },
  accentColor: "#c026d3",
  accentColorHover: "#a21caf",
  accentColorSoft: "rgb(192 38 211 / 0.12)",
  accentColorBorder: "rgb(192 38 211 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(192,38,211,0.35) 0%, rgba(192,38,211,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #260a29 60%, #86198f 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#a21caf",
  heroWaveOpacity: "0.18",
};
