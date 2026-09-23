// "Dikkat Edilmesi Gerekenler" section for the /servis-bakim/
// cihaz-temizligi page. Reuses the shared BrandPageIdealUser component,
// visually differentiated by the design system's own --color-warning
// token (#d97706). The first two items are this page's key safety
// flags: never use water/alcohol/chemicals, never use sharp objects —
// genuine practical cautions for a hands-on daily habit.

import { Droplets, AlertTriangle, RefreshCcw, Wrench, Sun } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const cihazTemizligiConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Cihaz Temizliğinde Dikkat Edilmesi Gereken Noktalar",
  intro: "Günlük temizlik faydalı bir alışkanlıktır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: Droplets,
      title: "Su, Alkol veya Kimyasal Kullanmayın",
      description: "Cihazınızı asla su, alkol veya kimyasal temizleyicilerle temizlemeyin; bu maddeler elektronik bileşenlere kalıcı zarar verebilir.",
      suggestedFamilies: ["Malzeme Uyarısı"],
    },
    {
      icon: AlertTriangle,
      title: "Sivri veya Sert Cisim Kullanmayın",
      description: "Balmumu teli dışında sivri veya sert bir cisimle temizlik yapmak, cihazın hassas bileşenlerine zarar verebilir.",
      suggestedFamilies: ["Araç Seçimi"],
    },
    {
      icon: RefreshCcw,
      title: "Günlük Temizlik Periyodik Bakımın Yerini Almaz",
      description: "Balmumu filtresi veya tüp gibi parçaların profesyonelce yenilenmesi gerekir; bunun için Periyodik Bakım sayfamızı inceleyebilirsiniz.",
      suggestedFamilies: ["Profesyonel Bakım"],
    },
    {
      icon: Wrench,
      title: "Sorun Devam Ederse Teknik Servise Başvurun",
      description: "Temizlik sonrası ses sorunu devam ediyorsa, bir arıza söz konusu olabilir; bu durumda Teknik Servis değerlendirmesi önerilir.",
      suggestedFamilies: ["Arıza Değerlendirmesi"],
    },
    {
      icon: Sun,
      title: "Nemli Ortamlarda Ekstra Özen Gösterin",
      description: "Nemli iklimlerde veya sık terleyen kullanıcılarda, kuru saklama alışkanlığı daha da önem kazanır.",
      suggestedFamilies: ["Nem Koruması"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
