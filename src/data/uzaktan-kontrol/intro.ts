// "Uzaktan Kontrol Özellikleri Nedir?" + "Nasıl Çalışır?" section for the
// /teknolojiler/uzaktan-kontrol page. Renders through the shared
// BrandPageIntro component. The "nasıl çalışır" explanation is folded
// into this same section's paragraphs, same technique every
// /isitme-cihazlari/* and /teknolojiler/* feature page uses.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const uzaktanKontrolIntro: BrandPageIntroContent = {
  badge: "UZAKTAN KONTROL ÖZELLİKLERİ NEDİR?",
  heading: "Uzaktan Kontrol Özellikleri Nedir ve Nasıl Çalışır?",
  paragraphs: [
    "Uzaktan kontrol özellikleri, işitme cihazınızın ayarlarını hem sizin hem de odyometristinizin uzaktan değiştirebilmesini sağlayan bir dizi teknolojiyi kapsar.",
    "Bu teknoloji belirli bir fiziksel cihaz tipi değildir; hem kulak arkası (BTE/RIC) hem de kulak içi (ITE/ITC) ailelerinde sunulabilen bir uygulama ve yazılım özelliğidir.",
    "İki ana kategoriye ayrılır: kullanıcının kendi ayarlarını (ses seviyesi, program) değiştirdiği doğrudan kontrol ve odyometristin video görüşme sırasında cihazın temel programlamasını uzaktan güncellediği uzaktan destek (teleaudiology).",
    "Kapsam ve özellikler (fiziksel kumanda, uygulama, uzaktan destek oturumu) üreticiye ve seçilen modele göre değişebilir.",
  ],
  stats: [
    { value: "Uygulama, Fiziksel Kumanda", label: "Doğrudan Kontrol Yöntemleri" },
    { value: "Video Görüşme Üzerinden", label: "Uzaktan Destek Şekli" },
    { value: "Ses Seviyesi, Program, İnce Ayar", label: "Değiştirilebilen Ayarlar" },
    { value: "Modelden Modele Değişir", label: "Uzaktan Destek Kapsamı" },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
