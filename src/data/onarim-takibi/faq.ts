// FAQ hub for the /servis-bakim/onarim-takibi page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. Same honest, mechanism-focused
// answer style as every prior series' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const onarimTakibiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Onarım Takibi Hakkında Merak Edilenler",
  intro: "Bilgilendirme, süre ve gecikme durumları konusunda en çok sorulan sorular.",
  decisionCard: {
    title: "Servisteki Cihazınızın Durumunu Öğrenmek İster misiniz?",
    points: ["Dijital servis kaydı", "SMS / WhatsApp ile manuel bilgilendirme", "Telefon ve WhatsApp'tan bilgi alma", "Tahmini süre ilk teknik kontrolden sonra"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Cihazımın durumunu nasıl öğrenebilirim?",
          answer:
            "Bizi telefonla arayabilir veya WhatsApp'tan yazabilirsiniz; cihazınızın servis kaydına bakılarak güncel durum sizinle paylaşılır. Gerektiğinde personelimiz de sizi SMS veya WhatsApp üzerinden manuel olarak bilgilendirir.",
        },
        {
          question: "Her aşamada otomatik mesaj alır mıyım?",
          answer:
            "Hayır; otomatik bir bildirim sistemi bulunmamaktadır. Bilgilendirme, gerektiğinde personelimiz tarafından manuel yapılır. Durumu merak ederseniz bizi arayabilir veya WhatsApp'tan yazabilirsiniz.",
        },
        {
          question: "Cihazımın durumunu internetten görebilir miyim?",
          answer:
            "Hayır; dijital servis kaydı personelimiz tarafından kullanılır ve internet üzerinden müşteriye açık değildir. Güncel durumu telefonla veya WhatsApp üzerinden öğrenebilirsiniz.",
        },
      ],
    },
    {
      label: "Süre",
      items: [
        {
          question: "Onarım sürecim ne kadar sürer?",
          answer:
            "İşlem süresi arızanın türüne ve gerektiğinde teknik servisin veya yedek parçanın beklenmesine göre değişebilir. Tahmini onarım süresi ve varsa ücret, merkezdeki ilk değerlendirmeden ayrı olarak teknik servisteki ilk teknik kontrolden sonra bildirilir.",
        },
        {
          question: "Beklenenden uzun sürerse ne olur?",
          answer:
            "Gecikme veya ek bir değerlendirme ihtiyacı doğarsa sizinle iletişime geçilir; siz de istediğiniz zaman bizi arayarak veya WhatsApp'tan yazarak durumu sorabilirsiniz.",
        },
      ],
    },
    {
      label: "Teslim",
      items: [
        {
          question: "Cihazım hazır olduğunda nasıl haberdar olurum?",
          answer:
            "Cihazınız teslime hazır olduğunda sizinle iletişime geçilir.",
        },
      ],
    },
    {
      label: "Diğer",
      items: [
        {
          question: "Arıza belirtileri ve onarım kapsamı için nereye bakmalıyım?",
          answer:
            "Arıza türleri, merkezdeki ilk değerlendirme ve teknik servis süreci için Teknik Servis sayfamıza bakabilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
