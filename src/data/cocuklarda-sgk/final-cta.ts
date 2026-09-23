// Final CTA content for the /sgk/cocuklarda-sgk page — the page's last
// section. Renders through the shared BrandPageFinalCta component.
// Same real contact channels (contactConfig) and verified trust facts
// used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const cocuklardaSgkFinalCta: BrandPageFinalCtaContent = {
  badge: "ÇOCUĞUNUZ İÇİN YANINIZDAYIZ",
  heading: "Çocuğunuzun Süreci İçin Birlikte Planlayalım",
  description:
    "Yenidoğan taramasından cihaz uygulamasına kadar, çocuğunuzun SGK sürecinde aileye özel bir yaklaşımla yanınızda oluyoruz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Yönlendirme", "Pediatrik Değerlendirme", "SGK Anlaşmalı Merkez", "Aile Odaklı Süreç"],
  accentColor: "#db2777",
  accentColorHover: "#be185d",
  accentColorGlow: "rgb(219 39 119 / 0.22)",
  accentColorShadow: "rgb(219 39 119 / 0.55)",
  accentColorShadowHover: "rgb(219 39 119 / 0.65)",
  accentColorFocus: "rgb(219 39 119 / 0.5)",
  accentColorTrustBg: "rgb(219 39 119 / 0.16)",
};
