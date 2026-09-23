// Final CTA content for the /isitme-cihazlari/bluetooth-ozellikli page —
// the page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const bluetoothFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Size Uygun Bluetooth Özellikli Modeli Birlikte Belirleyelim",
  description:
    "Günlük teknoloji kullanımınıza, cihaz tipi tercihinize ve işitme kaybınızın derecesine uygun Bluetooth özellikli modeli ücretsiz işitme testi sonrasında birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Demo Cihaz Deneme", "SGK Anlaşmalı Merkez", "Uzman Odyometrist Desteği"],
  accentColor: "#0891b2",
  accentColorHover: "#0e7490",
  accentColorGlow: "rgb(8 145 178 / 0.22)",
  accentColorShadow: "rgb(8 145 178 / 0.55)",
  accentColorShadowHover: "rgb(8 145 178 / 0.65)",
  accentColorFocus: "rgb(8 145 178 / 0.5)",
  accentColorTrustBg: "rgb(8 145 178 / 0.16)",
};
