// FAQ hub for the /isitme-cihazlari/kulak-arkasi-bte page. Renders through
// the shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. The price question never states
// a figure — only the variables that shape price — same restraint every
// brand page's faq.ts uses.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const kulakArkasiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Kulak Arkası (BTE) Hakkında Merak Edilenler",
  intro: "Kulak arkası işitme cihazları, uygunluk kriterleri ve SGK desteği hakkında en çok sorulan sorular.",
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
          question: "Kulak arkası (BTE) işitme cihazı nedir?",
          answer:
            "Elektronik bileşenlerin tamamının kulak kepçesinin arkasındaki bir gövdede toplandığı, sesin bir tüp veya kulak kalıbı aracılığıyla kulak kanalına iletildiği işitme cihazı tipidir.",
        },
        {
          question: "BTE ve RIC arasındaki fark nedir?",
          answer:
            "RIC (Receiver-In-Canal), alıcının kulak kanalı içine yerleştirildiği, daha ince ve göze daha az batan bir BTE alt türüdür; her ikisi de kulak arkası kategorisinde değerlendirilir.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Kulak arkası cihaz herkese uygun mudur?",
          answer:
            "BTE, geniş bir işitme kaybı ve yaş aralığında değerlendirilebilir; yine de kesin uygunluk, kulak yapınız ve kayıp derecenize göre bir odyometrist tarafından belirlenmelidir.",
        },
        {
          question: "Çocuklarda kulak arkası cihaz kullanılabilir mi?",
          answer:
            "Evet. Büyüyen kulak kanalına kolayca uyarlanabilen kalıp değişimi imkânı nedeniyle BTE, çocuk kullanıcılarda sıkça ilk tercih edilen cihaz tipidir.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "Kulak arkası cihaz gözlükle birlikte kullanılabilir mi?",
          answer:
            "Evet, birlikte kullanılabilir. Gözlük sapı ile cihaz gövdesi aynı bölgeyi paylaştığı için ilk günlerde kısa bir alışma süreci gerekebilir; ince RIC modelleri bu etkiyi azaltabilir.",
        },
        {
          question: "Kulak arkası cihazın pili ne kadar dayanır?",
          answer:
            "Pilli modellerde pil ömrü genellikle birkaç gün ile iki hafta arasında değişir; şarjlı modellerde ise gece boyu şarjla bir günlük kullanım hedeflenir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, kulak arkası işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihaz tipine göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan kullanıcılar, kulak arkası cihazlar için de bu destekten yararlanabilir.",
        },
        {
          question: "Kulak arkası işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen marka ve model, teknoloji seviyesi, şarjlı veya pilli olması, Bluetooth gibi bağlantı özellikleri belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
