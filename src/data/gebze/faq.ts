// Gebze landing page — SSS. Sorular gerçek Gebze arama niyetlerine
// (cihaz seçimi, fiyat, SGK, deneme, ayar, servis) cevap veriyor. "Gebze'de
// şubeniz var mı?" sorusu bu revizyonda BİLİNÇLİ OLARAK eklenmedi (plan
// onayı §9 — bu konu kullanıcıya gereksiz şekilde öne çıkarılmasın); ancak
// hiçbir soruda/cevapta gerçek olmayan bir fiziksel şube iddiası da yok.
import { contactConfig } from "../../config/contact";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const gebzeFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Gebze'de İşitme Cihazı Hakkında Merak Edilenler",
  intro: "Cihaz seçimi, fiyat, SGK ve süreçlerimiz hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "İhtiyacınızı Konuşmak İster misiniz?",
    points: [
      "SGK anlaşmalı hizmet",
      "Ücretsiz ilk değerlendirme",
      "18+ marka seçeneği",
      "Satın almadan önce deneme imkânı",
    ],
    ctaLabel: "Bizi Arayın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Cihaz ve Seçim",
      items: [
        {
          question: "Gebze'de işitme cihazı nasıl seçilir?",
          answer: "Öncelikle ücretsiz bir işitme değerlendirmesi yapıyoruz; işitme kaybınızın derecesine ve yaşam tarzınıza göre size uygun cihaz seçeneklerini birlikte belirliyoruz.",
        },
        {
          question: "Hangi işitme cihazı türü bana uygun?",
          answer: "Kulak arkası, kulak içi, görünmez, şarjlı ve Bluetooth özellikli seçenekler arasından, değerlendirme sonucuna göre size en uygun türü öneriyoruz.",
        },
        {
          question: "Şarjlı işitme cihazları nasıl çalışır?",
          answer: "Pil değiştirmeye gerek kalmadan, gece şarj edip gün boyu kullanabileceğiniz bir sistemle çalışır.",
        },
      ],
    },
    {
      label: "Fiyat ve SGK",
      items: [
        {
          question: "Gebze'de işitme cihazı fiyatları neye göre değişir?",
          answer: "Fiyatlar; teknoloji seviyesi, özellikler, marka ve modele göre değişir. Sabit bir rakam vermek yerine, ihtiyacınıza göre gerçekçi seçenekleri birlikte değerlendiriyoruz.",
        },
        {
          question: "Gebze işitme cihazlarında SGK desteği var mı?",
          answer: "Evet; SGK anlaşmalı bir merkezden hizmet alarak, rapor ve reçete süreciyle SGK desteğinden yararlanabilirsiniz.",
        },
      ],
    },
    {
      label: "Deneme ve Sonrası",
      items: [
        {
          question: "İşitme cihazını satın almadan önce deneyebilir miyim?",
          answer: "Evet; önerilen cihazı satın almadan önce günlük yaşamınızda deneyebilirsiniz.",
        },
        {
          question: "İşitme cihazının ayarı sonradan değiştirilebilir mi?",
          answer: "Evet; ilk ayarın ardından kullanım deneyiminize göre ince ayar ve takip desteği sağlıyoruz.",
        },
        {
          question: "Teknik servis ve bakım hizmeti sunuyor musunuz?",
          answer: "Evet; cihazınızdaki arıza ve bakım ihtiyaçlarında teknik servis desteği sunuyoruz.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
