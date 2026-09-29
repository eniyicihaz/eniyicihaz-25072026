// Kısa cevap (GEO): kullanıcı sayfaya gelir gelmez temel sorusunu cevaplar.
// Rakam yok — bkz. page.ts başlığındaki politika notu.
import type { GuideLink } from "../../components/price-guide/price-guide.types";

export interface QuickAnswerContent {
  id: string;
  eyebrow: string;
  question: string;
  answer: string;
  factorsHeading: string;
  factors: string[];
  transparency: { title: string; paragraphs: string[] };
  links: GuideLink[];
}

export const quickAnswer: QuickAnswerContent = {
  id: "hizli-cevap",
  eyebrow: "Kısa Cevap",
  question: "İşitme cihazı fiyatları ne kadar?",
  answer:
    "İşitme cihazı fiyatı tek bir rakam değil, geniş bir aralıktır. Aynı işitme kaybı için bile cihaz tipi, teknoloji seviyesi, marka ve model, Bluetooth ve şarj gibi özellikler ile satın alma sonrası hizmetler toplam bedeli belirler. Bu yüzden doğru fiyat, ancak işitme değerlendirmesi ve ihtiyaç konuşmasının ardından netleşir.",
  factorsHeading: "İşitme cihazı fiyatlarını neler belirler?",
  factors: [
    "Cihaz tipi ve yerleşimi (kulak arkası, RIC, kulak içi, kanal içi)",
    "Teknoloji seviyesi ve gürültü yönetimi",
    "Marka ve model serisi",
    "Bluetooth, şarj, uygulama gibi özellikler",
    "Tek veya çift kulak; uygulama, takip ve teknik servis",
  ],
  transparency: {
    title: "Bu sayfada neden rakam yok?",
    paragraphs: [
      "Avrasya İşitme fiyat listesi yayımlamaz ve tahmini rakam vermez. Bu bir gizleme değil: işitme cihazı, kişiye özel bir değerlendirmenin sonucunda seçildiği için herkese aynı görünen bir liste sizi yanıltır.",
      "Rakam yerine, fiyatın neye göre oluştuğunu ve sizin için hangi kalemlerin önemli olduğunu eksiksiz anlatıyoruz. SGK tutarları her yıl güncellendiği için güncel tutarları ayrı ve güncel tutulan SGK rehberimizde bulabilirsiniz.",
    ],
  },
  links: [
    { label: "Fiyat bilgisi için bize ulaşın", href: "/iletisim/" },
    { label: "SGK işitme cihazı ödemesi rehberi", href: "/sgk-isitme-cihazi-odemesi/" },
  ],
};
