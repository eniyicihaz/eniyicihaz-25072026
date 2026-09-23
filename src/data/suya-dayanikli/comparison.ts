// "Suya Dayanıklı vs Standart (IP Korumasız)" comparison table for the
// /isitme-cihazlari/suya-dayanikli page. Renders through the existing,
// already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated, same
// technique the ITE/Şarj Edilebilir/Bluetooth/Çocuklara Özel/Görünmez
// pages' comparison.ts use. Framed as neutral, general tendencies — never
// "kesinlikle daha iyi"; the closing note reinforces that the real answer
// needs an assessment with an odyometrist.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const suyaDayankliComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Suya Dayanıklı ile Standart (IP Korumasız) Cihaz Karşılaştırması",
  intro: "İki koruma seviyesi arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seçim, yaşam tarzınıza ve yaşadığınız iklime göre değişir.",
  primaryLabel: "Suya Dayanıklı",
  secondaryLabel: "Standart (IP Korumasız)",
  rows: [
    {
      feature: "Su ve Nem Direnci",
      primary: "IP koruma sınıfı sayesinde ter, nem ve hafif su temasına karşı dayanıklıdır.",
      secondary: "Ek bir IP koruma sınıfı taşımadığından nem ve su temasına karşı daha hassastır.",
    },
    {
      feature: "Spor ve Aktif Kullanım",
      primary: "Yoğun terleme gerektiren aktivitelerde güvenle kullanılabilir.",
      secondary: "Yoğun terleme durumunda nem hasarı riski daha yüksektir.",
    },
    {
      feature: "İklim Uygunluğu",
      primary: "Nemli ve sıcak iklimlerde ek bir güvence sağlar.",
      secondary: "Nemli iklimlerde daha sık bakım ihtiyacı doğabilir.",
    },
    {
      feature: "Cihaz Ömrü",
      primary: "Nem kaynaklı arıza riskinin azalması, cihaz ömrünü olumlu etkileyebilir.",
      secondary: "Nem maruziyeti, zamanla elektronik bileşenlerde arızaya yol açabilir.",
    },
    {
      feature: "Fiyat Aralığı",
      primary: "IP koruma özelliği, genellikle cihaz fiyatını bir miktar yukarı çeker.",
      secondary: "Ek koruma katmanı barındırmadığından genellikle daha uygun fiyatlı seçeneklerdir.",
    },
    {
      feature: "Bakım Sıklığı",
      primary: "Düzenli kurutma önerilse de nem kaynaklı servis ihtiyacı genellikle daha azdır.",
      secondary: "Nem ve ter maruziyetine bağlı servis ihtiyacı daha sık olabilir.",
    },
    {
      feature: "Yüzme / Duş Uygunluğu",
      primary: "Suya dayanıklı olmak, suya tam dayanıklı (waterproof) olmak anlamına gelmez; yüzme için genellikle uygun değildir.",
      secondary: "Yüzme ve duş için tasarlanmamıştır, bu noktada suya dayanıklı modellerle aynı sınırlamayı taşır.",
    },
    {
      feature: "Günlük Kaza Toleransı",
      primary: "Ani yağmur veya su sıçraması gibi günlük kazalara karşı ek tolerans sağlar.",
      secondary: "Günlük kazalara karşı ek bir tolerans sağlamaz.",
    },
    {
      feature: "Bulunabilirlik",
      primary: "Günümüzde orta ve üst segment modellerin çoğunda yaygın olarak sunulur.",
      secondary: "Genellikle ekonomik segment modellerde görülür.",
    },
    {
      feature: "Kimler İçin Daha Uygun Olabilir",
      primary: "Aktif yaşam tarzına sahip, spor yapan veya nemli iklimde yaşayan kullanıcılar için sıkça değerlendirilir.",
      secondary: "Daha sakin, düşük nem maruziyetli bir yaşam tarzı sürenler için yeterli olabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; sizin için en uygun seçim yaşam tarzınız, yaşadığınız iklim ve bütçenize göre bir odyometrist ile birlikte belirlenmelidir.",
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
