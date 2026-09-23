// "İşitme Kaybının Yaygın Nedenleri" teaser grid for the /rehberler/
// isitme-kaybi-nedir page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here scoped to common causes rather
// than product features.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const isitmeKaybiNedirUseCases: BrandPageTechnologyContent = {
  badge: "İŞİTME KAYBININ YAYGIN NEDENLERİ",
  heading: "İşitme Kaybının Yaygın Nedenleri Nelerdir?",
  intro: "İşitme kaybına yol açabilecek yaygın nedenlere daha yakından bakalım.",
  items: [
    {
      label: "YAŞA BAĞLI",
      title: "Yaşa Bağlı İşitme Kaybı (Presbiakuzi)",
      description: "Yaşlanmayla birlikte iç kulakta doğal olarak gelişebilen, yaygın görülen bir işitme kaybı türüdür.",
    },
    {
      label: "GÜRÜLTÜ MARUZİYETİ",
      title: "Uzun Süreli veya Ani Yüksek Ses Maruziyeti",
      description: "Yüksek ses seviyelerine düzenli veya ani maruziyet, iç kulaktaki hücrelere zarar verebilir.",
    },
    {
      label: "GENETİK FAKTÖRLER",
      title: "Kalıtsal ve Genetik Nedenler",
      description: "Bazı işitme kaybı türleri, ailesel geçiş gösteren genetik faktörlere bağlı olarak ortaya çıkabilir.",
    },
    {
      label: "OTOTOKSİK İLAÇLAR",
      title: "Bazı İlaçların Yan Etkileri",
      description: "Bazı ilaçlar, kullanım süresine ve dozuna bağlı olarak işitme üzerinde etkili olabilir.",
    },
    {
      label: "ENFEKSİYONLAR",
      title: "Kulak veya Sistemik Enfeksiyonlar",
      description: "Tekrarlayan kulak enfeksiyonları veya bazı sistemik enfeksiyonlar işitmeyi etkileyebilir.",
    },
    {
      label: "DOĞUŞTAN NEDENLER",
      title: "Doğum Öncesi ve Doğum Sırasındaki Etkenler",
      description: "Erken doğum veya doğum sırasında yaşanan bazı komplikasyonlar, yenidoğanlarda işitme kaybı riskini artırabilir.",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorHoverBorder: "rgb(37 99 235 / 0.5)",
};
