// Evde İşitme Cihazı Hizmeti Nasıl İlerler? — TuningProcess üzerinden
// render edilir. Deneme (adım 2), satış/danışmanlık (adım 3) ve uygulama
// & kişiye özel ayar (adım 4) burada tek bir akış içinde anlatılıyor —
// ayrı ayrı üç bölüm yerine (plan §6, sayfayı gereksiz uzatmamak için).
import type { TuningProcessContent } from "../../components/shared/TuningProcess/TuningProcess.astro";

export const evdeHizmetProcess: TuningProcessContent = {
  badge: "Süreç",
  heading: "Evde İşitme Cihazı Hizmeti Nasıl İlerler?",
  intro: "Talebinizden kullanım desteğine kadar süreç şu şekilde ilerler.",
  steps: [
    {
      number: "01",
      title: "Talep ve Ön Görüşme",
      description: "Telefon veya WhatsApp'tan bize ulaşırsınız; ihtiyacınızı ve adresinizi alarak size uygun bir ev ziyareti saati belirleriz.",
    },
    {
      number: "02",
      title: "Evde Değerlendirme ve Deneme",
      description: "Uzman ekibimiz evinize gelir, işitme durumunuzu değerlendirir; uygunsa bir veya birkaç cihazı kendi ortamınızda denemenizi sağlar.",
    },
    {
      number: "03",
      title: "Cihaz Seçimi ve Danışmanlık",
      description: "İhtiyacınıza uygun cihaz seçenekleri karşılaştırmalı olarak gösterilir, sizin ve yakınlarınızın soruları marka bağımsız şekilde cevaplanır.",
    },
    {
      number: "04",
      title: "Uygulama ve Kişiye Özel Ayar",
      description: "Seçtiğiniz cihaz kulağınıza uygulanır; günlük yaşamınıza ve dinleme ortamlarınıza göre kişiye özel olarak ayarlanır.",
    },
    {
      number: "05",
      title: "Kullanım Eğitimi ve Takip",
      description: "Cihazın günlük kullanımı ve bakımı anlatılır; gerektiğinde kontrol randevusu planlanır veya teknik servise yönlendirme yapılır.",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
