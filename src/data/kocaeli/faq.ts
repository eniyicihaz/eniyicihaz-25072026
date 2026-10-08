// Kocaeli landing page — Kapsamlı SSS (13 soru, 3 kategori). Diğer
// sayfalardan daha geniş; cihaz seçimi, fiyat/SGK ve kullanım/destek
// başlıklarını kapsıyor. Sorular gerçek arama niyetlerini (Kocaeli işitme
// cihazı fiyatları, Kocaeli SGK işitme cihazı, marka seçimi, şarjlı/
// Bluetooth, alışma süreci, pil vs şarj) doğal biçimde karşılıyor —
// hiçbir soru zorla şehir adıyla doldurulmadı.
import { contactConfig } from "../../config/contact";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const kocaeliFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Kocaeli İşitme Cihazı Hakkında Sık Sorulan Sorular",
  intro: "Cihaz seçimi, fiyat, SGK, kullanım ve teknik servis hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "İhtiyacınızı Konuşalım mı?",
    points: [
      "Tek fiziksel merkez: Darıca",
      "Kocaeli'nin tamamında evde hizmet",
      "SGK anlaşmalı merkez",
      "Ücretsiz işitme testi",
    ],
    ctaLabel: "Bizi Arayın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Hizmet Bölgesi",
      items: [
        {
          question: "Kocaeli'nin farklı ilçelerinde şubeniz var mı?",
          answer: "Hayır. Tek fiziksel merkezimiz Darıca'dadır; Kocaeli'nin diğer ilçelerinden gelen danışanlarımıza burada hizmet veriyoruz.",
        },
        {
          question: "Evde hizmeti hangi bölgelerde veriyorsunuz?",
          answer: "Evde işitme cihazı hizmetini Kocaeli'nin tüm ilçelerinde ve İstanbul Anadolu Yakası'nın tüm ilçelerinde veriyoruz. Hizmet ücretsizdir ve randevuyla planlanır.",
        },
      ],
    },
    {
      label: "Cihaz Seçimi",
      items: [
        {
          question: "Kocaeli'de işitme cihazı nasıl seçilir?",
          answer: "Öncelikle ücretsiz bir işitme değerlendirmesi yaptırmanızı öneririz; işitme kaybınızın derecesine ve yaşam tarzınıza göre size uygun cihaz seçeneklerini birlikte belirleriz.",
        },
        {
          question: "Hangi işitme cihazı türü bana daha uygun olur?",
          answer: "Kulak arkası, kulak içi, görünmez, şarjlı ve Bluetooth özellikli seçenekler arasından, değerlendirme sonucuna göre öneride bulunuyoruz.",
        },
        {
          question: "Kulak içi ve kulak arkası cihaz arasındaki fark nedir?",
          answer: "Kulak arkası modeller daha geniş bir işitme kaybı aralığında güçlü performans sunar; kulak içi modeller ise daha az göze çarpan, kulak yapınıza özel üretilen bir kullanım sağlar.",
        },
        {
          question: "İşitme cihazı markası seçerken nelere dikkat etmeliyim?",
          answer: "Marka kadar; cihazın ihtiyacınıza uygunluğu, garanti kapsamı ve yerel teknik servis desteği de önemlidir. 18 marka arasından size uygun olanı birlikte değerlendiriyoruz.",
        },
      ],
    },
    {
      label: "Fiyat ve SGK",
      items: [
        {
          question: "Kocaeli işitme cihazı fiyatları neye göre değişir?",
          answer: "Fiyatlar teknoloji seviyesi, özellikler ve markaya göre değişir. Sabit bir rakam vermek yerine, ihtiyacınıza uygun gerçekçi seçenekleri birlikte değerlendiriyoruz.",
        },
        {
          question: "Kocaeli'de SGK işitme cihazı desteğinden nasıl yararlanırım?",
          answer: "SGK anlaşmalı bir merkezden hizmet alarak, rapor ve reçete süreciyle SGK desteğinden yararlanabilirsiniz.",
        },
        {
          question: "SGK desteği sonrası ödeyeceğim tutar ne kadar olur?",
          answer: "SGK'nın karşıladığı tutar dışında kalan katkı payı, seçtiğiniz cihaza göre değişir; bu tutar değerlendirme sırasında net olarak açıklanır.",
        },
      ],
    },
    {
      label: "Kullanım ve Destek",
      items: [
        {
          question: "Şarjlı işitme cihazları nasıl çalışır?",
          answer: "Pil değiştirmeye gerek kalmadan, gece şarj edip gün boyu kullanabileceğiniz bir sistemle çalışır.",
        },
        {
          question: "Pilli ve şarjlı işitme cihazları arasında ne fark var?",
          answer: "Pilli cihazlarda belirli aralıklarla pil değişimi gerekirken, şarjlı cihazlarda bu ihtiyaç ortadan kalkar; tercih genellikle kullanım alışkanlığına göre yapılır.",
        },
        {
          question: "Bluetooth özellikli işitme cihazları ne sağlar?",
          answer: "Telefon görüşmelerini, TV sesini ve diğer uyumlu cihazları doğrudan işitme cihazınıza kablosuz olarak aktarmanızı sağlar.",
        },
        {
          question: "Kocaeli'den gelip cihazı denemek mümkün mü?",
          answer: "İki aşama var: Önce Darıca'daki merkezimizde yaklaşık 20 dakikalık ücretsiz bir demo yapılır. Ardından isterseniz cihazı satın alıp 7 güne kadar günlük hayatınızda kullanabilirsiniz; uygun bulmazsanız cihazı iade eder, ödediğiniz tutarı kesintisiz geri alırsınız. Kulak içi cihazlar 7 günlük denemeye dahil değildir.",
        },
        {
          question: "İşitme cihazına alışma süreci ne kadar sürer?",
          answer: "Alışma süreci kişiden kişiye değişir; genellikle ilk haftalarda kademeli kullanımla başlanır ve zamanla günlük kullanım süresi artırılır.",
        },
        {
          question: "İşitme cihazımın ayarı sonradan değiştirilebilir mi?",
          answer: "Evet; ilk ayarın ardından kullanım deneyiminize göre ince ayar ve takip desteği sağlıyoruz.",
        },
        {
          question: "Teknik servis ve bakım hizmeti sunuyor musunuz?",
          answer: "Evet. Sattığımız 18 markanın tamamında Darıca'daki merkezimizde teknik servis veriyoruz; ücret cihazın durumuna göre belirlenir.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
