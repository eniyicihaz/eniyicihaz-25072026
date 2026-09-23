// "Şarj Edilebilir vs Pilli" comparison table for the /isitme-cihazlari/
// sarj-edilebilir page. Renders through the existing, already-generic
// KulakArkasiComparison component (see src/components/kulak-arkasi/) —
// reused as-is, not duplicated, same technique the ITE page's
// comparison.ts uses. Framed as neutral, general tendencies — never
// "kesinlikle daha iyi"; the closing note reinforces that the real
// answer needs an assessment with an odyometrist.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const sarjEdilebilirComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Şarj Edilebilir ile Pilli (Değiştirilebilir Pil) Karşılaştırması",
  intro: "İki güç seçeneği arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seçim, günlük rutininize ve tercih ettiğiniz cihaz tipine göre değişir.",
  primaryLabel: "Şarj Edilebilir",
  secondaryLabel: "Pilli (Değiştirilebilir Pil)",
  rows: [
    {
      feature: "Günlük Kullanım Kolaylığı",
      primary: "Gece şarj kutusuna yerleştirilir, sabah kullanıma hazırdır; pil değişimi gerekmez.",
      secondary: "Pil bittiğinde değiştirilmesi gerekir; küçük pillerle uğraşmak bazı kullanıcılar için zor olabilir.",
    },
    {
      feature: "Uzun Vadeli Kullanım Alışkanlığı",
      primary: "Tekrar tekrar şarj edilen dahili pil, düzenli pil satın alma ihtiyacını ortadan kaldırır.",
      secondary: "Değiştirilebilir piller düzenli olarak temin edilmelidir; bu, zamanla tekrarlayan bir alışkanlık oluşturur.",
    },
    {
      feature: "Çevresel Etki",
      primary: "Tek kullanımlık pillere kıyasla daha az atık üretir.",
      secondary: "Kullanılan piller düzenli olarak atık hâline gelir.",
    },
    {
      feature: "Acil Durum Kullanımı",
      primary: "Şarj kutusuna erişim yoksa cihaz tamamen boşalabilir; taşınabilir (powerbank) kutular bu riski azaltabilir.",
      secondary: "Yedek pil taşınması, acil durumlarda hızlı bir çözüm sunar.",
    },
    {
      feature: "Pil Ömrü ve Yaşlanma",
      primary: "Dahili lityum-iyon pil, yıllar içinde kademeli olarak kapasite kaybedebilir; değişimi yetkili servis gerektirir.",
      secondary: "Piller düzenli olarak tazelenir; cihazın kendi pil bölmesi zamanla değişmez.",
    },
    {
      feature: "Seyahat",
      primary: "Prize erişimin kısıtlı olduğu uzun seyahatlerde, powerbank özellikli kutu olmadan zorluk yaşanabilir.",
      secondary: "Yedek pil taşımak, prize ihtiyaç duymadan kullanım sağlar.",
    },
    {
      feature: "El Becerisi Gereksinimi",
      primary: "Küçük pil ve pil kapağıyla uğraşmayı ortadan kaldırdığından el becerisi sınırlı kullanıcılar için daha kolaydır.",
      secondary: "Küçük pilin takılıp çıkarılması belirli bir el becerisi gerektirir.",
    },
    {
      feature: "Cihaz Boyutu",
      primary: "Dahili pil ve şarj devresi, bazı modellerde gövdeyi hafifçe büyütebilir.",
      secondary: "Pil bölmesi genellikle daha kompakt bir gövde tasarımına izin verir.",
    },
    {
      feature: "Bulunabilirlik",
      primary: "Günümüzde BTE/RIC modellerinin çoğunda, ITE ailesinde ise sınırlı sayıda modelde sunulur.",
      secondary: "Hemen hemen her cihaz tipinde ve markada bulunabilir.",
    },
    {
      feature: "Kimler İçin Daha Uygun Olabilir",
      primary: "Pil değiştirme zahmetinden kaçınmak isteyen, düzenli bir şarj rutinine uyum sağlayabilecek kullanıcılar için sıkça değerlendirilir.",
      secondary: "Prize erişimin kısıtlı olduğu ortamlarda uzun süre bulunan veya çok küçük cihaz boyutunu önceliklendiren kullanıcılarda sıkça tercih edilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; sizin için en uygun seçim yaşam tarzınız, günlük rutininiz ve cihaz tipi tercihinize göre bir odyometrist ile birlikte belirlenmelidir.",
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
