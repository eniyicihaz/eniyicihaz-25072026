// FAQ hub for the /neden-orijinal/uzun-omurlu-cihazlar page. Renders
// through the shared BrandPageFaq component. FAQPage schema is generated
// inside the component itself from these items. Same honest,
// mechanism-focused answer style as Güvenilir Teknoloji's faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const uzunOmurluCihazlarFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Uzun Ömürlü Cihazlar Hakkında Merak Edilenler",
  intro: "Kullanım ömrü, bakım ve yedek parça hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Cihazınızın Ömrünü Uzatmak İster misiniz?",
    points: ["Ücretsiz cihaz kontrolü", "Periyodik bakım planı", "Orijinal yedek parça desteği", "Uzman danışmanlığı"],
    ctaLabel: "Hemen İletişime Geç",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Bir işitme cihazı ortalama ne kadar süre kullanılabilir?",
          answer:
            "Doğru bakımla birlikte genellikle 4-6 yıl arasında kullanılabilir; ancak bu süre kullanım yoğunluğuna ve bakım düzenine göre değişebilir.",
        },
        {
          question: "Cihazımın ömrünü nasıl uzatabilirim?",
          answer:
            "Günlük temizlik, periyodik profesyonel kontrol, orijinal yedek parça kullanımı ve doğru saklama alışkanlıkları cihazınızın ömrünü uzatmaya yardımcı olabilir.",
        },
      ],
    },
    {
      label: "Bakım",
      items: [
        {
          question: "Cihazımı ne sıklıkla bakıma götürmeliyim?",
          answer:
            "Önerilen bakım sıklığı marka ve modele göre değişir; genellikle 3-6 ayda bir periyodik kontrol önerilir.",
        },
        {
          question: "Cihazımı kendim temizleyebilir miyim?",
          answer:
            "Günlük yüzey temizliği kullanıcı tarafından yapılabilir; teknik bakım ve derinlemesine temizlik ise yetkili serviste yapılmalıdır.",
        },
      ],
    },
    {
      label: "Yedek Parça",
      items: [
        {
          question: "Yedek parça ihtiyacında ne kadar sürede temin edebiliyorsunuz?",
          answer:
            "Temin süresi marka ve parçaya göre değişir; yetkili distribütörlük sayesinde çoğu parçayı makul sürede temin edebiliyoruz.",
        },
        {
          question: "Orijinal olmayan yedek parça kullanmanın sakıncası var mı?",
          answer:
            "Evet; uyumsuz veya taklit parçalar cihazın performansını düşürebilir, ömrünü kısaltabilir ve garantinizi geçersiz kılabilir.",
        },
      ],
    },
    {
      label: "Garanti ve Servis",
      items: [
        {
          question: "Bakım garantiyi etkiler mi?",
          answer:
            "Yetkili serviste yapılan düzenli bakım garantinizi etkilemez; aksine garanti kapsamının korunmasına yardımcı olur.",
        },
        {
          question: "Cihazım garanti süresi dışına çıkarsa ne olur?",
          answer:
            "Garanti süresi sona erse dahi, orijinal yedek parça ve yetkili teknik servis desteği almaya devam edebilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
