// FAQ hub for the /teknolojiler/yapay-zeka-destekli page. Renders through
// the shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. The price question never states
// a figure — only the variables that shape price — same restraint every
// brand/category page's faq.ts uses.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const yapayZekaDestekliFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Yapay Zeka Destekli Cihazlar Hakkında Merak Edilenler",
  intro: "Yapay zeka destekli işitme cihazları, çalışma şekli ve uygunluk kriterleri hakkında en çok sorulan sorular.",
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
          question: "Yapay zeka destekli işitme cihazı nedir?",
          answer:
            "Çevresel ses ortamını gerçek zamanlı olarak analiz eden ve buna göre otomatik ayar yapan, derin öğrenme (deep learning) tabanlı bir ses işleme teknolojisine sahip işitme cihazı özelliğidir.",
        },
        {
          question: "Yapay zeka gerçekten dinleme deneyimini iyileştirir mi?",
          answer:
            "Yapay zeka, ortama otomatik uyum sağlayarak genel olarak daha rahat bir dinleme deneyimi sunmayı hedefler; ancak kişisel deneyim, işitme kaybınızın derecesine ve ortama göre değişebilir.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Yapay zeka özelliği herkese uygun mudur?",
          answer:
            "Çoğu kullanıcı için faydalı bir özelliktir; ancak uygunluk, işitme kaybınızın derecesi ve günlük yaşadığınız ortam çeşitliliğine göre değerlendirilir.",
        },
        {
          question: "İlk kez cihaz kullanacaklar için uygun mudur?",
          answer:
            "Evet, otomatik optimizasyon sayesinde manuel ayarla uğraşmadan doğal bir dinleme deneyimi sunduğundan ilk kez kullanıcılar için sıkça değerlendirilir.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "Yapay zeka özelliği internet bağlantısı gerektirir mi?",
          answer:
            "Hayır, temel ortam algılama ve sınıflandırma cihazın kendi işlemcisi üzerinde (on-device) çalışır; internet bağlantısı gerektirmez.",
        },
        {
          question: "Uygulama olmadan yapay zeka özellikleri çalışır mı?",
          answer:
            "Temel ortam algılama uygulama olmadan da çalışır; ancak öğrenme ve kişiselleştirme gibi bazı gelişmiş özellikler akıllı telefon uygulaması gerektirebilir.",
        },
        {
          question: "Yazılım güncellemesi gerekir mi?",
          answer:
            "Bazı modellerde yapay zeka algoritmaları, üretici tarafından yayınlanan yazılım güncellemeleriyle geliştirilebilir; güncelleme gerekliliği modele göre değişir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, yapay zeka destekli işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği işlemci teknolojisine göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan kullanıcılar yapay zeka destekli cihazlar için de bu destekten yararlanabilir.",
        },
        {
          question: "Yapay zeka destekli işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen marka ve model, cihaz tipi (BTE/RIC veya ITE), yapay zeka özelliklerinin kapsamı ve segment düzeyi belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
