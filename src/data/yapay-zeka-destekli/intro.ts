// "Yapay Zeka Destekli Nedir?" + "Nasıl Çalışır?" section for the
// /teknolojiler/yapay-zeka-destekli page. Renders through the shared
// BrandPageIntro component. The "nasıl çalışır" explanation is folded
// into this same section's paragraphs, same technique every
// /isitme-cihazlari/* feature page uses.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const yapayZekaDestekliIntro: BrandPageIntroContent = {
  badge: "YAPAY ZEKA DESTEKLİ NEDİR?",
  heading: "Yapay Zeka Destekli İşitme Cihazı Nedir ve Nasıl Çalışır?",
  paragraphs: [
    "Yapay zeka destekli işitme cihazı, çevresel ses ortamını gerçek zamanlı olarak analiz eden ve buna göre otomatik ayar yapan derin öğrenme (deep learning) tabanlı bir ses işleme teknolojisidir.",
    "Bu teknoloji belirli bir fiziksel cihaz tipi değildir; hem kulak arkası (BTE/RIC) hem de kulak içi (ITE/ITC) ailelerinde sunulabilen bir işlemci teknolojisidir.",
    "Çalışma prensibi şöyledir: cihazın işlemcisi, milyonlarca gerçek dünya ses sahnesiyle eğitilmiş bir sinir ağı modelini kullanarak konuşma, gürültü ve ortam sesini saniyeler içinde sınıflandırır; ardından dinleme ayarlarını buna göre otomatik olarak optimize eder.",
    "Yapay zeka kapsamı ve özellikleri (sahne sınıflandırma, otomatik program geçişi, öğrenme özellikleri) üreticiye ve seçilen modele göre değişebilir.",
  ],
  stats: [
    { value: "Saniyeler İçinde", label: "Ortam Analizi Hızı" },
    { value: "Derin Sinir Ağı (DNN)", label: "Kullanılan İşleme Teknolojisi" },
    { value: "Otomatik", label: "Program Geçiş Şekli" },
    { value: "Modelden Modele Değişir", label: "Öğrenme Özelliği Kapsamı" },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
