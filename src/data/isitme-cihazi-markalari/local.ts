// Lokal bölümler — COMPANY.md §17: Darıca (gerçek merkez) → Gebze + Çayırova
// (öncelikli hizmet bölgesi; şube YOK, danışanlar Darıca merkezine gelir) →
// Kocaeli (üst bölgesel çerçeve). Dilovası/Tuzla/Pendik burada anılmaz.
//
// DOORWAY YASAĞI: dört bölüm birbirinin şehir adı değiştirilmiş kopyası DEĞİLDİR;
// ayrıca /isitme-cihazlari/ ve /isitme-cihazi-fiyatlari/ lokal bölümlerinin de
// kopyası değildir. Bu sayfada lokal açı "farklı markaları ve modelleri yerinde
// karşılaştırmak, denemek ve marka kararına hazırlanmak":
//   Darıca  → gerçek merkez: markaları/modelleri yakından inceleme ve deneme (fotoğraflı)
//   Gebze   → merkeze gelmeden önce marka soruları hazırlama (adımlar)
//   Çayırova→ deneme ve karşılaştırmayı çalışma saatlerine göre planlama
//   Kocaeli → il genelinde marka/model ön bilgisi kanalları
// Adres, telefon ve saatler elle yazılmaz — company.ts (COMPANY.md kaynaklı) render edilir.
// Şube iddiası YOKTUR.
import type { GuideSectionMeta, LocalBlock } from "../../components/price-guide/price-guide.types";

export const localSection: GuideSectionMeta = {
  id: "yerel",
  eyebrow: "Darıca ve Çevresi",
  heading: "Darıca, Gebze, Çayırova ve Kocaeli'de Marka ve Model Değerlendirmesi",
  intro:
    "Merkezimiz Darıca'dadır. Gebze ve Çayırova'da şubemiz yoktur; bu ilçelerden gelen danışanlarımızı Darıca'daki merkezimizde ağırlıyoruz. Kocaeli genelinde ise telefon ve WhatsApp üzerinden ön bilgi desteği sunuyoruz.",
};

