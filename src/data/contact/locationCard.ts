// "Fiziksel Konum Kartı" content for the /iletisim page — the page's
// functional anchor (map + address + both real phones + WhatsApp + hours
// + directions, in one block). Renders through ContactLocationCard.
//
// Faz 2 P2: tıklama alanları largeTargets ile ≥48 px; landmark tarifi
// yalnızca doğrulanmış ifade (LOCAL_SOURCE_OF_TRUTH §1): Palandöken
// Eczanesi'nin üst katı, Farabi Devlet Hastanesi durağının karşısı.
// Adres/telefon/saat `company` içinden okunur, burada yeniden yazılmaz.
import { Accessibility } from "lucide-astro";
import { contactConfig } from "../../config";
import { company } from "../../components/footer/Footer/data/company";
import type { ContactLocationCardContent } from "../../components/contact/ContactLocationCard/ContactLocationCard.astro";

export const contactLocationCard: ContactLocationCardContent = {
  eyebrow: "Nasıl Ulaşırsınız?",
  heading: "Merkezimizin Adresi ve Çalışma Saatleri",
  intro:
    "Randevusuz gelebilirsiniz; test, ayar ve teknik servis gibi hizmetler randevuyla verildiği için önce aramanız iyi olur.",
  addressLabel: "Adres",
  addressNote: "Palandöken Eczanesi'nin üst katında, Farabi Devlet Hastanesi durağının karşısında.",
  directionsLabel: "Yol Tarifi Al",
  phonesLabel: "Telefon",
  whatsappLabel: "WhatsApp'tan Yazın",
  whatsappHref: contactConfig.whatsapp.href,
  emailLabel: "E-posta",
  hoursLabel: "Çalışma Saatleri",
  mapTitle: "Avrasya İşitme Cihazları — Darıca, Kocaeli konum haritası",
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
