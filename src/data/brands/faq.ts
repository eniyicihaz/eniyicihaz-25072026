// M8 (FAQ) content for the "Tüm Markalar" (/markalar) page. This page is
// built up modularly (M1...M8…), each an independent section/component —
// this file only ever holds M8's data. The page's final section, closing
// it before the Footer.
//
// Deliberately brand-agnostic and non-promotional: no named brand is shown
// as superior to another, no invented technical spec or price figure, no
// marketing language. Every answer is either general hearing-aid knowledge
// or traceable to COMPANY.md's real services/process (free hearing test,
// SGK-affiliated status, trial process, technical service).

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BrandFaqContent {
  eyebrow: string;
  heading: string;
  intro: string;
  items: FaqItem[];
}

export const brandFaq: BrandFaqContent = {
  eyebrow: "Sık Sorulan Sorular",
  heading: "İşitme Cihazı Markaları Hakkında Merak Edilenler",
  intro:
    "Marka seçimiyle ilgili en sık karşılaştığımız soruları, tarafsız ve güncel bilgilerle burada yanıtladık.",
  items: [
    {
      question: "Hangi işitme cihazı markası bana uygun?",
      answer:
        "Tek bir marka her kullanıcı için en uygun seçenek değildir. İşitme kaybınızın derecesi, yaşam tarzınız, kullanım alışkanlıklarınız ve bütçeniz, size uygun markayı belirleyen temel etkenlerdir. Bu nedenle doğru seçim, ücretsiz işitme testi ve uzman değerlendirmesi sonrasında netleşir.",
    },
    {
      question: "İşitme cihazlarında SGK desteği tüm markalarda geçerli mi?",
      answer:
        "SGK, belirli kriterleri karşılayan işitme cihazları için katkı sağlar. Bu kapsamın hangi marka ve modelleri içerdiği zaman zaman güncellenebildiği için, güncel SGK şartlarını merkezimizden teyit etmenizi öneririz.",
    },
    {
      question: "Kulak arkası (BTE) mi, kulak içi (ITE) mi tercih edilmeli?",
      answer:
        "Bu tercih işitme kaybının derecesine, kulak yapısına ve günlük kullanım konforuna göre değişir. Kulak arkası modeller genellikle ileri derece işitme kayıplarında daha esnek çözüm sunarken, kulak içi modeller estetik ve pratiklik önceliğiyle tercih edilebilir.",
    },
    {
      question: "Şarjlı işitme cihazları pilli modellerden daha mı avantajlıdır?",
      answer:
        "Her iki sistemin de kendine göre avantajı vardır. Şarjlı cihazlar pil değişimi derdini ortadan kaldırırken, pilli cihazlar bazı kullanıcılar için daha uzun kullanım süresi ve esneklik sağlayabilir. Tercih, günlük kullanım alışkanlıklarınıza bağlıdır.",
    },
    {
      question: "İşitme cihazını satın almadan önce deneyebilir miyim?",
      answer:
        "Evet. İşitme cihazı seçimi öncesinde deneme süreci, doğru karara ulaşmanın önemli bir parçasıdır. Cihazı gerçek yaşam ortamınızda test ederek satın alma kararını daha bilinçli verebilirsiniz.",
    },
    {
      question: "Tüm markalarda Bluetooth özelliği bulunuyor mu?",
      answer:
        "Günümüzde birçok modern işitme cihazı markası, farklı seviyelerde Bluetooth bağlantı desteği sunar. Ancak bu özelliğin kapsamı markadan markaya ve modelden modele değişebilir; ihtiyacınıza uygun seçenek uzman desteğiyle netleştirilebilir.",
    },
  ],
};
