// "Yerel SSS" section for the /iletisim page — local-search-intent FAQ
// (SEARCH_STRATEGY.md §8 FAQ AEO pattern), distinct from the general
// /blog/sik-sorulan-sorular hub and from every topic page's own FAQ.
// Renders through the shared, generic BrandFaq component, which already
// generates FAQPage JSON-LD directly from these visible items — schema
// can never drift from what's on the page.
//
// The address-description answer reuses COMPANY.md §1's real landmark
// directions (Palandöken Eczanesi's üst katı, Farabi Ağız ve Diş Sağlığı
// Merkezi girişinin karşısı) — not surfaced anywhere else in the
// codebase before this page.

import type { BrandFaqContent } from "../../components/brands/BrandFaq/BrandFaq.astro";

export const contactFaq: BrandFaqContent = {
  eyebrow: "Sık Sorulan Sorular",
  heading: "Merkezimiz Hakkında Merak Edilenler",
  intro: "Konumumuz, randevu süreci ve hizmet bölgemizle ilgili en çok sorulan sorular.",
  items: [
    {
      question: "Avrasya İşitme Cihazları nerede bulunuyor?",
      answer:
        "Merkezimiz Fevziçakmak Mah. Dr. Zeki Acar Cad. No:77/7, Darıca/Kocaeli adresinde, Palandöken Eczanesi'nin üst katında, Farabi Ağız ve Diş Sağlığı Merkezi girişinin tam karşısında yer alır; asansörle 1. kata çıkarak ulaşabilirsiniz.",
    },
    {
      question: "Darıca'da işitme testi nerede yapılır?",
      answer:
        "Darıca'daki merkezimizde, uzman odyometristlerimizle ücretsiz işitme testi yaptırabilirsiniz.",
    },
    {
      question: "İşitme testi ücretli mi?",
      answer: "Hayır; işitme testimiz ücretsizdir.",
    },
    {
      question: "Randevu almam gerekir mi?",
      answer:
        "Önceden randevu alınması tavsiye edilir; bu sayede sizi daha hızlı ve kesintisiz karşılayabiliriz.",
    },
    {
      question: "İşitme cihazı denemesi yapılabilir mi?",
      answer: "Evet; ilgilendiğiniz modelleri satın almadan önce merkezimizde deneyebilirsiniz.",
    },
    {
      question: "Gebze'den veya Çayırova'dan merkeze ulaşabilir miyim?",
      answer: "Evet; Gebze ve Çayırova, öncelikli hizmet bölgelerimiz arasındadır.",
    },
    {
      question: "Hangi işitme cihazı markalarıyla çalışıyorsunuz?",
      answer:
        "Oticon, Phonak, Signia, Widex, ReSound ve daha birçok dünya markasıyla çalışıyoruz; tüm markaları Markalar sayfamızda inceleyebilirsiniz.",
    },
    {
      question: "SGK desteği için nasıl başvurabilirim?",
      answer:
        "SGK katkı payı, rapor süreci ve gerekli belgeler hakkında SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi sayfamızdan bilgi alabilir, süreci merkezimizde birlikte başlatabiliriz.",
    },
  ],
};
