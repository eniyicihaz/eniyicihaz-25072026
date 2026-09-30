// "İşitme testinde hangi değerlendirmeler yer alabilir?" (3 kısa ölçüm kartı + TEK birleşik
// tablo), "İşitme testine nasıl hazırlanılır?" ve "İşitme testi ne kadar sürer?" (ikisi de
// "İşitme Testi Nasıl Yapılır?" bölümünün H3'leridir).
//
// BİRLEŞİM: eski "Ücretsiz testte hangi aşamalar" tablosu, "Ölçümler neyi değerlendirir" tablosu
// ve dördüncü "Diğer değerlendirmeler" kartı aynı bilgiyi üç yerde veriyordu; tek tabloda toplandı.
// "Uygulama durumu" sütunu, işletme tarafından AYRICA teyit edilmeyen kalemleri kesin vaat
// olarak yazmaz: yalnızca doğrulanmış ifade (ön görüşme, şikayet değerlendirmesi, temel
// odyolojik ölçüm) "ücretsiz testin kapsamındadır" der; diğerleri "kişinin ihtiyacına ve test
// sürecine göre" uygulanır.
// SADECE mevcut, doğrulanmış hizmet bilgileri: saf ses testi, konuşma testi, otoskopla kulak
// yolu kontrolü eski "Testte Neler Değerlendirilir?" bölümünden; timpanometri, çocuk testi,
// tinnitus değerlendirmesi eski "Sıkça Bir Arada Sunulan Testler" bölümünden.
// Hazırlık: eski SSS. Süre: eski SSS ("kişiden kişiye değişebilir; genellikle kısa sürede
// tamamlanır") — rakam UYDURULMADI.
import { AudioWaveform, MessageSquare, Waves, Backpack, CalendarCheck, Utensils } from "lucide-astro";
import type { GuideCard, GuideSectionMeta, GuideTableContent } from "../../components/price-guide/price-guide.types";

const HEDGE = "Uygulanacak değerlendirmeler, kişinin ihtiyacına ve test sürecine göre belirlenir.";

/* ---------- Değerlendirmeler ---------- */
export const measureSection: GuideSectionMeta = {
  id: "olcumler",
  eyebrow: "Değerlendirmeler",
  heading: "İşitme Testinde Hangi Değerlendirmeler Yer Alabilir?",
  intro:
    "İşitme testinin temelini kulaklıkla verilen seslerin duyulma eşiğinin ölçüldüğü saf ses testi oluşturur; konuşmayı anlama düzeyini değerlendiren konuşma testi ve tamamlayıcı değerlendirmeler kişinin ihtiyacına ve test sürecine göre eklenebilir. Aşağıda üç ana ölçüm, ardından tüm aşamaların tek tablosu yer alıyor.",
};

export const measureCards: GuideCard[] = [
  {
    icon: AudioWaveform,
    title: "Saf ses odyometrisi",
    text: "Farklı frekanslardaki saf seslerin duyulabildiği en düşük şiddet ölçülür. Sonuç, işitme eşiğinin frekansa göre nasıl değiştiğini gösteren odyogramda kaydedilir.",
    href: "/degerlendirme/odyometri/",
    linkLabel: "Odyometri nedir?",
  },
  {
    icon: MessageSquare,
    title: "Konuşma testleri",
    text: "Farklı ses seviyelerinde konuşmayı ne kadar net anladığınız değerlendirilir. Sesleri duymakla kelimeleri anlamak aynı şey olmadığı için bu ölçüm, saf ses sonuçlarını tamamlar.",
  },
  {
    icon: Waves,
    title: "Timpanometri",
    text: "Orta kulaktaki basınç ve kulak zarının hareketliliğini değerlendiren tamamlayıcı bir testtir; kulak kanalına yerleştirilen küçük bir probla hava basıncı değiştirilerek yapılır. Kapsamı ihtiyaca göre değişir.",
    href: "/degerlendirme/timpanometri/",
    linkLabel: "Timpanometri nedir?",
  },
];

