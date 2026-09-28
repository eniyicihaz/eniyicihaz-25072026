// Süreç Haritası — homepage's own data (own spec:
// docs/SERVICE_JOURNEY_SPECIFICATION.md), rendered through the existing,
// shared ProcessTimeline.astro (no new component — spec §7, already proven
// N-step agnostic). Distinct from Guide (unchanged, still the short
// 3-step emotional reassurance) — this is the full, link-bearing service
// map; the two are kept far apart on the page on purpose (see spec §1).
// accentColor uses the homepage's single blue, not a page-specific accent
// (HOMEPAGE_SPECIFICATION.md "değişmez gramer").
import { Stethoscope, Compass, PlayCircle, SlidersHorizontal, Wrench } from "lucide-astro";
import type { ProcessTimelineContent } from "../../components/shared/ProcessTimeline/ProcessTimeline.astro";

export const homeServiceJourney: ProcessTimelineContent = {
  eyebrow: "Süreç",
  heading: "Değerlendirmeden Servise, Tüm Süreç",
  subheading: "İşitme sağlığınızla ilgili yolculuğun her adımında, ihtiyaç duyduğunuz desteği buluyorsunuz.",
  steps: [
    {
      icon: Stethoscope,
      title: "Değerlendirme",
      description: "Ücretsiz işitme testiyle mevcut durumunuzu netleştiriyoruz.",
      href: "/degerlendirme/ucretsiz-isitme-testi",
    },
    {
      icon: Compass,
      title: "Cihaz Seçimi",
      description: "İhtiyacınıza uygun cihaz tipini birlikte belirliyoruz.",
      href: "/rehberler/cihaz-secim-rehberi",
    },
    {
      icon: PlayCircle,
      title: "Deneme",
      description: "Karar vermeden önce cihazı deneyebilirsiniz.",
      href: "/uygulama-ayar/cihaz-deneme",
    },
    {
      icon: SlidersHorizontal,
      title: "Kişiye Özel Ayar",
      description: "Cihazınızı işitme profilinize göre ayarlıyoruz.",
      href: "/uygulama-ayar/kisiye-ozel-ayar",
    },
    {
      icon: Wrench,
      title: "Teknik Servis",
      description: "Kullanım süresince bakım ve teknik destek sağlıyoruz.",
      href: "/servis-bakim/teknik-servis",
    },
  ],
  closing: "Her adımda yanınızdayız.",
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
};
