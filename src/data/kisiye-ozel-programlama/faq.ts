// FAQ hub for the /uygulama-ayar/kisiye-ozel-programlama page. Renders
// through the shared BrandPageFaq component. FAQPage schema is
// generated inside the component itself from these items. Same honest,
// mechanism-focused answer style as every prior series' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const kisiyeOzelProgramlamaFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Kişiye Özel Programlama Hakkında Merak Edilenler",
  intro: "İnce ayar süreci, program sayısı ve veri kullanımı hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Kişiye Özel Programlama Randevusu Almak İster misiniz?",
    points: ["Geri bildirime dayalı ince ayar", "Ortama özel programlar", "Veri kaydı destekli değerlendirme", "Ücretsiz"],
    ctaLabel: "Hemen Randevu Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Kişiye özel programlama ne zaman yapılır?",
          answer:
            "Genellikle ilk uygulama randevusundan sonraki takip randevularında, geri bildiriminize göre yapılır.",
        },
        {
          question: "Kaç program oluşturulabilir?",
          answer:
            "Program sayısı cihaz markası ve modeline göre değişir; genellikle birkaç farklı ortam için ayrı program oluşturulabilir.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "İnce ayar seansı ne kadar sürer?",
          answer:
            "Süre, ele alınan ayar sayısına göre değişir; genellikle kısa bir randevuda tamamlanır.",
        },
        {
          question: "Kaç takip randevusuna ihtiyacım olur?",
          answer:
            "Bu, ilk ayarlardan memnuniyet düzeyinize göre değişir; bazı kullanıcılar için bir, bazıları için birkaç randevu gerekebilir.",
        },
      ],
    },
    {
      label: "Veri Kullanımı",
      items: [
        {
          question: "Kullanım verilerim nasıl kullanılır?",
          answer:
            "Cihaz destekliyorsa, kullanım süresi ve ortam tercihi gibi veriler yalnızca ince ayar kararlarınıza destek olmak için değerlendirilir ve önceden sizinle paylaşılır.",
        },
      ],
    },
    {
      label: "Sonrası",
      items: [
        {
          question: "Ayarlarımı uygulamadan kendim değiştirebilir miyim?",
          answer:
            "Bazı modellerde uygulama üzerinden sınırlı ayarlar yapılabilir; temel programlamanın bir uzman tarafından yapılması önerilir.",
        },
        {
          question: "Uzaktan ince ayar mümkün mü?",
          answer:
            "Bazı modellerde mümkündür; detaylı bilgi için Uzaktan Ayar sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
