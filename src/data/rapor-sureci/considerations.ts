// "Dikkat Edilmesi Gerekenler" section for the /sgk/rapor-sureci page.
// Reuses the shared BrandPageIdealUser component, visually
// differentiated by the design system's own --color-warning token
// (#d97706). The first item is this page's key accuracy flag —
// explicitly directs readers to the pillar page and Gerekli Belgeler
// for current, exhaustive requirements, consistent with the site-wide
// SGK accuracy discipline.

import { AlertTriangle, Building2, FileWarning, Clock, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const raporSureciConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Rapor Sürecinde Dikkat Edilmesi Gereken Noktalar",
  intro: "Rapor süreci net bir çerçeveye sahiptir; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Güncel Şartlar İçin SGK Rehberimizi İnceleyin",
      description: "Rapor ve belge şartları SGK mevzuatındaki güncellemelere göre değişebilir; en güncel bilgi için SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi sayfamızı inceleyebilir veya merkezimizden bilgi alabilirsiniz.",
      suggestedFamilies: ["Güncel Şartlar"],
    },
    {
      icon: Building2,
      title: "Özel Hastane Raporları SGK Tarafından Kabul Edilmez",
      description: "SGK işitme cihazı ödemesinde kullanılacak raporun, SGK'nın kabul ettiği rapor ve MEDULA işlem sürecine uygun olması gerekir. Avrasya İşitme'nin uygulama sürecinde özel hastanelerden alınan raporlar kabul edilmemektedir; rapor almadan önce merkezimizden bilgi alın.",
      suggestedFamilies: ["Rapor Şartı"],
    },
    {
      icon: FileWarning,
      title: "Rapor ve Reçete Birlikte Değerlendirilir",
      description: "Yalnızca rapor yeterli değildir; uzman hekim reçetesi olmadan SGK başvurusu tamamlanamaz.",
      suggestedFamilies: ["Belge Bütünlüğü"],
    },
    {
      icon: Clock,
      title: "Süreç Hastaneden Hastaneye Farklılık Gösterebilir",
      description: "Heyet toplantı sıklığı ve randevu süreleri hastaneye göre değişebilir; başvurmadan önce ilgili hastaneden bilgi almanızı öneririz.",
      suggestedFamilies: ["Hastane Farkı"],
    },
    {
      icon: RefreshCcw,
      title: "Rapor Yenileme Gerekebilir",
      description: "Cihaz yenileme veya belirli durumlarda güncel bir raporun tekrar alınması gerekebilir; detaylı bilgi için Yenileme Hakkı sayfamızı inceleyebilirsiniz.",
      suggestedFamilies: ["Rapor Yenileme"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
