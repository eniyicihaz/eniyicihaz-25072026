// Darıca landing page — "Cihazınızı Seçtikten Sonra" (Cihaz Deneme +
// Kişiye Özel Ayar + Kişiye Özel Programlama). Onaylanan sıradaki 7 ve 8
// numaralı maddeler (plan §D/§O), tek bir BrandCriteria bölümünde 3 gerçek
// linkli kart olarak birleştirildi — her biri kendi tam sayfasına link
// veriyor, burada süreç tekrar yazılmıyor. closingCta ile teknik servise
// de doğal bir link ekleniyor (ayrı bir bölüm açmadan, plan §I).
//
// Başlık/açıklama metinleri kullanıcı geri bildirimiyle netleştirildi
// ("Kişiye Özel Ayar" ile "Kişiye Özel Programlama" birbirine çok yakın
// duruyordu) — URL'ler DEĞİŞMEDİ, yalnızca görünen metin.
import { PlayCircle, SlidersHorizontal, Settings2 } from "lucide-astro";
import type { BrandCriteriaContent } from "../../components/brands/BrandCriteria/BrandCriteria.astro";

export const daricaServices: BrandCriteriaContent = {
  eyebrow: "CİHAZINIZI SEÇTİKTEN SONRA",
  heading: "Deneme, Ayar ve Takip Süreciniz",
  intro: "Darıca'daki merkezimizde cihazınızı deneyebilir, kişiye özel ayarlarınızı yaptırabilir ve kullanım sürecinde destek alabilirsiniz.",
  criteria: [
    { icon: PlayCircle, title: "Cihaz Deneme", description: "Cihazı günlük yaşamınızda deneyerek size uygunluğunu değerlendirin.", href: "/uygulama-ayar/cihaz-deneme/" },
    { icon: SlidersHorizontal, title: "İlk Kurulum ve Kişiye Özel Ayar", description: "Cihazın ilk uygulamasını ve temel ayarlarını işitme ihtiyacınıza göre yapıyoruz.", href: "/uygulama-ayar/kisiye-ozel-ayar/" },
    { icon: Settings2, title: "Takip ve İnce Ayar", description: "Kullanım deneyiminize göre cihaz ayarlarını zaman içinde yeniden değerlendiriyoruz.", href: "/uygulama-ayar/kisiye-ozel-programlama/" },
  ],
  closing: "Teknik servis ve bakım ihtiyaçlarınız için de yanınızdayız.",
  closingCta: { label: "Teknik Servis", href: "/servis-bakim/teknik-servis/" },
};
