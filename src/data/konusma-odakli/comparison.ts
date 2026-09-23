// "Yönlü Mikrofonlu (Konuşma Odaklı) vs Standart (Omnidirectional)"
// comparison table for the /teknolojiler/konusma-odakli page. Renders
// through the existing, already-generic KulakArkasiComparison component
// (see src/components/kulak-arkasi/) — reused as-is, not duplicated, same
// technique every /isitme-cihazlari/* and /teknolojiler/* feature page's
// comparison.ts uses. Framed as neutral, general tendencies — never
// "kesinlikle daha iyi"; the closing note reinforces that the real answer
// needs an assessment with an odyometrist.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const konusmaOdakliComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Yönlü Mikrofonlu (Konuşma Odaklı) ile Standart (Omnidirectional) Cihaz Karşılaştırması",
  intro: "İki mikrofon yaklaşımı arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seçim, günlük sosyal ortamınıza ve önceliklerinize göre değişir.",
  primaryLabel: "Yönlü Mikrofonlu",
  secondaryLabel: "Standart (Omnidirectional)",
  rows: [
    {
      feature: "Konuşma Netliği",
      primary: "Önden gelen konuşmayı diğer yönlerden gelen seslere kıyasla öne çıkarır.",
      secondary: "Tüm yönlerden gelen sesler benzer düzeyde işlenir.",
    },
    {
      feature: "Kalabalık Ortam Performansı",
      primary: "Kalabalık ortamlarda karşınızdaki kişiyi takip etmeyi kolaylaştırır.",
      secondary: "Kalabalık ortamlarda tüm sesler karışık şekilde algılanabilir.",
    },
    {
      feature: "Çevresel Farkındalık",
      primary: "Yan ve arkadan gelen sesler görece azaltılır.",
      secondary: "Çevredeki tüm sesler eşit düzeyde algılanır, farkındalık daha yüksektir.",
    },
    {
      feature: "Binaural Uyum",
      primary: "Bazı modellerde iki cihaz senkronize çalışarak ortak bir yön kararı oluşturur.",
      secondary: "Cihazlar birbirinden bağımsız çalışır, ortak yön kararı oluşturulmaz.",
    },
    {
      feature: "Pil Tüketimi",
      primary: "Çoklu mikrofon işleme nedeniyle bazı modellerde pil tüketimi biraz daha yüksek olabilir.",
      secondary: "Daha az işlem yükü nedeniyle pil tüketimi genellikle daha öngörülebilirdir.",
    },
    {
      feature: "Fiyat Aralığı",
      primary: "Gelişmiş yönlü mikrofon teknolojisi, genellikle cihaz fiyatını yukarı çeker.",
      secondary: "Daha basit mikrofon yapısı nedeniyle genellikle daha uygun fiyatlıdır.",
    },
    {
      feature: "Araç Kullanımı",
      primary: "Yönlü odaklanma araç içinde çevresel farkındalığı azaltabilir, dikkat gerektirir.",
      secondary: "Tüm yönlerden gelen sesler eşit algılandığından çevresel farkındalık daha yüksektir.",
    },
    {
      feature: "Uygun Ortamlar",
      primary: "Restoran, toplantı, kalabalık sohbet gibi konuşma odaklı ortamlarda ek fayda sağlar.",
      secondary: "Sakin, tek kişiyle sohbet edilen ortamlarda yeterli performans sunabilir.",
    },
    {
      feature: "Bulunabilirlik",
      primary: "Günümüzde orta ve üst segment modellerin çoğunda yaygın olarak sunulur.",
      secondary: "Genellikle ekonomik segment modellerde daha sınırlı düzeyde bulunur.",
    },
    {
      feature: "Kimler İçin Daha Uygun Olabilir",
      primary: "Kalabalık sohbetlerde konuşmayı takip etmekte zorlanan kullanıcılar için sıkça değerlendirilir.",
      secondary: "Çevresel farkındalığı önceliklendiren, sakin ortamlarda bulunan kullanıcılar için yeterli olabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; sizin için en uygun seçim günlük sosyal ortamınız, işitme kaybınızın derecesi ve bütçenize göre bir odyometrist ile birlikte belirlenmelidir.",
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
