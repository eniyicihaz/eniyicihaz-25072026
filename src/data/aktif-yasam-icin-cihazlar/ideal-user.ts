// "Bu Sayfa Kimler İçin Uygun?" section for the /ihtiyaciniza-gore/
// aktif-yasam-icin-cihazlar page. Reuses the shared BrandPageIdealUser
// component, repurposed here into activity-based scenarios rather than
// symptom-based ones (since this page's own axis is lifestyle, not a
// hearing-loss symptom set) — still framed as illustrative examples, not
// a checklist, with the intro line reinforcing that a hearing test is
// the only way to confirm the underlying hearing profile.

import { Dumbbell, Bike, Plane, Droplets, Briefcase } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const aktifYasamIcinCihazlarIdealUser: BrandPageIdealUserContent = {
  badge: "BU SAYFA KİMLER İÇİN UYGUN?",
  heading: "Aktif Yaşam İçin Cihaz Seçimi Hangi Kullanıcılar İçin Değerlendirilir?",
  intro: "Aşağıdaki örnekler sıkça karşılaşılan kullanım senaryolarıdır; size en uygun cihaz her zaman bir işitme testiyle netleşir.",
  profiles: [
    {
      icon: Dumbbell,
      title: "Düzenli Spor Yapan Kullanıcılar",
      description: "Fitness, koşu gibi düzenli egzersiz yapan kullanıcılar için güvenli oturma ve ter direnci öncelikli olabilir.",
      suggestedFamilies: ["Güvenli Oturmalı Modeller"],
    },
    {
      icon: Bike,
      title: "Açık Havada Aktif Kullanıcılar",
      description: "Bisiklet, doğa yürüyüşü gibi açık hava aktivitelerinde rüzgar gürültüsünün azaltılması önemli olabilir.",
      suggestedFamilies: ["Rüzgar Gürültüsü Azaltmalı Modeller"],
    },
    {
      icon: Plane,
      title: "Sık Seyahat Eden Kullanıcılar",
      description: "Uzun süreli seyahatlerde uzun pil ömrü ve hızlı şarj imkanı pratik bir avantaj sağlayabilir.",
      suggestedFamilies: ["Hızlı Şarj Özellikli Modeller"],
    },
    {
      icon: Droplets,
      title: "Nemli veya Yağmurlu Ortamlarda Aktif Kullanıcılar",
      description: "Yüksek IP koruma sınıfına sahip modeller, ter ve neme karşı ek güven sağlayabilir.",
      suggestedFamilies: ["Suya Dayanıklı Modeller"],
    },
    {
      icon: Briefcase,
      title: "Yoğun Sosyal ve İş Temposu Olan Kullanıcılar",
      description: "Gün boyu aktif kullanım gerektiren yoğun bir temponun sürdürülmesi, uzun pil ömrünü öncelikli hale getirebilir.",
      suggestedFamilies: ["Uzun Pil Ömürlü Modeller"],
    },
  ],
  accentColor: "#4b5563",
  accentColorBadgeBg: "rgb(75 85 99 / 0.08)",
  accentColorBadgeBorder: "rgb(75 85 99 / 0.35)",
  accentColorBadgeText: "#374151",
  accentColorIconBg: "rgb(75 85 99 / 0.1)",
};
