// "Şarjlı Pil Teknolojisinin Gelişimi" section for the /teknolojiler/
// sarjli-teknolojiler page. Reuses the shared BrandPageTechEvolution
// component in its original "stage" sense (era / what it brought / who
// it's for / tags), same technique the Kablosuz Bağlantı page's
// evolution.ts uses for its own technology timeline — here mapped onto
// the genuine progression of battery chemistry, from disposable zinc-air
// through today's smart-managed lithium-ion cells. Distinct from the
// Şarj Edilebilir Cihazlar page's device-coverage.ts, which charts which
// physical device families offer a rechargeable option rather than the
// chemistry itself.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const sarjliTeknolojilerEvolution: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİNİN GELİŞİMİ",
  heading: "Şarjlı Pil Teknolojisinin Gelişimi",
  intro: "Pil teknolojisi, işitme cihazlarında zaman içinde farklı aşamalardan geçerek bugünkü akıllı şarj yönetimli lityum-iyon sistemlerine ulaştı.",
  stages: [
    {
      era: "Çinko-Hava (Tek Kullanımlık) Piller",
      whatItBrought: "Geleneksel işitme cihazı pilleri, havadaki oksijenle reaksiyona giren çinko-hava kimyasını kullanır; tek kullanımlıktır ve düzenli değişim gerektirir.",
      bestFor: "Şarj öncesi dönemin standart teknolojisi",
      families: ["Çinko-Hava Pilli Cihazlar"],
    },
    {
      era: "İlk Nesil NiMH Şarjlı Piller",
      whatItBrought: "Nikel-metal hidrit (NiMH) kimyasına dayanan ilk şarjlı işitme cihazı pilleri, sınırlı kapasite ve kısa döngü ömrüyle sınırlı bir alternatif sundu.",
      bestFor: "Şarjlı teknolojinin ilk örnekleri",
      families: ["NiMH Şarjlı Eski Modeller"],
    },
    {
      era: "Lityum-İyon (Li-ion) Piller",
      whatItBrought: "Daha yüksek enerji yoğunluğu ve daha uzun döngü ömrü sunan lityum-iyon piller, günümüzün standart şarjlı pil teknolojisi hâline geldi.",
      bestFor: "Günümüzün yaygın şarjlı modelleri",
      families: ["Lityum-İyon Şarjlı Modeller"],
    },
    {
      era: "Akıllı Şarj Yönetimli Gelişmiş Li-ion Sistemler",
      whatItBrought: "Dahili şarj yönetim devresi (BMS) ve uygulama entegrasyonu, pil sağlığını takip etmeyi ve güvenli şarjı optimize etmeyi mümkün kıldı.",
      bestFor: "En güncel pil yönetim teknolojisini isteyenler",
      families: ["Akıllı Şarj Yönetimli Üst Segment Modeller"],
    },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
};
