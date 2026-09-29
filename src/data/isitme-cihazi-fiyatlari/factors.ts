// "Fiyatı belirleyen faktörler" (12 kart), "Toplam maliyet" (4 kart) ve
// "Teknoloji seviyesi" tablosu. Etki seviyeleri NİTELİKSEL ve genellemedir
// ("genellikle") — hiçbir sayıya ya da yüzdeye dönüştürülmez.
import {
  Ear, Cpu, Award, Layers, Bluetooth, BatteryCharging, Volume2, Home,
  Smartphone, Users, Stethoscope, Wrench, Wallet, Repeat, ClipboardCheck,
} from "lucide-astro";
import type { GuideCard, GuideSectionMeta, GuideTableContent } from "../../components/price-guide/price-guide.types";

export const factorsSection: GuideSectionMeta = {
  id: "fiyati-belirleyenler",
  eyebrow: "Fiyatı Ne Belirler?",
  heading: "İşitme Cihazı Fiyatını Belirleyen 12 Faktör",
  intro:
    "Aynı cihaz gibi görünen iki teklif, farklı fiyatlara sahip olabilir. Aşağıdaki kalemlerin her biri bedeli farklı ölçüde etkiler; etki seviyesi genel bir çerçevedir ve modele göre değişir.",
};

export const factors: GuideCard[] = [
  {
    icon: Ear,
    tag: "Yapı",
    impact: "orta",
    title: "Cihaz tipi",
    text: "Kulak içi ve kanal içi cihazlar kulak yapınıza göre üretilir; kulak arkası cihazlarda ise aynı gövde farklı kullanıcılara uyarlanır. Küçük gövdede daha az yer olması pil ve özellik seçeneklerini de etkileyebilir.",
    href: "/isitme-cihazlari/",
    linkLabel: "Cihaz türlerini inceleyin",
  },
  {
    icon: Cpu,
    tag: "Teknoloji",
    impact: "yüksek",
    title: "Teknoloji seviyesi",
    text: "Cihazın ses ortamını ne kadar ayrıntılı analiz ettiği, konuşmayı gürültüden ne kadar ayırabildiği ve ortam değişince ne kadar otomatik uyum sağladığı teknoloji seviyesiyle ilgilidir. Fiyatı genellikle en çok etkileyen kalem budur; ama herkes üst seviyeye ihtiyaç duymaz.",
    href: "#teknoloji-seviyesi",
    linkLabel: "Seviyeleri karşılaştırın",
  },
  {
    icon: Award,
    tag: "Marka",
    impact: "değişken",
    title: "Marka",
    text: "Üreticinin ürün ailesi, Ar-Ge yatırımı, garanti koşulları ve Türkiye'deki servis desteği fiyat yapısına yansır. Aynı teknoloji seviyesinde bile markalar arasında fark olabilir; marka adı tek başına 'daha iyi' anlamına gelmez.",
    href: "/markalar/",
    linkLabel: "Markaları inceleyin",
  },
  {
    icon: Layers,
    tag: "Seri",
    impact: "orta",
    title: "Model ve seri",
    text: "Aynı marka içinde farklı seriler farklı kullanıcıları hedefler: sade ve kolay kullanımlı modeller, aktif yaşam için dayanıklı modeller, çok özellikli üst seri modeller. Seri seçimi ihtiyaca göre yapılmalıdır.",
    href: "#marka-model",
    linkLabel: "Model örneklerine bakın",
  },
  {
    icon: Bluetooth,
    tag: "Özellik",
    impact: "orta",
    title: "Bluetooth ve kablosuz bağlantı",
    text: "Telefon görüşmesini, müziği veya televizyon sesini doğrudan cihaza aktarmak ek donanım ve yazılım gerektirir. Bu özellik günlük hayatınızda ne kadar yer tutuyorsa, fiyat farkının karşılığı da o kadar somut olur.",
    href: "/isitme-cihazlari/bluetooth-ozellikli/",
    linkLabel: "Bluetooth cihazlar",
  },
  {
    icon: BatteryCharging,
    tag: "Özellik",
    impact: "orta",
    title: "Şarj edilebilir pil",
    text: "Şarj edilebilir cihazlar dahili pil ve şarj kutusu kullanır. Pil değiştirme alışkanlığından kurtarır; öte yandan şarj kutusu ve pilin yıllar içinde azalabilen kapasitesi de değerlendirmeye girer.",
    href: "/isitme-cihazlari/sarj-edilebilir/",
    linkLabel: "Şarjlı cihazlar",
  },
  {
    icon: Volume2,
    tag: "Ses işleme",
    impact: "yüksek",
    title: "Gürültü yönetimi ve mikrofon yapısı",
    text: "Kalabalıkta konuşmayı öne çıkaran yönlü mikrofonlar ve konuşma odaklı işleme daha gelişmiş donanım ister. Sessiz bir ortamda yaşayan biriyle sık kalabalıkta bulunan biri için bu özelliğin değeri çok farklıdır.",
    href: "/teknolojiler/gurultu-engelleme/",
    linkLabel: "Gürültü engelleme",
  },
  {
    icon: Home,
    tag: "İhtiyaç",
    impact: "değişken",
    title: "Kullanım ortamı ve yaşam tarzı",
    text: "Toplantı, aile sofrası, açık hava, spor, televizyon, telefon… Günlük ortamlarınız hangi özelliğin gerçekten işe yarayacağını belirler ve kullanmayacağınız bir özellik için ödeme yapmanızı önler.",
    href: "#kullanim-senaryolari",
    linkLabel: "Kullanım senaryoları",
  },
  {
    icon: Smartphone,
    tag: "Özellik",
    impact: "düşük",
    title: "Uygulama ve uzaktan kontrol",
    text: "Telefon uygulamasıyla ses ve program ayarı, bazı modellerde uzaktan ayar desteği sunulur. Bu özelliklerin kapsamı marka ve modele göre değişir; her kullanıcı için aynı önemde değildir.",
    href: "/uygulama-ayar/uzaktan-ayar/",
    linkLabel: "Uzaktan ayar",
  },
  {
    icon: Users,
    tag: "Kullanım",
    impact: "yüksek",
    title: "Tek kulak veya çift kulak",
    text: "İki kulakta da işitme kaybı varsa çoğu zaman iki cihaz önerilir; bu, toplam bedeli doğal olarak etkiler. Tek kulakla yetinip yetinemeyeceğiniz işitme testinizin sonucuna bağlıdır.",
    href: "#tek-cift-kulak",
    linkLabel: "Tek mi, çift mi?",
  },
  {
    icon: Stethoscope,
    tag: "Hizmet",
    impact: "orta",
    title: "Uygulama ve takip",
    text: "İşitme cihazı bir ürün olduğu kadar bir süreçtir: işitme değerlendirmesi, doğru ayar, alışma dönemi ve kontrol randevuları. Bu hizmetlerin nasıl sunulduğu merkezden merkeze farklılık gösterebilir.",
    href: "/uygulama-ayar/cihaz-uygulama/",
    linkLabel: "Cihaz uygulaması",
  },
  {
    icon: Wrench,
    tag: "Hizmet",
    impact: "değişken",
    title: "Teknik servis, garanti ve sarf kalemleri",
    text: "Garanti koşulları, teknik servis, bakım ve pil ya da aksesuar gibi sarf kalemleri cihazın kullanım ömrü boyunca maliyeti etkiler. Orijinal ürünlerde garanti, resmi teknik servis ve yasal güvenceler fiyata dahildir.",
    href: "/servis-bakim/teknik-servis/",
    linkLabel: "Teknik servis",
  },
];

