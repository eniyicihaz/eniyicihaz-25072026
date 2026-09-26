// Social profiles. WhatsApp points at the mobile line in company.ts
// (§1 COMPANY.md); Facebook/Instagram/YouTube are the real, verified
// account URLs supplied for the business.
import type { SocialItem } from "../footer.types";

export const social: SocialItem[] = [
  {
    platform: "Facebook",
    iconKey: "facebook",
    href: "https://www.facebook.com/daricaisitmecihazi",
    label: "Facebook sayfamız",
  },
  {
    platform: "Instagram",
    iconKey: "instagram",
    href: "https://www.instagram.com/avrasyaisitme",
    label: "Instagram hesabımız",
  },
  {
    platform: "YouTube",
    iconKey: "youtube",
    href: "https://www.youtube.com/@EniyiCihaz",
    label: "YouTube kanalımız",
  },
  {
    platform: "WhatsApp",
    iconKey: "whatsapp",
    href: "https://wa.me/905337733199",
    label: "WhatsApp hattımız",
  },
];
