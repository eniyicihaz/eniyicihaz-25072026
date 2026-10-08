// Marka pillar hero — Faz 2 P2: "bağlı değiliz / tarafsız" ifadeleri çıkarıldı (marka ilişki
// türü SoT'ta doğrulanmadı), üretici kaynaklı bilgi yok. Telefon/WhatsApp için sayfa içi iletişim
// şeridi kullanılır (GuideHero paylaşılan bileşen, değiştirilmez).
import { contactConfig } from "../../config/contact";
import type { PriceGuideHeroContent } from "../isitme-cihazi-fiyatlari/hero";

const whatsappText = encodeURIComponent("Merhaba, işitme cihazı markaları hakkında bilgi almak istiyorum.");

export const brandsHero: PriceGuideHeroContent = {
  eyebrow: "Marka ve Model Rehberi",
  heading: "İşitme Cihazı Markaları",
  lead:
    "Her işitme cihazı markası farklı model aileleri ve cihaz türleri sunar. Oticon, Phonak, Signia, Widex, ReSound ve NuEar marka profillerini kriter bazlı tanıyın.",
  supporting:
    "Bu rehber bir 'en iyi marka' sıralaması yapmaz: marka seçiminde hangi soruların sorulacağını ve model ailelerinin hangi kriterlerle karşılaştırılabileceğini gösterir.",
  ctaPrimary: { label: "Markaları Keşfet", href: "#markalar" },
  ctaSecondary: { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi/" },
  chips: ["18 marka", "SGK anlaşmalı merkez", "Ücretsiz işitme testi"],
  image: {
    src: "/images/brand-guide/isitme-cihazi-markalari-hero.webp",
    alt: "Farklı işitme cihazlarının birlikte sergilendiği temsili marka ve model sahnesi",
    width: 1672,
    height: 941,
  },
};

export const brandsHeroExtra = { label: "İşitme cihazlarını incele", href: "/isitme-cihazlari/" };

/** Sayfa içi iletişim şeridi için gerçek iletişim bağlantıları (elle yazılmaz). */
export const contactLinks = {
  phone: contactConfig.phone.href,
  whatsapp: `${contactConfig.whatsapp.href}?text=${whatsappText}`,
};
