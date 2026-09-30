// "Testten sonra ne olur?", "İşitme cihazı için test gerekli mi?", "Online test ile
// merkezdeki test farkı", "Çocuklarda" ve "Yaşlılarda / yaşa bağlı işitme kaybında".
//
// Korunan doğrulanmış içerik: eski "Test Sonucundan Sonra Ne Olur?" (7 adım: ölçüm,
// değerlendirme, ihtiyacın belirlenmesi, cihaz seçeneklerinin görüşülmesi (gerekirse),
// deneme, kişiye özel ayar, takip/teknik destek), eski "Klinik vs Online" tablosu (7
// kıyas satırı), eski çocuk testi bilgisi, "40 yaş üzeri düzenli kontrol". "Klinik"
// yerine "merkez" denir (sahte klinik/hastane iddiası yok).
// MARKALAR: burada marka tanıtılmaz; yalnızca /isitme-cihazi-markalari/ rehberine link.
import { Stethoscope, CalendarClock, Headphones, ShieldCheck } from "lucide-astro";
import type { GuideCard, GuideSectionMeta, GuideTableContent } from "../../components/price-guide/price-guide.types";

/* ---------- Testten sonra ---------- */
export const afterSection: GuideSectionMeta = {
  id: "sonrasi",
  eyebrow: "Test Sonrası",
  heading: "İşitme Testinden Sonra Ne Olur?",
  intro:
    "Testin ardından sonuçlar sizinle birlikte değerlendirilir ve bir sonraki adım netleşir. Sonuca göre bir KBB yönlendirmesi, takip ya da işitme cihazı değerlendirmesi gündeme gelebilir; sonuç normal sınırlardaysa hiçbir cihaz önerilmez. Hiçbir durumda satın alma zorunluluğu yoktur.",
};

export const afterCards: GuideCard[] = [
  {
    icon: Stethoscope,
    title: "KBB değerlendirmesi gereken durumlar",
    text: "Test sırasında ya da sonucunda tıbbi bir değerlendirme gerektirebilecek bir durumdan şüphelenilirse (örneğin iki kulak arasında belirgin fark, ani değişiklik, ağrı veya akıntı), uzman KBB muayenesine yönlendirme yapılabilir. Kesin tanı ve tedavi kararı bu değerlendirmeye aittir.",
    href: "/rehberler/isitme-kaybi-nedir/",
    linkLabel: "İşitme kaybı nedir?",
  },
  {
    icon: CalendarClock,
    title: "Takip ve yeniden değerlendirme",
    text: "İşitme zamanla değişebildiği için düzenli kontrol önerilebilir. İlk testiniz bir başlangıç kaydı olur; sonraki testlerde karşılaştırma yapılarak değişimin olup olmadığı izlenir.",
  },
  {
    icon: Headphones,
    title: "İşitme cihazı değerlendirmesi",
    text: "Sonuç, gerçek bir ihtiyaca işaret ediyorsa uygun çözüm seçenekleri baskı yapılmadan sizinle görüşülür; karar vermeden önce cihazı deneyebilir, seçilen cihazın kişiye özel ayarlanmasını ve takibini sorabilirsiniz. Cihaz türleri, fiyat faktörleri ve markalar için ayrı rehberlerimiz vardır: işitme cihazı çeşitleri, fiyat rehberi ve İşitme Cihazı Markaları rehberimiz.",
    href: "/isitme-cihazlari/",
    linkLabel: "İşitme cihazlarını inceleyin",
  },
  {
    icon: ShieldCheck,
    title: "İşitme cihazı gerekmeyen durumlar",
    text: "Test sonucu normal sınırlardaysa ya da cihaz gerektirmeyen bir durum söz konusuysa cihaz önerilmez; bu durumda takip önerilebilir. Test sonrası cihaz almak zorunda değilsiniz.",
    href: "/neden-orijinal/ucretsiz-danismanlik/",
    linkLabel: "Ücretsiz danışmanlık",
  },
];

