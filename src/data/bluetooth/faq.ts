// FAQ hub for the /isitme-cihazlari/bluetooth-ozellikli page. Renders
// through the shared BrandPageFaq component. FAQPage schema is generated
// inside the component itself from these items. The price question never
// states a figure — only the variables that shape price — same restraint
// every brand/category page's faq.ts uses.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const bluetoothFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Bluetooth Özellikli Cihazlar Hakkında Merak Edilenler",
  intro: "Bluetooth özellikli işitme cihazları, bağlantı şekli ve uygunluk kriterleri hakkında en çok sorulan sorular.",
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
          question: "Bluetooth özellikli işitme cihazı nedir?",
          answer:
            "Akıllı telefon, TV veya bilgisayar gibi uyumlu cihazlarla kablosuz bağlantı kurabilen, sesi doğrudan cihaza aktarabilen işitme cihazı tipidir.",
        },
        {
          question: "Bluetooth özellikli cihaz mı, klasik cihaz mı daha uygundur?",
          answer:
            "Kesin olarak biri diğerinden üstün değildir; hangisinin uygun olacağı günlük teknoloji kullanımınıza ve ihtiyaçlarınıza göre değişir. Detaylı karşılaştırma için bu sayfadaki tabloyu inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Bluetooth özelliği tüm telefonlarla uyumlu mudur?",
          answer:
            "Çoğu güncel iPhone ve Android telefon uyumludur; ancak doğrudan bağlantı standardı (Made for iPhone veya ASHA gibi) telefonun markasına ve işletim sistemi sürümüne göre değişebilir.",
        },
        {
          question: "Bluetooth özellikli seçenek her cihaz tipinde bulunur mu?",
          answer:
            "Hayır. Bluetooth özelliği hem kulak arkası (BTE/RIC) hem de kulak içi (ITE/ITC) ailelerinde sunulabilir, ancak bulunabilirliği marka ve modele göre değişir; en küçük alt tiplerde (CIC/IIC) gövde boyutu nedeniyle daha sınırlıdır.",
        },
        {
          question: "Aynı anda birden fazla cihazla bağlantı kurulabilir mi?",
          answer:
            "Çoğu model, telefon ve TV gibi birden fazla kaynak arasında geçiş yapabilir; ancak aynı anda bağlanabilecek cihaz sayısı modele göre değişir.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "Bluetooth bağlantısı pil ömrünü etkiler mi?",
          answer:
            "Sürekli aktif kablosuz bağlantı, bazı modellerde pil tüketimini artırabilir; yeni nesil Bluetooth Düşük Enerji (LE) teknolojisi bu etkiyi azaltmayı hedefler.",
        },
        {
          question: "TV sesini dinlemek için ek bir aksesuar gerekir mi?",
          answer:
            "Genellikle evet; TV sesini doğrudan cihaza aktarmak için üreticinin sağladığı bir TV yayın aksesuarının televizyona bağlanması gerekir.",
        },
        {
          question: "Eşleştirme sırasında sorun yaşanırsa ne yapılmalı?",
          answer:
            "Eşleştirme adımları model ve telefon türüne göre değişebilir; teslim sırasında size özel kurulum uzman ekibimiz tarafından yapılır ve gösterilir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, Bluetooth özellikli işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği bağlantı özelliğine göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan kullanıcılar Bluetooth özellikli cihazlar için de bu destekten yararlanabilir.",
        },
        {
          question: "Bluetooth özellikli işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen marka ve model, cihaz tipi (BTE/RIC veya ITE), teknoloji seviyesi ve desteklenen bağlantı standartları belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
