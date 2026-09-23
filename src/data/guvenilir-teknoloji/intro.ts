// "Güvenilir Teknoloji Nedir?" section for the /neden-orijinal/
// guvenilir-teknoloji page. Renders through the shared BrandPageIntro
// component. Unlike every device/technology/need page this session,
// this page's subject is product authenticity rather than a hearing
// health topic — so there is no self-diagnosis disclaimer here; instead
// paragraph 4 states the practical verification takeaway the whole page
// builds toward.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const guvenilirTeknolojiIntro: BrandPageIntroContent = {
  badge: "GÜVENİLİR TEKNOLOJİ NEDİR?",
  heading: "Güvenilir Teknoloji Nedir ve Nasıl Doğrulanır?",
  paragraphs: [
    "Güvenilir teknoloji, bir işitme cihazının üretici tarafından resmi olarak test edilmiş, sertifikalandırılmış ve yetkili distribütör kanalıyla satışa sunulmuş olması anlamına gelir.",
    "Orijinal bir cihaz; güncel yazılım sürümüne, üretici garantisine, resmi seri numarasına ve yetkili teknik servis desteğine sahiptir.",
    "Paralel ithal, kaçak veya sahte ürünler ise genellikle bu güvencelerin hiçbirini sunmaz; bu nedenle satın alma öncesinde ürünün orijinalliğini doğrulamak önemlidir.",
    "Bir cihazın orijinalliğini doğrulamanın en güvenilir yolu, yetkili bir bayiden faturalı olarak satın almak ve seri numarasını üretici sistemi üzerinden kontrol etmektir.",
  ],
  stats: [
    { value: "Yetkili Distribütör", label: "Satış Kanalı" },
    { value: "Üretici Garantili", label: "Güvence Türü" },
    { value: "Seri Numarası ile Doğrulanır", label: "Orijinallik Kontrolü" },
    { value: "Resmi Teknik Servis", label: "Destek Türü" },
  ],
  accentColor: "#1d4ed8",
  accentColorBadgeBg: "rgb(29 78 216 / 0.08)",
  accentColorBadgeBorder: "rgb(29 78 216 / 0.35)",
  accentColorBadgeText: "#1e40af",
};
