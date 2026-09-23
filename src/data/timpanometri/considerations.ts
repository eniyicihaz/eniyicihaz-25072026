// "Dikkat Edilmesi Gerekenler" section for the /degerlendirme/
// timpanometri page. Reuses the shared BrandPageIdealUser component,
// visually differentiated by the design system's own --color-warning
// token (#d97706).

import { AlertTriangle, Ear, Stethoscope, Volume2, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const timpanometriConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Timpanometri Öncesinde Dikkat Edilmesi Gereken Noktalar",
  intro: "Timpanometri faydalı bir değerlendirme adımıdır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Kulak Zarı Delinmesi Olan Kullanıcılarda Farklı Değerlendirme Gerekir",
      description: "Kulak zarında delinme veya tüp bulunan kullanıcılarda test sonuçları farklı yorumlanır.",
      suggestedFamilies: ["Özel Durum Değerlendirmesi"],
    },
    {
      icon: Ear,
      title: "Kulak Kiri Test Sonucunu Etkileyebilir",
      description: "Kulak kanalını tıkayan yoğun kulak kiri, test uygulamasını veya sonucunu etkileyebilir.",
      suggestedFamilies: ["Kulak Muayenesi"],
    },
    {
      icon: Stethoscope,
      title: "Test Tek Başına Tanı Koymaz",
      description: "Timpanometri sonuçları, kesin tanı için diğer bulgularla birlikte bir uzman tarafından değerlendirilmelidir.",
      suggestedFamilies: ["Uzman Yorumlaması"],
    },
    {
      icon: Volume2,
      title: "Hafif Bir Basınç Hissi Yaşanabilir",
      description: "Test sırasında kulak kanalındaki basınç değişimi nedeniyle hafif bir basınç hissi olabilir; bu geçicidir.",
      suggestedFamilies: ["Test Deneyimi"],
    },
    {
      icon: RefreshCcw,
      title: "Bazı Durumlarda Tekrar Test Gerekebilir",
      description: "Soğuk algınlığı gibi geçici durumlar sonuçları etkileyebilir; gerekirse test tekrarlanabilir.",
      suggestedFamilies: ["Periyodik Kontrol"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
