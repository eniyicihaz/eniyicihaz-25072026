// Evde İşitme Cihazı Hizmeti — ContactLocationCard (Faz 2 P2).
// Adres/telefon/saat/harita company.ts'ten gelir. largeTargets: telefon,
// WhatsApp ve yol tarifi ≥48 px. Landmark tarifi yalnızca doğrulanmış
// ifade (LOCAL_SOURCE_OF_TRUTH §1).
import type { ContactLocationCardContent } from "../../components/contact/ContactLocationCard/ContactLocationCard.astro";
import { company } from "../../components/footer/Footer/data/company";
import { contactConfig } from "../../config";

export const evdeHizmetLocation: ContactLocationCardContent = {
  eyebrow: "MERKEZİMİZ DARICA'DA",
  heading: "Ekibimiz Darıca'daki Merkezimizden Yola Çıkıyor",
  intro: "Evde hizmet talep etmek için merkeze gelmeniz gerekmez; merkezimize gelmek isterseniz adres ve saatler aşağıda.",
  addressLabel: "Adres",
  addressNote: "Palandöken Eczanesi'nin üst katında, Farabi Devlet Hastanesi durağının karşısında.",
  directionsLabel: "Yol Tarifi Al",
  phonesLabel: "Telefon",
  whatsappLabel: "WhatsApp'tan Yazın",
  whatsappHref: contactConfig.whatsapp.href,
  emailLabel: "E-posta",
  hoursLabel: "Çalışma Saatleri",
  mapTitle: "Avrasya İşitme Cihazları — Darıca Konum Haritası",
  company,
  hoursNotes: ["Öğle arası vermiyoruz.", "Resmî tatillerde kapalıyız."],
  largeTargets: true,
};
