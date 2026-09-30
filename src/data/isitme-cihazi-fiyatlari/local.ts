// Lokal bölümler — COMPANY.md §17 hiyerarşisi: Darıca (gerçek merkez) →
// Gebze + Çayırova (öncelikli hizmet bölgesi; şube YOK, danışanlar Darıca
// merkezine gelir) → Kocaeli (üst bölgesel çerçeve). Dilovası/Tuzla/Pendik
// yalnızca doğrudan sorulduğunda anılır — burada anılmaz.
//
// DOORWAY YASAĞI (COMPANY.md §17, QUALITY_GATES.md §2): dört bölüm aynı
// metnin şehir adı değiştirilmiş kopyası DEĞİLDİR. Her biri o bölgeden
// gelen kullanıcının gerçekten farklı bir sorusuna cevap verir ve farklı bir
// düzen kullanır:
//   Darıca  → gerçek merkez: ziyarette ne olur, adres tarifi, hazırlık listesi (fotoğraflı)
//   Gebze   → tek ziyareti verimli kılan hazırlık adımları (SGK belgeleri dahil)
//   Çayırova→ randevuyu çalışma saatlerine göre planlama (gerçek saatler company.ts'ten)
//   Kocaeli → il genelinde bilgi ve hizmet kanalları (telefon, WhatsApp, ev hizmeti)
// Adres, telefon ve saatler elle yazılmaz — company.ts (COMPANY.md kaynaklı) render edilir.
import type { GuideSectionMeta, LocalBlock } from "../../components/price-guide/price-guide.types";

export const localSection: GuideSectionMeta = {
  id: "yerel",
  eyebrow: "Darıca ve Çevresi",
  heading: "Darıca, Gebze, Çayırova ve Kocaeli'de İşitme Cihazı Fiyat Bilgisi",
  intro:
    "Merkezimiz Darıca'dadır. Gebze ve Çayırova'da şubemiz yoktur; bu ilçelerden gelen danışanlarımızı Darıca'daki merkezimizde ağırlıyoruz. Kocaeli genelinde ise telefon ve WhatsApp üzerinden bilgi desteği sunuyoruz.",
};

