// "Avantajları" bento section for the /sgk/katki-payi page —
// repurposed as the genuine benefits of the SGK support system rather
// than product advantages, consistent with this page's educational
// genre. Renders through the shared BrandPageAdvantages component —
// items must be exactly 5 entries: [slot1, slot2, slot3(wide),
// slot4(wide), slot5(wide)], same contract every brand/category page's
// advantages data follows.

import { HandCoins, TrendingUp, Baby, PiggyBank, ShieldCheck, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const sgkKatkiPayiAdvantages: BrandPageAdvantagesContent = {
  badge: "SGK DESTEĞİNİN FAYDALARI",
  heading: "SGK Desteğinin Sunduğu Faydalar",
  intro: "SGK katkı payı sisteminin kullanıcılara sağladığı faydalar.",
  hero: {
    icon: HandCoins,
    category: "Maliyet Desteği",
    title: "Cihaz Maliyetinin Önemli Bir Kısmı Karşılanır",
    description: "SGK'nın sağladığı destek tutarı, işitme cihazı maliyetinin önemli bir bölümünü karşılamaya yardımcı olur.",
  },
  items: [
    {
      icon: TrendingUp,
      category: "Emeklilerde Yüksek Destek",
      title: "Emekliler İçin Daha Yüksek Destek Tutarı",
      description: "Emekli vatandaşlar için SGK destek tutarı, çalışanlara göre genellikle daha yüksektir.",
    },
    {
      icon: Baby,
      category: "Çocuklarda Öncelik",
      title: "Çocuklarda Erken Müdahaleyi Destekler",
      description: "Çocuklara yönelik destek tutarları, erken müdahaleyi teşvik edecek şekilde belirlenmiştir.",
    },
    {
      icon: PiggyBank,
      category: "Pil Desteği",
      title: "Düzenli Pil Desteği de Sağlanır",
      description: "Cihaz desteğine ek olarak, yıllık pil ihtiyacınız için de SGK desteği bulunur.",
    },
    {
      icon: ShieldCheck,
      category: "Öngörülebilirlik",
      title: "Şeffaf ve Öngörülebilir Bir Sistemdir",
      description: "Destek tutarları belirli kategorilere göre belirlendiğinden, katkı payınızı önceden tahmin edebilirsiniz.",
    },
    {
      icon: Sparkles,
      category: "Ücretsiz Rehberlik",
      title: "Hesaplama Sürecinde Size Yardımcı Oluyoruz",
      description: "Katkı payı hesaplamasında size ücretsiz rehberlik ediyoruz.",
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
  accentColorIconBg: "rgb(22 163 74 / 0.1)",
  accentColorHoverBorder: "rgb(22 163 74 / 0.45)",
};
