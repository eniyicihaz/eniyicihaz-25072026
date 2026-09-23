// FAQ hub for the /teknolojiler/konusma-odakli page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. The price question never states a
// figure — only the variables that shape price — same restraint every
// brand/category page's faq.ts uses.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const konusmaOdakliFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Konuşma Odaklı Teknolojiler Hakkında Merak Edilenler",
  intro: "Konuşma odaklı teknolojiler, çalışma şekli ve uygunluk kriterleri hakkında en çok sorulan sorular.",
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
          question: "Konuşma odaklı teknoloji nedir?",
          answer:
            "İşitme cihazının birden fazla mikrofonunu kullanarak belirli bir yönden gelen sesi (genellikle önden gelen konuşmayı) diğer yönlerden gelen seslere kıyasla öne çıkaran bir sinyal işleme yaklaşımıdır.",
        },
        {
          question: "Yönlü mikrofon ile gürültü engelleme arasındaki fark nedir?",
          answer:
            "Gürültü engelleme genel olarak istenmeyen sesleri azaltmayı hedeflerken, yönlü mikrofon belirli bir yöndeki sesi (genellikle konuşmayı) diğer yönlere kıyasla öne çıkarır. İki teknoloji genellikle birlikte çalışır; detaylı bilgi için Gürültü Engelleme Teknolojisi sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Konuşma odaklı teknoloji herkese uygun mudur?",
          answer:
            "Çoğu kullanıcı için faydalı bir özelliktir; ancak uygunluk, işitme kaybınızın derecesi ve günlük sosyal ortamınıza göre değerlendirilir.",
        },
        {
          question: "Araç kullanırken güvenli midir?",
          answer:
            "Yönlü odaklanma çevresel farkındalığı bir miktar azaltabileceğinden, araç kullanırken bu özelliğin ayarları ve otomatik geçiş davranışı bir odyometrist ile birlikte değerlendirilmelidir.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "Yönlü odaklanma her zaman aktif mi?",
          answer:
            "Hayır, çoğu modelde ortam koşullarına göre otomatik olarak devreye girer veya manuel olarak seçilebilir; sürekli aktif olması gerekmez.",
        },
        {
          question: "Binaural senkronizasyon için iki cihaz da mı gerekir?",
          answer:
            "Evet, binaural senkronizasyon avantajı yalnızca her iki kulakta da uyumlu cihaz kullanan kişilerde tam olarak devreye girer.",
        },
        {
          question: "Yönlü mikrofon pil tüketimini nasıl etkiler?",
          answer:
            "Çoklu mikrofon işleme ve binaural senkronizasyon, bazı modellerde pil tüketimini bir miktar artırabilir; etkisi modele göre değişir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, konuşma odaklı işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği yönlü mikrofon özelliğine göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan kullanıcılar konuşma odaklı cihazlar için de bu destekten yararlanabilir.",
        },
        {
          question: "Konuşma odaklı işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen marka ve model, cihaz tipi (BTE/RIC veya ITE), yönlü mikrofon kapsamı ve binaural senkronizasyon desteği belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
