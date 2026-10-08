// Cihaz Deneme — SSS (Faz 2 P2): 11 sorudan 6'ya; yalnızca kanonik deneme
// modeli (SERVICE_SOT §1.5). Gebze/Çayırova ulaşım soruları, "birden fazla
// cihaz karşılaştırma", "ara kontrol", "mevcut cihaz kontrolü" ve "demodan
// sonra almak zorunda değilsiniz" ifadesi çıkarıldı.
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const cihazDenemeFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Cihaz Deneme Hakkında Merak Edilenler",
  intro: "Demo, 7 günlük deneme ve iade ile ilgili kısa cevaplar.",
  categories: [
    {
      label: "Deneme Modeli",
      items: [
        {
          question: "İşitme cihazını satın almadan önce deneyebilir miyim?",
          answer: "Merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılır. Günlük hayatınızda denemek isterseniz cihazı satın alarak en fazla 7 gün kullanabilirsiniz.",
        },
        {
          question: "Cihaz denemesi ücretli mi?",
          answer: "Merkezdeki yaklaşık 20 dakikalık demo ücretsizdir. 7 güne kadar deneme ise cihaz satın alınarak yapılır: cihaz bedelini ödersiniz.",
        },
        {
          question: "7 gün içinde uygun bulmazsam ne olur?",
          answer: "Cihaz iade alınır ve ödediğiniz tutar kesintisiz iade edilir.",
        },
        {
          question: "Kulak içi cihazları da 7 gün deneyebilir miyim?",
          answer: "Kulak içi cihazlar 7 günlük deneme kapsamı dışındadır. Bu cihazları merkezimizde demo olarak deneyebilirsiniz.",
        },
      ],
    },
    {
      label: "Randevu",
      items: [
        {
          question: "Demo için randevu gerekir mi?",
          answer: "Evet, demo randevuyla yapılır. Randevu için bizi arayabilir veya WhatsApp'tan yazabilirsiniz.",
        },
        {
          question: "Cihaz denemek için işitme testi gerekir mi?",
          answer: "Size uygun cihazın belirlenebilmesi için önce bir işitme değerlendirmesi yapılır; işitme testi ücretsizdir.",
        },
      ],
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
