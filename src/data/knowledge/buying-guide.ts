// M5 (Buying Guide) content for the /bilgi-merkezi hub page. Renders
// through the now-generic BrandBuyingGuide component. Same
// self-assessment-questions framing as devices/ and services/
// buying-guide.ts, here scoped to figuring out which CONTENT you
// actually need.

import type { BrandBuyingGuideContent } from "../../components/brands/BrandBuyingGuide/BrandBuyingGuide.astro";

export const knowledgeBuyingGuide: BrandBuyingGuideContent = {
  eyebrow: "Aradığınızı Bulmadan Önce",
  heading: "Hangi Bilgiye İhtiyacınız Olduğunu Netleştirin",
  intro:
    "Bilgi Merkezi'nde doğru içeriğe hızlıca ulaşmak için kendinize sormanız faydalı olacak birkaç soruyu bir araya getirdik.",
  criteria: [
    {
      title: "İşitme Kaybımı Yeni mi Fark Ettim?",
      description:
        "Yeniyse, İşitme Kaybı Nedir? rehberimizle konuyu genel hatlarıyla öğrenmeniz faydalı olabilir.",
    },
    {
      title: "Cihaz Seçimi Konusunda mı Kararsızım?",
      description:
        "Kararsızsanız, Cihaz Seçim Rehberimiz size yol gösterebilir.",
    },
    {
      title: "SGK Desteğinden Yararlanacak mıyım?",
      description:
        "Yararlanacaksanız, SGK & Haklar sayfalarımız süreci baştan sona anlatır.",
    },
    {
      title: "Duyduğum Bir Bilginin Doğruluğundan mı Emin Değilim?",
      description:
        "Emin değilseniz, Uzman Görüşleri sayfamız en sık karşılaşılan yanlış bilgileri düzeltir.",
    },
    {
      title: "Genel Bir Sorum mu Var?",
      description:
        "Genel bir sorunuz varsa, Sık Sorulan Sorular sayfamızda yanıtını bulabilirsiniz.",
    },
    {
      title: "Aradığımı Bulamadım mı?",
      description:
        "Bulamadıysanız, uzman ekibimize doğrudan sorabilirsiniz.",
    },
  ],
  closing:
    "Bu soruları netleştirdikten sonra, size en uygun içeriğe veya doğrudan uzman desteğine yönlenebilirsiniz.",
};
