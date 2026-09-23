// "Teknolojiler" deep-dive hub for the /neden-orijinal/
// guvenilir-teknoloji page. Renders through the shared BrandPageEcosystem
// component (nav + <details>/<summary> panels), same as every prior
// page. icon values are limited to the component's fixed set (brain/dna/
// globe/radar/bluetooth/smartphone/radio/layers) — "globe" for the
// distributor/import-chain network; "smartphone" for the app/portal-based
// warranty registration system; "brain" for software/firmware update
// intelligence (consistent with its AI/software mapping elsewhere);
// "radar" for serial-number verification (consistent with its
// detection/scanning mapping elsewhere).

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const guvenilirTeknolojiTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Orijinal Ürünlerde Sıkça Bir Arada Sunulan Güvenceler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, marka ve modele göre değişebilir.",
  items: [
    {
      id: "yetkili-distributorluk",
      icon: "globe",
      navLabel: "Yetkili Distribütörlük",
      title: "Resmi Yetkili Distribütörlük Anlaşmaları",
      lead: "Sunduğumuz markaların resmi yetkili distribütörlük anlaşmalarına sahibiz; bu sayede ürünler doğrudan üreticinin onayladığı kanaldan temin edilir.",
      howItWorks: "Marka üreticileriyle yapılan resmi distribütörlük anlaşmaları kapsamında, ürünler doğrudan yetkili ithalat zinciri üzerinden temin edilir ve stoklara bu şekilde girer.",
      advantages: [
        "Ürünün kaynağı baştan sona izlenebilir olur",
        "Kaçak veya paralel ithal ürün riski ortadan kalkar",
        "Üretici ile doğrudan iletişim imkânı sağlar",
      ],
      models: ["Yetkili Distribütörlük Kapsamındaki Markalar"],
      expertNote: "Yetkili olduğumuz markaların güncel listesini Markalarımız sayfamızdan inceleyebilirsiniz.",
    },
    {
      id: "uretici-garantisi",
      icon: "smartphone",
      navLabel: "Üretici Garantisi ve Kayıt",
      title: "Üretici Garantisi ve Kayıt Sistemi",
      lead: "Her orijinal cihaz, üreticinin resmi kayıt sistemine kaydedilerek garanti kapsamına alınır.",
      howItWorks: "Cihazın seri numarası ve satış bilgileri, üreticinin resmi garanti sistemine işlenir; bu kayıt, ürünün garanti süresince takip edilebilmesini sağlar.",
      advantages: [
        "Garanti süresi ve kapsamı net bir şekilde belgelenir",
        "Arıza durumunda hızlı ve sorunsuz garanti süreci sağlar",
        "Cihazın satış ve sahiplik geçmişi izlenebilir olur",
      ],
      models: ["Üretici Garantili Modeller"],
      expertNote: "Garanti süresi ve kapsamı marka ve modele göre değişir; net bilgi satış sırasında paylaşılır.",
    },
    {
      id: "orijinal-yazilim",
      icon: "brain",
      navLabel: "Orijinal Yazılım ve Güncellemeler",
      title: "Orijinal Yazılım ve Firmware Güncellemeleri",
      lead: "Orijinal cihazlar, üreticinin resmi yazılım ve firmware güncellemelerine kesintisiz erişebilir.",
      howItWorks: "Cihaz, üreticinin resmi sunucularına veya uygulamalarına bağlanarak güncel yazılım sürümlerini alır; bu güncellemeler performans ve güvenlik iyileştirmeleri içerebilir.",
      advantages: [
        "Cihaz her zaman güncel ve optimize performansla çalışır",
        "Güvenlik ve uyumluluk güncellemelerine erişim sağlar",
        "Yeni özelliklerden zamanında faydalanılabilir",
      ],
      models: ["Güncel Yazılımlı Orijinal Modeller"],
      expertNote: "Orijinal olmayan cihazlar bu güncellemelere erişemeyebilir veya kısıtlı erişebilir.",
    },
    {
      id: "seri-numarasi-dogrulama",
      icon: "radar",
      navLabel: "Seri Numarası Doğrulama",
      title: "Seri Numarası ile Orijinallik Doğrulama",
      lead: "Her cihazın kendine özgü bir seri numarası vardır; bu numara üreticinin resmi sistemi üzerinden sorgulanarak orijinallik doğrulanabilir.",
      howItWorks: "Cihaz üzerinde veya kutusunda yer alan seri numarası, üreticinin resmi doğrulama sistemine girilerek ürünün orijinal ve kayıtlı olup olmadığı kontrol edilir.",
      advantages: [
        "Satın alma öncesi veya sonrası bağımsız bir doğrulama imkânı sunar",
        "Sahte veya kaçak ürünleri ayırt etmeye yardımcı olur",
        "Ek bir maliyet gerektirmeden uygulanabilir",
      ],
      models: ["Seri Numaralı Orijinal Modeller"],
      expertNote: "Seri numarası doğrulama süreciyle ilgili destek almak için bizimle iletişime geçebilirsiniz.",
    },
  ],
  accentColor: "#1d4ed8",
  accentColorBadgeBg: "rgb(29 78 216 / 0.08)",
  accentColorBadgeBorder: "rgb(29 78 216 / 0.35)",
  accentColorBadgeText: "#1e40af",
  accentColorNavActiveBg: "rgb(29 78 216 / 0.1)",
  accentColorCalloutBg: "rgb(29 78 216 / 0.06)",
  accentColorCalloutLabel: "#1e40af",
};
