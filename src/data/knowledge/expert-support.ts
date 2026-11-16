// M7 (Expert Support) content for the /bilgi-merkezi hub page. Renders
// through the now-generic BrandExpertSupport component — the page's
// final major section before the Footer, its strongest conversion
// moment. Same real contact channels used everywhere else on the site.

import { UserCheck, ShieldCheck, CalendarCheck, Headphones } from "lucide-astro";
import type { BrandExpertSupportContent } from "../../components/brands/BrandExpertSupport/BrandExpertSupport.astro";
import { contactConfig } from "../../config/contact";

export const knowledgeExpertSupport: BrandExpertSupportContent = {
  eyebrow: "Son Adım",
  heading: "Genel Bilgiden Kişisel Değerlendirmeye Geçelim.",
  paragraph:
    "Bilgi Merkezi'ndeki rehberler ve içerikler genel bilgilendirme amaçlıdır. Kendi durumunuz için en doğru yanıtı, ücretsiz işitme testi ve uzman değerlendirmesiyle alabilirsiniz.",
  trustPoints: [
    "Ücretsiz İşitme Testi",
    "SGK Anlaşmalı Hizmet",
    "Kişiye Özel Değerlendirme",
    "Şeffaf Bilgilendirme",
    "Odyometrist Desteği",
  ],
  ctaPrimary: { label: "Bizi Arayın", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
  reassurance: "Randevunuz ücretsizdir, satın alma zorunluluğu yoktur.",
  panelHeading: "Sizi Dinliyoruz, Sizinle Karar Veriyoruz.",
  panelBody:
    "Genel bilgiler faydalı bir başlangıçtır; kendi durumunuz için kişisel bir değerlendirme yaptırmaktan çekinmeyin.",
  band: [
    { icon: UserCheck, label: "Odyometrist Desteği" },
    { icon: ShieldCheck, label: "SGK Anlaşmalı Merkez" },
    { icon: CalendarCheck, label: "Ücretsiz Test ve Değerlendirme" },
    { icon: Headphones, label: "Teknik Servis Desteği" },
  ],
};
