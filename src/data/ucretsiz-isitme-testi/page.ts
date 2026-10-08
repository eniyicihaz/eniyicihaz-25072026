// /degerlendirme/ucretsiz-isitme-testi/ — "İşitme testi" KONU MERKEZİ (topic hub):
// işitme testi nedir, neden ve kimler için, nasıl yapılır, hangi ölçümler, ne kadar
// sürer, sonuç nasıl okunur (odyogram), test sonrası, online test farkı ve
// Darıca / Gebze / Çayırova / Kocaeli'de işitme testi. URL DEĞİŞMEDİ (mevcut SEO
// değeri korunur).
//
//   ARAMA SORGUSU → DOĞRUDAN CEVAP → AYRINTILI AÇIKLAMA → İLGİLİ SORULAR →
//   TABLO / GÖRSEL → YEREL BAĞLAM → İÇ BAĞLANTI → CTA
//
// Arama niyeti: Informational (test nasıl yapılır / sonuç nasıl okunur) +
// Local/Transactional (Darıca'da ücretsiz işitme testi). Teknik derinlik kardeş
// sayfalara bırakılır: /degerlendirme/odyometri/, /timpanometri/, /cocuk-isitme-testi/,
// /tinnitus-degerlendirme/, /online-isitme-testi/; cihaz seçimi ve satış süreci
// /neden-orijinal/ucretsiz-danismanlik/, /isitme-cihazlari/, /isitme-cihazi-fiyatlari/,
// /isitme-cihazi-markalari/ sayfalarındadır.
//
// Tıbbi güvenlik (PRINCIPLES.md §5, §11): teşhis/tedavi/kesin sonuç vaadi yoktur;
// sonuç tek başına tanı koymaz; ani kayıp, ağrı, akıntı gibi durumlarda KBB / sağlık
// kuruluşu başvurusu öne çıkarılır. Fiyat yoktur (COMPANY.md §23).
import type { GuideLink } from "../../components/price-guide/price-guide.types";

export const PAGE_PATH = "/degerlendirme/ucretsiz-isitme-testi/";
export const PAGE_URL = "https://www.eniyicihaz.com/degerlendirme/ucretsiz-isitme-testi/";

export const pageMeta = {
  title: "İşitme Testi Nasıl Yapılır? Ücretsiz İşitme Testi | Darıca",
  description:
    "İşitme testi nasıl yapılır, sonuç nasıl okunur? Odyogram rehberi; Darıca'da odyometrist eşliğinde ücretsiz test, Gebze ve Çayırova'dan ulaşım.",
  schemaDescription:
    "İşitme testinin nasıl yapıldığını, hangi ölçümleri içerdiğini, sonucun nasıl okunduğunu anlatan ve Darıca'daki merkezde odyometrist eşliğinde ücretsiz işitme testi sunulan rehber sayfası.",
};

export const breadcrumbItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Ücretsiz İşitme Testi", current: true },
];

/** Anchor navigation under the hero — every id below exists on the page. */
export const toc: GuideLink[] = [
  { label: "İşitme testi nedir?", href: "#hizli-cevap" },
  { label: "Ne için, ne zaman?", href: "#ne-zaman" },
  { label: "KBB uyarısı", href: "#kbb-uyari" },
  { label: "Nasıl yapılır?", href: "#nasil-yapilir" },
  { label: "Değerlendirmeler", href: "#olcumler" },
  { label: "Ücretsiz test", href: "#ucretsiz-test" },
  { label: "Merkez ve ulaşım", href: "#darica" },
  { label: "Sonuç nasıl okunur?", href: "#sonuc-okuma" },
  { label: "Test sonrası", href: "#sonrasi" },
  { label: "Evde / online test", href: "#online-fark" },
  { label: "Çocuk ve yaşlı", href: "#cocuk-yasli" },
  { label: "Sık sorulanlar", href: "#sss" },
];
