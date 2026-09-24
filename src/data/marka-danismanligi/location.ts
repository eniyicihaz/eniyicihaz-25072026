// Darıca'da Marka Danışmanlığı — plan §D. Renders through the existing
// ContactLocationCard (zero code changes), same real `company` data used
// everywhere on the site.
import type { ContactLocationCardContent } from "../../components/contact/ContactLocationCard/ContactLocationCard.astro";
import { company } from "../../components/footer/Footer/data/company";
import { contactConfig } from "../../config";

export const markaDanismanligiLocation: ContactLocationCardContent = {
  eyebrow: "DARICA'DA MARKA DANIŞMANLIĞI",
  heading: "Darıca'daki Merkezimizde Birlikte Değerlendirelim",
  intro: "Gebze ve Çayırova'dan gelen danışanlarımız da Darıca'daki merkezimizde marka danışmanlığı randevusu alabilir.",
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
