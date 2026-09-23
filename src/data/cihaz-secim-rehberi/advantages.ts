// "Avantajları" bento section for the /rehberler/cihaz-secim-rehberi
// page — repurposed as the genuine benefits of a structured decision
// process rather than product advantages, consistent with this page's
// educational genre. Renders through the shared BrandPageAdvantages
// component — items must be exactly 5 entries: [slot1, slot2,
// slot3(wide), slot4(wide), slot5(wide)], same contract every
// brand/category page's advantages data follows.

import { ListChecks, Wallet, ThumbsUp, ShieldCheck, Timer, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const cihazSecimRehberiAdvantages: BrandPageAdvantagesContent = {
  badge: "DOĞRU SEÇİMİN FAYDALARI",
  heading: "Yapılandırılmış Bir Seçim Sürecinin Faydaları",
  intro: "Faktörleri sırayla değerlendirerek karar vermenin size sağladığı faydalar.",
  hero: {
    icon: ListChecks,
    category: "Netlik",
    title: "Karmaşık Bir Kararı Basit Adımlara Böler",
    description: "Faktörleri tek tek ele almak, seçim sürecini daha yönetilebilir hale getirir.",
  },
  items: [
    {
      icon: Wallet,
      category: "Bütçe Verimliliği",
      title: "Bütçenizi Verimli Kullanmanıza Yardımcı Olur",
      description: "İhtiyacınız olmayan özelliklere gereksiz yere ödeme yapmanızı önlemeye yardımcı olabilir.",
    },
    {
      icon: ThumbsUp,
      category: "Uzun Vadeli Memnuniyet",
      title: "Uzun Vadeli Memnuniyeti Desteklemeye Yardımcı Olur",
      description: "İhtiyacınıza uygun bir seçim, günlük kullanımda daha yüksek memnuniyet sağlayabilir.",
    },
    {
      icon: ShieldCheck,
      category: "Bilinçli Karar",
      title: "Baskısız ve Bilinçli Bir Karar Vermenizi Sağlar",
      description: "Neyi neden seçtiğinizi bilerek karar vermenize yardımcı olur.",
    },
    {
      icon: Timer,
      category: "Zaman Tasarrufu",
      title: "Karar Sürecini Hızlandırabilir",
      description: "Neyi önceliklendireceğinizi bilmek, karar verme sürecinizi hızlandırabilir.",
    },
    {
      icon: Sparkles,
      category: "Ücretsiz Rehberlik",
      title: "Uzman Desteği Herhangi Bir Ücret Talep Etmez",
      description: "Seçim sürecinde aldığınız uzman rehberliği, herhangi bir ücret talep edilmeden sunulur.",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorIconBg: "rgb(234 88 12 / 0.1)",
  accentColorHoverBorder: "rgb(234 88 12 / 0.45)",
};