export const localBlocks: LocalBlock[] = [
  {
    id: "darica",
    variant: "center",
    eyebrow: "Darıca · Gerçek Merkezimiz",
    heading: "Darıca'da İşitme Cihazı Fiyatları: Fiyat Bilgisini Merkezde Nasıl Alırsınız?",
    lead:
      "Avrasya İşitme'nin gerçek merkezi Darıca'dadır. Fiyat bilgisi burada, işitme değerlendirmesinin ardından ve sizin ihtiyacınıza göre verilir.",
    paragraphs: [
      "Ziyaretinizde önce ihtiyaçlarınızı dinler, işitme testinizi yaparız. Sonuçlara göre uygun cihaz tiplerini ve teknoloji seviyelerini anlatır, isterseniz cihazı denetiriz. Fiyat bilgisi bu adımların sonunda netleşir; böylece neye ödeme yaptığınızı bilirsiniz.",
      "Merkezimiz Palandöken Eczanesi'nin üst katındadır; Farabi Ağız ve Diş Sağlığı Merkezi girişinin tam karşısında yer alır ve asansörle 1. kata çıkılır. Önceden randevu almanızı tavsiye ederiz.",
    ],
    items: [
      { title: "Varsa eski test sonuçlarınız", text: "Daha önce yaptırdığınız işitme testi veya odyometri sonuçlarını getirmeniz süreci hızlandırır." },
      { title: "SGK belgeleriniz", text: "SGK desteğinden yararlanacaksanız rapor ve reçete ile ilgili belgelerinizi yanınızda bulundurun." },
      { title: "Önceliklerinizi düşünün", text: "Telefon, televizyon, kalabalık ortam, görünmezlik… Sizin için neyin önemli olduğunu belirlemek seçimi kolaylaştırır." },
    ],
    photo: {
      src: "/images/pages/hakkimizda-danisma-odasi.webp",
      alt: "Darıca Avrasya İşitme Cihazları merkezinde danışma ve değerlendirme odası",
      width: 1214,
      height: 1295,
    },
    links: [
      { label: "Darıca işitme cihazları sayfası", href: "/darica-isitme-cihazlari/" },
      { label: "Randevu ve iletişim", href: "/iletisim/" },
    ],
  },
  {
    id: "gebze",
    variant: "steps",
    eyebrow: "Gebze",
    heading: "Gebze'de İşitme Cihazı Fiyatları: Darıca Merkezimize Hazırlıklı Gelin",
    lead:
      "Gebze'de fiziksel bir şubemiz yoktur; Gebze'den gelen danışanlarımızı Darıca'daki merkezimizde ağırlıyoruz.",
    paragraphs: [
      "Darıca, Gebze'ye bitişik olduğu için merkezimize ulaşım kolaydır. Ziyareti tek seferde verimli kılmak için, gelmeden önce aşağıdaki adımları izlemenizi öneririz.",
    ],
    items: [
      { title: "1. Ön bilgi alın", text: "Telefon veya WhatsApp ile ihtiyacınızı ve SGK'lı olup olmadığınızı kısaca paylaşın; hangi belgelerle gelmeniz gerektiğini öğrenin." },
      { title: "2. Belgelerinizi hazırlayın", text: "SGK süreci için gereken belgeleri ve varsa eski işitme testi sonuçlarınızı yanınıza alın." },
      { title: "3. Tek ziyarette değerlendirme", text: "İşitme testi ve cihaz tipi görüşmesi bir arada yapılır; stok ve değerlendirmeye bağlı olarak cihaz denemesi de yapılabilir." },
      { title: "4. Seçeneklerle birlikte fiyat bilgisi", text: "Değerlendirme sonrasında size uygun seçenekler ve bunlara ait fiyat bilgisi birlikte netleşir." },
    ],
    links: [
      { label: "Gebze işitme cihazları sayfası", href: "/gebze-isitme-cihazlari/" },
      { label: "SGK için gerekli belgeler", href: "/sgk/gerekli-belgeler/" },
    ],
  },
  {
    id: "cayirova",
    variant: "hours",
    layout: "split",
    eyebrow: "Çayırova",
    heading: "Çayırova'da İşitme Cihazı Fiyatları: Randevunuzu Yaşamınıza Göre Planlayın",
    lead:
      "Çayırova'da da şubemiz yoktur; Çayırova'dan gelen danışanlarımız Darıca'daki merkezimizi ziyaret eder.",
    paragraphs: [
      "Çalışan, aile bakımı üstlenen ya da hafta içi vakti kısıtlı biri için randevu zamanını doğru seçmek önemlidir. Merkezimiz hafta içi ve cumartesi günü açıktır; çalışma saatleri aşağıdadır.",
      "Yoğun bir günün ortasında değil, kararınızı rahatça verebileceğiniz bir saatte gelmenizi öneririz. İsterseniz bir yakınınızla birlikte gelin; seçenekleri birlikte konuşmak kararı kolaylaştırır.",
    ],
    links: [
      { label: "Çayırova işitme cihazları sayfası", href: "/cayirova-isitme-cihazlari/" },
      { label: "Randevu ve iletişim", href: "/iletisim/" },
    ],
  },
  {
    id: "kocaeli",
    variant: "channels",
    eyebrow: "Kocaeli",
    heading: "Kocaeli'de İşitme Cihazı Fiyatları: Bilgi ve Hizmet Kanalları",
    lead:
      "Merkezimiz Darıca'dadır; Kocaeli genelinde danışmanlık ve bilgi desteği sunuyoruz.",
    paragraphs: [
      "Kocaeli'nin farklı bölgelerinden ulaşan kullanıcılar için, fiyat bilgisine giden yol birkaç kanaldan ilerler. Size uygun olanı seçin.",
    ],
    items: [
      { title: "Telefon ve WhatsApp", text: "İhtiyacınızı anlatın, ön bilgi ve randevu alın; hangi belgelerle geleceğinizi öğrenin." },
      { title: "Darıca merkezimizde ücretsiz işitme testi", text: "Kesin bilgi, işitme değerlendirmesinden sonra verilir; test ücretsizdir." },
      { title: "Evde işitme cihazı hizmeti", text: "Merkeze gelmekte zorlananlar için evde hizmet sayfasında kapsamı ve koşulları inceleyebilirsiniz." },
      { title: "Bilgi merkezi ve rehberler", text: "Karar vermeden önce, cihaz seçimi ve alışma süreci hakkında rehberlerimizi okuyabilirsiniz." },
    ],
    links: [
      { label: "Kocaeli işitme cihazları sayfası", href: "/kocaeli-isitme-cihazlari/" },
      { label: "Evde işitme cihazı hizmeti", href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti/" },
      { label: "Bilgi merkezi", href: "/bilgi-merkezi/" },
    ],
  },
];
