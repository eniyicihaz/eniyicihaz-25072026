// "Teknolojiler" deep-dive hub for the /uygulama-ayar/
// kontrol-randevusu page. Renders through the shared BrandPageEcosystem
// component (nav + <details>/<summary> panels), same as every prior
// series. icon values are limited to the component's fixed set
// (brain/dna/globe/radar/bluetooth/smartphone/radio/layers) — "radar"
// for the brief hearing re-screen's detection/scanning nature
// (consistent with its mapping across the site); "brain" for the
// device performance-data analysis; "smartphone" for the firmware/
// software update check; "layers" for the physical ear-canal-and-mold
// condition check (consistent with Kalıp Alımı's own material/fit
// mapping for the icon).

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const kontrolRandevusuTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Kontrol Randevusunda Kullanılan Yöntemler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, ihtiyacınıza göre değişebilir.",
  items: [
    {
      id: "kisa-yeniden-test",
      icon: "radar",
      navLabel: "Kısa Yeniden Test",
      title: "Kısa İşitme Yeniden Değerlendirmesi",
      lead: "Tam kapsamlı bir odyometriden daha kısa süren bir tarama testiyle, işitme durumunuzda bir değişiklik olup olmadığı kontrol edilir.",
      howItWorks: "Birkaç frekansta hızlı bir ölçüm yapılır ve sonuçlar önceki kayıtlarınızla karşılaştırılır.",
      advantages: [
        "İşitme durumunuzdaki değişimleri erken fark etmeye yardımcı olur",
        "Tam bir odyometriden daha kısa sürer",
        "Gerekirse kapsamlı bir odyometri randevusuna yönlendirme yapılabilir",
      ],
      models: ["Kısa Yeniden Değerlendirme"],
      expertNote: "Belirgin bir değişiklik tespit edilirse, kapsamlı bir odyometri randevusu önerilir.",
    },
    {
      id: "cihaz-performans-analizi",
      icon: "brain",
      navLabel: "Cihaz Performans Analizi",
      title: "Cihaz Performans ve Kullanım Verisi Analizi",
      lead: "Cihazınızın teknik performansı ve varsa kullanım verileri, fitting yazılımı üzerinden gözden geçirilir.",
      howItWorks: "Cihaz, fitting yazılımına bağlanır; mevcut ayarlar, pil/şarj durumu ve varsa kullanım verileri kontrol edilir.",
      advantages: [
        "Ayarların hâlâ ihtiyacınıza uygun olup olmadığını gösterir",
        "Olası teknik sorunların erken tespitine yardımcı olur",
        "Kişiye özel programlama ihtiyacı olup olmadığını netleştirir",
      ],
      models: ["Performans Analizi"],
      expertNote: "Analiz sonucunda ince ayar ihtiyacı belirlenirse, Kişiye Özel Programlama sayfamızdaki süreç önerilebilir.",
    },
    {
      id: "yazilim-guncellemesi-kontrolu",
      icon: "smartphone",
      navLabel: "Yazılım Güncellemesi Kontrolü",
      title: "Cihaz Yazılımı Güncelleme Kontrolü",
      lead: "Cihazınızın yazılımının (firmware) güncel olup olmadığı kontrol edilir.",
      howItWorks: "Üreticinin sunduğu güncellemeler kontrol edilir; uygun olduğu durumlarda cihazınızın yazılımı güncellenir.",
      advantages: [
        "Cihazınızın en güncel özelliklerden faydalanmasını sağlar",
        "Bilinen teknik sorunların giderilmesine yardımcı olabilir",
        "Uygulama uyumluluğunun sürdürülmesine katkı sağlar",
      ],
      models: ["Yazılım Güncellemesi Kontrolü"],
      expertNote: "Güncelleme sıklığı ve kapsamı, cihaz markası ve modeline göre değişir.",
    },
    {
      id: "kulak-ve-kalip-kontrolu",
      icon: "layers",
      navLabel: "Kulak ve Kalıp Kontrolü",
      title: "Kulak Kanalı ve Kalıp Uyum Kontrolü",
      lead: "Kulak kanalınızın genel durumu ve varsa kulak kalıbınızın hâlâ iyi oturup oturmadığı kontrol edilir.",
      howItWorks: "Kulak muayenesiyle kulak kanalınız kontrol edilir; kalıbınızın veya kulak ucunuzun fiziksel uyumu değerlendirilir.",
      advantages: [
        "Kulak kanalındaki değişikliklerin erken fark edilmesine yardımcı olur",
        "Kalıp yenileme ihtiyacının zamanında belirlenmesini sağlar",
        "Genel konfor ve sızdırmazlığın korunmasına katkı sağlar",
      ],
      models: ["Fiziksel Uyum Kontrolü"],
      expertNote: "Yenileme ihtiyacı belirlenirse, Kalıp Alımı sayfamızdaki süreç önerilebilir.",
    },
  ],
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
  accentColorNavActiveBg: "rgb(71 85 105 / 0.1)",
  accentColorCalloutBg: "rgb(71 85 105 / 0.06)",
  accentColorCalloutLabel: "#334155",
};
