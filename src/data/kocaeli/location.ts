// Kocaeli landing page — "Merkezimize Nasıl Ulaşabilirsiniz?"
// (ContactLocationCard). Adres/telefon/saatler/harita elle yazılmıyor —
// company.ts'ten (COMPANY.md kaynaklı, tek doğruluk kaynağı) doğrudan
// geliyor; Kocaeli için UYDURMA/AYRI bir adres YOK ve olamaz — Darıca'daki
// gerçek merkez, Kocaeli genelinin gerçek hizmet noktası olarak doğru
// bağlamda sunuluyor.
import type { ContactLocationCardContent } from "../../components/contact/ContactLocationCard/ContactLocationCard.astro";
import { company } from "../../components/footer/Footer/data/company";
import { contactConfig } from "../../config/contact";

export const kocaeliLocation: ContactLocationCardContent = {
  eyebrow: "KOCAELİ GENELİNDEN ULAŞIM",
  heading: "Merkezimize Nasıl Ulaşabilirsiniz?",
  intro:
    "Kocaeli genelinden gelen danışanlarımızı Darıca'daki merkezimizde ağırlıyor, değerlendirmeden cihaz uygulamasına kadar tüm süreçte yanlarında oluyoruz. Adres ve yol tarifi aşağıdadır.",
  addressLabel: "Adres",
  directionsLabel: "Yol Tarifi Al",
  phonesLabel: "Telefon",
  whatsappLabel: "WhatsApp'tan Yaz",
  whatsappHref: contactConfig.whatsapp.href,
  emailLabel: "E-posta",
  hoursLabel: "Çalışma Saatleri",
  mapTitle: "Avrasya İşitme Cihazları — Darıca Konum Haritası (Kocaeli Geneline Hizmet)",
  company,
};
