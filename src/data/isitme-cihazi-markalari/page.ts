// /isitme-cihazi-markalari/ — "İşitme cihazı markaları" KONU MERKEZİ (topic hub):
// marka, model, marka karşılaştırması, marka + teknoloji, marka + kullanım.
//
//   ARAMA NİYETİ → ANA SORGU → İLİŞKİLİ SORGULAR → KULLANICI SORULARI →
//   LOKAL BAĞLAM → MARKA → MODEL → ÖZELLİK → KULLANIM SENARYOSU → İÇ BAĞLANTI → DÖNÜŞÜM
//
// Üç sayfa ayrımı: /isitme-cihazlari/ = cihaz türleri, özellikleri, seçim;
// /isitme-cihazi-markalari/ (bu sayfa) = marka, model, marka karşılaştırması;
// /isitme-cihazi-fiyatlari/ = fiyat ve SGK. Fiyat ve SGK burada yalnızca kısa yönlendirmedir.
//
// Arama niyeti: Commercial Investigation (markaları karşılaştırma) + Informational.
//
// EDİTORYAL KURAL: "en iyi marka X'tir" / sıralama YOKTUR. "En iyi marka" aramasına
// kriter bazlı, tarafsız cevap verilir (PRINCIPLES.md §5).
//
// `queries` yalnızca İÇERİK PLANLAMA kaydıdır: arama hacmi, sıralama veya rekabet
// verisi içermez — bu ortamda Search Console / Keyword Planner erişimi yoktur.
import type { GuideLink } from "../../components/price-guide/price-guide.types";

export const PAGE_PATH = "/isitme-cihazi-markalari/";
export const PAGE_URL = "https://www.eniyicihaz.com/isitme-cihazi-markalari/";

export const pageMeta = {
  title: "İşitme Cihazı Markaları ve Modelleri: Nasıl Seçilir? | Darıca, Kocaeli | EniyiCihaz",
  description:
    "Oticon, Phonak, Signia, Widex, ReSound ve NuEar işitme cihazı markalarını ve modellerini tarafsız karşılaştırın; marka nasıl seçilir? Darıca, Kocaeli.",
  schemaDescription:
    "İşitme cihazı markalarını, model ailelerini, cihaz türü ve kullanım senaryolarına göre karşılaştıran ve marka seçiminde sorulacak soruları anlatan rehber sayfası.",
};

export const breadcrumbItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "İşitme Cihazı Markaları", current: true },
];

/** Anchor navigation under the hero — every id below exists on the page. */
export const toc: GuideLink[] = [
  { label: "En iyi marka hangisi?", href: "#hizli-cevap" },
  { label: "Marka karşılaştırması", href: "#marka-karsilastirma" },
  { label: "Oticon", href: "#oticon" },
  { label: "Phonak", href: "#phonak" },
  { label: "Signia", href: "#signia" },
  { label: "Widex", href: "#widex" },
  { label: "ReSound", href: "#resound" },
  { label: "NuEar", href: "#nuear-profili" },
  { label: "Gerçek modeller", href: "#modeller" },
  { label: "Marka ve cihaz türü", href: "#marka-cihaz-turu" },
  { label: "Kullanım senaryoları", href: "#marka-senaryo" },
  { label: "Marka mı model mi?", href: "#marka-mi-model-mi" },
  { label: "Diğer markalar", href: "#diger-markalar" },
  { label: "Darıca ve çevresi", href: "#yerel" },
  { label: "Sık sorulanlar", href: "#sss" },
];

/** İçerik planlama kaydı — sayfa metninde doğal biçimde karşılanan sorgu kümeleri. */
export const queries = {
  primary: [
    "işitme cihazı markaları", "işitme cihazı markaları nelerdir", "en iyi işitme cihazı markaları",
    "işitme cihazı marka ve modelleri", "işitme cihazı markaları karşılaştırması",
    "hangi işitme cihazı markası", "işitme cihazı marka seçimi",
  ],
  brand: [
    "Oticon işitme cihazları", "Phonak işitme cihazları", "Signia işitme cihazları",
    "Widex işitme cihazları", "ReSound işitme cihazları", "NuEar işitme cihazları",
  ],
  model: [
    "Oticon modelleri", "Phonak modelleri", "Signia modelleri", "Widex modelleri",
    "ReSound modelleri", "NuEar modelleri", "işitme cihazı modelleri",
  ],
  feature: [
    "Bluetooth işitme cihazı markaları", "şarjlı işitme cihazı markaları", "küçük işitme cihazı markaları",
    "kulak içi işitme cihazı markaları", "RIC işitme cihazı markaları", "çocuk işitme cihazı markaları",
  ],
  selection: [
    "hangi marka işitme cihazı bana uygun", "işitme cihazı markası nasıl seçilir", "marka mı model mi önemli",
    "işitme cihazında marka önemli mi", "en iyi marka nasıl seçilir",
  ],
  local: [
    "Darıca işitme cihazı markaları", "Darıca işitme cihazı markaları ve modelleri",
    "Gebze işitme cihazı markaları", "Çayırova işitme cihazı markaları", "Kocaeli işitme cihazı markaları",
  ],
};