export const localBlocks: LocalBlock[] = [
  {
    id: "darica",
    variant: "center",
    eyebrow: "Darıca · Gerçek Merkezimiz",
    heading: "Darıca'da Farklı Markaları ve Modelleri Yakından İnceleyin",
    lead:
      "Darıca'da hangi marka işitme cihazının size uygun olduğunu merak ediyorsanız, farklı markaların modellerini aynı yerde değerlendirebileceğiniz gerçek bir merkezimiz var.",
    paragraphs: [
      "Merkezimizde işitme testinizin ardından, ihtiyacınıza uygun bulunan farklı markaların model ailelerini yan yana konuşabilir; uygun cihazları stok ve değerlendirmeye bağlı olarak deneyebilirsiniz. Hiçbir markaya bağlı olmadığımız için karşılaştırma kriterler üzerinden yapılır.",
      "Merkezimiz Palandöken Eczanesi'nin üst katındadır; Farabi Ağız ve Diş Sağlığı Merkezi girişinin tam karşısında yer alır ve asansörle 1. kata çıkılır. Önceden randevu almanızı tavsiye ederiz.",
    ],
    items: [
      { title: "Önceliklerinizi belirleyin", text: "Telefon, televizyon, kalabalık ortam, şarj, küçük boyut: sizin için en önemlisini yazıp gelin." },
      { title: "Merak ettiğiniz markaları not edin", text: "Daha önce duyduğunuz ya da önerilen markaları ve modelleri getirin; birlikte kriterlere göre konuşalım." },
      { title: "Bir yakınınızla gelin", text: "Marka ve model seçeneklerini birlikte değerlendirmek kararı kolaylaştırır." },
    ],
    photo: {
      src: "/images/pages/hakkimizda-bekleme-alani.webp",
      alt: "Darıca Avrasya İşitme Cihazları merkezinin bekleme alanı",
      width: 1536,
      height: 1024,
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
    heading: "Gebze'den Geliyorsanız: Marka Sorularınızı Önceden Hazırlayın",
    lead:
      "Gebze'de fiziksel bir şubemiz yoktur; Gebze'den gelen danışanlarımız farklı markaları Darıca'daki merkezimizde inceleyebilir.",
    paragraphs: [
      "Darıca, Gebze'ye bitişik olduğundan merkezimize ulaşım kolaydır. Tek ziyarette marka kararına yaklaşmak için, gelmeden önce şu adımları izlemenizi öneririz.",
    ],
    items: [
      { title: "1. Öncelik listenizi çıkarın", text: "Telefon uyumu, şarj, cihaz tipi ve servis gibi kriterlerden sizin için önemli olanları sıralayın." },
      { title: "2. Merak ettiğiniz markaları yazın", text: "Bir yakınınızın kullandığı veya duyduğunuz markaları not edin; karşılaştırmayı bu sorular üzerinden yaparız." },
      { title: "3. Telefonunuzun modelini getirin", text: "Bluetooth uyumu marka ve modele göre değiştiği için telefonunuzu birlikte kontrol edebiliriz." },
      { title: "4. Testin ardından model konuşun", text: "İşitme testi sonucuna göre uygun cihaz tipleri ve markaların model aileleri birlikte değerlendirilir." },
    ],
    links: [
      { label: "Gebze işitme cihazları sayfası", href: "/gebze-isitme-cihazlari/" },
      { label: "Ücretsiz işitme testi", href: "/degerlendirme/ucretsiz-isitme-testi/" },
    ],
  },
  {
    id: "cayirova",
    variant: "hours",
    layout: "split",
    eyebrow: "Çayırova",
    heading: "Çayırova'dan Geliyorsanız: Deneme ve Karşılaştırmayı Planlayın",
    lead:
      "Çayırova'da da şubemiz yoktur; Çayırova'dan gelen danışanlarımız Darıca'daki merkezimizi ziyaret eder.",
    paragraphs: [
      "Markaları ve modelleri karşılaştırmak, denemek ve ardından ayar için bir kontrol randevusu almak birden fazla ziyaret gerektirebilir. Randevularınızı çalışma saatlerimize göre baştan planlamanız işinizi kolaylaştırır.",
      "Merkezimiz hafta içi ve cumartesi günü açıktır; çalışma saatleri aşağıdadır. Kararınızı rahatça verebileceğiniz bir saatte gelmenizi öneririz.",
    ],
    links: [
      { label: "Çayırova işitme cihazları sayfası", href: "/cayirova-isitme-cihazlari/" },
      { label: "Cihaz deneme", href: "/uygulama-ayar/cihaz-deneme/" },
    ],
  },
  {
    id: "kocaeli",
    variant: "channels",
    eyebrow: "Kocaeli",
    heading: "Kocaeli Genelinde Marka ve Model Bilgisi Nasıl Alınır?",
    lead:
      "Merkezimiz Darıca'dadır; Kocaeli genelinde danışmanlık ve ön bilgi desteği sunuyoruz.",
    paragraphs: [
      "Merkeze gelmeden önce marka ve modeller hakkında fikir edinmek isteyen Kocaeli sakinleri için birkaç yol var. Size uygun olanı seçin.",
    ],
    items: [
      { title: "Telefon ve WhatsApp", text: "Merak ettiğiniz markayı veya ihtiyacınızı anlatın; hangi model ailelerinin konuşulabileceği hakkında ön bilgi alın." },
      { title: "Marka sayfaları", text: "Altı ana markanın ve diğer markaların sayfalarında model ailelerini ve özellikleri inceleyebilirsiniz." },
      { title: "Ücretsiz işitme testi", text: "Kesin yönlendirme, işitme değerlendirmesinden sonra yapılır; test ücretsizdir." },
      { title: "Evde işitme cihazı hizmeti", text: "Merkeze gelmekte zorlananlar için evde hizmetin kapsamını ve koşullarını inceleyebilirsiniz." },
    ],
    links: [
      { label: "Kocaeli işitme cihazları sayfası", href: "/kocaeli-isitme-cihazlari/" },
      { label: "Evde işitme cihazı hizmeti", href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti/" },
    ],
  },
];
