// Darıca landing page — Final CTA. Sayfanın TEK yoğun CTA bloğu
// (plan §K) — telefon + WhatsApp, sayfa boyunca dağınık başka satış
// çağrısı yok.
import { contactConfig } from "../../config/contact";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const daricaFinalCta: BrandPageFinalCtaContent = {
  badge: "HEMEN BAŞLAYALIM",
  heading: "Darıca'da İşitme Değerlendirmenizi Planlayalım",
  // "Değerlendirmenizi" is one unbreakable ~8.7em word: at the default 44px+
  // heading size it is wider than the card's content box on phones and got
  // clipped. Below 640px the size is capped so that word always fits:
  // content width = 100vw - 96px (frame 2x24 + card 2x24), 9.2 = 8.7em word
  // + margin. Above 640px the default clamp() applies unchanged.
  headingMobileFontSize: "min(clamp(2.75rem, 2.1rem + 3vw, 4.25rem), calc((100vw - 96px) / 9.2))",
  description: "SGK anlaşmalı merkezimizde, size uygun işitme cihazını birlikte belirliyoruz. Gebze ve Çayırova'dan da randevu alabilirsiniz.",
  ctaPrimary: { label: "Bizi Arayın", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
  trustItems: ["Darıca'da SGK Anlaşmalı Merkez", "Ücretsiz İşitme Değerlendirmesi", "18 Marka Seçeneği", "Gebze, Çayırova'ya Yakın"],
  accentColor: "#2563eb",
  accentColorHover: "#1d4ed8",
  accentColorGlow: "rgb(37 99 235 / 0.22)",
  accentColorShadow: "rgb(37 99 235 / 0.55)",
  accentColorShadowHover: "rgb(37 99 235 / 0.65)",
  accentColorFocus: "rgb(37 99 235 / 0.5)",
  accentColorTrustBg: "rgb(37 99 235 / 0.16)",
};
