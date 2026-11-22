// "SGK İşitme Cihazı Kaç Yılda Bir Yenilenir?" — /sgk/yenileme-hakki sayfasının, giriş bölümünden hemen sonra gelen ana
// bilgi bölümü. Renders through SgkRenewalGuide (src/components/sgk/SgkRenewalGuide).
//
// KAYNAK AYRIMI (sayfada da ayrı gösterilir):
//  - MEDULA İŞLEM BİLGİSİ (işletme sahibinin doğrulaması; mevzuat metni DEĞİL): 5 yıl, çocuklar dâhil bütün yaş
//    grupları, sürenin önceki cihazın MEDULA kayıt tarihinden başlaması, sağ/sol kulağın ayrı hesaplanması.
//  - RESMÎ METİN (SUT 3.1.2 (7) ve (9); SUT 3.3.32): süre dolmadan yenileme istisnaları (büyüme-gelişme çağı çocuk;
//    kullanıcı kusuru olmadan arıza + onarımın sağlanamaması), kayıp/çalıntıda miat dolmadan yeni cihaz bedelinin
//    karşılanmaması, raporun resmî sağlık hizmeti sunucusunda düzenlenmesi. "İşitme kaybının ilerlemesi" SUT'taki
//    istisnalar arasında YOKTUR (işletme sahibi de erken yenileme sağlamadığını teyit etti).
//  - e-Devlet: iki SGK hizmetinin adı ve bağlantısı doğrulandı (sayfalar açılıyor). Hizmetlerin işitme cihazı için
//    hangi ayrıntıları (yenileme tarihi, MEDULA kayıt tarihi) gösterdiği BİLİNMİYOR → bu sayfa kesin tarih/kayıt
//    gösterdiklerini İDDİA ETMEZ ve "kayıt görünmemesi = hak doğdu" anlamı çıkarılmasını açıkça reddeder.
// Örnek tarihler varsayımsaldır (gerçek bir kişiye ait değil) ve öyle etiketlenir. Yürürlük tarihi (24/26 Ocak)
// yazılmaz. JSON-LD / tarih alanı eklenmez; "Son kontrol" tarihi data/sgk/verification.ts'ten gelir.

export interface RenewalExample {
  caption: string;
  columns: string[];
  rows: string[][];
  note: string;
}

export interface SgkRenewalGuideContent {
  badge: string;
  heading: string;
  lead: string;
  calc: { title: string; paragraphs: string[]; example: RenewalExample };
  early: {
    title: string;
    intro: string;
    exceptions: { label: string; text: string }[];
    loss: string;
    progression: string;
    report: string;
  };
  eDevlet: { title: string; intro: string; caveats: string[] };
  basis: {
    title: string;
    paragraphs: string[];
    sourcesHeading: string;
    checkedLabel: string;
  };
}

export const sgkRenewalGuide: SgkRenewalGuideContent = {
  badge: "YENİLEME SÜRESİ",
  heading: "SGK İşitme Cihazı Kaç Yılda Bir Yenilenir?",
  lead: "SGK kapsamındaki işitme cihazı yenileme süresi, çocuklar dâhil bütün yaş gruplarında 5 yıldır.",
  calc: {
    title: "Süre nasıl hesaplanır?",
    paragraphs: [
      "Süre, önceki cihazın MEDULA sistemine kaydedildiği tarihten itibaren hesaplanır.",
      "Sağ ve sol kulak cihazlarının kayıt tarihleri farklıysa her kulağın süresi ayrı hesaplanır.",
    ],
    example: {
      caption: "Varsayımsal örnek",
      columns: ["Kulak", "Önceki cihazın MEDULA kayıt tarihi", "5 yıllık sürenin dolduğu tarih"],
      rows: [
        ["Sağ kulak", "10.03.2023", "10.03.2028"],
        ["Sol kulak", "15.09.2024", "15.09.2029"],
      ],
      note: "Bu örnek gerçek bir kişiye ait değildir; yalnızca hesabın her kulak için ayrı yapıldığını gösterir. Kendi sürenizi merkezimizle birlikte değerlendirebilirsiniz.",
    },
  },
  early: {
    title: "Süre dolmadan yenileme mümkün mü?",
    intro:
      "SUT, EK-3/C-3 listesindeki tıbbi malzemelerin (işitme cihazı dâhil) miat süresi dolmadan yenilenmesini kural olarak kabul etmez. Yalnızca iki istisna vardır (SUT 3.1.2):",
    exceptions: [
      {
        label: "Büyüme ve gelişme çağındaki çocuk",
        text: "Cihaz, çocuğun büyümesi ve gelişmesi nedeniyle kullanılamıyorsa ve bu durum sağlık raporuyla belgelenirse süre dolmadan yenilenebilir.",
      },
      {
        label: "Kullanıcı kusuru olmadan arıza",
        text: "Cihaz, kullanıcının kasıt ve kusuru olmadan arızalanırsa veya kullanılamaz hâle gelirse; bu durum sağlık raporuyla belgelenir ve Kurumca onarımı sağlanamazsa süre dolmadan yenilenebilir. Garanti süresi içinde yenilemeyi satışı yapan firma, garanti süresi dışında SGK yapar.",
      },
    ],
    loss: "Cihaz kaybolur veya çalınırsa, SUT'ta belirtilen miat süresi dolana kadar yenisinin bedeli SGK tarafından karşılanmaz.",
    progression:
      "İşitme kaybının ilerlemesi bu istisnalar arasında yer almaz; tek başına süre dolmadan yenileme için yeterli değildir.",
    report:
      "Rapor şartı: sağlık kurulu raporu SUT'a göre resmî sağlık hizmeti sunucularında düzenlenmelidir. Özel hastane raporları SGK tarafından kabul edilmez.",
  },
  eDevlet: {
    title: "e-Devlet'te SGK malzeme sorgulama hizmetleri",
    intro: "SGK, e-Devlet üzerinden iki malzeme sorgulama hizmeti sunar. Hizmetlere e-Devlet girişi yaparak ulaşılır:",
    caveats: [
      "Bu hizmetlerin işitme cihazı için hangi ayrıntıları gösterdiğini garanti edemiyoruz; ekranda kesin yenileme tarihi veya MEDULA kayıt tarihi görüneceğini söylemiyoruz.",
      "Sorguda kayıt görünmemesi, yenileme hakkının doğduğu anlamına gelmez. Süre her durumda önceki cihazın MEDULA kayıt tarihine göre hesaplanır.",
    ],
  },
  basis: {
    title: "Bilginin dayanağı",
    paragraphs: [
      "Süre dolmadan yenileme kuralları, kayıp/çalıntı hükmü ve rapor şartı Sağlık Uygulama Tebliği'ne (SUT 3.1.2 ve 3.3.32) dayanır.",
      "5 yıllık sürenin, çocuklar dâhil bütün yaş gruplarında önceki cihazın MEDULA kayıt tarihinden başlaması ve her kulağın ayrı hesaplanması ise merkezimizin MEDULA uygulamasındaki işlem bilgisine dayanır; bu bilgiler mevzuat metni olarak sunulmamaktadır.",
    ],
    sourcesHeading: "Resmî kaynaklar",
    checkedLabel: "Son kontrol:",
  },
};
