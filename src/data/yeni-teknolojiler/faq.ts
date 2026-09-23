// FAQ hub for the /blog/yeni-teknolojiler page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. Questions focus on adoption and
// decision-making around new technology, distinct from the deeper
// per-technology FAQs on the real /teknolojiler/* pages.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const yeniTeknolojilerFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Yeni Teknolojiler Hakkında Merak Edilenler",
  intro: "Yeni nesil işitme cihazı teknolojileri hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Size Uygun Teknolojiyi Birlikte Bulalım",
    points: ["Ücretsiz danışmanlık", "Kişiye özel değerlendirme", "Cihaz deneme imkânı", "Uzman rehberliği"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Yapay zeka destekli cihazlar herkese uygun mu?",
          answer:
            "Yapay zeka destekli özellikler birçok kullanıcıya fayda sağlayabilir, ancak önceliğiniz işitme kaybınızın derecesine ve yaşam tarzınıza göre değişebilir. Detaylı bilgi için Cihaz Seçim Rehberi sayfamızı inceleyebilirsiniz.",
        },
        {
          question: "Yeni teknolojiler eski cihazımdan çok mu farklı olur?",
          answer:
            "Fark, hangi teknolojiyi karşılaştırdığınıza bağlı olarak değişebilir. Randevunuzda, mevcut cihazınızla güncel seçenekler arasındaki farkları birlikte değerlendirebiliriz.",
        },
      ],
    },
    {
      label: "Bağlantı",
      items: [
        {
          question: "Her telefonla kablosuz bağlantı çalışır mı?",
          answer:
            "Bağlantı uyumluluğu cihaz modeline ve telefonunuzun işletim sistemine göre değişebilir; detaylı bilgi için Kablosuz Bağlantı Özellikleri sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "SGK",
      items: [
        {
          question: "İleri teknoloji cihazlar SGK kapsamında mı?",
          answer:
            "SGK desteği marka bazında değil, belirlenen teknik kriterlere göre uygulanır; güncel bilgi için SGK Katkı Payı sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Karar Verme",
      items: [
        {
          question: "Yeni bir teknolojiyi satın almadan önce deneyebilir miyim?",
          answer:
            "Evet; ilgilendiğiniz modelleri satın almadan önce deneyebilirsiniz. Detaylı bilgi için Cihaz Deneme sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
