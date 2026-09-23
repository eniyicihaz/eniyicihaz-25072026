// "Yeni Teknolojiler Neler Sunuyor?" section for the
// /blog/yeni-teknolojiler page. Renders through the shared
// BrandPageIntro component. Paragraph 4 explicitly defers to the real
// /teknolojiler/* pages for depth on each technology, avoiding
// duplication — this page is a general overview/showcase, not a
// replacement for those pages.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const yeniTeknolojilerIntro: BrandPageIntroContent = {
  badge: "YENİ TEKNOLOJİLER NELER SUNUYOR?",
  heading: "İşitme Cihazı Teknolojisi Nasıl Gelişiyor?",
  paragraphs: [
    "İşitme cihazları artık yalnızca sesi yükseltmiyor; ortamı analiz eden, gürültüyü ayıklayan ve kullanıcının tercihlerine göre kendini ayarlayan akıllı cihazlar haline geliyor.",
    "Yapay zeka destekli ses işleme, kablosuz bağlantı ve şarj edilebilir pil teknolojileri, son yılların en belirgin gelişmeleri arasında yer alıyor.",
    "Bu gelişmelerin bir kısmı günlük kullanımı kolaylaştırırken, bir kısmı da sağlık takibi gibi ek işlevler sunuyor.",
    "Bu sayfa, öne çıkan teknoloji kategorilerini genel hatlarıyla tanıtır; her birinin ayrıntılarını ilgili teknoloji sayfalarımızda inceleyebilirsiniz.",
  ],
  stats: [
    { value: "Yapay Zeka Destekli", label: "Ses İşleme" },
    { value: "Akıllı Telefon Uyumlu", label: "Bağlantı" },
    { value: "Şarj Edilebilir", label: "Pil Teknolojisi" },
    { value: "İhtiyaca Göre Seçim", label: "Doğru Teknoloji" },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
