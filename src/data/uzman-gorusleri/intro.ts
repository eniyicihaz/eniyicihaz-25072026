// "Neden Doğru Bilgi Önemlidir?" section for the
// /blog/uzman-gorusleri page. Renders through the shared
// BrandPageIntro component.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const uzmanGorusleriIntro: BrandPageIntroContent = {
  badge: "NEDEN DOĞRU BİLGİ ÖNEMLİDİR?",
  heading: "İşitme Sağlığında Doğru Bilgi Neden Önemlidir?",
  paragraphs: [
    "İşitme kaybı ve işitme cihazları hakkındaki yanlış bilgiler, kişilerin gerekli desteği almasını geciktirebiliyor veya yanlış beklentilere yol açabiliyor.",
    "Bu sayfada, kliniğimizde en sık karşılaştığımız yanlış inanışları ele alıyor ve yerine bilinmesi gereken genel bilgileri paylaşıyoruz.",
    "Ani başlayan bir işitme kaybı yaşıyorsanız, bu durum acil bir tıbbi değerlendirme gerektirebilir; vakit kaybetmeden bir KBB uzmanına başvurmanızı öneririz.",
    "Buradaki bilgiler genel bilgilendirme amaçlıdır ve kişisel tanının yerini tutmaz; kendi durumunuz için mutlaka bir uzmana danışın.",
  ],
  stats: [
    { value: "Uzman Değerlendirmesi", label: "Genel Bilgi Yerine" },
    { value: "Ani İşitme Kaybı", label: "Acil Durum" },
    { value: "Kişiye Özel", label: "Doğru Karar" },
    { value: "Sorularınızı Sorun", label: "Bizimle İletişime Geçin" },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
