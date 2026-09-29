// Hero — H1 "İşitme Cihazı Markaları". Görsel: bu sayfa için sağlanan gerçek,
// logosuz temsili sahne. Mevcut `isitme-cihazi-markalari.webp` 10 logolu, kalabalık bir
// kompozisyon olup /markalar/ hero'sunda ve ana sayfa slayt 4'te kullanıldığından bu
// sayfada bilinçli olarak kullanılmadı.
import { contactConfig } from "../../config/contact";
import type { PriceGuideHeroContent } from "../isitme-cihazi-fiyatlari/hero";

const whatsappText = encodeURIComponent("Merhaba, işitme cihazı markaları hakkında bilgi almak istiyorum.");

export const brandsHero: PriceGuideHeroContent = {
  eyebrow: "Marka ve Model Rehberi",
  heading: "İşitme Cihazı Markaları",
  lead:
    "Her işitme cihazı markası farklı bir teknoloji yaklaşımı, farklı model aileleri ve farklı kullanım senaryoları sunar. Oticon, Phonak, Signia, Widex, ReSound ve Starkey NuEar markalarını tarafsız biçimde, kriter bazlı tanıyın.",
  supporting:
    "Darıca'daki gerçek merkezimizin deneyimiyle hazırlanan bu rehber bir 'en iyi marka' sıralaması yapmaz: marka seçiminde hangi soruların sorulacağını ve hangi markanın hangi ihtiyaca yaklaşabileceğini gösterir.",
  ctaPrimary: { label: "Markaları Keşfet", href: "#markalar" },
  ctaSecondary: { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi/" },
  chips: ["18+ marka", "Hiçbir markaya bağlı değiliz", "SGK anlaşmalı merkez", "Ücretsiz işitme testi"],
  // Gerçek görsel, olduğu gibi: 1672 × 941 (16:9), WebP. Logo/marka/yazı içermeyen
  // temsili sahne (birkaç farklı cihaz biçimi) — belirli bir marka veya model iddiası taşımaz.
  image: {
    src: "/images/brand-guide/isitme-cihazi-markalari-hero.webp",
    alt: "Farklı işitme cihazlarının birlikte sergilendiği temsili marka ve model sahnesi",
    width: 1672,
    height: 941,
  },
};

export const brandsHeroExtra = { label: "İşitme cihazlarını incele", href: "/isitme-cihazlari/" };

export const contactLinks = {
  whatsapp: `${contactConfig.whatsapp.href}?text=${whatsappText}`,
};
