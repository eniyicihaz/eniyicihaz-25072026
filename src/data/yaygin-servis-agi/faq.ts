// FAQ hub for the /neden-orijinal/yaygin-servis-agi page. Renders
// through the shared BrandPageFaq component. FAQPage schema is generated
// inside the component itself from these items. Same honest,
// mechanism-focused answer style as the two prior pages' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const yayginServisAgiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Servis Desteği Hakkında Merak Edilenler",
  intro: "Servis süreci, yedek parça ve garanti hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Cihazınız İçin Servis Desteği İster misiniz?",
    points: ["18 markada teknik servis", "Ücret duruma göre belirlenir", "Ücretsiz garanti işlemleri", "Şeffaf süreç takibi"],
    ctaLabel: "Hemen İletişime Geç",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Hangi markalar için teknik servis veriyorsunuz?",
          answer:
            "Sattığımız 18 markanın tamamında Darıca'daki merkezimizde teknik servis veriyoruz.",
        },
        {
          question: "Servis için randevu gerekli mi?",
          answer:
            "Evet; teknik servis, onarım ve garanti işlemleri için randevu almanız gerekir. Randevu için bizi arayabilir veya WhatsApp'tan yazabilirsiniz.",
        },
      ],
    },
    {
      label: "Servis Süreci",
      items: [
        {
          question: "Onarım süreci ne kadar sürer?",
          answer:
            "Teknik serviste cihaz 3 gün içinde, onarımda 1–3 gün içinde teslim edilir. Garanti işlemleri cihaza göre 1–5 gün sürebilir.",
        },
        {
          question: "Servis sırasında cihazım garantili kalır mı?",
          answer:
            "Garanti kapsamındaki işlemler üreticinin garanti koşullarına göre yürütülür; garanti işlemleri ücretsizdir ve gerektiğinde cihaz dış servise gönderilir.",
        },
      ],
    },
    {
      label: "Yedek Parça",
      items: [
        {
          question: "Yedek parça bulunamazsa ne olur?",
          answer:
            "Nadir parçalarda temin süresi uzayabilir; bu durumda size alternatif çözümler veya net bir süre bilgisi sunulur.",
        },
      ],
    },
    {
      label: "Garanti ve Fiyat",
      items: [
        {
          question: "Yetkisiz serviste yaptırdığım işlem sizde geçerli olur mu?",
          answer:
            "Yetkisiz serviste yapılan işlemler garanti kapsamını etkileyebilir; bu durumda cihazınız öncelikle detaylı bir şekilde incelenir.",
        },
        {
          question: "Servis ücreti neye göre belirlenir?",
          answer:
            "Teknik servis ve onarım ücreti cihazın durumuna göre belirlenir; garanti işlemleri ücretsizdir.",
        },
      ],
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
