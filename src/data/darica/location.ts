// Darıca landing page — Merkezimizi Ziyaret Edin (ContactLocationCard).
// Adres/telefon/saatler/harita elle yazılmıyor — company.ts'ten (COMPANY.md
// kaynaklı, tek doğruluk kaynağı) doğrudan geliyor.
import type { ContactLocationCardContent } from "../../components/contact/ContactLocationCard/ContactLocationCard.astro";
import { company } from "../../components/footer/Footer/data/company";
import { contactConfig } from "../../config/contact";

export const daricaLocation: ContactLocationCardContent = {
  eyebrow: "DARICA'DAKİ MERKEZİMİZ",
  heading: "Merkezimizi Ziyaret Edin",
  intro: "Gebze ve Çayırova'dan gelen danışanlarımız da Darıca'daki merkezimize kolayca ulaşabilir.",
  addressLabel: "Adres",
  directionsLabel: "Yol Tarifi Al",
  phonesLabel: "Telefon",
  whatsappLabel: "WhatsApp'tan Yaz",
  whatsappHref: contactConfig.whatsapp.href,
  emailLabel: "E-posta",
  hoursLabel: "Çalışma Saatleri",
  mapTitle: "Avrasya İşitme Cihazları — Darıca Konum Haritası",
  company,
};
