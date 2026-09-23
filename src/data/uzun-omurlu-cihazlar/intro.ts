// "Bir İşitme Cihazını Uzun Ömürlü Yapan Nedir?" section for the
// /neden-orijinal/uzun-omurlu-cihazlar page. Renders through the shared
// BrandPageIntro component. Same trust-topic genre as Güvenilir
// Teknoloji — no self-diagnosis disclaimer here since the subject is
// product durability, not hearing health; paragraph 4 states the
// practical takeaway the page builds toward.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const uzunOmurluCihazlarIntro: BrandPageIntroContent = {
  badge: "UZUN ÖMÜRLÜ CİHAZLAR NEDİR?",
  heading: "Bir İşitme Cihazını Uzun Ömürlü Yapan Nedir?",
  paragraphs: [
    "Bir işitme cihazının ömrü; kullanılan bileşenlerin kalitesine, düzenli bakımına ve orijinal yedek parça desteğine erişimine bağlıdır.",
    "Orijinal cihazlar, üretici tarafından belirlenen kalite standartlarına uygun bileşenlerle üretilir ve bu da cihazın uzun yıllar güvenilir bir şekilde çalışmasına katkı sağlar.",
    "Ortalama bir işitme cihazı, doğru bakımla birlikte genellikle 4-6 yıl arasında kullanılabilir; ancak bu süre kullanım koşullarına ve bakım düzenine göre değişebilir.",
    "Cihazınızın ömrünü uzatmanın en etkili yolu; düzenli temizlik, periyodik kontrol ve orijinal yedek parça kullanımıdır.",
  ],
  stats: [
    { value: "4-6 Yıl", label: "Ortalama Kullanım Ömrü" },
    { value: "Düzenli Bakım", label: "Ömrü Uzatan Faktör" },
    { value: "Orijinal Yedek Parça", label: "Sürdürülebilir Destek" },
    { value: "Periyodik Kontrol", label: "Önerilen Rutin" },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
