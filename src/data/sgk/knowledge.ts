// Content for the SGK pillar page's third section — a scannable knowledge
// grid replacing what used to be one long paragraph block. Own namespace,
// independent of hero.ts/process.ts.
//
// Card hrefs now point to each card's real destination: the SGK hub's
// sub-pages where they exist, or the most relevant on-page section anchor
// where no dedicated "SGK mevzuatı" page exists (no invented URL).

export interface SgkKnowledgeCard {
  title: string;
  description: string;
  href: string;
}

export interface SgkKnowledgeContent {
  badge: string;
  heading: string;
  intro: string;
  cards: SgkKnowledgeCard[];
  cardLinkLabel: string;
  notice: { label: string; text: string; contactLabel: string };
}

export const sgkKnowledge: SgkKnowledgeContent = {
  badge: "Bilmeniz Gerekenler",
  heading: "SGK İşitme Cihazı Desteği Hakkında Bilmeniz Gerekenler",
  intro:
    "SGK işitme cihazı desteğine başvurmadan önce merak edilen konuları tek bakışta özetledik — katkı payından gerekli belgelere kadar süreci baştan sona anlamanız için.",
  cards: [
    {
      title: "Kimler SGK Desteğinden Yararlanabilir?",
      description:
        "İşitme kaybı sağlık kurulu raporuyla belgelenen ve SGK'ya bağlı vatandaşlar, belirlenen şartları sağladığında işitme cihazı devlet desteğinden faydalanabilir.",
      href: "#sgk-eligibility-title",
    },
    {
      title: "Destek Tutarları Nasıl Belirlenir?",
      description:
        "SGK katkı payı; yaş grubuna, cihaz tipine ve güncel SGK mevzuatına göre değişiklik gösterebilir.",
      href: "/sgk/katki-payi",
    },
    {
      title: "Hangi Belgeler Gereklidir?",
      description:
        "Başvuru için işitme cihazı raporu, uzman hekim reçetesi ve SGK'nın istediği diğer evrakların eksiksiz tamamlanması gerekir.",
      href: "/sgk/gerekli-belgeler",
    },
    {
      title: "SGK Başvurusu Nasıl Yapılır?",
      description:
        "Rapor ve reçete tamamlandıktan sonra belgeler SGK'ya iletilir; başvuru süreci mevzuata uygun şekilde takip edilir.",
      href: "/sgk/rapor-sureci",
    },
    {
      title: "Güncel SGK Mevzuatı",
      description:
        "SGK katkı payları ve destek tutarları dönemsel olarak güncellenebilir; başvurudan önce güncel mevzuatı kontrol etmek önemlidir.",
      href: "#sgk-payments-title",
    },
    {
      title: "Uzman Desteği",
      description:
        "Süreç boyunca doğru yönlendirme almak, hem zaman kaybını önler hem de başvurunun eksiksiz ilerlemesini sağlar.",
      href: "#sgk-support-title",
    },
  ],
  cardLinkLabel: "Daha Fazla Bilgi",
  notice: {
    label: "Güncel Bilgilendirme",
    text: "SGK ödeme tutarları ve katkı payları belirli dönemlerde güncellenebilir. En güncel bilgiler için SGK mevzuatını takip edebilir veya SGK anlaşmalı merkezimizden bilgi alabilirsiniz.",
    contactLabel: "Hemen Arayın",
  },
};
