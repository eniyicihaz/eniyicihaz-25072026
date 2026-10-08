// Çayırova landing page — ContactLocationCard (Faz 2 P2, Çayırova V1).
// Adres/telefon/saat/harita elle yazılmıyor — company.ts'ten (tek doğruluk
// kaynağı) geliyor; Çayırova için AYRI bir adres YOK ve olamaz.
// Hat ve landmark tarifi burada TEKRARLANMIYOR — kanonik yeri sayfadaki
// ulaşım bölümü. "Çayırova'ya Yakın" gibi doğrulanmamış yakınlık ifadesi
// kullanılmaz.
import { Accessibility } from "lucide-astro";
import type { ContactLocationCardContent } from "../../components/contact/ContactLocationCard/ContactLocationCard.astro";
import { company } from "../../components/footer/Footer/data/company";
import { contactConfig } from "../../config/contact";

export const cayirovaLocation: ContactLocationCardContent = {
  eyebrow: "ADRES VE SAATLER",
  heading: "Darıca Merkezimizin Konumu",
  intro: "Adres, çalışma saatleri ve yol tarifi burada.",
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
