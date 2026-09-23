// FAQ hub for the /neden-orijinal/guvenilir-teknoloji page. Renders
// through the shared BrandPageFaq component. FAQPage schema is generated
// inside the component itself from these items. Unlike every prior
// page's price question, this one explains the price-difference
// mechanism honestly (warranty/service/legal cost is priced in) rather
// than only listing variables — since that is the actual, relevant
// answer for this topic.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const guvenilirTeknolojiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Orijinal Ürün ve Güvenilir Teknoloji Hakkında Merak Edilenler",
  intro: "Orijinallik, doğrulama ve garanti hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Orijinalliğinden Emin Olmak İster misiniz?",
    points: ["Seri numarası doğrulama", "Yetkili bayi kontrolü", "Ücretsiz danışmanlık", "Garanti sorgulama"],
    ctaLabel: "Hemen İletişime Geç",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Orijinal işitme cihazı ne anlama gelir?",
          answer:
            "Üretici tarafından resmi olarak test edilmiş, sertifikalandırılmış ve yetkili distribütör kanalıyla satışa sunulmuş; üretici garantisi ve resmi seri numarası bulunan bir cihazı ifade eder.",
        },
        {
          question: "Paralel ithal ürün nedir?",
          answer:
            "Üreticinin resmi distribütörlük anlaşması dışında, farklı ülkelerden kayıt dışı yollarla getirilen ürünlerdir; bu ürünler genellikle üretici garantisi ve resmi destekten yoksundur.",
        },
      ],
    },
    {
      label: "Doğrulama",
      items: [
        {
          question: "Cihazımın orijinal olup olmadığını nasıl anlarım?",
          answer:
            "Satıcının yetkili bayi listesinde yer alıp almadığını, faturalı satış yapılıp yapılmadığını ve cihazın seri numarasının üretici sisteminde doğrulanıp doğrulanamadığını kontrol edebilirsiniz.",
        },
        {
          question: "Seri numarasını nereden kontrol edebilirim?",
          answer:
            "Seri numarası cihaz üzerinde veya kutusunda yer alır; doğrulama için bizimle iletişime geçebilir veya üreticinin resmi sistemini kullanabilirsiniz.",
        },
      ],
    },
    {
      label: "Garanti ve Servis",
      items: [
        {
          question: "Orijinal olmayan bir cihaz için garanti alabilir miyim?",
          answer:
            "Genellikle hayır; orijinal olmayan cihazlar üretici garantisi kapsamı dışında kalır ve yetkili servisler bu ürünlere hizmet vermeyi reddedebilir.",
        },
        {
          question: "Başka bir yerden aldığım cihazın orijinalliğini sizde kontrol ettirebilir miyim?",
          answer:
            "Evet, cihazınızın seri numarasını doğrulamamız için bizimle iletişime geçebilirsiniz.",
        },
      ],
    },
    {
      label: "Satın Alma",
      items: [
        {
          question: "Neden sizden almalıyım?",
          answer:
            "Sunduğumuz tüm markalar için yetkili distribütörlük anlaşmalarımız bulunur; her ürün faturalı, garantili ve seri numarasıyla doğrulanabilir şekilde teslim edilir.",
        },
        {
          question: "Fiyatlar neden bazı yerlerden daha yüksek olabilir?",
          answer:
            "Orijinal ürünlerde garanti, resmi teknik servis ve yasal güvenceler fiyata dahildir; bu nedenle bazı kayıt dışı kanallara göre fiyat farkı olabilir.",
        },
      ],
    },
  ],
  accentColor: "#1d4ed8",
  accentColorBadgeBg: "rgb(29 78 216 / 0.08)",
  accentColorBadgeBorder: "rgb(29 78 216 / 0.35)",
  accentColorBadgeText: "#1e40af",
};
