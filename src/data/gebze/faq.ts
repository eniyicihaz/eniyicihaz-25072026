// Gebze landing page — SSS (P1-B). Sorular Gebze'den gelen kullanıcının
// gerçek karar sorularına odaklanıyor: şube var mı, nasıl gelinir,
// randevusuz gelinir mi, evde hizmet kapsıyor mu, deneme nasıl. Genel
// cihaz/fiyat soruları Darıca ve pillar sayfalarda kaldı; burada
// tekrarlanmıyor. Deneme cevabı SERVICE_SOT §1.5 kanonik modelini
// (merkezde ~20 dk ücretsiz demo; satın alarak 7 güne kadar deneme,
// kesintisiz iade; kulak içi hariç) kendi cümleleriyle veriyor.
import { contactConfig } from "../../config/contact";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const gebzeFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Gebze'den Gelenlerin Sık Sorduğu Sorular",
  intro: "Ulaşım, randevu ve merkezimizdeki süreç hakkında Gebze'den en çok sorulanlar.",
  decisionCard: {
    title: "Gelmeden Önce Arayın",
    points: [
      "Fiziksel merkezimiz Darıca'da",
      "Gebze'den 502, 440, 510, 515 hatları",
      "Randevusuz ziyaret kabul edilir",
      "Gebze evde hizmet bölgemizde",
    ],
    ctaLabel: "Bizi Arayın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Ulaşım ve Ziyaret",
      items: [
        {
          question: "Gebze'de şubeniz var mı?",
          answer: "Hayır. Tek fiziksel merkezimiz Darıca'dadır; Gebze'den gelen danışanlarımıza burada hizmet veriyoruz.",
        },
        {
          question: "Gebze'den merkezinize toplu taşımayla nasıl gelirim?",
          answer: "502, 440, 510 ve 515 numaralı otobüs hatlarıyla gelebilirsiniz. Merkezimiz Farabi Devlet Hastanesi durağının karşısındadır. Hat bilgileri değişebileceği için yola çıkmadan önce kontrol etmenizi öneririz.",
        },
        {
          question: "Randevu almadan gelebilir miyim?",
          answer: "Randevusuz gelebilirsiniz. Ancak işitme testi ve cihaz ayarı gibi hizmetler randevuyla verildiği için gelmeden önce aramanızı öneririz.",
        },
      ],
    },
    {
      label: "Hizmet ve Süreç",
      items: [
        {
          question: "Evde hizmet Gebze'yi kapsıyor mu?",
          answer: "Evet. Evde işitme cihazı hizmetimiz Gebze dahil Kocaeli'nin tüm ilçelerini kapsar; hizmet ücretsizdir ve randevuyla planlanır.",
        },
        {
          question: "Gebze'den gelip cihazı deneyebilir miyim?",
          answer: "Merkezimizde yaklaşık 20 dakikalık ücretsiz bir demoyla cihazı deneyebilirsiniz. Günlük hayatınızda da kullanmak isterseniz cihazı satın alıp 7 güne kadar deneyebilirsiniz; uygun bulmazsanız cihazı iade eder, ödediğiniz tutarı kesintisiz geri alırsınız. Kulak içi cihazlar bu 7 günlük denemeye dahil değildir.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
