// "Klinikte Odyometrist Eşliğinde Test ile Online/Kendi Kendine Yapılan
// Test Karşılaştırması" comparison table for the /degerlendirme/
// ucretsiz-isitme-testi page. Renders through the existing,
// already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated. This
// table compares a professional clinical test against the online/
// self-administered hearing-test apps and websites users often
// encounter first — a genuinely safety-relevant axis specific to this
// page's own subject, distinct from every prior page's comparison axis.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const ucretsizIsitmeTestiComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Klinikte Uzman Eşliğinde Test ile Online/Kendi Kendine Yapılan Test Karşılaştırması",
  intro: "İki yaklaşım arasındaki temel farkları aşağıdaki tabloda özetledik. Kesin değerlendirme için her zaman bir odyometriste danışmanızı öneririz.",
  primaryLabel: "Klinikte Odyometrist Eşliğinde Test",
  secondaryLabel: "Online veya Kendi Kendine Yapılan Test",
  rows: [
    {
      feature: "Ortam Kontrolü",
      primary: "Ses yalıtımlı, kontrollü bir test ortamında yapılır.",
      secondary: "Ev ortamının gürültüsü sonuçları etkileyebilir.",
    },
    {
      feature: "Ekipman",
      primary: "Kalibre edilmiş profesyonel odyometri cihazları kullanılır.",
      secondary: "Telefon veya bilgisayar hoparlörü/kulaklığı standart kalibrasyona sahip olmayabilir.",
    },
    {
      feature: "Yorumlama",
      primary: "Sonuçlar bir odyometrist tarafından yorumlanır.",
      secondary: "Sonuçlar genellikle otomatik ve genel bir şekilde sunulur.",
    },
    {
      feature: "Ek Değerlendirme",
      primary: "Kulak muayenesi ve şikayet değerlendirmesi de sürece dahildir.",
      secondary: "Genellikle yalnızca işitme eşiği ölçülür.",
    },
    {
      feature: "Güvenilirlik",
      primary: "Klinik koşullarda elde edilen sonuçlar daha güvenilir kabul edilir.",
      secondary: "Sonuçlar yalnızca genel bir fikir verebilir, tanı amaçlı kullanılmamalıdır.",
    },
    {
      feature: "Yönlendirme",
      primary: "Gerekirse KBB uzmanına veya cihaz önerisine yönlendirme yapılabilir.",
      secondary: "Yönlendirme imkânı sunulmaz.",
    },
    {
      feature: "Maliyet",
      primary: "Ücretsiz olarak sunulur.",
      secondary: "Bazı online testler ücretli olabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; online testler yalnızca genel bir ön fikir verebilir, kesin değerlendirme için her zaman bir odyometriste danışmanızı öneririz.",
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
