// /isitme-cihazi-fiyatlari/ — sayfa düzeyi sabitler: meta, breadcrumb, içindekiler.
//
// ARAMA NİYETİ → ANA SORGU → İLİŞKİLİ SORGULAR → KULLANICI SORULARI →
// LOKAL BAĞLAM → KAPSAMLI CEVAP → İÇ BAĞLANTI → DÖNÜŞÜM (bu sayfada uygulanan
// içerik mantığı; sonraki konu merkezi sayfaları da aynı iskeleti kullanır).
//
// Ana sorgu: "işitme cihazı fiyatları". Sayfa bilinçli olarak RAKAM İÇERMEZ:
// COMPANY.md §23 ve PRINCIPLES.md §5 uyarınca site fiyat listesi yayımlamaz,
// tahmin etmez, türetmez; QUALITY_GATES.md §4 Product/Offer şemasında fiyatı
// yasaklar. Rakam yerine, fiyatı neyin belirlediği ve kullanıcı için hangi
// kalemlerin önemli olduğu anlatılır (PRINCIPLES.md §5 "Şeffaflık").
//
// Bu dosyadaki `queries` alanı yalnızca içerik planlama kaydıdır — hiçbir
// arama hacmi/sıralama verisi içermez (bu ortamda Search Console/Keyword
// Planner erişimi yok; rakam uydurulmaz).
import type { GuideLink } from "../../components/price-guide/price-guide.types";

export const PAGE_PATH = "/isitme-cihazi-fiyatlari/";
export const PAGE_URL = "https://www.eniyicihaz.com/isitme-cihazi-fiyatlari/";

export const pageMeta = {
  title: "İşitme Cihazı Fiyatları: Fiyatı Ne Belirler? | Darıca | EniyiCihaz",
  description:
    "İşitme cihazı fiyatları neye göre değişir? Cihaz türü, teknoloji, şarjlı ve Bluetooth özellikler, SGK desteği ve fiyat bilgisinin Darıca'daki merkezde nasıl alınacağı.",
  schemaDescription:
    "İşitme cihazı fiyatlarını belirleyen faktörleri, cihaz türlerini, SGK desteğini ve Darıca merkezli süreci anlatan rehber sayfası.",
};

export const breadcrumbItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "İşitme Cihazları", href: "/isitme-cihazlari/" },
  { label: "İşitme Cihazı Fiyatları", current: true },
];

/** Anchor navigation under the hero — every id below exists on the page. */
export const toc: GuideLink[] = [
  { label: "Kısa cevap", href: "#hizli-cevap" },
  { label: "Fiyatı belirleyenler", href: "#fiyati-belirleyenler" },
  { label: "Toplam maliyet", href: "#toplam-maliyet" },
  { label: "Teknoloji seviyesi", href: "#teknoloji-seviyesi" },
  { label: "Cihaz türleri", href: "#cihaz-turleri" },
  { label: "Karşılaştırmalar", href: "#karsilastirmalar" },
  { label: "Özellikler", href: "#ozellikler" },
  { label: "Kullanım senaryoları", href: "#kullanim-senaryolari" },
  { label: "Marka ve model", href: "#marka-model" },
  { label: "Satın almadan önce", href: "#satin-almadan-once" },
  { label: "SGK", href: "#sgk" },
  { label: "Fiyata neler dahil?", href: "#fiyata-dahil" },
  { label: "Darıca ve çevresi", href: "#yerel" },
  { label: "Sık sorulanlar", href: "#sss" },
];

/** İçerik planlama kaydı — sayfa metninde doğal biçimde karşılanan sorgu kümeleri. */
export const queries = {
  primary: ["işitme cihazı fiyatları", "işitme cihazı ne kadar", "işitme cihazı fiyat listesi", "güncel işitme cihazı fiyatları"],
  local: [
    "Darıca işitme cihazı fiyatları",
    "Gebze işitme cihazı fiyatları",
    "Çayırova işitme cihazı fiyatları",
    "Kocaeli işitme cihazı fiyatları",
  ],
  clusters: {
    sgk: ["SGK işitme cihazı ödemesi", "SGK işitme cihazı desteği", "işitme cihazı fiyatları ve SGK", "emekli işitme cihazı"],
    types: [
      "kulak arkası işitme cihazı fiyatları",
      "RIC işitme cihazı fiyatları",
      "kulak içi işitme cihazı fiyatları",
      "kanal içi işitme cihazı fiyatları",
      "görünmez işitme cihazı fiyatları",
      "çocuk işitme cihazı fiyatları",
    ],
    features: ["şarjlı işitme cihazı fiyatları", "Bluetooth işitme cihazı fiyatları"],
    brands: ["işitme cihazı markaları ve fiyatları", "işitme cihazı modelleri"],
    decision: [
      "işitme cihazı alırken nelere dikkat edilmeli",
      "pahalı işitme cihazı daha mı iyi",
      "en ucuz işitme cihazı",
      "işitme cihazı fiyatını ne belirler",
    ],
  },
};
