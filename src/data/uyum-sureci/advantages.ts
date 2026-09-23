// "Avantajları" bento section for the /rehberler/uyum-sureci page —
// repurposed as the genuine benefits of a patient, well-supported
// adaptation process rather than product advantages, consistent with
// this page's educational genre. Renders through the shared
// BrandPageAdvantages component — items must be exactly 5 entries:
// [slot1, slot2, slot3(wide), slot4(wide), slot5(wide)], same contract
// every brand/category page's advantages data follows.

import { TrendingUp, HeartHandshake, Smile, ShieldCheck, Users2, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const uyumSureciAdvantages: BrandPageAdvantagesContent = {
  badge: "SABIRLI BİR SÜRECİN FAYDALARI",
  heading: "Sabırlı Bir Uyum Sürecinin Sunduğu Faydalar",
  intro: "Süreci acele etmeden yaşamanın size sağladığı faydalar.",
  hero: {
    icon: TrendingUp,
    category: "Daha İyi Uzun Vadeli Sonuç",
    title: "Sabırlı Bir Süreç, Daha İyi Bir Deneyime Katkı Sağlar",
    description: "Uyum sürecine zaman tanımak, cihazınızdan uzun vadede daha fazla fayda görmenize katkı sağlayabilir.",
  },
  items: [
    {
      icon: HeartHandshake,
      category: "Gerçekçi Beklenti",
      title: "Hayal Kırıklığını Azaltmaya Yardımcı Olur",
      description: "Sürecin normal seyrini bilmek, beklenmedik bir hayal kırıklığı yaşamanızı önlemeye yardımcı olabilir.",
    },
    {
      icon: Smile,
      category: "Devamlılık",
      title: "Cihazı Bırakma Riskini Azaltabilir",
      description: "Uyum sürecinin normal olduğunu bilmek, zorlandığınız anlarda cihazı bırakmak yerine devam etmenize yardımcı olabilir.",
    },
    {
      icon: ShieldCheck,
      category: "Profesyonel Destek",
      title: "Destekten Daha İyi Yararlanmanızı Sağlar",
      description: "Süreci anlamak, takip randevularında doğru geri bildirimi paylaşmanıza yardımcı olur.",
    },
    {
      icon: Users2,
      category: "Aile Desteği",
      title: "Yakınlarınızın Sizi Daha İyi Anlamasına Yardımcı Olur",
      description: "Süreci bilen bir aile, sabır ve destek konusunda daha bilinçli olabilir.",
    },
    {
      icon: Sparkles,
      category: "Ücretsiz Rehberlik",
      title: "Süreç Boyunca Yanınızdayız",
      description: "Uyum sürecindeki takip desteğimiz, herhangi bir ücret talep edilmeden sunulur.",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
  accentColorIconBg: "rgb(124 58 237 / 0.1)",
  accentColorHoverBorder: "rgb(124 58 237 / 0.45)",
};
