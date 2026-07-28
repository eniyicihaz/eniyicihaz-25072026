// M3 (Brand Criteria) content for the "Tüm Markalar" (/markalar) page. This
// page is built up modularly (M1, M2, M3…), each an independent
// section/component — this file only ever holds M3's data.
//
// Deliberately brand-agnostic: these are general decision criteria (what
// each category means and why it matters), not brand-vs-brand comparisons.
// The project has no verified per-brand technical specs, so making claims
// like "Brand X has better Bluetooth than Brand Y" would be fabrication.
// Neutral, category-level education lets a user reason about their own
// needs without inventing facts about real medical-device manufacturers.

import { AudioWaveform, BrainCircuit, Bluetooth, Palette, BatteryCharging, Users } from "lucide-astro";

export interface BrandCriterion {
  // A lucide-astro icon component reference (same convention as
  // CtaButton's iconLeft/iconRight props).
  icon: any;
  title: string;
  description: string;
}

export interface BrandCriteriaContent {
  eyebrow: string;
  heading: string;
  intro: string;
  criteria: BrandCriterion[];
  closing: string;
}

export const brandCriteria: BrandCriteriaContent = {
  eyebrow: "Seçim Rehberi",
  heading: "Doğru Markayı Nasıl Seçersiniz?",
  intro:
    "İşitme cihazı markaları; tasarım, ses işleme teknolojisi, bağlantı özellikleri ve kullanım şekli açısından farklılık gösterir. Bir kullanıcı için ideal olan seçenek, bir başkası için aynı ölçüde uygun olmayabilir.",
  criteria: [
    {
      icon: AudioWaveform,
      title: "Ses İşleme Teknolojisi",
      description:
        "Cihazın ortam seslerini nasıl algılayıp işlediği, konuşma netliğini ve günlük dinleme konforunu etkiler.",
    },
    {
      icon: BrainCircuit,
      title: "Yapay Zeka",
      description:
        "Bazı cihazlar ortama göre otomatik ayar yapar, bazıları manuel ayarlamaya dayalı çalışır.",
    },
    {
      icon: Bluetooth,
      title: "Bluetooth Ekosistemi",
      description:
        "Telefon, TV ve diğer cihazlarla kablosuz bağlantı desteği, kullanım alışkanlıklarınıza göre önem kazanabilir.",
    },
    {
      icon: Palette,
      title: "Tasarım",
      description:
        "Kulak arkası, kulak içi veya görünmez modeller arasındaki farklar; konfor ve estetik tercihinizi şekillendirir.",
    },
    {
      icon: BatteryCharging,
      title: "Pil Teknolojisi",
      description:
        "Şarj edilebilir veya pil değişimli sistemler arasındaki tercih, kullanım sıklığınıza ve pratiklik beklentinize bağlıdır.",
    },
    {
      icon: Users,
      title: "Hedef Kullanıcı Profili",
      description:
        "Bazı modeller aktif bir yaşam tarzına, bazıları günlük temel kullanıma daha uygun şekilde tasarlanır.",
    },
  ],
  closing:
    "Size en uygun markayı belirlemenin en güvenilir yolu, uzman işitme testi sonrasında farklı seçenekleri birlikte değerlendirmektir.",
};
