// "Yetkili Marka Servisi ile Yetkisiz/Bağımsız Servis Karşılaştırması"
// comparison table for the /neden-orijinal/yaygin-servis-agi page.
// Renders through the existing, already-generic KulakArkasiComparison
// component (see src/components/kulak-arkasi/) — reused as-is, not
// duplicated. This table compares authorized-network service against
// unauthorized/independent repair — this page's own natural comparison
// axis, distinct from the channel-authenticity axis on Güvenilir
// Teknoloji and the maintenance-habits axis on Uzun Ömürlü Cihazlar.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const yayginServisAgiComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Yetkili Marka Servisi ile Yetkisiz/Bağımsız Servis Karşılaştırması",
  intro: "İki yaklaşım arasındaki temel farkları aşağıdaki tabloda özetledik. Cihazınız için en uygun servis seçeneği garanti durumunuza göre değişebilir.",
  primaryLabel: "Yetkili Marka Servisi",
  secondaryLabel: "Yetkisiz veya Bağımsız Servis",
  rows: [
    {
      feature: "Teknisyen Eğitimi",
      primary: "Üretici tarafından eğitilmiş ve sertifikalandırılmış teknisyenler görev yapar.",
      secondary: "Teknisyenlerin marka sertifikasyonu genellikle bulunmaz.",
    },
    {
      feature: "Yedek Parça",
      primary: "Yalnızca orijinal yedek parça kullanılır.",
      secondary: "Uyumsuz veya taklit yedek parça kullanılabilir.",
    },
    {
      feature: "Garanti",
      primary: "Yapılan işlemler garantiyi korur.",
      secondary: "Yetkisiz müdahale garantiyi geçersiz kılabilir.",
    },
    {
      feature: "Belgeleme",
      primary: "Her işlem belgelenir ve kayıt altına alınır.",
      secondary: "Belgesiz veya kayıt dışı işlemler yapılabilir.",
    },
    {
      feature: "Kalite Standardı",
      primary: "Üreticinin belirlediği standart prosedürler uygulanır.",
      secondary: "Standart bir prosedür garantisi yoktur.",
    },
    {
      feature: "Onarım Sonrası Test",
      primary: "Cihaz, teslim öncesi performans testinden geçirilir.",
      secondary: "Test süreci her zaman uygulanmayabilir.",
    },
    {
      feature: "Sorumluluk",
      primary: "Servis sürecinin sorumluluğu yetkili marka tarafından üstlenilir.",
      secondary: "Sorumluluk genellikle net değildir.",
    },
    {
      feature: "Fiyat",
      primary: "Fiyatlandırma şeffaf ve marka standartlarına uygundur.",
      secondary: "Fiyatlandırma değişken ve öngörülemez olabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; cihazınız için en uygun servis seçeneği, garanti durumunuza ve ihtiyacınıza göre değerlendirilmelidir.",
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
