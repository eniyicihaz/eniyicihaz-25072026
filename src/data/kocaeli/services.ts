// Kocaeli landing page — Cihaz Deneme + Kişiye Özel Ayar + Programlama +
// Teknik Servis, tek bir BrandCriteria bölümünde 4 gerçek linkli kart
// olarak birleştirildi (Darıca/Gebze/Çayırova'nın 3 kart + closingCta
// deseninden farklı olarak, sayfanın daha kapsamlı olması gerektiği için
// teknik servis de kendi kartına çıkarıldı).
import { PlayCircle, SlidersHorizontal, Settings2, Wrench } from "lucide-astro";
import type { BrandCriteriaContent } from "../../components/brands/BrandCriteria/BrandCriteria.astro";

export const kocaeliServices: BrandCriteriaContent = {
  eyebrow: "CİHAZINIZI SEÇTİKTEN SONRA",
  heading: "Cihaz Deneme, Ayar, Programlama ve Teknik Servis",
  intro: "Doğru cihaza karar vermek; deneme, kişiye özel ayar, programlama ve gerektiğinde teknik servis destekli bir süreçtir.",
  criteria: [
    { icon: PlayCircle, title: "Cihaz Deneme", description: "Seçtiğiniz cihazı günlük yaşamınızda deneyerek karar verebilirsiniz.", href: "/uygulama-ayar/cihaz-deneme/" },
    { icon: SlidersHorizontal, title: "Kişiye Özel Ayar", description: "İlk uygulama ve ayarlar işitme profilinize göre yapılır.", href: "/uygulama-ayar/kisiye-ozel-ayar/" },
    { icon: Settings2, title: "Takip ve Programlama", description: "Kullanım deneyiminize göre ayarlar zamanla yeniden gözden geçirilir.", href: "/uygulama-ayar/kisiye-ozel-programlama/" },
    { icon: Wrench, title: "Teknik Servis ve Bakım", description: "Arıza, bakım ve garanti süreçlerinde yanınızdayız.", href: "/servis-bakim/teknik-servis/" },
  ],
  closing: "İhtiyacınıza göre bu adımların hepsinde veya bir kısmında yanınızda oluyoruz.",
};
