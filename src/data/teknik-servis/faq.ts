// FAQ hub for the /servis-bakim/teknik-servis page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. Same honest, mechanism-focused
// answer style as every prior series' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const teknikServisFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Teknik Servis Hakkında Merak Edilenler",
  intro: "Kapsam, süre, ücret ve garanti konusunda en çok sorulan sorular.",
  decisionCard: {
    title: "Teknik Servis Desteği Almak İster misiniz?",
    points: ["Ücret duruma göre belirlenir", "18 markada üretici servis yetkisi", "Tahmini süre ilk teknik kontrolden sonra", "Dijital servis kaydı"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Teknik servis için randevu almam gerekir mi?",
          answer:
            "Evet; teknik servis için randevu gerekir. Bizi arayarak veya WhatsApp'tan yazarak sorununuzu paylaşabilir, randevu alabilirsiniz.",
        },
        {
          question: "İlk kontrol ücretli midir?",
          answer:
            "Teknik servis ücreti cihazınızın durumuna göre değişir. Varsa onarım ücreti, teknik servisteki ilk teknik kontrolden sonra size bildirilir.",
        },
        {
          question: "Cihazım teknik servise gönderilir mi?",
          answer:
            "Cihazınız önce merkezimizde ilk değerlendirmeden geçer; bazı sorunlar burada çözülebilir ve teknik servise gönderim gerekmeyebilir. Merkezde çözülemeyen cihaz teknik servise gönderilir.",
        },
      ],
    },
    {
      label: "Süre ve Takip",
      items: [
        {
          question: "Onarım ne kadar sürer?",
          answer:
            "İşlem süresi arızanın türüne ve gerektiğinde teknik servisin veya yedek parçanın beklenmesine göre değişebilir. Tahmini onarım süresi ve varsa ücret, merkezdeki ilk değerlendirmeden ayrı olarak teknik servisteki ilk teknik kontrolden sonra bildirilir.",
        },
        {
          question: "Cihazımın durumunu nasıl öğrenebilirim?",
          answer:
            "Cihazınız teslim edildiğinde dijital bir servis kaydı oluşturulur. Güncel durumu bizi arayarak veya WhatsApp'tan yazarak öğrenebilirsiniz; gerektiğinde personelimiz de SMS veya WhatsApp ile sizi bilgilendirir. Ayrıntılar için Onarım Takibi sayfamıza bakabilirsiniz.",
        },
      ],
    },
    {
      label: "Maliyet ve Garanti",
      items: [
        {
          question: "Garanti kapsamı nasıl belirlenir?",
          answer:
            "Garanti kapsamı, cihazın garanti şartlarına ve arızanın niteliğine göre değerlendirilir; kesin durum teşhis sonrasında netleşir.",
        },
        {
          question: "Su teması garanti kapsamında mıdır?",
          answer:
            "Su teması gibi kullanıcı kaynaklı hasarlar, genellikle garanti kapsamı dışında kalabilir; kesin durum teşhis sonrası netleşir.",
        },
        {
          question: "Onarım süresince yedek bir cihaz kullanabilir miyim?",
          answer:
            "Yedek cihaz imkânı stok durumuna göre değerlendirilebilir.",
        },
      ],
    },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
};
