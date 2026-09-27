// Kocaeli landing page — İşitme Değerlendirmesi. Aynı gerçek 4 adımlı süreç
// Darıca/Gebze/Çayırova sayfalarında da var — metinler dördüncü kez özgün
// biçimde yeniden yazıldı.
import { MessageCircle, Activity, ClipboardCheck, Lightbulb } from "lucide-astro";
import type { ProcessTimelineContent } from "../../components/shared/ProcessTimeline/ProcessTimeline.astro";

export const kocaeliProcess: ProcessTimelineContent = {
  eyebrow: "İŞİTME DEĞERLENDİRMESİ",
  heading: "Kocaeli'de İşitme Değerlendirmesi ve İşitme Testi",
  subheading: "Ücretsiz ve baskısız bir görüşmeyle başlıyoruz; Kocaeli genelinden randevu alabilirsiniz.",
  steps: [
    { icon: MessageCircle, title: "Ön Görüşme", description: "İhtiyacınızı ve şikayetlerinizi dinleyerek başlıyoruz." },
    { icon: Activity, title: "Ücretsiz İşitme Testi", description: "İşitme seviyenizi ücretsiz bir ölçümle belirliyoruz." },
    { icon: ClipboardCheck, title: "Sonuçların Değerlendirilmesi", description: "Sonuçları sizinle birlikte, anlaşılır biçimde yorumluyoruz." },
    { icon: Lightbulb, title: "Uygun Seçeneklerin Belirlenmesi", description: "İhtiyacınıza uygun cihaz ve SGK seçeneklerini konuşuyoruz." },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
};
