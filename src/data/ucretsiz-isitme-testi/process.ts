// "Darıca'da Ücretsiz İşitme Testi Nasıl Yapılır?" — redesign plan §2,
// Bölüm 2. Replaces the old evolution.ts/BrandPageTechEvolution section
// (which had a real layout bug: a hardcoded 3-column grid rendering 4
// stages as an asymmetric 3+1 break). Renders through the new, generic
// ProcessTimeline component instead.
//
// `closing` carries the safety-critical content moved out of the retired
// considerations.ts section (redesign plan §1): what the free test does
// and does not cover, and the acute-case redirect to an ENT specialist —
// nothing from that section's safety discipline is lost, only its
// separate bento presentation is retired (also reflected in the FAQ).
import type { ProcessTimelineContent } from "../../components/shared/ProcessTimeline/ProcessTimeline.astro";
import { Phone, ClipboardList, Stethoscope, FileCheck, Lightbulb } from "lucide-astro";

export const ucretsizIsitmeTestiProcess: ProcessTimelineContent = {
  eyebrow: "TEST SÜRECİ",
  heading: "Darıca'da Ücretsiz İşitme Testi Nasıl Yapılır?",
  subheading: "Randevunuzdan sonuç değerlendirmesine kadar izlenen adımlar.",
  steps: [
    {
      icon: Phone,
      title: "Ön Görüşme",
      description: "Randevunuzda kısa bir ön görüşmeyle genel sağlık durumunuz ve beklentileriniz dinlenir.",
    },
    {
      icon: ClipboardList,
      title: "Şikayetlerin Değerlendirilmesi",
      description: "İşitmeyle ilgili yaşadığınız zorluklar ve şikayetleriniz ayrıntılı şekilde not edilir.",
    },
    {
      icon: Stethoscope,
      title: "Odyolojik Ölçüm",
      description: "Farklı frekans ve şiddetteki seslere verdiğiniz tepkiler bir odyometrist eşliğinde ölçülür.",
    },
    {
      icon: FileCheck,
      title: "Sonuçların Değerlendirilmesi",
      description: "Ölçümler bir odyogram üzerinde kaydedilir ve sizinle birlikte anlaşılır şekilde yorumlanır.",
    },
    {
      icon: Lightbulb,
      title: "Uygun Çözümün Görüşülmesi (Gerekirse)",
      description: "Sonuçlara göre, gerekiyorsa uygun çözüm seçenekleri hiçbir baskı yapılmadan sizinle görüşülür.",
    },
  ],
  closing:
    "Ücretsiz test; ön görüşme, şikayet değerlendirmesi ve temel odyolojik ölçümü kapsar. Ani başlayan işitme kaybı, kulak ağrısı veya akıntı gibi durumlarda önceliğiniz vakit kaybetmeden bir kulak burun boğaz uzmanına başvurmak olmalıdır.",
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
};
