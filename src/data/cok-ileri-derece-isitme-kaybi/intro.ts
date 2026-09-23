// "Çok İleri Derece İşitme Kaybı Nedir?" + "Nasıl Anlaşılır?" section for
// the /ihtiyaciniza-gore/cok-ileri-derece-isitme-kaybi page. Renders
// through the shared BrandPageIntro component. Paragraph 3 is the
// load-bearing disclaimer: this page is general information, not a
// self-diagnosis tool. Paragraph 4 sets up the page's one real departure
// from its sibling degree pages — at this degree, evaluation is framed
// as a joint process with an ENT specialist rather than audiology alone.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const cokIleriDereceIsitmeKaybiIntro: BrandPageIntroContent = {
  badge: "ÇOK İLERİ DERECE İŞİTME KAYBI NEDİR?",
  heading: "Çok İleri Derece İşitme Kaybı Nedir ve Nasıl Anlaşılır?",
  paragraphs: [
    "Çok ileri derece işitme kaybı, uluslararası sınıflandırmaya göre 71 desibel (dB) ve üzeri işitme eşiğini ifade eden, işitme kaybı sınıflandırmasının en yüksek derecesidir.",
    "Bu derecedeki kayıp genellikle konuşmaların büyük bölümünün, hatta bazı yüksek seslerin bile güçlü amplifikasyon olmadan duyulamaması olarak kendini gösterir.",
    "Kesin derece ve tip, yalnızca bir odyometrist tarafından yapılan işitme testi (odyometri) ile belirlenebilir; bu sayfa genel bir bilgilendirme amacı taşır, kendi kendine tanı koymak için kullanılmamalıdır.",
    "Çok ileri derece kayıplarda, işitme cihazı seçimi genellikle bir kulak burun boğaz uzmanıyla birlikte, kapsamlı bir değerlendirme sürecinin parçası olarak ele alınır.",
  ],
  stats: [
    { value: "71 dB ve Üzeri", label: "İşitme Eşiği Aralığı" },
    { value: "Konuşmanın Büyük Bölümü", label: "Sıkça Etkilenen Alan" },
    { value: "Odyometri ile Belirlenir", label: "Kesin Tanı Yöntemi" },
    { value: "Power BTE", label: "Sıkça Tercih Edilen Modeller" },
  ],
  accentColor: "#92400e",
  accentColorBadgeBg: "rgb(146 64 14 / 0.08)",
  accentColorBadgeBorder: "rgb(146 64 14 / 0.35)",
  accentColorBadgeText: "#78350f",
};
