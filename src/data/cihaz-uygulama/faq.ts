// FAQ hub for the /uygulama-ayar/cihaz-uygulama page. Renders through
// the shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. Same honest, mechanism-focused
// answer style as every prior series' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const cihazUygulamaFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Cihaz Uygulama Hakkında Merak Edilenler",
  intro: "Randevu süreci, alışma dönemi ve takip konusunda en çok sorulan sorular.",
  decisionCard: {
    title: "Cihaz Uygulama Randevusu Almak İster misiniz?",
    points: ["Odyograma dayalı programlama", "Doğrulama ölçümü", "Kapsamlı kullanım eğitimi", "Ücretsiz"],
    ctaLabel: "Hemen Randevu Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Cihaz uygulama randevusu ne kadar sürer?",
          answer:
            "Süre, yapılan kontrol ve ölçümlere göre değişebilir; genellikle bir işitme testinden biraz daha uzun sürer.",
        },
        {
          question: "Cihaz uygulama ağrılı mıdır?",
          answer:
            "Hayır; süreç ağrısızdır. İlk günlerde hafif bir alışma hissi yaşanabilir, bu normaldir.",
        },
      ],
    },
    {
      label: "Alışma Süreci",
      items: [
        {
          question: "Cihazıma ne kadar sürede alışırım?",
          answer:
            "Alışma süresi kişiden kişiye değişir; bazı kullanıcılar için birkaç gün, bazıları için birkaç hafta sürebilir.",
        },
        {
          question: "İlk günlerde sesler farklı geliyor, bu normal mi?",
          answer:
            "Evet, yeni ses ortamına alışmak zaman alabilir. Rahatsızlık devam ederse bizimle iletişime geçmeniz önerilir.",
        },
      ],
    },
    {
      label: "Ayarlar",
      items: [
        {
          question: "Ayarlarımı kendim değiştirebilir miyim?",
          answer:
            "Bazı modellerde uygulama üzerinden sınırlı ayarlar yapılabilir; ancak temel programlamanın bir uzman tarafından yapılması önerilir.",
        },
        {
          question: "Takip randevusuna ne zaman gitmeliyim?",
          answer:
            "Takip sıklığı, alışma sürecinizdeki geri bildiriminize göre birlikte belirlenir.",
        },
      ],
    },
    {
      label: "Sonrası",
      items: [
        {
          question: "Cihazımdan ıslık sesi geliyor, ne yapmalıyım?",
          answer:
            "Islık sesi genellikle yerleştirme veya ayarla ilgilidir; bizimle iletişime geçerek kontrol ettirmeniz önerilir.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
