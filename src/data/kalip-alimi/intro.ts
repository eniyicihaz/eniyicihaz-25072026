// "Kalıp Alımı Nedir ve Neden Önemlidir?" section for the
// /uygulama-ayar/kalip-alimi page. Renders through the shared
// BrandPageIntro component. Service-process genre, same as the three
// prior siblings — no self-diagnosis disclaimer; paragraph 4 sets the
// honest expectation around production time and eventual remolding.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const kalipAlimiIntro: BrandPageIntroContent = {
  badge: "KALIP ALIMI NEDİR?",
  heading: "Kalıp Alımı Nedir ve Neden Önemlidir?",
  paragraphs: [
    "Kalıp alımı, kulak kanalınızın şeklinin özel bir malzemeyle kopyalanarak, kişiye özel bir kulak kalıbı veya kulak içi kabuk üretimi için gereken ölçünün alınmasıdır.",
    "Kulak arkası (BTE) cihazlar için özel kulak kalıbı, standart kulak ucuna göre daha iyi bir akustik sızdırmazlık ve konfor sağlayabilir; kulak içi (ITE) cihazlarda ise kalıp, cihazın kendisinin gövdesini oluşturur.",
    "İşlem, kulak muayenesiyle başlar; kulak kanalınızın uygunluğu kontrol edildikten sonra kalıp malzemesi yerleştirilir ve sertleştikten sonra nazikçe çıkarılır.",
    "Alınan kalıp üretim için laboratuvara gönderilir; üretim genellikle birkaç iş günü sürer. Kulak kanalı zamanla değişebileceğinden, kalıpların belirli aralıklarla yenilenmesi gerekebilir.",
  ],
  stats: [
    { value: "Kulak Muayenesi", label: "İlk Adım" },
    { value: "Kişiye Özel Ölçü", label: "Temel Amaç" },
    { value: "Birkaç İş Günü", label: "Üretim Süresi" },
    { value: "Periyodik Yenileme", label: "Uzun Vadeli İhtiyaç" },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
