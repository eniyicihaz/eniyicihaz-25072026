// Darıca landing page — SSS. Sayfada zaten doğal olarak cevaplanan
// sorular (marka, cihaz türleri, gerçek merkez, süreç) burada tekrar
// edilmiyor; yalnızca kısa/direkt "evet/hayır + link" formatındaki, sayfa
// içinde ayrı bir bölüm hak etmeyen sorular kaldı (plan §6/§J).
import { contactConfig } from "../../config/contact";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const daricaFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Darıca'da İşitme Cihazı Hakkında Merak Edilenler",
  intro: "Merkezimiz, hizmet bölgemiz ve süreçlerimiz hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Merkezimiz Hakkında Bilgi Almak İster misiniz?",
    points: [
      "Darıca'da SGK anlaşmalı merkez",
      "Ücretsiz işitme değerlendirmesi",
      "18+ marka seçeneği",
      "Gebze, Çayırova'dan kolay ulaşım",
    ],
    ctaLabel: "Bizi Arayın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Darıca'da ücretsiz işitme değerlendirmesi yapılıyor mu?",
          answer: "Evet; Darıca'daki merkezimizde ücretsiz işitme değerlendirmesi sunuyoruz.",
        },
        {
          question: "SGK desteği var mı?",
          answer: "Evet; SGK anlaşmalı bir merkeziz, katkı payı ve rapor süreciyle ilgili size yol gösteriyoruz.",
        },
        {
          question: "Cihazı satın almadan önce deneyebilir miyim?",
          answer: "Evet; önerilen cihazı satın almadan önce gerçek hayatta deneyebilirsiniz.",
        },
        {
          question: "İşitme cihazımın ayarını sonradan değiştirebilir miyim?",
          answer: "Evet; ilk ayarın ardından geri bildiriminize göre ince ayar ve takip desteği sağlıyoruz.",
        },
        {
          question: "Teknik servis veya bakım hizmeti sunuyor musunuz?",
          answer: "Evet; cihazınızdaki arıza ve bakım ihtiyaçlarında teknik servis desteği sunuyoruz.",
        },
      ],
    },
    {
      label: "Bölgemizden Ulaşım",
      items: [
        {
          question: "Gebze'den Darıca'daki merkezinize nasıl ulaşabilirim?",
          answer: "Gebze'den randevu alarak Darıca'daki merkezimize kolayca ulaşabilirsiniz.",
        },
        {
          question: "Çayırova'dan Darıca'daki merkezinize gelebilir miyim?",
          answer: "Evet; Çayırova'dan da randevu alarak Darıca'daki merkezimize ulaşabilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
