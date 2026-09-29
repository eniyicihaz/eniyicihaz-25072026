// "Cihaz türleri" — 8 blok (nedir / kimler için / öne çıkanlar / fiyatı
// etkileyenler / ilgili sayfa). İçerik, sitenin mevcut cihaz-türü sayfalarıyla
// (src/data/{kulak-arkasi,kulak-ici,gorunmez-cic,sarj-edilebilir,
// bluetooth,cocuklara-ozel}) tutarlı ve onlarla ÇAKIŞMAYACAK biçimde yalnızca
// "fiyat perspektifi" ile yazıldı; ayrıntı için ilgili sayfaya bağlanır.
// Görseller: 1254×1254, metinsiz, TEMSİLİ cihaz görselleri
// (public/images/homepage/device-comparison/) — marka/model iddiası taşımaz.
// RIC ve "çok küçük çözümler" için görsel henüz yok → `imageNeeded`.
import type { DeviceTypeBlock, GuideSectionMeta } from "../../components/price-guide/price-guide.types";

const img = (slug: string, alt: string) => ({
  src: `/images/homepage/device-comparison/device-comparison-${slug}.webp`,
  alt,
  width: 1254,
  height: 1254,
});

export const deviceTypesSection: GuideSectionMeta = {
  id: "cihaz-turleri",
  eyebrow: "Cihaz Türleri",
  heading: "Cihaz Türüne Göre İşitme Cihazı Fiyatları",
  intro:
    "Cihaz tipi, fiyatı doğrudan değil dolaylı etkiler: yerleşim; gövde büyüklüğünü, pil ve özellik seçeneklerini, üretim şeklini ve dolayısıyla kalem kalem bedeli değiştirir. Her tipin ayrıntısı kendi sayfasında.",
};

