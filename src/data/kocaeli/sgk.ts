// Kocaeli landing page — SGK bölümü. Rakam/tablo burada TEKRAR
// EDİLMİYOR — yalnızca 3 kısa süreç kartı + pillar sayfaya link.
import { ClipboardList, Receipt, RefreshCw } from "lucide-astro";
import type { ValueGridContent } from "../../components/shared/ValueGrid/ValueGrid.astro";

export const kocaeliSgk: ValueGridContent = {
  badge: "SGK DESTEĞİ",
  heading: "Kocaeli'de SGK İşitme Cihazı Desteği",
  intro: "SGK anlaşmalı bir merkezden hizmet alarak işitme cihazınız için sağlanan devlet desteğinden yararlanabilirsiniz.",
  items: [
    { icon: ClipboardList, title: "Rapor ve Reçete Süreci", description: "Gerekli belgeleri ve başvuru adımlarını sizinle birlikte takip ediyoruz." },
    { icon: Receipt, title: "Katkı Payı Bilgisi", description: "SGK'nın karşıladığı tutarı ve olası katkı payınızı önceden açıklıyoruz." },
    { icon: RefreshCw, title: "Yenileme Hakkı", description: "Cihaz yenileme koşulları ve zamanlaması hakkında güncel bilgi veriyoruz." },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
};
