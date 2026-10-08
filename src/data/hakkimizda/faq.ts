// SSS — Hakkımızda. Renders through the existing BrandPageFaq (FAQPage
// schema auto-generated). Yalnızca sitede/company.ts'te desteklenen
// bilgiler kullanıldı.
import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const hakkimizdaFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Avrasya İşitme Cihazları Hakkında Merak Edilenler",
  intro: "Merkezimiz, hizmet bölgemiz ve çalışma şeklimiz hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Merkezimiz Hakkında Bilgi Almak İster misiniz?",
    points: ["Darıca'da SGK anlaşmalı merkez", "18 marka", "18 markada teknik servis", "Ücretsiz işitme testi"],
    ctaLabel: "Bizi Arayın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        { question: "Avrasya İşitme Cihazları nerede hizmet veriyor?", answer: "Tek fiziksel merkezimiz Darıca'dadır; Gebze ve Çayırova'dan gelen danışanlarımız da bu merkeze gelir. Merkeze gelemeyenler için Kocaeli geneli ve İstanbul Anadolu Yakası'nda evde hizmet veriyoruz." },
        { question: "Hangi işitme cihazı markalarıyla çalışıyorsunuz?", answer: "18 işitme cihazı markasıyla çalışıyoruz; marka listesini Markalar sayfamızdan inceleyebilirsiniz. 18 markanın tamamında merkezimizde teknik servis veriyoruz." },
        { question: "İşitme cihazı aldıktan sonra ayar desteği veriyor musunuz?", answer: "Evet; cihaz tesliminden sonra da kontrol ve ayar desteği sağlıyoruz." },
        { question: "Merkeze gelmeden önce randevu almam gerekir mi?", answer: "Randevusuz gelebilirsiniz; işitme testi gibi hizmetler randevuyla verildiği için önce aramanız iyi olur. Telefon veya WhatsApp'tan bize ulaşabilirsiniz." },
      ],
    },
    {
      label: "Ulaşım",
      items: [
        { question: "Gebze veya Çayırova'dan gelip hizmet alabilir miyim?", answer: "Evet. Gebze ve Çayırova'da şubemiz yok; bu ilçelerden gelen danışanlarımız Darıca'daki merkezimize gelir. Ulaşım bilgileri Gebze ve Çayırova sayfalarımızda." },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
