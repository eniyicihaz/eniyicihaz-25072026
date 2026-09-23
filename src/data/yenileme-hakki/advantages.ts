// "Yenileme Hakkınızı Bilmenin Faydaları" bento section for the
// /sgk/yenileme-hakki page — repurposed as the genuine benefits of
// understanding your renewal entitlement, rather than product
// advantages. Renders through the shared BrandPageAdvantages component
// — items must be exactly 5 entries: [slot1, slot2, slot3(wide),
// slot4(wide), slot5(wide)], same contract every brand/category page's
// advantages data follows.

import { RefreshCcw, Cpu, Wrench, PiggyBank, Users, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const yenilemeHakkiAdvantages: BrandPageAdvantagesContent = {
  badge: "YENİLEME HAKKININ FAYDALARI",
  heading: "Yenileme Hakkınızı Bilmenin Faydaları",
  intro: "Yenileme hakkınızın ne zaman doğduğunu bilmenin sağladığı somut faydalar.",
  hero: {
    icon: RefreshCcw,
    category: "Güncel Teknolojiye Erişim",
    title: "Yeni Cihaz Teknolojilerine Yeniden SGK Desteğiyle Erişirsiniz",
    description: "Yenileme hakkınız doğduğunda, güncel cihaz teknolojilerini yeniden SGK desteğiyle değerlendirebilirsiniz.",
  },
  items: [
    {
      icon: Cpu,
      category: "Teknoloji Yükseltme",
      title: "Gelişen Cihaz Teknolojilerinden Faydalanırsınız",
      description: "İlk cihazınızdan bu yana gelişen özelliklere sahip modelleri değerlendirme imkânı bulursunuz.",
    },
    {
      icon: Wrench,
      category: "Arıza Durumunda Güvence",
      title: "Onarılamaz Arızalarda Erken Yenileme İmkânı",
      description: "Cihazınız onarılamaz şekilde arızalanırsa, süre dolmadan erken yenileme talep edebilirsiniz.",
    },
    {
      icon: PiggyBank,
      category: "Mali Öngörülebilirlik",
      title: "Yenileme Zamanınızı Önceden Planlayabilirsiniz",
      description: "Yenileme hakkınızın ne zaman doğacağını bilmek, bütçenizi önceden planlamanıza yardımcı olur.",
    },
    {
      icon: Users,
      category: "Şeffaf Süreç",
      title: "Sürecin Nasıl İşlediğini Önceden Bilirsiniz",
      description: "Standart ve erken yenileme arasındaki farkı bilmek, sürecin belirsizliğini azaltır.",
    },
    {
      icon: Sparkles,
      category: "Ücretsiz Hatırlatma",
      title: "Yenileme Zamanınızı Sizin İçin Takip Ediyoruz",
      description: "Kayıtlı kullanıcılarımız için yenileme zamanı yaklaştığında hatırlatma desteği sunuyoruz.",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorIconBg: "rgb(13 148 136 / 0.1)",
  accentColorHoverBorder: "rgb(13 148 136 / 0.45)",
};
