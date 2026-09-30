// "İşitme testi nasıl yapılır?" — mevcut GERÇEK 5 aşamalı akış korunur (ön görüşme,
// şikayetlerin değerlendirilmesi, odyolojik ölçüm, sonuçların değerlendirilmesi,
// uygun çözümün görüşülmesi) ve daha anlaşılır hale getirilir; yeni işlem uydurulmaz.
// Ardından dört H3 kartı akışın kullanıcı gözünden ne anlama geldiğini açıklar.
// Süreye dair rakam yoktur (doğrulanmadı). Eski `closing` güvenlik metni korundu.
import { Phone, ClipboardList, Stethoscope, FileCheck, Lightbulb, MessageSquare, Headphones, Ear } from "lucide-astro";
import type { ProcessTimelineContent } from "../../components/shared/ProcessTimeline/ProcessTimeline.astro";
import type { GuideCard } from "../../components/price-guide/price-guide.types";

export const howProcess: ProcessTimelineContent = {
  eyebrow: "Test Süreci",
  heading: "İşitme Testi Nasıl Yapılır?",
  subheading:
    "Randevunuzdan sonuçların değerlendirilmesine kadar izlenen beş adım. Test genellikle rahatsız edici değildir ve sürecin her aşamasında ne yapıldığı size anlatılır.",
  steps: [
    { icon: Phone, title: "Ön görüşme", description: "Randevunuzda kısa bir görüşmeyle genel sağlık durumunuz ve beklentileriniz dinlenir." },
    { icon: ClipboardList, title: "Şikayetlerin değerlendirilmesi", description: "İşitmeyle ilgili yaşadığınız zorluklar ve şikayetleriniz ayrıntılı olarak not edilir." },
    { icon: Stethoscope, title: "Odyolojik ölçüm", description: "Farklı frekans ve şiddetteki seslere verdiğiniz tepkiler bir odyometrist eşliğinde ölçülür." },
    { icon: FileCheck, title: "Sonuçların değerlendirilmesi", description: "Ölçümler bir odyogramda kaydedilir ve sizinle birlikte anlaşılır şekilde yorumlanır." },
    { icon: Lightbulb, title: "Uygun çözümün görüşülmesi (gerekirse)", description: "Sonuçlara göre, gerekiyorsa uygun çözüm seçenekleri hiçbir baskı yapılmadan sizinle görüşülür." },
  ],
  closing:
    "Ücretsiz test; ön görüşme, şikayet değerlendirmesi ve temel odyolojik ölçümü kapsar. Ani başlayan işitme kaybı, kulak ağrısı veya akıntı gibi durumlarda önceliğiniz vakit kaybetmeden bir kulak burun boğaz uzmanına başvurmak olmalıdır.",
  // Sitenin mavi-beyaz kimliğine uyum (eski sayfa teal kullanıyordu).
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
};

export const howDetails: GuideCard[] = [
  {
    icon: MessageSquare,
    title: "İlk görüşme",
    text: "Test bir sohbetle başlar: hangi ortamlarda zorlandığınız, şikayetlerinizin ne zaman başladığı, kulakla ilgili geçmişiniz ve varsa daha önceki işitme testleriniz konuşulur. Bu bilgiler, sonuçların doğru yorumlanmasına yardımcı olur.",
  },
  {
    icon: Headphones,
    title: "İşitme ölçümü",
    text: "Kulaklık takılır ve farklı frekanslarda sesler verilir; her sesi duyduğunuzda bunu belirtmeniz istenir. Duyabildiğiniz en düşük şiddet seviyesi kaydedilir. Bu ölçüm genellikle rahatsız edici değildir.",
  },
  {
    icon: Ear,
    title: "Gereken diğer değerlendirmeler",
    text: "Testte kulak muayenesi (otoskopla dış kulak yolu ve kulak zarının görsel kontrolü) ve konuşmayı anlama düzeyinin değerlendirilmesi de yer alır. İhtiyaca göre timpanometri gibi tamamlayıcı testler gündeme gelebilir; kapsam kişiye göre değişir.",
    href: "/degerlendirme/timpanometri/",
    linkLabel: "Timpanometri nedir?",
  },
  {
    icon: FileCheck,
    title: "Sonuçların açıklanması",
    text: "Ölçümler odyogramda kaydedilir ve sonuçlar görüşmede sizinle birlikte değerlendirilir. Sonuca göre gerekirse KBB yönlendirmesi, takip veya işitme cihazı seçenekleri konuşulur; hiçbir satın alma zorunluluğu yoktur.",
  },
];