export const totalCostSection: GuideSectionMeta = {
  id: "toplam-maliyet",
  eyebrow: "Gerçek Maliyet",
  heading: "İşitme Cihazının Toplam Maliyeti Nasıl Düşünülür?",
  intro:
    "Yalnızca satın alma bedeline bakmak yanıltıcı olabilir. Cihaz yıllarca kullanılacağı için, bedelin yanında kullanım sürecinin de hesaba katılması gerekir.",
};

export const totalCost: GuideCard[] = [
  {
    icon: Wallet,
    title: "Satın alma bedeli",
    text: "Cihazın kendisi: tip, teknoloji seviyesi, marka ve özelliklerin toplamı. SGK desteği varsa, ödeyeceğiniz tutar cihaz bedeli ile SGK'nın karşıladığı tutar arasındaki farktır.",
  },
  {
    icon: BatteryCharging,
    title: "Kullanım giderleri",
    text: "Pilli cihazlarda pil, şarjlı cihazlarda şarj kutusu ve bakım; her iki durumda da kurutma, temizlik ve aksesuar kalemleri. Kalıp kullanan cihazlarda kalıp yenileme ihtiyacı da olabilir.",
    href: "/servis-bakim/pil-aksesuar/",
    linkLabel: "Pil ve aksesuar",
  },
  {
    icon: ClipboardCheck,
    title: "Uygulama ve takip hizmeti",
    text: "Doğru ayar, alışma dönemi desteği ve kontrol randevuları cihazdan alacağınız faydayı doğrudan belirler. Bu hizmet teklifin içinde mi, ayrı mı olduğunu baştan öğrenmek önemlidir.",
    href: "/uygulama-ayar/kontrol-randevusu/",
    linkLabel: "Kontrol randevusu",
  },
  {
    icon: Repeat,
    title: "Servis ve yenileme",
    text: "Cihaz zamanla bakım, onarım ve bir noktada yenileme gerektirir. Garanti kapsamı, yetkili servis ve SGK yenileme koşulları uzun vadeli maliyeti şekillendirir.",
    href: "/sgk/yenileme-hakki/",
    linkLabel: "SGK yenileme hakkı",
  },
];

