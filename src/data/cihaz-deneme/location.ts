// "Darıca'da İşitme Cihazını Deneyin" — redesign plan §1/§6, Bölüm 9.
// Renders through the existing ContactLocationCard component (zero code
// changes), same real `company` data used everywhere on the site.
import type { ContactLocationCardContent } from "../../components/contact/ContactLocationCard/ContactLocationCard.astro";
import { company } from "../../components/footer/Footer/data/company";
import { contactConfig } from "../../config";

export const cihazDenemeLocation: ContactLocationCardContent = {
  eyebrow: "DARICA'DA İŞİTME CİHAZINI DENEYİN",
  heading: "Darıca'da İşitme Cihazını Deneyin",
  intro:
    "Darıca'nın yanı sıra Gebze ve Çayırova'dan gelen danışanlarımız da merkezimizde farklı işitme cihazlarını deneyebilir.",
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
