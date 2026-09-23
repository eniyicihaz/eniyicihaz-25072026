// "Standart Seri ile Ekonomik Seri Karşılaştırması" comparison table for
// the /segmentler/standart-seri page. Renders through the existing,
// already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated. Premium
// Seri's own comparison already covers Premium vs Standart; this page
// completes the ladder by covering the other adjacent pair (Standart vs
// Ekonomik), the same technique the dB-degree ladder pages used earlier
// this session for adjacent severity levels.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const standartSeriComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Standart Seri ile Ekonomik Seri Karşılaştırması",
  intro: "İki seri arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seri, ihtiyaç değerlendirmesiyle birlikte belirlenmelidir.",
  primaryLabel: "Standart Seri",
  secondaryLabel: "Ekonomik Seri",
  rows: [
    {
      feature: "Ses İşleme Teknolojisi",
      primary: "Otomatik ortam ayarı yapabilen dengeli bir ses işleme sistemi sunar.",
      secondary: "Daha temel, sınırlı sayıda otomatik ayar seçeneği sunar.",
    },
    {
      feature: "Yönlü Mikrofon",
      primary: "Temel düzeyde yönlü mikrofon desteği sunar.",
      secondary: "Yönlü mikrofon desteği genellikle bulunmaz veya çok sınırlıdır.",
    },
    {
      feature: "Bağlantı Özellikleri",
      primary: "Çoğu modelde temel kablosuz bağlantı bulunur.",
      secondary: "Kablosuz bağlantı özellikleri sınırlı olabilir veya bulunmayabilir.",
    },
    {
      feature: "Pil Seçenekleri",
      primary: "Şarjlı veya pilli seçeneklerle sunulabilir.",
      secondary: "Genellikle yalnızca pilli seçenekler sunulur.",
    },
    {
      feature: "Fiyat Aralığı",
      primary: "Ekonomik seriye göre daha yüksek, premium seriye göre daha uygun bir fiyat sunar.",
      secondary: "En uygun fiyat aralığında yer alır.",
    },
    {
      feature: "Kimler İçin Daha Uygun",
      primary: "Günlük, dengeli ihtiyaçları olan kullanıcılar için tercih edilir.",
      secondary: "Temel işitme ihtiyaçları olan ve sınırlı bütçesi olan kullanıcılar için tercih edilir.",
    },
    {
      feature: "Garanti Kapsamı",
      primary: "Standart garanti kapsamı sunar.",
      secondary: "Garanti kapsamı modele göre daha sınırlı olabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; size uygun seri, işitme testi ve ihtiyaç analiziyle birlikte bir odyometrist tarafından belirlenmelidir.",
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
