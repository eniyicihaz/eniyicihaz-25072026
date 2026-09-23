// "İşitme Cihazı Teknolojisinin Gelişimi" section for the
// /blog/yeni-teknolojiler page. Uses the shared BrandPageTechEvolution
// component in something close to its original literal sense — a
// genuine qualitative technology evolution timeline, rather than a
// repurposed process/step sequence like most other pages this session.
// Deliberately avoids specific years to prevent staleness/inaccuracy;
// describes eras in general, qualitative terms only.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const yeniTeknolojilerEvolution: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİNİN GELİŞİMİ",
  heading: "İşitme Cihazı Teknolojisi Nasıl Gelişti?",
  intro: "Analog cihazlardan yapay zeka destekli modellere uzanan genel gelişim çizgisine bir göz atalım.",
  stages: [
    {
      era: "Analog Cihazlar",
      whatItBrought: "İlk nesil işitme cihazları, sesi basitçe yükselten analog devrelere dayanıyordu.",
      bestFor: "Temel ses yükseltme",
      families: ["Analog Dönem"],
    },
    {
      era: "Dijital Sinyal İşleme",
      whatItBrought: "Dijital teknolojiye geçiş, sesin daha hassas bir şekilde işlenmesini ve programlanabilir ayarları mümkün kıldı.",
      bestFor: "Hassas ses işleme",
      families: ["Dijital Dönem"],
    },
    {
      era: "Kablosuz Bağlantı Dönemi",
      whatItBrought: "Cihazlar birbirleriyle ve akıllı telefonlarla kablosuz olarak iletişim kurmaya başladı.",
      bestFor: "Bağlantılı kullanım",
      families: ["Kablosuz Bağlantı"],
    },
    {
      era: "Yapay Zeka Destekli Cihazlar",
      whatItBrought: "Yapay zeka, ortamı analiz ederek sesi otomatik olarak optimize eden cihazların önünü açtı.",
      bestFor: "Akıllı ses optimizasyonu",
      families: ["Yapay Zeka"],
    },
    {
      era: "Sağlık Sensörlü Cihazlar",
      whatItBrought: "Güncel nesil cihazların bir kısmı, işitme desteğine ek olarak genel sağlık ve aktivite takibi de sunmaya başladı.",
      bestFor: "Bugünün teknolojisi",
      families: ["Sağlık Entegrasyonu"],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
