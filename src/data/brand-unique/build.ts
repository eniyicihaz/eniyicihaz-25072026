// Özgün marka sayfası kurucusu — Faz 2 (marka sayfası özgünlük çalışması).
//
// `brand-simple/build.ts` 18 sayfaya aynı iskeleti basıyordu (marka adı + model listesi değişiyor, geri kalan
// ~%85-93 ortak). Bu kurucu iskeleti ortak tutar ama İÇERİĞİ her markanın kendi model portföyünden ve
// kendi yazılmış metninden alır: bölüm başlıkları, "kimler için" profilleri, SSS soruları, ilgili sayfalar,
// hero kartları, istatistikler ve model kartı açıklamaları her markada farklıdır.
//
// Kullanılabilir bilgi (yalnızca):
//  - sitedeki model verisi (src/data/{marka}/models.ts: aile adları, cihaz türü / özellik etiketleri,
//    kategori etiketleri),
//  - SoT'ta DOĞRULANDI olan hizmet olguları (18 marka satılıyor; teknik servis 18 markada, ücret duruma göre;
//    uzaktan ayar A&M ve Audifon dışında yapılabiliyor; kulak içi cihazlarda 7 günlük deneme yok, merkezde demo
//    var; pil ve aksesuar satışı; ücretsiz işitme testi; SGK anlaşmalı merkez; uzaktan ayar A&M ve Audifon
//    dışında yapılabiliyor).
//
// BİLİNÇLİ OLARAK YOK: kuruluş yılı, menşei/merkez, sloganlar, üretici tarihi, teknoloji/platform/uygulama
// adları (model adları dışında), yapay zekâ/sağlık/işlev iddiaları, "yetkili/resmi/partner", üretici
// garantisi/güvencesi, "en iyi/en yaygın/tarafsız", grup/sahiplik, fiyat, stok.
import type { SimpleBrandPage } from "../brand-simple/build";
import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";
import type { BrandPageRelatedLink } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";
import { contactConfig } from "../../config";

/** Üretici teknolojisi/slogan niteliğindeki etiketler bu sayfalarda gösterilmez. */
const HIDDEN_TAGS = new Set(["BrainHearing", "AI", "Auracast", "Tinnitus", "Süper Güç", "Ekonomik"]);

type Item = BrandPageModelsContent["items"][number];

/** "A, B ve C" */
export function join(list: string[]): string {
  if (list.length <= 1) return list.join("");
  return `${list.slice(0, -1).join(", ")} ve ${list[list.length - 1]}`;
}

/** Aile adındaki marka önekini atar ("Oticon Intent" → "Intent"). */
export function shortName(brand: string, n: string): string {
  return n.startsWith(brand + " ") ? n.slice(brand.length + 1) : n;
}

/** Model verisinden, etikete göre aile listeleri (kısa adlarla). */
export function facts(brand: string, items: Item[]) {
  const by = (...tags: string[]) => items.filter((i) => i.tags.some((t) => tags.includes(t))).map((i) => shortName(brand, i.name));
  return {
    all: items.map((i) => shortName(brand, i.name)),
    n: items.length,
    bt: by("Bluetooth"),
    charge: by("Şarjlı"),
    pilli: by("Pilli"),
    inEar: by("Kulak İçi"),
    child: by("Çocuk"),
    power: by("Güçlü Kayıplar", "Power", "Yüksek Güç"),
    custom: by("Kişiye Özel"),
    single: by("Tek Taraflı"),
    ric: by("RIC", "RITE", "RIC/BTE", "BTE/RIC", "RITE/ITE"),
    bte: by("BTE", "RIC/BTE", "BTE/RIC"),
  };
}

export interface UniqueProfile {
  icon: any;
  title: string;
  description: string;
  families: string[];
}

export interface UniqueBrandContent {
  name: string;
  meta: { title: string; description: string };
  heroParagraphs: string[];
  heroFeatures: { label: string; title: string; description: string }[];
  floatingCard: { title: string; description: string };
  intro: { heading: string; paragraphs: string[]; stats: { value: string; label: string }[] };
  models: { heading: string; intro: string; descriptions: Record<string, string> };
  idealUser: { heading: string; intro: string; profiles: UniqueProfile[] };
  faq: { heading: string; intro: string; label: string; points: string[]; items: { question: string; answer: string }[] };
  related: { heading: string; links: BrandPageRelatedLink[] };
  cta: { heading: string; description: string; trustItems: string[] };
}

