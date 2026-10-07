// "Satın almadan önce" — 7 uzun cevaplı soru (arama niyeti: karar aşaması),
// ve "çok düşük fiyatlı ürünler" bölümü. Cevapların ilk cümlesi GEO için
// doğrudan alıntılanabilir; devamı derinlik verir. "En iyi/en ucuz/en kaliteli"
// gibi mutlak hüküm yoktur — kullanıcı ihtiyacına göre değişen etkenler açıklanır.
// SSS'teki kısa cevaplarla (faq.ts) çakışmamak için burada karar mantığı
// anlatılır; orada doğrudan cevap verilir.
import type { GuideSectionMeta, QaItem } from "../../components/price-guide/price-guide.types";

export const buyingSection: GuideSectionMeta = {
  id: "satin-almadan-once",
  eyebrow: "Satın Almadan Önce",
  heading: "İşitme Cihazı Almadan Önce Sorulması Gereken 7 Soru",
  intro:
    "Fiyatı karşılaştırmadan önce, doğru soruları sormak daha değerlidir. Aşağıdaki cevaplar kararınızı kolaylaştırmak için bir çerçeve sunar.",
};

export const buyingQuestions: QaItem[] = [
  {
    id: "test-gerekir-mi",
    question: "İşitme cihazı almadan önce işitme testi gerekir mi?",
    answer:
      "Evet. Doğru cihaz tipi ve güç seviyesi, işitme kaybınızın derecesi ve biçimi bilinmeden belirlenemez; testsiz seçilen bir cihaz, ihtiyacınıza uymayabilir.",
    more: [
      "İşitme testi, hangi cihaz tipinin ve hangi teknoloji seviyesinin size uygun olduğunu göstererek, gereksiz özelliklere ödeme yapmanızı da önler. Avrasya İşitme'de işitme testi ücretsizdir.",
      "SGK desteğinden yararlanmak için gereken sağlık kurulu raporu ise ayrı bir süreçtir; ilgili sayfalarda adım adım anlatılmıştır.",
    ],
    links: [
      { label: "Ücretsiz işitme testi", href: "/degerlendirme/ucretsiz-isitme-testi/" },
      { label: "Odyometri nedir?", href: "/degerlendirme/odyometri/" },
    ],
  },
  {
    id: "deneme-yapilabilir-mi",
    question: "İşitme cihazı deneme yapılabilir mi?",
    answer:
      "Evet. Merkezimizde önerilen cihazı yaklaşık 20 dakikalık ücretsiz bir demoyla deneyebilirsiniz. Cihazı satın alarak 7 güne kadar da deneyebilir, uygun bulmazsanız iade edebilirsiniz; ödediğiniz tutar kesintisiz iade edilir. Kulak içi cihazlar 7 günlük deneme kapsamı dışındadır.",
    more: [
      "Merkezdeki demo ilk izlenimi verir; cihazın günlük hayatınızdaki konforunu ise satın alarak 7 güne kadar süren deneme sürecinde görebilirsiniz.",
    ],
    links: [{ label: "Cihaz deneme süreci", href: "/uygulama-ayar/cihaz-deneme/" }],
  },
  {
    id: "nelere-dikkat-edilmeli",
    question: "İşitme cihazı alırken nelere dikkat edilmeli?",
    answer:
      "Önce işitme değerlendirmesi, sonra ihtiyaca göre cihaz seçimi, deneme, uygulama ve satış sonrası desteğin birlikte ele alındığı bir süreç izlenmelidir; yalnızca marka veya rakama bakmak yetersizdir.",
    more: [
      "Ürünün orijinal olup olmadığını, garanti ve yetkili teknik servis desteğini, ayar ve kontrol randevularının nasıl işlediğini ve hangi hizmetlerin bedele dahil olduğunu sorun.",
      "Teklifleri aynı kalemler üzerinden karşılaştırın: aynı cihaz, aynı hizmet kapsamı, aynı garanti. Karar için acele etmeyin.",
    ],
    links: [
      { label: "Cihaz seçim rehberi", href: "/rehberler/cihaz-secim-rehberi/" },
      { label: "Orijinal ürün ve garanti", href: "/neden-orijinal/guvenilir-teknoloji/" },
    ],
  },
  {
    id: "en-ucuz-cihaz",
    question: "En ucuz işitme cihazı hangisi?",
    answer:
      "Herkes için geçerli tek bir 'en ucuz cihaz' yoktur; çünkü uygun cihaz, işitme kaybınıza ve ihtiyaçlarınıza göre değişir ve bedel cihaz tipi, teknoloji seviyesi ve özelliklerle birlikte oluşur.",
    more: [
      "İhtiyacınızı karşılamayan bir cihaz, düşük bedelli olsa bile beklenen faydayı sağlamayabilir. Bütçe önceliğiniz varsa bunu işitme testi sırasında söyleyin; ihtiyacınızı karşılayan, daha sade seçenekleri birlikte değerlendirelim.",
      "SGK desteği varsa, ödeyeceğiniz tutar cihaz bedeli ile SGK'nın karşıladığı tutar arasındaki farktır; bu da seçiminizi etkiler.",
    ],
    links: [
      { label: "Ekonomik seri işitme cihazları", href: "/segmentler/ekonomik-seri/" },
      { label: "SGK ödemesi rehberi", href: "/sgk-isitme-cihazi-odemesi/" },
    ],
  },
  {
    id: "pahali-cihaz-daha-iyi-mi",
    question: "Pahalı işitme cihazı daha mı iyi?",
    answer:
      "Her zaman değil. Daha yüksek teknoloji seviyesi genellikle daha fazla ses işleme ve bağlantı özelliği demektir; ancak en uygun cihaz, bu özelliklere gerçekten ihtiyaç duyduğunuz cihazdır.",
    more: [
      "Sakin ortamlarda yaşayan ve sade kullanım isteyen bir kullanıcı için üst seviye özelliklerin faydası sınırlı kalabilir. Yoğun sosyal ve iş hayatı olan biri için ise bu özellikler günlük konforu belirgin biçimde artırabilir.",
      "Bu yüzden 'pahalı mı ucuz mu?' yerine 'hangi özellik benim hayatımda ne kadar yer tutuyor?' sorusu sorulmalıdır.",
    ],
    links: [
      { label: "Standart seri", href: "/segmentler/standart-seri/" },
      { label: "Premium seri", href: "/segmentler/premium-seri/" },
    ],
  },
  {
    id: "tek-cift-kulak",
    question: "Tek kulak mı, çift kulak mı?",
    answer:
      "İki kulakta da işitme kaybı varsa çoğu durumda iki cihaz kullanmak önerilir; ancak bu karar işitme testinin sonucuna göre verilir.",
    more: [
      "İki kulakla duymak; sesin yönünü anlamayı ve kalabalıkta konuşmayı takip etmeyi genellikle kolaylaştırır. Bu yüzden iki kulakta kayıp varken tek cihazla yetinmek her zaman en iyi sonucu vermeyebilir.",
      "Toplam bedel iki cihaza göre şekillenir. SGK desteğinin iki kulak için nasıl uygulandığı rapora ve güncel düzenlemeye bağlıdır; ayrıntıyı SGK rehberimizde bulabilirsiniz.",
    ],
    links: [{ label: "SGK ödemesi rehberi", href: "/sgk-isitme-cihazi-odemesi/" }, { label: "Tek taraflı işitme kaybı", href: "/ihtiyaciniza-gore/tek-tarafli-isitme-kaybi/" }],
  },
  {
    id: "sarjli-mi-pilli-mi",
    question: "Şarjlı mı, pilli mi?",
    answer:
      "İkisi de doğru olabilir: şarjlı cihaz pil değiştirme ihtiyacını ortadan kaldırır; pilli cihaz ise yedek pille her yerde kolayca kullanılabilir.",
    more: [
      "El becerisi, günlük rutin, seyahat sıklığı ve cihaz tipi kararı belirler. Şarjlı cihazlarda şarj kutusunu yanınızda taşımak ve pilin yıllar içinde azalabilen kapasitesi de göz önüne alınmalıdır.",
      "Karşılaştırma tablosunda iki seçeneği yan yana görebilirsiniz.",
    ],
    links: [{ label: "Şarjlı cihazlar", href: "/isitme-cihazlari/sarj-edilebilir/" }, { label: "Tabloya git", href: "#sarjli-pilli-tablosu" }],
  },
];