export const totalCostInsight =
  "Sadece rakamı düşük görünen bir teklif; ayar, takip, servis ve garantiyi kapsamıyorsa kullanım boyunca daha pahalıya gelebilir. Karşılaştırma yaparken teklifleri aynı kalemler üzerinden kıyaslayın.";

export const techLevelsTable: GuideTableContent = {
  id: "teknoloji-seviyesi",
  eyebrow: "Teknoloji Seviyesi",
  heading: "Teknoloji Seviyesi Fiyatı Nasıl Etkiler?",
  intro:
    "Markalar teknoloji seviyelerini farklı adlarla ve farklı sayıda sunar. Aşağıdaki tablo, seviyeler arasındaki genel farkı anlamanız için bir çerçeve sunar; belirli bir marka veya model için doğrudan bir tanım değildir.",
  caption: "Giriş, orta ve üst teknoloji seviyelerinin genel karşılaştırması",
  criterionLabel: "Kriter",
  columns: [{ name: "Giriş seviyesi" }, { name: "Orta seviye" }, { name: "Üst seviye" }],
  rows: [
    { label: "Ses ortamını tanıma", cells: ["Temel; sınırlı sayıda ortam", "Daha ayrıntılı, otomatik geçişli", "Çok ayrıntılı ve hızlı uyum"] },
    { label: "Gürültülü ortamda konuşma", cells: ["Temel gürültü azaltma", "Belirgin destek", "Gelişmiş, çok yönlü işleme"] },
    { label: "Ayar esnekliği", cells: ["Sınırlı", "Orta", "Geniş"] },
    { label: "Bağlantı seçenekleri", cells: ["Sınırlı olabilir", "Çoğunlukla mevcut", "Geniş (telefon, TV, uygulama)"] },
    { label: "Genellikle kimler için", cells: ["Sakin ortamlarda, sade kullanım", "Karışık günlük yaşam", "Yoğun sosyal veya iş hayatı, çok özellik isteyenler"] },
    { label: "Dikkat edilecek nokta", cells: ["Kalabalıkta yetersiz kalabilir", "Çoğu kullanıcı için dengeli bir başlangıç", "Kullanmayacağınız özelliğe ödeme yapmayın"] },
  ],
  note: "Doğru seviye, bir fiyat sıralaması değil; işitme kaybınızın derecesi ve günlük ortamlarınızla belirlenir. Bunu işitme testi sonrasında birlikte netleştiririz.",
  links: [{ label: "Ücretsiz işitme testi", href: "/degerlendirme/ucretsiz-isitme-testi/" }],
};
