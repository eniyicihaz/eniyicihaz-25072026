// "İşitme testi sonucu nasıl okunur?" — odyogramın genel mantığı.
//
// Bu bölüm bir tanı aracı DEĞİL, okuma rehberidir: gerçek/sahte hiçbir hasta verisi
// gösterilmez (şema boş bir odyogramdır: eksenler, dereceler, semboller). Dereceler,
// sitenin mevcut derece sayfalarındaki sınıflandırmayla tutarlıdır (hafif 26-40,
// orta 41-55, ileri 56-70, çok ileri 71 dB ve üzeri; bkz. /ihtiyaciniza-gore/*).
// "0-25 dB" satırı aynı uluslararası sınıflandırmanın alt sınırıdır ve "genellikle normal
// kabul edilir" diye temkinli yazıldı; farklı kaynakların sınırları biraz farklı
// adlandırabileceği açıkça belirtilir. Kesin tanı, hastalık çıkarımı veya "cihaz kesin
// gerekir" ifadesi yoktur.
import { LineChart, Ear, ArrowLeftRight, Waves, Gauge, Layers } from "lucide-astro";
import type { AudiogramContent } from "../../components/hearing-test/AudiogramDiagram.astro";
import type { GuideCard, GuideSectionMeta, GuideTableContent } from "../../components/price-guide/price-guide.types";

export const resultsSection: GuideSectionMeta = {
  id: "sonuc-okuma",
  eyebrow: "Sonuç Nasıl Okunur?",
  heading: "İşitme Testi Sonucu Nasıl Okunur? Odyogram Rehberi",
  intro:
    "İşitme testi sonucu odyogram adı verilen bir grafikte gösterilir: yatay eksen sesin frekansını (Hz), dikey eksen işitme seviyesini (dB) gösterir ve sağ ile sol kulak ayrı işaretlerle çizilir. İşaretler grafikte ne kadar yukarıdaysa, o frekansta o kadar hafif ses duyulduğu anlamına gelir. Aşağıda grafiğin her bölümünü sade bir dille açıklıyoruz.",
};

export const audiogram: AudiogramContent = {
  title: "Boş odyogram şeması: frekans, işitme seviyesi ve derece bantları",
  description:
    "Yatay eksende 250 ile 8000 Hz arasındaki frekanslar, dikey eksende 0 dB en üstte olacak şekilde işitme seviyesi gösterilir. Arka plandaki bantlar normal sınırlar, hafif, orta, ileri ve çok ileri işitme kaybı aralıklarını gösterir. Sağ kulak kırmızı daire, sol kulak mavi çarpı ile işaretlenir. Şemada hiçbir kişiye ait sonuç yoktur.",
  caption:
    "Şematik bir örnektir; bir kişinin test sonucunu göstermez. Gerçek odyogramda ölçülen eşikler sağ kulak için daire, sol kulak için çarpı işaretiyle bu ızgaraya yerleştirilir.",
  freqs: [250, 500, 1000, 2000, 4000, 8000],
  freqAxisLabel: "Frekans (Hz)",
  lowLabel: "Kalın (düşük) sesler",
  highLabel: "İnce (yüksek) sesler",
  dbAxisLabel: "İşitme seviyesi (dB HL)",
  dbTicks: [0, 20, 40, 60, 80, 100, 120],
  dbMin: -10,
  dbMax: 120,
  bands: [
    { label: "Normal sınırlar", range: "0–25 dB", from: -10, to: 25, tone: 0 },
    { label: "Hafif", range: "26–40 dB", from: 25, to: 40, tone: 1 },
    { label: "Orta", range: "41–55 dB", from: 40, to: 55, tone: 2 },
    { label: "İleri", range: "56–70 dB", from: 55, to: 70, tone: 3 },
    { label: "Çok ileri", range: "71 dB ve üzeri", from: 70, to: 120, tone: 4 },
  ],
  legend: { right: "Sağ kulak", left: "Sol kulak" },
  topNote: "Yukarı: daha hafif ses duyulur",
  bottomNote: "Aşağı: daha yüksek ses gerekir",
  scrollHint: "Grafiğin tamamını görmek için yana kaydırın →",
};

