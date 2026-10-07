// Kısa cevap (GEO): "En iyi işitme cihazı markası hangisi?" — sıralama YAPMADAN,
// kriter bazlı cevap. İlk iki cümle doğrudan alıntılanabilir; yan liste ikinci
// soruyu cevaplar: "İşitme cihazı markası seçerken nelere bakılır?"
import type { QuickAnswerContent } from "../isitme-cihazi-fiyatlari/quick-answer";

export const brandsQuickAnswer: QuickAnswerContent = {
  id: "hizli-cevap",
  eyebrow: "Kısa Cevap",
  question: "En iyi işitme cihazı markası hangisi?",
  answer:
    "Tek bir marka herkes için en iyi olmayabilir; seçim cihazın tipi, işitme kaybı, kullanım ortamı, bağlantı ihtiyacı, kullanım kolaylığı ve servis gibi kriterlere göre değişebilir. Oticon, Phonak, Signia, Widex, ReSound ve NuEar gibi markaların her biri farklı bir yaklaşım ve model yelpazesi sunar; hangisinin sizin için uygun olduğu markadan çok, hangi modelin işitme kaybınıza ve yaşamınıza uyduğuna bağlıdır. Bu yüzden bu sayfada markaları sıralamıyor, birbirinden nasıl ayrıldıklarını gösteriyoruz.",
  factorsHeading: "İşitme cihazı markası seçerken nelere bakılır?",
  factors: [
    "İşitme kaybınıza uygun güç ve cihaz tipi (RIC, kulak arkası, kulak içi)",
    "Telefon uyumluluğu ve Bluetooth ihtiyacınız",
    "Şarjlı mı pilli mi tercih ettiğiniz",
    "Uygulama, ayar ve kullanım kolaylığı beklentiniz",
    "Servis, deneme, ayarlama ve takip desteğinin nasıl sağlandığı",
  ],
  transparency: {
    title: "Bu sayfada neden sıralama yok?",
    paragraphs: [
      "İşitme cihazı bir tıbbi cihazdır ve doğru seçim kişiye bağlıdır; bu yüzden herkes için geçerli bir 'en iyi marka' listesi vermek yanıltıcı olur. Avrasya İşitme hiçbir markaya bağlı değildir ve 18 işitme cihazı markasıyla çalışır.",
      "Fiyat ve SGK konuları ayrı sayfalarda ele alınır; burada yalnızca kısaca yönlendiriyoruz.",
    ],
  },
  links: [
    { label: "Ücretsiz işitme testi", href: "/degerlendirme/ucretsiz-isitme-testi/" },
    { label: "Marka danışmanlığı", href: "/neden-orijinal/marka-danismanligi/" },
  ],
};
