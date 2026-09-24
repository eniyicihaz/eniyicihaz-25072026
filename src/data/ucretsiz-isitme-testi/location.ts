// "Darıca'da Bize Ulaşın" — redesign plan §2, Bölüm 10. Renders through
// the existing ContactLocationCard component (already generic, zero code
// changes — see redesign plan §1/§11) with the same real `company` data
// used on /iletisim, so address/phone/hours/map stay NAP-consistent
// site-wide (SEARCH_STRATEGY §10).
import type { ContactLocationCardContent } from "../../components/contact/ContactLocationCard/ContactLocationCard.astro";
import { company } from "../../components/footer/Footer/data/company";
import { contactConfig } from "../../config";

export const ucretsizIsitmeTestiLocation: ContactLocationCardContent = {
  eyebrow: "DARICA'DA BİZE ULAŞIN",
  heading: "Darıca'da İşitme Testi İçin Bize Ulaşın",
  intro: "Randevu almak veya sorularınızı iletmek için aşağıdaki kanallardan bize ulaşabilirsiniz.",
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
