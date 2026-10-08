// Kocaeli landing page — ContactLocationCard (Faz 2 P2, Kocaeli V1).
// Adres/telefon/saat/harita company.ts'ten (tek doğruluk kaynağı) gelir;
// Kocaeli için AYRI bir adres YOK ve olamaz. Hat/landmark tarifi burada
// tekrarlanmaz — ilçe listesi ve hero kanonik yerleridir.
import { Accessibility } from "lucide-astro";
import type { ContactLocationCardContent } from "../../components/contact/ContactLocationCard/ContactLocationCard.astro";
import { company } from "../../components/footer/Footer/data/company";
import { contactConfig } from "../../config/contact";

export const kocaeliLocation: ContactLocationCardContent = {
  eyebrow: "ADRES VE SAATLER",
  heading: "Darıca Merkezimizin Adresi ve Çalışma Saatleri",
  intro:
    "Randevusuz gelebilirsiniz; test, ayar ve teknik servis gibi hizmetler randevuyla verildiği için önce aramanız iyi olur.",
  addressLabel: "Adres",
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
