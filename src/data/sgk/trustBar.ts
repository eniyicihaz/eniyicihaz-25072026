// Content for the SGK pillar page's closing trust bar — sits right after
// the final CTA, right before the Footer. Deliberately not sales-oriented
// (that's the CTA's job): four small, quiet trust signals plus one line
// of contact info. Own namespace, independent of the rest of sgk/*.
//
// Region title uses COMPANY.md §17's exact "öncelikli" (priority) 3-region
// form — a short trust-pill context, not a "which regions do we serve"
// answer, so it deliberately stops at Darıca/Gebze/Çayırova rather than
// also listing the broader Dilovası/Tuzla/Pendik tier (see /iletisim's own
// Hizmet Bölgeleri section for the full breakdown).

export interface SgkTrustItem {
  title: string;
  text: string;
}

export interface SgkTrustBarContent {
  items: SgkTrustItem[];
  closingText: string;
  closingLinkLabel: string;
}

export const sgkTrustBar: SgkTrustBarContent = {
  items: [
    {
      title: "Darıca · Gebze · Çayırova",
      text: "Bölgesinde hizmet veriyoruz.",
    },
    {
      title: "SGK Anlaşmalı İşitme Merkezi",
      text: "SGK süreçlerinde deneyimli ekip.",
    },
    {
      title: "Uzman Odyometrist Desteği",
      text: "İhtiyacınıza uygun yönlendirme.",
    },
    {
      title: "Satış Sonrası Destek",
      text: "Cihaz tesliminden sonra da yanınızdayız.",
    },
  ],
  closingText: "İşitme cihazı seçimi, SGK süreçleri ve cihaz kullanımı hakkında daha fazla bilgi almak için bizimle dilediğiniz zaman",
  closingLinkLabel: "iletişime geçebilirsiniz.",
};
