// Darıca konum kartı verisi (ContactLocationCard). Adres/telefon/saat/
// harita elle yazılmıyor — company.ts'ten (tek doğruluk kaynağı) geliyor.
//
// İki export:
// - daricaLocation: temel kart. /isitme-cihazlari, /isitme-cihazi-markalari
//   ve /isitme-cihazi-fiyatlari bunu yayıp (spread) yalnızca eyebrow/
//   heading/intro'yu kendi sayfalarına göre eziyor — bu nesne Darıca V1'de
//   bilinçli olarak DEĞİŞTİRİLMEDİ ki o sayfalar etkilenmesin.
// - daricaVisitLocation: Darıca hub'ının "Merkezin Konumu, Erişim ve
//   Çalışma Saatleri" bölümü (hero'nun hemen ardından). Ek ziyaret
//   bilgileri yalnızca LOCAL_SOURCE_OF_TRUTH'ta doğrulanmış olanlar: tarif,
//   asansör/tekerlekli sandalye, otopark (ayrıntısız), walk-in + hizmet
//   bazında randevu, öğle arası yok, resmî tatillerde kapalı. Gebze/Çayırova
//   otobüs hatları burada TEKRAR LİSTELENMİYOR — kanonik yerleri kendi
//   yerel sayfaları; burada tek cümle + link.
import { Accessibility, CalendarCheck } from "lucide-astro";
import type { ContactLocationCardContent } from "../../components/contact/ContactLocationCard/ContactLocationCard.astro";
import { company } from "../../components/footer/Footer/data/company";
import { contactConfig } from "../../config/contact";

export const daricaLocation: ContactLocationCardContent = {
  eyebrow: "DARICA'DAKİ MERKEZİMİZ",
  heading: "Merkezimizi Ziyaret Edin",
  intro: "Palandöken Eczanesi'nin üst katında, Farabi Devlet Hastanesi durağının karşısındayız. Randevusuz gelebilirsiniz; hizmetler için önceden aramanızı öneririz.",
  addressLabel: "Adres",
  directionsLabel: "Yol Tarifi Al",
  phonesLabel: "Telefon",
  whatsappLabel: "WhatsApp'tan Yazın",
  whatsappHref: contactConfig.whatsapp.href,
  emailLabel: "E-posta",
  hoursLabel: "Çalışma Saatleri",
  mapTitle: "Avrasya İşitme Cihazları — Darıca Konum Haritası",
  company,
};

export const daricaVisitLocation: ContactLocationCardContent = {
  ...daricaLocation,
  eyebrow: "KONUM VE ERİŞİM",
  heading: "Merkezin Konumu, Erişim ve Çalışma Saatleri",
  intro: "Gelmeden önce bilmeniz gereken adres, erişim ve çalışma saati bilgileri.",
  addressNote: "Palandöken Eczanesi'nin üst katı; Farabi Devlet Hastanesi durağının karşısı.",
  details: [
    {
      icon: Accessibility,
      label: "Erişim",
      text: "Merkez 1. kattadır; asansörle çıkılır ve tekerlekli sandalye ile ulaşıma uygundur. Merkezimiz için otopark imkânı bulunuyor.",
    },
    {
      icon: CalendarCheck,
      label: "Ziyaret",
      text: "Randevusuz ziyaretleri kabul ediyoruz. Test, ayar ve teknik servis gibi hizmetler için önceden arayıp randevu alabilirsiniz.",
    },
  ],
  hoursNotes: ["Öğle arası vermiyoruz.", "Resmî tatillerde kapalıyız."],
  note: {
    text: "Gebze ve Çayırova'dan gelenler için ulaşım bilgilerini ilgili yerel sayfalarımızda bulabilirsiniz. Tüm iletişim kanallarımız İletişim sayfamızda.",
    links: [
      { label: "Gebze'den ulaşım", href: "/gebze-isitme-cihazlari/" },
      { label: "Çayırova'dan ulaşım", href: "/cayirova-isitme-cihazlari/" },
      { label: "İletişim", href: "/iletisim/" },
    ],
  },
  largeTargets: true,
};
