// Gebze landing page — SSS (Gebze nihai paket). 13 soru, dört grup; her cevap kısa ve
// tek başına okunabilir (GEO/AI alıntısı için), ayrıntı sayfadaki bölümlerde.
// Kaynak: LOCAL_SOURCE_OF_TRUTH §1/§2/§3/§5 (tek fiziksel merkez Darıca; hatlar
// 502/440/510/515 [TIME-SENSITIVE]; asansör, tekerlekli sandalye, otopark;
// walk-in kabul + hizmet bazında randevu birlikte), SERVICE_SOURCE_OF_TRUTH
// H1–H40/§1.5/§2.2–§2.15/§3. Hastane adı, mesafe, güzergâh, fiyat/SGK tutarı YAZILMAZ.
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const gebzeFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Gebze'den Gelenlerin Sık Sorduğu Sorular",
  intro: "Merkez, randevu, SGK, fiyat ve satış sonrası hizmetler hakkında kısa cevaplar.",
  categories: [
    {
      label: "Merkez ve Ulaşım",
      items: [
        {
          question: "Gebze'de şubeniz var mı?",
          answer:
            "Hayır. Tek fiziksel merkezimiz Darıca'dadır; Gebze'den gelen danışanlarımızı Darıca'daki merkezimizde ağırlıyoruz.",
        },
        {
          question: "Gebze'den hangi hatlarla ve hangi durakta gelinir?",
          answer:
            "502, 440, 510 ve 515 numaralı hatlarla gelebilirsiniz; merkez Farabi Devlet Hastanesi durağının karşısındadır. Hat bilgileri değişebilir, yola çıkmadan önce güncel ulaşım bilgisini kontrol edin.",
        },
        {
          question: "Otopark ve erişilebilirlik durumu nedir?",
          answer:
            "Otopark imkânı bulunuyor. Merkez 1. kattadır; asansörle çıkılır ve tekerlekli sandalyeyle erişim uygundur.",
        },
      ],
    },
    {
      label: "Randevu ve SGK",
      items: [
        {
          question: "Hangi işlemler için randevu gerekir?",
          answer:
            "İşitme testi, cihaz ayarı, kontrol, teknik servis, uzaktan ayar ve evde hizmet için randevu gerekir. Pil ve aksesuar alımı ile SGK işlem desteği için gerekmez. Merkezimiz ziyaretçi kabul eder, ancak bu bir işlemin randevusuz yapılacağı anlamına gelmez.",
        },
        {
          question: "SGK işlemleri konusunda nasıl destek alabilirim?",
          answer:
            "SGK işlem desteği ücretsizdir ve randevu gerektirmez. Elinizde varsa işitme testi, rapor ve reçete ile gelebilirsiniz; süreci merkezde birlikte netleştiririz.",
        },
        {
          question: "Raporum veya reçetem henüz yoksa ne yapmalıyım?",
          answer:
            "Gelmeden önce arayın; durumunuza uygun sırayı anlatalım. Hastane işlemleri bizim kontrolümüzde değildir, bu nedenle hastane tarafında süre kişiye göre değişebilir.",
        },
        {
          question: "İlk ziyaret ne kadar sürer?",
          answer:
            "Merkezdeki işlemler yaklaşık 1 saat sürer; işlemlere göre 1–2 saate çıkabilir. SGK'lı ve SGK'sız danışanlar için merkezdeki süre aynıdır. Bu süre kesin bir taahhüt değildir.",
        },
      ],
    },
    {
      label: "Test, Cihaz ve Fiyat",
      items: [
        {
          question: "İşitme testi ve cihaz demosu koşulları nelerdir?",
          answer:
            "İşitme testi Darıca'daki merkezde ücretsiz yapılır ve randevu gerekir. Cihaz demosu yaklaşık 20 dakikadır ve ücretsizdir. Cihazı satın alarak 7 güne kadar deneme ve uygun bulunmazsa ücret iadesi ayrı bir süreçtir; kulak içi cihazlar bu 7 günlük süreç kapsamı dışındadır.",
        },
        {
          question: "Çocuğum için işitme testi yaptırabilir miyim?",
          answer:
            "Evet. 3 yaş ve üstü çocuklar için oyun odyometrisi yapılır; bu test ücretlidir ve randevu gerekir. Ücretsiz işitme testi 5 yaş ve üstü içindir.",
        },
        {
          question: "İşitme cihazı fiyatları ne kadar?",
          answer:
            "Fiyat cihaz türüne, teknoloji seviyesine ve özelliklere göre değişir; sayfada sabit fiyat yayımlamıyoruz. İşitme değerlendirmesinden sonra seçenekler ve fiyat bilgisi paylaşılır; bilgi için bizi arayabilirsiniz.",
        },
      ],
    },
    {
      label: "Uzak Mesafe ve Satış Sonrası",
      items: [
        {
          question: "Her cihaz ayarı için Darıca'ya gelmem gerekir mi?",
          answer:
            "Hayır, her zaman gerekmez. Uygun cihazlarda küçük ayarlar uzaktan yapılabilir (A&M ve Audifon hariç); bu hizmet ücretsiz ve randevuludur. Fiziksel sorunlarda veya kapsamlı programlamada yüz yüze randevu önerilir.",
        },
        {
          question: "Gebze'de evde hizmet alabilir miyim?",
          answer:
            "Evet. Evde hizmetimiz Kocaeli'nin tamamını kapsar; Gebze de bu alandadır. Hizmet ücretsizdir ve randevuyla planlanır; merkezde verdiğimiz hizmetlerin kapsamı doğrultusunda sunulur.",
        },
        {
          question: "Cihazım arızalanırsa teknik servis için ne yapmalıyım?",
          answer:
            "Randevu için arayın ve cihazınızı getirin. Teknik servis duruma göre ücretlidir ve genellikle 3 gün içinde tamamlanır; garanti işlemleri ücretsizdir ve üretici garanti koşulları geçerlidir. Her sorun uzaktan veya evde çözülemeyebilir.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
