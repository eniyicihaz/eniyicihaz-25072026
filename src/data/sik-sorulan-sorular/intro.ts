// "Bu Sayfa Nasıl Kullanılır?" section for the
// /blog/sik-sorulan-sorular page. Renders through the shared
// BrandPageIntro component.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const sikSorulanSorularIntro: BrandPageIntroContent = {
  badge: "BU SAYFA NASIL KULLANILIR?",
  heading: "Sık Sorulan Sorular Sayfası Nasıl Kullanılır?",
  paragraphs: [
    "Bu sayfa, randevu alma, hizmet bölgesi ve genel süreç gibi kliniğimizle ilgili en sık sorulan genel soruları bir araya getirir.",
    "SGK, cihaz seçimi, servis ve bakım gibi belirli konularda daha derinlemesine sorularınız için ilgili rehber ve hizmet sayfalarımızı inceleyebilirsiniz; bu sayfalarda konuya özel kendi soru-cevap bölümleri de bulunur.",
    "Aradığınız yanıtı burada bulamazsanız, telefon veya WhatsApp üzerinden bize doğrudan ulaşabilirsiniz.",
    "Sık Sorulan Sorular bölümündeki tüm sorular ve yanıtlar, sayfanın altındaki SSS bölümünde topluca yer alır.",
  ],
  stats: [
    { value: "Randevu ve Süreç", label: "Genel Sorular" },
    { value: "Konuya Özel Sayfalar", label: "Derinlemesine Bilgi" },
    { value: "Telefon / WhatsApp", label: "Doğrudan İletişim" },
    { value: "Tek Sayfada", label: "Hızlı Yanıt" },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
