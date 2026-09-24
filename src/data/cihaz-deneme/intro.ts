// "Bir Cihaz Herkese Uymaz" — redesign plan §1, Bölüm 1. Renders through
// BrandPageIntro (editorial paragraphs + a "factor" stat row instead of
// a card grid) — used on this page for the first time, deliberately not
// another bento to avoid repeating Ücretsiz İşitme Testi's rhythm.
import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const cihazDenemeIntro: BrandPageIntroContent = {
  badge: "BİR CİHAZ HERKESE UYMAZ",
  heading: "İşitme Cihazı Seçimi Yalnızca Marka veya Fiyat Meselesi Değildir",
  paragraphs: [
    "İşitme profiliniz, günlük yaşam alışkanlıklarınız ve en çok vakit geçirdiğiniz ortamlar, size uygun cihazı belirleyen asıl etkenlerdir.",
    "Konuşma ortamlarında, telefon kullanımında, televizyon izlerken veya kalabalık bir ortamda yaşadığınız deneyim kişiden kişiye farklılık gösterir.",
    "Teknoloji beklentiniz, kullanım alışkanlıklarınız ve cihazın kulağınızdaki fiziksel konforu da doğru seçimin parçasıdır.",
    "Darıca'daki merkezimizde cihaz deneme süreci tam olarak bu farkı ortaya çıkarmak için var — size uygun olanı, kendi yaşamınızda deneyerek anlarsınız.",
  ],
  stats: [
    { value: "İşitme Profili", label: "Kişisel Faktör" },
    { value: "Günlük Yaşam", label: "Kullanım Alışkanlığı" },
    { value: "Teknoloji Beklentisi", label: "Kişisel Tercih" },
    { value: "Fiziksel Konfor", label: "Kullanım Deneyimi" },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
