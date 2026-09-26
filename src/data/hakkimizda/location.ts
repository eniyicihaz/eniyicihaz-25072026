// Darıca'daki Merkezimize Ulaşın — ContactLocationCard üzerinden render
// edilir (zero code changes), gerçek company/harita verisi.
import type { ContactLocationCardContent } from "../../components/contact/ContactLocationCard/ContactLocationCard.astro";
import { company } from "../../components/footer/Footer/data/company";
import { contactConfig } from "../../config";

export const hakkimizdaLocation: ContactLocationCardContent = {
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
