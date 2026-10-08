// /isitme-cihazlari/ — "İşitme cihazları" KONU MERKEZİ (topic hub): cihazı
// tanıma, türleri, özellikleri ve seçim. Fiyat (→ /isitme-cihazi-fiyatlari/) ve
// SGK (→ /sgk-isitme-cihazi-odemesi/) bu sayfada yalnızca kısa yönlendirmedir;
// içerikleri kopyalanmaz (SEARCH_STRATEGY.md §19: her konunun tek kanonik sayfası).
//
// ARAMA NİYETİ → ANA SORGU → İLİŞKİLİ SORGULAR → KULLANICI SORULARI →
// LOKAL BAĞLAM → KAPSAMLI CEVAP → İÇ BAĞLANTI → DÖNÜŞÜM
//
// Arama niyeti: Informational + Commercial Investigation (cihazı tanımak ve
// seçenekleri karşılaştırmak). Transactional niyet fiyat/iletişim sayfalarına
// bırakılır; burada yalnızca doğal CTA vardır (SEARCH_STRATEGY.md §7).
//
// `queries` alanı yalnızca İÇERİK PLANLAMA kaydıdır: hiçbir arama hacmi,
// sıralama veya rekabet verisi içermez — bu ortamda Search Console / Keyword
// Planner erişimi yok, rakam uydurulmaz.
import type { GuideLink } from "../../components/price-guide/price-guide.types";

export const PAGE_PATH = "/isitme-cihazlari/";
export const PAGE_URL = "https://www.eniyicihaz.com/isitme-cihazlari/";

export const pageMeta = {
  title: "İşitme Cihazları: Çeşitleri, Özellikleri ve Nasıl Seçilir? | Darıca | EniyiCihaz",
  description:
    "İşitme cihazı nedir, hangi türleri var? Kulak arkası, RIC, kulak içi, görünmez ve şarjlı cihazlar; özellikler ve seçim. Merkezimiz Darıca'dadır.",
  schemaDescription:
    "İşitme cihazı türlerini, özelliklerini, nasıl çalıştığını ve nasıl seçileceğini anlatan; Darıca merkezli süreci açıklayan rehber sayfası.",
};

export const breadcrumbItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "İşitme Cihazları", current: true },
];

/** Anchor navigation under the hero — every id below exists on the page. */
export const toc: GuideLink[] = [
  { label: "İşitme cihazı nedir?", href: "#hizli-cevap" },
  { label: "Cihaz türleri", href: "#cihaz-turleri" },
  { label: "Nasıl çalışır?", href: "#nasil-calisir" },
  { label: "Nasıl seçilir?", href: "#secerken" },
  { label: "Hangisi bana uygun?", href: "#hangi-cihaz" },
  { label: "Özellikler", href: "#ozellikler" },
  { label: "Şarjlı mı pilli mi?", href: "#sarjli-pilli" },
  { label: "Kulak içi mi arkası mı?", href: "#kulak-ici-mi-arkasi-mi" },
  { label: "RIC / RITE", href: "#ric-rite" },
  { label: "Görünmez cihazlar", href: "#gorunmez" },
  { label: "Çocuklar", href: "#cocuklar" },
  { label: "Markalar ve modeller", href: "#markalar" },
  { label: "Deneme ve satış sonrası", href: "#deneme-uygulama" },
  { label: "Darıca ve çevresi", href: "#yerel" },
  { label: "Sık sorulanlar", href: "#sss" },
];

/** İçerik planlama kaydı — sayfa metninde doğal biçimde karşılanan sorgu kümeleri. */
export const queries = {
  primary: [
    "işitme cihazları",
    "işitme cihazı",
    "işitme cihazları nelerdir",
    "işitme cihazı çeşitleri",
    "işitme cihazı modelleri",
    "işitme cihazı nasıl seçilir",
  ],
  local: [
    "Darıca işitme cihazları",
    "Darıca işitme cihazı",
    "Gebze işitme cihazları",
    "Gebze işitme cihazı",
    "Çayırova işitme cihazları",
    "Çayırova işitme cihazı",
    "Kocaeli işitme cihazları",
    "Kocaeli işitme cihazı",
  ],
  types: [
    "kulak arkası işitme cihazı", "BTE işitme cihazı", "RIC işitme cihazı", "RITE işitme cihazı",
    "kulak içi işitme cihazı", "ITE işitme cihazı", "ITC işitme cihazı", "CIC işitme cihazı",
    "IIC işitme cihazı", "görünmez işitme cihazı", "çocuk işitme cihazı",
  ],
  features: [
    "şarjlı işitme cihazı", "Bluetooth işitme cihazı", "telefonla kullanılan işitme cihazı",
    "televizyona bağlanan işitme cihazı", "uygulamalı işitme cihazı", "suya dayanıklı işitme cihazı",
    "gürültü azaltmalı işitme cihazı",
  ],
  selection: [
    "hangi işitme cihazı bana uygun", "işitme cihazı alırken nelere dikkat edilmeli",
    "kulak içi mi kulak arkası mı", "RIC mi kulak içi mi", "şarjlı mı pilli mi",
    "küçük işitme cihazı mı güçlü cihaz mı",
  ],
  usage: [
    "işitme cihazı telefon", "işitme cihazı televizyon", "işitme cihazı kalabalık ortam",
    "işitme cihazı iş hayatı", "işitme cihazı günlük kullanım", "işitme cihazı çocuk",
  ],
};
