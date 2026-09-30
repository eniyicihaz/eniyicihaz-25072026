// "İşitme testi sonucu nasıl okunur?" — odyogramın genel mantığı.
//
// Bu bölüm bir tanı aracı DEĞİL, okuma rehberidir: gerçek/sahte hiçbir hasta verisi
// gösterilmez (şema boş bir odyogramdır: eksenler, dereceler, semboller). Tedavi veya
// cihaz/implant önerisi içermez.
//
// SINIFLANDIRMA (şema ve tablo BİREBİR aynıdır; sayfa sahibinin belirlediği kullanım):
//   0–25 normal sınırlar · 26–40 hafif · 41–55 orta · 56–70 orta-ileri · 71–90 ileri ·
//   91 dB ve üzeri çok ileri.
// Site geneli hizalandı: /ihtiyaciniza-gore/{hafif,orta,ileri,cok-ileri}-*-isitme-kaybi/ sayfaları
// ve derece merdiveni (evolution.ts) aynı aralıkları kullanır; hafif, orta, ileri ve çok ileri
// satırları kendi sayfalarına bağlanır. 'Orta-ileri' için ayrı bir sayfa yoktur.
import { Ear, ArrowLeftRight, Waves, Gauge } from "lucide-astro";
import type { AudiogramContent } from "../../components/hearing-test/AudiogramDiagram.astro";
import type { GuideCard, GuideSectionMeta, GuideTableContent } from "../../components/price-guide/price-guide.types";

export const resultsSection: GuideSectionMeta = {
  id: "sonuc-okuma",
  eyebrow: "Sonuç Nasıl Okunur?",
  heading: "İşitme Testi Sonucu Nasıl Okunur? Odyogram Rehberi",
  intro:
    "İşitme testi sonucu odyogram adı verilen bir grafikte gösterilir: yatay eksen sesin frekansını (Hz), dikey eksen işitme seviyesini (dB) gösterir ve sağ ile sol kulak ayrı işaretlerle çizilir. İşaretler grafikte ne kadar yukarıdaysa, o frekansta o kadar hafif ses duyulduğu anlamına gelir. Grafiğin hemen altındaki tablo derece aralıklarını, ardından gelen kartlar grafiğin her bölümünü sade bir dille açıklar.",
};

export const audiogram: AudiogramContent = {
  title: "Boş odyogram şeması: frekans, işitme seviyesi ve derece bantları",
  description:
    "Yatay eksende 250 ile 8000 Hz arasındaki frekanslar, dikey eksende 0 dB en üstte olacak şekilde işitme seviyesi gösterilir. Arka plandaki bantlar normal sınırlar (0-25 dB), hafif (26-40), orta (41-55), orta-ileri (56-70), ileri (71-90) ve çok ileri (91 dB ve üzeri) işitme kaybı aralıklarını gösterir. Sağ kulak kırmızı daire, sol kulak mavi çarpı ile işaretlenir. Şemada hiçbir kişiye ait sonuç yoktur.",
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
    { label: "Orta-ileri", range: "56–70 dB", from: 55, to: 70, tone: 3 },
    { label: "İleri", range: "71–90 dB", from: 70, to: 90, tone: 4 },
    { label: "Çok ileri", range: "91 dB ve üzeri", from: 90, to: 120, tone: 5 },
  ],
  legend: { right: "Sağ kulak", left: "Sol kulak" },
  topNote: "Yukarı: daha hafif ses duyulur",
  bottomNote: "Aşağı: daha yüksek ses gerekir",
};

