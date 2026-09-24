// Son CTA — Kişiye Özel Ayar, plan §3/Bölüm 10. Renders through the
// existing BrandPageFinalCta (unchanged).
import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const kisiyeOzelAyarFinalCta: BrandPageFinalCtaContent = {
  badge: "SİZE UYGUN BİR AYAR İÇİN YANINIZDAYIZ",
  heading: "İşitme Cihazınızdan Beklediğiniz Sesi Birlikte Değerlendirelim",
  description: "Darıca'daki merkezimizde, size uygun ayarı birlikte belirleyelim.",
  ctaPrimary: { label: "Ücretsiz İşitme Değerlendirmesi", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Ulaşın", href: contactConfig.whatsapp.href },
  trustItems: ["Marka Bağımsız Değerlendirme", "Geri Bildirime Dayalı Süreç", "Mevcut Cihazınızla Gelebilirsiniz", "Darıca'da Uzman Destek"],
  accentColor: "#4f46e5",
  accentColorHover: "#4338ca",
  accentColorGlow: "rgb(79 70 229 / 0.22)",
  accentColorShadow: "rgb(79 70 229 / 0.55)",
  accentColorShadowHover: "rgb(79 70 229 / 0.65)",
  accentColorFocus: "rgb(79 70 229 / 0.5)",
  accentColorTrustBg: "rgb(79 70 229 / 0.16)",
};
