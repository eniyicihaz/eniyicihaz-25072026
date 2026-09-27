// Gebze landing page — İşitme Değerlendirmesi. Aynı gerçek 4 adımlı süreç
// Darıca sayfasında da var (tek gerçek süreç, iki kere icat edilmedi) — ama
// metinler kelime kelime AYNI değil, Darıca sayfasının kopyası gibi
// görünmesin diye özgün biçimde yeniden yazıldı.
import { MessageCircle, Activity, ClipboardCheck, Lightbulb } from "lucide-astro";
import type { ProcessTimelineContent } from "../../components/shared/ProcessTimeline/ProcessTimeline.astro";

export const gebzeProcess: ProcessTimelineContent = {
  eyebrow: "İŞİTME DEĞERLENDİRMESİ",
  heading: "İşitme Değerlendirmesi Nasıl İşler?",
  subheading: "Gebze'den ulaşanlar için de aynı baskısız ve ücretsiz süreç geçerlidir.",
  steps: [
    { icon: MessageCircle, title: "Ön Görüşme", description: "İhtiyacınızı ve yaşam tarzınızı dinleyerek başlıyoruz." },
    { icon: Activity, title: "Ücretsiz Ölçüm", description: "İşitme durumunuzu ücretsiz ve baskısız şekilde ölçüyoruz." },
    { icon: ClipboardCheck, title: "Sonuçların Değerlendirilmesi", description: "Ölçüm sonuçlarını sizinle birlikte, anlaşılır bir dille yorumluyoruz." },
    { icon: Lightbulb, title: "Uygun Seçeneklerin Görüşülmesi", description: "Size uygun işitme cihazı seçeneklerini ihtiyacınıza göre konuşuyoruz." },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
};
