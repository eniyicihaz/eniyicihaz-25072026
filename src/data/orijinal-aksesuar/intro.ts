// "Orijinal Aksesuar Nedir ve Neden Önemlidir?" section for the
// /neden-orijinal/orijinal-aksesuar page. Renders through the shared
// BrandPageIntro component. Same trust-topic genre as the three prior
// pages — no self-diagnosis disclaimer here since the subject is
// accessory quality, not hearing health; paragraph 4 states the
// practical takeaway the page builds toward.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const orijinalAksesuarIntro: BrandPageIntroContent = {
  badge: "ORİJİNAL AKSESUAR NEDİR?",
  heading: "Orijinal Aksesuar Nedir ve Neden Önemlidir?",
  paragraphs: [
    "Orijinal aksesuar, işitme cihazınızın üreticisi tarafından o modele özel olarak tasarlanmış ve üretilmiş kulak ucu, filtre, pil, şarj kutusu, temizlik kiti gibi ürünleri ifade eder.",
    "Bu aksesuarlar, cihazınızla tam uyumlu çalışacak şekilde test edilir ve üreticinin kalite standartlarına uygun olarak üretilir.",
    "Uyumsuz veya jenerik aksesuarlar; ses kalitesinde bozulmaya, cihaza fiziksel hasara veya hijyen sorunlarına yol açabilir.",
    "Aksesuarlarınızı yenilerken, cihazınızın markasına ve modeline özel orijinal ürünleri tercih etmeniz önerilir.",
  ],
  stats: [
    { value: "Modele Özel Üretim", label: "Uyum Garantisi" },
    { value: "Düzenli Değişim", label: "Hijyen Önerisi" },
    { value: "Orijinal Kulak Ucu", label: "Sık Kullanılan Aksesuar" },
    { value: "Yetkili Kanaldan Temin", label: "Güvenilir Kaynak" },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
