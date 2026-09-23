// "Avantajları" bento section for the /uygulama-ayar/cihaz-uygulama
// page — framed as the genuine advantages of a professional fitting
// appointment. Renders through the shared BrandPageAdvantages component
// — items must be exactly 5 entries: [slot1, slot2, slot3(wide),
// slot4(wide), slot5(wide)], same contract every brand/category page's
// advantages data follows.

import { Gauge, CheckCircle, Ear, ClipboardCheck, Calendar, ShieldCheck } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const cihazUygulamaAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Profesyonel Uygulama Randevusunun Sunduğu Avantajlar",
  intro: "Cihazınızı kutudan çıkarıp kullanmak yerine profesyonel bir uygulama randevusunu tercih etmenin nedenleri.",
  hero: {
    icon: Gauge,
    category: "Kişiye Özel Başlangıç",
    title: "Odyogramınıza Göre Programlanmış Bir Cihazla Başlarsınız",
    description: "Fabrika ayarı yerine, işitme test sonuçlarınıza göre kişiselleştirilmiş bir başlangıç noktasıyla kullanıma başlarsınız.",
  },
  items: [
    {
      icon: Ear,
      category: "Fiziksel Uygunluk",
      title: "Kulağınıza Uygun Yerleştirme Kontrolü",
      description: "Cihazın veya kulak kalıbının kulağınıza uygun oturduğu, randevu sırasında kontrol edilir.",
    },
    {
      icon: CheckCircle,
      category: "Doğrulama Ölçümü",
      title: "Ayarlar Ölçümle Kontrol Edilir",
      description: "Gerekli görüldüğünde, ayarların hedeflenen seviyeleri karşıladığı objektif bir ölçümle doğrulanır.",
    },
    {
      icon: ClipboardCheck,
      category: "Kullanım Eğitimi",
      title: "Takma, Çıkarma ve Bakım Konusunda Bilgilendirilirsiniz",
      description: "Cihazınızı günlük hayatta güvenle kullanabilmeniz için pratik bir eğitim alırsınız.",
    },
    {
      icon: Calendar,
      category: "Takip Planlaması",
      title: "İhtiyacınıza Göre Takip Randevusu Planlanır",
      description: "Alışma sürecinizdeki geri bildiriminize göre bir takip randevusu birlikte planlanır.",
    },
    {
      icon: ShieldCheck,
      category: "Ücretsiz",
      title: "Herhangi Bir Ücret Talep Edilmez",
      description: "Cihaz uygulama randevusu, herhangi bir ücret talep edilmeden sunulur.",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
  accentColorHoverBorder: "rgb(37 99 235 / 0.45)",
};
