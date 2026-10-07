// "Markalar", "Gerçek modeller" ve "Marka/model nasıl seçilir?".
//
// Marka ve model bilgisi sitedeki doğrulanmış verilerden gelir (marka
// sayfaları, src/data/home/models.ts, src/data/{resound,nuear,signia}) — yeni
// model veya özellik uydurulmaz. Bu sayfada amaç fiyat göstermek değil,
// cihaz BİÇİMLERİNİ ve kullanım özelliklerini gerçek modeller üzerinden
// keşfettirmektir; fiyat ilgisi /isitme-cihazi-fiyatlari/ sayfasına bırakılır.
// "En iyi marka" iddiası yoktur (PRINCIPLES.md §5).
import { Scale, Target, Cpu, MapPin, Sparkles, Sliders, Users, Wrench } from "lucide-astro";
import { homeModels } from "../home/models";
import { nuearModels } from "../nuear/models";
import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";
import type { GuideCard, GuideSectionMeta } from "../../components/price-guide/price-guide.types";

export const brandsSection: GuideSectionMeta = {
  id: "markalar",
  eyebrow: "Markalar",
  heading: "İşitme Cihazı Markaları: Hangi Markalarla Çalışıyoruz?",
  intro:
    "18 işitme cihazı markasıyla çalışıyoruz ve hiçbirine bağlı değiliz. Aşağıda en çok sorulan altı markanın işitme cihazı yaklaşımını kısaca tanıtıyoruz; her birinin kendi sayfasında modeller ve özellikler ayrıntılıdır. Sıra bir kalite ya da tercih sıralaması değildir.",
};

/** 6 marka — hepsinin gerçek /markalar/{slug}/ sayfası var. */
export const brandCards: GuideCard[] = [
  { tag: "Oticon", title: "Oticon işitme cihazları", text: "Yapay zekâ destekli işleme ve Bluetooth bağlantısını öne çıkaran model ailelerini sunar; örneğin Oticon Intent bu yaklaşımı temsil eder.", href: "/markalar/oticon/", linkLabel: "Oticon markası ve modelleri" },
  { tag: "Phonak", title: "Phonak işitme cihazları", text: "Genel kullanımdan ileri derece kayıplara kadar geniş bir aralıkta model aileleri vardır; Phonak Naída güçlü kayıplar için tasarlanmış bir örnektir.", href: "/markalar/phonak/", linkLabel: "Phonak markası ve modelleri" },
  { tag: "Signia", title: "Signia işitme cihazları", text: "Kulak arkasından kulak içine, spor ve aktif kullanıma yönelik modellere uzanan bir yelpaze sunar; Signia Styletto ince tasarımıyla tanınır.", href: "/markalar/signia/", linkLabel: "Signia markası ve modelleri" },
  { tag: "Widex", title: "Widex işitme cihazları", text: "Doğal ses odaklı yaklaşımı ve Bluetooth bağlantılı RIC modelleriyle öne çıkar; Widex SmartRIC bir örnektir.", href: "/markalar/widex/", linkLabel: "Widex markası ve modelleri" },
  { tag: "ReSound", title: "ReSound işitme cihazları", text: "Premium modellerden temel ihtiyaçlara yönelik giriş seviyesine kadar farklı aileler sunar; ReSound Vivia güncel premium ailelerden biridir.", href: "/markalar/resound/", linkLabel: "ReSound markası ve modelleri" },
  { tag: "NuEar", title: "NuEar işitme cihazları", text: "Günlük kullanıma uygun şarjlı RIC ve minyatür kulak içi seçenekleri içerir; NuEar Circa şarjlı seri için bir örnektir.", href: "/markalar/nuear/", linkLabel: "NuEar markası ve modelleri" },
];

export const brandsNote =
  "Hangi markanın hangi serisinin sizin işitme kaybınıza ve yaşamınıza uygun olduğu, işitme değerlendirmesi sonrasında belirlenir. Marka sıralaması yerine, ihtiyaca uyan model ailesi konuşulur.";

