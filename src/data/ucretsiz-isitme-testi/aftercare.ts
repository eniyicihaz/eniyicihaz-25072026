// "Test Sonucundan Sonra Ne Olur?" — redesign plan §2, Bölüm 6. Renders
// through the same generic ProcessTimeline component as process.ts
// (Bölüm 2), reused with different data — the whole reason that
// component was made generic rather than a one-off. 7 steps, matching
// COMPANY.md §11's real "Hizmet Süreci" (İletişim → Randevu → İşitme
// değerlendirmesi → Cihaz önerisi → Deneme süreci → Satış → Uygulama →
// Satış sonrası destek) condensed into the post-test half of that flow.
import type { ProcessTimelineContent } from "../../components/shared/ProcessTimeline/ProcessTimeline.astro";
import { Stethoscope, FileCheck, Target, PackageSearch, Headphones, Settings2, Wrench } from "lucide-astro";

export const ucretsizIsitmeTestiAftercare: ProcessTimelineContent = {
  eyebrow: "TEST SONRASI",
  heading: "Test Sonucundan Sonra Ne Olur?",
  subheading: "Testten sonraki süreç, adım adım nasıl ilerler.",
  steps: [
    {
      icon: Stethoscope,
      title: "İşitme Testi",
      description: "Odyolojik ölçümünüz tamamlanır.",
    },
    {
      icon: FileCheck,
      title: "Sonuçların Değerlendirilmesi",
      description: "Odyogramınız sizinle birlikte anlaşılır şekilde yorumlanır.",
    },
    {
      icon: Target,
      title: "İhtiyacınızın Belirlenmesi",
      description: "Şikayetleriniz ve test sonucunuza göre gerçek ihtiyacınız netleştirilir.",
    },
    {
      icon: PackageSearch,
      title: "Cihaz Seçeneklerinin Görüşülmesi (Gerekirse)",
      description: "Uygun bir çözüm varsa, seçenekler baskı yapılmadan sizinle görüşülür.",
    },
    {
      icon: Headphones,
      title: "Deneme ve Uygulama",
      description: "Değerlendirdiğiniz cihazı karar vermeden önce deneyebilirsiniz.",
    },
    {
      icon: Settings2,
      title: "Kişiye Özel Ayarlama",
      description: "Seçilen cihaz, işitme profilinize göre kişiye özel ayarlanır.",
    },
    {
      icon: Wrench,
      title: "Takip ve Teknik Destek",
      description: "Sonrasında düzenli kontrol ve teknik servis desteğiyle yanınızda oluruz.",
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
};
