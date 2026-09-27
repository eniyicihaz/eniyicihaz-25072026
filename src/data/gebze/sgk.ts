// Gebze landing page — SGK bölümü. Rakam/tablo burada TEKRAR EDİLMİYOR —
// yalnızca 3 kısa süreç kartı + altında pillar sayfaya link (Darıca
// sayfasının kendi disipliniyle aynı, ama metinler özgün biçimde yeniden
// yazıldı). Başlık, ana SEO odağı "Gebze'de işitme cihazı" ifadesini doğal
// biçimde taşıyor (plan onayı §3/§4).
import { ClipboardList, Receipt, RefreshCw } from "lucide-astro";
import type { ValueGridContent } from "../../components/shared/ValueGrid/ValueGrid.astro";

export const gebzeSgk: ValueGridContent = {
  badge: "SGK DESTEĞİ",
  heading: "Gebze'de İşitme Cihazı ve SGK Süreci",
  intro: "SGK anlaşmalı bir merkezden hizmet alarak, işitme cihazınız için sunulan devlet desteğinden yararlanabilirsiniz.",
  items: [
    { icon: ClipboardList, title: "Rapor ve Reçete Süreci", description: "Hangi belgelerin gerekli olduğunu ve başvuru adımlarını birlikte takip ediyoruz." },
    { icon: Receipt, title: "Katkı Payı Bilgilendirmesi", description: "SGK desteğinin kapsamını ve olası katkı payınızı önceden açıklıyoruz." },
    { icon: RefreshCw, title: "Yenileme Hakkınız", description: "Cihaz yenileme koşulları hakkında güncel ve doğru bilgi veriyoruz." },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
};
