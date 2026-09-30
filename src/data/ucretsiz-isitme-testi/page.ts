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
//
// `queries` yalnızca İÇERİK PLANLAMA kaydıdır — arama hacmi/sıralama verisi içermez
// (Search Console / Keyword Planner erişimi yok).
import type { GuideLink } from "../../components/price-guide/price-guide.types";

export const PAGE_PATH = "/degerlendirme/ucretsiz-isitme-testi/";
export const PAGE_URL = "https://www.eniyicihaz.com/degerlendirme/ucretsiz-isitme-testi/";

export const pageMeta = {
  title: "İşitme Testi Nasıl Yapılır? Ücretsiz İşitme Testi | Darıca | EniyiCihaz",
  description:
    "İşitme testi nedir, nasıl yapılır, sonuç nasıl okunur? Odyogram, KBB uyarıları ve Darıca'da odyometrist eşliğinde ücretsiz işitme testi. Gebze, Çayırova.",
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
  { label: "Ne zaman yaptırmalı?", href: "#ne-zaman" },
  { label: "KBB uyarısı", href: "#kbb-uyari" },
  { label: "Ücretsiz test", href: "#ucretsiz-test" },
  { label: "Nasıl yapılır?", href: "#nasil-yapilir" },
  { label: "Ölçümler", href: "#olcumler" },
  { label: "Hazırlık", href: "#hazirlik" },
  { label: "Ne kadar sürer?", href: "#sure" },
  { label: "Sonuç nasıl okunur?", href: "#sonuc-okuma" },
  { label: "Test sonrası", href: "#sonrasi" },
  { label: "Online test farkı", href: "#online-fark" },
  { label: "Darıca'da test", href: "#darica" },
  { label: "Sık sorulanlar", href: "#sss" },
];

/** İçerik planlama kaydı — sayfa metninde doğal biçimde karşılanan sorgu kümeleri. */
export const queries = {
  general: [
    "işitme testi", "ücretsiz işitme testi", "işitme testi nasıl yapılır", "işitme testi ne kadar sürer",
    "işitme testi sonucu", "işitme kaybı testi", "odyometri testi", "işitme ölçümü",
    "işitme testi sonucu nasıl değerlendirilir", "işitme testi nerede yapılır", "işitme testi neden yapılır",
  ],
  local: [
    "Darıca işitme testi", "Darıca ücretsiz işitme testi", "Darıca işitme testi nerede yapılır",
    "Gebze işitme testi", "Gebze ücretsiz işitme testi", "Çayırova işitme testi", "Çayırova ücretsiz işitme testi",
    "Kocaeli işitme testi", "Kocaeli ücretsiz işitme testi",
  ],
  questions: [
    "işitme testinde neler yapılır", "işitme testi kaç dakika sürer", "işitme testi için KBB gerekir mi",
    "işitme testi aç karnına mı yapılır", "işitme testi sonucu nasıl okunur", "odyogram nedir",
    "sağ ve sol kulak sonucu ne anlama gelir", "hangi durumda işitme testi yapılmalı", "işitme kaybı nasıl anlaşılır",
    "işitme testi sonrası ne yapılır", "işitme cihazı için işitme testi gerekli mi",
    "online işitme testi ile gerçek işitme testi arasındaki fark", "çocuklarda işitme testi", "yaşlılarda işitme testi",
  ],
};
