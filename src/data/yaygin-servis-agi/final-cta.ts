// Final CTA content for the /neden-orijinal/yaygin-servis-agi page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) as every prior
// page; trustItems reframed around this page's own subject (service
// network) rather than the usual hearing-test-focused set.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const yayginServisAgiFinalCta: BrandPageFinalCtaContent = {
  badge: "ÜRETİCİ YETKİLİ SERVİS DESTEĞİ",
  heading: "Cihazınız İçin Servis Desteği Alın",
  description:
    "Sattığımız 18 markanın tamamı için üretici servis yetkimiz bulunuyor; fiziksel hizmet noktamız Darıca'daki merkezimizdir. Randevu için bizi arayın veya WhatsApp'tan yazın.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["18 Markada Üretici Servis Yetkisi", "Merkezimiz Darıca'da", "Randevu ile Servis", "Garanti Şartlarına Göre Değerlendirme"],
  accentColor: "#ea580c",
  accentColorHover: "#c2410c",
  accentColorGlow: "rgb(234 88 12 / 0.22)",
  accentColorShadow: "rgb(234 88 12 / 0.55)",
  accentColorShadowHover: "rgb(234 88 12 / 0.65)",
  accentColorFocus: "rgb(234 88 12 / 0.5)",
  accentColorTrustBg: "rgb(234 88 12 / 0.16)",
};
