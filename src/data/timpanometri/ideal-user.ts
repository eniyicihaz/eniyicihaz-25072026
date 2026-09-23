// "Timpanometri Kimler İçin Önerilir?" section for the /degerlendirme/
// timpanometri page. Reuses the shared BrandPageIdealUser component in
// its original candidacy sense, same technique used on the two prior
// pages.

import { Baby, Ear, AlertCircle, Gauge, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const timpanometriIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN ÖNERİLİR?",
  heading: "Timpanometri Kimler İçin Önerilir?",
  intro: "Aşağıdaki profiller, timpanometrinin sıkça önerildiği kullanıcı gruplarını yansıtır; size en uygun değerlendirme her zaman bir odyometrist tarafından belirlenir.",
  profiles: [
    {
      icon: Baby,
      title: "Küçük Çocuklar",
      description: "Aktif yanıt gerektirmemesi nedeniyle timpanometri, küçük çocuklarda sıkça tercih edilen bir değerlendirme yöntemidir.",
      suggestedFamilies: ["Çocuk Timpanometrisi"],
    },
    {
      icon: Ear,
      title: "Kulakta Dolgunluk veya Basınç Hissi Yaşayanlar",
      description: "Kulakta dolgunluk, basınç veya tıkanıklık hissi yaşayan kullanıcılar için timpanometri değerlendirilebilir.",
      suggestedFamilies: ["Orta Kulak Değerlendirmesi"],
    },
    {
      icon: AlertCircle,
      title: "Sık Kulak Enfeksiyonu Geçmişi Olanlar",
      description: "Sık tekrarlayan kulak enfeksiyonu öyküsü olan kullanıcılar için orta kulak fonksiyonunun değerlendirilmesi önerilebilir.",
      suggestedFamilies: ["Orta Kulak Takibi"],
    },
    {
      icon: Gauge,
      title: "Odyometri Sonucu Belirsiz Çıkan Kullanıcılar",
      description: "Odyometri sonuçlarının netleştirilmesi gerektiğinde timpanometri tamamlayıcı bir değerlendirme sunar.",
      suggestedFamilies: ["Tamamlayıcı Değerlendirme"],
    },
    {
      icon: RefreshCcw,
      title: "Uçak Yolculuğu Sonrası Şikayeti Olanlar",
      description: "Basınç değişikliklerinden sonra kulak şikayeti yaşayan kullanıcılar için orta kulak değerlendirmesi faydalı olabilir.",
      suggestedFamilies: ["Basınç Değerlendirmesi"],
    },
  ],
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
  accentColorIconBg: "rgb(147 51 234 / 0.1)",
};
