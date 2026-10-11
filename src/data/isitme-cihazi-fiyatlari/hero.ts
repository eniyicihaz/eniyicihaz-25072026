// Hero — H1 "İşitme Cihazı Fiyatları 2026". Bu sayfa artık sayfaya özel PriceGuideHero
// bileşenini kullanır (sağda "Fiyat Özeti Paneli"; fiyat/taksit metni pricing.ts'ten,
// DECISIONS K-Fiyat-1). `PriceGuideHeroContent` arayüzü GuideHero ve BrandsGuideHero
// tarafından da kullanıldığı için DEĞİŞMEZ; `textOnly`/`image` alanları bu sayfada kullanılmaz.
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
  textOnly: true, // GuideHero için geçerliydi; PriceGuideHero bu alanı kullanmaz
  eyebrow: "Fiyat Rehberi",
  heading: "İşitme Cihazı Fiyatları 2026",
  lead:
    "İşitme cihazı fiyatları neden bu kadar farklı? Cihaz tipinden teknoloji seviyesine, SGK desteğinden satın alma sonrası hizmetlere kadar fiyatı belirleyen her şeyi anlatıyoruz.",
  supporting:
    "Darıca'daki gerçek merkezimizin deneyimiyle hazırlanan bu rehber, bir fiyat listesi değil; kendi ihtiyacınız için doğru soruları sormanıza yarayan bir yol haritasıdır.",
  ctaPrimary: { label: "Fiyat Bilgisi İçin Arayın", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yazın", href: `${contactConfig.whatsapp.href}?text=${whatsappText}` },
  chips: ["SGK anlaşmalı merkez", "Ücretsiz işitme testi", "18 marka"],
};
