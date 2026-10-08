// Closing CTA for the /iletisim page — the page's final section, before
// the Footer. Renders through the shared, generic BrandExpertSupport
// component. Same real contact channels (contactConfig) used everywhere
// else on the site; no urgency language (PRINCIPLES.md §4, §9).
//
// Faz 2 P2: "Randevunuz ücretsizdir, satın alma zorunluluğu yoktur" ifadesi
// kaldırıldı (işletme sahibi kararı); "Odyometrist Desteği" ve "Satış
// Sonrası Destek" maddeleri iletişim niyetini aştığı için çıkarıldı.
// `reassurance` bileşende zorunlu bir alan; yalnızca doğrulanmamış bir
// taahhüt içermeyen nötr bir cümle taşır.

import { ShieldCheck, CalendarCheck, Headphones } from "lucide-astro";
import { contactConfig } from "../../config";
import type { BrandExpertSupportContent } from "../../components/brands/BrandExpertSupport/BrandExpertSupport.astro";

export const contactFinalCta: BrandExpertSupportContent = {
  eyebrow: "Son Adım",
  heading: "Sizi Darıca'daki Merkezimizde Ağırlamak İsteriz.",
  paragraph:
    "Merkezimize gelmek ya da evde hizmet için bizi arayın veya WhatsApp'tan yazın.",
  trustPoints: [
    "Ücretsiz İşitme Testi",
    "SGK Anlaşmalı Hizmet",
    "Evde Hizmet: Kocaeli Geneli",
  ],
  ctaPrimary: { label: "Bizi Arayın", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
  reassurance: "Yola çıkmadan önce aramanız, size en uygun yolu birlikte planlamamızı sağlar.",
  panelHeading: "Sizi Dinliyoruz, Sizinle Karar Veriyoruz.",
  panelBody:
    "İşitme kaybınızın derecesi, yaşam tarzınız ve beklentileriniz doğrultusunda, size özel çözümü birlikte belirliyoruz.",
  band: [
    { icon: ShieldCheck, label: "SGK Anlaşmalı Merkez" },
    { icon: CalendarCheck, label: "Ücretsiz İşitme Testi" },
    { icon: Headphones, label: "Teknik Servis Desteği" },
  ],
};
