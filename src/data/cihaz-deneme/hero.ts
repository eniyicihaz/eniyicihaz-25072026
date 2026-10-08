// Cihaz Deneme — CorporateHero verisi (Faz 2 P2). Hizmet sayfası: yalnızca
// kanonik deneme modeli (SERVICE_SOURCE_OF_TRUTH §1.5, H7, H28, P8):
//   1) merkezde yaklaşık 20 dakikalık ücretsiz demo (randevulu),
//   2) cihazı satın alarak en fazla 7 güne kadar deneme,
//   3) uygun bulunmazsa ödenen tutarın kesintisiz iadesi,
//   4) kulak içi cihazlar 7 günlük deneme kapsamı dışında, merkezde demo.
// "Ücretsiz deneme" ifadesi kullanılmaz: "ücretsiz" yalnızca 20 dakikalık demo için.
// Görsel bilinçli olarak YOK: önceki Signia Styletto ürün görseli belirli bir
// markayı öne çıkarıyordu (P8: deneme işletmenin uygun gördüğü marka üzerinden
// yapılır) ve gerçek bir deneme fotoğrafı yok. Görselsiz hero kullanılır.
import type { CorporateHeroContent } from "../../components/shared/CorporateHero/CorporateHero.astro";
import { contactConfig } from "../../config/contact";
import { company } from "../../components/footer/Footer/data/company";

export const cihazDenemeHero: CorporateHeroContent = {
  locationLabel: "Uygulama ve Ayar · Cihaz Deneme",
  heading: "Darıca'da İşitme Cihazı Deneme",
  subheading:
    "Merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılır. Günlük hayatınızda denemek isterseniz cihazı satın alarak en fazla 7 gün kullanabilirsiniz; uygun bulmazsanız ödediğiniz tutar kesintisiz iade edilir.",
  stats: [
    { value: "~20 dakika", label: "Merkezde ücretsiz demo" },
    { value: "7 güne kadar", label: "Satın alarak deneme" },
    { value: "Kesintisiz", label: "Ücret iadesi" },
  ],
  // Mobil öncelik sırası: Ara, Yol tarifi, Mesaj (CONVERSION_SOT §5).
  ctas: [
    { label: "Bizi Arayın", href: contactConfig.phone.href },
    { label: "Yol Tarifi Al", href: company.directionsHref, variant: "outline" },
    { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href, variant: "outline" },
  ],
};
