// FAQ hub for the /segmentler/ekonomik-seri page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. The price question never states a
// figure — only the variables that shape price — same restraint every
// brand/category page's faq.ts uses. The final question deliberately
// addresses the counterfeit-goods risk this price-sensitive segment
// faces, mirroring the comparison table's own pivot.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const ekonomikSeriFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Ekonomik Seri Hakkında Merak Edilenler",
  intro: "Ekonomik serinin kapsamı, uygunluğu ve fiyatı hakkında en çok sorulan sorular.",
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
          question: "Ekonomik seri ne anlama gelir?",
          answer:
            "Bir markanın temel işitme ihtiyaçlarını karşılamak üzere tasarladığı, sade ve uygun fiyatlı ürün ailesini ifade eder.",
        },
        {
          question: "Ekonomik seri düşük kaliteli midir?",
          answer:
            "Hayır; ekonomik seri, standart ve premium serilere göre daha az özellik sunar, ancak orijinal ürün olarak üretici kalite standartlarına uygun şekilde üretilir.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Ekonomik seri kimler için uygundur?",
          answer:
            "Genellikle sınırlı bütçesi olan, günlük sakin ortamlarda vakit geçiren veya ilk kez işitme cihazı kullanacak kullanıcılar için değerlendirilir.",
        },
        {
          question: "Hafif işitme kaybında ekonomik seri yeterli olur mu?",
          answer:
            "Bazı durumlarda yeterli olabilir; ancak kesin uygunluk bir işitme testiyle değerlendirilmelidir.",
        },
      ],
    },
    {
      label: "Fiyat",
      items: [
        {
          question: "Ekonomik seri fiyatları ne kadardır?",
          answer:
            "Fiyat marka ve modele göre değişir; net fiyat bilgisi ihtiyaç değerlendirmesi sonrasında paylaşılır.",
        },
        {
          question: "SGK ekonomik seri cihazları karşılıyor mu?",
          answer:
            "SGK desteği, seri seviyesine göre değil, sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Detaylar SGK rehber sayfamızda yer almaktadır.",
        },
      ],
    },
    {
      label: "Güvenlik",
      items: [
        {
          question: "Çok ucuz cihazlardan kaçınmalı mıyım?",
          answer:
            "Piyasa ortalamasının çok altındaki fiyatlar, orijinal olmayan bir ürüne işaret edebilir; satın almadan önce satıcının yetkili olup olmadığını kontrol etmenizi öneririz.",
        },
      ],
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
