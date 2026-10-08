// "İşitme cihazı türleri" — 8 profil. Her profil şu soruları cevaplar: nedir,
// nasıl kullanılır, ne kadar görünür, kullanımı ne kadar kolay, güç/kullanım
// kapsamı, kimler için değerlendirilebilir, nelere dikkat edilmeli.
//
// Tıbbi kesinlik yoktur: "genellikle", "modele göre", "değerlendirme sonrası"
// ifadeleri bilinçlidir (PRINCIPLES.md §5). Hiçbir profilde fiyat yoktur.
// Fiyat perspektifiyle yazılmış karşılığı /isitme-cihazi-fiyatlari/ sayfasındadır
// (orada "fiyatı ne belirler" sorusuna cevap verilir); burada "bu cihaz nedir,
// nasıl kullanılır, bana uyar mı" sorusuna cevap verilir.
//
// Görseller: mevcut, metinsiz, TEMSİLİ cihaz görselleri — marka/model iddiası
// taşımaz.
import type { GuideSectionMeta } from "../../components/price-guide/price-guide.types";
import type { TypeProfile } from "../../components/device-guide/device-guide.types";

const compare = (slug: string, alt: string) => ({
  src: `/images/homepage/device-comparison/device-comparison-${slug}.webp`,
  alt,
  width: 1254,
  height: 1254,
});

export const typesSection: GuideSectionMeta = {
  id: "cihaz-turleri",
  eyebrow: "Cihaz Türleri",
  heading: "İşitme Cihazı Çeşitleri: Kulak Arkası, RIC, Kulak İçi ve Görünmez Cihazlar",
  intro:
    "İşitme cihazı türlerini birbirinden ayıran temel şey, cihazın kulakta nerede durduğudur. Bu yerleşim; görünürlüğü, kullanım kolaylığını ve hangi özelliklerin yer alabileceğini değiştirir. Aşağıdaki sekiz profil, en çok araştırılan türleri aynı sorularla anlatır.",
};

