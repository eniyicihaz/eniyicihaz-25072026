// "Destek Öncesi ile Destek Sonrası Genel Deneyim Karşılaştırması"
// comparison table for the /blog/basari-hikayeleri page. Renders
// through the existing, already-generic KulakArkasiComparison component
// (see src/components/kulak-arkasi/) — reused as-is, not duplicated.
// Deliberately generic and hedged ("genellikle", "olabilir") — reflects
// commonly reported general trends, not a guaranteed or specific
// outcome. No named/dated testimonials.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const basariHikayeleriComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Destek Öncesi ile Destek Sonrası Genel Deneyim Karşılaştırması",
  intro: "Kullanıcılarımızın genel olarak paylaştığı gözlemlere dayanan bir karşılaştırmayı aşağıda özetledik.",
  primaryLabel: "Destek Öncesi",
  secondaryLabel: "Destek Sonrası (Genel Eğilim)",
  rows: [
    {
      feature: "Aile Sohbetleri",
      primary: "Sohbetleri tekrar ettirme ihtiyacı sıkça yaşanabilir.",
      secondary: "Sohbetleri takip etmek genellikle daha kolay hale gelebilir.",
    },
    {
      feature: "Sosyal Ortamlar",
      primary: "Kalabalık ortamlardan kaçınma eğilimi görülebilir.",
      secondary: "Sosyal ortamlara katılım genellikle daha rahat hissedilebilir.",
    },
    {
      feature: "Televizyon/Telefon",
      primary: "Ses seviyesini yükseltme ihtiyacı sıkça yaşanabilir.",
      secondary: "Diyalogları normal ses seviyesinde takip etmek kolaylaşabilir.",
    },
    {
      feature: "Günlük Enerji",
      primary: "Sesleri anlamaya çalışmak yorucu olabilir.",
      secondary: "Gün içindeki zihinsel yorgunluk genellikle azalabilir.",
    },
    {
      feature: "Kimler İçin Geçerlidir",
      primary: "Desteklenmemiş işitme kaybı yaşayan kullanıcılar için geçerlidir.",
      secondary: "Düzenli kullanım ve uyum sürecini tamamlayan kullanıcılar için geçerlidir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; belirli bir sonuç garanti edilmez ve kişiye göre değişebilir.",
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
