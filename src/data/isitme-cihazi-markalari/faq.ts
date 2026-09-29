// SSS — 17 soru, gerçek arama niyetleri. BrandPageFaq, FAQPage şemasını bu
// verinin AYNISINDAN üretir (görünür içerik = şema; QUALITY_GATES.md §4).
// Cevaplar kısa ve doğrudan alıntılanabilir (GEO). "Oticon mu Phonak mı?" gibi
// karşılaştırma sorularında KAZANAN ÇIKARILMAZ: cevap kriter bazlıdır ve
// sitedeki doğrulanmış marka verisine dayanır. Fiyat ve SGK cevapları kısa ve
// yönlendiricidir. Hiçbir cevapta fiyat, garanti oranı ya da tıbbi kesinlik yok.
import { contactConfig } from "../../config/contact";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const brandsFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "İşitme Cihazı Markaları Hakkında Sık Sorulan Sorular",
  intro: "Markalar, modeller, karşılaştırma ve seçim hakkında en çok sorulan soruların kısa ve net cevapları.",
  decisionCard: {
    title: "Size uygun marka ve modeli birlikte belirleyelim",
    points: ["Ücretsiz işitme testi", "Cihaz deneme", "Tarafsız marka karşılaştırması", "Darıca'daki merkezimizde yüz yüze görüşme"],
    ctaLabel: "Hemen Ara",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Markalar",
      items: [
        {
          question: "İşitme cihazı markaları nelerdir?",
          answer:
            "Merkezimizde 18 markayla çalışıyoruz. En çok sorulan altı ana marka Oticon, Phonak, Signia, Widex, ReSound ve Starkey NuEar'dır; ayrıca Unitron, Bernafon, Audio Service, Rexton, Sonic, Philips Hearing, A&M, Audifon, Beltone, Coselgi, Maico ve Vista ile de çalışıyoruz. Her markanın kendi sayfası vardır.",
        },
        {
          question: "En iyi işitme cihazı markası hangisi?",
          answer:
            "Tek bir marka herkes için en iyi olmayabilir; seçim cihazın tipi, işitme kaybı, kullanım ortamı, bağlantı ihtiyacı, kullanım kolaylığı ve servis gibi kriterlere göre değişebilir. Bu yüzden markaları sıralamıyoruz; ihtiyacınıza uyan modeli birlikte belirliyoruz.",
        },
        {
          question: "NuEar nedir?",
          answer:
            "NuEar, 1976'da San Diego'da kurulan ve bugün Amerikan menşeli Starkey grubuna bağlı bir işitme cihazı markasıdır; bu nedenle 'Starkey NuEar' olarak da anılır. Marka, bağlantılı ve sağlık odaklı bir işitme deneyimi sunar; bu deneyimin uygulaması Hear Circle'dır.",
        },
        {
          question: "Starkey NuEar hangi modelleri sunuyor?",
          answer:
            "Sitemizdeki NuEar sayfasında NXG AI, NE Series, Circa, Savant AI, NOW iQ ve Miniscopic Synergy iQ model aileleri yer alıyor. Circa günlük kullanım için şarjlı bir RIC ailesi, Miniscopic Synergy iQ ise kişiye özel üretilen kulak içi bir ailedir.",
        },
      ],
    },
    {
      label: "Seçim",
      items: [
        {
          question: "İşitme cihazı markası nasıl seçilir?",
          answer:
            "Önce işitme testiyle işitme kaybınızı ve uygun cihaz tiplerini belirleyin; ardından telefon uyumu, Bluetooth, şarj, kullanım kolaylığı, uygulama ve servis gibi kriterlere bakın. Markayı en sona bırakmak daha sağlıklıdır, çünkü çoğu marka birden fazla cihaz tipi sunar.",
        },
        {
          question: "Marka mı model mi daha önemli?",
          answer:
            "Model daha belirleyicidir. Marka bir yaklaşımı anlatır, model ise cihazın tipini, gücünü, bağlantı ve şarj özelliklerini belirler. Aynı markanın içinde bile çok farklı ihtiyaçlara yönelik aileler bulunur.",
        },
        {
          question: "Oticon mu Phonak mı?",
          answer:
            "Kazanan bir cevap yok; kriterlere bakın. Sitemizdeki marka verisine göre Oticon BrainHearing® yaklaşımı ve yapay zekâ destekli işlemeyle, çocuklara ve ileri derece kayıplara yönelik ailelerle; Phonak evrensel Bluetooth (iPhone ve Android), konuşma odaklı işleme ve tek taraflı kayıp için CROS ailesiyle öne çıkıyor. Hangisinin uygun olduğu modele ve ihtiyacınıza bağlıdır.",
        },
        {
          question: "Signia mı Widex mi?",
          answer:
            "Bu da kriter meselesidir. Signia; Own Voice Processing ve yapay zekâ destekli, tasarıma önem veren kullanıcılara yönelik yaklaşımıyla, Widex ise PureSound™ ile doğal ses odaklı yaklaşımı ve gürültü azaltmaya yönelik SmartRIC ailesiyle anılıyor. Hangisinin size uygun olduğu, işitme kaybınıza ve önceliklerinize göre belirlenir.",
        },
        {
          question: "İşitme cihazı markasını değiştirmek mümkün mü?",
          answer:
            "Mümkündür; ancak cihazlar ve ayarlar kişiye göre yapıldığı için mevcut cihazınızın durumu, garanti ve servis koşulları ile yeni cihazın uygunluğu birlikte değerlendirilir. Bu kararı, işitme testi ve görüşmeyle netleştirmenizi öneririz.",
        },
      ],
    },
    {
      label: "Cihaz Türü ve Özellik",
      items: [
        {
          question: "RIC cihazlarda hangi markalar var?",
          answer:
            "Sitemizde RIC etiketli aileler Phonak, Signia, Widex, ReSound ve Starkey NuEar markalarında yer alıyor. Oticon'un yerleşim bilgisi model listemizde etiketli olmadığı için Oticon'un RIC seçeneklerini marka sayfasında inceleyin.",
        },
        {
          question: "Şarjlı işitme cihazlarında hangi markalar var?",
          answer:
            "Altı ana markanın hepsinde şarjlı etiketli aileler bulunuyor; ancak her aile şarjlı değil. Bir ailenin şarjlı sürümü olup olmadığını marka sayfasında ve değerlendirmede modele göre doğrulayın.",
        },
        {
          question: "Kulak içi ve küçük cihazlar hangi markalarda var?",
          answer:
            "Sitemizde kulak içi seçeneği anılan aileler arasında Oticon Own SI, Phonak Virto, Signia Insio ve Silk ile Starkey NuEar Miniscopic Synergy iQ yer alıyor. Küçük cihaz kulak yapısına bağlı olduğu için uygunluk ayrıca değerlendirilir.",
        },
        {
          question: "Çocuklar için hangi markalarda cihaz var?",
          answer:
            "Sitemizde çocuğa yönelik aileler olarak Oticon (Play PX, Opn Play, Xceed Play) ve Phonak (Sky) yer alıyor. Çocuk için cihaz kararı, çocuk işitme değerlendirmesinden sonra uzman ekiple birlikte verilir.",
        },
      ],
    },
    {
      label: "Fiyat, SGK ve Deneme",
      items: [
        {
          question: "İşitme cihazı markaları arasında fiyat farkı neden var?",
          answer:
            "Fark yalnızca markadan değil; cihaz tipi, teknoloji seviyesi, özellikler ve hizmet kapsamından gelir. Fiyat listesi yayımlamıyoruz; nedenlerin ayrıntısı fiyat rehberimizde, kişiye özel bilgi ise işitme değerlendirmesinden sonra verilir.",
        },
        {
          question: "SGK marka seçimini etkiler mi?",
          answer:
            "SGK süreci, belgeler ve güncel tutarlar ayrı bir rehberde yer alır ve her yıl değişebilir. Marka ve model seçimiyle SGK desteğinin birlikte nasıl değerlendirileceğini, SGK anlaşmalı merkezimizde görüşmede anlatıyoruz.",
        },
        {
          question: "İşitme cihazı denemesi yapılabilir mi?",
          answer:
            "Evet, merkezimizde uygun bulunan cihazlar stok ve değerlendirmeye bağlı olarak denenebilir. Denemenin kapsamı ve koşulları cihaza göre değişebilir; ayrıntıları cihaz deneme sayfamızda ve görüşme sırasında paylaşıyoruz.",
        },
        {
          question: "Darıca'da hangi markaları inceleyebilirim?",
          answer:
            "Darıca'daki merkezimizde çalıştığımız markaların model ailelerini işitme testinizin ardından ihtiyacınıza göre birlikte değerlendiriyoruz. Gebze ve Çayırova'da şubemiz yok; bu ilçelerden gelen danışanlarımız da Darıca merkezimize gelerek hizmet alır.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
