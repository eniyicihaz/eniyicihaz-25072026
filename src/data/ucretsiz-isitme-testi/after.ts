// "Testten sonra ne olur?" (cihaz konusu bu bölümün H3'üdür), "Evde veya online işitme testi
// yapılabilir mi?" ve "Çocuklarda ve yaşlılarda işitme testi".
//
// BİRLEŞİM: eski "İşitme Testinden Sonra Ne Olur?" + "İşitme Cihazı İçin İşitme Testi Gerekli mi?"
// tek bölümde; cihaz kısmı kısa tutulur ve kendi cihaz sayfalarına yönlendirir. Çocuk ve yaşlı
// tek H2 altında iki H3'tür; ayrıntı kendi sayfalarındadır.
//
// Doğrulanmamış iddialar KALDIRILDI/YUMUŞATILDI: "ses yalıtımlı ortam", "kalibre edilmiş
// cihaz" (işletme teyidi yok), "daha güvenilir sonuç", "normal sonuçta hiçbir cihaz önerilmez"
// (→ "cihaz gerekmeyebilir"), "bazı online testler ücretli olabilir".
// "Klinik" yerine "merkez" denir (sahte klinik/hastane iddiası yok).
// MARKALAR: burada marka tanıtılmaz; yalnızca /isitme-cihazi-markalari/ rehberine link.
import { Stethoscope, CalendarClock, Headphones } from "lucide-astro";
import type { GuideCard, GuideSectionMeta, GuideTableContent } from "../../components/price-guide/price-guide.types";

/* ---------- Testten sonra ---------- */
export const afterSection: GuideSectionMeta = {
  id: "sonrasi",
  eyebrow: "Test Sonrası",
  heading: "İşitme Testinden Sonra Ne Olur?",
  intro:
    "Testin ardından sonuçlar sizinle birlikte değerlendirilir ve bir sonraki adım netleşir. Sonuca göre bir KBB yönlendirmesi, takip ya da işitme cihazı değerlendirmesi gündeme gelebilir; cihaz her zaman gerekmeyebilir.",
};

export const afterCards: GuideCard[] = [
  {
    icon: Stethoscope,
    title: "KBB değerlendirmesi gereken durumlar",
    text: "Test sırasında ya da sonucunda tıbbi bir değerlendirme gerektirebilecek bir durumdan şüphelenilirse (örneğin iki kulak arasında belirgin fark, ani değişiklik, ağrı veya akıntı), KBB uzmanına yönlendirme yapılabilir. Kesin tanı ve tedavi kararı bu değerlendirmeye aittir; acil durumlar için yukarıdaki KBB bölümüne bakın.",
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
    title: "İşitme cihazı gündeme gelirse",
    text: "İşitme cihazı, işitme testi sonucuna göre seçilir ve ayarlanır; test olmadan uygun cihazı belirlemek doğru olmaz. Test sonucu cihazın gerekip gerekmediğini de gösterir: cihaz her zaman gerekmeyebilir. Gündeme gelirse karar vermeden önce cihazı deneyebilir, kişiye özel ayar ve takibi sorabilirsiniz. SGK desteği için ayrıca sağlık raporu ve belirli belgeler gerekir.",
    href: "/isitme-cihazlari/",
    linkLabel: "İşitme cihazlarını inceleyin",
  },
];

/** Cihaz konusu için kısa yönlendirme (ayrıntı kendi rehberlerinde). */
export const afterLinks = [
  { label: "İşitme cihazı fiyatları", href: "/isitme-cihazi-fiyatlari/" },
  { label: "İşitme Cihazı Markaları", href: "/isitme-cihazi-markalari/" },
  { label: "SGK işitme cihazı ödemesi", href: "/sgk-isitme-cihazi-odemesi/" },
];

/* ---------- Evde / online ---------- */
export const onlineSection: GuideSectionMeta = {
  id: "online-fark",
  eyebrow: "Evde ve Online Test",
  heading: "Evde veya Online İşitme Testi Yapılabilir mi?",
  intro:
    "Evet, online işitme taraması evde kulaklığınızla yapılabilir; ancak bu klinik bir ölçüm değil, genel bir ön değerlendirmedir ve merkezde odyometrist eşliğinde yapılan testin yerine geçmez. Merkeze gelmeden önce bir fikir edinmek için kullanılabilir.",
};

