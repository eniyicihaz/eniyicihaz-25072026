// Darıca, Gebze ve Çayırova'da İşitme Cihazı Ayarı — Kişiye Özel Ayar,
// plan §3/Bölüm 7. Renders through the existing ContactLocationCard
// (zero code changes), same real `company` data and verified maps link
// used everywhere on the site.
import type { ContactLocationCardContent } from "../../components/contact/ContactLocationCard/ContactLocationCard.astro";
import { company } from "../../components/footer/Footer/data/company";
import { contactConfig } from "../../config";

export const kisiyeOzelAyarLocation: ContactLocationCardContent = {
  eyebrow: "DARICA, GEBZE VE ÇAYIROVA'DA İŞİTME CİHAZI AYARI",
  heading: "Darıca'daki Merkezimizde Randevunuzu Alın",
  intro: "Gebze ve Çayırova'dan gelen danışanlarımız da Darıca'daki merkezimizde kişiye özel ayar randevusu alabilir, mevcut cihazlarını getirebilir.",
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
