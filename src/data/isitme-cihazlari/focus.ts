// Üç konu odaklı SEO bölümü: RIC/RITE nedir?, Görünmez cihazlar (CIC/IIC),
// Çocuklar için. Her biri FocusBlock ile çizilir; H2'yi GuideSection verir.
// Görseller mevcut, olduğu gibi kullanılan temsili görsellerdir; teknik
// iddialar genel ve temkinlidir, doğrulanmamış model özelliği yoktur.
// Çocuklarda tıbbi karar verilmez: değerlendirme, uygun cihaz, kullanım
// takibi ve aile desteği süreci anlatılır.
import type { GuideSectionMeta } from "../../components/price-guide/price-guide.types";
import type { FocusBlockContent } from "../../components/device-guide/device-guide.types";

/* ---------- K. RIC / RITE ---------- */
export const ricSection: GuideSectionMeta = {
  id: "ric-rite",
  eyebrow: "RIC / RITE",
  heading: "RIC ve RITE İşitme Cihazı Nedir?",
  intro:
    "RIC ve RITE, aynı cihaz yapısını anlatan iki kısaltmadır. Sık aranan bu türü, adından yapısına kadar tek bölümde topladık.",
};

export const ric: FocusBlockContent = {
  image: {
    src: "/images/price-guide/device-type-ric-rite.webp",
    alt: "RIC/RITE tipi işitme cihazı — temsili görsel",
    width: 1254,
    height: 1254,
  },
  lead:
    "RIC (Receiver-in-Canal) veya RITE (Receiver-in-the-Ear), gövdesi kulak arkasında, hoparlörü (alıcı) ise kulak kanalının içinde bulunan ince bir kulak arkası cihaz türüdür.",
  paragraphs: [
    "Klasik kulak arkası cihazda ses, gövdeden ince bir tüple kulağa gelir. RIC'te ise hoparlör kulak kanalına taşınmış, gövdeye ince bir kabloyla bağlanmıştır. Bu yapı gövdeyi küçültür ve genellikle daha az fark edilen bir görünüm sağlar.",
    "Alıcı, kulak kanalına standart bir uçla veya kişiye özel kalıpla yerleştirilir; hangisinin uygun olduğu kulak yapınıza ve işitme kaybınıza göre belirlenir. Alıcının gücü de değiştirilebildiği için tek gövde farklı kayıp düzeylerine uyarlanabilir.",
  ],
  columns: [
    {
      title: "Yapısı",
      items: ["Kulak arkasında ince gövde", "İnce kablo ve kulak kanalında alıcı", "Uç veya kalıp ile yerleşim"],
    },
    {
      title: "Kimler için değerlendirilebilir?",
      items: [
        "Az görünen ama geniş özellik seçeneği isteyenler",
        "Modele göre şarjlı veya Bluetooth seçeneği arayanlar",
        "Gözlük kullanıp kulak çevresinde yer paylaşımını azaltmak isteyenler",
      ],
    },
    {
      title: "Dikkat edilecekler",
      items: [
        "Alıcı kulak kanalında olduğu için düzenli temizlik önemlidir",
        "Kulak yapınıza uygun uç/kalıp seçimi değerlendirme ister",
      ],
    },
  ],
  note: "Farklı markalar aynı yapıya farklı adlar verebilir; 'RIC', 'RITE' ve 'alıcısı kulakta' gibi ifadeler çoğu zaman aynı türü anlatır.",
  links: [
    { label: "Kulak arkası cihazlar", href: "/isitme-cihazlari/kulak-arkasi-bte/" },
    { label: "Şarjlı cihazlar", href: "/isitme-cihazlari/sarj-edilebilir/" },
  ],
};

/* ---------- L. Görünmez cihazlar ---------- */
export const invisibleSection: GuideSectionMeta = {
  id: "gorunmez",
  eyebrow: "Görünmez Cihazlar",
  heading: "Görünmez İşitme Cihazları: CIC ve IIC Nedir?",
  intro:
    "Görünmez cihaz, kulak kanalının içine yerleşen ve dışarıdan çok az fark edilen çözümleri anlatır. Bu bölüm, iki küçük türü ve dikkat edilecekleri açıklar.",
};

