// SSS — 14 soru, gerçek arama niyetleri. BrandPageFaq, FAQPage şemasını bu
// verinin AYNISINDAN üretir (görünür içerik = şema; QUALITY_GATES.md §4).
// Cevaplar kısa ve doğrudan alıntılanabilir (GEO); derinlik için sayfadaki
// bölümlere ve ilgili sayfalara güvenilir. Fiyat ve SGK cevapları bilerek
// kısa ve yönlendiricidir — başka sayfaların içeriğini tekrar etmez. Hiçbir
// cevapta fiyat/tutar, garanti oranı ya da tıbbi kesinlik yoktur.
import { contactConfig } from "../../config/contact";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const devicesFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "İşitme Cihazları Hakkında Sık Sorulan Sorular",
  intro: "Cihaz türleri, özellikler, seçim ve süreç hakkında en çok sorulan soruların kısa ve net cevapları.",
  decisionCard: {
    title: "Hangi cihazın uygun olduğunu birlikte belirleyelim",
    points: ["Ücretsiz işitme testi", "Cihaz deneme", "Cihaz türleri hakkında bilgi", "Darıca'daki merkezimizde yüz yüze görüşme"],
    ctaLabel: "Hemen Ara",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Temel",
      items: [
        {
          question: "İşitme cihazı nedir?",
          answer:
            "İşitme cihazı; sesi mikrofonla alan, işlemciyle kişinin işitme kaybına göre ayarlayan ve kulağa ileten küçük bir elektronik cihazdır. İşitme kaybını ortadan kaldırmaz; duyulamayan sesleri daha erişilebilir hale getirerek konuşmayı takip etmeyi kolaylaştırmayı amaçlar.",
        },
        {
          question: "İşitme cihazı nasıl çalışır?",
          answer:
            "Cihaz üç adımda çalışır: mikrofon sesi alır, işlemci sesi sizin işitme testinize göre ayarlanmış programla işler, hoparlör (alıcı) işlenen sesi kulağa iletir. Pil veya şarj cihazın enerjisini sağlar; bazı modellerde kablosuz bağlantı da bulunur.",
        },
        {
          question: "İşitme cihazı kaç yıl kullanılır?",
          answer:
            "Kullanım süresi cihaza, bakıma ve kullanım koşullarına göre değişir; tek bir süre vermek doğru olmaz. Düzenli temizlik, bakım ve servis desteği cihazın performansını korumaya yardım eder. İhtiyaçlar da zamanla değişebileceği için cihaz ve ayarlar düzenli olarak kontrol edilir.",
        },
      ],
    },
    {
      label: "Seçim",
      items: [
        {
          question: "Hangi işitme cihazı bana uygun?",
          answer:
            "Bu, işitme kaybınıza, kulak yapınıza ve günlük önceliklerinize göre belirlenir; herkes için geçerli tek bir cevap yoktur. İşitme testiyle başlamak, hangi türlerin değerlendirilebileceğini netleştirir. Seçim sırasında sorulacak soruları sayfamızdaki seçim rehberinde bulabilirsiniz.",
        },
        {
          question: "Kulak içi mi kulak arkası mı daha iyi?",
          answer:
            "İkisinden birinin her zaman daha iyi olduğu söylenemez. Kulak arkası cihazlar genellikle geniş bir kullanım aralığı ve kolay kullanım sunar; kulak içi cihazlar ise daha az görünür ve kulak ölçüsüne göre üretilir. Doğru seçim, kulak yapınıza ve önceliklerinize bağlıdır.",
        },
        {
          question: "RIC (RITE) işitme cihazı nedir?",
          answer:
            "RIC veya RITE, gövdesi kulak arkasında, hoparlörü (alıcı) kulak kanalında bulunan ince bir kulak arkası cihaz türüdür. İnce kabloyla bağlanan alıcı sayesinde genellikle daha az fark edilen bir görünüm sunar ve geniş özellik seçenekleri içerebilir.",
        },
        {
          question: "Görünmez işitme cihazı nedir?",
          answer:
            "Görünmez (CIC ve IIC) cihazlar, kulak kanalının içine yerleşen ve dışarıdan çok az fark edilen küçük cihazlardır. Küçük boyut bazı özellikleri sınırlayabilir ve her kulak kanalı bu türe uygun olmayabilir; uygunluk değerlendirme sonrasında belirlenir.",
        },
        {
          question: "İşitme cihazı deneme yapılabilir mi?",
          answer:
            "Evet. Merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılır; cihazı satın alarak 7 güne kadar da deneyebilir, uygun bulmazsanız iade edebilirsiniz. Ödediğiniz tutar kesintisiz iade edilir. Kulak içi cihazlar 7 günlük deneme kapsamı dışındadır; ayrıntılar cihaz deneme sayfamızda.",
        },
      ],
    },
    {
      label: "Özellikler",
      items: [
        {
          question: "Şarjlı işitme cihazı nedir?",
          answer:
            "Şarjlı işitme cihazı, değiştirilebilir küçük pil yerine dahili bataryası olan ve genellikle geceleri şarj kutusunda doldurulan cihazdır. Küçük pil değiştirmekte zorlananlar için kolaylık sağlayabilir; şarj süresi ve kullanım süresi modele göre değişir.",
        },
        {
          question: "Bluetooth işitme cihazı ne işe yarar?",
          answer:
            "Bluetooth, cihazı telefon, televizyon ve uyumlu aygıtlarla kablosuz bağlar. Böylece telefon görüşmesi, müzik veya televizyon sesi doğrudan cihaza aktarılabilir. Uyumluluk modele ve telefona göre değiştiğinden, satın almadan önce doğrulanmalıdır.",
        },
        {
          question: "İşitme cihazı telefona bağlanır mı?",
          answer:
            "Bluetooth özellikli modeller telefona bağlanabilir; her model bunu desteklemez. Bağlantı türü ve uyumlu telefon listesi cihaza göre farklıdır. Kendi telefonunuzun cihazla uyumunu değerlendirme sırasında birlikte kontrol edebiliriz.",
        },
      ],
    },
    {
      label: "Fiyat, SGK ve Bölge",
      items: [
        {
          question: "İşitme cihazı fiyatları neden değişiyor?",
          answer:
            "Fiyatı cihaz tipi, teknoloji seviyesi, özellikler ve hizmet kapsamı birlikte belirler. Biz fiyat listesi yayımlamıyoruz; ayrıntılı açıklama fiyat rehberimizde, kişiye özel bilgi ise işitme değerlendirmesinden sonra verilir.",
        },
        {
          question: "SGK işitme cihazını karşılıyor mu?",
          answer:
            "Koşulların sağlanması halinde SGK, işitme cihazı için destek sağlayabilir; tutarlar ve şartlar güncellenir. SGK anlaşmalı bir merkez olarak süreç konusunda danışmanlık veriyoruz. Güncel bilgi ve belgeler için SGK rehberimize bakabilirsiniz.",
        },
        {
          question: "Darıca, Gebze veya Çayırova'dan nasıl hizmet alabilirim?",
          answer:
            "Merkezimiz Darıca'dadır. Gebze ve Çayırova'da şubemiz yoktur; bu ilçelerden gelen danışanlarımız Darıca'daki merkezimize gelerek hizmet alır. Randevusuz gelebilirsiniz; işitme testi gibi hizmetler randevuyla verildiği için önce aramanız iyi olur. Telefon veya WhatsApp ile ön bilgi de alabilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
