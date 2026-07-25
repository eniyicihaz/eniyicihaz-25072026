// Social profiles. Account URLs are not provided yet; hrefs stay "#" until
// the real profiles are supplied. WhatsApp points at the mobile line in
// company.ts (§1 COMPANY.md).
import type { SocialItem } from "../footer.types";

export const social: SocialItem[] = [
  {
    platform: "Facebook",
    iconKey: "facebook",
    href: "#",
    label: "Facebook sayfamız",
  },
  {
    platform: "Instagram",
    iconKey: "instagram",
    href: "#",
    label: "Instagram hesabımız",
  },
  {
    platform: "YouTube",
    iconKey: "youtube",
    href: "#",
    label: "YouTube kanalımız",
  },
  {
    platform: "WhatsApp",
    iconKey: "whatsapp",
    href: "https://wa.me/905337733199",
    label: "WhatsApp hattımız",
  },
];
