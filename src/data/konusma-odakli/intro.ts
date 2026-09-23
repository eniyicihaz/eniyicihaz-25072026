// "Konuşma Odaklı Teknolojiler Nedir?" + "Nasıl Çalışır?" section for the
// /teknolojiler/konusma-odakli page. Renders through the shared
// BrandPageIntro component. The "nasıl çalışır" explanation is folded
// into this same section's paragraphs, same technique every
// /isitme-cihazlari/* and /teknolojiler/* feature page uses.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const konusmaOdakliIntro: BrandPageIntroContent = {
  badge: "KONUŞMA ODAKLI TEKNOLOJİLER NEDİR?",
  heading: "Konuşma Odaklı Teknolojiler Nedir ve Nasıl Çalışır?",
  paragraphs: [
    "Konuşma odaklı teknolojiler, işitme cihazının birden fazla mikrofonunu kullanarak belirli bir yönden gelen sesi (genellikle önden gelen konuşmayı) diğer yönlerden gelen seslere kıyasla öne çıkaran bir sinyal işleme yaklaşımıdır.",
    "Bu teknoloji belirli bir fiziksel cihaz tipi değildir; hem kulak arkası (BTE/RIC) hem de kulak içi (ITE/ITC) ailelerinde sunulabilen bir mikrofon ve işlemci özelliğidir.",
    "Çalışma prensibi şöyledir: cihazdaki iki veya daha fazla mikrofon arasındaki zamanlama ve seviye farkları analiz edilerek sesin geldiği yön belirlenir; ardından hedef yöndeki ses (genellikle konuşmacı) görece güçlendirilir, diğer yönler geri plana alınır.",
    "Yönlü odaklanmanın kapsamı ve hassasiyeti (sabit yönlü, otomatik adaptif, binaural senkronize) üreticiye ve seçilen modele göre değişebilir.",
  ],
  stats: [
    { value: "Çok Mikrofonlu Sistem", label: "Kullanılan Donanım" },
    { value: "Ön Yön Öncelikli", label: "Tipik Odaklanma Yönü" },
    { value: "Otomatik veya Manuel", label: "Devreye Girme Şekli" },
    { value: "Modelden Modele Değişir", label: "Binaural Senkronizasyon Desteği" },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
