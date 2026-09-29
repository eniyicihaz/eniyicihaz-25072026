// Marka × kullanım senaryosu (L), "Marka mı model mi?" (M) ve "Markaları
// karşılaştırırken sorulması gerekenler" (N).
//
// Hiçbir bölümde bir markayı "kazanan" ilan etme yoktur: her senaryo KRİTER
// verir ve sitemizdeki doğrulanmış marka verisinden hangi model ailelerinin
// bu senaryoda anıldığını gösterir. Model ailesi bilgisi marka sayfalarından
// (src/data/{marka}/models.ts, overview, ideal-user) gelir; teknik özelliklerde
// "modele göre değişir" temkini korunur.
import {
  Smartphone, Tv, Users, Activity, EarOff, BatteryCharging, Baby, Volume2,
  Gauge, Bluetooth, Sliders, Wrench, Sparkles, Layers, Package, Ruler,
} from "lucide-astro";
import type { GuideCard, GuideSectionMeta, QaItem } from "../../components/price-guide/price-guide.types";

/* ---------- L. Marka + kullanım senaryosu ---------- */
export const scenarioSection: GuideSectionMeta = {
  id: "marka-senaryo",
  eyebrow: "Marka ve Kullanım Senaryosu",
  heading: "Kullanım Senaryosuna Göre Hangi Markalar Değerlendirilebilir?",
  intro:
    "Her senaryoda önce kriteri, sonra o kriterle ilişkili model ailelerini görüyorsunuz. Bu bir sıralama değil; farklı markaların farklı yaklaşımlarının hangi ihtiyaca yaklaşabileceğini gösteren bir başlangıç. Kesin öneri işitme değerlendirmesinden sonra yapılır.",
};

export const scenarioCards: GuideCard[] = [
  {
    icon: Smartphone,
    tag: "Telefon kullananlar",
    title: "Telefon bağlantısı öncelikliyse",
    text: "Kriter: cihazın sizin telefonunuzla uyumu. Altı ana markanın model ailelerinin büyük çoğunluğu Bluetooth etiketlidir; Phonak'ın marka verisinde evrensel Bluetooth (iPhone + Android), ReSound'da Auracast ve Smart 3D uygulaması, Widex'te Widex Moment uygulaması öne çıkar. Uyumluluk modele göre değişir.",
    href: "/isitme-cihazlari/bluetooth-ozellikli/",
    linkLabel: "Bluetooth özellikli cihazlar",
  },
  {
    icon: Tv,
    tag: "Televizyon izleyenler",
    title: "Televizyon sesi önemliyse",
    text: "Kriter: televizyona doğrudan mı yoksa aksesuarla mı bağlanıldığı. Bu, markadan çok modele ve aksesuara bağlıdır; markaların kablosuz bağlantı yaklaşımı farklıdır. Aksesuar gereksinimini seçtiğiniz modelde sorun.",
    href: "/teknolojiler/kablosuz-baglanti/",
    linkLabel: "Kablosuz bağlantı",
  },
  {
    icon: Users,
    tag: "Kalabalık ortamlar",
    title: "Kalabalıkta konuşmayı takip etmek öncelikliyse",
    text: "Kriter: gürültü yönetiminin kapsamı. Widex SmartRIC arka plan gürültüsünü azaltmaya yönelik özel mikrofon yerleşimiyle, Oticon yapay zekâ destekli işleme ile, ReSound M&RIE ile mekansal işitmeyi öne çıkarma yaklaşımıyla, Phonak konuşma odaklı işleme ile anılır. Kapsam model seviyesine göre değişir.",
    href: "/teknolojiler/gurultu-engelleme/",
    linkLabel: "Gürültü engelleme",
  },
  {
    icon: Activity,
    tag: "Aktif çalışanlar",
    title: "Hareketli ve aktif bir günlük yaşamınız varsa",
    text: "Kriter: dayanıklılık, şarj ve rahat kullanım. Signia Active kulaklık benzeri, spor ve aktif kullanım için tasarlanmış bir aile olarak anılır; Phonak'ın marka yaklaşımı aktif ve bağlantıda kalmak isteyen kullanıcılara odaklanır. Koruma sınıfı ve şarj süresi modele göre değişir.",
    href: "/ihtiyaciniza-gore/aktif-yasam-icin-cihazlar/",
    linkLabel: "Aktif yaşam için cihazlar",
  },
  {
    icon: EarOff,
    tag: "Küçük cihaz isteyenler",
    title: "Cihazın küçük olmasını istiyorsanız",
    text: "Kriter: kulak yapınızın kulak içi cihaza uygunluğu. Sitemizde kulak içi seçeneği anılan aileler Oticon Own SI, Phonak Virto, Signia Insio ve Silk, Starkey NuEar Miniscopic Synergy iQ'dur. Küçük boyut bazı özellikleri sınırlayabilir.",
    href: "/isitme-cihazlari/gorunmez-cic/",
    linkLabel: "Görünmez cihazlar",
  },
  {
    icon: BatteryCharging,
    tag: "Şarj tercih edenler",
    title: "Pil değiştirmek yerine şarj etmek istiyorsanız",
    text: "Kriter: hangi ailelerin şarjlı olduğu ve kullanım süresi. Altı ana markanın hepsinde şarjlı etiketli aileler vardır; ancak her aile şarjlı değildir. Marka sayfasında ve değerlendirmede modelin şarjlı sürümünü doğrulayın.",
    href: "/isitme-cihazlari/sarj-edilebilir/",
    linkLabel: "Şarjlı cihazlar",
  },
  {
    icon: Baby,
    tag: "Çocuk kullanıcılar",
    title: "Çocuğunuz için çözüm arıyorsanız",
    text: "Kriter: pediatrik olarak geliştirilmiş aileler ve düzenli takip. Sitemizde çocuğa yönelik olarak Oticon Play PX, Opn Play ve Xceed Play ile Phonak Sky yer alıyor. Uygun çözüm çocuğun değerlendirme sonuçlarına göre uzman ekiple belirlenir.",
    href: "/isitme-cihazlari/cocuklara-ozel/",
    linkLabel: "Çocuklara özel cihazlar",
  },
  {
    icon: Volume2,
    tag: "Güçlü kayıplar",
    title: "Daha güçlü amplifikasyon gerekiyorsa",
    text: "Kriter: cihazın güç aralığı. Sitemizde ileri derece kayıplar için değerlendirilebilecek aileler arasında Phonak Naída, Oticon Xceed, Widex Beyond ve ReSound ENZO Q anılıyor. Uygunluk işitme testinizin sonucuna göre belirlenir.",
    href: "/ihtiyaciniza-gore/ileri-derece-isitme-kaybi/",
    linkLabel: "İleri derece işitme kaybı",
  },
];

