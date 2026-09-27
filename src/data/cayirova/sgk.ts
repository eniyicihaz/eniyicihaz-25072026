// Çayırova landing page — SGK bölümü. Rakam/tablo burada TEKRAR
// EDİLMİYOR — yalnızca 3 kısa süreç kartı + pillar sayfaya link. Başlık
// "Çayırova SGK işitme cihazı" ikincil aramasını doğal biçimde karşılıyor.
import { ClipboardList, Receipt, RefreshCw } from "lucide-astro";
import type { ValueGridContent } from "../../components/shared/ValueGrid/ValueGrid.astro";

export const cayirovaSgk: ValueGridContent = {
  badge: "SGK DESTEĞİ",
  heading: "Çayırova İşitme Cihazı ve SGK Süreci",
  intro: "SGK anlaşmalı bir merkezden hizmet alarak işitme cihazınız için sağlanan devlet desteğinden yararlanabilirsiniz.",
  items: [
    { icon: ClipboardList, title: "Reçete ve Rapor Takibi", description: "Gerekli belgeleri ve başvuru adımlarını sizin yerinize takip ediyoruz." },
    { icon: Receipt, title: "Katkı Payı Bilgisi", description: "SGK'nın karşıladığı tutarı ve olası katkı payınızı net biçimde açıklıyoruz." },
    { icon: RefreshCw, title: "Yenileme Süreci", description: "Cihaz yenileme hakkınız ve zamanlaması hakkında güncel bilgi veriyoruz." },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
};
