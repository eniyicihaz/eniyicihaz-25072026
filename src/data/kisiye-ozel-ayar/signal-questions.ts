// Mevcut Cihazınız Varsa — Kişiye Özel Ayar, plan §3/Bölüm 8. Renders
// through the existing BrandPageSignalList (zero code changes), section
// carries id="mevcut-cihaz" on the page for the hero's tertiary CTA.
// Başka marka cihazların mutlaka ayarlanabileceği garanti edilmiyor —
// yalnızca değerlendirilecek konular listeleniyor.
import { Wrench, Ear, Sliders, Stethoscope, MessageSquare } from "lucide-astro";
import type { BrandPageSignalListContent } from "../../components/brand-page/BrandPageSignalList/BrandPageSignalList.astro";

export const kisiyeOzelAyarSignalQuestions: BrandPageSignalListContent = {
  badge: "MEVCUT CİHAZINIZ VARSA",
  heading: "Sadece Bizden Aldığınız Cihazla Gelmek Zorunda Değilsiniz",
  intro: "Başka bir merkezden alınmış bir cihazınız varsa da randevu sırasında aşağıdaki konular birlikte değerlendirilir.",
  signals: [
    { icon: Wrench, title: "Cihazın Fiziksel Durumu", description: "Cihazın genel durumu ve çalışır olup olmadığı kontrol edilir." },
    { icon: Ear, title: "Kulak Kalıbı / Dome / Receiver", description: "Kullanılan kulak kalıbı, dome veya receiver'ın uygunluğu incelenir." },
    { icon: Sliders, title: "Mevcut Ayar", description: "Cihazın şu anki ayarları, mevcut ihtiyacınızla karşılaştırılır." },
    { icon: Stethoscope, title: "İşitme Testi", description: "Ayarların güncel işitme durumunuza uygunluğu, gerektiğinde yeni bir test ile teyit edilir." },
    { icon: MessageSquare, title: "Şikayetleriniz", description: "Cihazla ilgili yaşadığınız rahatsızlıklar ve beklentileriniz dinlenir." },
  ],
  closing: "Değerlendirme sonucunda cihazınızın ayarlanıp ayarlanamayacağı, marka ve modeline göre netleşir.",
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
