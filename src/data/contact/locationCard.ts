// "Fiziksel Konum Kartı" content for the /iletisim page — the page's
// functional anchor (map + address + both real phones + WhatsApp + hours
// + directions, in one block). Renders through the new
// ContactLocationCard component.
//
// Deliberately does not re-type any fact — every value is read directly
// from `company` (src/components/footer/Footer/data/company.ts, itself
// sourced from COMPANY.md), so this page's NAP can never drift from the
// footer's. Only presentational labels (headings, the map iframe's a11y
// title) live in this file.

import { contactConfig } from "../../config";
import { company } from "../../components/footer/Footer/data/company";
import type { CompanyInfo } from "../../components/footer/Footer/footer.types";

export interface ContactLocationCardContent {
  eyebrow: string;
  heading: string;
  intro: string;
  addressLabel: string;
  directionsLabel: string;
  phonesLabel: string;
  whatsappLabel: string;
  whatsappHref: string;
  emailLabel: string;
  hoursLabel: string;
  mapTitle: string;
  company: CompanyInfo;
}

export const contactLocationCard: ContactLocationCardContent = {
  eyebrow: "Nasıl Ulaşırsınız?",
  heading: "Merkezimize Ulaşın",
  intro:
    "Adresimiz, telefon numaralarımız ve çalışma saatlerimiz aşağıda; \"Yol Tarifi Al\" ile tek dokunuşla yönlendirme alabilirsiniz.",
  addressLabel: "Adres",
  directionsLabel: "Yol Tarifi Al",
  phonesLabel: "Telefon",
  whatsappLabel: "WhatsApp'tan Yaz",
  whatsappHref: contactConfig.whatsapp.href,
  emailLabel: "E-posta",
  hoursLabel: "Çalışma Saatleri",
  mapTitle: "Avrasya İşitme Cihazları — Darıca, Kocaeli konum haritası",
  company,
};
