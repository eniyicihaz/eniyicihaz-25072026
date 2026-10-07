// "Deneme ve uygulama", "Satış sonrası" ve "Fiyat ve SGK" (kısa yönlendirme).
//
// Yalnızca COMPANY.md §6/§11/§12/§14'teki GERÇEK hizmetler anlatılır (cihaz
// deneme, uygulama, kulak kalıbı/3D kalıp atölyesi, REM destekli ayarlama,
// teknik servis, bakım, yazılım güncelleme, yedek cihaz, SGK danışmanlığı).
// Uydurma hizmet, süre veya garanti oranı yoktur; garanti "üretici garanti
// koşulları geçerlidir" (COMPANY.md §20) çerçevesinde anılır.
//
// FİYAT ve SGK: KOPYALANMAZ. Yalnızca "neden sayfa ayrı" ve nereye gidileceği
// kısaca söylenir (SEARCH_STRATEGY.md §19). Rakam yoktur.
import { Ear, Wrench, RefreshCw, ClipboardCheck, Sparkles, Sliders, CalendarCheck, Tag, ShieldCheck } from "lucide-astro";
import type { GuideCard, GuideSectionMeta } from "../../components/price-guide/price-guide.types";

/* ---------- Q. Deneme ve uygulama ---------- */
export const trialSection: GuideSectionMeta = {
  id: "deneme-uygulama",
  eyebrow: "Deneme ve Uygulama",
  heading: "İşitme Cihazı Denemek Mümkün mü? Deneme, Uygulama ve Ayarlama",
  intro:
    "Evet: karar vermeden önce cihazı kendi günlük ortamınızda denemek, işitme cihazı sürecinin önemli bir parçasıdır. Aşağıdaki adımlar, merkezimizde uyguladığımız süreci özetler; kapsam ve koşullar cihaz ve stoğa göre değişebilir.",
};

export const trialSteps: GuideCard[] = [
  {
    icon: Ear,
    tag: "1. Değerlendirme",
    title: "İşitme değerlendirmesi",
    text: "Süreç ücretsiz işitme testiyle başlar. Sonuçlara göre hangi cihaz türlerinin ve özelliklerin konuşulabileceği belirlenir.",
    href: "/degerlendirme/ucretsiz-isitme-testi/",
    linkLabel: "Ücretsiz işitme testi",
  },
  {
    icon: Sparkles,
    tag: "2. Deneme",
    title: "Cihaz deneme",
    text: "Uygun bulunan cihazlar, stok ve değerlendirmeye bağlı olarak denenebilir; karar öncesinde gerçek ortamınızda nasıl hissettirdiğini görürsünüz.",
    href: "/uygulama-ayar/cihaz-deneme/",
    linkLabel: "Cihaz deneme",
  },
  {
    icon: Sliders,
    tag: "3. Ayarlama",
    title: "Kişiye özel ayar",
    text: "Cihaz, işitme kaybınıza göre programlanır ve kulak içi ölçümlerle (REM) desteklenen ayarlarla iyileştirilir. Ayar tek seferlik değil, süreç boyunca yenilenebilir bir işlemdir.",
    href: "/uygulama-ayar/kisiye-ozel-ayar/",
    linkLabel: "Kişiye özel ayar",
  },
  {
    icon: ClipboardCheck,
    tag: "4. Uygulama",
    title: "Cihaz uygulaması ve kalıp",
    text: "Cihazın takılması, kullanımı ve bakımı size gösterilir. Gerekirse kulak kalıbı alınır; kalıplar merkezimizin 3D kalıp atölyesinde hazırlanır.",
    href: "/uygulama-ayar/cihaz-uygulama/",
    linkLabel: "Cihaz uygulaması",
  },
  {
    icon: CalendarCheck,
    tag: "5. Takip",
    title: "Kontrol randevuları",
    text: "İlk günlerde yaşanan uyum, cihazın kullanım deneyimi ve gerekli ince ayarlar kontrol randevularıyla takip edilir.",
    href: "/uygulama-ayar/kontrol-randevusu/",
    linkLabel: "Kontrol randevusu",
  },
];

