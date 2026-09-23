// "Doğru Bilginin Faydaları" bento section for the
// /blog/uzman-gorusleri page — repurposed as the genuine benefits of
// accurate information, rather than product advantages. Renders
// through the shared BrandPageAdvantages component — items must be
// exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { BadgeCheck, Clock, HeartPulse, Users, ShieldCheck, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const uzmanGorusleriAdvantages: BrandPageAdvantagesContent = {
  badge: "DOĞRU BİLGİNİN FAYDALARI",
  heading: "Doğru Bilgiye Sahip Olmanın Faydaları",
  intro: "Yanlış inanışların yerine doğru bilgiye sahip olmanın sağladığı somut faydalar.",
  hero: {
    icon: BadgeCheck,
    category: "Bilinçli Karar",
    title: "Doğru Bilgiyle Daha Sağlıklı Kararlar Alırsınız",
    description: "Yaygın yanlış inanışlardan arınmış, doğru bilgiye dayalı bir karar süreci yaşarsınız.",
  },
  items: [
    {
      icon: Clock,
      category: "Zaman Kaybını Önler",
      title: "Gereksiz Ertelemelerin Önüne Geçersiniz",
      description: "Yanlış inanışlar nedeniyle değerlendirmeyi geciktirmek yerine, süreci zamanında başlatabilirsiniz.",
    },
    {
      icon: HeartPulse,
      category: "Gerçekçi Beklentiler",
      title: "Cihazdan Ne Bekleyeceğinizi Doğru Bilirsiniz",
      description: "Doğru bilgi, işitme cihazından gerçekçi beklentiler oluşturmanıza yardımcı olur.",
    },
    {
      icon: Users,
      category: "Aile İçi Bilinçlendirme",
      title: "Yakınlarınızla Doğru Bilgiyi Paylaşırsınız",
      description: "Edindiğiniz doğru bilgiyi ailenizle paylaşarak onların da bilinçlenmesine katkı sağlarsınız.",
    },
    {
      icon: ShieldCheck,
      category: "Güvenilir Kaynak",
      title: "Doğrulanmış Bir Kaynaktan Bilgi Alırsınız",
      description: "Uzman ekibimizin genel değerlendirmesine dayanan, güvenilir bir bilgi kaynağına ulaşırsınız.",
    },
    {
      icon: Sparkles,
      category: "Sorularınızı Sorun",
      title: "Merak Ettiklerinizi Bizimle Netleştirebilirsiniz",
      description: "Duyduğunuz bir bilginin doğruluğundan emin değilseniz, bize sorarak netleştirebilirsiniz.",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
  accentColorIconBg: "rgb(124 58 237 / 0.1)",
  accentColorHoverBorder: "rgb(124 58 237 / 0.45)",
};