/* ---------- M. Marka mı model mi? ---------- */
export const brandVsModelSection: GuideSectionMeta = {
  id: "marka-mi-model-mi",
  eyebrow: "Marka mı Model mi?",
  heading: "İşitme Cihazında Marka mı, Model mi Daha Önemli?",
  intro:
    "Marka bir yaklaşımı, model ise sizin kulağınıza ve yaşamınıza gelen gerçek ürünü anlatır. Aşağıdaki üç soru, iki kavram arasındaki farkı ve karar verirken nelere bakılacağını özetler.",
};

export const brandVsModel: QaItem[] = [
  {
    id: "marka-tek-basina-yeterli-mi",
    question: "Marka tek başına yeterli mi?",
    answer:
      "Hayır; marka bir başlangıç noktasıdır, tek başına karar ölçütü değildir. Aynı markanın içinde bile farklı cihaz tipleri, teknoloji seviyeleri ve özellikler bulunur.",
    more: [
      "Örneğin Phonak'ın Audéo, Naída ve CROS aileleri çok farklı ihtiyaçlara yöneliktir; Oticon'un Intent ile Xceed'i de farklı kullanıcı profillerine hitap eder. Bu yüzden 'hangi marka' sorusu, 'hangi marka ailesindeki hangi model' sorusuna dönüşmelidir.",
    ],
    links: [{ label: "Oticon modelleri", href: "/markalar/oticon/" }, { label: "Phonak modelleri", href: "/markalar/phonak/" }],
  },
  {
    id: "model-onemi",
    question: "Cihaz modelinin önemi nedir?",
    answer:
      "Model; cihazın tipini, güç aralığını, bağlantı ve şarj özelliklerini ve kullanım kolaylığını belirler. Yani işitme kaybınıza ve yaşamınıza uyup uymadığını asıl belirleyen, marka değil modeldir.",
    more: [
      "Aynı marka içinde hem şarjlı hem pilli, hem RIC hem kulak içi, hem genel kullanıma hem güçlü kayıplara yönelik aileler bulunabilir. Bu nedenle model, marka sayfasındaki ailelere ve işitme değerlendirmenizin sonucuna göre seçilir.",
    ],
    links: [{ label: "Cihaz türleri", href: "/isitme-cihazlari/" }],
  },
  {
    id: "model-secerken-ozellikler",
    question: "Model seçerken hangi özelliklere bakılır?",
    answer:
      "Cihaz tipi, işitme kaybınıza uygun güç, Bluetooth ve telefon uyumluluğu, şarj veya pil, uygulama ve ayar, kullanım kolaylığı ile servis desteği; model seçerken bakılacak temel başlıklardır.",
    more: [
      "Bu başlıkların hangisinin sizin için öncelikli olduğu, günlük yaşamınıza bağlıdır. Öncelikleriniz netleştikten sonra markaların model ailelerinde bu özelliklerin nasıl karşılandığı karşılaştırılır.",
    ],
    links: [{ label: "Cihaz seçim rehberi", href: "/rehberler/cihaz-secim-rehberi/" }],
  },
];

