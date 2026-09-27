// Gebze landing page — "Darıca'daki Merkezimize Nasıl Ulaşırım?"
// (ContactLocationCard). Adres/telefon/saatler/harita elle yazılmıyor —
// company.ts'ten (COMPANY.md kaynaklı, tek doğruluk kaynağı) doğrudan
// geliyor; Gebze için UYDURMA/AYRI bir adres YOK ve olamaz. `intro` alanı
// gerçek hizmet ilişkisini ("Darıca'daki merkezimizde ağırlıyoruz")
// anlatıyor — bu sayfanın en yük taşıyan, en dürüst bölümü.
import type { ContactLocationCardContent } from "../../components/contact/ContactLocationCard/ContactLocationCard.astro";
import { company } from "../../components/footer/Footer/data/company";
import { contactConfig } from "../../config/contact";

export const gebzeLocation: ContactLocationCardContent = {
  eyebrow: "GEBZE'DEN ULAŞIM",
  heading: "Darıca'daki Merkezimize Nasıl Ulaşırım?",
  intro:
    "Gebze'den gelen danışanlarımızı Darıca'daki merkezimizde ağırlıyor, işitme değerlendirmesi, cihaz seçimi ve uygulama süreçlerinde yanlarında oluyoruz. Adres ve yol tarifi aşağıdadır.",
  addressLabel: "Adres",
  directionsLabel: "Yol Tarifi Al",
  phonesLabel: "Telefon",
  whatsappLabel: "WhatsApp'tan Yaz",
  whatsappHref: contactConfig.whatsapp.href,
  emailLabel: "E-posta",
  hoursLabel: "Çalışma Saatleri",
  mapTitle: "Avrasya İşitme Cihazları — Darıca Konum Haritası (Gebze'ye Yakın)",
  company,
};
