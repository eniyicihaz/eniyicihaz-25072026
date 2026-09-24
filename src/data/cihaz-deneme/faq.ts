// FAQ hub for the /uygulama-ayar/cihaz-deneme page — redesign plan §1/§7,
// Bölüm 12. Renders through BrandPageFaq (FAQPage schema auto-generated).
// Expanded to 10 questions: "Cihaz denemesi ücretli mi?" is now an
// explicit, direct question (the old page only implied this via
// decisionCard/trustItems — a real gap the redesign closes), plus the
// two Gebze/Çayırova candidacy questions the redesign explicitly asked
// for. No price figures, no guarantee language.
import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const cihazDenemeFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Cihaz Deneme Hakkında Merak Edilenler",
  intro: "Deneme süresi, koşullar, bölgeden ulaşım ve karar süreci hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Cihaz Deneme Süreci Hakkında Bilgi Almak İster misiniz?",
    points: ["Satın alma yükümlülüğü yok", "Gerçek yaşam koşullarında test", "Ara kontrol desteği", "Ücretsiz"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "İşitme cihazını satın almadan önce deneyebilir miyim?",
          answer: "Evet; size önerilen cihazı satın almadan önce günlük hayatınızda gerçek koşullarda deneyebilirsiniz.",
        },
        {
          question: "Cihaz denemesi ücretli mi?",
          answer: "Hayır; cihaz deneme süreci herhangi bir ücret talep edilmeden sunulur ve satın alma yükümlülüğü getirmez.",
        },
        {
          question: "Hangi işitme cihazlarını deneyebilirim?",
          answer: "İhtiyacınıza ve bütçenize uygun, stok durumuna göre değişen çeşitli marka ve modelleri deneyebilirsiniz.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "Cihaz denemek için işitme testi gerekir mi?",
          answer: "Evet; size uygun cihazın belirlenebilmesi için önce bir işitme değerlendirmesi yapılması gerekir.",
        },
        {
          question: "Birden fazla cihazı karşılaştırabilir miyim?",
          answer: "Stok durumuna bağlı olarak, karşılaştırmalı bir deneme süreci değerlendirilebilir.",
        },
        {
          question: "Deneme sırasında cihazın ayarı yapılır mı?",
          answer: "Evet; ara kontrol seansında geri bildiriminize göre küçük ayarlar yapılabilir.",
        },
        {
          question: "Mevcut cihazımı getirip kontrol ettirebilir miyim?",
          answer: "Evet; mevcut cihazınızı getirip ayarlarını ve genel durumunu kontrol ettirebilirsiniz.",
        },
      ],
    },
    {
      label: "Bölgemizden Ulaşım",
      items: [
        {
          question: "Gebze'den cihaz denemek için Darıca'ya gelebilir miyim?",
          answer: "Evet; Gebze'den merkezimize kolayca ulaşabilirsiniz.",
        },
        {
          question: "Çayırova'dan cihaz denemek için Darıca'ya gelebilir miyim?",
          answer: "Evet; Çayırova'dan da merkezimize ulaşabilir, aynı deneme sürecinden faydalanabilirsiniz.",
        },
      ],
    },
    {
      label: "Karar Sonrası",
      items: [
        {
          question: "Deneme sonrasında hemen cihaz satın almam gerekir mi?",
          answer: "Hayır; memnun kalmadığınız bir modeli satın almak zorunda değilsiniz, ihtiyacınıza göre farklı bir model değerlendirilebilir.",
        },
      ],
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
