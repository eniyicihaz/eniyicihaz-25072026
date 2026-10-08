// Ana sayfa — "Ana Hizmet Yolları" (HomeJourney, Faz 2 P2 onay V1).
// Akış kullanıcı onayıyla kilitli: ücretsiz işitme testi → cihaz seçimi →
// merkezde ücretsiz demo → satın alma sonrası 7 güne kadar deneme/iade →
// kişiye özel ayar → 18 markada teknik servis → SGK desteği.
// Kaynak: SERVICE_SOURCE_OF_TRUTH §1 (H1, H6, H7, H11, H17, H24, H28) ve
// §1.5 kanonik deneme modeli; PRODUCT_SOT (18 marka, tümünde teknik servis).
// Her hedef sayfaya en fazla bir link. Linksiz adımlar bilinçli:
// - Ücretsiz işitme testi: test sayfası ana sayfada yalnızca hero ve
//   closing'den linklenir (P2 Home V1 son düzeltme).
// - 7 günlük deneme: deneme sayfası demo adımından linklenir.
import { Stethoscope, Compass, PlayCircle, RotateCcw, SlidersHorizontal, Wrench, ShieldCheck } from "lucide-astro";

export interface HomeJourneyStep {
  icon: any;
  verb: string;
  title: string;
  description: string;
  href?: string;
}

export interface HomeJourneyContent {
  eyebrow: string;
  heading: string;
  intro: string;
  steps: HomeJourneyStep[];
  also: { label: string; href: string }[];
}

export const homeServiceJourney: HomeJourneyContent = {
  eyebrow: "Hizmetlerimiz",
  heading: "Testten Servise Hizmet Akışımız",
  intro: "Tüm adımlar Darıca'daki merkezimizde ilerler.",
  steps: [
    {
      icon: Stethoscope,
      verb: "Test",
      title: "Ücretsiz İşitme Testi",
      description: "İşitme durumunuzu ücretsiz bir testle değerlendiriyoruz.",
    },
    {
      icon: Compass,
      verb: "Seçim",
      title: "Cihaz Seçimi",
      description: "Test sonucunuza göre size uygun cihazı ücretsiz olarak birlikte belirliyoruz.",
      href: "/rehberler/cihaz-secim-rehberi/",
    },
    {
      icon: PlayCircle,
      verb: "Demo",
      title: "Merkezde Ücretsiz Demo",
      description: "Önerilen cihazı merkezimizde yaklaşık 20 dakika ücretsiz deneyebilirsiniz.",
      href: "/uygulama-ayar/cihaz-deneme/",
    },
    {
      icon: RotateCcw,
      verb: "7 Gün",
      title: "Satın Alma Sonrası 7 Güne Kadar Deneme",
      description:
        "Uygun olmadığı durumda ödediğiniz tutarın tamamı iade edilir. Kulak içi cihazlar bu kapsama dahil değildir.",
    },
    {
      icon: SlidersHorizontal,
      verb: "Ayar",
      title: "Kişiye Özel Ayar",
      description: "Cihazınızı işitme profilinize göre ayarlıyoruz.",
      href: "/uygulama-ayar/kisiye-ozel-ayar/",
    },
    {
      icon: Wrench,
      verb: "Servis",
      title: "18 Markada Teknik Servis",
      description: "Sattığımız 18 markanın tamamında teknik servis veriyoruz; teslim 3 gün içindedir.",
      href: "/servis-bakim/teknik-servis/",
    },
    {
      icon: ShieldCheck,
      verb: "SGK",
      title: "SGK Desteği",
      description: "SGK anlaşmalı merkezimizde SGK işlemlerinizde ücretsiz destek veriyoruz.",
      href: "/sgk-isitme-cihazi-odemesi/",
    },
  ],
  also: [
    { label: "Evde hizmet: Kocaeli ve İstanbul Anadolu Yakası", href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti/" },
    { label: "Tüm hizmetlerimiz", href: "/hizmetlerimiz/" },
  ],
};
