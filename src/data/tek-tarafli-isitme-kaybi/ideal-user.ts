// "Günlük Yaşamdaki Belirtileri" section for the /ihtiyaciniza-gore/
// tek-tarafli-isitme-kaybi page. Reuses the shared BrandPageIdealUser
// component, but repurposed from its usual "candidacy profile" sense
// into everyday recognizable scenarios — since this entire page IS
// already a need category, restating candidacy would be circular. Framed
// as illustrative examples, never a checklist for self-diagnosis; the
// intro line reinforces that a hearing test is the only way to confirm.

import { Compass, Users, Car, Phone, Ear } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const tekTarafliIsitmeKaybiIdealUser: BrandPageIdealUserContent = {
  badge: "GÜNLÜK YAŞAMDAKİ BELİRTİLER",
  heading: "Tek Taraflı İşitme Kaybı Günlük Yaşamda Nasıl Fark Edilir?",
  intro: "Aşağıdaki örnekler sıkça karşılaşılan belirtilerdir; kesin değerlendirme her zaman bir işitme testiyle netleşir.",
  profiles: [
    {
      icon: Compass,
      title: "Sesin Geldiği Yönü Belirlemekte Güçlük",
      description: "İki kulaklı işitme olmadığından, bir sesin hangi yönden geldiğini anlamak zorlaşabilir.",
      suggestedFamilies: ["CROS / BiCROS Sistemleri"],
    },
    {
      icon: Users,
      title: "Kalabalık Ortamlarda Konuşmayı Takip Edememe",
      description: "Özellikle kötü duyan taraftan gelen konuşmaları takip etmek oldukça zorlaşabilir.",
      suggestedFamilies: ["Yönlü Mikrofonlu Modeller"],
    },
    {
      icon: Car,
      title: "Trafikte veya Yürürken Ses Kaynağını Belirleyememe",
      description: "Araç veya bisiklet gibi yaklaşan bir ses kaynağının yönünü fark etmekte zorlanabilirsiniz.",
      suggestedFamilies: ["CROS Sistemleri"],
    },
    {
      icon: Phone,
      title: "Telefonu Hangi Kulağa Tutacağını Şaşırma",
      description: "Telefonu iyi duyan kulağa tutma alışkanlığı geliştirdiğinizi fark edebilirsiniz.",
      suggestedFamilies: ["Bluetooth Özellikli Modeller"],
    },
    {
      icon: Ear,
      title: "Kötü Duyan Taraftan Gelen Seslerin Fark Edilmemesi",
      description: "Kötü duyan tarafınızdan seslenen birini fark etmekte zorlanabilirsiniz (baş gölgesi etkisi).",
      suggestedFamilies: ["CROS / BiCROS Sistemleri"],
    },
  ],
  accentColor: "#52525b",
  accentColorBadgeBg: "rgb(82 82 91 / 0.08)",
  accentColorBadgeBorder: "rgb(82 82 91 / 0.35)",
  accentColorBadgeText: "#3f3f46",
  accentColorIconBg: "rgb(82 82 91 / 0.1)",
};
