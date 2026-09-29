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
  // HEDEF DOSYA : public/images/price-guide/isitme-cihazi-fiyatlari-hero.webp
  // ÖLÇÜ/ORAN   : 1600 × 900 (16:9), WebP, ≤ ~200 KB. Hazır olunca bu nesneye
  //               image: { src: "/images/price-guide/isitme-cihazi-fiyatlari-hero.webp",
  //               alt: "…", width: 1600, height: 900 } eklenir; GuideHero yer
  //               tutucuyu otomatik gerçek görselle değiştirir (kod değişmez).
  // ALT METİN   : "İşitme cihazı türlerinin incelendiği kavramsal bir danışmanlık
  //               sahnesi — temsili görsel" (gerçek Avrasya merkezi DEĞİL).
  imageNeeded:
    "Hero görseli (16:9, 1600x900): modern, premium ama doğal, aydınlık bir danışmanlık masası sahnesi; masada farklı işitme cihazı tipleri (kulak arkası, RIC, kulak içi, şarj kutusu) yan yana incelenir. Görüntüde HİÇBİR yazı, fiyat, rakam, marka/logotype OLMAYACAK; gerçek Avrasya İşitme merkezi gibi gösterilmeyecek (kavramsal görsel).",
};
