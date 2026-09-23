// M2 (Showcase) content for the /hizmetlerimiz hub page. Renders
// through the now-generic BrandShowcase component. Mirrors
// header.data.ts's servicesMega "Değerlendirme" column exactly — the
// six assessment-stage service pages, the natural entry point of the
// customer journey. No per-item logo art exists for services (unlike
// brand logos), so each card uses a lucide icon instead.

import { Stethoscope, AudioWaveform, Gauge, Baby, Waves, MessageCircle } from "lucide-astro";
import type { BrandShowcaseContent } from "../../components/brands/BrandShowcase/BrandShowcase.astro";

export const servicesShowcase: BrandShowcaseContent = {
  eyebrow: "Değerlendirme",
  heading: "Sürecinizin İlk Adımı: Değerlendirme",
  subhead:
    "İşitme sağlığınızı doğru değerlendirmek, doğru hizmete yönlenmenin ilk adımıdır.",
  ctaLabel: "İncele",
  brands: [
    { name: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi", icon: Stethoscope },
    { name: "Odyometri", href: "/degerlendirme/odyometri", icon: AudioWaveform },
    { name: "Timpanometri", href: "/degerlendirme/timpanometri", icon: Gauge },
    { name: "Çocuk İşitme Testi", href: "/degerlendirme/cocuk-isitme-testi", icon: Baby },
    { name: "Tinnitus Değerlendirme", href: "/degerlendirme/tinnitus-degerlendirme", icon: Waves },
    { name: "İşitme Danışmanlığı", href: "/neden-orijinal/ucretsiz-danismanlik", icon: MessageCircle },
  ],
};
