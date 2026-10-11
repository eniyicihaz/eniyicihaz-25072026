// "Avantajları" bento section for the /neden-orijinal/yaygin-servis-agi
// page — framed as the advantages of a widespread, authorized service
// network rather than a generic device-feature list. Renders through
// the shared BrandPageAdvantages component — items must be exactly 5
// entries: [slot1, slot2, slot3(wide), slot4(wide), slot5(wide)], same
// contract every brand/category page's advantages data follows.

import { MapPin, Clock, GraduationCap, PackageCheck, ShieldCheck, Plane } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const yayginServisAgiAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Üretici Yetkili Servis Desteğinden Ne Beklenir?",
  intro: "Avrasya İşitme'de servis desteğinin başlıca özellikleri.",
  hero: {
    icon: MapPin,
    category: "Darıca'daki Merkezimiz",
    title: "18 Markanın Tamamı İçin Üretici Servis Yetkisi",
    description: "Üretici servis yetkisi 18 markanın tamamı için geçerlidir; fiziksel hizmet noktamız Darıca'daki merkezimizdir.",
  },
  items: [
    {
      icon: GraduationCap,
      category: "Servis Personeli",
      title: "Üretici Eğitimi Almış Ekip",
      description: "Servis işlemlerini yürüten ekibimiz üretici eğitimlerine katılmıştır.",
    },
    {
      icon: PackageCheck,
      category: "Doğru Parça",
      title: "Cihaza Uygun Parça Önemlidir",
      description: "Parça gereken onarımlarda cihazla uyumlu parçanın kullanılması, cihazın beklenen şekilde çalışmasına yardımcı olur.",
    },
    {
      icon: ShieldCheck,
      category: "Garanti Koşulları",
      title: "Garanti Koşullarına Uygun İşlem",
      description: "Garanti kapsamındaki işlemler üreticinin garanti koşullarına göre yürütülür; kapsam cihazın garanti şartlarına ve arızanın niteliğine bağlıdır.",
    },
    {
      icon: Plane,
      category: "Geçici Cihaz",
      title: "Yedek / Geçici Cihaz İmkânı",
      description: "Gerektiğinde yedek veya geçici cihaz imkânı değerlendirilir; imkân stok durumuna göre değişebilir.",
    },
    {
      icon: Clock,
      category: "Açık Bilgilendirme",
      title: "İşlemden Önce Kapsam ve Ücret Paylaşılır",
      description: "İşlemin kapsamı ve varsa ücret konusunda süreç içinde sizinle iletişime geçilir; ayrıntılar için Teknik Servis sayfasına bakabilirsiniz.",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorIconBg: "rgb(234 88 12 / 0.1)",
  accentColorHoverBorder: "rgb(234 88 12 / 0.45)",
};
