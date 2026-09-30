// Lokal bölümler — COMPANY.md §17 hiyerarşisi: Darıca (gerçek merkez) → Gebze
// + Çayırova (öncelikli hizmet bölgesi; şube YOK, danışanlar Darıca merkezine
// gelir) → Kocaeli (üst bölgesel çerçeve). Dilovası/Tuzla/Pendik yalnızca
// doğrudan sorulduğunda anılır — burada anılmaz.
//
// DOORWAY YASAĞI (COMPANY.md §17, QUALITY_GATES.md §2): dört bölüm birbirinin
// şehir adı değiştirilmiş kopyası DEĞİLDİR ve fiyat sayfasındaki lokal
// bölümlerin de kopyası değildir. Bu sayfada lokal açı "cihazları görmek,
// karşılaştırmak ve denemek"tir (fiyat sayfasında "fiyat bilgisi alma"):
//   Darıca  → gerçek merkez: cihazları yakından görme/deneme, adres, hazırlık (fotoğraflı)
//   Gebze   → ziyareti verimli kılan "cihaz türü kararı" soruları (adımlar)
//   Çayırova→ deneme ve ilk kontrol randevusunu çalışma saatlerine göre planlama
//   Kocaeli → il genelinde cihaz seçimine ön bilgi kanalları
// Adres, telefon ve saatler elle yazılmaz — company.ts (COMPANY.md kaynaklı) render edilir.
// Şube iddiası YOKTUR: Gebze ve Çayırova'da fiziksel şube bulunmadığı açıkça söylenir.
import type { GuideSectionMeta, LocalBlock } from "../../components/price-guide/price-guide.types";

export const localSection: GuideSectionMeta = {
  id: "yerel",
  eyebrow: "Darıca ve Çevresi",
  heading: "Darıca, Gebze, Çayırova ve Kocaeli'de İşitme Cihazları",
  intro:
    "Merkezimiz Darıca'dadır. Gebze ve Çayırova'da şubemiz yoktur; bu ilçelerden gelen danışanlarımızı Darıca'daki merkezimizde ağırlıyoruz. Kocaeli genelinde ise telefon ve WhatsApp üzerinden ön bilgi desteği sunuyoruz.",
};

