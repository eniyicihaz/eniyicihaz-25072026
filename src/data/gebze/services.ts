// Gebze landing page — "Cihaz Deneme + Kişiye Özel Ayar + Programlama +
// Teknik Servis" tek bir BrandCriteria bölümünde, gerçek linkli kartlar
// olarak birleştirildi (Darıca sayfasının kanıtlanmış deseni, ama metinler
// özgün biçimde yeniden yazıldı — kelime kelime kopya değil). closingCta ile
// teknik servise de doğal bir link ekleniyor, ayrı bir bölüm açmadan.
import { PlayCircle, SlidersHorizontal, Settings2 } from "lucide-astro";
import type { BrandCriteriaContent } from "../../components/brands/BrandCriteria/BrandCriteria.astro";

export const gebzeServices: BrandCriteriaContent = {
  eyebrow: "CİHAZINIZI SEÇTİKTEN SONRA",
  heading: "Cihaz Deneme, Kişiye Özel Ayar ve Takip",
  intro: "Cihaz seçimi bir başlangıçtır; deneme, kişiye özel ayar ve programlama süreciyle devam eder.",
  criteria: [
    { icon: PlayCircle, title: "Cihaz Deneme", description: "Seçtiğiniz cihazı merkezde ücretsiz demoyla deneyebilir, satın alarak 7 güne kadar günlük hayatınızda da kullanabilirsiniz; uygun bulunmazsa ödediğiniz tutar kesintisiz iade edilir.", href: "/uygulama-ayar/cihaz-deneme/" },
    { icon: SlidersHorizontal, title: "Kişiye Özel Ayar", description: "İlk uygulama ve temel ayarlar, işitme ihtiyacınıza göre yapılır.", href: "/uygulama-ayar/kisiye-ozel-ayar/" },
    { icon: Settings2, title: "Programlama ve Takip", description: "Kullanım deneyiminize göre cihaz ayarları zaman içinde yeniden değerlendirilir.", href: "/uygulama-ayar/kisiye-ozel-programlama/" },
  ],
  closing: "Teknik servis ve satış sonrası destek ihtiyaçlarınızda da yanınızdayız.",
  closingCta: { label: "Teknik Servis", href: "/servis-bakim/teknik-servis/" },
};
