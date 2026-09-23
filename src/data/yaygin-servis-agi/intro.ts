// "Yaygın Servis Ağı Nedir ve Neden Önemlidir?" section for the
// /neden-orijinal/yaygin-servis-agi page. Renders through the shared
// BrandPageIntro component. Same trust-topic genre as the two prior
// pages — no self-diagnosis disclaimer here since the subject is service
// infrastructure, not hearing health; paragraph 4 states the practical
// takeaway (mobility/travel benefit) the page builds toward.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const yayginServisAgiIntro: BrandPageIntroContent = {
  badge: "YAYGIN SERVİS AĞI NEDİR?",
  heading: "Yaygın Servis Ağı Nedir ve Neden Önemlidir?",
  paragraphs: [
    "Yaygın servis ağı, bir markanın yetkili teknik servis noktalarının geniş bir coğrafyaya yayılmış olması ve kullanıcıların ihtiyaç duydukları desteğe kolayca ulaşabilmesi anlamına gelir.",
    "Orijinal ürünler, üreticinin belirlediği yetkili servis ağı tarafından desteklenir; bu ağ, sertifikalı teknisyenler ve orijinal yedek parçalarla hizmet verir.",
    "Orijinal olmayan veya paralel ithal ürünler genellikle bu servis ağının kapsamı dışında kalır; bu durum, arıza anında destek bulmayı zorlaştırabilir.",
    "Yetkili bir servis ağına erişim, özellikle seyahat eden veya farklı şehirlerde yaşayan kullanıcılar için önemli bir avantaj sağlar.",
  ],
  stats: [
    { value: "Yetkili Teknisyenler", label: "Servis Kalitesi" },
    { value: "Orijinal Yedek Parça", label: "Onarım Standardı" },
    { value: "Hızlı Yanıt Süresi", label: "Arıza Desteği" },
    { value: "Geniş Kapsama Alanı", label: "Erişim Kolaylığı" },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