export const invisible: FocusBlockContent = {
  image: {
    src: "/images/price-guide/device-type-gorunmez-cok-kucuk.webp",
    alt: "Parmak ucunda duran çok küçük kulak içi işitme cihazları — temsili görsel",
    width: 1254,
    height: 1254,
  },
  lead:
    "Görünmez işitme cihazları; kulak kanalının içine yerleşen CIC (kanal içi) ve daha derine yerleşen IIC (görünmez kanal içi) türlerini kapsar ve dışarıdan çok az fark edilmeyi hedefler.",
  paragraphs: [
    "CIC, kulak kanalının içinde durur; çoğu zaman yalnızca ince bir çıkarma teli görünür. IIC ise kanalın daha derinine yerleştirilir ve doğru takıldığında dışarıdan görünmemesi amaçlanır. İkisi de kişinin kulak ölçüsüne göre üretilir.",
    "Küçük boyutun bir bedeli olabilir: gövde küçüldükçe mikrofon sayısı, düğme, pil ve kablosuz bağlantı seçenekleri sınırlı kalabilir. Bu nedenle 'görünmez' bir tercihtir; her kullanıcı ve her kulak yapısı için doğru olmayabilir.",
  ],
  columns: [
    {
      title: "Kimler için değerlendirilebilir?",
      items: [
        "Görünmezliğin öncelik olduğu kullanıcılar",
        "Kulak kanalı yapısı uygun bulunanlar",
        "Genellikle hafif–orta düzey kayıplar (değerlendirmeye göre)",
      ],
    },
    {
      title: "Dikkat edilecekler",
      items: [
        "Kulak kanalı bu boyuta uygun olmayabilir",
        "İnce el becerisi ve küçük parça yönetimi gerekir",
        "Kulak kirine karşı düzenli temizlik önemlidir",
      ],
    },
  ],
  note: "Küçük cihaz her zaman daha uygun cihaz demek değildir; hangisinin uygun olduğu işitme değerlendirmesi ve kulak muayenesi sonrasında konuşulur.",
  links: [
    { label: "Görünmez (CIC) cihazlar", href: "/isitme-cihazlari/gorunmez-cic/" },
    { label: "Kulak içi cihazlar", href: "/isitme-cihazlari/kulak-ici-ite/" },
  ],
};

/* ---------- M. Çocuklar ---------- */
export const childrenSection: GuideSectionMeta = {
  id: "cocuklar",
  eyebrow: "Çocuklar İçin",
  heading: "Çocuklar İçin İşitme Cihazı: Süreç Nasıl İşler?",
  intro:
    "Çocuk için cihaz kararı, yetişkinlerden farklı olarak bir süreçtir: değerlendirme, uygun çözüm, kullanım takibi ve aile desteği birlikte yürür. Bu bölüm tıbbi karar vermez, süreci anlatır.",
};

export const children: FocusBlockContent = {
  image: {
    src: "/images/homepage/device-comparison/device-comparison-cocuklara-ozel.webp",
    alt: "Çocuklara yönelik işitme cihazı — temsili görsel",
    width: 1254,
    height: 1254,
  },
  lead:
    "Çocuklarda işitme cihazı, önce çocuğun işitme değerlendirmesinin yapılmasıyla; ardından büyüyen kulağa uygun cihaz ve ayarın seçilip düzenli takiple sürdürülmesiyle gündeme gelir.",
  paragraphs: [
    "Çocuk kulağı büyüdüğü için kulak kalıbı ve ayarlar zaman içinde yenilenir. Bu nedenle çocuklara yönelik çözümlerde cihazın kendisi kadar, düzenli kontrol randevuları ve aile ile ekip arasındaki iletişim de önemlidir.",
    "Cihazın uygun olup olmadığına, çocuğun değerlendirme sonuçlarına bakılarak aile ve ekip birlikte karar verir; bu sayfa tıbbi bir karar önermez.",
  ],
  columns: [
    {
      title: "Süreç",
      items: [
        "Çocuk işitme değerlendirmesi",
        "Uygun cihaz ve kalıp seçimi",
        "Ayarlama ve kullanım takibi",
        "Büyümeye bağlı düzenli kontrol",
      ],
    },
    {
      title: "Ailenin rolü",
      items: [
        "Cihazın günlük takıp çıkarma ve bakımı",
        "Kullanım süresi ve tepkilerin ekibe iletilmesi",
        "Randevuların düzenli sürdürülmesi",
      ],
    },
  ],
  note: "Çocukların SGK süreçleri yetişkinlerden farklı işleyebilir; ayrıntılar SGK sayfalarımızda ele alınır.",
  links: [
    { label: "Çocuklara özel cihazlar", href: "/isitme-cihazlari/cocuklara-ozel/" },
    { label: "Çocuk işitme testi", href: "/degerlendirme/cocuk-isitme-testi/" },
    { label: "Çocuklarda SGK", href: "/sgk/cocuklarda-sgk/" },
  ],
};
