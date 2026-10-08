// Cihaz Deneme — ContactLocationCard (Faz 2 P2). Adres/telefon/saat/harita
// company.ts'ten gelir. largeTargets: telefon, WhatsApp ve yol tarifi ≥48 px.
// Landmark tarifi yalnızca doğrulanmış ifade (LOCAL_SOURCE_OF_TRUTH §1).
import { Accessibility } from "lucide-astro";
import type { ContactLocationCardContent } from "../../components/contact/ContactLocationCard/ContactLocationCard.astro";
import { company } from "../../components/footer/Footer/data/company";
import { contactConfig } from "../../config/contact";

export const cihazDenemeLocation: ContactLocationCardContent = {
  eyebrow: "DARICA'DAKİ MERKEZİMİZ",
  heading: "Demo Randevusu ve Adres",
  intro: "Demo randevuyla yapılır; randevu için bizi arayabilir ya da WhatsApp'tan yazabilirsiniz.",
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
  details: [
    {
      icon: Accessibility,
      label: "Erişim",
      text: "Merkez 1. kattadır; asansör vardır ve tekerlekli sandalyeye uygundur.",
    },
  ],
  hoursNotes: ["Öğle arası vermiyoruz.", "Resmî tatillerde kapalıyız."],
  largeTargets: true,
};
