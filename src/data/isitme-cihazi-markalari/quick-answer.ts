import type { QuickAnswerContent } from "../isitme-cihazi-fiyatlari/quick-answer";

// Faz 2 P2: "hiçbir markaya bağlı değil" ifadesi kaldırıldı (marka ilişki türü SoT'ta [DOĞRULAMA
// GEREKLİ]). 2026-11-14 (işletme sahibi kararı): marka çeşitliliği "10+ marka" olarak anlatılır; servis yetkisi/kapsam iddiası yok.
export const brandsQuickAnswer: QuickAnswerContent = {
  id: "hizli-cevap",
  eyebrow: "Kısa Cevap",
  question: "En iyi işitme cihazı markası hangisi?",
  answer:
    "Tek bir marka herkes için en iyi olmayabilir; seçim cihazın tipi, işitme kaybı, kullanım ortamı, bağlantı ihtiyacı, kullanım kolaylığı ve servis gibi kriterlere göre değişebilir. Markaların her biri farklı model aileleri sunar; hangisinin sizin için uygun olduğu markadan çok, hangi modelin işitme kaybınıza ve yaşamınıza uyduğuna bağlıdır. Bu yüzden bu sayfada markaları sıralamıyor, model ailelerini ve cihaz türlerini yan yana gösteriyoruz.",
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
      "İşitme cihazı bir tıbbi cihazdır ve doğru seçim kişiye bağlıdır; bu yüzden herkes için geçerli bir 'en iyi marka' listesi vermek yanıltıcı olur. Avrasya İşitme 10+ marka ile çalışır; farklı marka ve model seçeneklerini ihtiyacınıza göre birlikte değerlendiririz.",
      "Fiyat ve SGK konuları ayrı sayfalarda ele alınır; burada yalnızca kısaca yönlendiriyoruz.",
    ],
  },
  links: [
    { label: "Ücretsiz işitme testi", href: "/degerlendirme/ucretsiz-isitme-testi/" },
    { label: "Marka danışmanlığı", href: "/neden-orijinal/marka-danismanligi/" },
  ],
};
