// "Premium Seri ile Standart Seri Karşılaştırması" comparison table for
// the /segmentler/premium-seri page. Renders through the existing,
// already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated. Unlike
// every "Neden Orijinal" page's comparison (authenticity/service/
// maintenance axes), this table compares two adjacent product tiers —
// the same technique the dB-degree ladder pages used earlier this
// session for adjacent severity levels.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const premiumSeriComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Premium Seri ile Standart Seri Karşılaştırması",
  intro: "İki seri arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seri, ihtiyaç değerlendirmesiyle birlikte belirlenmelidir.",
  primaryLabel: "Premium Seri",
  secondaryLabel: "Standart Seri",
  rows: [
    {
      feature: "Ses İşleme Teknolojisi",
      primary: "Markanın en gelişmiş yapay zeka destekli ses işleme algoritmalarını taşır.",
      secondary: "Temel düzeyde otomatik ses işleme sunar.",
    },
    {
      feature: "Yönlü Mikrofon",
      primary: "Gelişmiş, çok yönlü mikrofon sistemleri içerir.",
      secondary: "Standart düzeyde yönlü mikrofon desteği sunar.",
    },
    {
      feature: "Bağlantı Özellikleri",
      primary: "Telefon, TV ve diğer cihazlarla tam kablosuz bağlantı sağlar.",
      secondary: "Temel bağlantı özellikleri sunar, kapsam modele göre değişebilir.",
    },
    {
      feature: "Kişiselleştirme",
      primary: "Uygulama üzerinden detaylı kişiselleştirme imkânı sunar.",
      secondary: "Sınırlı sayıda kişiselleştirme seçeneği sunar.",
    },
    {
      feature: "Pil Ömrü",
      primary: "Genellikle daha uzun pil ömrü ve hızlı şarj seçenekleri sunar.",
      secondary: "Standart pil ömrü sunar.",
    },
    {
      feature: "Fiyat Aralığı",
      primary: "Genellikle daha yüksek bir yatırım gerektirir.",
      secondary: "Fiyat/performans dengesini önceliklendiren kullanıcılar için uygundur.",
    },
    {
      feature: "Kimler İçin Daha Uygun",
      primary: "Karmaşık dinleme ortamlarında sıkça bulunan veya en güncel teknolojiyi önceliklendiren kullanıcılar için tercih edilir.",
      secondary: "Günlük, standart ihtiyaçları olan kullanıcılar için genellikle yeterlidir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; size uygun seri, işitme testi ve ihtiyaç analiziyle birlikte bir odyometrist tarafından belirlenmelidir.",
  accentColor: "#eab308",
  accentColorBadgeBg: "rgb(234 179 8 / 0.08)",
  accentColorBadgeBorder: "rgb(234 179 8 / 0.35)",
  accentColorBadgeText: "#a16207",
};
