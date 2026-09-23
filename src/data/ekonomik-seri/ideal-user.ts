// "Ekonomik Seri Kimler İçin Uygun?" section for the /segmentler/
// ekonomik-seri page. Reuses the shared BrandPageIdealUser component in
// its original candidacy sense (like Premium Seri, Standart Seri and
// every devicesMega page), not the red-flag/risk-list repurposing used
// throughout the "Neden Orijinal" series.

import { Wallet, Home, Ear, Sparkles, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const ekonomikSeriIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN?",
  heading: "Ekonomik Seri Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller, ekonomik serinin sıkça değerlendirildiği kullanıcı gruplarını yansıtır; size en uygun seri her zaman bir ihtiyaç değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Wallet,
      title: "Sınırlı Bütçesi Olan Kullanıcılar",
      description: "Bütçesi sınırlı olan ve temel işitme ihtiyaçlarını karşılamak isteyen kullanıcılar için ekonomik seri değerlendirilebilir.",
      suggestedFamilies: ["Uygun Fiyatlı Modeller"],
    },
    {
      icon: Home,
      title: "Genellikle Sakin ve Tanıdık Ortamlarda Bulunanlar",
      description: "Ev gibi sakin ve tanıdık ortamlarda vakit geçiren kullanıcılar için ekonomik seri sıkça yeterli olabilir.",
      suggestedFamilies: ["Temel Kullanım Modelleri"],
    },
    {
      icon: Ear,
      title: "Hafif Derecede İşitme Kaybı Yaşayanlar",
      description: "Hafif derecede işitme kaybı yaşayan kullanıcılar için ekonomik seri, ilk değerlendirme seçeneği olabilir.",
      suggestedFamilies: ["Hafif İşitme Kaybı İçin Modeller"],
    },
    {
      icon: Sparkles,
      title: "Sade Bir Kullanım Deneyimi Tercih Edenler",
      description: "Az sayıda ayar seçeneğiyle basit bir kullanım deneyimi isteyen kullanıcılar için uygun bir seçenektir.",
      suggestedFamilies: ["Kolay Kullanımlı Modeller"],
    },
    {
      icon: RefreshCcw,
      title: "İlk Kez Cihaz Deneyimlemek İsteyenler",
      description: "İşitme cihazı kullanımını ilk kez deneyimlemek isteyen kullanıcılar için ekonomik seri, düşük riskli bir başlangıç olabilir.",
      suggestedFamilies: ["Giriş Seviyesi Modeller"],
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
  accentColorIconBg: "rgb(22 163 74 / 0.1)",
};
