// "Orijinal Ürün ile Paralel İthal/Sahte Ürün Karşılaştırması" comparison
// table for the /neden-orijinal/guvenilir-teknoloji page. Renders through
// the existing, already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated. Unlike
// every prior use of this component (severity, laterality, or
// feature-set comparisons), this table compares an authorized-channel
// original product against a parallel-import or counterfeit one — the
// natural comparison axis for this page's own subject.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const guvenilirTeknolojiComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Orijinal Ürün ile Paralel İthal / Sahte Ürün Karşılaştırması",
  intro: "İki kanal arasındaki temel farkları aşağıdaki tabloda özetledik. Orijinalliğinden emin olmak için satın alma öncesinde bu noktaları kontrol etmenizi öneririz.",
  primaryLabel: "Orijinal ve Yetkili Kanaldan Alınan Ürün",
  secondaryLabel: "Paralel İthal veya Sahte Ürün",
  rows: [
    {
      feature: "Kaynak",
      primary: "Yetkili distribütör ve resmi ithalat kanalından temin edilir.",
      secondary: "Kaynağı belirsiz veya kayıt dışı kanallardan temin edilebilir.",
    },
    {
      feature: "Garanti",
      primary: "Üretici garantisi ve resmi kayıt sistemiyle güvence altındadır.",
      secondary: "Garanti genellikle bulunmaz veya geçersizdir.",
    },
    {
      feature: "Fatura",
      primary: "Faturalı ve belgeli olarak teslim edilir.",
      secondary: "Çoğunlukla faturasız satılır.",
    },
    {
      feature: "Yazılım Güncellemeleri",
      primary: "Üreticinin resmi güncellemelerine kesintisiz erişebilir.",
      secondary: "Güncellemelere erişim kısıtlı olabilir veya hiç sağlanamayabilir.",
    },
    {
      feature: "Teknik Servis",
      primary: "Yetkili teknik servis ve orijinal yedek parça desteği sunar.",
      secondary: "Yetkili servisler bu ürünlere hizmet vermeyi reddedebilir.",
    },
    {
      feature: "Seri Numarası",
      primary: "Üretici sisteminde doğrulanabilir bir seri numarasına sahiptir.",
      secondary: "Seri numarası bulunmayabilir veya üretici sisteminde doğrulanamayabilir.",
    },
    {
      feature: "Fiyat",
      primary: "Piyasa koşullarına uygun, şeffaf bir fiyatlandırmaya sahiptir.",
      secondary: "Genellikle piyasa ortalamasının belirgin şekilde altında fiyatlandırılır.",
    },
    {
      feature: "Yasal Güvence",
      primary: "Tüketici hakları ve iade süreçleri yasal güvence altındadır.",
      secondary: "Yasal güvence ve iade hakları belirsiz olabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; bir ürünün orijinalliğinden emin olmak için satın alma öncesinde yetkili bayi listesini ve seri numarasını kontrol etmenizi öneririz.",
  accentColor: "#1d4ed8",
  accentColorBadgeBg: "rgb(29 78 216 / 0.08)",
  accentColorBadgeBorder: "rgb(29 78 216 / 0.35)",
  accentColorBadgeText: "#1e40af",
};
