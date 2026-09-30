// SSS — 20 soru, gerçek arama niyetleri. BrandPageFaq, FAQPage şemasını bu verinin
// AYNISINDAN üretir (görünür içerik = şema; QUALITY_GATES.md §4). İlk cümle doğrudan
// alıntılanabilir cevaptır (GEO / cevap-öncelikli).
//
// Korunan eski doğrulanmış cevaplar: Darıca'da ücretsiz yapılıyor mu, gerçekten ücretsiz mi,
// Gebze/Çayırova'dan gelinebilir mi, randevu, hazırlık, testte ne yapılır, online-merkez
// farkı, cihaz almak zorunda mıyım, SGK. Yeni: işitme testi nedir/nasıl yapılır/ne kadar
// sürer/sonuç nasıl okunur/odyogram/KBB/kaybım olduğunu nasıl anlarım/online güvenilir mi/
// cihaz için test gerekli mi/nerede yapılır/sonuç ne zaman değerlendirilir.
// KALDIRILAN: "aynı gün sonuç" vaadi (doğrulanmadı). Süre için rakam yok. Fiyat yok.
import { contactConfig } from "../../config/contact";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const testFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "İşitme Testi Hakkında Sık Sorulan Sorular",
  intro: "İşitme testinin nasıl yapıldığı, sonucun nasıl okunduğu, ücretsiz test ve Gebze, Çayırova gibi çevre ilçelerden ulaşım hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Darıca'da ücretsiz işitme testi için randevu alın",
    points: ["Uzman odyometrist eşliğinde test", "Satın alma taahhüdü yok", "Sonuçların birlikte değerlendirilmesi", "SGK danışmanlığı"],
    ctaLabel: "Hemen Randevu Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Test Hakkında",
      items: [
        {
          question: "İşitme testi nedir?",
          answer:
            "İşitme testi, farklı frekans ve şiddetteki seslere verdiğiniz tepkilerin ölçülerek işitme durumunuzun değerlendirildiği bir muayenedir. Sonuçlar odyogram adı verilen grafikte kaydedilir; kesin tanı ve tedavi yönlendirmesi için sonucun bir uzman tarafından yorumlanması gerekir.",
        },
        {
          question: "İşitme testi nasıl yapılır?",
          answer:
            "Ön görüşmeyle başlar; şikayetleriniz ve sağlık geçmişiniz dinlenir, kulak muayenesi yapılır ve kulaklıkla verilen seslerin duyulduğu ölçülür. Sonuçlar odyogramda kaydedilir ve sizinle birlikte yorumlanır.",
        },
        {
          question: "İşitme testi sırasında neler yapılır?",
          answer:
            "Kulak muayenesi, şikayetlerinizin değerlendirilmesi ve farklı frekanslardaki seslere verdiğiniz tepkilerin ölçüldüğü bir odyometri testi uygulanır; konuşmayı anlama düzeyi de değerlendirilir. İhtiyaca göre tamamlayıcı testler gündeme gelebilir.",
        },
        {
          question: "İşitme testi ne kadar sürer?",
          answer:
            "Süre, uygulanacak değerlendirmelere göre değişir; işitme testi genellikle kısa sürede tamamlanır. Kesin süre kişiden kişiye farklı olduğundan, planlama için randevu alırken merkezimizle görüşebilirsiniz.",
        },
        {
          question: "İşitme testinden önce hazırlık gerekir mi, aç karnına yapılır mı?",
          answer:
            "İşitme testi için genellikle özel bir açlık hazırlığı gerekmez. Varsa önceki işitme testi sonuçlarınızı ve kullandığınız ilaçların listesini yanınızda getirmeniz faydalı olabilir.",
        },
        {
          question: "İşitme testi için KBB gerekir mi?",
          answer:
            "İşitme testi ihtiyacınıza göre doğrudan planlanabilir; ancak bazı durumlarda KBB değerlendirmesi gerekebilir. Ani başlayan işitme kaybı, kulak ağrısı veya kulaktan akıntı varsa önce vakit kaybetmeden bir KBB uzmanına başvurmalısınız. Test sonucuna göre de KBB yönlendirmesi yapılabilir.",
        },
        {
          question: "İşitme testi için randevu gerekiyor mu?",
          answer: "Randevu almanızı öneririz; bu, beklemeden karşılanmanızı sağlar.",
        },
      ],
    },
    {
      label: "Sonuçlar",
      items: [
        {
          question: "İşitme testi sonucu nasıl okunur?",
          answer:
            "Sonuç odyogramda gösterilir: yatay eksen frekansı (Hz), dikey eksen işitme seviyesini (dB) gösterir ve sağ ile sol kulak ayrı işaretlerle çizilir. İşaretler grafikte ne kadar yukarıdaysa o frekansta o kadar hafif ses duyulmuştur; yorum bir uzman tarafından yapılır.",
        },
        {
          question: "Odyogram nedir?",
          answer:
            "Odyogram, işitme testinde ölçülen işitme eşiklerinin frekansa göre gösterildiği grafiktir. Hangi seslerde ve hangi kulakta fark olduğunu tek bakışta görmeyi sağlar; tek başına kesin tanı koymaz.",
        },
        {
          question: "İşitme testi sonucu ne zaman değerlendirilir?",
          answer:
            "Sonuçlar, test sırasında ve ardından yapılan görüşmede sizinle birlikte değerlendirilir. Ek bir inceleme gerekiyorsa bu durum size açıklanır.",
        },
        {
          question: "İşitme testinden sonra ne yapılır?",
          answer:
            "Sonuca göre gerekirse KBB yönlendirmesi, takip veya işitme cihazı seçenekleri konuşulur; sonuç normal sınırlardaysa cihaz önerilmez. Test sonrası herhangi bir satın alma zorunluluğu yoktur.",
        },
        {
          question: "İşitme kaybım olduğunu nasıl anlarım?",
          answer:
            "Televizyon sesini fazla açmak, konuşmaları sık tekrar ettirmek, kalabalıkta ya da telefonda zorlanmak veya bir kulağın daha az duyduğunu fark etmek işitme kaybını düşündürebilir; ancak kesin yol bir işitme testidir. Ani başlayan kayıpta beklemeden KBB'ye başvurun.",
        },
      ],
    },
    {
      label: "Ücretsiz ve Online Test",
      items: [
        {
          question: "Ücretsiz işitme testi nasıl yapılır?",
          answer:
            "Merkezimize randevu alarak gelirsiniz; test, bir odyometrist eşliğinde ön görüşme, şikayet değerlendirmesi ve temel odyolojik ölçümü kapsar. Herhangi bir ücret talep edilmez ve satın alma taahhüdü yoktur.",
        },
        {
          question: "Ücretsiz işitme testi gerçekten ücretsiz mi?",
          answer: "Evet; test herhangi bir ücret talep edilmeden ve satın alma taahhüdü olmadan sunulur. Ek testlerin kapsamı için randevuda bilgi alabilirsiniz.",
        },
        {
          question: "Online işitme testi güvenilir mi?",
          answer:
            "Online test yalnızca genel bir ön fikir verir; ev ortamı ve ekipman standart olmadığı için klinik bir ölçüm değildir ve tanı amacıyla kullanılmamalıdır. Kesin değerlendirme için bir odyometrist tarafından yapılan test gerekir.",
        },
        {
          question: "Online işitme testi ile merkezde yapılan test arasındaki fark nedir?",
          answer:
            "Online tarama kulaklığınızla kendi başınıza yaptığınız bir ön değerlendirmedir; merkezimizdeki test ise kalibre edilmiş cihazlarla, odyometrist eşliğinde yapılır, kulak muayenesini içerir ve daha güvenilir bir sonuç verir.",
        },
        {
          question: "İşitme cihazı için işitme testi gerekli mi?",
          answer:
            "Evet; işitme cihazı, işitme testi sonucuna göre seçilir ve ayarlanır. Aynı zamanda test, cihazın gerekip gerekmediğini de gösterir; her testin sonunda cihaz önerilmez ve test sonrası cihaz almak zorunda değilsiniz.",
        },
      ],
    },
    {
      label: "Darıca, Gebze, Çayırova",
      items: [
        {
          question: "Darıca'da işitme testi nerede yapılır?",
          answer:
            "Avrasya İşitme'nin Darıca'daki merkezinde yapılır: Fevziçakmak Mah. Dr. Zeki Acar Cad. No:77/7, Palandöken Eczanesi'nin üst katında, Farabi Ağız ve Diş Sağlığı Merkezi girişinin tam karşısında. Randevu için telefon veya WhatsApp'tan ulaşabilirsiniz.",
        },
        {
          question: "Gebze'den işitme testi için Darıca'ya gelebilir miyim?",
          answer:
            "Evet. Gebze'de şubemiz yoktur; Gebze'den gelen danışanlarımızı Darıca'daki merkezimizde ağırlıyoruz. Randevunuzu telefon veya WhatsApp üzerinden alabilirsiniz.",
        },
        {
          question: "Çayırova'dan işitme testi için gelebilir miyim?",
          answer:
            "Evet. Çayırova'da şubemiz yoktur; Çayırova'dan gelen danışanlarımız da Darıca'daki merkezimize gelir ve aynı randevu ile test süreci geçerlidir.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
