// Darıca'da SGK İşitme Cihazı Süreci — SGK pillar page, redesign plan
// §G/§13. Renders through the existing ContactLocationCard (zero code
// changes), same real `company` data and verified maps link used
// everywhere on the site.
import type { ContactLocationCardContent } from "../../components/contact/ContactLocationCard/ContactLocationCard.astro";
import { company } from "../../components/footer/Footer/data/company";
import { contactConfig } from "../../config";

export const sgkLocation: ContactLocationCardContent = {
  eyebrow: "MERKEZİMİZ DARICA'DA",
  heading: "SGK İşlemleri İçin Merkezimiz",
  intro: "Tek fiziksel merkezimiz Darıca'dadır; Gebze ve Çayırova'dan gelen danışanlarımız da SGK işlemleri için bu merkeze gelebilir.",
  addressNote: "Palandöken Eczanesi'nin üst katında, Farabi Devlet Hastanesi durağının karşısında.",
  addressLabel: "Adres",
  directionsLabel: "Yol Tarifi Al",
  phonesLabel: "Telefon",
  whatsappLabel: "WhatsApp'tan Yaz",
  whatsappHref: contactConfig.whatsapp.href,
  emailLabel: "E-posta",
  hoursLabel: "Çalışma Saatleri",
  mapTitle: "Avrasya İşitme Cihazları — Darıca Konum Haritası",
  company,
  largeTargets: true,
};
