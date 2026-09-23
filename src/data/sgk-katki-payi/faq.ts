// FAQ hub for the /sgk/katki-payi page. Renders through the shared
// BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. Same honest, mechanism-focused
// answer style as every prior series' faq.ts — no specific TL figures,
// consistent with this page's accuracy discipline.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const sgkKatkiPayiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "SGK Katkı Payı Hakkında Merak Edilenler",
  intro: "Hesaplama, kategori ve süreç hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Size Özel Katkı Payınızı Öğrenmek İster misiniz?",
    points: ["Ücretsiz hesaplama", "Kişiye özel değerlendirme", "Şeffaf süreç", "Uzman rehberliği"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Katkı payı nasıl belirlenir?",
          answer:
            "Katkı payı, seçtiğiniz cihazın fiyatı ile SGK'nın yaş grubunuza ve çalışma durumunuza göre sağladığı destek tutarı arasındaki farktır.",
        },
        {
          question: "Güncel SGK destek tutarlarını nereden öğrenebilirim?",
          answer:
            "Güncel ve tarihli SGK destek tutarları için SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Kategoriler",
      items: [
        {
          question: "Emekli ve çalışan destek tutarları neden farklı?",
          answer:
            "SGK, emekliler için genellikle daha yüksek bir destek tutarı belirler; ancak bu tutarın bir kısmı maaştan kesinti olarak uygulanabilir.",
        },
        {
          question: "Çocuklar için katkı payı nasıl işler?",
          answer:
            "Çocuklara yönelik SGK destek tutarları yaş grubuna göre ayrıca belirlenir; detaylı bilgi için Çocuklarda SGK sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "Katkı payımı ödemeden önce öğrenebilir miyim?",
          answer:
            "Evet; randevunuzda seçtiğiniz cihaza göre katkı payınız net bir şekilde sizinle paylaşılır.",
        },
      ],
    },
    {
      label: "Pil Desteği",
      items: [
        {
          question: "Pil desteği katkı payına dahil mi?",
          answer:
            "Hayır; pil desteği, cihaz desteğinden ayrı, yıllık bir destek kalemidir.",
        },
      ],
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
