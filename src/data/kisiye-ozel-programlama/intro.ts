// "Kişiye Özel Programlama Nedir ve Neyi Kapsar?" section for the
// /uygulama-ayar/kisiye-ozel-programlama page. Renders through the
// shared BrandPageIntro component. Service-process genre, same as
// Cihaz Uygulama — no self-diagnosis disclaimer; paragraph 4 sets the
// honest expectation that fine-tuning is iterative, not a one-time fix.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const kisiyeOzelProgramlamaIntro: BrandPageIntroContent = {
  badge: "KİŞİYE ÖZEL PROGRAMLAMA NEDİR?",
  heading: "Kişiye Özel Programlama Nedir ve Neyi Kapsar?",
  paragraphs: [
    "Kişiye özel programlama, ilk uygulama randevusunda yapılan genel ayarların, sizin gerçek yaşam deneyiminize göre zaman içinde ince ayarlanması sürecidir.",
    "Süreç; farklı ortamlardaki deneyiminizin dinlenmesi, gerekiyorsa kullanım verilerinin incelenmesi ve kazanç, sıkıştırma veya gürültü azaltma gibi ayarların hassas bir şekilde düzenlenmesini kapsar.",
    "Bazı modellerde, sessiz ortam, gürültülü ortam, müzik veya telefon görüşmesi gibi farklı senaryolar için ayrı dinleme programları da oluşturulabilir.",
    "İnce ayar, tek bir randevuda tamamlanan bir işlem değildir; en iyi sonuç genellikle birkaç takip randevusuyla, geri bildiriminize göre kademeli olarak elde edilir.",
  ],
  stats: [
    { value: "Geri Bildirime Dayalı", label: "Temel Yaklaşım" },
    { value: "Ortama Özel Programlar", label: "Kişiselleştirme" },
    { value: "Veri Kaydı Desteği", label: "Bazı Modellerde" },
    { value: "Kademeli Süreç", label: "Beklenti" },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
