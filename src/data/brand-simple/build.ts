// Sade marka sayfası şablonu — Faz 2 P2 (1. dalga: Oticon, Phonak, Signia, Widex, ReSound, NuEar).
//
// Amaç: "[Marka] işitme cihazları / [Marka] modelleri / [Marka] hakkında bilgi". İçerik yalnızca
//  - sitedeki model verisinden (src/data/{marka}/models.ts: aile adları ve cihaz türü / özellik etiketleri),
//  - SoT'ta doğrulanmış olgulardan üretilir: 18 marka satılıyor; 18 markanın tamamında merkezimizde
//    teknik servis; ücretsiz işitme testi; deneme modeli (20 dk ücretsiz demo, satın alarak 7 güne kadar
//    deneme, kesintisiz iade, kulak içi hariç); SGK anlaşmalı merkez; walk-in + hizmet bazında randevu.
//
// BİLİNÇLİ OLARAK YOK (kaynak ve onay yok — PRODUCT_SOT "marka bilgisi sınırı"):
//  kuruluş yılı, menşei/merkez, sloganlar, teknoloji/platform/uygulama adları, yapay zekâ/sağlık/işlev
//  iddiaları, "uzman ekibi/yorumu/desteği", "aynı grup çatısı" ve sahiplik ilişkileri, "yetkili/resmi/
//  partner", "garanti/güvence", "tarafsız/bağımsız", "en yaygın/en iyi", fiyat, stok.
// Uzaktan ayar bilgisi markalara genellenmez (SoT: A&M ve Audifon hariç yapılabiliyor; bu sayfalarda
// hiç anılmaz). Model fotoğrafları, logolar ve hero görselleri değiştirilmedi; kullanım izni açık iş.
import { Smartphone, BatteryCharging, Layers, Volume2, EarOff } from "lucide-astro";
import { contactConfig } from "../../config";
import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";
import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";
import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

/** Üretici teknolojisi/slogan niteliğindeki etiketler bu sayfalarda gösterilmez. */
const HIDDEN_TAGS = new Set(["BrainHearing", "AI", "Auracast", "Tinnitus", "Süper Güç", "Ekonomik"]);

export interface SimpleBrandConfig {
  name: string;
  hero: BrandPageHeroContent;
  models: BrandPageModelsContent;
  faq: BrandPageFaqContent;
  finalCta: BrandPageFinalCtaContent;
}

export interface SimpleBrandPage {
  meta: { title: string; description: string };
  hero: BrandPageHeroContent;
  intro: BrandPageIntroContent;
  models: BrandPageModelsContent;
  idealUser: BrandPageIdealUserContent;
  faq: BrandPageFaqContent;
  related: BrandPageRelatedContentContent;
  finalCta: BrandPageFinalCtaContent;
}

