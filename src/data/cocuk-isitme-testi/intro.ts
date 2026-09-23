// "Çocuk İşitme Testi Nedir ve Neden Önemlidir?" section for the
// /degerlendirme/cocuk-isitme-testi page. Renders through the shared
// BrandPageIntro component. Same health-content safety discipline as
// the three prior pages — paragraph 4 is the load-bearing disclaimer:
// general information, not a self-diagnosis tool, made explicit for
// parents rather than the user themselves.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const cocukIsitmeTestiIntro: BrandPageIntroContent = {
  badge: "ÇOCUK İŞİTME TESTİ NEDİR?",
  heading: "Çocuk İşitme Testi Nedir ve Neden Önemlidir?",
  paragraphs: [
    "Çocuklarda işitme testi, yaşa uygun yöntemlerle uygulanan ve çocuğun işitme durumunu değerlendiren bir dizi testi ifade eder.",
    "Bebeklik döneminde otoakustik emisyon (OAE) ve işitsel beyin sapı yanıtı (ABR) gibi objektif yöntemler kullanılırken, büyüyen çocuklarda oyun tabanlı davranışsal yöntemler tercih edilir.",
    "İşitme kaybının erken tespiti, dil ve konuşma gelişiminin desteklenmesine yardımcı olabilir; bu nedenle yenidoğan işitme taraması ve düzenli kontroller önemlidir.",
    "Bu sayfa genel bir bilgilendirme amacı taşır, kendi kendine tanı koymak için kullanılmamalıdır; çocuğunuzun işitme durumu yalnızca bir odyometrist tarafından değerlendirilebilir.",
  ],
  stats: [
    { value: "Yenidoğan Taraması", label: "İlk Değerlendirme" },
    { value: "Yaşa Uygun Yöntem", label: "Test Yaklaşımı" },
    { value: "Erken Tespit", label: "Gelişim Desteği" },
    { value: "Aile Katılımlı", label: "Süreç Yaklaşımı" },
  ],
  accentColor: "#f97316",
  accentColorBadgeBg: "rgb(249 115 22 / 0.08)",
  accentColorBadgeBorder: "rgb(249 115 22 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