/* ---------- N. Markaları karşılaştırırken sorulması gerekenler ---------- */
export const askSection: GuideSectionMeta = {
  id: "sorulacak-sorular",
  eyebrow: "Sorulacak Sorular",
  heading: "Markaları Karşılaştırırken Sorulması Gereken On Soru",
  intro:
    "Bir markaya ya da modele karar vermeden önce aşağıdaki soruları sorun. Yanıtlar, markaların birbirinden gerçekte nerede ayrıldığını gösterir.",
};

export const askCards: GuideCard[] = [
  { icon: Gauge, title: "İşitme kaybım için uygun güç var mı?", text: "Modelin güç aralığının sizin işitme testi sonucunuza uyup uymadığını sorun; bu, marka sıralamasından önce gelir." },
  { icon: Smartphone, title: "Telefonumla uyumlu mu?", text: "Kendi telefon modelinizle bağlantının nasıl kurulduğunu ve hangi işlevlerin çalıştığını değerlendirmede birlikte doğrulayın." },
  { icon: Bluetooth, title: "Bluetooth ne sağlıyor?", text: "Arama, müzik ve televizyon sesinin nasıl aktarıldığını; ek aksesuar gerekip gerekmediğini öğrenin." },
  { icon: BatteryCharging, title: "Şarjlı mı, pilli mi?", text: "Modelin şarjlı sürümü olup olmadığını, bir şarjın ne kadar kullanım sağladığını ve pil değişim sıklığını sorun." },
  { icon: Layers, title: "Cihaz tipi hangisi?", text: "RIC, kulak arkası veya kulak içi: kulak yapınıza ve kullanım kolaylığı beklentinize hangisi uyuyor?" },
  { icon: Sliders, title: "Uygulama ne yapıyor?", text: "Ses ve program ayarlarını kendiniz yapabilir misiniz, uzaktan destek var mı; markanın uygulaması neler sunuyor?" },
  { icon: Wrench, title: "Servis nasıl işliyor?", text: "Bakım, onarım, yedek cihaz ve garanti koşullarının merkezde nasıl yürütüldüğünü öğrenin.", href: "/servis-bakim/teknik-servis/", linkLabel: "Teknik servis" },
  { icon: Package, title: "Aksesuar gerekiyor mu?", text: "Televizyon, mikrofon veya şarj gibi aksesuarların ayrıca gerekip gerekmediğini ve nasıl temin edildiğini sorun.", href: "/servis-bakim/pil-aksesuar/", linkLabel: "Pil ve aksesuar" },
  { icon: Sparkles, title: "Deneyebilir miyim?", text: "Modeli günlük ortamınızda denemek mümkün mü ve koşulları nelerdir? Deneme, marka kararını gerçek deneyimle destekler.", href: "/uygulama-ayar/cihaz-deneme/", linkLabel: "Cihaz deneme" },
  { icon: Ruler, title: "Ayar ve takip nasıl olacak?", text: "İlk ayarın nasıl yapıldığını, kaç kontrol randevusu olduğunu ve zamanla nasıl güncellendiğini sorun.", href: "/uygulama-ayar/kisiye-ozel-ayar/", linkLabel: "Kişiye özel ayar" },
];
