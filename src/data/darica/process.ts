// Darıca landing page — Ücretsiz İşitme Değerlendirmesi (kısa özet).
// Detaylı 5 adımlı süreç zaten /degerlendirme/ucretsiz-isitme-testi
// sayfasında var — burada birebir kopyalanmıyor, kısa 4 adımlı bir özet +
// sayfa içinde ayrı bir link paragrafıyla o sayfaya yönlendiriliyor.
import { MessageCircle, Activity, ClipboardCheck, Lightbulb } from "lucide-astro";
import type { ProcessTimelineContent } from "../../components/shared/ProcessTimeline/ProcessTimeline.astro";

export const daricaProcess: ProcessTimelineContent = {
  eyebrow: "ÜCRETSİZ İŞİTME DEĞERLENDİRMESİ",
  heading: "Darıca'da Ücretsiz İşitme Değerlendirmesi Nasıl İşler?",
  subheading: "Baskısız ve ücretsiz bir görüşmeyle başlıyoruz.",
  steps: [
    { icon: MessageCircle, title: "Ön Görüşme", description: "İhtiyacınızı ve şikayetlerinizi birlikte dinliyoruz." },
    { icon: Activity, title: "Ücretsiz Ölçüm", description: "İşitme durumunuzu ücretsiz olarak değerlendiriyoruz." },
    { icon: ClipboardCheck, title: "Sonuçların Değerlendirilmesi", description: "Ölçüm sonuçlarını birlikte yorumluyoruz." },
    { icon: Lightbulb, title: "Uygun Seçeneklerin Görüşülmesi", description: "Gerekirse size uygun cihaz seçeneklerini konuşuyoruz." },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
};
