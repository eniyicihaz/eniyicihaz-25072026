// Hero — H1 "İşitme Cihazı Fiyatları". Görsel alanı bilinçli olarak
// PLACEHOLDER: bu turda görsel üretilmiyor; `imageNeeded` neyin üretileceğini
// belgeler (GuideHero, `image` verilene kadar nötr, metinsiz bir yüzey çizer).
import { contactConfig } from "../../config/contact";
import type { GuideImage, GuideLink } from "../../components/price-guide/price-guide.types";

export interface PriceGuideHeroContent {
  eyebrow: string;
  heading: string;
  lead: string;
  supporting: string;
  ctaPrimary: GuideLink;
  ctaSecondary: GuideLink;
  chips: string[];
  image?: GuideImage;
  /** Only used while `image` is missing: the spec of the image still to be produced (rendered nowhere, kept as the placeholder's data-alt). */
  imageNeeded?: string;
}

const whatsappText = encodeURIComponent("Merhaba, işitme cihazı fiyatları hakkında bilgi almak istiyorum.");

export const priceGuideHero: PriceGuideHeroContent = {
  eyebrow: "Fiyat Rehberi",
  heading: "İşitme Cihazı Fiyatları",
  lead:
    "İşitme cihazı fiyatları neden bu kadar farklı? Cihaz tipinden teknoloji seviyesine, SGK desteğinden satın alma sonrası hizmetlere kadar fiyatı belirleyen her şeyi anlatıyoruz.",
  supporting:
    "Darıca'daki gerçek merkezimizin deneyimiyle hazırlanan bu rehber, bir fiyat listesi değil; kendi ihtiyacınız için doğru soruları sormanıza yarayan bir yol haritasıdır.",
  ctaPrimary: { label: "Güncel Fiyat Bilgisi Al", href: "/iletisim/" },
  ctaSecondary: { label: "WhatsApp'tan Sor", href: `${contactConfig.whatsapp.href}?text=${whatsappText}` },
  chips: ["2009'dan beri aynı ekip", "SGK anlaşmalı merkez", "Ücretsiz işitme testi", "18+ marka"],
  // Kavramsal danışmanlık sahnesi — gerçek Avrasya merkezi fotoğrafı DEĞİL.
  // Ölçü: 1672 × 941 (16:9), WebP, olduğu gibi kullanılır
  // (yeniden boyutlandırma/encode yok). Görselde yazı/logo/rakam yoktur.
  image: {
    src: "/images/price-guide/isitme-cihazi-fiyatlari-hero.webp",
    alt: "İşitme cihazı türlerinin incelendiği kavramsal bir danışmanlık sahnesi — temsili görsel",
    width: 1672,
    height: 941,
  },
};
