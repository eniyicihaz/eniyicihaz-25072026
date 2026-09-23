// "Dikkat Edilmesi Gerekenler" section for the /isitme-cihazlari/
// kulak-arkasi-bte page — deliberately absent from competitor pages per
// the brief. Reuses the shared BrandPageIdealUser component (icon + title
// + description + tag chips grid is exactly the right shape for "practical
// caution + suggested mitigation" cards) rather than a new component;
// visually differentiated from the "Kimler İçin Uygun" section above by
// using the design system's own --color-warning token (#d97706) instead
// of the page's corporate-blue accent, so the two sections read as
// distinct sections despite sharing markup.

import { Glasses, Baby, Dumbbell, Droplets, SprayCan } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const kulakArkasiConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "BTE Seçerken Dikkat Edilmesi Gereken Noktalar",
  intro: "BTE genel olarak dayanıklı ve kullanışlı bir seçenektir; yine de yaşam tarzınıza göre değerlendirmeniz gereken birkaç pratik nokta vardır.",
  profiles: [
    {
      icon: Glasses,
      title: "Gözlük Kullananlar",
      description: "Gözlük sapı ile cihaz gövdesi aynı bölgeyi paylaştığı için ilk günlerde kısa bir alışma süreci gerekebilir.",
      suggestedFamilies: ["İnce RIC Modeller Önerilir"],
    },
    {
      icon: Baby,
      title: "Çocuk Kullanıcılar",
      description: "Büyüme sürecinde kulak kalıbının belirli aralıklarla yenilenmesi ve düzenli kontrol gerekebilir.",
      suggestedFamilies: ["Düzenli Kontrol"],
    },
    {
      icon: Dumbbell,
      title: "Aktif Yaşam ve Spor Yapanlar",
      description: "Yoğun hareket sırasında cihazın yerinden oynamaması için ek sabitleme aksesuarları tercih edilebilir.",
      suggestedFamilies: ["Spor Kilidi Aksesuarı"],
    },
    {
      icon: Droplets,
      title: "Yoğun Terleyenler",
      description: "Yoğun terleme, gövdenin neme maruz kalma riskini artırabilir; günlük kurutma alışkanlığı önerilir.",
      suggestedFamilies: ["Kurutma Kutusu"],
    },
    {
      icon: SprayCan,
      title: "Temizlik ve Bakım",
      description: "Düzenli temizlik yapılmadığında kulak kalıbında biriken kir, ses kalitesini zamanla etkileyebilir.",
      suggestedFamilies: ["Haftalık Temizlik"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
