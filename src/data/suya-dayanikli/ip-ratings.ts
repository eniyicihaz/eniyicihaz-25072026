// "IP Koruma Sınıflarının Anlamı" section for the /isitme-cihazlari/
// suya-dayanikli page. Reuses the shared BrandPageTechEvolution component
// in its original "stage" sense (era / what it brought / who it's for /
// tags) — unlike the BTE/ITE pages (dB severity progression), the Şarj
// Edilebilir page (device-family coverage), the Bluetooth page
// (technology timeline), the Çocuklara Özel page (age-stage progression)
// or the Görünmez page (fitting-process steps), here the slot maps onto a
// genuine protection-level progression: the IP (Ingress Protection)
// classes hearing aids commonly carry, from basic to top-tier, plus the
// nano-coating layer some manufacturers add on top.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const suyaDayankliIpRatings: BrandPageTechEvolutionContent = {
  badge: "IP KORUMA SINIFLARI",
  heading: "IP Koruma Sınıflarının Anlamı Nedir?",
  intro: "Koruma seviyesi arttıkça, cihazın toz ve suya karşı dayanıklılığı da genellikle artar.",
  stages: [
    {
      era: "IP54 – Temel Koruma",
      whatItBrought: "Toza karşı sınırlı, suya karşı ise sadece her yönden hafif su sıçramalarına karşı koruma sağlar.",
      bestFor: "Günlük temel koruma arayanlar",
      families: ["Giriş Seviyesi Modeller"],
    },
    {
      era: "IP57 – Orta Düzey Koruma",
      whatItBrought: "Toza karşı sınırlı korumanın yanında, kısa süreli ve sınırlı derinlikte suya daldırmaya karşı dayanıklılık sunar.",
      bestFor: "Orta düzey koruma arayan aktif kullanıcılar",
      families: ["Orta Segment Modeller"],
    },
    {
      era: "IP68 – Üst Düzey Koruma",
      whatItBrought: "Toza karşı tam koruma ve belirli bir süre/derinlikte suya daldırmaya karşı üst düzey dayanıklılık sunar; günümüzün en yüksek yaygın koruma sınıfıdır.",
      bestFor: "En üst düzey koruma isteyen aktif kullanıcılar",
      families: ["Premium Segment Modeller"],
    },
    {
      era: "Nano Kaplama (Ek Katman)",
      whatItBrought: "IP sınıfına ek olarak, elektronik bileşenlerin yüzeyine uygulanan nano kaplama, nem ve ter hasarına karşı ekstra bir koruma katmanı sunar.",
      bestFor: "Maksimum korumayı önceliklendiren kullanıcılar",
      families: ["Nano Kaplamalı Modeller"],
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