export function buildSimpleBrandPage(cfg: SimpleBrandConfig): SimpleBrandPage {
  const { name } = cfg;
  const upper = name.toLocaleUpperCase("tr-TR");
  const short = (n: string) => (n.startsWith(name + " ") ? n.slice(name.length + 1) : n);
  const accent = cfg.faq; // accentColor + badge renkleri her markanın SSS verisinde mevcut
  const items = cfg.models.items;
  const families = items.map((i) => short(i.name));
  const withTag = (...tags: string[]) => items.filter((i) => i.tags.some((t) => tags.includes(t)));
  const list = (arr: typeof items, max = 4) => arr.slice(0, max).map((i) => short(i.name));

  const phone = contactConfig.phone.href;
  const whatsapp = contactConfig.whatsapp.href;

  const meta = {
    title: `${name} İşitme Cihazları | EniyiCihaz`,
    description: `${name} işitme cihazı model aileleri ve cihaz türü etiketleri; merkezimizde ${name} hakkında bilgi, ücretsiz işitme testi ve teknik servis.`,
  };

  const hero: BrandPageHeroContent = {
    ...cfg.hero,
    badge: `${upper} · İŞİTME CİHAZLARI`,
    headingLines: [name, "İşitme Cihazları"],
    paragraphs: [
      `${name}, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Bu sayfada ${name} model ailelerini ve cihaz türü / özellik etiketlerini görebilirsiniz.`,
      "Hangi marka ve model ailesinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.",
    ],
    ctaPrimary: { label: "Bizi Arayın", href: phone },
    ctaSecondary: { label: "WhatsApp'tan Yazın", href: whatsapp },
    features: [
      { label: "18 MARKA", accent: cfg.hero.accentColor, title: "18 Markayla Çalışıyoruz", description: `${name} bu 18 markadan biridir.` },
      { label: "SERVİS", accent: cfg.hero.accentColor, title: "Teknik Servis", description: "18 markanın tamamında merkezimizde teknik servis veriyoruz." },
      { label: "TEST", accent: cfg.hero.accentColor, title: "Ücretsiz İşitme Testi", description: "İşitme testimiz ücretsizdir." },
    ],
    floatingCard: { title: "Merkezimiz Darıca'da", description: "Satış ve teknik servis Darıca'daki merkezimizde." },
  };

  const intro: BrandPageIntroContent = {
    badge: `${upper} HAKKINDA`,
    heading: `${name} İşitme Cihazları Hakkında Bilgi`,
    paragraphs: [
      `${name}, merkezimizde çalıştığımız 18 işitme cihazı markasından biridir. Sitemizde ${name} için ${items.length} model ailesi yer alıyor; ailelerin cihaz türü ve özellik etiketleri aşağıdaki kartlarda.`,
      `${name} cihazları için merkezimizde teknik servis veriyoruz; 18 markanın tamamında teknik servis verilir.`,
      "Hangi marka ve model ailesinin size uygun olduğu işitme değerlendirmesinden sonra belirlenir. İşitme testimiz ücretsizdir.",
    ],
    stats: [
      { value: "18", label: "Marka" },
      { value: String(items.length), label: `${name} model ailesi` },
      { value: "Servis", label: "Merkezimizde teknik servis" },
      { value: "Ücretsiz", label: "İşitme testi" },
    ],
    accentColor: accent.accentColor,
    accentColorBadgeBg: accent.accentColorBadgeBg,
    accentColorBadgeBorder: accent.accentColorBadgeBorder,
    accentColorBadgeText: accent.accentColorBadgeText,
  };

  const models: BrandPageModelsContent = {
    ...cfg.models,
    badge: `${upper} MODELLERİ`,
    heading: `${name} Model Aileleri`,
    intro: `Sitemizde yer alan ${name} model aileleri ve cihaz türü / özellik etiketleri. Hangi ailenin size uygun olduğu işitme değerlendirmesinden sonra belirlenir.`,
    items: items.map((i) => ({
      ...i,
      category: name,
      description: `${short(i.name)} model ailesi.`,
      tags: i.tags.filter((t) => !HIDDEN_TAGS.has(t)),
    })),
  };

  const profiles: BrandPageIdealUserContent["profiles"] = [];
  const bt = withTag("Bluetooth");
  if (bt.length) profiles.push({ icon: Smartphone, title: "Telefon bağlantısı arayanlar", description: `Model listemizde ${bt.length}/${items.length} ailede Bluetooth etiketi var; telefon uyumu modele göre değişir.`, suggestedFamilies: list(bt) });
  const charge = withTag("Şarjlı");
  if (charge.length) profiles.push({ icon: BatteryCharging, title: "Şarjlı cihaz arayanlar", description: `Model listemizde ${charge.length}/${items.length} ailede şarjlı etiketi var; hangi ailelerde olduğunu kartlarda görebilirsiniz.`, suggestedFamilies: list(charge) });
  const inEar = withTag("Kulak İçi");
  if (inEar.length) profiles.push({ icon: EarOff, title: "Daha küçük, kulak içi cihaz arayanlar", description: "Kulak içi etiketli aileler bulunur; uygunluk kulak yapınıza göre değerlendirilir.", suggestedFamilies: list(inEar) });
  const power = withTag("Güçlü Kayıplar", "Power", "Yüksek Güç");
  if (power.length) profiles.push({ icon: Volume2, title: "Daha güçlü amplifikasyon gerekenler", description: "Güçlü kayıplar için etiketli aileler bulunur; uygunluk işitme testinizin sonucuna göre belirlenir.", suggestedFamilies: list(power) });
  const place = withTag("RIC", "BTE", "RITE", "RIC/BTE", "RITE/ITE");
  if (place.length && profiles.length < 4) profiles.push({ icon: Layers, title: "RIC veya kulak arkası cihaz arayanlar", description: "RIC ve kulak arkası etiketli aileler bulunur; yerleşim tercihi kulak yapınıza ve kullanım beklentinize göre belirlenir.", suggestedFamilies: list(place) });

  const idealUser: BrandPageIdealUserContent = {
    badge: "KİMLER İÇİN?",
    heading: `${name} Model Ailelerinde Nelere Bakılır?`,
    intro: "Aşağıdaki başlıklar sitemizdeki model etiketlerinden derlenmiştir; kesin yönlendirme işitme değerlendirmesinden sonra yapılır.",
    profiles: profiles.slice(0, 4),
    accentColor: accent.accentColor,
    accentColorBadgeBg: accent.accentColorBadgeBg,
    accentColorBadgeBorder: accent.accentColorBadgeBorder,
    accentColorBadgeText: accent.accentColorBadgeText,
    accentColorIconBg: accent.accentColorBadgeBg,
  };

  const faq: BrandPageFaqContent = {
    ...accent,
    badge: "SIK SORULAN SORULAR",
    heading: `${name} Hakkında Merak Edilenler`,
    intro: `${name} model aileleri, servis, deneme ve SGK ile ilgili kısa cevaplar.`,
    decisionCard: {
      title: "Bilgi Almak İster misiniz?",
      points: ["Ücretsiz işitme testi", "18 marka", "18 markada teknik servis"],
      ctaLabel: "Bizi Arayın",
      ctaHref: phone,
    },
    categories: [
      {
        label: name,
        items: [
          {
            question: `${name} işitme cihazları hakkında nereden bilgi alabilirim?`,
            answer: `${name} model aileleri hakkında Darıca'daki merkezimizde bilgi alabilirsiniz; hangi modelin uygun olduğu işitme değerlendirmesinden sonra belirlenir. Randevusuz gelebilirsiniz; işitme testi gibi hizmetler randevuyla verildiği için önce aramanız iyi olur.`,
          },
          {
            question: `${name} için hangi model aileleri sitenizde yer alıyor?`,
            answer: `Sitemizde ${name} için şu model aileleri yer alıyor: ${families.join(", ")}. Ayrıntılar işitme değerlendirmesinden sonra netleşir.`,
          },
          {
            question: `${name} cihazları için teknik servis veriyor musunuz?`,
            answer: "Sattığımız 18 markanın tamamında merkezimizde teknik servis veriyoruz.",
          },
          {
            question: `${name} cihazını denemek mümkün mü?`,
            answer: "Merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılır; cihazı satın alarak 7 güne kadar da deneyebilir, uygun bulmazsanız iade edebilirsiniz. Ödediğiniz tutar kesintisiz iade edilir. Kulak içi cihazlar 7 günlük deneme kapsamı dışındadır.",
          },
          {
            question: `SGK ${name} seçimini etkiler mi?`,
            answer: "SGK süreci, belgeler ve güncel tutarlar ayrı bir rehberde yer alır ve her yıl değişebilir. Marka ve model seçimiyle SGK desteğinin birlikte nasıl değerlendirileceğini SGK anlaşmalı merkezimizde görüşmede anlatıyoruz.",
          },
          {
            question: `${name} mı başka bir marka mı?`,
            answer: "Kazanan bir cevap yok; kriterlere bakın. Markaları cihaz türü, Bluetooth ve şarj etiketleri üzerinden marka karşılaştırma sayfamızda yan yana görebilirsiniz.",
          },
        ],
      },
    ],
  };

  const related: BrandPageRelatedContentContent = {
    badge: "İLGİLİ SAYFALAR",
    heading: "Devam Etmek İçin",
    links: [
      { label: "İşitme Cihazı Markaları", description: "Marka profillerini ve model ailelerini karşılaştırın.", href: "/isitme-cihazi-markalari/" },
      { label: "Tüm Markalar", description: "18 markanın dizinine ve marka sayfalarına ulaşın.", href: "/markalar/" },
      { label: "İşitme Cihazları", description: "Cihaz türlerini, özellikleri ve seçim ölçütlerini tanıyın.", href: "/isitme-cihazlari/" },
      { label: "Ücretsiz İşitme Testi", description: "Doğru cihaz kararının ilk adımı.", href: "/degerlendirme/ucretsiz-isitme-testi/" },
      { label: "Cihaz Deneme", description: "Merkezde ücretsiz demo ve satın alarak 7 güne kadar deneme.", href: "/uygulama-ayar/cihaz-deneme/" },
      { label: "SGK İşitme Cihazı Ödemesi", description: "SGK desteği, katkı payı ve süreç.", href: "/sgk-isitme-cihazi-odemesi/" },
      { label: "İletişim", description: "Adres, telefon ve çalışma saatleri.", href: "/iletisim/" },
    ],
    accentColor: accent.accentColor,
    accentColorBadgeBg: accent.accentColorBadgeBg,
    accentColorBadgeBorder: accent.accentColorBadgeBorder,
    accentColorBadgeText: accent.accentColorBadgeText,
  };

  const finalCta: BrandPageFinalCtaContent = {
    ...cfg.finalCta,
    badge: "BİZE ULAŞIN",
    heading: `${name} Hakkında Bilgi Almak İçin`,
    description: `${name} model aileleri hakkında bilgi için bizi arayın veya WhatsApp'tan yazın.`,
    ctaPrimary: { label: "Bizi Arayın", href: phone },
    ctaSecondary: { label: "WhatsApp'tan Yazın", href: whatsapp },
    trustItems: ["Ücretsiz İşitme Testi", "18 Marka", "18 Markada Teknik Servis", "SGK Anlaşmalı Merkez"],
  };

  return { meta, hero, intro, models, idealUser, faq, related, finalCta };
}
