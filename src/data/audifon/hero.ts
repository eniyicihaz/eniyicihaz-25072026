// Hero content for the Audifon brand page (/markalar/audifon). Renders
// through the shared BrandPageHero component.
//
// Positioning axis: Almanya'da aile şirketi mirası + tinnitus'a özel
// teknoloji — Audifon'un gerçek, doğrulanabilir konumu, Almanya'nın en
// büyük aile işletmesi olan KIND-Grubu'na bağlı, Kölleda/Thüringen'de
// %100 Almanya'da geliştirilip üretilen bir marka olması ve Cosma Chip
// Technology tabanlı Sueno Pro tinnitus çözümlerine sahip olmasıdır.
// Diğer Alman kökenli markalardan (Audio Service'in kulak içi
// uzmanlığı, Rexton'ın Siemens/WSA mirası) farklı olarak eksen burada
// "tinnitus'a özel teknoloji sunan aile şirketi" — bu projede başka
// hiçbir markanın ana ekseni olarak kullanılmamış, gerçek bir
// farklılaşma noktası.
//
// accentColor: kırmızı (#E2001A), bu projenin kendi gerçek Audifon
// logosundan (/images/brands/audifon-logo-seffaf.webp — gri "audifon"
// yazısı, "o" harfinin kırmızı halkası) doğrudan görsel olarak okunarak
// belirlendi. ReSound/NuEar/Bernafon'dan sonra bu setteki dördüncü
// kırmızı vurgulu marka — gerçekten öyle, çünkü tüm dördü kendi gerçek
// kurumsal kimliklerinde kırmızı kullanıyor; burada daha canlı,
// mora çalmayan saf bir kırmızı tercih edilerek diğerlerinden ayrıştırıldı.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const audifonHero: BrandPageHeroContent = {
  badge: "AUDIFON · ALMAN AİLE MİRASI",
  headingLines: ["Audifon ile Almanya'da", "Geliştirilen Hassas Teknoloji"],
  paragraphs: [
    "Audifon, Almanya'nın en büyük aile işletmesi KIND-Grubu'na bağlı, Kölleda/Thüringen'de yüzde yüz Almanya'da geliştirilen ve üretilen bir işitme teknolojisi markasıdır.",
    "Cosma Chip Technology tabanlı Sueno Pro, rega ve sino serisi Audifon modellerini Avrasya İşitme'de keşfedin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "COSMA",
      accent: "#E2001A",
      title: "Cosma Chip Technology",
      description: "Audifon'un güncel nesil ürünlerinin temelini oluşturan, çok kanallı ses işleme çip teknolojisi.",
    },
    {
      label: "TINNITUS",
      accent: "#EB4652",
      title: "Sueno Pro Tinnitus Çözümü",
      description: "Tinnitus'un yoğunluğuna göre sesi kişiselleştirmenizi sağlayan özel bir çözüm sunar.",
    },
    {
      label: "DE",
      accent: "#B50015",
      title: "%100 Almanya Üretimi",
      description: "Ar-Ge'den seri üretime kadar Kölleda/Thüringen'de, Alman mühendisliğiyle geliştirilir.",
    },
  ],
  image: {
    src: "/images/pages/audifon-hero.webp",
    alt: "Audifon kulak arkası (BTE) işitme cihazı",
  },
  floatingCard: {
    title: "Cosma Chip",
    description: "Almanya'da geliştirilen, çok kanallı ses işleme teknolojisi.",
  },
  accentColor: "#E2001A",
  accentColorHover: "#B50015",
  accentColorSoft: "rgb(226 0 26 / 0.12)",
  accentColorBorder: "rgb(226 0 26 / 0.4)",
  // Hero Background System rollout (2026-07) — same layered dark
  // composition established for Signia, using Audifon's own
  // already-researched accent (#E2001A). Oticon/Phonak excluded.
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(226,0,26,0.35) 0%, rgba(226,0,26,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #1A0508 60%, #290710 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#B50015",
  heroWaveOpacity: "0.18",
};
