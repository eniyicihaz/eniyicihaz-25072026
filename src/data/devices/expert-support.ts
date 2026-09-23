// M7 (Expert Support) content for the /isitme-cihazlari hub page.
// Renders through the now-generic BrandExpertSupport component — the
// page's final major section before the Footer, its strongest
// conversion moment. Same real contact channels used everywhere else on
// the site.

import { UserCheck, ShieldCheck, CalendarCheck, Headphones } from "lucide-astro";
import type { BrandExpertSupportContent } from "../../components/brands/BrandExpertSupport/BrandExpertSupport.astro";

export const devicesExpertSupport: BrandExpertSupportContent = {
  eyebrow: "Son Adım",
  heading: "Doğru Cihaz Türünü Sizinle Birlikte Belirliyoruz.",
  paragraph:
    "21+ cihaz ve teknoloji seçeneğini, aralarındaki farkları ve seçim kriterlerini incelediniz. Şimdi geriye tek bir adım kalıyor: ücretsiz işitme testi ve uzman değerlendirmesiyle, size özel cihaz türünü birlikte belirlemek.",
  trustPoints: [
    "Ücretsiz İşitme Testi",
    "SGK Anlaşmalı Hizmet",
    "Kişiye Özel Öneri",
    "Farklı Türleri Karşılaştırma İmkânı",
    "Uzman Odyometrist Desteği",
  ],
  ctaPrimary: { label: "Ücretsiz Randevu Al", href: "tel:+905337733199" },
  ctaSecondary: { label: "WhatsApp ile Yazış", href: "https://wa.me/905337733199" },
  reassurance: "Randevunuz ücretsizdir, satın alma zorunluluğu yoktur.",
  panelHeading: "Sizi Dinliyoruz, Sizinle Karar Veriyoruz.",
  panelBody:
    "İşitme kaybınızın derecesi, yaşam tarzınız ve beklentileriniz doğrultusunda, size özel cihaz türünü birlikte belirliyoruz.",
  band: [
    { icon: UserCheck, label: "Uzman Odyometrist Desteği" },
    { icon: ShieldCheck, label: "SGK Anlaşmalı Merkez" },
    { icon: CalendarCheck, label: "Ücretsiz Test ve Değerlendirme" },
    { icon: Headphones, label: "Teknik Servis Desteği" },
  ],
};
