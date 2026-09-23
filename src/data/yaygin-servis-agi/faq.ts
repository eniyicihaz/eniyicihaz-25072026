// FAQ hub for the /neden-orijinal/yaygin-servis-agi page. Renders
// through the shared BrandPageFaq component. FAQPage schema is generated
// inside the component itself from these items. Same honest,
// mechanism-focused answer style as the two prior pages' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const yayginServisAgiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Yaygın Servis Ağı Hakkında Merak Edilenler",
  intro: "Servis süreci, yedek parça ve garanti hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Cihazınız İçin Servis Desteği İster misiniz?",
    points: ["Ücretsiz ön değerlendirme", "Yetkili teknisyen desteği", "Orijinal yedek parça garantisi", "Şeffaf süreç takibi"],
    ctaLabel: "Hemen İletişime Geç",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Yaygın servis ağı ne anlama gelir?",
          answer:
            "Bir markanın yetkili teknik servis noktalarının geniş bir coğrafyaya yayılmış olması ve kullanıcıların ihtiyaç duydukları desteğe kolayca ulaşabilmesi anlamına gelir.",
        },
        {
          question: "Cihazımı her yerde servise götürebilir miyim?",
          answer:
            "Cihazınızı, satın aldığınız markanın yetkili servis noktalarından herhangi birine götürebilirsiniz; kapsam ve konum bilgisi için bizimle iletişime geçebilirsiniz.",
        },
      ],
    },
    {
      label: "Servis Süreci",
      items: [
        {
          question: "Onarım süreci ne kadar sürer?",
          answer:
            "Süre, arızanın türüne ve parça temin durumuna göre değişir; ön değerlendirme sonrasında size net bir süre bilgisi verilir.",
        },
        {
          question: "Servis sırasında cihazım garantili kalır mı?",
          answer:
            "Evet; yetkili serviste yapılan işlemler üretici garantinizi etkilemez, aksine garanti kapsamının korunmasına yardımcı olur.",
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
            "Ücret; garanti durumuna, yapılan işlemin kapsamına ve gerekli yedek parçaya göre belirlenir.",
        },
      ],
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
