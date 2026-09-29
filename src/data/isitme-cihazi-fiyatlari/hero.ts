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
  imageNeeded: string;
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
  imageNeeded:
    "Hero görseli (yatay 4:3 veya 16:9): sıcak, aydınlık bir danışma masasında bir işitme uzmanının farklı işitme cihazı tiplerini (kulak arkası, kulak içi, şarjlı kutu) gösterdiği; ekranda fiyat/rakam veya yazı OLMAYAN, kavramsal/yaşam tarzı görseli. Gerçek Avrasya merkezi fotoğrafı olarak sunulmayacak.",
};
