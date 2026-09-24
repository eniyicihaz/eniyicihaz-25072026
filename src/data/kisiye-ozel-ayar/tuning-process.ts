// Ayar Nasıl Yapılır? — Kişiye Özel Ayar, plan §3/Bölüm 5. Renders
// through the new TuningProcess component. Kesin sonuç/garanti ifadesi
// kullanılmıyor; her adım gerçek bir randevu akışını tarif ediyor.
import type { TuningProcessContent } from "../../components/shared/TuningProcess/TuningProcess.astro";

export const kisiyeOzelAyarTuningProcess: TuningProcessContent = {
  badge: "AYAR NASIL YAPILIR?",
  heading: "Randevu Sırasında İzlenen Adımlar",
  intro: "Süreç kişiden kişiye değişebilir; aşağıdaki adımlar genel akışı özetler.",
  steps: [
    { number: "01", title: "İşitme Değerlendirmesi", description: "Öncelikle güncel bir işitme değerlendirmesi yapılarak mevcut durum netleştirilir." },
    { number: "02", title: "Mevcut Cihazın İncelenmesi", description: "Cihazınız varsa, fiziksel durumu ve mevcut ayarları incelenir." },
    { number: "03", title: "İlk Ayarlama", description: "Değerlendirme sonuçlarına göre cihaz, işitme profilinize uygun şekilde ilk kez ayarlanır." },
    { number: "04", title: "Gerçek Yaşam Geri Bildirimi", description: "Cihazı günlük yaşamınızda kullandıktan sonra deneyiminizi bizimle paylaşırsınız." },
    { number: "05", title: "İnce Ayar", description: "Geri bildiriminize göre ayarlarda gerekli görülen küçük düzenlemeler yapılır." },
    { number: "06", title: "Kontrol", description: "Belirli aralıklarla kontrol randevusuyla ayarların ihtiyacınıza uygunluğu takip edilir." },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
