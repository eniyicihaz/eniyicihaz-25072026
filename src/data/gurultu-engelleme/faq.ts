// FAQ hub for the /teknolojiler/gurultu-engelleme page. Renders through
// the shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. The price question never states
// a figure — only the variables that shape price — same restraint every
// brand/category page's faq.ts uses.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const gurultuEngellemeFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Gürültü Engelleme Hakkında Merak Edilenler",
  intro: "Gürültü engelleme teknolojisi, çalışma şekli ve uygunluk kriterleri hakkında en çok sorulan sorular.",
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
          question: "Gürültü engelleme teknolojisi nedir?",
          answer:
            "İşitme cihazının mikrofonlarına ulaşan sesi analiz ederek sabit ve tahmin edilebilir gürültü kaynaklarının seviyesini azaltan bir dijital sinyal işleme sürecidir.",
        },
        {
          question: "Gürültü engelleme, konuşmayı da azaltır mı?",
          answer:
            "Dengeli ayarlandığında konuşmayı korumayı hedefler; ancak çok yüksek seviyede ayarlandığında konuşma sesi de hafifçe etkilenebilir. Bu nedenle ayarın bir odyometrist tarafından yapılması önemlidir.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Gürültü engelleme herkese uygun mudur?",
          answer:
            "Çoğu kullanıcı için faydalı bir özelliktir; ancak uygunluk, işitme kaybınızın derecesi ve günlük yaşadığınız ortamın gürültü düzeyine göre değerlendirilir.",
        },
        {
          question: "İleri derece işitme kaybında gürültü engelleme etkili midir?",
          answer:
            "Evet, ancak etkinlik düzeyi kişiden kişiye ve seçilen modele göre değişebilir; ihtiyacınıza uygun ayar bir odyometrist tarafından belirlenir.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "Gürültü engelleme seviyesi ayarlanabilir mi?",
          answer:
            "Evet, gürültü engelleme seviyesi işitme profilinize ve tercihlerinize göre bir odyometrist tarafından ayarlanabilir.",
        },
        {
          question: "Gürültü engelleme pil tüketimini nasıl etkiler?",
          answer:
            "Sürekli sinyal analizi, bazı modellerde pil tüketimini bir miktar artırabilir; etkisi model ve kullanılan işlemci teknolojisine göre değişir.",
        },
        {
          question: "Gürültü engelleme her ortamda aynı şekilde çalışır mı?",
          answer:
            "Hayır, etkinlik gürültü türüne göre değişir; sabit gürültülerde genellikle daha etkiliyken, değişken veya konuşma benzeri gürültülerde etki azalabilir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, gürültü engellemeli işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği gürültü engelleme özelliğine göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan kullanıcılar gürültü engellemeli cihazlar için de bu destekten yararlanabilir.",
        },
        {
          question: "Gürültü engellemeli işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen marka ve model, cihaz tipi (BTE/RIC veya ITE), gürültü engelleme kapsamı ve segment düzeyi belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
