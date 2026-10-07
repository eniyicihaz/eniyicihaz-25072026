// Hero — H1 "İşitme Cihazları". Görsel: mevcut, olduğu gibi kullanılan
// kavramsal ürün görseli (kulak arkası, kulak içi ve şarj kutulu cihazlar;
// metin/logo/rakam içermez, marka veya model iddiası taşımaz). Ana sayfa hero
// slayt 2'de ve Gebze hero'sunda da kullanılıyor; bu sayfa için ayrı bir hero
// görseli üretilmek istenirse brief final raporda.
import { contactConfig } from "../../config/contact";
import type { PriceGuideHeroContent } from "../isitme-cihazi-fiyatlari/hero";

const whatsappText = encodeURIComponent("Merhaba, işitme cihazları hakkında bilgi almak istiyorum.");

export const devicesGuideHero: PriceGuideHeroContent = {
  eyebrow: "İşitme Cihazı Rehberi",
  heading: "İşitme Cihazları",
  lead:
    "İşitme cihazları; sesi yükselten, konuşmayı öne çıkaran ve günlük hayatta duymayı kolaylaştıran küçük elektronik cihazlardır. Kulak arkası, RIC, kulak içi ve görünmez türleri; şarjlı, Bluetooth ve suya dayanıklı seçenekleri tek sayfada tanıyın.",
  supporting:
    "Darıca'daki gerçek merkezimizin deneyimiyle hazırlanan bu rehber, size hangi cihazın 'en iyi' olduğunu söylemez; kendi işitme kaybınıza ve yaşamınıza uygun olanı ayırt etmeniz için doğru soruları verir.",
  ctaPrimary: { label: "İşitme Cihazlarını Keşfet", href: "#cihaz-turleri" },
  ctaSecondary: { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi/" },
  chips: ["2009'dan beri işitme alanında", "SGK anlaşmalı merkez", "Ücretsiz işitme testi", "18+ marka"],
  image: {
    src: "/images/heroes/isitme-cihazi-turleri.webp",
    alt: "Kulak arkası, kulak içi ve şarj kutulu işitme cihazlarının yan yana durduğu kavramsal görsel — temsili görsel",
    width: 1811,
    height: 868,
  },
};

/** Sayfa genelinde tekrar kullanılan gerçek iletişim bağlantıları (elle yazılmaz). */
export const contactLinks = {
  whatsapp: `${contactConfig.whatsapp.href}?text=${whatsappText}`,
  phone: contactConfig.phone.href,
};
