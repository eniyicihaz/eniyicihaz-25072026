// Evde İşitme Cihazı Hizmeti — Hero verisi, HomeVisitHero component'i
// üzerinden render edilir. accentColor: teal — kisiye-ozel-ayar'ın indigo
// (#4f46e5) ve sitenin marka mavisinin (#2563eb) yanında taze ve bu
// sayfaya özel bir ton.
import type { HomeVisitHeroContent } from "../../components/shared/HomeVisitHero/HomeVisitHero.astro";
import { contactConfig } from "../../config";

export const evdeHizmetHero: HomeVisitHeroContent = {
  eyebrow: "Evde İşitme Cihazı Hizmeti",
  heading: "İşitme Desteği Evinize Geliyor.",
  subheading: "Darıca, Gebze ve Çayırova'da merkezimize gelmeden, ihtiyaç duyduğunuz işitme cihazı desteğini evinizde alabilirsiniz.",
  paragraph:
    "İşitme testinden cihaz denemesine, uygulamadan kişiye özel ayara kadar süreci evinizde, sizin için uygun bir zamanda yürütüyoruz. Merkeze gelmekte zorlanan yaşlı bireyler ve hareket kısıtlılığı olan kişiler için özellikle tercih edilen bir hizmet.",
  ctaPrimary: { label: "Evde Hizmet Talep Et", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  routeFromLabel: "Merkezimiz",
  routeToLabel: "Eviniz",
  routeCaption: "Darıca'daki merkezimizden bölgenize randevulu ev ziyareti.",
  areaTags: ["Darıca", "Gebze", "Çayırova", "Dilovası"],
  accentColor: "#0d9488",
};
