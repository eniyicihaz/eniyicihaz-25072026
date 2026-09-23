// "Odyometri Kimler İçin Önerilir?" section for the /degerlendirme/
// odyometri page. Reuses the shared BrandPageIdealUser component in its
// original candidacy sense, same technique used on Ücretsiz İşitme
// Testi.

import { Volume2, Calendar, Briefcase, RefreshCcw, Users } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const odyometriIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN ÖNERİLİR?",
  heading: "Odyometri Kimler İçin Önerilir?",
  intro: "Aşağıdaki profiller, odyometrinin sıkça önerildiği kullanıcı gruplarını yansıtır; size en uygun test sıklığı her zaman bir odyometrist tarafından belirlenir.",
  profiles: [
    {
      icon: Volume2,
      title: "İşitme Kaybından Şüphelenen Kullanıcılar",
      description: "Günlük yaşamda işitme güçlüğü fark eden kullanıcılar için odyometri ilk değerlendirme adımıdır.",
      suggestedFamilies: ["Temel Odyometri"],
    },
    {
      icon: Calendar,
      title: "Düzenli İşitme Kontrolü Yaptırmak İsteyenler",
      description: "Belirli aralıklarla işitme durumunu takip etmek isteyen kullanıcılar için odyometri önerilir.",
      suggestedFamilies: ["Periyodik Odyometri"],
    },
    {
      icon: Briefcase,
      title: "Gürültülü Ortamda Çalışanlar",
      description: "Yüksek gürültüye maruz kalan meslek gruplarında düzenli odyometri sıkça önerilir.",
      suggestedFamilies: ["Mesleki İşitme Takibi"],
    },
    {
      icon: RefreshCcw,
      title: "İşitme Cihazı Kullanan ve Ayar Güncellemesi Gerekenler",
      description: "Mevcut işitme cihazı kullanıcıları için düzenli odyometri, cihaz ayarlarının güncellenmesine yardımcı olabilir.",
      suggestedFamilies: ["Cihaz Ayarı Güncelleme"],
    },
    {
      icon: Users,
      title: "Yaş Ortalaması İlerlemiş Kullanıcılar",
      description: "İleri yaş kullanıcılar için düzenli odyometri, yaşa bağlı işitme değişimlerini takip etmeye yardımcı olabilir.",
      suggestedFamilies: ["Yaşa Bağlı Takip"],
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
  accentColorIconBg: "rgb(79 70 229 / 0.1)",
};
