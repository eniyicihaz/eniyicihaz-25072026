// "Kulak İçi (ITE) vs Kulak Arkası (BTE)" comparison table for the
// /isitme-cihazlari/kulak-ici-ite page. Renders through the existing,
// already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated, since its
// markup carries no BTE-specific content, only page-supplied data (see
// that component's own header comment, which documents it as built for
// reuse by future "vs" pages). Framed as neutral, general tendencies —
// never "kesinlikle daha iyi" — same restraint as every comparison on
// this site; the closing note reinforces that the real answer needs a
// hearing assessment.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const kulakIciComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Kulak İçi (ITE) ile Kulak Arkası (BTE) Karşılaştırması",
  intro: "İki cihaz tipi arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seçim, ihtiyacınıza göre değişir; aşağıdaki tablo genel eğilimleri gösterir.",
  primaryLabel: "Kulak İçi (ITE)",
  secondaryLabel: "Kulak Arkası (BTE)",
  rows: [
    {
      feature: "Görünürlük",
      primary: "Kulak kanalı içinde veya kepçenin iç bölümünde yer aldığından BTE'ye kıyasla daha az fark edilir; CIC ve IIC gibi alt tiplerde bu daha da belirginleşir.",
      secondary: "Kulak kepçesinin arkasında konumlanır; ince RIC modellerinde fark edilirliği azalır ama tamamen görünmez değildir.",
    },
    {
      feature: "Kullanım Kolaylığı",
      primary: "Tek parça yapısı takıp çıkarmayı basitleştirir; ancak küçük gövde, iyi bir el becerisi gerektirebilir.",
      secondary: "Daha büyük kumandaları sayesinde pil değişimi ve ayar yapma, el becerisi sınırlı kullanıcılar için daha kolaydır.",
    },
    {
      feature: "Uygun İşitme Kaybı Aralığı",
      primary: "Genellikle hafif ile orta-ileri derece kayıplarda değerlendirilir.",
      secondary: "Hafif dereceden çok ileri dereceye kadar geniş bir aralıkta kullanılabilir.",
    },
    {
      feature: "Pil ve Şarj Seçenekleri",
      primary: "Daha küçük pil boyutu nedeniyle bazı modellerde daha sık pil değişimi gerekebilir; şarjlı ITE modelleri de mevcuttur.",
      secondary: "Daha büyük pil/akü kapasitesi sayesinde genellikle daha uzun pil ömrü sunar.",
    },
    {
      feature: "Bluetooth ve Kablosuz Bağlantı",
      primary: "Küçük gövdeye rağmen günümüz modellerinin çoğunda Bluetooth desteklenir; en küçük alt tiplerde (IIC gibi) bu özellik sınırlı olabilir.",
      secondary: "Daha geniş anten alanı sayesinde bağlantı genellikle daha stabildir.",
    },
    {
      feature: "Kulak Anatomisi Uyumu",
      primary: "Kişiye özel kalıpla üretildiği için kulak kanalı yapısı uygun olan kullanıcılarda konforlu bir oturma sağlar; çok dar veya değişken kanal yapılarında sınırlı olabilir.",
      secondary: "Kulak yapısından bağımsız olarak geniş bir kullanıcı kitlesine uyum sağlayabilir.",
    },
    {
      feature: "Kulak Kiri Etkisi",
      primary: "Kulak kanalı içinde konumlandığı için kulak kirinden BTE'ye kıyasla daha fazla etkilenebilir; düzenli temizlik önemlidir.",
      secondary: "Elektronik bileşenler kulak dışında olduğu için kulak kirinden daha az etkilenir.",
    },
    {
      feature: "Nem ve Ter",
      primary: "Kulak kanalı içindeki nem ve tere daha yakın konumdadır; düzenli kurutma önerilir.",
      secondary: "Kulak dışında olduğu için nem ve terden görece daha az etkilenir.",
    },
    {
      feature: "Bakım",
      primary: "Küçük gövdesi nedeniyle düzenli, özenli temizlik gerektirir; kulak kiri filtreleri sık kontrol edilmelidir.",
      secondary: "Kulak dışında olduğu için temizliği ve günlük bakımı görece kolaydır.",
    },
    {
      feature: "Kimler İçin Daha Uygun Olabilir",
      primary: "Görünürlüğü öncelik gören, hafif ile orta-ileri derece kayıplara sahip yetişkin kullanıcılar için sıkça değerlendirilir.",
      secondary: "İleri derece kayıplarda, çocuklarda veya el becerisi sınırlı kullanıcılarda sıkça tercih edilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; sizin için en uygun seçim işitme kaybınızın derecesi, kulak kanalı yapınız ve yaşam tarzınıza göre bir odyometrist tarafından belirlenmelidir.",
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
