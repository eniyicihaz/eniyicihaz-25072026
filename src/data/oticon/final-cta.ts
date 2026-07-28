// Final CTA content for the Oticon brand page (/markalar/oticon) — the
// page's last section. Independent of the /markalar hub page's M1...M8
// modules — its own data namespace, only ever holding this one brand's
// content.
//
// Same real contact channels used everywhere else on this page (tel/
// WhatsApp) and the same verified trust facts already established
// elsewhere on the site (free hearing test, trial device, SGK-affiliated
// status, audiologist support) — nothing new is claimed here.

export interface FinalCtaAction {
  label: string;
  href: string;
}

export interface OticonFinalCtaContent {
  badge: string;
  heading: string;
  description: string;
  ctaPrimary: FinalCtaAction;
  ctaSecondary: FinalCtaAction;
  trustItems: string[];
}

export const oticonFinalCta: OticonFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Hangi Oticon Modeli Size Uygun?",
  description:
    "İşitme kaybınızın derecesine, yaşam tarzınıza ve beklentilerinize uygun Oticon modelini birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: "tel:+905337733199" },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: "https://wa.me/905337733199" },
  trustItems: [
    "Ücretsiz İşitme Testi",
    "Demo İşitme Cihazı",
    "SGK Anlaşmalı Merkez",
    "Uzman Odyometrist Desteği",
  ],
};
