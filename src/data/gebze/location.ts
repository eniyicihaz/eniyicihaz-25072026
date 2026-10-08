// Gebze landing page — ContactLocationCard (Faz 2 P2, Gebze V1).
// Adres/telefon/saat/harita elle yazılmıyor — company.ts'ten (tek doğruluk
// kaynağı) geliyor; Gebze için AYRI bir adres YOK ve olamaz.
// Otobüs hatları ve landmark tarifi burada TEKRARLANMIYOR — kanonik yeri
// sayfadaki "Gebze'den Merkezimize Ulaşım" bölümü. Kart yalnızca adres,
// erişim, saatler, harita ve yol tarifi taşır. "Gebze'ye Yakın" gibi
// doğrulanmamış yakınlık ifadesi kullanılmaz.
import { Accessibility } from "lucide-astro";
import type { ContactLocationCardContent } from "../../components/contact/ContactLocationCard/ContactLocationCard.astro";
import { company } from "../../components/footer/Footer/data/company";
import { contactConfig } from "../../config/contact";

export const gebzeLocation: ContactLocationCardContent = {
  eyebrow: "MERKEZİMİZ DARICA'DA",
  heading: "Merkezimizin Adresi ve Çalışma Saatleri",
  intro: "Gebze'den yola çıkmadan önce adresi, çalışma saatlerini ve yol tarifini buradan alabilirsiniz.",
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
      text: "Merkez 1. kattadır ve asansörle çıkılır. Merkez için otopark imkânı bulunuyor.",
    },
  ],
  hoursNotes: ["Öğle arası vermiyoruz.", "Resmî tatillerde kapalıyız."],
  largeTargets: true,
};