/** "İşitme cihazı" bölümündeki ek bağlantılar (kart metnindeki adlandırılmış rehberler için). */
export const afterLinks = [
  { label: "İşitme cihazı fiyatları", href: "/isitme-cihazi-fiyatlari/" },
  { label: "İşitme Cihazı Markaları", href: "/isitme-cihazi-markalari/" },
  { label: "Cihaz deneme", href: "/uygulama-ayar/cihaz-deneme/" },
  { label: "SGK rapor süreci", href: "/sgk/rapor-sureci/" },
];

/* ---------- İşitme cihazı için test gerekli mi? ---------- */
export const deviceTestSection: GuideSectionMeta = {
  id: "cihaz-icin-test",
  eyebrow: "İşitme Cihazı ve Test",
  heading: "İşitme Cihazı İçin İşitme Testi Gerekli mi?",
  intro:
    "Evet. İşitme cihazı, kişinin işitme testi sonucuna göre seçilir ve ayarlanır; test olmadan uygun cihazı belirlemek doğru olmaz. Test sonucu aynı zamanda cihazın gerekip gerekmediğini de gösterir, yani her işitme testinin sonunda cihaz önerilmez.",
};

export const deviceTestPoints: { title: string; text: string }[] = [
  { title: "Cihaz seçimi", text: "İşitme kaybınızın derecesi ve frekans dağılımı, hangi cihaz tiplerinin ve güç aralıklarının değerlendirilebileceğini belirler." },
  { title: "Kişiye özel ayar", text: "Cihaz, odyogramınıza göre programlanır; iyi ayarlanmış bir cihaz, işitme testinin doğru yapılmasına dayanır." },
  { title: "SGK süreci", text: "SGK desteğinden yararlanmak için ayrıca sağlık raporu ve belirli belgeler gerekir; süreç ve güncel bilgi SGK rehberlerimizde yer alır." },
];

export const deviceTestLinks = [
  { label: "SGK işitme cihazı ödemesi", href: "/sgk-isitme-cihazi-odemesi/" },
  { label: "SGK rapor süreci", href: "/sgk/rapor-sureci/" },
  { label: "Cihaz seçim rehberi", href: "/rehberler/cihaz-secim-rehberi/" },
];

/* ---------- Online test farkı ---------- */
export const onlineSection: GuideSectionMeta = {
  id: "online-fark",
  eyebrow: "Online Test ve Merkezde Test",
  heading: "Online İşitme Testi ile Merkezde Yapılan Test Arasındaki Fark",
  intro:
    "Online işitme taraması, kulaklığınızla kendi başınıza yaptığınız bir ön değerlendirmedir ve klinik bir ölçüm değildir; merkezimizdeki test ise kalibre edilmiş cihazlarla, odyometrist eşliğinde yapılır ve daha güvenilir sonuç verir. Online tarama merkeze gelmeden önce bir fikir edinmek için kullanılabilir, ancak merkezdeki testin yerine geçmez.",
};

