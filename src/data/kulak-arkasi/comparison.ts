// "Kulak Arkası vs Kulak İçi" comparison table for the /isitme-cihazlari/
// kulak-arkasi-bte page. Renders through the new, page-specific
// KulakArkasiComparison component (see src/components/kulak-arkasi/).
// Framed as neutral, general tendencies — never "kesin" — same restraint
// as every other comparison on this site; the closing note reinforces
// that the real answer needs a hearing assessment.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const kulakArkasiComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Kulak Arkası (BTE) ile Kulak İçi (ITE) Karşılaştırması",
  intro: "İki cihaz tipi arasındaki temel farkları aşağıdaki tabloda özetledik. İTE ailesinin en küçük üyesi olan görünmez (CIC) cihazlarla karşılaştırıldığında bu farklar daha da belirginleşir.",
  primaryLabel: "Kulak Arkası (BTE)",
  secondaryLabel: "Kulak İçi (ITE)",
  rows: [
    {
      feature: "Boyut ve Görünürlük",
      primary: "Kulak kepçesinin arkasında konumlanır; ince RIC modellerinde oldukça az fark edilir.",
      secondary: "Tamamen kulak kanalı içinde yer alır; en az görünür seçeneklerden biridir.",
    },
    {
      feature: "Uygun İşitme Kaybı Aralığı",
      primary: "Hafif dereceden çok ileri dereceye kadar geniş bir aralıkta kullanılabilir.",
      secondary: "Genellikle hafif ile orta-ileri derece kayıplarla sınırlıdır.",
    },
    {
      feature: "Ses Gücü Kapasitesi",
      primary: "Daha büyük hoparlör ve amplifikatör alanı sayesinde daha yüksek ses gücü sunabilir.",
      secondary: "Küçük gövdesi nedeniyle ses gücü kapasitesi sınırlıdır.",
    },
    {
      feature: "Pil Ömrü",
      primary: "Daha büyük pil/akü kapasitesi sayesinde genellikle daha uzun pil ömrü sunar.",
      secondary: "Küçük pil boyutu nedeniyle daha sık pil değişimi gerekebilir.",
    },
    {
      feature: "Bakım ve Temizlik",
      primary: "Kulak dışında olduğu için temizliği ve günlük bakımı görece kolaydır.",
      secondary: "Kulak kanalı içinde kir ve kulak yağına daha fazla maruz kalabilir, düzenli bakım gerektirir.",
    },
    {
      feature: "Kullanım Kolaylığı",
      primary: "Daha büyük kumandaları sayesinde el becerisi sınırlı kullanıcılar için daha kolaydır.",
      secondary: "Küçük boyutu, tutma ve ayar yapmayı bazı kullanıcılar için zorlaştırabilir.",
    },
    {
      feature: "Gözlük / Maske Uyumu",
      primary: "Gözlük sapı ile aynı bölgeyi paylaşır; ince RIC modellerinde bu etki azalır.",
      secondary: "Kulak kepçesini kullanmadığı için gözlük ve maskeyle çakışma yaşanmaz.",
    },
    {
      feature: "Çocuklarda Kullanım",
      primary: "Büyüyen kulağa kolayca uyarlanabilen kalıp değişimi imkânı nedeniyle çocuklarda sıkça tercih edilir.",
      secondary: "Kulak kanalının tam büyümesini beklemek gerektiğinden çocuklarda genellikle önerilmez.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; sizin için en uygun seçim işitme kaybınızın derecesi, kulak yapınız ve yaşam tarzınıza göre bir odyometrist tarafından belirlenmelidir.",
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
