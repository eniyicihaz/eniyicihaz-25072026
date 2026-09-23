// "İşitme Kaybı Türleri Nelerdir?" section for the /rehberler/
// isitme-kaybi-nedir page. Reuses the shared BrandPageTechEvolution
// component in its original "stage" sense (era / what it brought / who
// it's for / tags) — repurposed here as the four clinical TYPES of
// hearing loss (classified by the location of the disruption along the
// hearing pathway), genuinely distinct from the existing "İhtiyacınıza
// Göre" series' DEGREE-based classification (hafif/orta/ileri/çok
// ileri, measured in dB) — these are two different, complementary
// classification systems in audiology, and this page owns the type
// axis while cross-linking to the degree pages in related-content.ts.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const isitmeKaybiNedirEvolution: BrandPageTechEvolutionContent = {
  badge: "İŞİTME KAYBI TÜRLERİ",
  heading: "İşitme Kaybı Türleri Nelerdir?",
  intro: "İşitme kaybı, aksamanın kulaktaki yerine göre dört ana türe ayrılır.",
  stages: [
    {
      era: "İletim Tipi İşitme Kaybı",
      whatItBrought: "Dış veya orta kulaktaki bir sorundan (kulak kiri, sıvı birikimi, kulak zarı hasarı gibi) kaynaklanır; birçok durumda tıbbi tedaviyle iyileştirilebilir.",
      bestFor: "Dış / orta kulak kaynaklı",
      families: ["İletim Tipi"],
    },
    {
      era: "Sensörinöral İşitme Kaybı",
      whatItBrought: "İç kulaktaki tüylü hücrelerin veya işitme sinirinin hasar görmesinden kaynaklanır; en yaygın işitme kaybı türüdür ve genellikle kalıcıdır.",
      bestFor: "İç kulak / sinir kaynaklı",
      families: ["Sensörinöral Tip"],
    },
    {
      era: "Karma (Miks) İşitme Kaybı",
      whatItBrought: "İletim tipi ve sensörinöral işitme kaybının bir arada görülmesidir; her iki bileşen de değerlendirmeye dahil edilir.",
      bestFor: "İki türün birlikte görülmesi",
      families: ["Karma Tip"],
    },
    {
      era: "Merkezi İşitme Kaybı",
      whatItBrought: "Kulağın kendisinden değil, beynin sesi işleme sürecinden kaynaklanan, görece nadir görülen bir durumdur.",
      bestFor: "Beyin kaynaklı ses işleme",
      families: ["Merkezi Tip"],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
