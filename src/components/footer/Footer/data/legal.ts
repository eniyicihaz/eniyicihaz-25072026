// Legal / footer-bottom content
import type { LegalContent } from "../footer.types";

export const legal: LegalContent = {
  // Derived at build time so the year never goes stale.
  copyright: `© ${new Date().getFullYear()} Eniyicihaz.com — Avrasya İşitme Cihazları. Tüm hakları saklıdır.`,
  links: [
    { label: "KVKK Aydınlatma Metni", href: "#" },
    { label: "Gizlilik Politikası", href: "#" },
    { label: "Çerez Politikası", href: "#" },
    { label: "Site Haritası", href: "#" },
  ],
};
