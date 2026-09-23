// FAQ hub for the /isitme-cihazlari/gorunmez-cic page. Renders through
// the shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. The price question never states
// a figure — only the variables that shape price — same restraint every
// brand/category page's faq.ts uses.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const gorunmezCicFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Görünmez (CIC) Cihazlar Hakkında Merak Edilenler",
  intro: "Görünmez (CIC/IIC) işitme cihazları, uygunluk kriterleri ve kullanım şekli hakkında en çok sorulan sorular.",
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
          question: "Görünmez (CIC) işitme cihazı nedir?",
          answer:
            "Kulak kanalının derinlerine, kulak zarına yakın bir noktaya yerleşen, kulak içi (ITE) ailesinin en küçük alt tipidir; dışarıdan neredeyse hiç fark edilmez.",
        },
        {
          question: "CIC ile IIC arasındaki fark nedir?",
          answer:
            "IIC (Invisible-In-Canal), kanalın CIC'ye göre daha da derinine yerleşerek daha az görünür bir yerleşim sunabilir; ancak her kulak yapısı bu derinlikte üretime uygun olmayabilir.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Herkes görünmez cihaz kullanabilir mi?",
          answer:
            "Hayır. Uygunluk; kulak kanalının boyutu ve yapısı, işitme kaybının derecesi ve el becerisi gibi faktörlere bağlıdır. Kesin uygunluk bir odyometrist tarafından değerlendirilir.",
        },
        {
          question: "İleri derece işitme kaybında CIC kullanılabilir mi?",
          answer:
            "Genellikle sınırlıdır; küçük gövdesi nedeniyle CIC/IIC, ileri derece kayıplarda yeterli amplifikasyonu sağlayamayabilir. Bu durumda kulak arkası (BTE) modeller değerlendirilir.",
        },
        {
          question: "Çocuklarda görünmez cihaz kullanılabilir mi?",
          answer:
            "Genellikle önerilmez. Büyüyen kulak kanalı, kalıbın sık aralıklarla yenilenmesini gerektirir; bu nedenle çocuklarda kulak arkası (BTE) tipi daha sık tercih edilir.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "Cihaz kulaktan nasıl çıkarılır?",
          answer:
            "Çoğu model, neredeyse görünmeyen ince bir çıkarma ipi veya küçük bir sapla birlikte gelir; cihaz bu ipçikten hafifçe çekilerek çıkarılır.",
        },
        {
          question: "Pil ne sıklıkla değiştirilmeli?",
          answer:
            "Küçük pil boyutu nedeniyle, diğer kulak içi tiplerine göre genellikle daha sık pil değişimi gerekir; tam süre kullanılan modele göre değişir.",
        },
        {
          question: "Bakımı diğer tiplere göre daha mı zor?",
          answer:
            "Kulak kanalı içinde yer aldığından nem ve kulak yağına daha fazla maruz kalabilir; bu nedenle düzenli temizlik ve periyodik teknik kontrol önerilir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, görünmez (CIC) işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihazın görünürlük seviyesine göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan kullanıcılar CIC/IIC cihazlar için de bu destekten yararlanabilir.",
        },
        {
          question: "Görünmez işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen marka ve model, teknoloji seviyesi ve kulak izine özel üretim süreci belirler. Net fiyat, kulak kanalı değerlendirmesi ve ihtiyaç analizi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
};
