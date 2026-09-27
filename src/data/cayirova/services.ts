// Çayırova landing page — Cihaz Deneme + Kişiye Özel Ayar + Programlama,
// tek bir BrandCriteria bölümünde gerçek linkli kartlar olarak birleştirildi
// (Darıca/Gebze'nin kanıtlanmış deseni, metinler özgün biçimde yeniden
// yazıldı). closingCta ile teknik servise de doğal bir link ekleniyor.
import { PlayCircle, SlidersHorizontal, Settings2 } from "lucide-astro";
import type { BrandCriteriaContent } from "../../components/brands/BrandCriteria/BrandCriteria.astro";

export const cayirovaServices: BrandCriteriaContent = {
  eyebrow: "SATIN ALMADAN ÖNCE",
  heading: "Cihaz Deneme, Ayar ve Programlama Süreci",
  intro: "Doğru cihaza karar vermek, deneme ve kişiye özel ayar sürecinden geçtikten sonra netleşir.",
  criteria: [
    { icon: PlayCircle, title: "Cihaz Deneme", description: "Beğendiğiniz cihazı günlük hayatınızda deneyerek karar verebilirsiniz.", href: "/uygulama-ayar/cihaz-deneme" },
    { icon: SlidersHorizontal, title: "Kişiye Özel Ayar", description: "Cihazınız, işitme profilinize göre özel olarak ayarlanır.", href: "/uygulama-ayar/kisiye-ozel-ayar" },
    { icon: Settings2, title: "Takip ve Programlama", description: "Kullanım süreniz arttıkça ayarlar yeniden gözden geçirilir.", href: "/uygulama-ayar/kisiye-ozel-programlama" },
  ],
  closing: "Cihazınızla ilgili teknik servis ihtiyaçlarınızda da destek sağlıyoruz.",
  closingCta: { label: "Teknik Servis", href: "/servis-bakim/teknik-servis" },
};
