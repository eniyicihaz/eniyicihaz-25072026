// M8 (FAQ) content for the /bilgi-merkezi hub page — its final section,
// closing it before the Footer. Renders through the now-generic BrandFaq
// component. General questions about the knowledge center itself,
// distinct from every sub-page's own FAQ section.

import type { BrandFaqContent } from "../../components/brands/BrandFaq/BrandFaq.astro";

export const knowledgeFaq: BrandFaqContent = {
  eyebrow: "Sık Sorulan Sorular",
  heading: "Bilgi Merkezi Hakkında Merak Edilenler",
  intro:
    "Bilgi Merkezi'nin kapsamı ve nasıl kullanılması gerektiği hakkında en çok sorulan sorular.",
  items: [
    {
      question: "Bilgi Merkezi'ndeki içerikler tıbbi tavsiye midir?",
      answer:
        "Hayır; içerikler genel bilgilendirme amaçlıdır ve kişisel tıbbi tavsiye yerine geçmez. Kendi durumunuz için bir uzmana danışmanızı öneririz.",
    },
    {
      question: "Hangi rehberi okumalıyım, bilmiyorum?",
      answer:
        "Karar Adımı bölümündeki tanımlardan size en yakın olanı seçerek doğru içeriğe ulaşabilir, ya da doğrudan bizimle iletişime geçebilirsiniz.",
    },
    {
      question: "SGK ile ilgili bilgiler güncel mi?",
      answer:
        "SGK destek tutarları zaman içinde değişebilir; en güncel ve tarihli rakamlar için SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi sayfamızı inceleyebilirsiniz.",
    },
    {
      question: "İçerikler kim tarafından hazırlanıyor?",
      answer:
        "İçerikler, kliniğimizin uzman ekibinin günlük pratiğine ve genel işitme sağlığı bilgisine dayanılarak hazırlanır.",
    },
    {
      question: "Aradığım konu Bilgi Merkezi'nde yoksa ne yapmalıyım?",
      answer:
        "Aradığınız konuyu burada bulamazsanız, telefon veya WhatsApp üzerinden bize doğrudan sorabilirsiniz.",
    },
  ],
};
