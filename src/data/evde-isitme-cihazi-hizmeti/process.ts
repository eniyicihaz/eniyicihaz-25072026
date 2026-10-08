// Evde İşitme Cihazı Hizmeti — "Nasıl talep edilir?" (Faz 2 P2). 5 adımlık
// süreç 3 adıma indirildi; evde yapılan işlemlere dair doğrulanmamış
// ayrıntı (değerlendirme, deneme, uygulama, ayar) çıkarıldı.
import type { TuningProcessContent } from "../../components/shared/TuningProcess/TuningProcess.astro";

export const evdeHizmetProcess: TuningProcessContent = {
  badge: "Süreç",
  heading: "Evde Hizmet Nasıl Talep Edilir?",
  intro: "Talebinizden ev ziyaretine kadar süreç üç adımda ilerler.",
  steps: [
    {
      number: "01",
      title: "Talep",
      description: "Telefon veya WhatsApp'tan bize ulaşır, adresinizi ve ihtiyacınızı iletirsiniz.",
    },
    {
      number: "02",
      title: "Randevu",
      description: "Size uygun gün ve saat birlikte belirlenir; yapılacak işlemler bu aşamada netleştirilir.",
    },
    {
      number: "03",
      title: "Ev Ziyareti",
      description: "Ekibimiz randevu gününde adresinize gelir. Evde yapılamayan bir işlem olursa sizi merkezimize yönlendiririz.",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