export const typeProfiles: TypeProfile[] = [
  {
    id: "kulak-arkasi-bte",
    name: "Kulak Arkası İşitme Cihazı (BTE)",
    alias: "BTE — Behind-the-Ear",
    image: compare("kulak-arkasi-bte", "Kulak arkası (BTE) tipi işitme cihazı — temsili görsel"),
    whatIs:
      "Kulak arkası cihaz, gövdesi kulağın arkasına oturan ve sesi ince bir tüp ile kulak kalıbına ileten cihaz ailesidir. Elektronik bileşenlerin çoğu gövdede bulunur.",
    facts: {
      howUsed: "Gövde kulağın arkasına takılır; tüp ve kulak kalıbı (veya uç) kulağa yerleştirilir.",
      visibility: "Kulak arkasında görünür; renk ve boyut modele göre değişir.",
      ease: "Genellikle takıp çıkarması ve temizliği kolaydır; düğmeleri ve bölmeleri büyüktür.",
      scope: "Geniş bir işitme kaybı aralığında kullanılabilir; ileri düzeyde kayıplar için de seçenek sunar.",
    },
    whoFor: [
      "Geniş bir işitme kaybı aralığına uygun cihaz arayanlar",
      "Kolay kullanım ve bakım isteyenler",
      "Çocuklar ve el becerisi kısıtlı kullanıcılar",
    ],
    watch: [
      "Gözlük ve maske ile kulak çevresinde yer paylaşımı olabilir",
      "Kulak kalıbı gerekiyorsa üretim ve deneme süreci eklenir",
    ],
    href: "/isitme-cihazlari/kulak-arkasi-bte/",
    linkLabel: "Kulak arkası cihazları inceleyin",
  },
  {
    id: "tur-ric-rite",
    name: "RIC / RITE İşitme Cihazı",
    alias: "Receiver-in-Canal / Receiver-in-the-Ear",
    // Ürün görseli, olduğu gibi: 1254 × 1254 (1:1), WebP.
    image: {
      src: "/images/price-guide/device-type-ric-rite.webp",
      alt: "RIC/RITE tipi işitme cihazı — temsili görsel",
      width: 1254,
      height: 1254,
    },
    whatIs:
      "RIC (RITE) cihazda gövde kulak arkasında, hoparlör (alıcı) ise kulak kanalının içindedir; ikisi ince bir kabloyla bağlanır. Bu yüzden klasik kulak arkası cihaza göre daha ince ve hafif görünür.",
    facts: {
      howUsed: "İnce gövde kulak arkasına, alıcı ise uç veya kalıpla kulak kanalına takılır.",
      visibility: "Genellikle az fark edilir; ince kablo kulak çevresinden geçer.",
      ease: "Kolay–orta; alıcı ucunun temizliği ve değişimi düzenli dikkat ister.",
      scope: "Hafiften ileri düzeye uzanan geniş aralıkta (alıcı gücüne ve modele göre) kullanılır.",
    },
    whoFor: [
      "Az görünen ama geniş özellik seçeneği olan bir cihaz isteyenler",
      "Doğal ses algısına önem verenler",
      "Modele göre şarjlı ve Bluetooth seçeneklerini arayanlar",
    ],
    watch: [
      "Alıcı ucunun kulak yapınıza uygunluğu değerlendirilmelidir",
      "Alıcı bölümü kulak kanalında olduğu için temizliğine özen gerekir",
    ],
    href: "#ric-rite",
    linkLabel: "RIC / RITE'yi ayrıntılı okuyun",
  },
  {
    id: "kulak-ici-ite",
    name: "Kulak İçi İşitme Cihazı (ITE)",
    alias: "ITE — In-the-Ear",
    image: compare("kulak-ici-ite", "Kulak içi (ITE) tipi işitme cihazı — temsili görsel"),
    whatIs:
      "Kulak içi cihaz, kulak kepçesinin ve kanalının içine oturacak biçimde kişinin kulak ölçüsüne göre üretilen cihazdır. Tüm bileşenler tek bir kabuğun içindedir.",
    facts: {
      howUsed: "Cihaz doğrudan kulağa yerleştirilir; kulak arkasında gövde bulunmaz.",
      visibility: "Kulak kepçesinde görünür ancak kulak arkası cihaza göre dengeli bir görünüm sunar.",
      ease: "Orta; küçük düğmeler ve yerleştirme ince el becerisi isteyebilir.",
      scope: "Genellikle hafif–orta kayıplarda; bazı modellerde daha ileri kayıplarda da değerlendirilir.",
    },
    whoFor: [
      "Kulak arkasında cihaz istemeyenler",
      "Kulak yapısı bu tipe uygun bulunanlar",
      "Telefon görüşmelerinde doğal kulak konumunu tercih edenler",
    ],
    watch: [
      "Kulak yapısına göre üretildiği için uygunluk değerlendirmesi gerekir",
      "Kulakta kulak kiri ve nem birikimine karşı düzenli bakım önemlidir",
    ],
    href: "/isitme-cihazlari/kulak-ici-ite/",
    linkLabel: "Kulak içi cihazları inceleyin",
  },
  {
    id: "itc",
    name: "Yarım Kanal İçi (ITC)",
    alias: "ITC — In-the-Canal",
    // Gerçek temsili ürün görseli, olduğu gibi: 1254 × 1254 (1:1), WebP.
    image: {
      src: "/images/device-guide/device-type-itc.webp",
      alt: "ITC tipi kulak içi işitme cihazı — temsili görsel",
      width: 1254,
      height: 1254,
    },
    whatIs:
      "ITC cihaz, kulak kanalının girişine yerleşen ve kulak kepçesinde küçük bir kısmı görünen kulak içi cihazdır. Boyut olarak kulak içi (ITE) ile kanal içi (CIC) arasında yer alır.",
    facts: {
      howUsed: "Kulak kanalının girişine yerleştirilir; çoğu modelde küçük bir tutma yüzeyi bulunur.",
      visibility: "Kulak içi cihazdan az, kanal içi cihazdan biraz daha görünür.",
      ease: "Orta; küçük boyut ince el becerisi ister.",
      scope: "Genellikle hafif–orta kayıplarda değerlendirilir; boyut arttıkça özellik seçeneği artabilir.",
    },
    whoFor: [
      "Az görünen ama çok küçük olmayan bir kulak içi seçenek arayanlar",
      "Kulak kanalı yapısı uygun bulunanlar",
    ],
    watch: [
      "Küçük gövde nedeniyle pil ve özellik seçenekleri modele göre sınırlı olabilir",
      "Uygunluk kulak ölçüsüne bağlıdır; değerlendirme gerekir",
    ],
  },
  {
    id: "cic",
    name: "Kanal İçi İşitme Cihazı (CIC)",
    alias: "CIC — Completely-in-Canal",
    image: compare("gorunmez-cic", "Kanal içi (CIC) tipi işitme cihazı — temsili görsel"),
    whatIs:
      "CIC cihaz, tamamen kulak kanalının içine yerleşen küçük cihazdır. Kulak kepçesinden bakıldığında genellikle yalnızca ince bir çıkarma teli görünür.",
    facts: {
      howUsed: "Kulak kanalına yerleştirilir; çıkarılırken çıkarma teli kullanılır.",
      visibility: "Çoğu zaman dışarıdan neredeyse fark edilmez.",
      ease: "İnce el becerisi gerektirebilir; küçük parçalar dikkatle taşınmalıdır.",
      scope: "Genellikle hafif–orta kayıplarda; gövde küçük olduğundan bağlantı ve pil seçenekleri sınırlı olabilir.",
    },
    whoFor: [
      "Görünmezliğe öncelik verenler",
      "Kulak kanalı yapısı uygun bulunanlar",
      "El becerisi bu boyuta uygun olanlar",
    ],
    watch: [
      "Küçük gövdede tek mikrofon veya sınırlı düğme gibi kısıtlar olabilir",
      "Her kulak yapısı bu tipe uygun olmayabilir",
    ],
    href: "/isitme-cihazlari/gorunmez-cic/",
    linkLabel: "Görünmez cihazları inceleyin",
  },
  {
    id: "iic",
    name: "Görünmez İşitme Cihazı (IIC)",
    alias: "IIC — Invisible-in-Canal",
    // Ürün görseli (parmak üstünde ölçek gösteren yakın çekim), olduğu gibi: 1254 × 1254 (1:1), WebP.
    image: {
      src: "/images/price-guide/device-type-gorunmez-cok-kucuk.webp",
      alt: "Kulak kanalının derinine yerleşen çok küçük (IIC/CIC benzeri) işitme cihazı — temsili görsel",
      width: 1254,
      height: 1254,
    },
    whatIs:
      "IIC cihaz, kulak kanalının daha derinine yerleşen ve doğru takıldığında dışarıdan görünmeyecek şekilde tasarlanan en küçük cihaz türüdür.",
    facts: {
      howUsed: "Kulak kanalının derinine, ölçüye göre üretilmiş kabukla yerleştirilir.",
      visibility: "Doğru yerleştirildiğinde dışarıdan görünmesi hedeflenir.",
      ease: "Yerleştirme ve çıkarma ince beceri gerektirir; küçük parçalarla dikkatli olunmalıdır.",
      scope: "Genellikle daha hafif kayıplarda; küçük boyut nedeniyle özellik ve pil seçenekleri sınırlı olabilir.",
    },
    whoFor: [
      "Görünmezliğin en yüksek öncelik olduğu kullanıcılar",
      "Kulak kanalı yapısı buna uygun bulunanlar",
    ],
    watch: [
      "Her kulak kanalı bu tipe uygun olmayabilir; uygunluk ayrıca değerlendirilir",
      "Küçük boyut, Bluetooth ve düğme gibi özellikleri sınırlayabilir",
    ],
    href: "#gorunmez",
    linkLabel: "Görünmez cihazları ayrıntılı okuyun",
  },
  {
    id: "sarj-edilebilir",
    name: "Şarj Edilebilir İşitme Cihazları",
    alias: "Değiştirilebilir pil yerine dahili şarjlı pil",
    image: compare("sarj-edilebilir", "Şarj kutusundaki şarj edilebilir işitme cihazları — temsili görsel"),
    whatIs:
      "Şarj edilebilir cihazlar, küçük pil değiştirmek yerine dahili bataryayı şarj kutusunda dolduran cihazlardır. Şarj, bir 'tür' değil bir özelliktir; kulak arkası ve bazı diğer tiplerde bulunabilir.",
    facts: {
      howUsed: "Gün sonunda cihazlar şarj kutusuna konur; sabah dolu olarak takılır.",
      visibility: "Görünürlük, cihazın türüne (kulak arkası, RIC vb.) bağlıdır.",
      ease: "Küçük pil değiştirmeyi gerektirmediği için bazı kullanıcılar için kolaydır.",
      scope: "Kullanım süresi ve şarj süresi modele göre değişir; her türde şarjlı seçenek bulunmayabilir.",
    },
    whoFor: [
      "Küçük pilleri değiştirmekte zorlananlar",
      "Günlük şarj alışkanlığı edinmek isteyenler",
    ],
    watch: [
      "Şarj kutusunu unutmamak ve seyahatte yanına almak gerekir",
      "Batarya kapasitesi zamanla azalabilir",
    ],
    href: "/isitme-cihazlari/sarj-edilebilir/",
    linkLabel: "Şarjlı cihazları inceleyin",
  },
  {
    id: "cocuk",
    name: "Çocuklara Yönelik İşitme Cihazları",
    alias: "Büyüyen kulağa uygun çözümler",
    image: compare("cocuklara-ozel", "Çocuklara yönelik işitme cihazı — temsili görsel"),
    whatIs:
      "Çocuklar için seçilen işitme cihazları; büyüyen kulağa, güvenli kullanıma ve dayanıklılığa göre belirlenir. Çocuğun uygun cihazı, çocuk işitme değerlendirmesi sonrasında konuşulur.",
    facts: {
      howUsed: "Genellikle kulak arkası yapıdadır; çocuğa uygun kalıp ve ayarla, aile takibiyle kullanılır.",
      visibility: "Çocuğun tercihine göre renk ve tasarım seçenekleri olabilir.",
      ease: "Ebeveynin takıp çıkarmasına, pil veya şarj takibine yardımcı olacak özellikler öne çıkar.",
      scope: "Kullanılacak model ve ayar, çocuğun değerlendirme sonuçlarına ve gelişim ihtiyacına göre belirlenir.",
    },
    whoFor: [
      "İşitme değerlendirmesi sonrası cihaz önerilen çocuk ve gençler",
      "Düzenli kontrol ve aile desteği sağlayabilen ebeveynler",
    ],
    watch: [
      "Büyümeye bağlı olarak kalıp ve ayar düzenli yenilenmelidir",
      "Kullanım takibi ve aile-ekip iletişimi süreç için önemlidir",
    ],
    href: "/isitme-cihazlari/cocuklara-ozel/",
    linkLabel: "Çocuklara yönelik çözümler",
  },
];
