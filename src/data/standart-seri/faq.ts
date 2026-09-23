// FAQ hub for the /segmentler/standart-seri page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. The price question never states a
// figure — only the variables that shape price — same restraint every
// brand/category page's faq.ts uses.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const standartSeriFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Standart Seri Hakkında Merak Edilenler",
  intro: "Standart serinin kapsamı, uygunluğu ve fiyatı hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Size Uygun Seriyi Belirlemek İster misiniz?",
    points: ["Ücretsiz işitme testi", "Seri karşılaştırması", "Demo cihaz deneme", "Uzman danışmanlığı"],
    ctaLabel: "Hemen İletişime Geç",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Standart seri ne anlama gelir?",
          answer:
            "Bir markanın günlük kullanım ihtiyaçlarını karşılamak üzere tasarladığı, dengeli bir teknoloji seviyesi sunan ürün ailesini ifade eder.",
        },
        {
          question: "Standart seri premium seriden ne kadar farklıdır?",
          answer:
            "Standart seri, premium serinin sunduğu en gelişmiş ses işleme ve bağlantı özelliklerinin bir kısmını içermeyebilir; ancak günlük kullanım için gerekli temel işlevleri karşılar.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Standart seri herkese uygun mudur?",
          answer:
            "Standart seri geniş bir kullanıcı kitlesi için yeterli olabilir; ancak karmaşık dinleme ortamlarında sıkça bulunan kullanıcılar için premium seri değerlendirilebilir.",
        },
        {
          question: "İlk kez cihaz kullanacaklar için standart seri uygun mudur?",
          answer:
            "Evet; standart seri, dengeli özellik seti sayesinde ilk kez cihaz kullanacak kullanıcılar için sıkça değerlendirilen bir başlangıç noktasıdır.",
        },
      ],
    },
    {
      label: "Fiyat",
      items: [
        {
          question: "Standart seri fiyatları ne kadardır?",
          answer:
            "Fiyat marka ve modele göre değişir; net fiyat bilgisi ihtiyaç değerlendirmesi sonrasında paylaşılır.",
        },
        {
          question: "SGK standart seri cihazları karşılıyor mu?",
          answer:
            "SGK desteği, seri seviyesine göre değil, sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Detaylar SGK rehber sayfamızda yer almaktadır.",
        },
      ],
    },
    {
      label: "Karar",
      items: [
        {
          question: "Standart mı premium mu seçmeliyim?",
          answer:
            "Bu, günlük yaşam tarzınıza, bulunduğunuz ortamlara ve bütçenize bağlıdır; en doğru karar bir ihtiyaç değerlendirmesiyle netleşir.",
        },
      ],
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
