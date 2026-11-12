// Kulak arkası (BTE) cihazın 3 boyutlu görüntüleyicisi — metinler ve poster görselleri.
//
// Gösterilen cihaz TEMSİLİ, markasız ve özgün bir modeldir (belirli bir ürünün kopyası değildir); üzerinde yazı, logo veya
// marka işareti yoktur. Bu yüzden buradaki metinler marka/model iddiası taşımamalı ve modelin temsili olduğunu söylemelidir.
// Modelin nasıl üretildiği, dosya boyutları ve bakım: docs/tech/BTE_3D_VIEWER.md
export interface Bte3dPoster {
  /** public/ altındaki yol; aynı adın .avif ve .webp sürümü bulunur (uzantısız verilir). */
  base: string;
  width: number;
  height: number;
}

export interface Bte3dContent {
  /** Başlığın `id`'si (sayfa içi bağlantı: #bte-3d). */
  id: string;
  eyebrow: string;
  /** Görünen başlık ve kısa giriş. */
  title: string;
  intro: string;
  /** Poster görselinin alt metni ve görüntüleyicinin erişilebilir adı. */
  alt: string;
  /** Görüntüleyicinin altındaki kısa açıklama (modelin temsili olduğu). */
  note: string;
  /** Görüntüleyicinin altındaki bağlantı; görüntüleyici o sayfanın kendisindeyse çizilmez. */
  link: { href: string; label: string };
  /** Model inene kadar (ve WebGL yoksa) gösterilen durağan görsel: geniş sahne (4:3) ve dar ekran sahnesi (1:1). */
  posterWide: Bte3dPoster;
  posterSquare: Bte3dPoster;
}

export const bte3d: Bte3dContent = {
  id: "bte-3d",
  eyebrow: "360° · 3 Boyutlu Görünüm",
  title: "Kulak Arkası Cihazı Her Açıdan İnceleyin",
  intro:
    "Cihazın üzerine basılı tutup sürükleyin; kulak arkası (BTE) bir işitme cihazının gövdesini, düğmelerini, şeffaf kancasını, ses tüpünü ve kulak kalıbını her açıdan görebilirsiniz.",
  alt: "Kulak arkası (BTE) işitme cihazının üç boyutlu modeli: gümüş gri gövde, şeffaf kanca, ses tüpü ve kulak kalıbı",
  note: "Temsili üç boyutlu modeldir; belirli bir marka veya modeli göstermez. Gerçek cihazların biçimi, rengi ve kulak parçası modele göre değişir.",
  link: { href: "/isitme-cihazlari/kulak-arkasi-bte/", label: "Kulak arkası (BTE) cihazları inceleyin" },
  // Posterler canlı sahnenin başlangıç karesinden, tuvalin tam pikselleriyle üretilir (yeniden örnekleme yok); boyutlar
  // bu yüzden 1080×810 / 800×800 değil, sahnenin 1 px'lik kenarlığı düşülmüş hâlidir.
  posterWide: { base: "/images/bte3d/bte-3d-poster-4x3", width: 1077, height: 807 },
  posterSquare: { base: "/images/bte3d/bte-3d-poster-1x1", width: 796, height: 796 },
};
