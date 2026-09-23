// FAQ hub for the /isitme-cihazlari/sarj-edilebilir page. Renders through
// the shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. The price question never states
// a figure — only the variables that shape price — same restraint every
// brand/category page's faq.ts uses.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const sarjEdilebilirFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Şarj Edilebilir Cihazlar Hakkında Merak Edilenler",
  intro: "Şarj edilebilir işitme cihazları, kullanım şekli ve uygunluk kriterleri hakkında en çok sorulan sorular.",
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
          question: "Şarj edilebilir işitme cihazı nedir?",
          answer:
            "Değiştirilebilir çinko-hava pil yerine dahili, yeniden şarj edilebilir bir lityum-iyon pil kullanan işitme cihazı tipidir; cihaz genellikle gece boyunca bir şarj kutusuna yerleştirilerek doldurulur.",
        },
        {
          question: "Şarj edilebilir cihaz mı, pilli cihaz mı daha uygundur?",
          answer:
            "Kesin olarak biri diğerinden üstün değildir; hangisinin uygun olacağı günlük rutininize, seyahat sıklığınıza ve el becerinize göre değişir. Detaylı karşılaştırma için bu sayfadaki tabloyu inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Şarj edilebilir cihaz kimlere uygundur?",
          answer:
            "Pil değiştirme zahmetinden kaçınmak isteyen, düzenli bir şarj rutinine uyum sağlayabilecek kullanıcılar için sıkça değerlendirilir; kesin uygunluk bir odyometrist tarafından belirlenir.",
        },
        {
          question: "Şarj edilebilir seçenek her cihaz tipinde bulunur mu?",
          answer:
            "Hayır. Şarjlı seçenek en yaygın olarak kulak arkası (BTE/RIC) ailesinde bulunur; kulak içi (ITE/ITC) modellerinde sınırlı sayıda, en küçük alt tiplerde (CIC/IIC) ise oldukça nadir sunulur.",
        },
        {
          question: "Şarj edilebilir cihaz çocuklar için uygun mudur?",
          answer:
            "Küçük pillerin yutulma riskini ortadan kaldırdığı için şarj edilebilir cihazlar çocuk kullanıcılarda sıkça tercih edilir.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "Cihaz her gün şarj edilmeli mi?",
          answer:
            "Evet, genellikle her gece şarj kutusuna yerleştirilmesi önerilir; bu sayede cihaz sabah tam kapasiteyle kullanıma hazır olur.",
        },
        {
          question: "Şarj kutusu olmadan cihaz şarj edilebilir mi?",
          answer:
            "Hayır, dahili pilin doldurulması için üreticinin sağladığı şarj kutusu gereklidir; bu nedenle kutunun her zaman erişilebilir olması önemlidir.",
        },
        {
          question: "Pil kapasitesi zamanla azalır mı?",
          answer:
            "Evet, diğer lityum-iyon pilli cihazlarda olduğu gibi kapasite yıllar içinde kademeli olarak azalabilir; dahili pilin değişimi yetkili servis tarafından yapılır.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, şarj edilebilir işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği güç seçeneğine (pilli veya şarjlı) göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan kullanıcılar şarjlı cihazlar için de bu destekten yararlanabilir.",
        },
        {
          question: "Şarj edilebilir işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen marka ve model, cihaz tipi (BTE/RIC veya ITE), teknoloji seviyesi ve Bluetooth gibi bağlantı özellikleri belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
