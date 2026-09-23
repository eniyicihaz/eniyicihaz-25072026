// FAQ hub for the /rehberler/isitme-kaybi-nedir page. Renders through
// the shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. Same honest, mechanism-focused
// answer style as every prior series' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const isitmeKaybiNedirFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "İşitme Kaybı Hakkında Merak Edilenler",
  intro: "Türler, nedenler ve değerlendirme süreci hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "İşitme Durumunuzu Öğrenmek İster misiniz?",
    points: ["Ücretsiz işitme testi", "Uzman odyometrist değerlendirmesi", "Kişiye özel yönlendirme", "Baskısız süreç"],
    ctaLabel: "Hemen Randevu Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "İşitme kaybı yalnızca yaşlılarda mı görülür?",
          answer:
            "Hayır; işitme kaybı her yaşta görülebilir. Yaşa bağlı işitme kaybı yaygın olsa da, gürültü maruziyeti, genetik faktörler veya doğuştan nedenlerle her yaşta ortaya çıkabilir.",
        },
        {
          question: "İşitme kaybı geri döner mi?",
          answer:
            "Bu, işitme kaybının türüne bağlıdır; bazı iletim tipi kayıplar tıbbi tedaviyle iyileşebilirken, sensörinöral kayıplar genellikle kalıcıdır.",
        },
      ],
    },
    {
      label: "Belirtiler",
      items: [
        {
          question: "İşitme kaybının erken belirtileri nelerdir?",
          answer:
            "Televizyon veya radyo sesini yüksek açma ihtiyacı, kalabalık ortamlarda konuşmayı takip etmekte zorlanma ve sık sık tekrar ettirme isteği gibi belirtiler erken işaretler olabilir.",
        },
        {
          question: "Tek kulakta işitme kaybı olabilir mi?",
          answer:
            "Evet; tek taraflı işitme kaybı mümkündür. Detaylı bilgi için Tek Taraflı İşitme Kaybı sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Değerlendirme",
      items: [
        {
          question: "İşitme kaybımın türünü ve derecesini nasıl öğrenebilirim?",
          answer:
            "Kesin tür ve derece, yalnızca bir odyometrist tarafından yapılan odyometri testiyle belirlenebilir.",
        },
      ],
    },
    {
      label: "Çocuklarda",
      items: [
        {
          question: "Yenidoğan işitme taraması neden önemlidir?",
          answer:
            "Yenidoğan taraması, işitme kaybının mümkün olduğunca erken tespit edilmesine ve erken destek sağlanmasına yardımcı olabilir.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
