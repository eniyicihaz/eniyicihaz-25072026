// BrandPageFinalCta güven çiplerinin bağlantıları.
//
// Yalnızca (1) etiketin ifade ettiği kavramla birebir örtüşen ve (2) sitede gerçekten var olan
// sayfalar bağlanır; hedefi belirsiz etiketler bağlantısız kalır (ör. "Odyometrist Desteği").
//
// "Ücretsiz İşitme Testi" çipi test sayfasına gider, ama bu tıklama ana CTA olayı (`hearing_test_cta`)
// DEĞİL, ayrı bir bilgi etkileşimidir: bileşen bu çipe `data-track-event="hearing_test_info_click"` ekler
// (bkz. isInfoTestLink) ve src/lib/consent/events.ts bu işareti ilk sırada okur; aynı tıklama iki olay üretmez.
const FREE_TEST = "/degerlendirme/ucretsiz-isitme-testi/";
const KNOWN: Record<string, string> = {
  "Ücretsiz İşitme Testi": FREE_TEST,
  "Merkezimiz Darıca'da": "/darica-isitme-cihazlari/",
  "Demo Cihaz Deneme": "/uygulama-ayar/cihaz-deneme/",
  "SGK Anlaşmalı Merkez": "/sgk-isitme-cihazi-odemesi/",
};

const FREE_TEST_PATH = /\/degerlendirme\/ucretsiz-isitme-testi\/?$/;

/** Bu bağlantı ücretsiz test sayfasına mı gidiyor (→ çipe bilgi-tıklama işareti verilir)? */
export function isInfoTestLink(href: string | undefined): boolean {
  return !!href && FREE_TEST_PATH.test(href.split(/[?#]/)[0]);
}

/**
 * @param label        çip metni
 * @param pageLinks    sayfaya özel etiket → hedef eşlemesi (ör. aynı sayfadaki "#..." bölümü)
 * @param currentPath  geçerli sayfa yolu: kendine bağlantı verilmez
 */
export function trustHref(label: string, pageLinks: Record<string, string> | undefined, currentPath: string): string | undefined {
  const href = pageLinks?.[label] ?? KNOWN[label];
  if (!href) return undefined;
  const norm = (p: string) => p.replace(/\/+$/, "") || "/";
  if (!href.startsWith("#") && norm(href.split(/[?#]/)[0]) === norm(currentPath)) return undefined;
  return href;
}
