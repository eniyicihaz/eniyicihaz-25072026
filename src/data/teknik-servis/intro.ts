// "Teknik Servis Nedir ve Neyi Kapsar?" section for the /servis-bakim/
// teknik-servis page. Renders through the shared BrandPageIntro
// component. Service-process genre, same as the Uygulama & Ayar
// series — no self-diagnosis disclaimer; paragraph 4 is the honest
// boundary that some repairs require manufacturer shipping, which
// affects turnaround time.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const teknikServisIntro: BrandPageIntroContent = {
  badge: "TEKNİK SERVİS NEDİR?",
  heading: "Teknik Servis Nedir ve Neyi Kapsar?",
  paragraphs: [
    "Teknik servis, işitme cihazınızda ses kesintisi, açılmama sorunu, fiziksel hasar veya su teması gibi bir arıza fark ettiğinizde başvurabileceğiniz teşhis ve onarım hizmetimizdir.",
    "Süreç, sorununuzun kliniğimizde yerinde teşhis edilmesiyle başlar; birçok basit sorun bu aşamada çözülebilir.",
    "Daha kapsamlı bir onarım gerektiğinde, cihazınız orijinal yedek parça kullanan yetkili üretici servisine gönderilir; bu durumda süreç birkaç iş günü daha uzayabilir.",
    "Cihazınızda hiçbir fiziksel sorun olmasa da performans veya ayar kaynaklı bir şikayetiniz varsa, teknik servis yerine Kontrol Randevusu veya Uzaktan Ayar hizmetlerimiz daha uygun bir ilk adım olabilir.",
  ],
  stats: [
    { value: "Yerinde Teşhis", label: "İlk Adım" },
    { value: "Orijinal Yedek Parça", label: "Onarım Standardı" },
    { value: "Yetkili Servis Ağı", label: "Kapsamlı Onarımlar" },
    { value: "Takip Edilebilir Süreç", label: "Şeffaflık" },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
};
