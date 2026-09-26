// Merkezimiz — ContactLocationCard üzerinden render edilir (zero code
// changes), aynı gerçek company/harita verisi. Evde hizmet talep etmek
// için bu adrese gelmeniz gerekmez; kart yalnızca merkezimizin gerçek,
// doğrulanabilir bir işletme olduğunu göstermek için burada.
import type { ContactLocationCardContent } from "../../components/contact/ContactLocationCard/ContactLocationCard.astro";
import { company } from "../../components/footer/Footer/data/company";
import { contactConfig } from "../../config";

export const evdeHizmetLocation: ContactLocationCardContent = {
  eyebrow: "MERKEZİMİZ DARICA'DA",
  heading: "Ekibimiz Darıca'daki Merkezimizden Yola Çıkıyor",
  intro: "Evde hizmet talep etmek için merkezimize gelmeniz gerekmez; ekibimiz Darıca'daki adresimizden bölgenize gelir.",
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
