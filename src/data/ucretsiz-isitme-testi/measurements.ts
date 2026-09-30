// "İşitme testinde hangi ölçümler yapılır?", "İşitme testine nasıl hazırlanılır?" ve
// "İşitme testi ne kadar sürer?".
//
// SADECE mevcut, doğrulanmış hizmet bilgileri yazılır: saf ses testi, konuşma testi,
// kulak muayenesi (otoskop) eski "Testte Neler Değerlendirilir?" bölümünden; timpanometri,
// çocuk testi, tinnitus değerlendirmesi eski "Sıkça Bir Arada Sunulan Testler" bölümünden
// ("kapsam ihtiyaca göre değişebilir" ifadesiyle). Bunlar dışında yeni ölçüm eklenmedi.
// Hazırlık: eski SSS ("Özel bir hazırlık gerekmez; varsa önceki test sonuçları ve ilaç
// listesi faydalı olabilir", "Randevu almanızı öneririz"). Süre: eski SSS ("Süre kişiden
// kişiye değişebilir; genellikle kısa bir süre içinde tamamlanır") — rakam UYDURULMADI.
import { AudioWaveform, MessageSquare, Waves, ClipboardList, Backpack, CalendarCheck, Utensils } from "lucide-astro";
import type { GuideCard, GuideSectionMeta, GuideTableContent } from "../../components/price-guide/price-guide.types";

/* ---------- Ölçümler ---------- */
export const measureSection: GuideSectionMeta = {
  id: "olcumler",
  eyebrow: "Ölçümler",
  heading: "İşitme Testinde Hangi Ölçümler Yapılır?",
  intro:
    "İşitme testinin çekirdeği, kulaklıkla verilen seslerin duyulma eşiğinin ölçüldüğü saf ses testi ile konuşmayı anlama düzeyinin değerlendirildiği konuşma testidir. Bunlara ihtiyaca göre tamamlayıcı değerlendirmeler eklenebilir. Her ölçümün teknik ayrıntısı kendi sayfasında anlatılır.",
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
  {
    icon: ClipboardList,
    title: "Diğer değerlendirmeler",
    text: "Kulak muayenesi (otoskop), şikayet ve sağlık geçmişinin değerlendirilmesi; çocuklarda yaşa uygun yöntemler; kulak çınlaması şikayetinde ek değerlendirme. Bunların kapsamı kişiye ve ihtiyaca göre değişir.",
    href: "/degerlendirme/tinnitus-degerlendirme/",
    linkLabel: "Kulak çınlaması değerlendirmesi",
  },
];

export const measureTable: GuideTableContent = {
  id: "olcumler-tablosu",
  eyebrow: "Tablo 3",
  heading: "Ölçümler Neyi Değerlendirir?",
  caption: "İşitme testinde kullanılan ölçümlerin neyi değerlendirdiği, nasıl kaydedildiği ve ayrıntı sayfası",
  criterionLabel: "Ölçüm",
  columns: [{ name: "Neyi değerlendirir?" }, { name: "Sonuç nasıl kaydedilir?" }, { name: "Ayrıntı" }],
  rows: [
    { label: "Saf ses odyometrisi", href: "/degerlendirme/odyometri/", cells: ["Farklı frekanslarda duyulabilen en düşük ses şiddeti (işitme eşiği)", "Odyogramda, sağ ve sol kulak için ayrı işaretlerle", "Odyometri sayfası"] },
    { label: "Konuşma testi", cells: ["Konuşmayı anlama düzeyi", "Değerlendirme notu olarak, odyogramla birlikte yorumlanır", "Bu sayfadaki ölçümler bölümü"] },
    { label: "Timpanometri", href: "/degerlendirme/timpanometri/", cells: ["Orta kulak basıncı ve kulak zarı hareketliliği", "Timpanogram grafiği", "Timpanometri sayfası"] },
    { label: "Kulak muayenesi (otoskop)", cells: ["Dış kulak yolu ve kulak zarının görünümü", "Görsel kontrol; uzman notu", "Bu sayfadaki test süreci bölümü"] },
    { label: "Kulak çınlaması değerlendirmesi", href: "/degerlendirme/tinnitus-degerlendirme/", cells: ["Çınlamanın özellikleri ve şiddeti (işitme testine ek olarak)", "Değerlendirme notu", "Tinnitus değerlendirme sayfası"] },
    { label: "Çocuk işitme testi", href: "/degerlendirme/cocuk-isitme-testi/", cells: ["Çocuğun yaşına uygun yöntemlerle işitme durumu", "Yaşa uygun kayıt; aile bilgilendirmesiyle", "Çocuk işitme testi sayfası"] },
  ],
  note:
    "Hangi ölçümlerin uygulanacağı kişiye ve ihtiyaca göre değişir; bu tablo genel bilgi verir, kişisel bir test planı değildir.",
};

/* ---------- Hazırlık ---------- */
export const prepareSection: GuideSectionMeta = {
  id: "hazirlik",
  eyebrow: "Hazırlık",
  heading: "İşitme Testine Nasıl Hazırlanılır?",
  intro:
    "İşitme testi için genellikle özel bir açlık hazırlığı gerekmez. Randevuya gelirken aşağıdaki birkaç noktaya dikkat etmeniz süreci kolaylaştırır.",
};

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
    href: "/iletisim/",
    linkLabel: "Randevu ve iletişim",
  },
];

/* ---------- Süre ---------- */
export const durationSection: GuideSectionMeta = {
  id: "sure",
  eyebrow: "Süre",
  heading: "İşitme Testi Ne Kadar Sürer?",
  intro:
    "Süre, uygulanacak değerlendirmelere göre değişir; işitme testi genellikle kısa sürede tamamlanır. Kesin bir süre vermek doğru olmaz, çünkü ön görüşmenin kapsamı ve ihtiyaç duyulan ölçümler kişiden kişiye farklıdır. Sonuçlar, görüşme sırasında sizinle birlikte değerlendirilir.",
};

export const durationPoints: { title: string; text: string }[] = [
  { title: "Ön görüşmenin kapsamı", text: "Şikayetlerinizin ve sağlık geçmişinizin ne kadar ayrıntılı ele alındığı süreyi etkiler." },
  { title: "Uygulanan ölçümler", text: "Saf ses ve konuşma testine ek olarak timpanometri gibi tamamlayıcı ölçümler gerekiyorsa süre uzayabilir." },
  { title: "Sonuçların açıklanması", text: "Odyogramın sizinle birlikte anlaşılır biçimde yorumlanması ve sorularınızın yanıtlanması sürecin parçasıdır." },
  { title: "Randevu planı", text: "Kesin süre ve planlama için randevu alırken merkezimizle görüşebilirsiniz." },
];
