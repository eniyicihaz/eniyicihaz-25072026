// Closing CTA for the /iletisim page — the page's final section, before
// the Footer. Renders through the shared, generic BrandExpertSupport
// component. Same real contact channels (contactConfig) used everywhere
// else on the site; no urgency language (PRINCIPLES.md §4, §9).

import { UserCheck, ShieldCheck, CalendarCheck, Headphones } from "lucide-astro";
import { contactConfig } from "../../config";
import type { BrandExpertSupportContent } from "../../components/brands/BrandExpertSupport/BrandExpertSupport.astro";

export const contactFinalCta: BrandExpertSupportContent = {
  eyebrow: "Son Adım",
  heading: "Sizi Darıca'daki Merkezimizde Ağırlamak İsteriz.",
  paragraph:
    "Adresimizi, hizmetlerimizi ve ziyaret sürecini inceldiniz. Şimdi geriye tek bir adım kalıyor: bize ulaşıp sürecinizi başlatmak.",
  trustPoints: [
    "Ücretsiz İşitme Testi",
    "SGK Anlaşmalı Hizmet",
    "Uzman Odyometrist Desteği",
    "Cihaz Deneme İmkânı",
    "Satış Sonrası Destek",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
  reassurance: "Randevunuz ücretsizdir, satın alma zorunluluğu yoktur.",
  panelHeading: "Sizi Dinliyoruz, Sizinle Karar Veriyoruz.",
  panelBody:
    "İşitme kaybınızın derecesi, yaşam tarzınız ve beklentileriniz doğrultusunda, size özel çözümü birlikte belirliyoruz.",
  band: [
    { icon: UserCheck, label: "Uzman Odyometrist Desteği" },
    { icon: ShieldCheck, label: "SGK Anlaşmalı Merkez" },
    { icon: CalendarCheck, label: "Ücretsiz Test ve Değerlendirme" },
    { icon: Headphones, label: "Teknik Servis Desteği" },
  ],
};
