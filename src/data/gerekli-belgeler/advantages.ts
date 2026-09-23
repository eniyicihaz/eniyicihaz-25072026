// "Belgelerinizi Önceden Hazırlamanın Faydaları" bento section for the
// /sgk/gerekli-belgeler page — repurposed as the genuine benefits of
// preparing documents in advance, rather than product advantages.
// Renders through the shared BrandPageAdvantages component — items
// must be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { FolderCheck, Clock, RefreshCcw, FileSignature, Users, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const gerekliBelgelerAdvantages: BrandPageAdvantagesContent = {
  badge: "HAZIRLIĞIN FAYDALARI",
  heading: "Belgelerinizi Önceden Hazırlamanın Faydaları",
  intro: "Başvuru öncesinde belgelerinizi eksiksiz hazırlamanın sağladığı somut faydalar.",
  hero: {
    icon: FolderCheck,
    category: "Sorunsuz Başvuru",
    title: "Eksiksiz Belgeyle Başvurunuz Gecikmez",
    description: "Tüm belgeleriniz hazır olduğunda SGK başvurunuz herhangi bir gecikme yaşamadan ilerler.",
  },
  items: [
    {
      icon: Clock,
      category: "Zaman Tasarrufu",
      title: "Merkeze veya Hastaneye Tekrar Gitmezsiniz",
      description: "Eksik bir belge nedeniyle sonradan tekrar başvurma ihtiyacını ortadan kaldırır.",
    },
    {
      icon: RefreshCcw,
      category: "Duruma Özel Hazırlık",
      title: "Size Özel Ek Belgeleri Önceden Bilirsiniz",
      description: "Çocuk, emekli veya yenileme gibi özel durumunuza göre hangi ek belgenin gerekebileceğini önceden öğrenirsiniz.",
    },
    {
      icon: FileSignature,
      category: "Doğru Belge Türü",
      title: "Hangi Belgenin Aslını, Hangisinin Fotokopisini Getireceğinizi Bilirsiniz",
      description: "Belge türü karışıklığından kaynaklanan gecikmeleri önler.",
    },
    {
      icon: Users,
      category: "Şeffaf Süreç",
      title: "Süreç Boyunca Ne Bekleyeceğinizi Bilirsiniz",
      description: "Belge kategorilerini önceden bilmek, başvuru sürecindeki belirsizliği azaltır.",
    },
    {
      icon: Sparkles,
      category: "Ücretsiz Rehberlik",
      title: "Belge Listenizi Sizinle Birlikte Gözden Geçiriyoruz",
      description: "Randevunuzda, size özel güncel belge listesini birlikte kontrol ediyoruz.",
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
  accentColorIconBg: "rgb(79 70 229 / 0.1)",
  accentColorHoverBorder: "rgb(79 70 229 / 0.45)",
};
