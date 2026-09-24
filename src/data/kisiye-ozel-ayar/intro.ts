// Neden Kişiye Özel Ayar? — Kişiye Özel Ayar, plan §3/Bölüm 3. Renders
// through the existing BrandPageIntro (zero code changes). İlk paragraf
// brief'in Darıca-temelli gerçek-ihtiyaç cümlesiyle açılıyor — ayrı bir
// "yerel konumlandırma" bölümü açmak yerine bu paragrafa taşındı.
// Stats gerçek bir ölçüm/istatistik değil, sürecin yapısal olgularıdır
// (adım sayısı, kapsam, yöntem) — sahte sayı/oran kullanılmıyor.
import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const kisiyeOzelAyarIntro: BrandPageIntroContent = {
  badge: "NEDEN KİŞİYE ÖZEL AYAR?",
  heading: "Aynı Kayıp, Aynı İhtiyaç Değildir",
  paragraphs: [
    "Darıca'da işitme cihazı kullanan kişilerin cihazlarından beklediği verimi alabilmesi için yalnızca doğru cihazı seçmek yeterli değildir. Cihazın kişinin işitme kaybına, günlük yaşamına ve dinleme ihtiyaçlarına uygun şekilde ayarlanması gerekir.",
    "Aynı işitme kaybına sahip iki kişinin ihtiyaçları aynı olmayabilir. Biri sessiz bir evde televizyon izlerken rahat duymak ister, diğeri kalabalık bir ortamda konuşmaları ayırt etmekte zorlanır. Ayarlar; işitme ölçüm sonuçları, kullanılan cihaz, günlük yaşam, konuşma ortamları, gürültülü ortamlar, telefon kullanımı ve kişinin sesle ilgili geri bildirimi gibi faktörlere göre değerlendirilir.",
  ],
  stats: [
    { value: "6", label: "Adımlı Süreç" },
    { value: "Marka Bağımsız", label: "Uygulama" },
    { value: "Geri Bildirime Dayalı", label: "Yöntem" },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
