// FAQ hub for the /teknolojiler/tinnitus-cozumleri page. Renders through
// the shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. The price question never states
// a figure — only the variables that shape price — same restraint every
// brand/category page's faq.ts uses. Medical questions are answered
// carefully, always deferring the diagnostic question to a physician.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const tinnitusCozumleriFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Tinnitus Desteği Hakkında Merak Edilenler",
  intro: "Tinnitus (kulak çınlaması) destek özelliği, çalışma şekli ve uygunluk kriterleri hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Hâlâ karar veremediniz mi?",
    points: ["Ücretsiz işitme testi", "Demo cihaz denemesi", "Uzman odyometrist desteği", "SGK danışmanlığı"],
    ctaLabel: "Hemen İletişime Geç",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Tinnitus (kulak çınlaması) nedir?",
          answer:
            "Tinnitus, dışarıdan bir ses kaynağı olmadan algılanan çınlama, uğultu veya ıslık sesi hissidir. Birçok farklı nedeni olabileceğinden, öncelikle bir kulak burun boğaz uzmanı tarafından değerlendirilmesi gerekir.",
        },
        {
          question: "İşitme cihazındaki tinnitus özelliği çınlamayı tedavi eder mi?",
          answer:
            "Hayır, bu bir tedavi değildir. Özellik, hafif ve rahatlatıcı sesler üreterek çınlamanın fark edilme düzeyini azaltmaya yardımcı olmayı hedefleyen bir destek seçeneğidir.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Tinnitus desteği herkese uygun mudur?",
          answer:
            "Uygunluk, kulak burun boğaz ve odyoloji değerlendirmesi sonrasında belirlenir; her tinnitus deneyimi için aynı yaklaşım önerilmeyebilir.",
        },
        {
          question: "İşitme kaybı olmadan sadece tinnitus için işitme cihazı kullanılabilir mi?",
          answer:
            "Bazı durumlarda değerlendirilebilir, ancak bu karar bireysel olarak bir odyometrist ve gerektiğinde bir kulak burun boğaz uzmanıyla birlikte alınmalıdır.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "Ses türü nasıl seçilir?",
          answer:
            "Ses türü ve seviyesi, odyometristiniz tarafından işitme profiliniz ve kişisel tercihleriniz göz önünde bulundurularak belirlenir; genellikle deneme sürecinden geçilir.",
        },
        {
          question: "Ses üreteci sürekli açık mı kalmalı?",
          answer:
            "Hayır, kullanım sıklığı ve süresi kişiye göre değişir; bazı kullanıcılar sürekli, bazıları ise yalnızca ihtiyaç duyduğu anlarda kullanmayı tercih eder.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, tinnitus destekli işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği tinnitus özelliğine göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan kullanıcılar bu özelliklere sahip cihazlar için de destekten yararlanabilir.",
        },
        {
          question: "Tinnitus destekli işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen marka ve model, cihaz tipi (BTE/RIC veya ITE), ses kütüphanesinin kapsamı ve uygulama desteği belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
};
