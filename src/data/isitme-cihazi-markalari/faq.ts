// Marka SSS — Faz 2 P2. Üretici kaynaklı bilgiler (kuruluş, merkez, teknoloji/uygulama adları),
// "bağlı değiliz / tarafsız", "altı ana marka", stok ve randevu tavsiyesi ifadeleri çıkarıldı.
// 18 marka ve "18 markanın tamamında teknik servis" SoT'ta doğrulanmıştır (PRODUCT_SOT §1).
import { contactConfig } from "../../config/contact";
import { nuearModels } from "../nuear/models";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

const nuearFamilies = (nuearModels.items as { name: string }[]).map((i) => i.name.replace(/^NuEar\s+/, "")).join(", ");

export const brandsFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "İşitme Cihazı Markaları Hakkında Sık Sorulan Sorular",
  intro: "Markalar, modeller, karşılaştırma ve seçim hakkında en çok sorulan soruların kısa ve net cevapları.",
  decisionCard: {
    title: "Size uygun marka ve modeli birlikte belirleyelim",
    points: ["Ücretsiz işitme testi", "18 marka", "18 markada teknik servis", "Darıca'daki merkezimizde yüz yüze görüşme"],
    ctaLabel: "Bizi Arayın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Markalar",
      items: [
        {
          question: "İşitme cihazı markaları nelerdir?",
          answer:
            "Merkezimizde 18 markayla çalışıyoruz: Oticon, Phonak, Signia, Widex, ReSound, NuEar, Unitron, Bernafon, Audio Service, Rexton, Sonic, Philips Hearing, A&M, Audifon, Beltone, Coselgi, Maico ve Vista. Her markanın kendi sayfası vardır.",
        },
        {
          question: "Hangi markalarda teknik servis veriyorsunuz?",
          answer: "Sattığımız 18 markanın tamamında merkezimizde teknik servis veriyoruz.",
        },
        {
          question: "En iyi işitme cihazı markası hangisi?",
          answer:
            "Tek bir marka herkes için en iyi olmayabilir; seçim cihazın tipi, işitme kaybı, kullanım ortamı, bağlantı ihtiyacı, kullanım kolaylığı ve servis gibi kriterlere göre değişebilir. Bu yüzden markaları sıralamıyoruz; ihtiyacınıza uyan modeli birlikte belirliyoruz.",
        },
        {
          question: "NuEar hangi model ailelerini içeriyor?",
          answer: `Sitemizdeki NuEar sayfasında ${nuearFamilies} model aileleri yer alıyor. Ayrıntılar marka sayfasındadır.`,
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
            "Model daha belirleyicidir. Marka bir model yelpazesini anlatır, model ise cihazın tipini, gücünü, bağlantı ve şarj özelliklerini belirler. Aynı markanın içinde bile çok farklı ihtiyaçlara yönelik aileler bulunur.",
        },
        {
          question: "Oticon mu Phonak mı?",
          answer:
            "Kazanan bir cevap yok; kriterlere bakın. İki markanın model ailelerini, cihaz türü ve özellik etiketlerini marka sayfalarından ve yukarıdaki karşılaştırma tablosundan inceleyebilirsiniz. Hangisinin uygun olduğu modele ve ihtiyacınıza bağlıdır.",
        },
        {
          question: "Signia mı Widex mi?",
          answer:
            "Bu da kriter meselesidir. İki markanın model ailelerini ve etiketlerini karşılaştırma tablosunda ve marka sayfalarında görebilirsiniz. Hangisinin size uygun olduğu, işitme kaybınıza ve önceliklerinize göre belirlenir.",
        },
        {
          question: "İşitme cihazı markasını değiştirmek mümkün mü?",
          answer:
            "Mümkündür; ancak cihazlar ve ayarlar kişiye göre yapıldığı için mevcut cihazınızın durumu ve yeni cihazın uygunluğu birlikte değerlendirilir. Bu kararı, işitme testi ve görüşmeyle netleştirmenizi öneririz.",
        },
      ],
    },
    {
      label: "Cihaz Türü ve Özellik",
      items: [
        {
          question: "RIC cihazlarda hangi markalar var?",
          answer:
            "Sitemizde RIC etiketli aileler Phonak, Signia, Widex, ReSound ve NuEar markalarında yer alıyor. Oticon'un yerleşim bilgisi model listemizde etiketli olmadığı için Oticon'un RIC seçeneklerini marka sayfasında inceleyin.",
        },
        {
          question: "Şarjlı işitme cihazlarında hangi markalar var?",
          answer:
            "Profili yer alan markaların hepsinde şarjlı etiketli aileler bulunuyor; ancak her aile şarjlı değil. Bir ailenin şarjlı sürümü olup olmadığını marka sayfasında ve değerlendirmede modele göre doğrulayın.",
        },
        {
          question: "Kulak içi ve küçük cihazlar hangi markalarda var?",
          answer:
            "Sitemizde kulak içi seçeneği anılan aileler arasında Oticon Own SI, Phonak Virto, Signia Insio ve Silk ile NuEar Miniscopic Synergy iQ yer alıyor. Küçük cihaz kulak yapısına bağlı olduğu için uygunluk ayrıca değerlendirilir.",
        },
        {
          question: "Çocuklar için hangi markalarda cihaz var?",
          answer:
            "Sitemizdeki model listelerinde çocuk etiketli aileler Oticon ve Phonak markalarında yer alıyor. Çocuk için cihaz kararı, çocuk işitme değerlendirmesinden sonra verilir.",
        },
      ],
    },
    {
      label: "Fiyat, SGK ve Deneme",
      items: [
        {
          question: "İşitme cihazı markaları arasında fiyat farkı neden var?",
          answer:
            "Fark yalnızca markadan değil; cihaz tipi, teknoloji seviyesi, özellikler ve hizmet kapsamından gelir. Bu sayfada fiyat paylaşmıyoruz; nedenlerin ayrıntısı fiyat rehberimizde, kişiye özel bilgi ise işitme değerlendirmesinden sonra verilir.",
        },
        {
          question: "SGK marka seçimini etkiler mi?",
          answer:
            "SGK süreci, belgeler ve güncel tutarlar ayrı bir rehberde yer alır ve her yıl değişebilir. Marka ve model seçimiyle SGK desteğinin birlikte nasıl değerlendirileceğini, SGK anlaşmalı merkezimizde görüşmede anlatıyoruz.",
        },
        {
          question: "İşitme cihazı denemesi yapılabilir mi?",
          answer:
            "Evet. Merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılır; cihazı satın alarak 7 güne kadar da deneyebilir, uygun bulmazsanız iade edebilirsiniz. Ödediğiniz tutar kesintisiz iade edilir. Kulak içi cihazlar 7 günlük deneme kapsamı dışındadır; ayrıntılar cihaz deneme sayfamızda.",
        },
        {
          question: "Markalar hakkında nerede bilgi alabilirim?",
          answer:
            "18 markanın model aileleri hakkında Darıca'daki merkezimizde bilgi alabilirsiniz; hangi modelin uygun olduğu işitme değerlendirmesinden sonra belirlenir. Randevusuz gelebilirsiniz; işitme testi gibi hizmetler randevuyla verildiği için önce aramanız iyi olur. Gebze ve Çayırova'da şubemiz yok; bu ilçelerden gelen danışanlarımız da Darıca merkezimize gelir.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
