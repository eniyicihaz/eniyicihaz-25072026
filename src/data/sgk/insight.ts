// Content for the SGK pillar page's interpretation section — comes right
// after the payment-amounts table. Deliberately does NOT repeat those
// figures; it explains what drives them and what to watch out for. Own
// namespace, independent of hero/process/knowledge/payments.
//
// relatedLinks: "SGK Katkı Payı" now points to its real page
// (/sgk/katki-payi) and "İşitme Cihazı Seçim Rehberi" now points to the
// real Cihaz Seçim Rehberi page (/rehberler/cihaz-secim-rehberi); "SGK
// Mevzuatı" doesn't exist yet and still points back to the pillar page
// itself. Swap its href once its real destination page is built.

export interface SgkInsightPoint {
  title: string;
  text: string;
}

export interface SgkInsightCard {
  title: string;
  text: string;
}

export interface SgkInsightLink {
  label: string;
  href: string;
}

export interface SgkInsightContent {
  badge: string;
  heading: string;
  intro: string;
  points: SgkInsightPoint[];
  cards: SgkInsightCard[];
  quote: { label: string; text: string };
  relatedLabel: string;
  relatedLinks: SgkInsightLink[];
}

export const sgkInsight: SgkInsightContent = {
  badge: "Uzman Açıklaması",
  heading: "İşitme Cihazı İçin SGK Ödeme Tutarı Ne Kadardır?",
  intro:
    "Bir önceki bölümde SGK'nın güncel ödeme tutarlarını gördünüz. Bu rakamların neye göre belirlendiğini ve başvuru öncesinde nelere dikkat etmeniz gerektiğini birlikte inceleyelim.",
  points: [
    {
      title: "Yaş grubuna göre değişir",
      text: "SGK ödeme tutarları yaş grubuna göre değişebilir; çocuk, genç ve yetişkin grupları için farklı destek tutarları uygulanır.",
    },
    {
      title: "Çalışan ve emekli ayrımı",
      text: "Çalışan ve emekli destekleri farklıdır; SGK katkı payı sigortalılık durumuna göre ayrı tutarlarda belirlenir.",
    },
    {
      title: "Cihaz modeli etkili olabilir",
      text: "Kullanılacak işitme cihazı modeli katkı payını etkileyebilir; tercih edilen cihaz tipine göre ödeme miktarı değişiklik gösterebilir.",
    },
    {
      title: "Mevzuat dönemsel güncellenir",
      text: "Güncel SGK mevzuatı değişiklik gösterebilir; destek tutarları ve katkı payları dönem dönem yeniden belirlenir.",
    },
  ],
  cards: [
    {
      title: "Yaş Grubuna Göre Değişir",
      text: "0-4, 5-12, 13-18 ve 18 yaş üzeri için farklı tutarlar geçerlidir.",
    },
    {
      title: "Çalışan / Emekli Ayrımı",
      text: "Çalışan ve emekli bireyler için destek miktarları farklıdır.",
    },
    {
      title: "SGK Mevzuatı Güncellenebilir",
      text: "Katkı payları dönemsel olarak güncellenebilir.",
    },
    {
      title: "Uzman Danışmanlık Alın",
      text: "Size özel süreci öğrenmek için bizimle iletişime geçin.",
    },
  ],
  quote: {
    label: "Uzman Tavsiyesi",
    text: "SGK katkı payı tek başına işitme cihazı seçiminde belirleyici olmamalıdır. İşitme kaybınıza uygun cihaz seçimi uzun vadede çok daha önemlidir.",
  },
  relatedLabel: "Bu konuyla ilgili devamı",
  relatedLinks: [
    { label: "SGK Katkı Payı", href: "/sgk/katki-payi" },
    { label: "İşitme Cihazı Seçim Rehberi", href: "/rehberler/cihaz-secim-rehberi" },
    { label: "SGK Mevzuatı", href: "/sgk-isitme-cihazi-odemesi" },
  ],
};
