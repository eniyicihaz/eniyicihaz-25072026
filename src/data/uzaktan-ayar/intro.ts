// "Uzaktan Ayar Nedir ve Neyi Kapsar?" section for the /uygulama-ayar/
// uzaktan-ayar page. Renders through the shared BrandPageIntro
// component. Service-process genre, same as the four prior siblings —
// no self-diagnosis disclaimer; paragraph 4 sets the honest boundary
// that this is a video-call session with the same audiologist, not an
// automated remote system, and not every issue can be resolved this
// way.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const uzaktanAyarIntro: BrandPageIntroContent = {
  badge: "UZAKTAN AYAR NEDİR?",
  heading: "Uzaktan Ayar Nedir ve Neyi Kapsar?",
  paragraphs: [
    "Uzaktan ayar, uygun bir cihaza ve akıllı telefon uygulamasına sahip kullanıcıların, kliniğe gelmeden video görüşme üzerinden küçük ayar güncellemeleri alabildiği bir hizmettir.",
    "Bu hizmetin dayandığı teknolojik altyapı hakkında (uygulama kontrolü, video görüşmeli teknoloji, yapay zeka destekli öneriler) detaylı bilgiyi Uzaktan Kontrol Özellikleri sayfamızda bulabilirsiniz; bu sayfa ise randevu almadan oturumun tamamlanmasına kadar hizmetin kendisini anlatır.",
    "Oturum sırasında, cihazınız uygulama üzerinden odyometristinizin ekranına bağlanır; sizin geri bildiriminize göre programlamada küçük güncellemeler uzaktan yapılır.",
    "Uzaktan ayar, her ayar ihtiyacını karşılamaz; fiziksel uyum sorunları veya kapsamlı yeniden programlama gibi durumlarda yüz yüze bir randevu önerilir.",
  ],
  stats: [
    { value: "Uygunluk Kontrolü", label: "İlk Adım" },
    { value: "Video Görüşme", label: "Oturum Şekli" },
    { value: "Küçük Ayar Güncellemeleri", label: "Kapsam" },
    { value: "Gerekirse Yüz Yüze Randevu", label: "Sınır" },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
