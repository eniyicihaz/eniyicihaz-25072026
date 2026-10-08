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
  /** Görselsiz kısa hero: görsel/placeholder alanı render edilmez. */
  textOnly?: boolean;
  /** Only used while `image` is missing: the spec of the image still to be produced (rendered nowhere, kept as the placeholder's data-alt). */
  imageNeeded?: string;
}

const whatsappText = encodeURIComponent("Merhaba, işitme cihazı fiyatları hakkında bilgi almak istiyorum.");

export const priceGuideHero: PriceGuideHeroContent = {
  textOnly: true, // Hero Visual Paketi: AI/kavramsal görsel kaldırıldı (dosya silinmedi)
  eyebrow: "Fiyat Rehberi",
  heading: "İşitme Cihazı Fiyatları",
  lead:
    "İşitme cihazı fiyatları neden bu kadar farklı? Cihaz tipinden teknoloji seviyesine, SGK desteğinden satın alma sonrası hizmetlere kadar fiyatı belirleyen her şeyi anlatıyoruz.",
  supporting:
    "Darıca'daki gerçek merkezimizin deneyimiyle hazırlanan bu rehber, bir fiyat listesi değil; kendi ihtiyacınız için doğru soruları sormanıza yarayan bir yol haritasıdır.",
  ctaPrimary: { label: "Fiyat Bilgisi İçin Arayın", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Sor", href: `${contactConfig.whatsapp.href}?text=${whatsappText}` },
  chips: ["SGK anlaşmalı merkez", "Ücretsiz işitme testi", "18 marka"],
};
