// "Rapor Sürecini Doğru Yönetmenin Faydaları" bento section for the
// /sgk/rapor-sureci page — repurposed as the genuine benefits of
// understanding and correctly navigating the report process, rather
// than product advantages. Renders through the shared
// BrandPageAdvantages component — items must be exactly 5 entries:
// [slot1, slot2, slot3(wide), slot4(wide), slot5(wide)], same contract
// every brand/category page's advantages data follows.

import { ClipboardCheck, Clock, Building2, FileCheck2, Users, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const raporSureciAdvantages: BrandPageAdvantagesContent = {
  badge: "DOĞRU SÜRECİN FAYDALARI",
  heading: "Rapor Sürecini Doğru Yönetmenin Faydaları",
  intro: "Rapor sürecini baştan doğru şekilde ilerletmenin sağladığı somut faydalar.",
  hero: {
    icon: ClipboardCheck,
    category: "Sorunsuz Başvuru",
    title: "Eksiksiz Bir Raporla SGK Başvurunuz Gecikmez",
    description: "Doğru hastaneden alınan eksiksiz bir rapor, SGK başvurunuzun sorunsuz ilerlemesini sağlar.",
  },
  items: [
    {
      icon: Clock,
      category: "Zaman Tasarrufu",
      title: "Gereksiz Tekrar Testlerden Kaçınırsınız",
      description: "Süreci baştan doğru planlamak, aynı testleri tekrar yaptırma ihtiyacını azaltır.",
    },
    {
      icon: Building2,
      category: "Doğru Hastane Seçimi",
      title: "Hangi Hastaneye Başvurmanız Gerektiğini Bilirsiniz",
      description: "Tam teşekküllü hastane şartını baştan bilmek, yanlış başvurudan kaynaklanan gecikmeleri önler.",
    },
    {
      icon: FileCheck2,
      category: "Eksiksiz Belgeler",
      title: "Rapor ve Reçetenizi Eksiksiz Hazırlarsınız",
      description: "Sürecin aşamalarını bilmek, gerekli belgeleri eksiksiz bir şekilde bir araya getirmenizi kolaylaştırır.",
    },
    {
      icon: Users,
      category: "Şeffaf Süreç",
      title: "Ne Zaman Hangi Aşamada Olduğunuzu Bilirsiniz",
      description: "Sürecin aşamalarını önceden bilmek, belirsizlik hissini azaltır.",
    },
    {
      icon: Sparkles,
      category: "Ücretsiz Rehberlik",
      title: "Süreç Boyunca Size Yol Gösteriyoruz",
      description: "Rapor ve reçete sürecinde hangi adımları izlemeniz gerektiği konusunda size ücretsiz rehberlik ediyoruz.",
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
  accentColorIconBg: "rgb(8 145 178 / 0.1)",
  accentColorHoverBorder: "rgb(8 145 178 / 0.45)",
};
