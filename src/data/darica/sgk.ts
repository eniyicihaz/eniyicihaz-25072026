// Darıca landing page — SGK bölümü. Homepage/pillar SGK sayfasının rakam/
// tablo içeriği buraya TAŞINMADI (bilinçli tercih) — yalnızca 3 kısa
// süreç kartı + altında pillar sayfaya link. Aynı badge/heading, eskiden
// tek paragraf olan içerik yerine kart olarak.
import { ClipboardList, Receipt, RefreshCw } from "lucide-astro";
import type { ValueGridContent } from "../../components/shared/ValueGrid/ValueGrid.astro";

export const daricaSgk: ValueGridContent = {
  badge: "SGK DESTEĞİ",
  heading: "Darıca'da SGK Anlaşmalı İşitme Merkezi",
  items: [
    { icon: ClipboardList, title: "SGK Sürecinde Rehberlik", description: "Rapor, reçete ve başvuru sürecinde gerekli adımları birlikte değerlendiriyoruz." },
    { icon: Receipt, title: "Katkı Payı Hakkında Bilgi", description: "SGK desteğinin nasıl uygulandığını ve sizin için oluşabilecek katkı payını açıklıyoruz." },
    { icon: RefreshCw, title: "Yenileme Sürecinde Destek", description: "Cihaz yenileme koşulları ve süreç hakkında güncel bilgi veriyoruz." },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
};