export interface UniqueBrandBase {
  hero: BrandPageHeroContent;
  models: BrandPageModelsContent;
  faq: BrandPageFaqContent;
  finalCta: BrandPageFinalCtaContent;
}

export function buildUniqueBrandPage(base: UniqueBrandBase, c: UniqueBrandContent): SimpleBrandPage {
  const { name } = c;
  const upper = name.toLocaleUpperCase("tr-TR");
  const accent = base.faq; // accentColor + badge renkleri her markanın SSS verisinde mevcut
  const phone = contactConfig.phone.href;
  const whatsapp = contactConfig.whatsapp.href;

  const hero: BrandPageHeroContent = {
    ...base.hero,
    badge: `${upper} · İŞİTME CİHAZLARI`,
    headingLines: [name, "İşitme Cihazları"],
    paragraphs: c.heroParagraphs,
    ctaPrimary: { label: "Bizi Arayın", href: phone },
    ctaSecondary: { label: "WhatsApp'tan Yazın", href: whatsapp },
    features: c.heroFeatures.map((f) => ({ ...f, accent: base.hero.accentColor })),
    floatingCard: c.floatingCard,
  };

  const intro = {
    badge: `${upper} HAKKINDA`,
    heading: c.intro.heading,
    paragraphs: c.intro.paragraphs,
    stats: c.intro.stats,
    accentColor: accent.accentColor,
    accentColorBadgeBg: accent.accentColorBadgeBg,
    accentColorBadgeBorder: accent.accentColorBadgeBorder,
    accentColorBadgeText: accent.accentColorBadgeText,
  };

  const models: BrandPageModelsContent = {
    ...base.models,
    badge: `${upper} MODELLERİ`,
    heading: c.models.heading,
    intro: c.models.intro,
    items: base.models.items.map((i) => {
      const s = shortName(name, i.name);
      const d = c.models.descriptions[s];
      if (!d) throw new Error(`Model açıklaması eksik: ${name} ${s}`);
      return { ...i, category: name, description: d, tags: i.tags.filter((t) => !HIDDEN_TAGS.has(t)) };
    }),
  };

  const idealUser = {
    badge: "KİMLER İÇİN?",
    heading: c.idealUser.heading,
    intro: c.idealUser.intro,
    profiles: c.idealUser.profiles.map((p) => ({ icon: p.icon, title: p.title, description: p.description, suggestedFamilies: p.families })),
    accentColor: accent.accentColor,
    accentColorBadgeBg: accent.accentColorBadgeBg,
    accentColorBadgeBorder: accent.accentColorBadgeBorder,
    accentColorBadgeText: accent.accentColorBadgeText,
    accentColorIconBg: accent.accentColorBadgeBg,
  };

  const faq: BrandPageFaqContent = {
    ...accent,
    badge: "SIK SORULAN SORULAR",
    heading: c.faq.heading,
    intro: c.faq.intro,
    decisionCard: { title: "Bilgi Almak İster misiniz?", points: c.faq.points, ctaLabel: "Bizi Arayın", ctaHref: phone },
    categories: [{ label: c.faq.label, items: c.faq.items }],
  };

  const related = {
    badge: "İLGİLİ SAYFALAR",
    heading: c.related.heading,
    links: c.related.links,
    accentColor: accent.accentColor,
    accentColorBadgeBg: accent.accentColorBadgeBg,
    accentColorBadgeBorder: accent.accentColorBadgeBorder,
    accentColorBadgeText: accent.accentColorBadgeText,
  };

  const finalCta: BrandPageFinalCtaContent = {
    ...base.finalCta,
    badge: "BİZE ULAŞIN",
    heading: c.cta.heading,
    description: c.cta.description,
    ctaPrimary: { label: "Bizi Arayın", href: phone },
    ctaSecondary: { label: "WhatsApp'tan Yazın", href: whatsapp },
    trustItems: c.cta.trustItems,
  };

  return { meta: c.meta, hero, intro, models, idealUser, faq, related, finalCta };
}
