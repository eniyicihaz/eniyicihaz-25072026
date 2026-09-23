// "Subjektif Tinnitus ile Objektif Tinnitus Karşılaştırması" comparison
// table for the /degerlendirme/tinnitus-degerlendirme page. Renders
// through the existing, already-generic KulakArkasiComparison component
// (see src/components/kulak-arkasi/) — reused as-is, not duplicated.
// Prior Değerlendirme pages compared clinical vs. online testing
// (Ücretsiz İşitme Testi), test subtypes (Odyometri), and objective vs.
// subjective/behavioral test types (Timpanometri, Çocuk İşitme Testi);
// this page's own comparison pivots to a genuinely distinct axis
// specific to tinnitus itself — the clinical distinction between the
// vast majority of tinnitus cases (subjective, audible only to the
// patient) and the rare objective form (audible to an examiner, often
// tied to a vascular or muscular cause).

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const tinnitusDegerlendirmeComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Subjektif Tinnitus ile Objektif Tinnitus Karşılaştırması",
  intro: "İki tinnitus türü arasındaki temel farkları aşağıdaki tabloda özetledik. Hangi türle karşı karşıya olduğunuz, değerlendirme sürecinde belirlenir.",
  primaryLabel: "Subjektif Tinnitus",
  secondaryLabel: "Objektif Tinnitus",
  rows: [
    {
      feature: "Görülme Sıklığı",
      primary: "Tinnitus vakalarının büyük çoğunluğunu oluşturur.",
      secondary: "Oldukça nadir görülür.",
    },
    {
      feature: "Kim Tarafından Duyulur",
      primary: "Yalnızca hasta tarafından duyulur.",
      secondary: "Bazı durumlarda muayene sırasında uzman tarafından da duyulabilir.",
    },
    {
      feature: "Olası Nedenler",
      primary: "İşitme kaybı, gürültü maruziyeti, kulak enfeksiyonu gibi nedenlerle ilişkilendirilir.",
      secondary: "Kan damarı veya kas kaynaklı fiziksel bir sesle ilişkilendirilebilir.",
    },
    {
      feature: "Ses Karakteri",
      primary: "Genellikle çınlama, uğultu veya vınlama şeklinde tanımlanır.",
      secondary: "Genellikle nabızla uyumlu (pulsatil) veya tıklama şeklinde tanımlanır.",
    },
    {
      feature: "Değerlendirme Yaklaşımı",
      primary: "Öykü, odyometri ve tinnitus eşleştirme yöntemleriyle değerlendirilir.",
      secondary: "Ek görüntüleme veya vasküler değerlendirme gerekebilir.",
    },
    {
      feature: "Yönlendirme Önceliği",
      primary: "Standart değerlendirme süreci izlenir.",
      secondary: "Genellikle öncelikli bir KBB veya ilgili uzmanlık yönlendirmesi gerektirir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; tinnitus türünüzün belirlenmesi ve uygun yönlendirme, bir odyometrist ve gerektiğinde bir KBB uzmanı tarafından yapılmalıdır.",
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
