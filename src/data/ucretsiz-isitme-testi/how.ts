// "İşitme testi nasıl yapılır?" — mevcut GERÇEK 5 aşamalı akış korunur (ön görüşme,
// şikayetlerin değerlendirilmesi, odyolojik ölçüm, sonuçların değerlendirilmesi,
// uygun çözümün görüşülmesi). Eski dört "detay kartı" ayrı bir blok değildi çünkü aynı
// süreci ikinci kez anlatıyordu: kartlardaki GERÇEKTEN yeni bilgi (sohbetle başlaması, kulaklık
// ve el işareti, "genellikle rahatsız edici değildir") ilgili adımların metnine taşındı.
// Yeni işlem uydurulmaz; süreye dair rakam yoktur (doğrulanmadı).
// Hazırlık ve süre bu bölümün H3'leridir (measurements.ts).
import { Phone, ClipboardList, Stethoscope, FileCheck, Lightbulb } from "lucide-astro";
import type { ProcessTimelineContent } from "../../components/shared/ProcessTimeline/ProcessTimeline.astro";

export const howProcess: ProcessTimelineContent = {
  eyebrow: "Test Süreci",
  heading: "İşitme Testi Nasıl Yapılır?",
  subheading:
    "Randevunuzdan sonuçların değerlendirilmesine kadar izlenen beş adım. Test genellikle rahatsız edici değildir ve sürecin her aşamasında ne yapıldığı size anlatılır.",
  steps: [
    {
      icon: Phone,
      title: "Ön görüşme",
      description: "Test bir sohbetle başlar: genel sağlık durumunuz, beklentileriniz, hangi ortamlarda zorlandığınız ve varsa daha önceki işitme testleriniz dinlenir.",
    },
    {
      icon: ClipboardList,
      title: "Şikayetlerin değerlendirilmesi",
      description: "Şikayetlerinizin ne zaman başladığı ve kulakla ilgili geçmişiniz not edilir; bu bilgiler sonuçların doğru yorumlanmasına yardımcı olur.",
    },
    {
      icon: Stethoscope,
      title: "Odyolojik ölçüm",
      description:
        "Kulaklık takılır ve farklı frekans ve şiddetlerde sesler verilir; her sesi duyduğunuzda bunu belirtmeniz istenir. Duyabildiğiniz en düşük şiddet kaydedilir. Uygulanacak değerlendirmeler, kişinin ihtiyacına ve test sürecine göre belirlenir.",
    },
    {
      icon: FileCheck,
      title: "Sonuçların değerlendirilmesi",
      description: "Ölçümler bir odyogramda kaydedilir ve görüşmede sizinle birlikte anlaşılır şekilde yorumlanır.",
    },
    {
      icon: Lightbulb,
      title: "Uygun çözümün görüşülmesi (gerekirse)",
      description: "Sonuca göre gerekirse KBB yönlendirmesi, takip veya işitme cihazı seçenekleri hiçbir baskı yapılmadan sizinle görüşülür.",
    },
  ],
  // Sitenin mavi-beyaz kimliğine uyum (eski sayfa teal kullanıyordu).
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
};
