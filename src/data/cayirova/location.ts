// Çayırova landing page — "Merkezimize Nasıl Ulaşabilirsiniz?"
// (ContactLocationCard). Adres/telefon/saatler/harita elle yazılmıyor —
// company.ts'ten (COMPANY.md kaynaklı, tek doğruluk kaynağı) doğrudan
// geliyor; Çayırova için UYDURMA/AYRI bir adres YOK ve olamaz. `intro`
// alanı, Gebze revizyonunda benimsenen olumlu çerçeveyi kullanıyor
// ("ağırlıyoruz") — "Çayırova'da şubemiz yok" tarzı bir ifade baştan
// itibaren KULLANILMADI.
import type { ContactLocationCardContent } from "../../components/contact/ContactLocationCard/ContactLocationCard.astro";
import { company } from "../../components/footer/Footer/data/company";
import { contactConfig } from "../../config/contact";

export const cayirovaLocation: ContactLocationCardContent = {
  eyebrow: "ÇAYIROVA'DAN ULAŞIM",
  heading: "Merkezimize Nasıl Ulaşabilirsiniz?",
  intro:
    "Çayırova'dan gelirken adresimizi ve yol tarifini buradan alabilirsiniz; merkezimiz Darıca'dadır.",
  addressLabel: "Adres",
  directionsLabel: "Yol Tarifi Al",
  phonesLabel: "Telefon",
  whatsappLabel: "WhatsApp'tan Yaz",
  whatsappHref: contactConfig.whatsapp.href,
  emailLabel: "E-posta",
  hoursLabel: "Çalışma Saatleri",
  mapTitle: "Avrasya İşitme Cihazları — Darıca Konum Haritası (Çayırova'ya Yakın)",
  company,
};