export const measureTable: GuideTableContent = {
  id: "olcumler-tablosu",
  eyebrow: "Tablo 1",
  heading: "Aşamalar ve Ölçümler Bir Arada",
  caption: "İşitme testinde yer alabilecek aşamalar ve ölçümler: ne değerlendirdikleri, uygulama durumu ve ayrıntı sayfası",
  criterionLabel: "Aşama / ölçüm",
  columns: [{ name: "Ne değerlendirir?" }, { name: "Uygulama durumu" }, { name: "Ayrıntı", stackHidden: true }],
  rows: [
    { label: "Ön görüşme ve şikayet değerlendirmesi", cells: ["İşitmeyle ilgili zorluklarınız, sağlık geçmişiniz ve beklentileriniz", "Ücretsiz testin kapsamındadır", "Nasıl yapılır bölümü"] },
    { label: "Saf ses odyometrisi", href: "/degerlendirme/odyometri/", cells: ["Frekansa göre işitme eşiği (duyulan en düşük ses şiddeti)", "Temel odyolojik ölçümün parçasıdır", "Odyometri sayfası"] },
    { label: "Konuşma testi", cells: ["Konuşmayı anlama düzeyi", "İhtiyaca ve test sürecine göre", "Bu bölümdeki kart"] },
    { label: "Kulak yolunun görsel kontrolü (otoskop)", cells: ["Dış kulak yolu ve kulak zarının görünümü", "İhtiyaca ve test sürecine göre", "Nasıl yapılır bölümü"] },
    { label: "Timpanometri", href: "/degerlendirme/timpanometri/", cells: ["Orta kulak basıncı ve kulak zarı hareketliliği", "İhtiyaca göre tamamlayıcı; kapsam için randevuda bilgi alın", "Timpanometri sayfası"] },
    { label: "Kulak çınlaması değerlendirmesi", href: "/degerlendirme/tinnitus-degerlendirme/", cells: ["Çınlamanın özellikleri ve şiddeti (işitme testine ek olarak)", "İhtiyaca göre; kapsam için randevuda bilgi alın", "Tinnitus sayfası"] },
    { label: "Çocuk işitme testi", href: "/degerlendirme/cocuk-isitme-testi/", cells: ["Çocuğun yaşına uygun yöntemlerle işitme durumu", "Yaşa uygun yöntemlerle; kapsam için randevuda bilgi alın", "Çocuk işitme testi sayfası"] },
    { label: "Odyogram kaydı ve açıklama", cells: ["Ölçüm sonuçlarının grafikte kaydı ve sizinle birlikte yorumlanması", "Sonuçların değerlendirilmesinin parçasıdır", "Sonuç bölümü"] },
  ],
  note: HEDGE + " Bu tablo genel bilgi verir, kişisel bir test planı değildir.",
};

/* ---------- Hazırlık (H3) ---------- */
export const prepareHeading = "Testten Önce: Nasıl Hazırlanılır?";
export const prepareIntro = "İşitme testi için karmaşık bir hazırlık gerekmez; randevuya gelirken aşağıdaki birkaç noktaya dikkat etmeniz süreci kolaylaştırır.";

export const prepareCards: GuideCard[] = [
  {
    icon: Utensils,
    title: "Aç karnına olmak gerekir mi?",
    text: "İşitme testi için genellikle özel bir açlık hazırlığı gerekmez. Başka bir talimat verilmediyse olağan gününüzde rahatça gelebilirsiniz.",
  },
  {
    icon: Backpack,
    title: "Yanınızda ne getirmelisiniz?",
    text: "Varsa önceki işitme testi sonuçlarınızı ve kullandığınız ilaçların listesini getirmeniz faydalı olabilir. İşitme cihazı kullanıyorsanız cihazınızı, SGK sürecini düşünüyorsanız ilgili belgelerinizi de yanınıza alın.",
    href: "/sgk/gerekli-belgeler/",
    linkLabel: "SGK için gerekli belgeler",
  },
  {
    icon: CalendarCheck,
    title: "Randevu öncesinde dikkat edilecekler",
    text: "Randevu almanızı öneririz; bu, beklemeden karşılanmanızı sağlar. Kısa süre önce çok yüksek sesli bir ortamda bulunduysanız, kulağınızda ağrı, tıkanıklık ya da akıntı varsa bunu randevuda belirtin.",
  },
];

/* ---------- Süre (H3) ---------- */
export const durationHeading = "İşitme Testi Ne Kadar Sürer?";
export const durationIntro =
  "Süre, uygulanacak değerlendirmelere göre değişir; işitme testi genellikle kısa sürede tamamlanır. Kesin bir süre vermek doğru olmaz, çünkü ön görüşmenin kapsamı ve ihtiyaç duyulan ölçümler kişiden kişiye farklıdır. Kesin süre ve planlama için randevu alırken merkezimizle görüşebilirsiniz.";

export const durationPoints: { title: string; text: string }[] = [
  { title: "Ön görüşmenin kapsamı", text: "Şikayetlerinizin ve sağlık geçmişinizin ne kadar ayrıntılı ele alındığı süreyi etkiler." },
  { title: "Uygulanan ölçümler", text: "Saf ses ve konuşma testine ek olarak timpanometri gibi tamamlayıcı ölçümler gerekiyorsa süre uzayabilir." },
  { title: "Sonuçların görüşmede yorumlanması", text: "Odyogramın sizinle birlikte anlaşılır biçimde yorumlanması ve sorularınızın yanıtlanması sürecin parçasıdır." },
];
