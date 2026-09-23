// "Dikkat Edilmesi Gerekenler" section for the /blog/yeni-teknolojiler
// page. Reuses the shared BrandPageIdealUser component, visually
// differentiated by the design system's own --color-warning token
// (#d97706). The first item is this page's key accuracy flag —
// explicitly directs readers to the dedicated /teknolojiler/* pages for
// depth, since this page is deliberately a general overview and does
// not duplicate their content.

import { AlertTriangle, ShieldQuestion, HandCoins, TestTube2, Users } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const yeniTeknolojilerConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Yeni Teknolojileri Değerlendirirken Dikkat Edilmesi Gerekenler",
  intro: "Yeni teknolojiler cazip görünse de, doğru seçim için göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Her Teknoloji Herkes İçin Öncelikli Olmayabilir",
      description: "Bir özelliğin size ne kadar fayda sağlayacağı, yaşam tarzınıza ve işitme ihtiyacınıza göre değişir; ilgili teknoloji sayfalarımızdan detaylı bilgi alabilirsiniz.",
      suggestedFamilies: ["Kişiye Özel Değerlendirme"],
    },
    {
      icon: ShieldQuestion,
      title: "Doğrulanmış Kaynaklardan Bilgi Alın",
      description: "Yeni teknolojiler hakkında karar verirken, üretici ve uzman kaynaklarından doğrulanmış bilgiye güvenmenizi öneririz.",
      suggestedFamilies: ["Güvenilir Kaynak"],
    },
    {
      icon: HandCoins,
      title: "SGK Kapsamı Teknolojiye Göre Değişebilir",
      description: "Bazı ileri teknoloji özellikleri SGK destek kapsamının dışında kalabilir; detaylı bilgi için SGK Katkı Payı sayfamızı inceleyebilirsiniz.",
      suggestedFamilies: ["SGK Kapsamı"],
    },
    {
      icon: TestTube2,
      title: "Deneyerek Karar Vermek En Sağlıklısıdır",
      description: "Bir teknolojinin size uygun olup olmadığını en iyi şekilde, cihazı deneyerek anlayabilirsiniz.",
      suggestedFamilies: ["Cihaz Deneme"],
    },
    {
      icon: Users,
      title: "Uzman Değerlendirmesi Olmadan Karar Vermeyin",
      description: "Teknolojik özellikler etkileyici olsa da, doğru cihaz seçimi uzman bir değerlendirmeyle birlikte yapılmalıdır.",
      suggestedFamilies: ["Uzman Desteği"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
