// "Aile Destekli Uzaktan Ayar ile Geleneksel Klinik Ayarı Karşılaştırması"
// comparison table for the /ihtiyaciniza-gore/yaslilar-icin-cihazlar
// page. Renders through the existing, already-generic
// KulakArkasiComparison component (see src/components/kulak-arkasi/) —
// reused as-is, not duplicated. This table compares the two support
// models most relevant to this page's own need group (family/caregiver
// involvement and clinic-visit friction), rather than repeating a
// severity or device-family comparison used on sibling pages. Framed as
// neutral, general tendencies — never "kesinlikle daha iyi"; the closing
// note reinforces that the real answer needs an audiological evaluation.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const yaslilarIcinCihazlarComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Aile Destekli Uzaktan Ayar ile Merkezde Yapılan Ayar Karşılaştırması",
  intro: "İki yaklaşım arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun yaklaşım, teknolojiye aşinalığınıza ve aile desteğinize göre değişir.",
  primaryLabel: "Aile Destekli Uzaktan Ayar (RemoteCare)",
  secondaryLabel: "Merkezde Yapılan Ayar",
  rows: [
    {
      feature: "Çalışma Prensibi",
      primary: "Cihaz ayarları, uyumlu bir uygulama üzerinden internet aracılığıyla uzaktan güncellenir.",
      secondary: "Cihaz ayarları, merkezde yüz yüze bir görüşmede güncellenir.",
    },
    {
      feature: "Merkez Ziyareti İhtiyacı",
      primary: "Küçük ayar değişiklikleri için merkeze gitme ihtiyacını azaltabilir.",
      secondary: "Her ayar değişikliği için merkeze gidilmesi gerekir.",
    },
    {
      feature: "Aile Katılımı",
      primary: "Aile bireyleri, yetkilendirilmeleri durumunda sürece dahil olabilir.",
      secondary: "Süreç genellikle yalnızca kullanıcı ve odyometrist arasında yürür.",
    },
    {
      feature: "Ulaşım İhtiyacı",
      primary: "Hareket kısıtlılığı olan kullanıcılar için ulaşım zorluğunu azaltmaya yardımcı olabilir.",
      secondary: "Her ziyaret için merkeze ulaşım gerekir.",
    },
    {
      feature: "Kapsamlı Değerlendirmeler",
      primary: "İlk uyum ve kapsamlı testler için yine bir merkez ziyareti gerekebilir.",
      secondary: "Her türlü değerlendirme ve ayar yüz yüze yapılır.",
    },
    {
      feature: "İnternet Bağlantısı",
      primary: "Kararlı bir internet bağlantısı ve uyumlu bir akıllı telefon gerektirir.",
      secondary: "İnternet bağlantısına ihtiyaç duymaz.",
    },
    {
      feature: "Hız",
      primary: "Küçük ayar değişiklikleri genellikle daha hızlı yapılabilir.",
      secondary: "Randevu almak ve merkeze gitmek zaman alabilir.",
    },
    {
      feature: "Uygunluk",
      primary: "Teknolojiye nispeten aşina veya aile destekli kullanıcılar için sıkça tercih edilir.",
      secondary: "Teknoloji kullanımında zorlanan kullanıcılar için daha tanıdık bir deneyim sunar.",
    },
    {
      feature: "Kapsamı",
      primary: "Üreticiye ve modele göre kapsam değişebilir; tüm ayarlar uzaktan yapılamayabilir.",
      secondary: "Odyometristin kliniğindeki tüm ekipman ve yöntemler kullanılabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; size en uygun yaklaşım, teknolojiye aşinalığınıza, aile desteğinize ve tercihlerinize göre bir odyometrist ile birlikte belirlenmelidir.",
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
};
