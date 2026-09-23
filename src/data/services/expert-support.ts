// M7 (Expert Support) content for the /hizmetlerimiz hub page. Renders
// through the now-generic BrandExpertSupport component — the page's
// final major section before the Footer, its strongest conversion
// moment. Same real contact channels used everywhere else on the site.

import { UserCheck, ShieldCheck, CalendarCheck, Headphones } from "lucide-astro";
import type { BrandExpertSupportContent } from "../../components/brands/BrandExpertSupport/BrandExpertSupport.astro";

export const servicesExpertSupport: BrandExpertSupportContent = {
  eyebrow: "Son Adım",
  heading: "İhtiyacınız Olan Hizmeti Sizinle Birlikte Belirliyoruz.",
  paragraph:
    "18+ hizmeti, sürecin hangi aşamasında hangisine ihtiyaç duyacağınızı incelediniz. Şimdi geriye tek bir adım kalıyor: ücretsiz bir görüşmeyle, size özel hizmeti birlikte belirlemek.",
  trustPoints: [
    "Ücretsiz İşitme Testi",
    "SGK Anlaşmalı Hizmet",
    "Kişiye Özel Yönlendirme",
    "Uçtan Uca Süreç Desteği",
    "Uzman Odyometrist Desteği",
  ],
  ctaPrimary: { label: "Ücretsiz Randevu Al", href: "tel:+905337733199" },
  ctaSecondary: { label: "WhatsApp ile Yazış", href: "https://wa.me/905337733199" },
  reassurance: "Randevunuz ücretsizdir, satın alma zorunluluğu yoktur.",
  panelHeading: "Sizi Dinliyoruz, Sizinle Karar Veriyoruz.",
  panelBody:
    "Sürecin hangi aşamasında olduğunuzu ve neye ihtiyaç duyduğunuzu birlikte netleştiriyoruz.",
  band: [
    { icon: UserCheck, label: "Uzman Odyometrist Desteği" },
    { icon: ShieldCheck, label: "SGK Anlaşmalı Merkez" },
    { icon: CalendarCheck, label: "Ücretsiz Test ve Değerlendirme" },
    { icon: Headphones, label: "Teknik Servis Desteği" },
  ],
};
