// SSS — 15 soru, gerçek arama niyetleri. BrandPageFaq, FAQPage şemasını bu
// verinin AYNISINDAN üretir (görünür içerik = şema; QUALITY_GATES.md §4).
// Cevaplar kısa ve doğrudan alıntılanabilir (GEO); derinlik için sayfadaki
// bölümlere ve ilgili sayfalara güvenilir. Hiçbir cevapta fiyat/tutar yok.
import { contactConfig } from "../../config/contact";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const priceGuideFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "İşitme Cihazı Fiyatları Hakkında Sık Sorulan Sorular",
  intro: "Fiyat, SGK, cihaz seçimi ve süreç hakkında en çok sorulan soruların kısa ve net cevapları.",
  decisionCard: {
    title: "Kendi durumunuz için net bilgi mi istiyorsunuz?",
    points: ["Ücretsiz işitme testi", "Cihaz deneme", "SGK danışmanlığı", "Darıca'daki merkezimizde yüz yüze görüşme"],
    ctaLabel: "Hemen Ara",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Fiyat",
      items: [
        {
          question: "İşitme cihazı fiyatları neden farklı?",
          answer:
            "Çünkü fiyatı tek bir unsur değil, cihaz tipi, teknoloji seviyesi, marka ve model, Bluetooth ve şarj gibi özellikler ile uygulama, takip ve servis hizmetleri birlikte belirler. İki cihaz dışarıdan benzer görünse de içerdikleri teknoloji ve hizmet kapsamı farklı olabilir.",
        },
        {
          question: "İşitme cihazı ne kadar?",
          answer:
            "Tek bir fiyat yoktur; bedel kişiye ve seçilen cihaza göre geniş bir aralıkta değişir. Avrasya İşitme fiyat listesi yayımlamaz; işitme değerlendirmesinden sonra, ihtiyacınıza uygun seçenekler ve bunların fiyat bilgisi birlikte netleşir.",
        },
        {
          question: "Şarjlı işitme cihazları daha mı pahalı?",
          answer:
            "Şarj özelliği fiyatı etkileyebilir, ancak tek belirleyici değildir. Doğru karşılaştırma için aynı teknoloji seviyesindeki şarjlı ve pilli seçeneklere birlikte bakmak gerekir; pil giderlerini de hesaba katmak önemlidir.",
        },
        {
          question: "Bluetooth özellikli cihazların fiyatı farklı mı?",
          answer:
            "Bluetooth ek donanım ve yazılım anlamına geldiği için fiyatı etkileyebilir; ancak etkisi marka ve modele göre değişir. Telefon ve TV bağlantısı sizin için önemliyse bu farkın karşılığını alırsınız, değilse gerek olmayabilir.",
        },
        {
          question: "Kulak içi cihazlar daha mı pahalı?",
          answer:
            "Kulak içi ve kanal içi cihazlar kulak yapınıza göre üretildiği için üretim ve donanım farkı bedele yansıyabilir. Ancak 'kulak içi her zaman daha pahalıdır' demek doğru olmaz; teknoloji seviyesi ve özellikler de fiyatı belirler.",
        },
        {
          question: "En ucuz işitme cihazı hangisi?",
          answer:
            "Herkes için geçerli tek bir 'en ucuz cihaz' yoktur; uygun cihaz işitme kaybınıza ve ihtiyacınıza göre değişir. Bütçeniz önceliğinizse bunu işitme testi sırasında paylaşın; ihtiyacınızı karşılayan daha sade seçenekleri birlikte değerlendirelim.",
        },
        {
          question: "Ödeme yöntemleri nelerdir?",
          answer: "Nakit, banka kartı ve kredi kartı ile ödeme kabul ediyoruz.",
        },
      ],
    },
    {
      label: "SGK",
      items: [
        {
          question: "SGK işitme cihazının ne kadarını karşılıyor?",
          answer:
            "SGK, şartları sağlayanlara işitme cihazı için belirli bir katkı tutarı öder; bedelin tamamını değil. Tutar sigortalılık durumu ve yaş grubuna göre farklıdır ve yıllık güncellenir; güncel tutarlar için SGK rehberimize bakabilirsiniz.",
        },
        {
          question: "SGK desteği için neler gerekir?",
          answer:
            "İşitme kaybını gösteren sağlık kurulu raporu ve uzman hekim tarafından düzenlenen reçete gerekir; yalnızca sigortalı olmak yeterli değildir. Merkezimiz, süreçte size destek olur.",
        },
      ],
    },
    {
      label: "Cihaz seçimi",
      items: [
        {
          question: "İşitme cihazı almadan önce işitme testi gerekir mi?",
          answer:
            "Evet. Doğru cihaz tipi ve güç seviyesi, işitme kaybınızın derecesi bilinmeden belirlenemez. Avrasya İşitme'de işitme testi ücretsizdir.",
        },
        {
          question: "İşitme cihazı deneme yapılabilir mi?",
          answer:
            "Evet. Cihaz deneme süreci ücret talep edilmeden ve satın alma yükümlülüğü getirmeden sunulur; stok durumuna bağlı olarak karşılaştırmalı deneme de değerlendirilebilir.",
        },
        {
          question: "İşitme cihazı kaç yıl kullanılır?",
          answer:
            "Cihazlar genellikle yıllarca kullanılır; süre cihaz tipine, kullanım yoğunluğuna, bakıma ve teknolojiye göre değişir. Düzenli bakım ve teknik servis desteği kullanım ömrünü olumlu etkiler; SGK yenileme koşulları ayrıca değerlendirilir.",
        },
      ],
    },
    {
      label: "Hizmet ve süreç",
      items: [
        {
          question: "Cihaz fiyatına ayar dahil mi?",
          answer:
            "İşitme cihazı yalnızca bir ürün değil, uygulama ve ayar gerektiren bir süreçtir. Merkezimizde cihaz uygulaması, kişiye özel ayar, kullanım desteği ve teknik servis sürecin parçasıdır; kapsamı teklif aşamasında birlikte netleştiririz.",
        },
        {
          question: "Gebze veya Çayırova'dan fiyat bilgisi için nereye gitmeliyim?",
          answer:
            "Gebze ve Çayırova'da şubemiz yoktur; merkezimiz Darıca'dadır ve bu ilçelerden gelen danışanlarımızı orada ağırlıyoruz. Gelmeden önce telefon veya WhatsApp ile ön bilgi alabilirsiniz.",
        },
        {
          question: "Fiyat bilgisini nasıl alabilirim?",
          answer:
            "Telefon, WhatsApp veya iletişim sayfası üzerinden bize ulaşabilir ya da Darıca'daki merkezimizde ücretsiz işitme testi randevusu alabilirsiniz. Kişiye özel fiyat bilgisi, değerlendirme sonrasında verilir.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
