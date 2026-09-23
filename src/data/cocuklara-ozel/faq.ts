// FAQ hub for the /isitme-cihazlari/cocuklara-ozel page. Renders through
// the shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. The price question never states
// a figure — only the variables that shape price — same restraint every
// brand/category page's faq.ts uses.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const cocuklaraOzelFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Çocuklara Özel Cihazlar Hakkında Merak Edilenler",
  intro: "Çocuklara özel işitme cihazları, uygunluk kriterleri ve kullanım şekli hakkında en çok sorulan sorular.",
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
          question: "Kaç yaşından itibaren işitme cihazı kullanılabilir?",
          answer:
            "Yenidoğan işitme taraması sonrası tanı alan bebeklerde, dil gelişimini desteklemek amacıyla ilk aylardan itibaren cihazlandırma değerlendirilebilir; kesin karar odyometrik değerlendirmeyle belirlenir.",
        },
        {
          question: "Çocuklara özel cihaz ile yetişkin cihazı arasındaki fark nedir?",
          answer:
            "Temel fark; kilitli pil kapağı, daha dayanıklı gövde, renkli tasarım seçenekleri ve okul ortamına yönelik Roger/FM sistem uyumluluğudur. Detaylı karşılaştırma için bu sayfadaki tabloyu inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Çocuğum büyüdükçe cihazın değiştirilmesi gerekir mi?",
          answer:
            "Cihazın kendisi genellikle uzun süre kullanılabilir; ancak kulak kalıbının büyüyen kulağa uyum sağlaması için düzenli aralıklarla yenilenmesi gerekir.",
        },
        {
          question: "Hangi cihaz tipi çocuklar için daha uygundur?",
          answer:
            "Büyüyen kulağa kolayca uyarlanabilen kalıp değişimi imkânı nedeniyle kulak arkası (BTE) tipi, çocuklarda en sık tercih edilen cihaz tipidir.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "Okulda öğretmenle nasıl bir koordinasyon sağlanır?",
          answer:
            "Roger/FM sistemi kullanılıyorsa, öğretmenin verici mikrofonun kullanımı hakkında bilgilendirilmesi faydalıdır; bu süreçte uzman ekibimiz aileye ve okula destek olabilir.",
        },
        {
          question: "Pil kapağı gerçekten güvenli midir?",
          answer:
            "Kilitli pil kapağı tasarımı, küçük pillerin kazara yutulma riskini önemli ölçüde azaltır; ancak pilin çocuğun erişemeyeceği bir yerde saklanması yine de önerilir.",
        },
        {
          question: "Cihaz ne sıklıkla kontrol edilmeli?",
          answer:
            "Çocukların daha aktif kullanımı nedeniyle, yetişkin kullanıcılara kıyasla daha sık periyodik teknik kontrol önerilir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, çocuklarda işitme cihazı desteği sağlıyor mu?",
          answer:
            "SGK desteği, çocuğun sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan çocuklar bu destekten yararlanabilir; detaylar SGK rehber sayfamızda yer almaktadır.",
        },
        {
          question: "Çocuklara özel işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen marka ve model, teknoloji seviyesi, Roger/FM ve Bluetooth gibi ek özellikler belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
};
