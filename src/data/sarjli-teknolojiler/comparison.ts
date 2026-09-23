// "Gelişmiş Şarj Yönetimli vs Standart Şarjlı Cihazlar" comparison table
// for the /teknolojiler/sarjli-teknolojiler page. Renders through the
// existing, already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated. Unlike
// the Şarj Edilebilir Cihazlar page's comparison.ts (rechargeable vs
// disposable-battery devices), this table compares WITHIN the rechargeable
// category — advanced battery-management engineering vs a more basic
// charging circuit — keeping this page's technical framing distinct from
// its sibling's buying-guide framing. Framed as neutral, general
// tendencies — never "kesinlikle daha iyi"; the closing note reinforces
// that the real answer needs an assessment with an odyometrist.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const sarjliTeknolojilerComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Gelişmiş Şarj Yönetimli ile Standart Şarjlı Cihaz Karşılaştırması",
  intro: "Aynı şarjlı kategori içindeki iki yönetim yaklaşımı arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seçim, önceliklerinize göre değişir.",
  primaryLabel: "Gelişmiş Şarj Yönetimli",
  secondaryLabel: "Standart Şarjlı",
  rows: [
    {
      feature: "Şarj Güvenliği",
      primary: "Dahili akıllı şarj yönetim devresi, aşırı şarja ve ısınmaya karşı sürekli koruma sağlar.",
      secondary: "Daha basit şarj devresi, temel düzeyde koruma sunar.",
    },
    {
      feature: "Pil Sağlığı Takibi",
      primary: "Şarj döngüsü ve pil sağlığı verileri uygulama üzerinden takip edilebilir.",
      secondary: "Pil sağlığı verileri genellikle kullanıcıya sunulmaz.",
    },
    {
      feature: "Şarj Döngüsü Ömrü",
      primary: "Gelişmiş hücre yönetimi, döngü ömrünü optimize etmeye yardımcı olur.",
      secondary: "Standart yönetim, döngü ömrünü optimize etmeden çalışır.",
    },
    {
      feature: "Hızlı Şarj Performansı",
      primary: "Optimize edilmiş devreler, kısa sürede yüksek oranda şarj sağlayabilir.",
      secondary: "Hızlı şarj desteği sınırlı veya bulunmayabilir.",
    },
    {
      feature: "Isı Yönetimi",
      primary: "Şarj sırasında oluşan ısı aktif olarak denetlenir ve sınırlandırılır.",
      secondary: "Isı yönetimi daha temel düzeyde gerçekleştirilir.",
    },
    {
      feature: "Fiyat Aralığı",
      primary: "Gelişmiş şarj yönetim teknolojisi, genellikle cihaz fiyatını yukarı çeker.",
      secondary: "Daha basit şarj devresi nedeniyle genellikle daha uygun fiyatlıdır.",
    },
    {
      feature: "Uzun Vadeli Pil Ömrü",
      primary: "Optimize edilmiş şarj döngüleri, uzun vadede pil kapasitesini korumaya yardımcı olabilir.",
      secondary: "Standart şarj yönetimi, zamanla daha hızlı kapasite kaybına yol açabilir.",
    },
    {
      feature: "Uygulama Entegrasyonu",
      primary: "Çoğu model, pil durumunu uygulama üzerinden görüntüleme imkânı sunar.",
      secondary: "Uygulama entegrasyonu genellikle sınırlı veya yoktur.",
    },
    {
      feature: "Bulunabilirlik",
      primary: "Günümüzde üst ve orta-üst segment modellerin çoğunda yaygın olarak sunulur.",
      secondary: "Genellikle ekonomik segment şarjlı modellerde görülür.",
    },
    {
      feature: "Kimler İçin Daha Uygun Olabilir",
      primary: "Pil sağlığını ve şarj güvenliğini önceliklendiren kullanıcılar için sıkça değerlendirilir.",
      secondary: "Temel şarjlı kullanım yeterli olan, sade bir deneyim isteyen kullanıcılar için uygun olabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; sizin için en uygun seçim önceliklerinize ve bütçenize göre bir odyometrist ile birlikte belirlenmelidir.",
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
};
