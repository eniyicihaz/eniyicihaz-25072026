// "Dikkat Edilmesi Gerekenler" section for the /isitme-cihazlari/
// gorunmez-cic page. Reuses the shared BrandPageIdealUser component, same
// technique the BTE/ITE/Şarj Edilebilir/Bluetooth/Çocuklara Özel master
// pages use — visually differentiated from the "Kimler İçin Uygun"
// section above by using the design system's own --color-warning token
// (#d97706) instead of the page's slate accent, so the two sections read
// as distinct despite sharing markup.

import { Battery, Hand, VolumeX, Wrench, Droplet } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const gorunmezCicConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Görünmez (CIC) Cihaz Seçerken Dikkat Edilmesi Gereken Noktalar",
  intro: "CIC, görünürlük açısından güçlü bir seçenektir; yine de ihtiyaçlarınıza göre değerlendirmeniz gereken birkaç pratik nokta vardır.",
  profiles: [
    {
      icon: Battery,
      title: "Küçük Pil Boyutu ve Sık Değişim İhtiyacı",
      description: "Küçük gövde genellikle daha küçük pil boyutu kullanır; bu da daha sık pil değişimi gerektirebilir.",
      suggestedFamilies: ["Yedek Pil Bulundurma"],
    },
    {
      icon: Hand,
      title: "El Becerisi Gerektirmesi",
      description: "Küçük boyutu nedeniyle takıp çıkarma ve pil değişimi belirli bir el becerisi gerektirir.",
      suggestedFamilies: ["Çıkarma İpi Destekli Modeller"],
    },
    {
      icon: VolumeX,
      title: "Sınırlı Ses Gücü Kapasitesi",
      description: "Küçük gövdesi nedeniyle ileri derece işitme kayıplarında yeterli amplifikasyonu sağlayamayabilir.",
      suggestedFamilies: ["Hafif-Orta Derece Uyumlu Modeller"],
    },
    {
      icon: Wrench,
      title: "Sınırlı Ek Özellik ve Kumanda",
      description: "Küçük boyutu nedeniyle yönlü mikrofon ve fiziksel kumanda gibi bazı özellikler sınırlı olabilir.",
      suggestedFamilies: ["Genişletilmiş Özellikli ITE Modelleri"],
    },
    {
      icon: Droplet,
      title: "Nem ve Kulak Yağına Daha Fazla Maruz Kalma",
      description: "Kulak kanalı içinde yer aldığından nem ve kulak yağından diğer tiplere göre daha fazla etkilenebilir.",
      suggestedFamilies: ["Düzenli Temizlik ve Bakım"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
