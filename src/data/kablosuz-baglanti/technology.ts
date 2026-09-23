// "Teknolojiler" deep-dive hub for the /teknolojiler/kablosuz-baglanti
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every /isitme-cihazlari/* and
// /teknolojiler/* feature page. icon values are limited to the
// component's fixed set (brain/dna/globe/radar/bluetooth/smartphone/
// radio/layers) — "radio" is a direct, literal fit for telecoil/induction
// loop reception (its first non-stretched use); "radar" for the Roger/FM
// remote-microphone signal (consistent with the Çocuklara Özel page's
// mapping for the same real-world technology); "bluetooth" for the
// ear-to-ear NFMI wireless link (consistent with the Konuşma Odaklı
// page's binaural item); "globe" for CROS/BiCROS's side-to-side
// transmission (a stretch mapping, same reuse pattern every prior page
// applies when the fixed icon set doesn't literally match the topic).

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const kablosuzBaglantiTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Kablosuz Bağlantıda Öne Çıkan Protokoller",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Teknolojik kapsam üreticiye ve seçilen modele göre değişebilir.",
  items: [
    {
      id: "telesarmal",
      icon: "radio",
      navLabel: "Telesarmal (T-Coil)",
      title: "Telesarmal (Telecoil) Döngü Sistemi Bağlantısı",
      lead: "Cihazdaki küçük bir bobin, mekana kurulu manyetik döngü sisteminin yaydığı sinyali doğrudan algılayarak sesi aktarır.",
      howItWorks: "Mekana döşenmiş bir kablo döngüsü, ses kaynağından gelen sinyali manyetik alana dönüştürür; cihazdaki telesarmal bobini bu alanı algılayarak sesi doğrudan işler.",
      advantages: [
        "Arka plan gürültüsünden bağımsız, doğrudan ses alımı",
        "Ek bir pil veya aksesuar şarjı gerektirmez",
        "Birçok kamu binası ve toplu taşıma aracında yaygın altyapı",
      ],
      models: ["Telesarmal Destekli Modeller"],
      expertNote: "Telesarmal, yalnızca bu altyapıya sahip mekanlarda çalışır; mekanın döngü sistemi olup olmadığı önceden kontrol edilmelidir.",
    },
    {
      id: "roger-fm",
      icon: "radar",
      navLabel: "Roger / FM Uzaktan Mikrofon",
      title: "Roger ve FM Uzaktan Mikrofon Sistemleri",
      lead: "Konuşmacının taktığı küçük bir verici mikrofon, sesi doğrudan dinleyicinin cihazına kablosuz olarak aktarır.",
      howItWorks: "Verici mikrofon, konuşmacının sesini toplar ve radyo frekansı üzerinden dinleyicinin cihazındaki alıcıya iletir; ses, mesafe ve ortam gürültüsünden bağımsız olarak net kalır.",
      advantages: [
        "Uzak mesafede bile net ses aktarımı",
        "Sınıf ve toplantı gibi ortamlarda güçlü destek",
        "Ortam gürültüsünden büyük ölçüde bağımsız çalışır",
      ],
      models: ["Roger / FM Uyumlu Modeller"],
      expertNote: "Roger/FM sistemi genellikle ayrıca temin edilir; okul veya iş yeriyle koordinasyon süreci uzman ekibimiz tarafından desteklenir.",
    },
    {
      id: "kulaktan-kulaga",
      icon: "bluetooth",
      navLabel: "Kulaktan Kulağa Bağlantı",
      title: "Kulaktan Kulağa (NFMI) Kablosuz Senkronizasyon",
      lead: "İki cihaz, düşük güçlü manyetik indüksiyon teknolojisiyle sürekli veri paylaşarak ortak bir dinleme deneyimi oluşturur.",
      howItWorks: "Sağ ve sol cihaz, kafanın içinden geçen düşük güçlü bir manyetik alan üzerinden birbirine ses ve kontrol verisi gönderir; bu sayede ortam sesi ve ayarlar iki cihaz arasında eşitlenir.",
      advantages: [
        "İki kulak arasında tutarlı bir dinleme deneyimi",
        "Düşük gecikme ve düşük enerji tüketimi",
        "Yönlü mikrofon ve konuşma odaklanmayı destekler",
      ],
      models: ["NFMI Destekli Modeller"],
      expertNote: "Bu bağlantı yalnızca iki kulakta da uyumlu cihaz kullanan kişilerde tam olarak devreye girer.",
    },
    {
      id: "cros-bicros",
      icon: "globe",
      navLabel: "CROS / BiCROS Sistemleri",
      title: "Tek Taraflı Kayıplarda Kablosuz Ses Aktarımı",
      lead: "İyi duymayan kulaktaki mikrofon topladığı sesi, iyi duyan kulaktaki cihaza kablosuz olarak aktarır.",
      howItWorks: "İyi duymayan taraftaki cihaz yalnızca bir mikrofon ve verici görevi görür; topladığı sesi kablosuz olarak iyi duyan taraftaki alıcı cihaza iletir.",
      advantages: [
        "Tek taraflı işitme kaybında iki taraflı ses farkındalığı",
        "İyi duymayan taraftan gelen seslerin fark edilmesine yardımcı olur",
        "Günlük sosyal ve iş ortamlarında ek destek sağlar",
      ],
      models: ["CROS / BiCROS Sistemleri"],
      expertNote: "CROS/BiCROS uygunluğu, işitme kaybının türüne ve derecesine göre bir odyometrist tarafından değerlendirilir.",
    },
  ],
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
  accentColorNavActiveBg: "rgb(101 163 13 / 0.1)",
  accentColorCalloutBg: "rgb(101 163 13 / 0.06)",
  accentColorCalloutLabel: "#4d7c0f",
};
