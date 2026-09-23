// FAQ hub for the /neden-orijinal/kolay-degisim page. Renders through
// the shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. Same honest, mechanism-focused
// answer style as the five prior pages' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const kolayDegisimFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Kolay Değişim Hakkında Merak Edilenler",
  intro: "Değişim koşulları, süreç ve fiyat hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Değişim Süreciyle İlgili Bilgi Almak İster misiniz?",
    points: ["Net değişim koşulları", "Uzman değerlendirmesi", "Şeffaf süreç takibi", "Hızlı çözüm"],
    ctaLabel: "Hemen İletişime Geç",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Kolay değişim ne anlama gelir?",
          answer:
            "Satın aldığınız cihazın beklentilerinizi karşılamaması, üretim kaynaklı bir sorun taşıması veya ihtiyaçlarınızın değişmesi durumunda başvurabileceğiniz şeffaf bir süreci ifade eder.",
        },
        {
          question: "Değişim hakkım ne kadar süre geçerlidir?",
          answer:
            "Değişim hakkının süresi, ürün ve satış koşullarına göre değişir; net süre satın alma sırasında sizinle paylaşılır.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "Değişim talebimi nasıl iletebilirim?",
          answer:
            "Bizimle telefon, WhatsApp veya klinik ziyaretiyle iletişime geçerek değişim talebinizi iletebilirsiniz.",
        },
        {
          question: "Değişim süreci ne kadar sürer?",
          answer:
            "Süre, talebin niteliğine ve incelemeye göre değişir; ilk görüşmede size net bir zaman planı sunulur.",
        },
      ],
    },
    {
      label: "İhtiyaç Değişikliği",
      items: [
        {
          question: "İşitme kaybım ilerlerse cihazımı değiştirebilir miyim?",
          answer:
            "Evet; ihtiyacınız değiştiğinde uygun bir model geçişini birlikte değerlendirebiliriz.",
        },
      ],
    },
    {
      label: "Fiyat ve Koşullar",
      items: [
        {
          question: "Değişimde fiyat farkı öder miyim?",
          answer:
            "Farklı bir modele geçişte, cihazlar arasındaki fiyat farkı değişim sürecine yansıyabilir; net bilgi süreç başında paylaşılır.",
        },
        {
          question: "Yetkisiz bir yerden aldığım cihazı sizde değiştirebilir miyim?",
          answer:
            "Değişim güvencesi, yetkili kanaldan yapılan satışlar için geçerlidir; farklı kaynaklardan alınan ürünler için önce bir değerlendirme yapılması gerekir.",
        },
      ],
    },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
};
