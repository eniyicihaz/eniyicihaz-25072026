// Çayırova landing page — İşitme Değerlendirmesi. Aynı gerçek 4 adımlı
// süreç Darıca ve Gebze sayfalarında da var (tek gerçek süreç) — metinler
// üçüncü kez özgün biçimde yeniden yazıldı, kelime kelime kopya değil.
import { MessageCircle, Activity, ClipboardCheck, Lightbulb } from "lucide-astro";
import type { ProcessTimelineContent } from "../../components/shared/ProcessTimeline/ProcessTimeline.astro";

export const cayirovaProcess: ProcessTimelineContent = {
  eyebrow: "İŞİTME DEĞERLENDİRMESİ",
  heading: "İşitme Değerlendirmesi Adım Adım Nasıl İlerler?",
  subheading: "Çayırova'dan gelen danışanlarımız için de süreç aynı şekilde, ücretsiz ve baskısız işliyor.",
  steps: [
    { icon: MessageCircle, title: "Ön Görüşme", description: "Şikayetlerinizi ve beklentilerinizi dinleyerek başlıyoruz." },
    { icon: Activity, title: "Ücretsiz Ölçüm", description: "İşitme seviyenizi ücretsiz bir ölçümle belirliyoruz." },
    { icon: ClipboardCheck, title: "Sonuçların Değerlendirilmesi", description: "Sonuçları sizinle birlikte, adım adım açıklıyoruz." },
    { icon: Lightbulb, title: "Uygun Seçeneklerin Görüşülmesi", description: "İhtiyacınıza uygun cihaz seçeneklerini birlikte konuşuyoruz." },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
};
