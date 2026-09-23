// Hero content for the "Odyometri" page (/degerlendirme/odyometri).
// Renders through the shared BrandPageHero component — same component
// every content page this session uses. Second page of the
// "Değerlendirme" series (see header.data.ts's servicesMega first
// column), following Ücretsiz İşitme Testi. Same clinical service-page
// genre and health-content safety discipline — this page's own scope is
// the specific odyometri procedure (air/bone conduction, speech
// audiometry, reading an odyogram) rather than the overall free-test
// appointment experience already covered on Ücretsiz İşitme Testi.
//
// accentColor: çivit / indigo-600 (#4f46e5) — second color in the fresh
// accent rotation opened for this series on Ücretsiz İşitme Testi's
// hero.ts (cyan); see that file for the full rationale. Indigo was
// chosen for its precision/technical-measurement association, distinct
// from the prior sibling's cyan.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const odyometriHero: BrandPageHeroContent = {
  badge: "HİZMETLERİMİZ · DEĞERLENDİRME · ODYOMETRİ",
  headingLines: ["Odyometri", "Nedir ve Nasıl Yapılır?"],
  paragraphs: [
    "Odyometri, işitme eşiğinizi belirlemek için farklı frekans ve şiddetteki seslere verdiğiniz tepkilerin ölçüldüğü, işitme değerlendirmesinin temelini oluşturan bir testtir.",
    "Avrasya İşitme'de, odyometri testinizi deneyimli odyometrist kadromuzla, kalibre edilmiş profesyonel ekipmanlar kullanarak gerçekleştiriyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "SAF SES TESTİ",
      accent: "#4f46e5",
      title: "Farklı Frekanslarda İşitme Eşiği Ölçülür",
      description: "Odyometri, farklı frekanslardaki sesleri duyabildiğiniz en düşük şiddeti ölçer.",
    },
    {
      label: "ODYOGRAM İLE KAYIT",
      accent: "#4338ca",
      title: "Sonuçlar Görsel Bir Grafikte Sunulur",
      description: "Ölçümler, kolay anlaşılır bir odyogram üzerinde kaydedilir.",
    },
    {
      label: "İKİ TÜR İLETİM",
      accent: "#3730a3",
      title: "Hava ve Kemik Yolu İletimi Ayrı Ayrı Test Edilir",
      description: "Odyometri, işitme kaybının türünü belirlemeye yardımcı olan iki farklı iletim yolunu değerlendirir.",
    },
  ],
  image: {
    src: "/images/unitron/models/blu.webp",
    alt: "Odyometri sonucuna göre değerlendirilebilecek Unitron Blu işitme cihazı görseli",
  },
  floatingCard: {
    title: "Unitron Blu",
    description: "Odyogram sonucunuza göre değerlendirilebilecek modellerden biri.",
  },
  accentColor: "#4f46e5",
  accentColorHover: "#4338ca",
  accentColorSoft: "rgb(79 70 229 / 0.12)",
  accentColorBorder: "rgb(79 70 229 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(79,70,229,0.35) 0%, rgba(79,70,229,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #16123a 60%, #3730a3 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#4338ca",
  heroWaveOpacity: "0.18",
};
