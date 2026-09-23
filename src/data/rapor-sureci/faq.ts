// FAQ hub for the /sgk/rapor-sureci page. Renders through the shared
// BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. Questions are deliberately
// distinct from the pillar page's own FAQ (which already covers "Heyet
// raporu gerekli mi?") to avoid duplicating content — this page goes
// deeper into the mechanics of the process itself.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const raporSureciFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Rapor Süreci Hakkında Merak Edilenler",
  intro: "Hastane seçimi, heyet süreci ve rapor sonrası adımlar hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Rapor Süreciniz İçin Yönlendirme Almak İster misiniz?",
    points: ["Ücretsiz danışmanlık", "Doğru hastane yönlendirmesi", "Şeffaf süreç takibi", "Uzman rehberliği"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Heyet raporu kaç kişilik bir kuruldan oluşur?",
          answer:
            "Sağlık kurulu, hastanenin kendi bünyesindeki ilgili uzman hekimlerden oluşur; kurul bileşimi hastaneye göre değişebilir.",
        },
        {
          question: "Hangi hastaneye başvurmalıyım?",
          answer:
            "Rapor, yalnızca tam teşekküllü bir devlet veya özel hastaneden alınabilir. Size en uygun hastaneyi önermek için bizimle iletişime geçebilirsiniz.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "Rapor süreci ne kadar sürer?",
          answer:
            "Süreç, hastanenin randevu yoğunluğuna ve heyet toplantı sıklığına göre değişir. Netleşmiş bir süre öğrenmek için ilgili hastaneden veya merkezimizden bilgi alabilirsiniz.",
        },
        {
          question: "Raporumun durumunu nasıl takip edebilirim?",
          answer:
            "Rapor ve reçetenizin durumunu e-Devlet uygulaması üzerinden sorgulayabilir, ayrıca merkezimizden de bilgi alabilirsiniz.",
        },
      ],
    },
    {
      label: "Belgeler",
      items: [
        {
          question: "Rapor tek başına yeterli mi?",
          answer:
            "Hayır; rapora ek olarak uzman hekim tarafından düzenlenmiş bir işitme cihazı reçetesi de gereklidir. Başvuru için gereken tüm belgeler için Gerekli Belgeler sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Özel Durumlar",
      items: [
        {
          question: "Çocuklar için rapor süreci farklı mı?",
          answer:
            "Genel süreç aynı olmakla birlikte, çocuklarda erken tanı ve müdahalenin önemi nedeniyle bazı adımlar öncelikli olarak ele alınabilir; detaylı bilgi için Çocuklarda SGK sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
