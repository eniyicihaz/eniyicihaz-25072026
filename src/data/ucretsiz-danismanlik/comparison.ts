// "Ücretsiz Danışmanlıkla Verilen Karar ile Danışmanlık Almadan Verilen
// Karar Karşılaştırması" comparison table for the /neden-orijinal/
// ucretsiz-danismanlik page. Renders through the existing, already-
// generic KulakArkasiComparison component (see src/components/kulak-
// arkasi/) — reused as-is, not duplicated. This table compares an
// informed, consultancy-backed decision against an unadvised one — this
// page's own natural comparison axis, distinct from the channel-
// authenticity, maintenance, service-network and accessory-quality axes
// used on the four prior pages.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const ucretsizDanismanlikComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Danışmanlıkla Verilen Karar ile Danışmanlık Almadan Verilen Karar Karşılaştırması",
  intro: "İki yaklaşım arasındaki temel farkları aşağıdaki tabloda özetledik. Size en uygun süreç, ihtiyaçlarınıza göre değerlendirilmelidir.",
  primaryLabel: "Ücretsiz Danışmanlıkla Verilen Karar",
  secondaryLabel: "Danışmanlık Almadan Verilen Karar",
  rows: [
    {
      feature: "Değerlendirme Temeli",
      primary: "İşitme testi ve ihtiyaç analizine dayanır.",
      secondary: "Genellikle sınırlı bilgiyle veya varsayımlarla verilir.",
    },
    {
      feature: "Bütçe Uyumu",
      primary: "İhtiyaca ve bütçeye uygun seçenekler birlikte değerlendirilir.",
      secondary: "Gereksiz özellikler için fazla ödeme riski taşıyabilir.",
    },
    {
      feature: "SGK Desteği",
      primary: "SGK hakkı ve süreci hakkında bilgilendirme yapılır.",
      secondary: "SGK desteğinden habersiz kalınabilir.",
    },
    {
      feature: "Deneme İmkânı",
      primary: "Karar öncesi demo cihaz deneme imkânı sunulur.",
      secondary: "Genellikle deneme imkânı olmadan karar verilir.",
    },
    {
      feature: "Satış Baskısı",
      primary: "Belirli bir ürüne yönlendirme yapılmaz.",
      secondary: "Bazı satış kanallarında ürün yönlendirmesi olabilir.",
    },
    {
      feature: "Sonuç Memnuniyeti",
      primary: "Kişiye özel değerlendirme, memnuniyet olasılığını artırmaya yardımcı olur.",
      secondary: "Yetersiz değerlendirme, sonradan değişim ihtiyacına yol açabilir.",
    },
    {
      feature: "Satış Sonrası Destek",
      primary: "Danışmanlık, cihaz tesliminden sonra da devam eder.",
      secondary: "Satış sonrası destek garanti edilmeyebilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; size en uygun karar süreci, ihtiyaçlarınıza göre değerlendirilmelidir.",
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