export const onlineTable: GuideTableContent = {
  id: "online-merkez-karsilastirma",
  eyebrow: "Tablo 4",
  heading: "Merkezde Odyometrist Eşliğinde Test ve Online Test Karşılaştırması",
  caption: "Merkezde odyometrist eşliğinde yapılan işitme testi ile online veya kendi kendine yapılan testin karşılaştırılması",
  criterionLabel: "Özellik",
  columns: [{ name: "Merkezde odyometrist eşliğinde test" }, { name: "Online veya kendi kendine test", href: "/degerlendirme/online-isitme-testi/" }],
  rows: [
    { label: "Ortam kontrolü", cells: ["Ses yalıtımlı, kontrollü bir test ortamında yapılır.", "Ev ortamının gürültüsü sonuçları etkileyebilir."] },
    { label: "Ekipman", cells: ["Kalibre edilmiş profesyonel odyometri cihazları kullanılır.", "Telefon veya bilgisayar hoparlörü/kulaklığı standart kalibrasyona sahip olmayabilir."] },
    { label: "Yorumlama", cells: ["Sonuçlar bir odyometrist tarafından yorumlanır.", "Sonuçlar genellikle otomatik ve genel bir şekilde sunulur."] },
    { label: "Ek değerlendirme", cells: ["Kulak muayenesi ve şikayet değerlendirmesi de sürece dahildir.", "Genellikle yalnızca işitme eşiği ölçülür."] },
    { label: "Güvenilirlik", cells: ["Kontrollü koşullarda elde edilen sonuçlar daha güvenilir kabul edilir.", "Sonuçlar yalnızca genel bir fikir verebilir, tanı amaçlı kullanılmamalıdır."] },
    { label: "Yönlendirme", cells: ["Gerekirse KBB uzmanına veya cihaz değerlendirmesine yönlendirme yapılabilir.", "Yönlendirme imkânı sunulmaz."] },
    { label: "Maliyet", cells: ["Merkezimizde herhangi bir ücret talep edilmeden sunulur.", "Bazı online testler ücretli olabilir."] },
  ],
  note:
    "Bu karşılaştırma genel eğilimleri özetler. Online testler yalnızca genel bir ön fikir verebilir; kesin değerlendirme için her zaman bir odyometriste danışmanızı öneririz.",
  links: [{ label: "Online işitme taraması", href: "/degerlendirme/online-isitme-testi/" }],
};

/* ---------- Çocuklarda ---------- */
export const childrenSection: GuideSectionMeta = {
  id: "cocuklar",
  eyebrow: "Çocuklarda",
  heading: "Çocuklarda İşitme Testi",
  intro:
    "Çocuklarda işitme testi, çocuğun yaşına uygun yöntemlerle uygulanır: yaşa göre oyun tabanlı yöntemler veya standart odyometri teknikleri kullanılır. Konuşma ve dil gelişiminde beklenenden geri kalma, sık kulak enfeksiyonu ya da çocuğun seslere tepkisiz görünmesi gibi durumlarda değerlendirme faydalı olabilir; erken tespit dil ve konuşma gelişimini desteklemeye yardımcı olabilir.",
};

export const childrenCards: GuideCard[] = [
  {
    icon: Stethoscope,
    title: "Yaşa uygun yöntemler ve aile bilgilendirmesi",
    text: "Test, çocuğun dikkatini koruyacak şekilde ve aile bilgilendirmesiyle birlikte yürütülür. Çocuklar için testin kapsamı ve uygunluk konusunda randevuda bilgi alabilirsiniz.",
    href: "/degerlendirme/cocuk-isitme-testi/",
    linkLabel: "Çocuk işitme testi sayfası",
  },
];

/* ---------- Yaşlılarda ---------- */
export const elderlySection: GuideSectionMeta = {
  id: "yasli",
  eyebrow: "Yaşa Bağlı İşitme Kaybı",
  heading: "Yaşlılarda ve Yaşa Bağlı İşitme Kaybında İşitme Testi",
  intro:
    "İşitme yaşla birlikte değişebilir ve bu değişim çoğu zaman yavaş geliştiği için kişinin kendisinden çok yakınları tarafından fark edilir. 40 yaş üzeri kullanıcılar için düzenli işitme kontrolleri sıkça önerilir; işitme testi, yaşa bağlı bir değişimin olup olmadığını ve düzeyini görmeye yardımcı olur.",
};

export const elderlyCards: GuideCard[] = [
  {
    icon: Stethoscope,
    title: "Yakınınızla birlikte gelebilirsiniz",
    text: "Sonuçların açıklanması sırasında bir yakınınızın bulunması, anlatılanları birlikte değerlendirmenizi kolaylaştırabilir. Randevu almanızı öneririz.",
    href: "/ihtiyaciniza-gore/yaslilar-icin-cihazlar/",
    linkLabel: "Yaşlılar için cihaz rehberi",
  },
];
