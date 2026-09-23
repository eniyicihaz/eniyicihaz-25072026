// FAQ hub for the /neden-orijinal/orijinal-aksesuar page. Renders
// through the shared BrandPageFaq component. FAQPage schema is generated
// inside the component itself from these items. Same honest,
// mechanism-focused answer style as the three prior pages' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const orijinalAksesuarFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Orijinal Aksesuar Hakkında Merak Edilenler",
  intro: "Uyum, hijyen ve temin süreci hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Aksesuar İhtiyacınız mı Var?",
    points: ["Ücretsiz uyum kontrolü", "Orijinal aksesuar temini", "Hızlı teslimat", "Uzman danışmanlığı"],
    ctaLabel: "Hemen İletişime Geç",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Orijinal aksesuar neden önemlidir?",
          answer:
            "Orijinal aksesuarlar, cihazınızın modeline özel tasarlanır ve test edilir; bu sayede doğru uyum, hijyen ve performans korunmasına yardımcı olur.",
        },
        {
          question: "Hangi aksesuarları orijinal almam gerekir?",
          answer:
            "Kulak ucu, cerumen filtresi, pil ve şarj aksesuarları gibi cihazla doğrudan temas eden veya güç sağlayan aksesuarların orijinal olması özellikle önemlidir.",
        },
      ],
    },
    {
      label: "Uyum",
      items: [
        {
          question: "Aksesuarların cihazımla uyumlu olduğunu nasıl anlarım?",
          answer:
            "Aksesuar paketinde veya ürün bilgisinde belirtilen model uyumluluğunu kontrol edebilir, emin olmadığınız durumlarda bizimle iletişime geçebilirsiniz.",
        },
        {
          question: "Farklı bir markanın aksesuarını kullanabilir miyim?",
          answer:
            "Genellikle önerilmez; farklı markaların aksesuarları cihazınızla tam uyumlu çalışmayabilir ve performans sorunlarına yol açabilir.",
        },
      ],
    },
    {
      label: "Bakım ve Değişim",
      items: [
        {
          question: "Kulak ucumu veya filtremi ne sıklıkla değiştirmeliyim?",
          answer:
            "Değişim sıklığı kullanım yoğunluğuna göre değişir; genel öneri birkaç haftada bir kontrol edip gerektiğinde değiştirmektir.",
        },
        {
          question: "Aksesuarlarımı nereden temin edebilirim?",
          answer:
            "Tüm orijinal aksesuarları bizden veya yetkili satış noktalarından temin edebilirsiniz.",
        },
      ],
    },
    {
      label: "Fiyat",
      items: [
        {
          question: "Orijinal aksesuar fiyatları neye göre değişir?",
          answer:
            "Fiyat; aksesuar türüne, markaya ve modele göre değişir. Net fiyat bilgisi için bizimle iletişime geçebilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