export const deviceTypes: DeviceTypeBlock[] = [
  {
    id: "kulak-arkasi-bte",
    name: "Kulak Arkası (BTE)",
    image: img("kulak-arkasi-bte", "Kulak arkası (BTE) tipi işitme cihazı — temsili görsel"),
    whatIs: "Gövdesi kulağın arkasına oturan, sesi ince bir tüp ile kulağa ileten cihaz ailesidir.",
    whoFor: [
      "Hafiften ileri dereceye kadar geniş bir işitme kaybı aralığı olanlar",
      "Kolay takıp çıkarma ve temizlik isteyenler",
      "Çocuklar ve el becerisinin kısıtlı olduğu kullanıcılar",
    ],
    highlights: ["Geniş güç aralığı", "Büyük gövde: pil, şarj ve özellik seçeneği fazla", "Kullanımı ve bakımı kolay"],
    priceFactors: ["Teknoloji seviyesi ve özellik paketi", "Pilli veya şarjlı olması", "Bluetooth ve uygulama desteği"],
    href: "/isitme-cihazlari/kulak-arkasi-bte/",
    linkLabel: "Kulak arkası cihazları inceleyin",
  },
  {
    id: "ric-rite",
    name: "RIC / RITE",
    alias: "Alıcısı kulak kanalında olan ince kulak arkası cihaz",
    // Ürün görseli, olduğu gibi (yeniden boyutlandırma/encode yok): 1254 × 1254 (1:1), WebP.
    image: {
      src: "/images/price-guide/device-type-ric-rite.webp",
      alt: "RIC/RITE tipi işitme cihazı — temsili görsel",
      width: 1254,
      height: 1254,
    },
    whatIs:
      "Gövdesi kulak arkasında, hoparlörü (alıcı) ise kulak kanalında bulunan, ince ve göze az çarpan bir kulak arkası cihaz türüdür.",
    whoFor: [
      "Doğal ses ve az görünen bir tasarım isteyenler",
      "Hafiften ileriye geniş bir işitme kaybı aralığı olanlar (modele göre)",
      "Gözlük kullananlar veya kulak kalıbı istemeyenler",
    ],
    highlights: ["İnce, hafif gövde", "Modele göre şarjlı ve Bluetooth seçenekleri", "Alıcı değişimiyle farklı güç seçenekleri"],
    priceFactors: ["Teknoloji seviyesi", "Şarj ve Bluetooth özellikleri", "Alıcı/kalıp türü"],
    href: "/isitme-cihazlari/kulak-arkasi-bte/",
    linkLabel: "BTE ve RIC farkını okuyun",
  },
  {
    id: "kulak-ici-ite",
    name: "Kulak İçi (ITE)",
    image: img("kulak-ici-ite", "Kulak içi (ITE) tipi işitme cihazı — temsili görsel"),
    whatIs: "Kulak kepçesi ve kanalının içine, kulak yapınıza göre üretilen cihazdır.",
    whoFor: [
      "Kulak arkası cihaz görünümünden rahatsız olanlar",
      "Kulak yapısı uygun olanlar",
      "Hafif–orta, bazı modellerde daha ileri kayıplar",
    ],
    highlights: ["Kişiye özel üretim", "Kulağa oturan, dengeli görünürlük", "Modele göre çeşitli özellikler"],
    priceFactors: ["Kişiye özel üretim ve kalıp süreci", "Özellik paketi", "Şarj ve Bluetooth seçeneklerinin modele göre değişmesi"],
    href: "/isitme-cihazlari/kulak-ici-ite/",
    linkLabel: "Kulak içi cihazları inceleyin",
  },
  {
    id: "kanal-ici-cic",
    name: "Kanal İçi (CIC)",
    image: img("gorunmez-cic", "Kanal içi (CIC) tipi işitme cihazı — temsili görsel"),
    whatIs: "Kulak kanalının içine yerleşen, çoğu zaman dışarıdan neredeyse fark edilmeyen küçük cihazdır.",
    whoFor: [
      "Görünmezliği öncelik yapanlar",
      "Genellikle hafif–orta kayıplar",
      "El becerisi ve kulak yapısı uygun olanlar",
    ],
    highlights: ["Çok az fark edilir", "Küçük gövde: pil ve özellik seçenekleri sınırlı olabilir", "Kişiye özel üretim"],
    priceFactors: ["Kişiye özel üretim", "Minyatür teknoloji", "Sınırlı özellik ve pil seçenekleri"],
    href: "/isitme-cihazlari/gorunmez-cic/",
    linkLabel: "Görünmez cihazları inceleyin",
  },
  {
    id: "gorunmez-cok-kucuk",
    name: "Görünmez / Çok Küçük Çözümler",
    alias: "CIC ve daha derin yerleşen tipler",
    // Ürün görseli (parmak üstünde ölçek gösteren yakın çekim), olduğu gibi:
    // 1254 × 1254 (1:1), WebP.
    image: {
      src: "/images/price-guide/device-type-gorunmez-cok-kucuk.webp",
      alt: "Kulak kanalının derinine yerleşen çok küçük (IIC/CIC benzeri) işitme cihazı — temsili görsel",
      width: 1254,
      height: 1254,
    },
    whatIs:
      "Kulak kanalının daha derinine yerleşen, tasarımı 'fark edilmemek' üzerine kurulu en küçük çözümlerdir. Her kulak yapısı bunlara uygun olmayabilir.",
    whoFor: ["Görünmezliğin en yüksek öncelik olduğu kullanıcılar", "Kulak kanalı yapısı uygun bulunanlar", "Kullanım için ince el becerisi bulunanlar"],
    highlights: ["Dışarıdan çok az fark edilir", "Kulak kanalı yapısına göre uygunluk değerlendirmesi gerekir", "Modele göre sınırlı bağlantı ve pil seçeneği"],
    priceFactors: ["Kişiye özel üretim", "Çok küçük gövdede yoğun teknoloji", "Uygunluk için ek değerlendirme ve ayar ihtiyacı"],
    href: "/isitme-cihazlari/gorunmez-cic/",
    linkLabel: "Uygunluğu birlikte değerlendirelim",
  },
  {
    id: "sarj-edilebilir",
    name: "Şarj Edilebilir Cihazlar",
    image: img("sarj-edilebilir", "Şarj kutusundaki şarj edilebilir işitme cihazları — temsili görsel"),
    whatIs: "Değiştirilebilir pil yerine dahili, yeniden şarj edilebilir pil kullanan cihazlardır; genellikle geceleri şarj kutusunda doldurulur.",
    whoFor: [
      "Küçük pilleri değiştirmekte zorlananlar",
      "Günlük şarj alışkanlığı kurmak isteyenler",
      "Pil takibiyle uğraşmak istemeyenler",
    ],
    highlights: ["Pil değiştirme derdi yok", "Şarj kutusu taşıma ve saklama kolaylığı", "Kulak arkası ve bazı diğer tiplerde bulunur"],
    priceFactors: ["Dahili pil ve şarj kutusu", "Pil kapasitesinin zamanla azalabilmesi", "Modele göre şarj süresi ve kullanım süresi farkları"],
    href: "/isitme-cihazlari/sarj-edilebilir/",
    linkLabel: "Şarjlı cihazları inceleyin",
  },
  {
    id: "bluetooth",
    name: "Bluetooth Özellikli Cihazlar",
    image: img("bluetooth-ozellikli", "Bluetooth özellikli işitme cihazları — temsili görsel"),
    whatIs: "Telefon, televizyon ve uyumlu cihazlarla kablosuz bağlantı kurabilen işitme cihazlarıdır.",
    whoFor: [
      "Telefonla sık konuşanlar",
      "Televizyon veya müzik sesini doğrudan cihazdan dinlemek isteyenler",
      "Uygulama üzerinden ayar yapmak isteyenler",
    ],
    highlights: ["Telefon ve TV sesini doğrudan aktarma", "Uygulama ile kontrol", "Modele göre farklı uyumluluk"],
    priceFactors: ["Ek donanım ve yazılım", "Uyumlu telefon ve aksesuar gereksinimleri", "Teknoloji seviyesi ile birlikte gelen diğer özellikler"],
    href: "/isitme-cihazlari/bluetooth-ozellikli/",
    linkLabel: "Bluetooth cihazları inceleyin",
  },
  {
    id: "cocuklara-yonelik",
    name: "Çocuklara Yönelik Çözümler",
    image: img("cocuklara-ozel", "Çocuklara yönelik işitme cihazı — temsili görsel"),
    whatIs: "Büyüyen kulağa, çocuğun kullanım güvenliğine ve dayanıklılığa göre seçilen ve ayarlanan işitme çözümleridir.",
    whoFor: ["Çocuk ve gençler", "Aile içi takip ve düzenli kontrol isteyen ebeveynler", "Çocuk işitme testi sonrası cihaz önerilenler"],
    highlights: ["Çocuğa uygun kalıp ve ayar", "Dayanıklı yapı", "Büyümeye bağlı düzenli kontrol"],
    priceFactors: ["Seçilen model ve özellikler", "Büyümeye bağlı kalıp yenileme ihtiyacı", "SGK desteğinin çocuklar için farklı uygulanması"],
    href: "/isitme-cihazlari/cocuklara-ozel/",
    linkLabel: "Çocuklara yönelik çözümler",
  },
];