export const onlineTable: GuideTableContent = {
  id: "online-merkez-karsilastirma",
  eyebrow: "Tablo 3",
  heading: "Merkezde Test ve Online Test Karşılaştırması",
  caption: "Merkezde odyometrist eşliğinde yapılan işitme testi ile online veya kendi kendine yapılan testin karşılaştırılması",
  criterionLabel: "Özellik",
  columns: [{ name: "Merkezde odyometrist eşliğinde test" }, { name: "Online veya kendi kendine test" }],
  rows: [
    { label: "Ortam ve ekipman", cells: ["Test bir odyometrist eşliğinde ve kulaklıkla yapılır.", "Ev ortamının gürültüsü ve telefon ya da bilgisayar kulaklığı sonuçları etkileyebilir; ekipman standart değildir."] },
    { label: "Yorumlama", cells: ["Sonuçlar bir odyometrist tarafından yorumlanır.", "Sonuçlar genellikle otomatik ve genel bir şekilde sunulur."] },
    { label: "Yönlendirme", cells: ["Gerekirse KBB uzmanına veya cihaz değerlendirmesine yönlendirme yapılabilir.", "Yönlendirme imkânı genellikle sunulmaz."] },
    { label: "Güvenilirlik ve sınırlar", cells: ["Uzman değerlendirmesiyle birlikte yorumlandığı için daha kapsamlı bilgi verir; yine de kesin tanı tek bir testle konmaz.", "Yalnızca genel bir fikir verir; tanı amaçlı kullanılmamalıdır."] },
  ],
  note:
    "Bu karşılaştırma genel eğilimleri özetler. Online testler yalnızca genel bir ön fikir verebilir; kesin değerlendirme için bir odyometriste danışmanızı öneririz.",
  links: [{ label: "Online işitme taramasına gidin", href: "/degerlendirme/online-isitme-testi/" }],
};

/* ---------- Çocuklarda ve yaşlılarda ---------- */
export const ageSection: GuideSectionMeta = {
  id: "cocuk-yasli",
  eyebrow: "Çocuklarda ve Yaşlılarda",
  heading: "Çocuklarda ve Yaşlılarda İşitme Testi",
  intro: "İşitme testinin uygulanışı ve önemi yaşa göre farklılaşır; ayrıntılar kendi sayfalarında anlatılır.",
};

export const childrenText =
  "Çocuklarda işitme testi, çocuğun yaşına uygun yöntemlerle uygulanır: yaşa göre oyun tabanlı yöntemler veya standart odyometri teknikleri kullanılır. Konuşma ve dil gelişiminde beklenenden geri kalma, sık kulak enfeksiyonu ya da çocuğun seslere tepkisiz görünmesi gibi durumlarda değerlendirme faydalı olabilir. Test, çocuğun dikkatini koruyacak şekilde ve aile bilgilendirmesiyle birlikte yürütülür; çocuklar için testin kapsamı ve uygunluk konusunda randevuda bilgi alabilirsiniz.";
export const childrenLinks = [{ label: "Çocuk işitme testi sayfası", href: "/degerlendirme/cocuk-isitme-testi/" }];

export const elderlyText =
  "İşitme yaşla birlikte değişebilir ve bu değişim çoğu zaman yavaş geliştiği için kişinin kendisinden çok yakınları tarafından fark edilir. 40 yaş üzeri kullanıcılar için düzenli işitme kontrolleri sıkça önerilir; işitme testi, yaşa bağlı bir değişimin olup olmadığını ve düzeyini görmeye yardımcı olur. Sonuçların açıklanması sırasında bir yakınınızın bulunması, anlatılanları birlikte değerlendirmenizi kolaylaştırabilir.";
export const elderlyLinks = [{ label: "Yaşlılar için cihaz rehberi", href: "/ihtiyaciniza-gore/yaslilar-icin-cihazlar/" }];
