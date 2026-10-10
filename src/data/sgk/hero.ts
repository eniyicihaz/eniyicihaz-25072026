// Hero content for the SGK pillar page (/sgk-isitme-cihazi-odemesi). Its
// own data namespace, independent of the Oticon page's M1...M8 modules
// and of the /markalar hub. The page has since grown into a full
// 10-section pillar guide (SGK katkı payı, rapor süreci, gerekli
// belgeler, çocuklarda SGK, yenileme hakkı, SSS, all cross-linked from
// here) — this file's own comment is kept current with that reality.
//
// Every keyword phrase below (SGK işitme cihazı ödemesi, SGK katkı
// payı, işitme cihazı devlet desteği, işitme cihazı raporu, SGK
// anlaşmalı işitme merkezi, işitme cihazı SGK desteği) is worked into
// natural sentences — no stuffing, no invented numbers or percentages,
// no claims beyond what's already established elsewhere on this site
// (free hearing test, SGK-affiliated status, expert audiometrist
// support — see COMPANY.md).
//
// Görselsiz hero (Faz 2 Hero Visual Audit, P0): önceki AI/kompozit görsel
// (pages/sgk-isitme-cihazi.webp — görsele işlenmiş "uzman kadro" metni, SGK
// logosu ve sahte personel) ve ona bağlı floating card + yıl chip'i kaldırıldı.
// Dosya silinmedi.
//
// Sağ kolondaki "SGK sürecinin 4 adımı" paneli görsel değil, bilgi alanıdır:
// adım adları ve bağlantıları data/sgk/process.ts'ten gelir (yeni süreç,
// süre veya uygunluk iddiası YOK). "Aynı Gün Başvuru" güven maddesi
// işletme tarafından doğrulanmış bir koşula dayanmadığı için kaldırıldı
// (doğrulanan bilgi yalnızca rapordan cihaz teslimine 1-3 gün, çoğunlukla
// aynı gündür ve zamana duyarlıdır); yerine, process.ts'te zaten yer alan
// "Belgelerde Destek" kullanıldı.

export interface SgkHeroTrustItem {
  title: string;
  description: string;
}

export interface SgkHeroContent {
  badge: string;
  heading: string;
  intro: string;
  trustItems: SgkHeroTrustItem[];
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
  panelTitle: string;
  panelLinkLabel: string;
  panelLinkHref: string;
}

export const sgkHero: SgkHeroContent = {
  badge: "SGK Anlaşmalı İşitme Merkezi",
  heading: "2026 SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
  intro:
    "İşitme cihazı raporu sürecinden gerekli belgelere, çocuklarda SGK hakkından cihaz yenileme sürecine kadar merak ettiğiniz her şeyi bu rehberde bulabilirsiniz. Odyolog ve odyometristimizle işitme cihazı SGK desteğinden en doğru şekilde faydalanmanız için yanınızdayız.",
  trustItems: [
    {
      title: "SGK Katkı Payı",
      description: "Devlet destekli ödeme süreci hakkında bilgi alın.",
    },
    {
      title: "Ücretsiz İşitme Testi",
      description: "Değerlendirme odyolog ve odyometristimizle yapılır.",
    },
    {
      title: "Belgelerde Destek",
      description: "Gerekli belgeleri birlikte gözden geçirelim.",
    },
  ],
  ctaPrimaryLabel: "Bizi Arayın",
  ctaSecondaryLabel: "WhatsApp'tan Yazın",
  panelTitle: "SGK sürecinin 4 adımı",
  panelLinkLabel: "2026 SGK ödeme tablosuna git",
  // SgkPayments başlığının gerçek id'si (components/sgk/SgkPayments).
  panelLinkHref: "#sgk-payments-title",
};
