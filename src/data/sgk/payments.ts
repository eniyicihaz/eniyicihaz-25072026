// Content for the SGK pillar page's payment-amounts section — the page's
// highest-intent section (most visitors land here asking "SGK ne kadar
// ödüyor?"). Own namespace, independent of hero.ts/process.ts/knowledge.ts.
//
// Every figure here mirrors the real 2026 infographic 1:1
// (/images/pages/sgk-2026-odeme-tablosu.webp) and is duplicated as plain
// HTML in the component's <table> so the same numbers are both visually
// premium AND crawlable/accessible — update both the image asset and this
// file together if SGK's amounts change.

export interface SgkPaymentRow {
  ageRange: string;
  employed: string;
  retired: string;
  retiredDeduction: string;
}

export interface SgkPaymentsContent {
  badge: string;
  heading: string;
  subheading: string;
  infographic: { src: string; alt: string; width: number; height: number };
  infoChips: string[];
  validity: string;
  tableCaption: string;
  columns: { ageRange: string; employed: string; retired: string; retiredDeduction: string };
  rows: SgkPaymentRow[];
  battery: { label: string; amount: string; note: string };
  sourceNote: string;
  notice: { label: string; text: string };
  cta: { heading: string; primaryLabel: string; secondaryLabel: string };
}

export const sgkPayments: SgkPaymentsContent = {
  badge: "2026 Güncel SGK Verileri",
  heading: "2026 SGK İşitme Cihazı Destek Tutarları ve Katkı Payları",
  subheading:
    "Çocuk, yetişkin, çalışan ve emekli grupları için geçerli güncel SGK işitme cihazı destek tutarlarını aşağıda inceleyebilirsiniz.",
  infographic: {
    src: "/images/pages/sgk-2026-odeme-tablosu.webp",
    alt: "2026 yılı SGK işitme cihazı ödeme tutarları tablosu — yaş gruplarına göre çalışan ve emekli destek tutarları",
    width: 1402,
    height: 1122,
  },
  infoChips: [
    "2026 Güncel Veriler",
    "SGK Tarafından Belirlenen Destekler",
    "Çocuk ve Yetişkin Destekleri",
    "Çalışan / Emekli Ayrımı",
  ],
  validity: "Geçerlilik Tarihi: 26 Ocak 2026",
  tableCaption: "2026 yılı SGK işitme cihazı ödeme tutarları ve katkı payları",
  columns: {
    ageRange: "Yaş Aralığı",
    employed: "Çalışan",
    retired: "Emekli",
    retiredDeduction: "Maaştan Kesinti (Emekli)",
  },
  rows: [
    { ageRange: "0-4 Yaş Arası", employed: "7.325,34 ₺", retired: "9.156,67 ₺", retiredDeduction: "915,67 ₺" },
    { ageRange: "5-12 Yaş Arası", employed: "6.511,41 ₺", retired: "8.139,26 ₺", retiredDeduction: "813,93 ₺" },
    { ageRange: "13-18 Yaş Arası", employed: "6.104,45 ₺", retired: "7.630,56 ₺", retiredDeduction: "763,06 ₺" },
    { ageRange: "18 Yaş ve Üzeri (Yetişkin)", employed: "4.069,63 ₺", retired: "5.087,04 ₺", retiredDeduction: "508,70 ₺" },
  ],
  battery: {
    label: "Pil Yıllık SGK Desteği",
    amount: "748,80 ₺",
    note: "Yıllık her kulak için 104 adet pil desteği sağlanmaktadır.",
  },
  sourceNote:
    "Tutarlar 26 Ocak 2026 tarihi itibarıyla geçerlidir. Belirtilen katkı payları SGK tarafından belirlenmektedir.",
  notice: {
    label: "Bilgilendirme",
    text: "Bu sayfadaki ödeme tutarları SGK tarafından belirlenen güncel destek tutarlarıdır. SGK mevzuatında yapılabilecek değişikliklerle ödeme miktarları güncellenebilir. En güncel bilgi için SGK'yı takip edebilir veya SGK anlaşmalı merkezimizden bilgi alabilirsiniz.",
  },
  cta: {
    heading: "Size uygun SGK desteğini öğrenmek ister misiniz?",
    primaryLabel: "Hemen Ara",
    secondaryLabel: "WhatsApp'tan Yaz",
  },
};
