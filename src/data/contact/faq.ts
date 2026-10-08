// "Yerel SSS" — /iletisim (Faz 2 P2): yalnızca konum, randevu, test ve
// hizmet bölgesi soruları. Marka, genel cihaz ve SGK/deneme soruları
// kendi sayfalarına ait. Landmark tarifi yalnızca doğrulanmış ifade
// (LOCAL_SOURCE_OF_TRUTH §1). BrandFaq bu öğelerden FAQPage JSON-LD üretir.
import type { BrandFaqContent } from "../../components/brands/BrandFaq/BrandFaq.astro";

export const contactFaq: BrandFaqContent = {
  eyebrow: "Sık Sorulan Sorular",
  heading: "Merkezimiz Hakkında Merak Edilenler",
  intro: "Konum, randevu ve hizmet bölgesiyle ilgili kısa cevaplar.",
  items: [
    {
      question: "Avrasya İşitme Cihazları nerede bulunuyor?",
      answer:
        "Merkezimiz Fevziçakmak Mah. Dr. Zeki Acar Cad. No:77/7, Darıca/Kocaeli adresinde, Palandöken Eczanesi'nin üst katında, Farabi Devlet Hastanesi durağının karşısındadır. Asansörle 1. kata çıkabilirsiniz.",
    },
    {
      question: "Randevu almam gerekir mi?",
      answer:
        "Randevusuz gelebilirsiniz. Yine de işitme testi, cihaz ayarı ve teknik servis gibi hizmetler randevuyla verildiği için bu hizmetlerden biri için geliyorsanız önceden aramanız iyi olur.",
    },
    {
      question: "Darıca'da işitme testi nerede yapılır, ücretli mi?",
      answer: "İşitme testini Darıca'daki merkezimizde yapıyoruz ve test ücretsizdir.",
    },
    {
      question: "Gebze veya Çayırova'da şubeniz var mı?",
      answer:
        "Hayır. Tek fiziksel merkezimiz Darıca'dadır. Gebze, Çayırova ve diğer bölgelerden merkeze hangi hatlarla ulaşılabileceği bu sayfadaki hizmet bölgeleri bölümünde yer alıyor.",
    },
    {
      question: "Merkeze gelemezsem evde hizmet alabilir miyim?",
      answer:
        "Evet. Evde hizmetimiz Kocaeli'nin tamamını ve İstanbul Anadolu Yakası'nın tüm ilçelerini kapsar. Hizmet ücretsizdir ve randevuyla planlanır.",
    },
  ],
};
