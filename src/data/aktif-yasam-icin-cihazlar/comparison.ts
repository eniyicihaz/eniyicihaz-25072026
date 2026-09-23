// "Güvenli Oturmalı Sportif Modeller ile Standart RIC Modelleri
// Karşılaştırması" comparison table for the /ihtiyaciniza-gore/
// aktif-yasam-icin-cihazlar page. Renders through the existing,
// already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated. This
// table compares two RIC design approaches most relevant to this page's
// own need group (activity-oriented retention/durability vs a
// general-purpose everyday fit), rather than repeating a severity,
// laterality or family-support comparison used on sibling pages. Framed
// as neutral, general tendencies — never "kesinlikle daha iyi"; the
// closing note reinforces that the real answer needs an audiological
// evaluation.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const aktifYasamIcinCihazlarComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Güvenli Oturmalı Sportif Modeller ile Standart RIC Modelleri Karşılaştırması",
  intro: "İki yaklaşım arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun model, aktivite düzeyinize göre değişir.",
  primaryLabel: "Güvenli Oturmalı Sportif RIC Modeller",
  secondaryLabel: "Standart RIC Modeller",
  rows: [
    {
      feature: "Tasarım Odağı",
      primary: "Hareket sırasında yerinde kalmayı önceliklendiren ek tutucu ve kanca seçenekleri sunar.",
      secondary: "Günlük kullanım için dengeli, genel amaçlı bir tasarım sunar.",
    },
    {
      feature: "Koruma Sınıfı",
      primary: "Genellikle daha yüksek IP koruma sınıfına sahiptir.",
      secondary: "Koruma sınıfı modelden modele değişebilir, genellikle orta seviyededir.",
    },
    {
      feature: "Rüzgar Gürültüsü Yönetimi",
      primary: "Açık hava kullanımına özel gelişmiş rüzgar gürültüsü azaltma algoritmaları içerebilir.",
      secondary: "Standart düzeyde rüzgar gürültüsü yönetimi sunar.",
    },
    {
      feature: "Pil Ömrü ve Şarj",
      primary: "Genellikle hızlı şarj özelliğine ve uzun pil ömrüne öncelik verir.",
      secondary: "Pil ömrü modele göre değişir, hızlı şarj her modelde bulunmayabilir.",
    },
    {
      feature: "Ağırlık ve Boyut",
      primary: "Genellikle hafif ve kompakt bir tasarıma sahiptir.",
      secondary: "Ağırlık ve boyut modelden modele değişebilir.",
    },
    {
      feature: "Fiyat Aralığı",
      primary: "Ek dayanıklılık özellikleri nedeniyle görece daha yüksek bir yatırım gerektirebilir.",
      secondary: "Genellikle daha geniş bir fiyat aralığında sunulur.",
    },
    {
      feature: "Kimler İçin Daha Uygun",
      primary: "Düzenli spor yapan veya açık havada aktif olan kullanıcılar için sıkça tercih edilir.",
      secondary: "Günlük, orta düzeyde aktif kullanıcılar için yeterli olabilir.",
    },
    {
      feature: "Bakım İhtiyacı",
      primary: "Ter ve nem birikimine karşı daha sık temizlik gerektirebilir.",
      secondary: "Standart bakım rutini genellikle yeterlidir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; size en uygun model, aktivite düzeyinize ve önceliklerinize göre bir odyometrist ile birlikte belirlenmelidir.",
  accentColor: "#4b5563",
  accentColorBadgeBg: "rgb(75 85 99 / 0.08)",
  accentColorBadgeBorder: "rgb(75 85 99 / 0.35)",
  accentColorBadgeText: "#374151",
};
