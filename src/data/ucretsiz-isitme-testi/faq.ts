// SSS — yalnızca sayfada AÇIKÇA cevaplanmamış gerçek sorular. BrandPageFaq, FAQPage şemasını bu
// verinin AYNISINDAN üretir (görünür içerik = şema; QUALITY_GATES.md §4).
//
// Önceki 20 sorunun her biri tek tek "bu soru sayfada zaten cevaplandı mı?" testinden geçirildi:
//   İşitme testi nedir / nasıl yapılır / neler yapılır / ne kadar sürer / hazırlık-aç karnına /
//   KBB gerekir mi / sonuç nasıl okunur / odyogram nedir / sonuç ne zaman değerlendirilir /
//   testten sonra ne yapılır / kaybım olduğunu nasıl anlarım / ücretsiz test nasıl yapılır /
//   cihaz için test gerekli mi   → sayfanın ilgili bölümlerinde ve Kısa Cevap kutusunda var → ÇIKARILDI.
//   Online güvenilir mi + online-merkez farkı → sayfadaki "Evde veya Online İşitme Testi Yapılabilir mi?" bölümünün ilk cümlesi zaten cevaplıyor → SSS'den çıkarıldı.
//   Gebze'den + Çayırova'dan gelebilir miyim → tek soruda birleştirildi.
//   "Gerçekten ücretsiz mi?" → "ücretli mi, fiyatı ne kadar?" niyetine çevrildi.
// Yeni gerçek boşluk: "Sonucum normal çıkarsa ama şikayetim sürerse?".
// "Aynı gün sonuç" vaadi YOK, süre için rakam YOK. Fiyat YOK (yalnızca "merkezimizde ücret alınmaz").
// Sitenin diğer sayfalarında olduğu gibi FAQPage şeması görünür SSS ile birebir aynıdır; Google'ın
// FAQ zengin sonuçları kısıtlı olduğundan şema sırf rich result beklentisiyle değil, görünür
// içerikle uyumlu makine okunabilir kayıt olarak tutulur.
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const testFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "İşitme Testi Hakkında Sık Sorulan Sorular",
  intro: "Randevu, ücret, sonuç ve Darıca'ya ulaşım hakkında en çok sorulan sorular.",
  categories: [
    {
      label: "Randevu, Ücret ve Sonuç",
      items: [
        {
          question: "İşitme testi için randevu gerekiyor mu?",
          answer:
            "Randevu almanızı öneririz; bu, beklemeden karşılanmanızı sağlar. Randevuyu telefon veya WhatsApp üzerinden oluşturabilirsiniz.",
        },
        {
          question: "İşitme testi ücretli mi, fiyatı ne kadar?",
          answer:
            "Darıca'daki merkezimizde işitme testi herhangi bir ücret talep edilmeden ve satın alma taahhüdü olmadan yapılır. Ek değerlendirmelerin ücretsiz kapsama girip girmediğini randevuda öğrenebilirsiniz. Başka merkezlerin uygulamaları farklı olabilir.",
        },
        {
          question: "Sonucum normal çıkarsa ama şikayetim sürerse ne yapmalıyım?",
          answer:
            "Sonuç normal sınırlarda olsa da şikayetleriniz sürüyorsa bunu uzmana belirtin. Şikayetin türüne göre KBB değerlendirmesi ya da takip testi gündeme gelebilir; kulak çınlaması gibi durumlar için ayrıca değerlendirme yapılabilir.",
        },
      ],
    },
    {
      label: "Darıca, Gebze, Çayırova",
      items: [
        {
          question: "Darıca'da işitme testi nerede yapılır?",
          answer:
            "Avrasya İşitme'nin Darıca'daki merkezinde yapılır: Fevziçakmak Mah. Dr. Zeki Acar Cad. No:77/7, Palandöken Eczanesi'nin üst katında, Farabi Devlet Hastanesi durağının karşısındadır. Randevusuz gelebilirsiniz; işitme testi randevuyla verildiği için önce telefon veya WhatsApp'tan ulaşmanız iyi olur.",
        },
        {
          question: "Gebze veya Çayırova'dan işitme testi için gelebilir miyim?",
          answer:
            "Evet. Gebze ve Çayırova'da şubemiz yoktur; bu ilçelerden gelen danışanlarımız da Darıca'daki merkezimize gelir ve aynı randevu ile test süreci geçerlidir. Randevunuzu telefon veya WhatsApp üzerinden alabilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
