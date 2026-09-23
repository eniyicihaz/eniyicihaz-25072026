// M5 (Buying Guide) content for the /isitme-cihazlari hub page. Renders
// through the now-generic BrandBuyingGuide component. Deliberately
// framed differently from brands/buying-guide.ts (a declarative
// "criteria that matter" checklist) to avoid near-duplicate content
// between the two hub pages: this one is a first-person self-assessment
// — questions to ask yourself before narrowing down a device TYPE,
// rather than brand-buying criteria in general.

import type { BrandBuyingGuideContent } from "../../components/brands/BrandBuyingGuide/BrandBuyingGuide.astro";

export const devicesBuyingGuide: BrandBuyingGuideContent = {
  eyebrow: "Karar Öncesi",
  heading: "Cihaz Türünüzü Netleştirmeden Önce Kendinize Sorun",
  intro:
    "Doğru cihaz türüne karar vermeden önce kendinize sormanız faydalı olacak birkaç soruyu bir araya getirdik.",
  criteria: [
    {
      title: "İşitme Kaybımın Derecesi Nedir?",
      description:
        "İşitme testinizin sonucu, hangi cihaz türlerinin sizin için teknik olarak uygun olduğunu belirler.",
    },
    {
      title: "Günlük Olarak Hangi Ortamlarda Bulunuyorum?",
      description:
        "Aktif, sosyal veya sakin bir günlük yaşam, ihtiyaç duyacağınız cihaz özelliklerini doğrudan etkiler.",
    },
    {
      title: "Cihazımın Görünür Olması Beni Rahatsız Eder mi?",
      description:
        "Görünürlük sizin için önemliyse, görünmez veya kulak içi modelleri öncelikli olarak değerlendirebilirsiniz.",
    },
    {
      title: "Telefonumla Bağlantılı Kullanmak İster Miyim?",
      description:
        "Kablosuz bağlantı sizin için öncelikliyse, Bluetooth özellikli modelleri değerlendirmeniz gerekir.",
    },
    {
      title: "Pil Değiştirmek mi, Şarj Etmek mi Tercih Ederim?",
      description:
        "Bu tercih, günlük kullanım alışkanlıklarınıza ve pratiklik beklentinize bağlıdır.",
    },
    {
      title: "Kulak Yapım Hangi Modele Daha Uygun?",
      description:
        "Kulak yapınız, bazı cihaz türlerinin konfor açısından diğerlerinden daha uygun olmasını sağlayabilir.",
    },
    {
      title: "Bütçem Hangi Teknoloji Seviyesine İzin Veriyor?",
      description:
        "Cihaz türü tercihinizi, bütçenize uygun teknoloji seviyesiyle birlikte değerlendirmeniz önemlidir.",
    },
    {
      title: "Cihazı Denemeden Karar Vermek İstemiyorum, Ne Yapmalıyım?",
      description:
        "Kesin karar vermeden önce ilgilendiğiniz cihaz türünü gerçek ortamda deneyebilirsiniz.",
    },
  ],
  closing:
    "Bu soruları netleştirdikten sonra, size en uygun cihaz türünü uzman desteğiyle birlikte belirleyebilirsiniz.",
};