/* ---------- R. Satış sonrası ---------- */
export const afterSalesSection: GuideSectionMeta = {
  id: "satis-sonrasi",
  eyebrow: "Satış Sonrası",
  heading: "Satış Sonrası Destek: Ayar, Bakım ve Teknik Servis",
  intro:
    "İşitme cihazı tek seferlik bir alışveriş değil, zamanla süren bir kullanımdır. Bu nedenle cihazı aldıktan sonraki destek, cihazın kendisi kadar önemlidir.",
};

export const afterSales: GuideCard[] = [
  {
    icon: Sliders,
    title: "Ayarlama ve takip",
    text: "Kullanım ilerledikçe ihtiyaç değişebilir; ayarların yenilenmesi ve yazılım güncellemeleri sürecin doğal bir parçasıdır.",
    href: "/uygulama-ayar/kisiye-ozel-programlama/",
    linkLabel: "Kişiye özel programlama",
  },
  {
    icon: Wrench,
    title: "Teknik servis",
    text: "Arıza ve onarım gerektiren durumlarda teknik servis desteği veriyoruz; bu süreçte ücretsiz yedek işitme cihazı desteği de sağlıyoruz.",
    href: "/servis-bakim/teknik-servis/",
    linkLabel: "Teknik servis",
  },
  {
    icon: RefreshCw,
    title: "Periyodik bakım ve temizlik",
    text: "Düzenli temizlik ve bakım, cihazın performansını ve ömrünü korumaya yardım eder; nasıl yapılacağı size gösterilir.",
    href: "/servis-bakim/periyodik-bakim/",
    linkLabel: "Periyodik bakım",
  },
  {
    icon: ShieldCheck,
    title: "Garanti ve pil/aksesuar",
    text: "Garanti kapsamı marka ve modele göre değişir; garanti işlemlerinde ücretsiz destek veriyoruz. Pil ve aksesuar gereksinimleriniz için de danışabilirsiniz.",
    href: "/servis-bakim/garanti-islemleri/",
    linkLabel: "Garanti işlemleri",
  },
];

/* ---------- S + T. Fiyat ve SGK (kısa) ---------- */
export const priceSgkSection: GuideSectionMeta = {
  id: "fiyat-sgk",
  eyebrow: "Fiyat ve SGK",
  heading: "İşitme Cihazı Fiyatı ve SGK Desteği: Nereden Öğrenebilirsiniz?",
  intro:
    "Bu iki konu, kendi başına ayrıntılı sayfalarda ele alınır; burada yalnızca kısaca yönlendiriyoruz. Fiyat listesi yayımlamıyor, tahmini rakam vermiyoruz.",
};

export const priceSgkCards: GuideCard[] = [
  {
    icon: Tag,
    tag: "Fiyat",
    title: "İşitme cihazlarının fiyatı neden değişir?",
    text: "Cihaz tipi, teknoloji seviyesi, özellikler ve hizmet kapsamı toplam bedeli belirler. Bu farkları ve dikkat edilecek noktaları fiyat rehberimizde anlatıyoruz; kesin bilgi işitme değerlendirmesinden sonra verilir.",
    href: "/isitme-cihazi-fiyatlari/",
    linkLabel: "İşitme cihazı fiyatları rehberi",
  },
  {
    icon: ShieldCheck,
    tag: "SGK",
    title: "SGK işitme cihazı desteği",
    text: "SGK anlaşmalı bir merkez olarak süreç ve belgeler konusunda danışmanlık veriyoruz. Güncel tutarlar ve başvuru adımları her yıl değiştiği için ayrı ve güncel tutulan SGK rehberimizde yer alır.",
    href: "/sgk-isitme-cihazi-odemesi/",
    linkLabel: "SGK işitme cihazı ödemesi",
  },
];
