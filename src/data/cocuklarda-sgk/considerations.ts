// "Dikkat Edilmesi Gerekenler" section for the /sgk/cocuklarda-sgk
// page. Reuses the shared BrandPageIdealUser component, visually
// differentiated by the design system's own --color-warning token
// (#d97706). The first item is this page's key accuracy flag —
// explicitly directs readers to the pillar page for current figures,
// consistent with the site-wide SGK accuracy discipline.

import { AlertTriangle, Users, RefreshCcw, School, FileText } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const cocuklardaSgkConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Çocuklarda SGK Sürecinde Dikkat Edilmesi Gereken Noktalar",
  intro: "Çocuklarda süreç net bir çerçeveye sahiptir; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Güncel Yaş Grupları ve Tutarlar İçin SGK Rehberimizi İnceleyin",
      description: "Yaş grubu tanımları ve destek tutarları SGK mevzuatındaki güncellemelere göre değişebilir; en güncel bilgi için SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi sayfamızı inceleyebilirsiniz.",
      suggestedFamilies: ["Güncel Bilgi"],
    },
    {
      icon: Users,
      title: "Veli/Vasi Belgesi Gereklidir",
      description: "Çocuk adına yapılan başvurularda, veli veya vasi olduğunu gösteren belge istenir; detaylı bilgi için Gerekli Belgeler sayfamızı inceleyebilirsiniz.",
      suggestedFamilies: ["Veli/Vasi Belgesi"],
    },
    {
      icon: RefreshCcw,
      title: "Yaş Grubu Geçişlerinde Rapor Güncellenebilir",
      description: "Çocuk büyüyüp bir üst yaş grubuna geçtiğinde, güncel bir rapor yeniden gerekebilir.",
      suggestedFamilies: ["Yaş Grubu Geçişi"],
    },
    {
      icon: School,
      title: "Okul Döneminde Düzenli Kontrol Önemlidir",
      description: "Okul çağındaki çocuklarda cihazın doğru çalıştığından emin olmak için düzenli kontrol randevuları önerilir.",
      suggestedFamilies: ["Okul Dönemi Takibi"],
    },
    {
      icon: FileText,
      title: "Pediatrik Değerlendirme Yetişkin Sürecinden Farklıdır",
      description: "Çocuğun yaşına uygun özel test yöntemleri kullanıldığından, değerlendirme süreci yetişkinlerden farklı ilerleyebilir.",
      suggestedFamilies: ["Pediatrik Değerlendirme"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
