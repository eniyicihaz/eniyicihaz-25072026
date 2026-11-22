// "Dikkat Edilmesi Gerekenler" section for the /sgk/yenileme-hakki
// page. Reuses the shared BrandPageIdealUser component, visually
// differentiated by the design system's own --color-warning token
// (#d97706). The first item states how the 5-year period is counted
// (MEDULA record date, each ear separately); the old "see the pillar
// guide for the current period" redirect card is gone (owner-confirmed
// period; see hero.ts and renewal-guide.ts).

import { AlertTriangle, FileText, Baby, Building2, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const yenilemeHakkiConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Yenileme Hakkında Dikkat Edilmesi Gereken Noktalar",
  intro: "Yenileme hakkı net bir çerçeveye sahiptir; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "5 Yıllık Süre MEDULA Kayıt Tarihinden Başlar",
      description: "Süre, önceki cihazın MEDULA sistemine kaydedildiği tarihten itibaren hesaplanır; sağ ve sol kulak cihazları ayrı değerlendirilir. Kendi sürenizi merkezimizden öğrenebilirsiniz.",
      suggestedFamilies: ["Süre Hesabı"],
    },
    {
      icon: FileText,
      title: "Süre Dolmadan Yenileme Yalnızca İstisnalarda Mümkündür",
      description: "SUT iki istisna tanır: büyüme ve gelişme çağındaki çocuk ile kullanıcı kusuru olmadan oluşan, onarılamayan arıza; ikisinde de sağlık raporu gerekir. İşitme kaybının ilerlemesi bu istisnalar arasında yer almaz.",
      suggestedFamilies: ["Süre Dolmadan Yenileme"],
    },
    {
      icon: Baby,
      title: "Çocuklarda da Süre 5 Yıldır",
      description: "5 yıllık süre çocuklar için de geçerlidir. Çocuğun büyümesi nedeniyle cihaz kullanılamıyorsa, sağlık raporuyla belgelenmesi koşuluyla süre dolmadan yenileme değerlendirilebilir.",
      suggestedFamilies: ["Çocuklarda SGK"],
    },
    {
      icon: Building2,
      title: "Yenileme de Anlaşmalı Merkez Şartına Tabidir",
      description: "Yenileme başvurusunda da cihazın SGK anlaşmalı bir merkezden temin edilmesi gerekir.",
      suggestedFamilies: ["Anlaşmalı Merkez Şartı"],
    },
    {
      icon: RefreshCcw,
      title: "Yenileme Belgeleri İlk Başvuruya Benzer",
      description: "Yenileme başvurusunda da güncel rapor, reçete ve kimlik belgeleri istenir. Rapor resmî sağlık hizmeti sunucusunda düzenlenmelidir; özel hastane raporları SGK tarafından kabul edilmez. Detaylı bilgi için Gerekli Belgeler sayfamızı inceleyebilirsiniz.",
      suggestedFamilies: ["Belge Şartı"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