/** H3 açıklamaları (grafiğin yanında/altında). */
export const resultsCards: GuideCard[] = [
  {
    icon: LineChart,
    title: "Odyogram nedir?",
    text: "Odyogram, işitme testinde ölçülen işitme eşiklerinin frekansa göre gösterildiği grafiktir. Eşik, bir sesi duyabildiğiniz en düşük şiddet demektir. Grafik, hangi seslerde ve hangi kulakta fark olduğunu tek bakışta görmeyi sağlar.",
  },
  {
    icon: Waves,
    title: "Frekans neyi gösterir?",
    text: "Frekans (Hz), sesin kalın mı ince mi olduğunu anlatır. Grafikte soldan sağa doğru kalın seslerden ince seslere gidilir; genellikle yaklaşık 250 ile 8000 Hz arası değerlendirilir. Konuşma sesleri bu aralığın orta bölümünde yer alır, bu yüzden hangi frekansta fark olduğu günlük yaşamda zorlandığınız durumlarla ilişkilendirilebilir.",
  },
  {
    icon: Gauge,
    title: "dB neyi gösterir?",
    text: "Desibel (dB HL), sesin şiddetini, yani ne kadar yüksek olduğunu gösterir. Odyogramda 0 dB en üsttedir; işaret aşağı indikçe o frekansı duymak için daha yüksek bir ses gerektiği anlamına gelir. Değer büyüdükçe duymak için gereken ses şiddeti artar.",
  },
  {
    icon: Ear,
    title: "Sağ ve sol kulak",
    text: "Her kulak ayrı ölçülür. Yaygın kullanımda sağ kulak kırmızı daire (○), sol kulak mavi çarpı (×) ile gösterilir. İki kulak arasında fark olması sık görülebilir; ancak iki kulak arasında aniden ortaya çıkan bir fark acil tıbbi değerlendirme gerektirebilir.",
  },
  {
    icon: ArrowLeftRight,
    title: "Hava yolu ve kemik yolu",
    text: "Hava yolu ölçümü sesin kulaklıkla kulak yolundan iletilmesiyle, kemik yolu ölçümü ise kafatası kemiği üzerinden iletilmesiyle yapılır. İkisi arasındaki fark, işitme kaybının türünü anlamaya yardımcı olabilir. Her testte kemik yolu ölçümü yapılmayabilir; uygulanıp uygulanmayacağı değerlendirmeye göre belirlenir.",
    href: "/degerlendirme/odyometri/",
    linkLabel: "Odyometri sayfası",
  },
  {
    icon: Layers,
    title: "Konuşma testi sonucu",
    text: "Odyogramın yanı sıra konuşmayı anlama düzeyi de değerlendirilir. Sesleri duymakla kelimeleri anlamak aynı şey olmadığından, kişi 'duyuyorum ama anlamıyorum' diyebilir; bu iki sonuç birlikte yorumlanır.",
  },
];

export const degreeTable: GuideTableContent = {
  id: "kayip-dereceleri",
  eyebrow: "Tablo 2",
  heading: "İşitme Kaybı Dereceleri",
  intro:
    "Odyogramdaki eşik değerleri, uluslararası sınıflandırmaya göre derecelere ayrılır. Bu tablo genel bir kılavuzdur; kişisel sonucunuz bir uzman tarafından diğer bulgularla birlikte yorumlanır.",
  caption: "İşitme kaybı derecelerinin dB HL aralığı ve günlük yaşamdaki genel anlamı",
  criterionLabel: "Derece",
  columns: [{ name: "Aralık (dB HL)" }, { name: "Genel anlamı" }],
  rows: [
    { label: "Normal sınırlar", cells: ["0–25 dB", "Genellikle normal işitme sınırları içinde kabul edilir; yine de şikayet varsa uzmanla değerlendirilebilir."] },
    { label: "Hafif", href: "/ihtiyaciniza-gore/hafif-isitme-kaybi/", cells: ["26–40 dB", "Fısıltı veya uzak sesleri duymakta güçlük olabilir; günlük konuşmaların çoğu etkilenmeyebilir."] },
    { label: "Orta", href: "/ihtiyaciniza-gore/orta-derece-isitme-kaybi/", cells: ["41–55 dB", "Normal ses tonundaki günlük konuşmaları takip etmekte belirgin zorluk yaşanmaya başlayabilir."] },
    { label: "İleri", href: "/ihtiyaciniza-gore/ileri-derece-isitme-kaybi/", cells: ["56–70 dB", "Yüksek sesle konuşulsa bile konuşmaları anlamakta zorluk yaşanabilir."] },
    { label: "Çok ileri", href: "/ihtiyaciniza-gore/cok-ileri-derece-isitme-kaybi/", cells: ["71 dB ve üzeri", "Çok yüksek sesler dışında konuşmaları duymak güçleşebilir; uzman değerlendirmesi özellikle önemlidir."] },
  ],
  note:
    "Kaynaklara göre sınırlar ve adlandırmalar küçük farklar gösterebilir. Aynı kişide farklı frekanslar farklı dereceye denk gelebilir ve iki kulak farklı olabilir; bu yüzden tek bir sayıdan sonuç çıkarılmaz.",
};

export const resultsNotice =
  "Odyogram tek başına kesin tanı koymaz. Sonuç; kulak muayenesi, şikayetleriniz, sağlık geçmişiniz ve gerekirse ek testlerle birlikte bir uzman tarafından yorumlanır. Sonucunuza dayanarak kendi kendinize hastalık çıkarımı yapmamanızı, endişe duyduğunuz durumlarda bir sağlık profesyoneline başvurmanızı öneririz.";
