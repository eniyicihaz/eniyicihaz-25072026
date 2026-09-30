// Legal / footer-bottom content
import type { LegalContent } from "../footer.types";

export const legal: LegalContent = {
  // Derived at build time so the year never goes stale.
  copyright: `© ${new Date().getFullYear()} Eniyicihaz.com — Avrasya İşitme Cihazları. Tüm hakları saklıdır.`,
  links: [
    { label: "KVKK Aydınlatma Metni", href: "/kvkk/aydinlatma-metni/" },
    { label: "Gizlilik Politikası", href: "/kvkk/gizlilik-politikasi/" },
    { label: "Çerez Politikası", href: "/kvkk/cerez-politikasi/" },
    { label: "İlgili Kişi Başvuru Formu", href: "/kvkk/ilgili-kisi-basvuru-formu/" },
    { label: "Çerez Tercihleri", href: "/kvkk/cerez-politikasi/", action: "consent" },
    { label: "Site Haritası", href: "/site-haritasi/" },
  ],
};
