// "Avantajları" bento section for the /uygulama-ayar/kalip-alimi
// page — framed as the genuine advantages of a custom ear mold. Renders
// through the shared BrandPageAdvantages component — items must be
// exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { Fingerprint, ShieldCheck, VolumeX, Palette, Ruler, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const kalipAlimiAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Kişiye Özel Kalıbın Sunduğu Avantajlar",
  intro: "Standart kulak ucu yerine kişiye özel bir kalıp tercih etmenin nedenleri.",
  hero: {
    icon: Fingerprint,
    category: "Kişiye Özel Uyum",
    title: "Yalnızca Sizin Kulak Kanalınıza Göre Üretilir",
    description: "Kalıbınız, standart bir boyuta değil; kendi kulak kanalınızın gerçek şekline göre şekillendirilir.",
  },
  items: [
    {
      icon: ShieldCheck,
      category: "Daha İyi Sızdırmazlık",
      title: "Akustik Sızdırmazlık Sağlar",
      description: "Kulak kanalına tam oturması, ses sızıntısını azaltarak daha net bir ses deneyimi sunabilir.",
    },
    {
      icon: VolumeX,
      category: "Geri Bildirim Önleme",
      title: "Islık Sesi Riskini Azaltabilir",
      description: "İyi bir sızdırmazlık, standart kulak uçlarında sık görülen ıslık sesi sorununu azaltmaya yardımcı olabilir.",
    },
    {
      icon: Palette,
      category: "Kişiye Özel Görünüm",
      title: "Renk ve Malzeme Seçeneği Sunar",
      description: "Kalıbınızın rengini ve malzemesini tercihinize göre seçebilirsiniz.",
    },
    {
      icon: Ruler,
      category: "Uzun Süreli Konfor",
      title: "Günlük Kullanımda Daha Konforlu Olabilir",
      description: "Kulak kanalınıza tam oturan bir kalıp, uzun süreli kullanımda standart uçlara göre daha konforlu hissettirebilir.",
    },
    {
      icon: Sparkles,
      category: "Ücretsiz Ölçüm",
      title: "Kalıp Alımı Herhangi Bir Ücret Talep Etmez",
      description: "Kalıp alımı randevusu, herhangi bir ücret talep edilmeden sunulur.",
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
  accentColorIconBg: "rgb(219 39 119 / 0.1)",
  accentColorHoverBorder: "rgb(219 39 119 / 0.45)",
};
