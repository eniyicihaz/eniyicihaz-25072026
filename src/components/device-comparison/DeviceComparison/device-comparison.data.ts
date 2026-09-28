import type { DeviceComparisonContent } from "./device-comparison.types";

// Locked content — docs/DEVICE_COMPARISON_SPECIFICATION.md §2. Same 7 real
// /isitme-cihazlari/* pages as CategoryExplorer (no new URL invented,
// mirrors category-explorer.data.ts's own precedent). Cell values are
// deliberately conservative — "Modele göre değişebilir" wherever a
// property genuinely varies by brand/model, never an invented absolute
// (PRINCIPLES §5, kullanıcı onayı). Image `src` fields intentionally
// now supplied: 7 representative, text-free, square (1254x1254) product
// images in public/images/homepage/device-comparison/, one per column and
// keyed by slug. They are representative of the device TYPE only — no brand
// or model claim (imageAlt stays generic).
const DEGISKEN = "Modele göre değişebilir";
// Feature-defined columns (şarj, Bluetooth…) are not a body position of their own — they exist across the BTE/ITE/CIC forms.
const FARKLI = "Farklı tiplerde bulunur";

export const deviceComparison: DeviceComparisonContent = {
  eyebrow: "Karşılaştırın",
  heading: "İşitme Cihazı Tiplerini Karşılaştırın",
  intro: "Yedi cihaz tipinin öne çıkan özelliklerine göz atın; kesin uygunluk, işitme değerlendirmenizde netleşir.",
  columns: [
    { slug: "kulak-arkasi-bte", name: "Kulak Arkası (BTE)", href: "/isitme-cihazlari/kulak-arkasi-bte", imageAlt: "Kulak arkası (BTE) tipi işitme cihazı — örnek görsel", image: { src: "/images/homepage/device-comparison/device-comparison-kulak-arkasi-bte.webp", width: 1254, height: 1254 } },
    { slug: "kulak-ici-ite", name: "Kulak İçi (ITE)", href: "/isitme-cihazlari/kulak-ici-ite", imageAlt: "Kulak içi (ITE) tipi işitme cihazı — örnek görsel", image: { src: "/images/homepage/device-comparison/device-comparison-kulak-ici-ite.webp", width: 1254, height: 1254 } },
    { slug: "gorunmez-cic", name: "Görünmez (CIC)", href: "/isitme-cihazlari/gorunmez-cic", imageAlt: "Görünmez (CIC) tipi işitme cihazı — örnek görsel", image: { src: "/images/homepage/device-comparison/device-comparison-gorunmez-cic.webp", width: 1254, height: 1254 } },
    { slug: "sarj-edilebilir", name: "Şarj Edilebilir", href: "/isitme-cihazlari/sarj-edilebilir", imageAlt: "Şarj edilebilir işitme cihazı — örnek görsel", image: { src: "/images/homepage/device-comparison/device-comparison-sarj-edilebilir.webp", width: 1254, height: 1254 } },
    { slug: "bluetooth-ozellikli", name: "Bluetooth Özellikli", href: "/isitme-cihazlari/bluetooth-ozellikli", imageAlt: "Bluetooth özellikli işitme cihazı — örnek görsel", image: { src: "/images/homepage/device-comparison/device-comparison-bluetooth-ozellikli.webp", width: 1254, height: 1254 } },
    { slug: "cocuklara-ozel", name: "Çocuklara Özel", href: "/isitme-cihazlari/cocuklara-ozel", imageAlt: "Çocuklara özel işitme cihazı — örnek görsel", image: { src: "/images/homepage/device-comparison/device-comparison-cocuklara-ozel.webp", width: 1254, height: 1254 } },
    { slug: "suya-dayanikli", name: "Suya Dayanıklı", href: "/isitme-cihazlari/suya-dayanikli", imageAlt: "Suya dayanıklı işitme cihazı — örnek görsel", image: { src: "/images/homepage/device-comparison/device-comparison-suya-dayanikli.webp", width: 1254, height: 1254 } },
  ],
  rows: [
    { criterion: "Öne çıkan yön", values: ["Geniş kullanım alanı", "Kulak içi rahatlık", "Estetik, fark edilmezlik", "Pil değiştirme derdi yok", "Telefon/TV bağlantısı", "Çocuğa uygun seçenekler", "Nem ve terlemeye karşı koruma"] },
    { criterion: "Yerleşim", values: ["Kulak arkası", "Kulak kepçesi içi", "Kulak kanalı içi", FARKLI, FARKLI, FARKLI, FARKLI] },
    { criterion: "Görünürlük", values: ["Standart", "Az görünür", "Neredeyse görünmez", DEGISKEN, DEGISKEN, "Standart", DEGISKEN] },
    { criterion: "Güç aralığı", values: ["Geniş", "Hafif–orta, bazı modellerde daha ileri", "Çoğunlukla hafif–orta", DEGISKEN, DEGISKEN, DEGISKEN, DEGISKEN] },
    { criterion: "Şarj / pil", values: ["Pilli veya şarjlı", "Pilli veya şarjlı", "Genellikle pilli", "Şarjlı", "Pilli veya şarjlı", DEGISKEN, DEGISKEN] },
    { criterion: "Kablosuz bağlantı", values: [DEGISKEN, DEGISKEN, "Boyut nedeniyle sınırlı olabilir", DEGISKEN, "Bluetooth destekli", DEGISKEN, DEGISKEN] },
    { criterion: "Su / nem direnci", values: [DEGISKEN, DEGISKEN, DEGISKEN, DEGISKEN, DEGISKEN, DEGISKEN, "Yüksek"] },
  ],
  closing: "Size uygun olanı birlikte netleştirelim.",
};
