// "İletim Tipi İşitme Kaybı ile Sensörinöral İşitme Kaybı
// Karşılaştırması" comparison table for the /rehberler/
// isitme-kaybi-nedir page. Renders through the existing, already-
// generic KulakArkasiComparison component (see src/components/
// kulak-arkasi/) — reused as-is, not duplicated. This page's own
// comparison is a genuinely clinical/educational axis — the two most
// common hearing loss types — distinct in kind from every prior
// comparison across the Değerlendirme, Uygulama & Ayar and Servis &
// Bakım series, which were all site-service or product axes.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const isitmeKaybiNedirComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "İletim Tipi İşitme Kaybı ile Sensörinöral İşitme Kaybı Karşılaştırması",
  intro: "İki yaygın işitme kaybı türü arasındaki temel farkları aşağıdaki tabloda özetledik. Kesin tür, yalnızca bir odyometrist tarafından belirlenebilir.",
  primaryLabel: "İletim Tipi İşitme Kaybı",
  secondaryLabel: "Sensörinöral İşitme Kaybı",
  rows: [
    {
      feature: "Kaynaklandığı Bölge",
      primary: "Dış veya orta kulak.",
      secondary: "İç kulak veya işitme siniri.",
    },
    {
      feature: "Tedavi Olasılığı",
      primary: "Birçok durumda tıbbi veya cerrahi tedaviyle iyileştirilebilir.",
      secondary: "Genellikle kalıcıdır; işitme cihazı gibi destekleyici çözümlerle yönetilir.",
    },
    {
      feature: "Yaygınlık",
      primary: "Sensörinöral tipe göre daha az yaygındır.",
      secondary: "İşitme kaybı vakalarının büyük çoğunluğunu oluşturur.",
    },
    {
      feature: "Olası Nedenler",
      primary: "Kulak kiri, sıvı birikimi, kulak zarı hasarı gibi nedenler.",
      secondary: "Yaşlanma, gürültü maruziyeti, genetik faktörler gibi nedenler.",
    },
    {
      feature: "Ses Algısı",
      primary: "Sesler genellikle daha sessiz algılanır, netlik korunabilir.",
      secondary: "Sesler hem daha sessiz hem de daha az net algılanabilir.",
    },
    {
      feature: "Değerlendirme Yaklaşımı",
      primary: "Öncelikle bir KBB değerlendirmesi gerekebilir.",
      secondary: "Odyometrik değerlendirme ve işitme cihazı seçenekleri değerlendirilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; kesin tür ve neden, yalnızca bir odyometrist ve gerektiğinde bir KBB uzmanı tarafından belirlenebilir.",
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
