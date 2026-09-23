// "Dikkat Edilmesi Gerekenler" section for the /sgk/gerekli-belgeler
// page. Reuses the shared BrandPageIdealUser component, visually
// differentiated by the design system's own --color-warning token
// (#d97706). The first item is this page's key accuracy flag —
// explicitly directs readers to the clinic and Rapor Süreci for the
// current, exhaustive checklist, consistent with the site-wide SGK
// accuracy discipline.

import { AlertTriangle, Copy, FileClock, Baby, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const gerekliBelgelerConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Belge Hazırlığında Dikkat Edilmesi Gereken Noktalar",
  intro: "Belge süreci net bir çerçeveye sahiptir; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Güncel ve Eksiksiz Liste İçin Bizimle İletişime Geçin",
      description: "Belge şartları SGK mevzuatındaki güncellemelere göre değişebilir; size özel güncel liste için randevunuzda veya Rapor Süreci sayfamızda bilgi alabilirsiniz.",
      suggestedFamilies: ["Güncel Liste"],
    },
    {
      icon: Copy,
      title: "Bazı Belgelerin Aslı, Bazılarının Fotokopisi İstenir",
      description: "Hangi belgenin aslının, hangisinin fotokopisinin yeterli olduğu belge türüne göre değişir.",
      suggestedFamilies: ["Belge Türü"],
    },
    {
      icon: FileClock,
      title: "Rapor ve Reçetenin Güncel Olması Gerekir",
      description: "Sağlık kurulu raporu ve reçete, başvuru sırasında geçerliliğini korumalıdır.",
      suggestedFamilies: ["Güncellik Şartı"],
    },
    {
      icon: Baby,
      title: "Çocuklarda Ek Belgeler İstenebilir",
      description: "Çocuk başvurularında veli/vasi belgesi gibi ek belgeler gerekebilir; detaylı bilgi için Çocuklarda SGK sayfamızı inceleyebilirsiniz.",
      suggestedFamilies: ["Çocuklarda SGK"],
    },
    {
      icon: RefreshCcw,
      title: "Yenileme Başvurularında Farklı Belgeler İstenebilir",
      description: "Cihaz yenileme başvurusunda istenen belgeler ilk başvurudan farklı olabilir; detaylı bilgi için Yenileme Hakkı sayfamızı inceleyebilirsiniz.",
      suggestedFamilies: ["Yenileme Hakkı"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
