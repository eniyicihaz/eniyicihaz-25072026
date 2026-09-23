// FAQ hub for the /rehberler/ilk-kullanim-rehberi page. Renders through
// the shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. Same honest, mechanism-focused
// answer style as every prior series' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const ilkKullanimRehberiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "İlk Kullanım Hakkında Merak Edilenler",
  intro: "Temel kontroller, kullanım süresi ve basit sorunlar hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "İlk Kullanımınızla İlgili Yardım İster misiniz?",
    points: ["Temel kontroller eğitimi", "Kullanım süresi önerisi", "Basit sorun giderme desteği", "Ücretsiz"],
    ctaLabel: "Bize Ulaşın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Cihazımı ilk gün ne kadar takmalıyım?",
          answer:
            "Genel öneri kademeli bir başlangıçtır; ancak size uygun süre, uygulama randevunuzda odyometristinizle birlikte belirlenir.",
        },
        {
          question: "Cihazımı hangi kulağa taktığımı nasıl anlarım?",
          answer:
            "Çoğu cihazda sağ ve sol kulak için renkli işaretler (genellikle kırmızı ve mavi) bulunur; kullanım kılavuzunuzda bu işaretler açıklanır.",
        },
      ],
    },
    {
      label: "Kontroller",
      items: [
        {
          question: "Ses seviyesini nasıl ayarlarım?",
          answer:
            "Çoğu cihazda küçük bir düğme veya uygulama üzerinden ses seviyesi ayarlanabilir; tam yöntem kullanım kılavuzunuzda yer alır.",
        },
        {
          question: "Uygulamayı nasıl indiririm?",
          answer:
            "Cihaz markanıza uygun uygulama, teslim aldığınız randevuda size gösterilir ve indirme adımlarında yardımcı oluruz.",
        },
      ],
    },
    {
      label: "Sorun Giderme",
      items: [
        {
          question: "Cihazımdan ses gelmiyor, ne yapmalıyım?",
          answer:
            "Öncelikle cihazın açık olduğunu, pilin veya şarjın dolu olduğunu kontrol edin; sorun devam ederse bizi aramanız önerilir.",
        },
      ],
    },
    {
      label: "Alışma Süreci",
      items: [
        {
          question: "İlk günlerde sesler farklı geliyor, normal mi?",
          answer:
            "Evet, bu normal bir durumdur. Uzun vadeli alışma süreci hakkında detaylı bilgi için Uyum Süreci sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
