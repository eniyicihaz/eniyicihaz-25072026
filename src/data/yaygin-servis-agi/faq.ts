// FAQ hub for the /neden-orijinal/yaygin-servis-agi page. Renders
// through the shared BrandPageFaq component. FAQPage schema is generated
// inside the component itself from these items. Same honest,
// mechanism-focused answer style as the two prior pages' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const yayginServisAgiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Servis Desteği Hakkında Merak Edilenler",
  intro: "Üretici yetkisi, servis süreci, yedek parça ve garanti hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Cihazınız İçin Servis Desteği İster misiniz?",
    points: ["18 markada üretici servis yetkisi", "Fiziksel hizmet noktası: Darıca", "Garanti kapsamı şartlara göre değerlendirilir", "Randevu ile servis"],
    ctaLabel: "Hemen İletişime Geç",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Hangi markalar için servis desteği veriyorsunuz?",
          answer:
            "Sattığımız 18 markanın tamamı için üretici servis yetkimiz bulunmaktadır. Fiziksel hizmet noktamız Darıca'daki merkezimizdir.",
        },
        {
          question: "Üretici servis yetkisi ne anlama geliyor?",
          answer:
            "Servis ve garanti işlemlerinin üreticinin koşullarına uygun yürütülebilmesi anlamına gelir. Bu, her işlemin garanti kapsamında olacağı anlamına gelmez; kapsam cihazın garanti şartlarına ve arızanın niteliğine göre değerlendirilir.",
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
          question: "Servis sırasında cihazım garantili kalır mı?",
          answer:
            "Garanti kapsamındaki işlemler üreticinin garanti koşullarına göre yürütülür; gerektiğinde cihaz teknik servise gönderilebilir. Kapsam, cihazın garanti şartlarına ve arızanın niteliğine bağlıdır.",
        },
        {
          question: "Arıza belirtileri ve teşhis süreci için nereye bakmalıyım?",
          answer:
            "Arıza türleri, merkezdeki ilk değerlendirme ve teknik servis süreci için Teknik Servis sayfamıza; teslim ettiğiniz cihazın durumunu öğrenmek için Onarım Takibi sayfamıza bakabilirsiniz.",
        },
      ],
    },
    {
      label: "Yedek Parça",
      items: [
        {
          question: "Yedek parça bulunamazsa ne olur?",
          answer:
            "Parçanın bulunabilirliği ve temin süresi marka ve modele göre değişebilir; parça gerektiren durumlarda bu bilgi ve tahmini süre, değerlendirme sonrasında sizinle paylaşılır.",
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
            "Ücret, cihazın durumuna ve yapılacak işleme göre belirlenir; garanti kapsamı ise garanti şartlarına ve arızanın niteliğine bağlıdır. Varsa ücret bilgisi, süreç içinde sizinle paylaşılır.",
        },
      ],
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
