// Final CTA content for the /neden-orijinal/kolay-degisim page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) as every prior
// page; trustItems reframed around this page's own subject (exchange
// guarantee) rather than the usual set from other pages.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const kolayDegisimFinalCta: BrandPageFinalCtaContent = {
  badge: "KOLAY DEĞİŞİM GÜVENCESİ",
  heading: "İhtiyacınız Değişirse Yanınızdayız",
  description:
    "Net değişim koşulları ve şeffaf süreç yönetimiyle, cihazınızın ihtiyacınıza uygun kalmasını sağlıyoruz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Net Değişim Koşulları", "Uzman Değerlendirmesi", "Şeffaf Süreç", "Hızlı Çözüm"],
  accentColor: "#e11d48",
  accentColorHover: "#be123c",
  accentColorGlow: "rgb(225 29 72 / 0.22)",
  accentColorShadow: "rgb(225 29 72 / 0.55)",
  accentColorShadowHover: "rgb(225 29 72 / 0.65)",
  accentColorFocus: "rgb(225 29 72 / 0.5)",
  accentColorTrustBg: "rgb(225 29 72 / 0.16)",
};