export const localBlocks: LocalBlock[] = [
  {
    id: "darica",
    variant: "center",
    eyebrow: "Darıca · Gerçek Merkezimiz",
    heading: "Darıca'da İşitme Cihazlarını Yakından Görün ve Deneyin",
    lead:
      "Darıca'da işitme cihazı arıyorsanız, cihaz türlerini ekrandan değil elinize alarak karşılaştırabileceğiniz gerçek bir merkezimiz var.",
    paragraphs: [
      "Merkezimizde kulak arkası, RIC ve kulak içi gibi farklı türleri boyut, ağırlık ve kullanım kolaylığı açısından yakından inceleyebilir; işitme testinizin ardından uygun bulunan cihazları stok ve değerlendirmeye bağlı olarak deneyebilirsiniz.",
      "Merkezimiz Palandöken Eczanesi'nin üst katındadır; Farabi Ağız ve Diş Sağlığı Merkezi girişinin tam karşısında yer alır ve asansörle 1. kata çıkılır. Önceden randevu almanızı tavsiye ederiz.",
    ],
    items: [
      { title: "Önceliklerinizi not edin", text: "Telefon, televizyon, kalabalık ortam, görünmezlik… Sizin için en önemli olanı yazıp gelin." },
      { title: "Eski test sonuçlarınız", text: "Daha önce yaptırdığınız işitme testi varsa yanınızda bulundurun." },
      { title: "Bir yakınınızla gelin", text: "Cihaz türlerini birlikte konuşmak, kararı kolaylaştırır." },
    ],
    photo: {
      src: "/images/pages/hakkimizda-isitme-testi-odasi.webp",
      alt: "Darıca Avrasya İşitme Cihazları merkezinde işitme testi odası",
      width: 1537,
      height: 1023,
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
    heading: "Gebze'den Geliyorsanız: Cihaz Türü Kararına Hazırlanın",
    lead:
      "Gebze'de fiziksel bir şubemiz yoktur; Gebze'den gelen danışanlarımızı Darıca'daki merkezimizde ağırlıyoruz.",
    paragraphs: [
      "Darıca, Gebze'ye bitişik olduğundan merkezimize ulaşım kolaydır. Tek ziyarette daha net bir fikir edinmek için, gelmeden önce kendinize şu soruları sormanızı öneririz.",
    ],
    items: [
      { title: "1. Hangi durumda zorlanıyorum?", text: "Konuşma takibi, telefon, televizyon veya kalabalık ortam; en çok zorlandığınız durumu belirleyin." },
      { title: "2. Cihazın görünürlüğü benim için ne kadar önemli?", text: "Bu cevap, kulak arkası, RIC veya kulak içi türleri arasındaki tercihi yönlendirir." },
      { title: "3. Şarj mı, pil mi?", text: "Günlük rutininize ve el becerinize hangisinin uyduğunu düşünün." },
      { title: "4. Sorularınızı yazın", text: "Merkezde işitme testinizin ardından bu soruları birlikte yanıtlayabiliriz." },
    ],
    links: [
      { label: "Gebze işitme cihazları sayfası", href: "/gebze-isitme-cihazlari/" },
      { label: "Cihaz seçim rehberi", href: "/rehberler/cihaz-secim-rehberi/" },
    ],
  },
  {
    id: "cayirova",
    variant: "hours",
    layout: "split",
    eyebrow: "Çayırova",
    heading: "Çayırova'dan Geliyorsanız: Deneme ve Kontrol Randevunuzu Planlayın",
    lead:
      "Çayırova'da da şubemiz yoktur; Çayırova'dan gelen danışanlarımız Darıca'daki merkezimizi ziyaret eder.",
    paragraphs: [
      "İşitme cihazı süreci tek ziyaretle bitmez: değerlendirme, deneme ve ilk günlerin ardından bir kontrol randevusu gerekebilir. Bu nedenle randevularınızı, çalışma saatlerimize göre baştan planlamanız işinizi kolaylaştırır.",
      "Merkezimiz hafta içi ve cumartesi günü açıktır; çalışma saatleri aşağıdadır. Yoğun bir günün ortasında değil, kararınızı rahatça verebileceğiniz bir saatte gelmenizi öneririz.",
    ],
    links: [
      { label: "Çayırova işitme cihazları sayfası", href: "/cayirova-isitme-cihazlari/" },
      { label: "Kontrol randevusu", href: "/uygulama-ayar/kontrol-randevusu/" },
    ],
  },
  {
    id: "kocaeli",
    variant: "channels",
    eyebrow: "Kocaeli",
    heading: "Kocaeli Genelinde İşitme Cihazı Bilgisi Nasıl Alınır?",
    lead:
      "Merkezimiz Darıca'dadır; Kocaeli genelinde danışmanlık ve ön bilgi desteği sunuyoruz.",
    paragraphs: [
      "Merkeze gelmeden önce cihaz türleri ve özellikler hakkında fikir edinmek isteyen Kocaeli sakinleri için birkaç yol var. Size uygun olanı seçin.",
    ],
    items: [
      { title: "Telefon ve WhatsApp", text: "Kısaca ihtiyacınızı anlatın; hangi cihaz türlerinin konuşulabileceği hakkında ön bilgi alın." },
      { title: "Bu rehber ve alt sayfalar", text: "Kulak arkası, kulak içi, şarjlı ve Bluetooth gibi her tür için ayrı sayfalarımızı okuyabilirsiniz." },
      { title: "Ücretsiz işitme testi", text: "Kesin yönlendirme, işitme değerlendirmesinden sonra yapılır; test ücretsizdir." },
      { title: "Evde işitme cihazı hizmeti", text: "Merkeze gelmekte zorlananlar için evde hizmetin kapsamını ve koşullarını inceleyebilirsiniz." },
    ],
    links: [
      { label: "Kocaeli işitme cihazları sayfası", href: "/kocaeli-isitme-cihazlari/" },
      { label: "Evde işitme cihazı hizmeti", href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti/" },
    ],
  },
];
