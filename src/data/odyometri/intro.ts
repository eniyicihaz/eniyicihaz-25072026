// "Odyometri Nedir ve Neyi Ölçer?" section for the /degerlendirme/
// odyometri page. Renders through the shared BrandPageIntro component.
// Same health-content safety discipline as Ücretsiz İşitme Testi —
// paragraph 4 is the load-bearing disclaimer: general information, not
// a self-diagnosis tool.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const odyometriIntro: BrandPageIntroContent = {
  badge: "ODYOMETRİ NEDİR?",
  heading: "Odyometri Nedir ve Neyi Ölçer?",
  paragraphs: [
    "Odyometri, işitme duyarlılığınızı ölçen ve sonuçları bir odyogram üzerinde kaydeden temel bir işitme testidir.",
    "Test sırasında kulaklık aracılığıyla farklı frekanslarda (genellikle 250 Hz ile 8000 Hz arasında) sesler verilir; her frekansta duyabildiğiniz en düşük ses şiddeti (dB HL) kaydedilir.",
    "Odyometri; hava yolu iletimi (kulaklıkla) ve kemik yolu iletimi (kafatası arkasına yerleştirilen bir cihazla) olmak üzere iki farklı yöntemle uygulanabilir; bu ikisi arasındaki fark, işitme kaybının türünü belirlemeye yardımcı olur.",
    "Odyogram sonuçlarının yorumlanması ve işitme kaybı derecesinin belirlenmesi, yalnızca bir odyometrist tarafından yapılabilir; bu sayfa genel bir bilgilendirme amacı taşır, kendi kendine tanı koymak için kullanılmamalıdır.",
  ],
  stats: [
    { value: "250-8000 Hz", label: "Test Edilen Frekans Aralığı" },
    { value: "dB HL", label: "Ölçüm Birimi" },
    { value: "Hava & Kemik Yolu", label: "İletim Türleri" },
    { value: "Odyogram", label: "Sonuç Grafiği" },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
