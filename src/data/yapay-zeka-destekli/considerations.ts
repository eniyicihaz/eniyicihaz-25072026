// "Dikkat Edilmesi Gerekenler" section for the /teknolojiler/
// yapay-zeka-destekli page. Reuses the shared BrandPageIdealUser
// component, same technique every /isitme-cihazlari/* feature page uses
// — visually differentiated from the "Kimler İçin Uygun" section above by
// using the design system's own --color-warning token (#d97706) instead
// of the page's indigo accent, so the two sections read as distinct
// despite sharing markup.

import { Battery, Wrench, AlertTriangle, Gauge, Smartphone } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const yapayZekaDestekliConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Yapay Zeka Destekli Cihaz Seçerken Dikkat Edilmesi Gereken Noktalar",
  intro: "Yapay zeka, kullanım kolaylığı açısından güçlü bir seçenektir; yine de göz önünde bulundurulması gereken birkaç pratik nokta vardır.",
  profiles: [
    {
      icon: Battery,
      title: "Pil Tüketimini Artırabilir",
      description: "Sürekli çalışan analiz ve işleme süreçleri, bazı modellerde pil tüketimini artırabilir.",
      suggestedFamilies: ["Verimli İşlemcili Modeller"],
    },
    {
      icon: Wrench,
      title: "Kişiye Özel Ayar Hâlâ Önemlidir",
      description: "Yapay zeka otomatik optimizasyon yapsa da, ilk programlamanın işitme profilinize göre bir odyometrist tarafından yapılması gerekir.",
      suggestedFamilies: ["Profesyonel İlk Ayar"],
    },
    {
      icon: AlertTriangle,
      title: "Her Ortamda Mükemmel Sonuç Garanti Edilmez",
      description: "Yapay zeka optimizasyonu genel eğilimleri hedefler; alışılmadık veya karmaşık ses ortamlarında sonuç değişebilir.",
      suggestedFamilies: ["Manuel Program Seçeneği"],
    },
    {
      icon: Gauge,
      title: "Özellik Kapsamı Modelden Modele Değişir",
      description: "Sahne sınıflandırma ve öğrenme özellikleri gibi yapay zeka bileşenleri üreticiye ve segment düzeyine göre değişir.",
      suggestedFamilies: ["Üst Segment Modeller"],
    },
    {
      icon: Smartphone,
      title: "Bazı Özellikler Uygulama Bağlantısı Gerektirir",
      description: "Öğrenme ve kişiselleştirme özelliklerinin bazıları, akıllı telefon uygulamasıyla senkronizasyon gerektirebilir.",
      suggestedFamilies: ["Uygulama Destekli Modeller"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
