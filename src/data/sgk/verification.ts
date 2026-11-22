// SGK rehberi ve yenileme hakkı sayfasının ortak "bilginin dayanağı" verisi: görünür son kontrol tarihi, resmî kaynak
// bağlantıları ve e-Devlet hizmet bağlantıları. İki sayfa da buradan okur; tarih tek yerde tutulur.
//
// SON KONTROL TARİHİ: sayfa içeriğinin resmî kaynaklarla (Resmî Gazete 17.01.2026 / 33140 EK-3/C-3 ve EK-3/C-4, SUT
// 3.3.32 ve genel hükümler) karşılaştırılıp işletme sahibinin MEDULA teyidiyle onaylandığı gün olmalıdır. Yayın günü
// farklıysa YALNIZCA bu iki alan (iso + label) güncellenir. Bu tarih JSON-LD'ye YAZILMAZ; sitemap lastmod'u ayrıca
// docs/tech/SITEMAP_LASTMOD.md kurallarıyla yönetilir (bu değer lastmod'u belirlemez).

export const sgkLastChecked = {
  /** ISO tarih (yalnızca <time datetime> için). */
  iso: "2026-11-23",
  /** Ziyaretçinin gördüğü biçim. */
  label: "23 Kasım 2026",
} as const;

export interface SgkExternalLink {
  label: string;
  href: string;
}

/** Resmî kaynaklar (yayın tarihi doğrulanabilen belgeler). Yürürlük tarihi bilinçli olarak yazılmaz. */
export const sgkOfficialSources: SgkExternalLink[] = [
  {
    label: "Resmî Gazete, 17 Ocak 2026, sayı 33140 — Sağlık Hizmetleri Fiyatlandırma Komisyonu Kararı (Karar No: 2025/12)",
    href: "https://www.resmigazete.gov.tr/eskiler/2026/01/20260117-17.pdf",
  },
  {
    label: "Sağlık Uygulama Tebliği (SUT) — mevzuat.gov.tr",
    href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=17229&MevzuatTur=9&MevzuatTertip=5",
  },
];

/** SGK'nın e-Devlet üzerindeki iki malzeme sorgulama hizmeti (hizmet adları e-Devlet'teki gibi). */
export const sgkEDevletServices: SgkExternalLink[] = [
  {
    label: "Sosyal Güvenlik Kurumu – Medikal Malzeme Sorgulama",
    href: "https://www.turkiye.gov.tr/sosyal-guvenlik-medikal-malzeme-sorgulama",
  },
  {
    label: "Sosyal Güvenlik Kurumu – Kullanımı Bitmemiş Malzeme Bilgisi Sorgulama",
    href: "https://www.turkiye.gov.tr/sosyal-guvenlik-kullanimi-bitmemis-malzeme-bilgisi-sorgulama",
  },
];
