// "SGK Anlaşmalı Merkezden Alım ile Anlaşmasız Merkezden Alım
// Karşılaştırması" comparison table for the /sgk/katki-payi page.
// Renders through the existing, already-generic KulakArkasiComparison
// component (see src/components/kulak-arkasi/) — reused as-is, not
// duplicated. Deliberately contains no specific TL figures — a
// timeless, non-numeric comparison that won't go stale, distinct from
// every prior comparison across the site.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const sgkKatkiPayiComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "SGK Anlaşmalı Merkezden Alım ile Anlaşmasız Merkezden Alım Karşılaştırması",
  intro: "İki alım yolu arasındaki temel farkları aşağıdaki tabloda özetledik.",
  primaryLabel: "SGK Anlaşmalı Merkez",
  secondaryLabel: "Anlaşmasız Merkez",
  rows: [
    {
      feature: "SGK Desteği",
      primary: "SGK destek tutarı doğrudan uygulanır.",
      secondary: "SGK desteğinden yararlanılamaz.",
    },
    {
      feature: "Ödeyeceğiniz Tutar",
      primary: "Yalnızca katkı payını (varsa) ödersiniz.",
      secondary: "Cihazın tam fiyatını ödemeniz gerekir.",
    },
    {
      feature: "Belge Süreci",
      primary: "Rapor ve reçete süreci merkez tarafından yönetilir.",
      secondary: "SGK'ya yönelik bir belge süreci işletilmez.",
    },
    {
      feature: "Pil Desteği",
      primary: "Yıllık pil desteğinden de yararlanabilirsiniz.",
      secondary: "Pil desteğinden yararlanılamaz.",
    },
    {
      feature: "Kimler İçin Uygundur",
      primary: "SGK güvencesi olan ve destekten yararlanmak isteyen kullanıcılar için önerilir.",
      secondary: "SGK güvencesi olmayan veya farklı bir tercih yapmak isteyen kullanıcılar için bir seçenek olabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; kesin katkı payı tutarınız, SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi sayfamızdaki güncel verilere göre belirlenir.",
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
