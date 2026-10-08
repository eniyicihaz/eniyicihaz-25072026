// Darıca hub — SSS. Eski 9 soru otomatik korunmadı: bölümlerde zaten
// cevaplanan sorular (tarif, otopark/erişim, ücretsiz değerlendirme, SGK,
// deneme, ayar) çıkarıldı; Gebze/Çayırova hat listesi kendi sayfalarına
// bırakıldı. Kalan 5 soru merkeze gelmeden önce sorulan işleyiş soruları;
// cevaplar bölüm metinlerini tekrar etmek yerine ek bilgi taşır.
// Darıca'ya özgü gerçek kullanıcı soruları henüz verilmedi
// (LOCAL_SOURCE_OF_TRUTH: KULLANICIDAN BİLGİ GEREKLİ) — bu sorular
// işletmenin doğrulanmış işleyişine dayanır, Darıca'ya özgü anket gibi
// sunulmaz.
// Kaynak: SERVICE_SOURCE_OF_TRUTH §2.2 (randevu, geç kalma bildirimi,
// tamir/ayar için cihazın getirilmesi), §2.3, §2.15, §4 (teknik servis
// teslimi 3 gün, garanti işlemleri ücretsiz, garanti dışı "duruma göre",
// onarımda ücretsiz yedek cihaz — süreler YENİDEN DOĞRULA kapsamında
// izlenir), H24; LOCAL_SOURCE_OF_TRUTH (öğle arası yok, resmî tatil kapalı).
// Saatler elle yazılmıyor — company.hours'tan üretiliyor.
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";
import { company } from "../../components/footer/Footer/data/company";

const openHours = company.hours
  .filter((entry) => entry.time !== "Kapalı")
  .map((entry) => `${entry.days} ${entry.time}`)
  .join(", ");

export const daricaFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Ziyaretinizle İlgili Sorular",
  intro: "Darıca merkezimize gelmeden önce en çok sorulan sorular.",
  categories: [
    {
      label: "Ziyaret ve Randevu",
      items: [
        {
          question: "Merkeze gelirken yanımda ne getirmeliyim?",
          answer: "İlk ziyarette, varsa işitme testinizi, reçetenizi ve raporunuzu getirmeniz yeterli. Cihaz ayarı veya teknik servis için geliyorsanız işitme cihazınızı da yanınıza alın.",
        },
        {
          question: "İlk ziyaret ne kadar sürer?",
          answer: "Genellikle yaklaşık 1 saat sürer; yapılacak işlemlere göre 1–2 saati bulabilir. Merkezdeki süre SGK'lı ve SGK'sız danışanlar için aynıdır.",
        },
        {
          question: "Gelmeden önce randevu almam gerekir mi?",
          answer: "Randevusuz gelebilirsiniz. SGK işlemlerindeki destek dışındaki hizmetler randevuyla verildiği için önceden aramanızı öneririz. Randevunuza geç kalacaksanız en az 1 saat önceden haber vermenizi rica ederiz.",
        },
        {
          question: "Cihazım bozulursa teknik servis süreci nasıl işler?",
          answer: "Cihazınızı randevu alarak merkezimize getirebilirsiniz. Teknik servis teslimi 3 gün içindedir; garanti işlemleri ücretsizdir, garanti dışı işlemlerde ücret duruma göre belirlenir. Onarım sürecinde ücretsiz yedek cihaz sağlıyoruz.",
        },
        {
          question: "Pazar günleri ve resmî tatillerde açık mısınız?",
          answer: `Pazar günleri ve resmî tatillerde kapalıyız. Açık olduğumuz saatler: ${openHours}; öğle arası vermiyoruz.`,
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
