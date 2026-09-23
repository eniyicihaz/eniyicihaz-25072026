// "Avantajları" bento section for the /rehberler/ilk-kullanim-rehberi
// page — repurposed as the genuine benefits of a confident first-use
// experience rather than product advantages, consistent with this
// page's educational genre. Renders through the shared
// BrandPageAdvantages component — items must be exactly 5 entries:
// [slot1, slot2, slot3(wide), slot4(wide), slot5(wide)], same contract
// every brand/category page's advantages data follows.

import { ThumbsUp, Clock, RefreshCcw, Home, ShieldCheck, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const ilkKullanimRehberiAdvantages: BrandPageAdvantagesContent = {
  badge: "DOĞRU BAŞLANGICIN FAYDALARI",
  heading: "Doğru Bir Başlangıcın Sunduğu Faydalar",
  intro: "Temel kontrolleri baştan öğrenmenin size sağladığı faydalar.",
  hero: {
    icon: ThumbsUp,
    category: "Özgüven",
    title: "Cihazınızı Kendinize Güvenerek Kullanırsınız",
    description: "Temel işlemleri bilmek, cihazınızı günlük hayatta rahatça kullanmanıza yardımcı olur.",
  },
  items: [
    {
      icon: Clock,
      category: "Zaman Tasarrufu",
      title: "Basit Sorunları Hızlıca Çözebilirsiniz",
      description: "Küçük bir sorunla karşılaştığınızda önce kendiniz kontrol edebileceğiniz adımları bilirsiniz.",
    },
    {
      icon: RefreshCcw,
      category: "Daha Hızlı Alışma",
      title: "Kademeli Kullanım Alışma Sürecini Destekler",
      description: "Önerilen kullanım süresine uymak, cihaza alışma sürecinizi desteklemeye yardımcı olabilir.",
    },
    {
      icon: Home,
      category: "Günlük Rutin",
      title: "Günlük Rutininize Kolayca Eklenir",
      description: "Temel işlemleri bildiğinizde, cihazınızı günlük rutininize dahil etmek kolaylaşır.",
    },
    {
      icon: ShieldCheck,
      category: "Güvenli Kullanım",
      title: "Cihazınıza Zarar Verme Riskini Azaltır",
      description: "Doğru takma ve çıkarma alışkanlığı, cihazınızın uzun ömürlü olmasına katkı sağlayabilir.",
    },
    {
      icon: Sparkles,
      category: "Ücretsiz Rehberlik",
      title: "Sorularınız İçin Her Zaman Yanınızdayız",
      description: "Rehberde bulamadığınız bir konu için bizimle iletişime geçebilirsiniz.",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
  accentColorIconBg: "rgb(5 150 105 / 0.1)",
  accentColorHoverBorder: "rgb(5 150 105 / 0.45)",
};
