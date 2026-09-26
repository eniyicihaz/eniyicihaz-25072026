// Nasıl Çalışıyoruz? — ProcessTimeline üzerinden render edilir.
import { Ear, Stethoscope, MessagesSquare, Settings2, GraduationCap, HeartHandshake } from "lucide-astro";
import type { ProcessTimelineContent } from "../../components/shared/ProcessTimeline/ProcessTimeline.astro";

export const hakkimizdaProcess: ProcessTimelineContent = {
  eyebrow: "Süreç",
  heading: "Nasıl Çalışıyoruz?",
  subheading: "Merkezimizde bir danışanla çalışma şeklimiz genellikle şu adımları izler.",
  steps: [
    { icon: Ear, title: "İhtiyacı Dinliyoruz", description: "Günlük yaşamınızı ve dinleme ihtiyaçlarınızı dinleyerek başlıyoruz." },
    { icon: Stethoscope, title: "Değerlendiriyoruz", description: "İşitme durumunuzu profesyonel şekilde değerlendiriyoruz." },
    { icon: MessagesSquare, title: "Alternatifleri Konuşuyoruz", description: "Size uygun cihaz seçeneklerini birlikte değerlendiriyoruz." },
    { icon: Settings2, title: "Uyguluyoruz ve Ayarlıyoruz", description: "Seçilen cihazı uygulayıp kişiye özel olarak ayarlıyoruz." },
    { icon: GraduationCap, title: "Kullanımı Destekliyoruz", description: "Cihazın günlük kullanımı ve bakımı hakkında bilgi veriyoruz." },
    { icon: HeartHandshake, title: "Satış Sonrası Yanınızdayız", description: "Kontrol randevularıyla süreci düzenli olarak takip ediyoruz." },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
};
