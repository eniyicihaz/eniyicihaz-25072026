// Darıca'da SGK İşitme Cihazı Süreci — SGK pillar page, redesign plan
// §G/§13. Renders through the existing ContactLocationCard (zero code
// changes), same real `company` data and verified maps link used
// everywhere on the site.
import type { ContactLocationCardContent } from "../../components/contact/ContactLocationCard/ContactLocationCard.astro";
import { company } from "../../components/footer/Footer/data/company";
import { contactConfig } from "../../config";

export const sgkLocation: ContactLocationCardContent = {
  eyebrow: "DARICA'DA SGK İŞİTME CİHAZI SÜRECİ",
  heading: "SGK Sürecinizi Darıca'daki Merkezimizde Yürütelim",
  intro: "Gebze ve Çayırova'dan gelen danışanlarımız da Darıca'daki merkezimizde SGK anlaşmalı işitme cihazı sürecinden faydalanabilir.",
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