/** H3 açıklamaları — grafik ve derece tablosundan SONRA. "Odyogram nedir?" (bölüm girişinde) ve "Konuşma testi sonucu" (Değerlendirmeler bölümünde) tekrar oldukları için kaldırıldı. */
export const resultsCards: GuideCard[] = [
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
    text: "Her kulak ayrı ölçülür. Yaygın kullanımda sağ kulak kırmızı daire (○), sol kulak mavi çarpı (×) ile gösterilir. İki kulak arasında fark olması sık görülebilir; ani ortaya çıkan bir fark için yukarıdaki KBB bölümüne bakın.",
  },
  {
    icon: ArrowLeftRight,
    title: "Hava yolu ve kemik yolu",
    text: "Hava yolu ölçümü sesin kulaklıkla kulak yolundan iletilmesiyle, kemik yolu ölçümü ise kafatası kemiği üzerinden iletilmesiyle yapılır. İkisi arasındaki fark, işitme kaybının türünü anlamaya yardımcı olabilir. Her testte kemik yolu ölçümü yapılmayabilir; uygulanıp uygulanmayacağı değerlendirmeye göre belirlenir.",
    href: "/degerlendirme/odyometri/",
    linkLabel: "Odyometri sayfası",
  },
];

export const degreeTable: GuideTableContent = {
  id: "kayip-dereceleri",
  eyebrow: "Tablo 2",
  heading: "İşitme Kaybı Dereceleri",
  intro:
    "Odyogramdaki eşik değerleri derecelere ayrılır; grafikteki renkli bantlar bu aralıkları gösterir. Bu tablo genel bir kılavuzdur; kişisel sonucunuz bir uzman tarafından diğer bulgularla birlikte yorumlanır.",
  caption: "İşitme kaybı derecelerinin dB HL aralığı ve günlük yaşamdaki genel anlamı",
  criterionLabel: "Derece",
  columns: [{ name: "Aralık (dB HL)" }, { name: "Genel anlamı" }],
  rows: [
    { label: "Normal sınırlar", cells: ["0–25 dB", "Genellikle normal işitme sınırları içinde kabul edilir; yine de şikayet varsa uzmanla değerlendirilebilir."] },
    { label: "Hafif", href: "/ihtiyaciniza-gore/hafif-isitme-kaybi/", cells: ["26–40 dB", "Fısıltı veya uzak sesleri duymakta güçlük olabilir; günlük konuşmaların çoğu etkilenmeyebilir."] },
    { label: "Orta", href: "/ihtiyaciniza-gore/orta-derece-isitme-kaybi/", cells: ["41–55 dB", "Normal ses tonundaki günlük konuşmaları takip etmekte belirgin zorluk yaşanmaya başlayabilir."] },
    { label: "Orta-ileri", cells: ["56–70 dB", "Yüksek sesle konuşulsa bile konuşmaları anlamakta zorluk yaşanabilir."] },
    { label: "İleri", href: "/ihtiyaciniza-gore/ileri-derece-isitme-kaybi/", cells: ["71–90 dB", "Yüksek sesli konuşmaların büyük bölümünü duymak güçleşebilir; günlük iletişim belirgin biçimde etkilenebilir."] },
    { label: "Çok ileri", href: "/ihtiyaciniza-gore/cok-ileri-derece-isitme-kaybi/", cells: ["91 dB ve üzeri", "Çok yüksek sesler bile zor duyulabilir; uzman değerlendirmesi özellikle önemlidir."] },
  ],
  note:
    "Kaynaklara göre sınırlar ve adlandırmalar küçük farklar gösterebilir. Aynı kişide farklı frekanslar farklı dereceye denk gelebilir ve iki kulak farklı olabilir; bu yüzden tek bir sayıdan sonuç çıkarılmaz.",
};

export const resultsNotice =
  "Odyogram tek başına kesin tanı koymaz. Sonuç; şikayetleriniz, sağlık geçmişiniz, kulak yolunun görsel kontrolü ve gerekirse ek testlerle birlikte bir uzman tarafından yorumlanır. Sonucunuza dayanarak kendi kendinize hastalık çıkarımı yapmamanızı, endişe duyduğunuz durumlarda bir sağlık profesyoneline başvurmanızı öneririz.";