// Model listesi bu sayfaya özeldir — ana sayfanın `homeModels` verisi DEĞİŞMEZ.
// Kullanıcının belirttiği gerçek modeller: Oticon Intent, NuEar Circa (repodaki
// gerçek görsel + NuEar'ın doğrulanmış verisi), Signia Styletto, Widex SmartRIC,
// Phonak Naída. Phonak Audéo çıkarıldı (Widex SmartRIC ile aynı RIC/Bluetooth
// profili). Kartın marka rozeti "NuEar", bağlantısı /markalar/nuear/.
const nuearCirca = nuearModels.items.find((item) => item.slug === "circa");
if (!nuearCirca) throw new Error("NuEar Circa model verisi bulunamadı (src/data/nuear/models.ts)");

const modelItems = homeModels.items
  .filter((item) => item.slug !== "phonak-audeo")
  .flatMap((item) =>
    item.slug === "oticon-intent"
      ? [item, { ...nuearCirca, category: "NuEar", href: "/markalar/nuear/" }]
      : [item],
  );

export const modelsShowcase: BrandPageModelsContent = {
  ...homeModels,
  badge: "GERÇEK MODELLER",
  heading: "Cihaz Biçimlerini Gerçek Modellerle Keşfedin",
  intro:
    "Aşağıdaki modeller, işitme cihazlarının farklı biçimlerini ve özelliklerini gerçek ürünler üzerinden göstermek için seçildi: yapay zekâ destekli, şarjlı RIC, ince tasarımlı, Bluetooth bağlantılı ve güçlü kayıplara yönelik. Fiyat için fiyat rehberimize bakabilirsiniz.",
  ctaLabel: "Marka sayfası",
  items: modelItems,
};

export const modelPickSection: GuideSectionMeta = {
  id: "marka-model-secimi",
  eyebrow: "Marka ve Model Seçimi",
  heading: "İşitme Cihazı Markası ve Modeli Nasıl Seçilir?",
  intro:
    "'En iyi marka hangisi?' sorusunun herkes için geçerli tek bir cevabı yoktur. Aynı marka içinde bile seri ve teknoloji seviyesi değişir. Bunun yerine şu sekiz başlığa bakılır.",
};

export const modelPickCards: GuideCard[] = [
  { icon: Target, title: "İhtiyaç", text: "En çok zorlandığınız durumu belirleyin: konuşma takibi, telefon, televizyon veya kalabalık ortam. Model buna göre aranır." },
  { icon: Scale, title: "Cihaz tipi", text: "Kulak arkası, RIC veya kulak içi; tür seçimi markadan önce gelir, çünkü her markanın çeşitli türleri vardır.", href: "#cihaz-turleri", linkLabel: "Cihaz türleri" },
  { icon: Cpu, title: "Teknoloji", text: "Gürültü yönetimi, konuşma işleme ve bağlantı gibi özelliklerin kapsamı model seviyesine göre değişir; hangisine ihtiyaç duyduğunuzu sorun." },
  { icon: MapPin, title: "Kullanım ortamı", text: "Ev, iş, dışarısı, seyahat… Cihazı nerede kullanacağınız, dayanıklılık, şarj ve bağlantı önceliklerini belirler." },
  { icon: Sparkles, title: "Kişisel tercih", text: "Görünüm, renk, kullanım biçimi ve kullanmaktan hoşlandığınız hissiyat da karar verilirken göz önünde bulundurulur." },
  { icon: Wrench, title: "Servis", text: "Markanın ve merkezin servis desteğinin nasıl olduğunu, garanti koşullarını ve yedek cihaz gibi imkânları öğrenin.", href: "/servis-bakim/teknik-servis/", linkLabel: "Teknik servis" },
  { icon: Users, title: "Deneme", text: "Cihazı denemek, seçimde en gerçekçi bilgi kaynağıdır. Denenebilecek modelleri ve koşullarını sorun.", href: "/uygulama-ayar/cihaz-deneme/", linkLabel: "Cihaz deneme" },
  { icon: Sliders, title: "Ayarlama", text: "Aynı cihaz, iyi ayarlandığında değer kazanır. Ayarın kimin tarafından, hangi ölçümlerle ve kaç kez yapılacağını konuşun.", href: "/uygulama-ayar/kisiye-ozel-ayar/", linkLabel: "Kişiye özel ayar" },
];
