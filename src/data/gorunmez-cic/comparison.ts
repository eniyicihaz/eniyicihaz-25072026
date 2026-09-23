// "Görünmez (CIC/IIC) vs Görünür (BTE / Standart ITE)" comparison table
// for the /isitme-cihazlari/gorunmez-cic page. Renders through the
// existing, already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated, same
// technique the ITE/Şarj Edilebilir/Bluetooth/Çocuklara Özel pages'
// comparison.ts use. Framed as neutral, general tendencies — never
// "kesinlikle daha iyi"; the closing note reinforces that the real answer
// needs an assessment with an odyometrist.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const gorunmezCicComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Görünmez (CIC/IIC) ile Görünür (BTE / Standart ITE) Karşılaştırması",
  intro: "İki görünürlük seviyesi arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seçim, işitme kaybınızın derecesi ve önceliklerinize göre değişir.",
  primaryLabel: "Görünmez (CIC / IIC)",
  secondaryLabel: "Görünür (BTE / Standart ITE)",
  rows: [
    {
      feature: "Görünürlük",
      primary: "Kulak kanalının derinliklerinde yer aldığından dışarıdan neredeyse hiç fark edilmez.",
      secondary: "Kulak kepçesinin arkasında veya iç bölümünde yer aldığından daha kolay fark edilir.",
    },
    {
      feature: "Uygun İşitme Kaybı Aralığı",
      primary: "Genellikle hafif ile orta-ileri derece kayıplarla sınırlıdır.",
      secondary: "Hafif dereceden çok ileri dereceye kadar geniş bir aralıkta kullanılabilir.",
    },
    {
      feature: "Ses Gücü Kapasitesi",
      primary: "Küçük gövdesi nedeniyle ses gücü kapasitesi sınırlıdır.",
      secondary: "Daha büyük hoparlör ve amplifikatör alanı sayesinde daha yüksek ses gücü sunabilir.",
    },
    {
      feature: "Pil Ömrü",
      primary: "Küçük pil boyutu nedeniyle daha sık pil değişimi gerekebilir.",
      secondary: "Daha büyük pil kapasitesi sayesinde genellikle daha uzun pil ömrü sunar.",
    },
    {
      feature: "El Becerisi Gereksinimi",
      primary: "Küçük boyutu, takma-çıkarma ve pil değişimini bazı kullanıcılar için zorlaştırabilir.",
      secondary: "Daha büyük kumandaları sayesinde el becerisi sınırlı kullanıcılar için daha kolaydır.",
    },
    {
      feature: "Rüzgar Gürültüsü",
      primary: "Kulak kanalı içindeki korunaklı konumu sayesinde rüzgar sesinden daha az etkilenir.",
      secondary: "Kulak dışında olduğundan rüzgar sesinden daha fazla etkilenebilir.",
    },
    {
      feature: "Gözlük / Maske Uyumu",
      primary: "Kulak kepçesini kullanmadığından gözlük ve maskeyle çakışma yaşanmaz.",
      secondary: "Gözlük sapı ile aynı bölgeyi paylaşır; ince RIC modellerinde bu etki azalır.",
    },
    {
      feature: "Ek Özellik ve Bağlantı",
      primary: "Küçük boyutu nedeniyle Bluetooth ve yönlü mikrofon gibi özellikler sınırlı olabilir.",
      secondary: "Daha büyük gövde, Bluetooth ve yönlü mikrofon gibi ek özellikleri daha kolay barındırabilir.",
    },
    {
      feature: "Bakım İhtiyacı",
      primary: "Kulak kanalı içinde kir ve kulak yağına daha fazla maruz kalabilir, düzenli bakım gerektirir.",
      secondary: "Kulak dışında olduğu için temizliği ve günlük bakımı görece kolaydır.",
    },
    {
      feature: "Kimler İçin Daha Uygun Olabilir",
      primary: "Görünürlüğü önceliklendiren, hafif-orta dereceli kayba sahip yetişkin kullanıcılar için sıkça değerlendirilir.",
      secondary: "Geniş kayıp aralığında, kullanım kolaylığını önceliklendiren kullanıcılar için sıkça tercih edilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; sizin için en uygun seçim işitme kaybınızın derecesi, kulak kanalı yapınız ve önceliklerinize göre bir odyometrist tarafından belirlenmelidir.",
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
};
