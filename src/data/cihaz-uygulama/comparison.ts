// "Standart Fabrika Ayarı ile Odyograma Dayalı Profesyonel Uygulama
// Karşılaştırması" comparison table for the /uygulama-ayar/
// cihaz-uygulama page. Renders through the existing, already-generic
// KulakArkasiComparison component (see src/components/kulak-arkasi/) —
// reused as-is, not duplicated. This page's own comparison pivots to
// the generic-vs-personalized-fitting axis, deliberately distinct from
// the deeper programming-methodology territory reserved for the next
// sibling page, "Kişiye Özel Programlama."

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const cihazUygulamaComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Standart Fabrika Ayarı ile Profesyonel Uygulama Karşılaştırması",
  intro: "İki yaklaşım arasındaki temel farkları aşağıdaki tabloda özetledik. Cihazınızdan en iyi verimi almak için profesyonel bir uygulama randevusu önerilir.",
  primaryLabel: "Profesyonel Uygulama",
  secondaryLabel: "Standart Fabrika Ayarı",
  rows: [
    {
      feature: "Programlama Temeli",
      primary: "İşitme test sonuçlarınıza (odyogramınıza) göre programlanır.",
      secondary: "Ortalama bir kullanıcı profiline göre önceden ayarlanmıştır.",
    },
    {
      feature: "Fiziksel Uygunluk Kontrolü",
      primary: "Cihazın kulağınıza uygun oturup oturmadığı kontrol edilir.",
      secondary: "Fiziksel uygunluk kontrolü yapılmaz.",
    },
    {
      feature: "Doğrulama Ölçümü",
      primary: "Gerekli görüldüğünde ayarlar bir ölçümle doğrulanabilir.",
      secondary: "Herhangi bir doğrulama ölçümü uygulanmaz.",
    },
    {
      feature: "Kullanım Eğitimi",
      primary: "Takma, çıkarma, temizlik ve bakım konusunda bilgilendirme yapılır.",
      secondary: "Kullanım eğitimi verilmez.",
    },
    {
      feature: "Takip Desteği",
      primary: "Alışma sürecinize göre takip randevusu planlanabilir.",
      secondary: "Takip desteği bulunmaz.",
    },
    {
      feature: "İlk Konfor Deneyimi",
      primary: "Kişiye özel ayar sayesinde genellikle daha konforlu bir başlangıç sunar.",
      secondary: "Kişiye özel olmadığından ilk deneyim beklentiyi karşılamayabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; cihazınızdan en iyi verimi almak için profesyonel bir uygulama randevusu her zaman önerilir.",
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
