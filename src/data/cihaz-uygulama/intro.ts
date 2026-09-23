// "Cihaz Uygulama Nedir ve Neyi Kapsar?" section for the
// /uygulama-ayar/cihaz-uygulama page. Renders through the shared
// BrandPageIntro component. This series describes a service process
// rather than a diagnostic test, so there's no self-diagnosis
// disclaimer here; paragraph 4 instead sets the honest expectation that
// adaptation takes time and follow-up adjustments are a normal part of
// the process, not a sign something went wrong.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const cihazUygulamaIntro: BrandPageIntroContent = {
  badge: "CİHAZ UYGULAMA NEDİR?",
  heading: "Cihaz Uygulama Nedir ve Neyi Kapsar?",
  paragraphs: [
    "Cihaz uygulama, size önerilen işitme cihazının fiziksel olarak yerleştirilmesi, odyogramınıza göre ilk kez programlanması ve ayarların doğrulanmasıyla tamamlanan bir randevudur.",
    "Randevu sırasında cihazın kulağınıza uygun oturup oturmadığı kontrol edilir, ayarlar işitme test sonuçlarınıza göre yapılır ve gerekiyorsa gerçek kulak ölçümüyle doğrulanır.",
    "Uygulama randevusu, cihazı kullanmaya başlamanın ilk adımıdır; kullanım, temizlik ve günlük bakım konusunda da bilgilendirilirsiniz.",
    "Yeni bir cihaza alışma süreci kişiden kişiye değişir; ilk ayarlar bir başlangıç noktasıdır ve geri bildiriminize göre takip randevularında ince ayar yapılması normaldir.",
  ],
  stats: [
    { value: "Fiziksel Kontrol", label: "İlk Adım" },
    { value: "Odyograma Dayalı", label: "İlk Programlama" },
    { value: "Doğrulama Ölçümü", label: "Kalite Kontrolü" },
    { value: "Kullanım Eğitimi", label: "Son Adım" },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
