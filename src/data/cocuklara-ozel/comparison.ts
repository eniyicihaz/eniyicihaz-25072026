// "Çocuklara Özel vs Standart Yetişkin Cihazları" comparison table for the
// /isitme-cihazlari/cocuklara-ozel page. Renders through the existing,
// already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated, same
// technique the ITE/Şarj Edilebilir/Bluetooth pages' comparison.ts use.
// Framed as neutral, general tendencies — never "kesinlikle daha iyi"; the
// closing note reinforces that the real answer needs an assessment with
// an odyometrist.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const cocuklaraOzelComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Çocuklara Özel ile Standart Yetişkin Cihazları Karşılaştırması",
  intro: "İki cihaz grubu arasındaki temel farkları aşağıdaki tabloda özetledik. Çocuğunuz için en uygun seçim, yaşına ve yaşam tarzına göre değişir.",
  primaryLabel: "Çocuklara Özel",
  secondaryLabel: "Standart Yetişkin Cihazı",
  rows: [
    {
      feature: "Pil Kapağı Güvenliği",
      primary: "Kilitli pil kapağı, küçük pillerin kazara yutulmasını önlemeye yardımcı olur.",
      secondary: "Standart pil kapağı yetişkin kullanımı için tasarlanmıştır, ek kilit mekanizması içermeyebilir.",
    },
    {
      feature: "Tasarım ve Renk Seçenekleri",
      primary: "Genellikle canlı renk ve desen seçenekleriyle sunulur.",
      secondary: "Genellikle nötr, ten rengi veya klasik renk tonlarında sunulur.",
    },
    {
      feature: "Dayanıklılık",
      primary: "Oyun ve hareketli kullanıma karşı daha dayanıklı bir gövde yapısına sahiptir.",
      secondary: "Günlük yetişkin kullanımına göre tasarlanmıştır, çocuk hareketliliğine özel ek dayanıklılık içermeyebilir.",
    },
    {
      feature: "Kulak Kalıbı Değişim Sıklığı",
      primary: "Büyüyen kulağa uyum için kalıbın sık aralıklarla yenilenmesi gerekir.",
      secondary: "Yetişkinlerde kulak yapısı sabit olduğundan kalıp değişimi daha az sıklıkla gerekir.",
    },
    {
      feature: "Sınıf / Eğitim Ortamı Uyumu",
      primary: "Roger/FM sistemleriyle uyumlu modeller okul ortamı için sıkça tercih edilir.",
      secondary: "Roger/FM uyumu genellikle iş ortamı veya toplantı senaryolarına göre değerlendirilir.",
    },
    {
      feature: "Ebeveyn / Bakım Veren Takibi",
      primary: "Bazı modeller, ebeveynin cihazı uzaktan takip etmesine imkân tanır.",
      secondary: "Yetişkin kullanıcı genellikle kendi cihazını yönetir, üçüncü taraf takibi standart değildir.",
    },
    {
      feature: "Ayarlama Esnekliği",
      primary: "Çocuğun büyüme sürecine ve gelişen işitme profiline göre esnek ayarlamalar yapılabilir.",
      secondary: "Yetişkin işitme kaybı profiline göre daha sabit bir ayar aralığı hedeflenir.",
    },
    {
      feature: "Bakım Sıklığı",
      primary: "Çocukların daha aktif kullanımı nedeniyle daha sık teknik kontrol önerilir.",
      secondary: "Genellikle standart periyodik bakım yeterlidir.",
    },
    {
      feature: "Garanti ve Hasar Kapsamı",
      primary: "Kaza ve hasar risklerine karşı bazı üreticiler ek garanti seçenekleri sunar.",
      secondary: "Standart garanti koşulları genellikle yeterlidir.",
    },
    {
      feature: "Kimler İçin Daha Uygun Olabilir",
      primary: "0-18 yaş aralığındaki, büyüme ve gelişim sürecinde olan çocuklar için sıkça değerlendirilir.",
      secondary: "Büyüme süreci tamamlanmış yetişkin kullanıcılar için sıkça tercih edilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; çocuğunuz için en uygun seçim yaşı, işitme kaybının derecesi ve yaşam tarzına göre bir odyometrist ile birlikte belirlenmelidir.",
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
};
