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
      "18 marka seçeneği",
      "Randevusuz ziyaret kabul edilir",
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
          answer: "Önerilen cihazı merkezimizde yaklaşık 20 dakikalık ücretsiz bir demoyla deneyebilirsiniz. Günlük hayatınızda denemek isterseniz cihazı satın alarak 7 güne kadar deneyebilir, uygun bulmazsanız iade edebilirsiniz; ödediğiniz tutar kesintisiz iade edilir. Kulak içi cihazlar 7 günlük deneme kapsamı dışındadır.",
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
      label: "Merkeze Ulaşım",
      items: [
        {
          question: "Merkeziniz Darıca'da tam olarak nerede?",
          answer: "Fevziçakmak Mahallesi'nde, Palandöken Eczanesi'nin üst katındayız; Farabi Devlet Hastanesi durağının tam karşısındayız. 1. kata asansörle çıkılır.",
        },
        {
          question: "Randevusuz gelebilir miyim?",
          answer: "Evet, randevusuz ziyaretleri kabul ediyoruz. İşitme testi, cihaz ayarı ve teknik servis gibi hizmetler ise randevuyla verilir; bu yüzden önceden aramanızı öneririz.",
        },
        {
          question: "Otopark ve erişilebilirlik durumu nasıl?",
          answer: "Merkezimiz için otopark imkânı bulunuyor. Binada asansör var ve merkez tekerlekli sandalye ile ulaşıma uygundur.",
        },
        {
          question: "Gebze ve Çayırova'dan toplu taşımayla gelinebilir mi?",
          answer: "Evet. Gebze'den 502, 440, 510 ve 515; Çayırova'dan 550 numaralı otobüs hatları merkezimize ulaşımda kullanılabilir. Hat bilgileri değişebilir.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
