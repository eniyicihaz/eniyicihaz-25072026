// Darıca hub — Son CTA. Yerel ve Darıca odaklı: Ara, WhatsApp ve Yol
// tarifi birlikte (CONVERSION_SOT §5). Şehirlerarası "Gebze, Çayırova'ya
// yakın" kalıbı kullanılmıyor; güven maddeleri doğrulanmış ziyaret
// bilgileri (LOCAL_SOURCE_OF_TRUTH).
import { contactConfig } from "../../config/contact";
import { company } from "../../components/footer/Footer/data/company";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const daricaFinalCta: BrandPageFinalCtaContent = {
  badge: "DARICA MERKEZİMİZ",
  heading: "Arayın, WhatsApp'tan Yazın ya da Merkezimize Gelin",
  // "WhatsApp'tan" is the longest unbreakable word (~6.6em at this weight). The heading is long (50 chars), so on
  // phones (<= 640px) it is set to a fixed 30px: 4 lines at 360px, 3 lines at 390px, and the longest word (~200px)
  // still fits the narrowest card content box (~248px at 320px). Above 640px the default clamp() applies unchanged.
  headingMobileFontSize: "1.875rem",
  description: "Hizmetiniz için uygun saati öğrenmek üzere bizi arayabilir, WhatsApp'tan yazabilir ya da yol tarifiyle doğrudan merkezimize gelebilirsiniz.",
  ctaPrimary: { label: "Bizi Arayın", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
  ctaTertiary: { label: "Yol Tarifi Al", href: company.directionsHref },
  trustItems: ["Fevziçakmak, Darıca", "Asansörle 1. Kat", "Randevusuz Ziyaret", "SGK Anlaşmalı Merkez"],
  accentColor: "#2563eb",
  accentColorHover: "#1d4ed8",
  accentColorGlow: "rgb(37 99 235 / 0.22)",
  accentColorShadow: "rgb(37 99 235 / 0.55)",
  accentColorShadowHover: "rgb(37 99 235 / 0.65)",
  accentColorFocus: "rgb(37 99 235 / 0.5)",
  accentColorTrustBg: "rgb(37 99 235 / 0.16)",
};
