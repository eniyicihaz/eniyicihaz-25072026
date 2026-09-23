// "Teknolojiler" deep-dive hub for the /teknolojiler/tinnitus-cozumleri
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every /isitme-cihazlari/* and
// /teknolojiler/* feature page. icon values are limited to the
// component's fixed set (brain/dna/globe/radar/bluetooth/smartphone/
// radio/layers) — "radio" for the sound-generator's audio broadcasting
// function; "brain" for fractal-tone technology (a design rooted in
// attention/habituation research, a fitting near-literal use);
// "smartphone" for app-based sound management; "dna" for the combined,
// personalized hearing-plus-relief signal path (consistent with the
// Görünmez and Konuşma Odaklı pages' anatomy/personalization mapping).

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const tinnitusCozumleriTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Tinnitus Desteğinde Öne Çıkan Bileşenler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Teknolojik kapsam üreticiye ve seçilen modele göre değişebilir.",
  items: [
    {
      id: "ses-ureteci",
      icon: "radio",
      navLabel: "Ses Üreteci Teknolojisi",
      title: "Dahili Ses Üreteci (Sound Generator) Teknolojisi",
      lead: "Cihaz içindeki küçük bir hoparlör, kişiye özel ayarlanmış hafif ve rahatlatıcı sesler üretir.",
      howItWorks: "Cihaz, önceden yüklenmiş ses kütüphanesinden odyometristiniz tarafından seçilen bir sesi, belirlenen seviyede sürekli veya ihtiyaç anında çalar.",
      advantages: [
        "Ayrı bir cihaz taşımaya gerek bırakmaz",
        "İşitme desteğiyle aynı cihazda birlikte çalışır",
        "Ses türü ve seviyesi kişiye özel ayarlanabilir",
      ],
      models: ["Tinnitus Destekli Modeller"],
      expertNote: "Ses üreteci bir tedavi aracı değildir; kullanımı bir odyometrist eşliğinde planlanmalıdır.",
    },
    {
      id: "fraktal-ton",
      icon: "brain",
      navLabel: "Fraktal Ton Teknolojisi",
      title: "Fraktal Ton Teknolojisi",
      lead: "Öngörülemeyen, tekrar etmeyen desenlerle çalan fraktal tonlar, bazı kullanıcılarda alışkanlık (habitüasyon) etkisini azaltmaya yardımcı olabilir.",
      howItWorks: "Ton, matematiksel bir fraktal desene göre üretilir; bu sayede ses hiçbir zaman tam olarak aynı şekilde tekrarlanmaz.",
      advantages: [
        "Sabit seslere kıyasla daha az monoton bir dinleme deneyimi",
        "Bazı kullanıcılar için daha rahatlatıcı bulunabilir",
        "Kişisel tercihe göre seviyesi ayarlanabilir",
      ],
      models: ["Fraktal Ton Destekli Modeller"],
      expertNote: "Fraktal tonların etkisi kişiden kişiye değişir; en uygun ses türü odyometrist rehberliğinde belirlenir.",
    },
    {
      id: "uygulama-yonetimi",
      icon: "smartphone",
      navLabel: "Uygulama Üzerinden Yönetim",
      title: "Akıllı Telefon Uygulamasıyla Ses Yönetimi",
      lead: "Bazı modellerde ses üreteci, akıllı telefon uygulaması üzerinden açılıp kapatılabilir ve seviyesi ayarlanabilir.",
      howItWorks: "Cihaz, uygulamaya Bluetooth üzerinden bağlanır; kullanıcı, önceden tanımlanmış sınırlar içinde ses türünü ve seviyesini uygulamadan değiştirebilir.",
      advantages: [
        "İhtiyaç anında hızlı erişim",
        "Farklı ortamlarda farklı ses tercihleri kaydedilebilir",
        "Kullanım alışkanlığını takip etme imkânı",
      ],
      models: ["Uygulama Kontrollü Tinnitus Destekli Modeller"],
      expertNote: "Uygulama üzerindeki ayar aralığı, odyometristiniz tarafından belirlenen sınırlarla kısıtlı olabilir.",
    },
    {
      id: "kombine-destek",
      icon: "dna",
      navLabel: "Kombine Destek",
      title: "İşitme Desteği ile Kombine Çalışma",
      lead: "Aynı cihaz, hem işitme kaybına yönelik amplifikasyonu hem de tinnitus destek sesini aynı anda sağlayabilir.",
      howItWorks: "Cihazın işlemcisi, amplifikasyon ve ses üreteci sinyallerini eş zamanlı işleyerek ikisini de kullanıcıya aynı anda sunar.",
      advantages: [
        "Tek cihazla iki ihtiyacı bir arada karşılama",
        "İşitme kaybı ve tinnitus'un birlikte değerlendirilmesine imkân tanır",
        "Ayrı bir aksesuar taşıma ihtiyacını ortadan kaldırır",
      ],
      models: ["Kombine Destekli Modeller"],
      expertNote: "Kombine kullanım, işitme kaybı ve tinnitus'un birlikte görüldüğü durumlarda değerlendirilir; her kullanıcı için uygun olmayabilir.",
    },
  ],
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
  accentColorNavActiveBg: "rgb(147 51 234 / 0.1)",
  accentColorCalloutBg: "rgb(147 51 234 / 0.06)",
  accentColorCalloutLabel: "#7e22ce",
};
