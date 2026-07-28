// M7 (Expert Support) content for the "Tüm Markalar" (/markalar) page. This
// page is built up modularly (M1...M7…), each an independent
// section/component — this file only ever holds M7's data.
//
// The page's final major section before the Footer — its strongest
// conversion point. M2–M6 already did the informing (brands, differences,
// decision scenarios, buying checklist, extended roster); this section adds
// no new information and sells no brand. Two columns, roles kept distinct:
// left is the ask (heading, paragraph, checklist, both CTAs, a free-of-
// commitment reassurance line); right is a quiet editorial trust statement
// — its own heading and body, not a repeat of the left's. A thin trust band
// closes the section. Every fact is traceable to COMPANY.md; both CTAs
// resolve to the same real phone/WhatsApp contact used everywhere else on
// this page — there is no online booking form yet, so "Ücretsiz Randevu Al"
// still routes to a real phone call.

import { UserCheck, ShieldCheck, CalendarCheck, Headphones } from "lucide-astro";

export interface ExpertSupportCta {
  label: string;
  href: string;
}

export interface ExpertSupportBandItem {
  icon: any;
  label: string;
}

export interface BrandExpertSupportContent {
  eyebrow: string;
  heading: string;
  paragraph: string;
  trustPoints: string[];
  ctaPrimary: ExpertSupportCta;
  ctaSecondary: ExpertSupportCta;
  reassurance: string;
  panelHeading: string;
  panelBody: string;
  band: ExpertSupportBandItem[];
}

export const brandExpertSupport: BrandExpertSupportContent = {
  eyebrow: "Son Adım",
  heading: "Bu Kararı Sizinle Birlikte Veriyoruz.",
  paragraph:
    "18+ dünya markasını, aralarındaki farkları ve seçim kriterlerini inceldiniz. Şimdi geriye tek bir adım kalıyor: ücretsiz işitme testi ve uzman değerlendirmesiyle, size özel çözümü birlikte belirlemek.",
  trustPoints: [
    "Ücretsiz İşitme Testi",
    "SGK Anlaşmalı Hizmet",
    "Kişiye Özel Öneri",
    "Farklı Markaları Karşılaştırma İmkânı",
    "Uzman Odyometrist Desteği",
  ],
  ctaPrimary: { label: "Ücretsiz Randevu Al", href: "tel:+905337733199" },
  ctaSecondary: { label: "WhatsApp ile Yazış", href: "https://wa.me/905337733199" },
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
