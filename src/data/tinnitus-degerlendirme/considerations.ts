// "Dikkat Edilmesi Gerekenler" section for the /degerlendirme/
// tinnitus-degerlendirme page. Reuses the shared BrandPageIdealUser
// component, visually differentiated by the design system's own
// --color-warning token (#d97706). The first item is this page's
// key safety flag: unilateral/pulsatile tinnitus needs a prompt ENT
// evaluation rather than routine testing, since it can occasionally
// point to a vascular or structural cause.

import { AlertTriangle, Ear, Pill, Stethoscope, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const tinnitusDegerlendirmeConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Tinnitus Değerlendirmesinde Dikkat Edilmesi Gereken Noktalar",
  intro: "Erken değerlendirme faydalı bir adımdır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Tek Taraflı veya Nabızla Uyumlu Çınlamada Vakit Kaybetmeden Değerlendirme Önemlidir",
      description: "Yalnızca tek kulakta veya kalp atışıyla eş zamanlı hissedilen çınlama, vakit kaybetmeden bir uzmana başvurmayı gerektirir.",
      suggestedFamilies: ["Öncelikli KBB Yönlendirmesi"],
    },
    {
      icon: Ear,
      title: "Tinnitus Tek Başına Bir Tanı Değildir",
      description: "Tinnitus, altta yatan farklı nedenlere işaret edebilen bir semptomdur; kesin neden yalnızca bir uzman tarafından belirlenebilir.",
      suggestedFamilies: ["Uzman Değerlendirmesi"],
    },
    {
      icon: Pill,
      title: "Kullandığınız İlaçlar Değerlendirmede Önemlidir",
      description: "Bazı ilaçlar tinnitus şikayetini tetikleyebilir; kullandığınız ilaçları değerlendirme sırasında paylaşmanız önerilir.",
      suggestedFamilies: ["İlaç Öyküsü"],
    },
    {
      icon: Stethoscope,
      title: "Kendi Kendine Değerlendirme Yerine Uzmana Danışın",
      description: "Şüpheleriniz varsa kendi kendine değerlendirme yapmak yerine bir odyometrist veya KBB uzmanına danışmanız önerilir.",
      suggestedFamilies: ["Uzman Danışmanlığı"],
    },
    {
      icon: RefreshCcw,
      title: "Tek Bir Değerlendirme Yeterli Olmayabilir",
      description: "Tinnitus'un seyri değişkenlik gösterebilir; bazı durumlarda değerlendirmenin belirli aralıklarla tekrarlanması önerilebilir.",
      suggestedFamilies: ["Periyodik Takip"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
