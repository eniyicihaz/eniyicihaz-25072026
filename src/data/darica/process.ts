// Darıca hub — "İlk Ziyaretinizde Neler Olur?" (ProcessTimeline).
// Eski 4 adımlı genel değerlendirme özeti yerine, işletmenin doğrulanmış
// gerçek süreci: SERVICE_SOURCE_OF_TRUTH §2.3 (getirilecekler), §2.4
// (talepler + anamnez), §2.5 (son 1 ayda test varsa rutin tekrar yok;
// şüphede yenilenir), §2.6 (sonuca göre bilgilendirme; şüpheli durumda KBB
// yönlendirmesi), H7 (merkezde ~20 dk ücretsiz demo), §2.15 (merkez içi
// süre ~1 saat / 1–2 saat). Yeni tıbbi iddia yok; herkese aynı test
// uygulanıyormuş gibi genelleme yapılmıyor (§2.5 notu).
import { FolderOpen, MessageCircle, Activity, ClipboardCheck, PlayCircle } from "lucide-astro";
import type { ProcessTimelineContent } from "../../components/shared/ProcessTimeline/ProcessTimeline.astro";

export const daricaProcess: ProcessTimelineContent = {
  eyebrow: "İLK ZİYARET",
  heading: "İlk Ziyaretinizde Neler Olur?",
  subheading: "İlk ziyaret genellikle yaklaşık 1 saat sürer; yapılacak işlemlere göre 1–2 saati bulabilir.",
  steps: [
    {
      icon: FolderOpen,
      title: "Varsa Belgeleriniz",
      description: "Daha önce yaptırdığınız işitme testi, reçete ve raporunuz varsa yanınızda getirebilirsiniz.",
    },
    {
      icon: MessageCircle,
      title: "Görüşme",
      description: "Taleplerinizi dinliyor, değerlendirme için gerekli bilgileri alıyoruz.",
    },
    {
      icon: Activity,
      title: "Gerekirse İşitme Testi",
      description: "Son 1 ay içinde yaptırılmış bir testiniz varsa rutin olarak tekrarlanmaz; mevcut testle ilerlenir, gerekli görülürse yenilenir. Gerektiğinde test merkezimizde yapılır.",
    },
    {
      icon: ClipboardCheck,
      title: "Sonuçlar ve Bilgilendirme",
      description: "Sonuçlara göre sizi bilgilendiriyoruz. Şüpheli bir durum görülürse KBB hekimine yönlendiriyoruz.",
    },
    {
      icon: PlayCircle,
      title: "Merkezde Ücretsiz Demo",
      description: "Uygun görülürse önerilen cihazla merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılır.",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
};
