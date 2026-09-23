// "Çocuklarda SGK Süreci Neden Farklıdır?" section for the
// /sgk/cocuklarda-sgk page. Renders through the shared BrandPageIntro
// component.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const cocuklardaSgkIntro: BrandPageIntroContent = {
  badge: "ÇOCUKLARDA SGK SÜRECİ",
  heading: "Çocuklarda SGK Süreci Neden Farklıdır?",
  paragraphs: [
    "İşitme kaybı, çocuklarda dil, konuşma ve sosyal gelişimi doğrudan etkileyebildiği için erken tanı ve müdahale büyük önem taşır; SGK da bu nedenle çocukları ayrı bir destek kategorisi olarak değerlendirir.",
    "Çocuklarda sağlık kurulu raporu, çocuğun yaşına uygun pediatrik odyoloji yöntemleriyle yapılan değerlendirme sonucunda düzenlenir.",
    "Başvuru sürecinde, çocuğun kendi belgelerine ek olarak veli veya vasi olduğunu gösteren belgeler de istenir; bu belgeler için Gerekli Belgeler sayfamızı inceleyebilirsiniz.",
    "Bu sayfa, çocuklarda sürecin genel farklarını anlatır; güncel yaş grubu tanımları ve destek tutarları için SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi sayfamızı inceleyebilirsiniz.",
  ],
  stats: [
    { value: "Erken Müdahale", label: "Öncelik" },
    { value: "Pediatrik Odyoloji", label: "Değerlendirme Yöntemi" },
    { value: "Veli/Vasi Belgesi", label: "Ek Belge" },
    { value: "Yaş Grubuna Göre", label: "Destek Kategorisi" },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
