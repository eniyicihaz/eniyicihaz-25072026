// "Bu Sayfa Neyi Paylaşıyor?" section for the /blog/basari-hikayeleri
// page. Renders through the shared BrandPageIntro component. Paragraph
// 3-4 are the load-bearing content-integrity disclaimer — explicitly
// states no specific patient testimonials are shared, only general,
// aggregate experience categories. See hero.ts for the full rationale.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const basariHikayeleriIntro: BrandPageIntroContent = {
  badge: "BU SAYFA NEYİ PAYLAŞIYOR?",
  heading: "İşitme Cihazı Kullanmanın Hayata Kattıkları",
  paragraphs: [
    "İşitme kaybının desteklenmesi, birçok kişinin günlük hayatında fark edilir olumlu değişimlere katkıda bulunabiliyor.",
    "Bu değişimler kişiden kişiye farklılık gösterse de, kliniğimizde en sık gözlemlediğimiz genel deneyim kategorileri aile iletişimi, sosyal hayat ve iş hayatı çevresinde yoğunlaşıyor.",
    "Bu sayfa, hastalarımızın kişisel bilgilerini veya belirli vakaları paylaşmaz; yalnızca genel ve toplulaştırılmış deneyim kategorilerini yansıtır.",
    "Kendi deneyiminizin nasıl şekilleneceği, işitme kaybınıza, yaşam tarzınıza ve seçtiğiniz cihaza göre değişir; kesin bir sonuç garanti edilemez.",
  ],
  stats: [
    { value: "Aile İletişimi", label: "Genel Deneyim Alanı" },
    { value: "Sosyal Hayat", label: "Genel Deneyim Alanı" },
    { value: "İş Hayatı", label: "Genel Deneyim Alanı" },
    { value: "Kişiye Özel", label: "Gerçek Sonuç" },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