export const lowPriceSection: GuideSectionMeta = {
  id: "dusuk-fiyatli-urunler",
  eyebrow: "Çok Düşük Fiyatlı Ürünler",
  heading: "Çok Düşük Fiyatlı Ürünler Hakkında Bilmeniz Gerekenler",
  intro:
    "Aramalarda çıkan her 'işitme cihazı', işitme kaybınıza göre ayarlanan bir tıbbi cihaz değildir. Farkı bilmek, hem bütçenizi hem de işitme sağlığınızı korur.",
};

export const lowPricePoints = [
  {
    title: "Ses yükseltici ile işitme cihazı aynı şey değildir",
    text: "Kişisel ses yükselticiler (amplifikatörler) sesi genel olarak yükseltir; işitme kaybınıza göre kişiye özel ayarlanmaz. İşitme cihazı ise işitme testi sonuçlarına göre programlanır.",
  },
  {
    title: "Ayarsız cihaz konfor sağlamayabilir",
    text: "Kişisel ayar yapılmayan bir cihazda konuşma yeterince anlaşılır olmayabilir ya da sesler rahatsız edici gelebilir. Doğru ayar, faydanın büyük kısmını belirler.",
  },
  {
    title: "Orijinal ürün, garanti ve servis",
    text: "Ürünün orijinal olup olmadığını, garanti belgesini ve yetkili teknik servisi sorun. Orijinal ürünlerde garanti, resmi teknik servis ve yasal güvenceler fiyata dahildir.",
  },
  {
    title: "Deneme ve takip var mı?",
    text: "Deneme imkânı, kontrol randevuları ve ayar desteği olmayan bir satın alma, düşük bedeline rağmen kullanım boyunca daha pahalıya gelebilir.",
  },
];

export const lowPriceLinks = [
  { label: "Orijinal ürün ve garanti", href: "/neden-orijinal/guvenilir-teknoloji/" },
  { label: "Cihaz deneme süreci", href: "/uygulama-ayar/cihaz-deneme/" },
];
