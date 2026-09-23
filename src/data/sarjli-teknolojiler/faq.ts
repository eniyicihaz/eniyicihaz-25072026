// FAQ hub for the /teknolojiler/sarjli-teknolojiler page. Renders through
// the shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. The price question never states
// a figure — only the variables that shape price — same restraint every
// brand/category page's faq.ts uses.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const sarjliTeknolojilerFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Şarjlı Teknolojiler Hakkında Merak Edilenler",
  intro: "Şarjlı teknolojiler, çalışma şekli ve uygunluk kriterleri hakkında en çok sorulan sorular.",
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
          question: "Şarjlı teknolojiler ile Şarj Edilebilir Cihazlar sayfası arasındaki fark nedir?",
          answer:
            "Şarj Edilebilir Cihazlar sayfamız, şarjlı seçeneğin hangi cihaz tiplerinde bulunduğunu ve şarj yöntemlerini (temaslı, indüksiyonlu) bir satın alma rehberi olarak ele alır. Bu sayfa ise şarj teknolojisinin arkasındaki pil kimyası ve mühendislik detaylarına odaklanır.",
        },
        {
          question: "Lityum-iyon pil neden tercih ediliyor?",
          answer:
            "Lityum-iyon piller, küçük hacimde yüksek enerji yoğunluğu ve diğer şarjlı pil kimyalarına göre daha uzun döngü ömrü sunduğu için günümüzün standart şarjlı pil teknolojisi hâline gelmiştir.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Gelişmiş şarj yönetimi herkese uygun mudur?",
          answer:
            "Çoğu kullanıcı için faydalı bir özelliktir; ancak uygunluk, öncelikleriniz ve bütçenize göre değerlendirilir.",
        },
        {
          question: "Pil sağlığı takibi her modelde var mı?",
          answer:
            "Hayır, pil sağlığı takibi genellikle üst segment modellerde ve uygulama entegrasyonu bulunan cihazlarda sunulur.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "Pil kaç yıl dayanır?",
          answer:
            "Lityum-iyon piller genellikle yıllar süren kullanıma dayanacak şekilde tasarlanır; ancak kapasite zamanla kademeli olarak azalabilir. Kesin süre kullanım alışkanlığına ve modele göre değişir.",
        },
        {
          question: "Pil değişimi nasıl yapılır?",
          answer:
            "Dahili pilin değişimi kullanıcı tarafından yapılamaz; yetkili teknik servisimiz tarafından gerçekleştirilir.",
        },
        {
          question: "Şarj kutusunu her yere taşımam gerekir mi?",
          answer:
            "Günlük kullanım için genellikle gerekmez; ancak seyahat gibi uzun süreli kullanımlarda şarj kutusunun yanınızda olması önerilir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, gelişmiş şarj teknolojili işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği şarj teknolojisine göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan kullanıcılar şarjlı cihazlar için de bu destekten yararlanabilir.",
        },
        {
          question: "Şarjlı teknolojili işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen marka ve model, cihaz tipi (BTE/RIC veya ITE), şarj yönetim teknolojisinin kapsamı ve segment düzeyi belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
};
