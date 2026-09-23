// "İşitme Kaybı Açısından Kimler Risk Altındadır?" section for the
// /rehberler/isitme-kaybi-nedir page. Reuses the shared
// BrandPageIdealUser component — here in a risk-group sense rather than
// product candidacy, consistent with the health-content genre.

import { Clock, Music, Dna, Pill, Baby } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const isitmeKaybiNedirIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER RİSK ALTINDADIR?",
  heading: "İşitme Kaybı Açısından Kimler Risk Altındadır?",
  intro: "Aşağıdaki gruplar, işitme kaybı açısından daha yüksek risk taşıyan profilleri yansıtır; risk taşımak kesin bir tanı anlamına gelmez.",
  profiles: [
    {
      icon: Clock,
      title: "İleri Yaştaki Bireyler",
      description: "Yaşa bağlı işitme kaybı (presbiakuzi), yaşlanmayla birlikte iç kulakta doğal olarak gelişebilen yaygın bir durumdur.",
      suggestedFamilies: ["Yaşa Bağlı Risk"],
    },
    {
      icon: Music,
      title: "Yüksek Sese Maruz Kalanlar",
      description: "Yüksek ses seviyesine düzenli maruz kalan iş kollarında çalışanlar veya sık konsere gidenler için risk artabilir.",
      suggestedFamilies: ["Gürültüye Bağlı Risk"],
    },
    {
      icon: Dna,
      title: "Ailesinde İşitme Kaybı Öyküsü Olanlar",
      description: "Ailesinde işitme kaybı bulunan kişilerde genetik faktörlere bağlı risk daha yüksek olabilir.",
      suggestedFamilies: ["Genetik Risk"],
    },
    {
      icon: Pill,
      title: "Bazı İlaçları Kullananlar",
      description: "Bazı ilaçlar (ototoksik ilaçlar), kullanım süresine ve dozuna bağlı olarak işitme üzerinde etkili olabilir.",
      suggestedFamilies: ["İlaç Kaynaklı Risk"],
    },
    {
      icon: Baby,
      title: "Doğuştan Risk Taşıyan Bebekler",
      description: "Erken doğum, doğum sırasında yaşanan komplikasyonlar veya ailede genetik öykü, yenidoğanlarda riski artırabilir.",
      suggestedFamilies: ["Doğuştan Risk"],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
};
