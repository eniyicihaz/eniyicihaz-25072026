// Sadece Cihaz Satmıyoruz — BrandPageSignalList üzerinden render edilir.
// Tanı/tedavi iddiası yok; kapanış cümlesi bunu açıkça belirtiyor.
import { Ear, ClipboardCheck, Headphones, SlidersHorizontal, GraduationCap, HeartHandshake, RefreshCcw } from "lucide-astro";
import type { BrandPageSignalListContent } from "../../components/brand-page/BrandPageSignalList/BrandPageSignalList.astro";

export const hakkimizdaSignalList: BrandPageSignalListContent = {
  badge: "Yaklaşımımız",
  heading: "Sadece Cihaz Satmıyoruz",
  intro: "İşitme cihazı süreci bizim için tek bir işlemden ibaret değil; birbirini tamamlayan adımlardan oluşuyor.",
  signals: [
    { icon: Ear, title: "İhtiyacı Anlamak", description: "Önce günlük yaşamınızı ve dinleme ihtiyaçlarınızı dinliyoruz." },
    { icon: ClipboardCheck, title: "Değerlendirme", description: "İşitme durumunuzu profesyonel şekilde değerlendiriyoruz." },
    { icon: Headphones, title: "Cihaz Uygulaması", description: "Size uygun cihazı belirleyip uyguluyoruz." },
    { icon: SlidersHorizontal, title: "Kişiye Özel Ayar", description: "Cihazı günlük yaşamınıza göre ayarlıyoruz." },
    { icon: GraduationCap, title: "Kullanım Eğitimi", description: "Cihazın kullanımı ve bakımı hakkında bilgi veriyoruz." },
    { icon: HeartHandshake, title: "Satış Sonrası Destek", description: "Cihazınızı aldıktan sonra da yanınızda oluyoruz." },
    { icon: RefreshCcw, title: "Takip", description: "Kontrol randevularıyla süreci düzenli olarak takip ediyoruz." },
  ],
  closing: "Bu süreçte herhangi bir tanı veya tedavi iddiasında bulunmuyoruz; gerektiğinde ilgili sağlık kuruluşlarına yönlendirme yapıyoruz.",
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
