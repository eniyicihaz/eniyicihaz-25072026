// "CROS/BiCROS Sistemleri vs Standart Tek Taraflı Amplifikasyon"
// comparison table for the /ihtiyaciniza-gore/tek-tarafli-isitme-kaybi
// page. Renders through the existing, already-generic
// KulakArkasiComparison component (see src/components/kulak-arkasi/) —
// reused as-is, not duplicated. Unlike the four degree pages (each
// comparing adjacent severity levels), this table compares the two real
// solution approaches for single-sided loss itself — wireless
// side-to-side transmission vs. fitting the poorer ear directly, when
// that ear still has usable residual hearing. Framed as neutral, general
// tendencies — never "kesinlikle daha iyi"; the closing note reinforces
// that the real answer needs an audiological evaluation.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const tekTarafliIsitmeKaybiComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "CROS/BiCROS Sistemleri ile Standart Tek Taraflı Amplifikasyon Karşılaştırması",
  intro: "İki yaklaşım arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seçim, kötü duyan kulağınızın durumuna göre değişir.",
  primaryLabel: "CROS / BiCROS Sistemi",
  secondaryLabel: "Standart Tek Taraflı Amplifikasyon",
  rows: [
    {
      feature: "Çalışma Prensibi",
      primary: "Kötü duyan taraftaki sesi iyi duyan kulağa kablosuz olarak aktarır.",
      secondary: "Yalnızca kötü duyan kulağı amplifiye etmeye çalışır.",
    },
    {
      feature: "Uygunluk",
      primary: "Kötü duyan kulakta işitme cihazının yeterli fayda sağlamadığı durumlarda sıkça tercih edilir.",
      secondary: "Kötü duyan kulakta hâlâ kullanılabilir işitme kalıntısı varsa değerlendirilebilir.",
    },
    {
      feature: "Ses Yönü Algısı",
      primary: "İki taraftan gelen seslerin farkına varmaya yardımcı olur, ancak gerçek binaural yön algısı sağlamaz.",
      secondary: "Kayıp yeterince hafifse gerçek iki kulaklı işitmeye daha yakın bir deneyim sunabilir.",
    },
    {
      feature: "Kurulum",
      primary: "İki parçalı bir sistemdir (verici ve alıcı); iki cihazın eşleştirilmesi gerekir.",
      secondary: "Tek bir cihazla çalışır.",
    },
    {
      feature: "Pil Tüketimi",
      primary: "İki cihazın çalışması nedeniyle toplam pil tüketimi daha yüksek olabilir.",
      secondary: "Tek cihaz olduğundan pil tüketimi daha öngörülebilirdir.",
    },
    {
      feature: "Fiyat Aralığı",
      primary: "İki parçalı sistem yapısı nedeniyle genellikle daha yüksek bir yatırım gerektirir.",
      secondary: "Tek cihaz olduğundan görece daha uygun fiyatlı olabilir.",
    },
    {
      feature: "Bulunabilirlik",
      primary: "Çoğu büyük üretici tarafından sunulan köklü bir çözümdür.",
      secondary: "Kayıp derecesine bağlı olarak her zaman uygun olmayabilir.",
    },
    {
      feature: "Kimler İçin Daha Uygun",
      primary: "Kötü duyan kulakta ciddi veya tam işitme kaybı olan kullanıcılar için sıkça değerlendirilir.",
      secondary: "Kötü duyan kulakta hafif-orta dereceli kayıp olan kullanıcılar için değerlendirilebilir.",
    },
    {
      feature: "Uyum Süreci",
      primary: "Yeni bir işitme deneyimine uyum sağlamak biraz zaman alabilir.",
      secondary: "Geleneksel işitme cihazı deneyimine daha yakındır.",
    },
    {
      feature: "Gerçekçi Beklenti",
      primary: "Amaç, iki kulaklı işitmenin tam yerine geçmek değil, farkındalığı artırmaktır.",
      secondary: "Amaç, kötü duyan kulaktaki işitmeyi bir miktar iyileştirmektir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; sizin için en uygun sistem, kötü duyan kulağınızın durumuna ve önceliklerinize göre bir odyometrist ile birlikte belirlenmelidir.",
  accentColor: "#52525b",
  accentColorBadgeBg: "rgb(82 82 91 / 0.08)",
  accentColorBadgeBorder: "rgb(82 82 91 / 0.35)",
  accentColorBadgeText: "#3f3f46",
};
