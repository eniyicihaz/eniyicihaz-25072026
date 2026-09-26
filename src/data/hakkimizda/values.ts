// Değerlerimiz — ValueGrid üzerinden render edilir. İlk 4 değer,
// merkezdeki gerçek marka duvarı posterinden ("İşitme Sağlığınız Bize
// Emanet") birebir alındı — uydurulmadı. 5. değer (Yerel Hizmet), gerçek
// Darıca adresine dayanıyor.
import { Users, Cpu, SlidersHorizontal, HeartHandshake, MapPin } from "lucide-astro";
import type { ValueGridContent } from "../../components/shared/ValueGrid/ValueGrid.astro";

export const hakkimizdaValues: ValueGridContent = {
  badge: "Değerlerimiz",
  heading: "Değerlerimiz",
  intro: "Merkezimizde çalışma şeklimizi tarif eden ilkeler.",
  items: [
    { icon: Users, title: "Uzman Kadro", description: "Değerlendirme, uygulama ve ayar süreçleri uzman ekibimiz tarafından yürütülür." },
    { icon: Cpu, title: "Gelişmiş Teknoloji", description: "Farklı markaların güncel işitme cihazı teknolojilerini takip ediyoruz." },
    { icon: SlidersHorizontal, title: "Kişiye Özel Çözümler", description: "Her cihaz, kullanıcının işitme kaybına ve günlük yaşamına göre ayarlanır." },
    { icon: HeartHandshake, title: "Satış Sonrası Destek", description: "Cihaz tesliminden sonra da kontrol ve destek sağlıyoruz." },
    { icon: MapPin, title: "Yerel Hizmet", description: "Darıca'daki merkezimizden Gebze ve Çayırova'ya kadar yakın çevreye hizmet veriyoruz." },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
};
