// Evde İşitme Cihazı Hizmeti — HomeVisitHero verisi (Faz 2 P2).
// Kaynak: LOCAL_SOURCE_OF_TRUTH §3, SERVICE_SOURCE_OF_TRUTH H16: evde hizmet
// ücretsiz, randevulu; alan Kocaeli'nin tamamı + İstanbul Anadolu Yakası'nın
// tüm ilçeleri; "merkezde verilen hizmetlerin kapsamı doğrultusunda"
// sunulur. Evde HANGİ işlemlerin yapıldığı doğrulanmadığı için burada tek
// tek işlem sayılmaz (işletme sahibinden teyit bekliyor).
import type { HomeVisitHeroContent } from "../../components/shared/HomeVisitHero/HomeVisitHero.astro";
import { contactConfig } from "../../config";

export const evdeHizmetHero: HomeVisitHeroContent = {
  eyebrow: "Ücretsiz ve Randevulu",
  heading: "Evde İşitme Cihazı Hizmeti",
  subheading:
    "Merkezimize gelemiyorsanız evde hizmetimiz Kocaeli'nin tamamını ve İstanbul Anadolu Yakası'nın tüm ilçelerini kapsar. Hizmet ücretsizdir ve randevuyla planlanır.",
  paragraph:
    "Fiziksel merkezimiz Darıca'dadır; ekibimiz randevu gününde adresinize gelir. Evde yapılacak işlemler randevuda netleştirilir.",
  ctaPrimary: { label: "Evde Hizmet Talep Et", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
  routeFromLabel: "Merkezimiz",
  routeToLabel: "Eviniz",
  routeCaption: "Darıca'daki merkezimizden bölgenize randevulu ev ziyareti.",
  areaTags: ["Kocaeli", "İstanbul Anadolu Yakası"],
  accentColor: "#0d9488",
};
