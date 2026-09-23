// FAQ hub for the /servis-bakim/periyodik-bakim page. Renders through
// the shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. Same honest, mechanism-focused
// answer style as every prior series' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const periyodikBakimFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Periyodik Bakım Hakkında Merak Edilenler",
  intro: "Sıklık, kapsam ve maliyet konusunda en çok sorulan sorular.",
  decisionCard: {
    title: "Periyodik Bakım Randevusu Almak İster misiniz?",
    points: ["Balmumu filtresi ve tüp yenileme", "Genel aşınma kontrolü", "Fonksiyon testi", "Ücretsiz"],
    ctaLabel: "Hemen Randevu Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Periyodik bakım ne sıklıkla önerilir?",
          answer:
            "Genel öneri 3-6 ay aralığıdır; ancak kullanım yoğunluğunuza göre bu süre değişebilir.",
        },
        {
          question: "Periyodik bakım ücretli midir?",
          answer:
            "Hayır; periyodik bakım randevusu herhangi bir ücret talep edilmeden sunulur.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "Periyodik bakım ne kadar sürer?",
          answer:
            "Süre, yenilenmesi gereken parça sayısına göre değişir; genellikle kısa bir randevuda tamamlanır.",
        },
        {
          question: "Bakım sırasında cihazımı bırakmam gerekir mi?",
          answer:
            "Hayır; çoğu bakım işlemi, siz beklerken tamamlanabilir.",
        },
      ],
    },
    {
      label: "Kapsam",
      items: [
        {
          question: "Kulak içi (ITE) cihazım için de periyodik bakım yapılır mı?",
          answer:
            "Evet; ancak kulak içi cihazların bakım süreci, kulak arkası cihazların tüp/filtre bakımından farklı bir yöntem izler.",
        },
        {
          question: "Bakım sırasında bir arıza tespit edilirse ne olur?",
          answer:
            "Bu durumda, uygun bir sonraki adım için Teknik Servis değerlendirmesi önerilir.",
        },
      ],
    },
    {
      label: "Ev Bakımı",
      items: [
        {
          question: "Periyodik bakım günlük temizliğimin yerini tutar mı?",
          answer:
            "Hayır; periyodik bakım günlük ev bakımınızın yerini almaz. Günlük öneriler için Cihaz Temizliği sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
};
