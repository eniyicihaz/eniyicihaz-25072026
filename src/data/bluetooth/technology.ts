// "Teknolojiler" deep-dive hub for the /isitme-cihazlari/bluetooth-ozellikli
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as BTE/ITE/Şarj Edilebilir. icon
// values are limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "bluetooth" for the core direct
// connection, "radio" for TV audio streaming, "smartphone" for app
// control, "globe" for Auracast's broadcast-to-public-space nature.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const bluetoothTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Bluetooth Özellikli Cihazlarda Öne Çıkan Teknolojiler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Teknolojik kapsam üreticiye ve seçilen modele göre değişebilir.",
  items: [
    {
      id: "dogrudan-baglanti",
      icon: "bluetooth",
      navLabel: "Doğrudan Bağlantı",
      title: "Made for iPhone / Android Doğrudan Bağlantı",
      lead: "Ayrı bir aracı cihaza gerek kalmadan, işitme cihazının doğrudan telefonla eşleşmesini sağlayan yaygın standart.",
      howItWorks: "Cihaz, telefonun Bluetooth ayarları üzerinden doğrudan eşleştirilir; ses aracı bir aksesuara ihtiyaç duymadan doğrudan aktarılır.",
      advantages: [
        "Ayrı bir streamer aksesuarı taşıma ihtiyacını ortadan kaldırır",
        "Telefon görüşmelerini doğrudan cihazdan yanıtlama",
        "Kurulumu genellikle telefonun kendi ayarları üzerinden basittir",
      ],
      models: ["Made for iPhone / Android Uyumlu Modeller"],
      expertNote: "Doğrudan bağlantı desteği telefon markası ve modeline göre değişebilir; ihtiyacınıza uygun model uzman değerlendirmesiyle belirlenir.",
    },
    {
      id: "tv-yayini",
      icon: "radio",
      navLabel: "TV Ses Yayını",
      title: "TV Yayın Aksesuarıyla Kablosuz Bağlantı",
      lead: "TV yayın aksesuarı, televizyon sesini kablosuz olarak doğrudan işitme cihazına aktarır.",
      howItWorks: "Televizyona bağlanan küçük bir aksesuar, TV sesini işitme cihazınıza kablosuz olarak yayınlar; oda içindeki diğer kişiler TV'yi kendi ses seviyesinde izlemeye devam edebilir.",
      advantages: [
        "TV sesini yükseltmeden net duyma",
        "Diğer aile bireylerinin ses seviyesini etkilememe",
        "Genellikle kurulumu basit, tak-çalıştır aksesuarlar",
      ],
      models: ["TV Streamer Aksesuarlı Modeller"],
      expertNote: "TV yayın aksesuarı genellikle ayrıca temin edilir; uyumluluğu seçtiğiniz marka ve modele göre değişir.",
    },
    {
      id: "uygulama",
      icon: "smartphone",
      navLabel: "Uygulama ile Uzaktan Kontrol",
      title: "Akıllı Telefon Uygulamasıyla Kişisel Ayar",
      lead: "Üreticiye özel mobil uygulamalar üzerinden ses seviyesi ve dinleme programlarını yönetme imkânı.",
      howItWorks: "Cihaz, üreticinin mobil uygulamasıyla eşleştirilir; ses seviyesi, dinleme programları ve bazı modellerde ortam ayarları uygulama üzerinden değiştirilebilir.",
      advantages: [
        "Ortama göre program değiştirebilme",
        "Ses seviyesini fark ettirmeden ayarlayabilme",
        "Bazı uygulamalarda uzaktan destek imkânı",
      ],
      models: ["Uygulama Destekli Modeller"],
      expertNote: "Uygulama özellikleri ve arayüzü üreticiye göre değişir; teslim sırasında size uygun uygulama gösterilir.",
    },
    {
      id: "auracast",
      icon: "globe",
      navLabel: "Auracast Yayın Dinleme",
      title: "Bluetooth LE Audio ve Auracast Yayın Teknolojisi",
      lead: "Toplu alanlarda (havalimanı, tiyatro, toplantı salonu gibi) yapılan sesli yayınları doğrudan dinlemeyi mümkün kılan yeni nesil teknoloji.",
      howItWorks: "Uyumlu bir yayın kaynağı, sesi Bluetooth LE Audio üzerinden yayınlar; uyumlu cihaza sahip kullanıcılar bu yayını doğrudan, ek bir aksesuara gerek kalmadan dinleyebilir.",
      advantages: [
        "Kamuya açık alanlarda net ses erişimi",
        "Ek bir aksesuara ihtiyaç duymadan yayın dinleme",
        "Bluetooth LE'nin düşük enerji tüketiminden faydalanma",
      ],
      models: ["LE Audio / Auracast Destekli Yeni Nesil Modeller"],
      expertNote: "Auracast desteği henüz sınırlı sayıda modelde bulunur ve yaygınlığı ülke/mekâna göre değişir; güncel durum teslim sırasında paylaşılır.",
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
  accentColorNavActiveBg: "rgb(8 145 178 / 0.1)",
  accentColorCalloutBg: "rgb(8 145 178 / 0.06)",
  accentColorCalloutLabel: "#0e7490",
};
