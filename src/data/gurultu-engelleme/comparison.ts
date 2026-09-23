// "Gürültü Engellemeli vs Standart (Gürültü Engellemesiz)" comparison
// table for the /teknolojiler/gurultu-engelleme page. Renders through the
// existing, already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated, same
// technique every /isitme-cihazlari/* and /teknolojiler/* feature page's
// comparison.ts uses. Framed as neutral, general tendencies — never
// "kesinlikle daha iyi"; the closing note reinforces that the real answer
// needs an assessment with an odyometrist.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const gurultuEngellemeComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Gürültü Engellemeli ile Standart (Gürültü Engellemesiz) Cihaz Karşılaştırması",
  intro: "İki işleme yaklaşımı arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seçim, günlük gürültü maruziyetinize ve önceliklerinize göre değişir.",
  primaryLabel: "Gürültü Engellemeli",
  secondaryLabel: "Standart (Gürültü Engellemesiz)",
  rows: [
    {
      feature: "Sabit Gürültü Azaltma",
      primary: "Klima ve trafik gibi sabit gürültü kaynaklarının seviyesini algılayıp azaltır.",
      secondary: "Sabit gürültüler, konuşma sesiyle aynı düzeyde işlenir; ek bir azaltma uygulanmaz.",
    },
    {
      feature: "Rüzgar Gürültüsü",
      primary: "Rüzgarın oluşturduğu sesi algılayıp bastırmaya yardımcı olur.",
      secondary: "Rüzgar sesi, diğer ortam sesleriyle aynı şekilde işlenir.",
    },
    {
      feature: "Ani Sesler",
      primary: "Ani ve yüksek sesleri konfor için anlık olarak yumuşatır.",
      secondary: "Ani yüksek sesler herhangi bir yumuşatma olmadan işitilir.",
    },
    {
      feature: "Dinleme Konforu",
      primary: "Rahatsız edici seslerin azaltılması, gün boyu dinleme konforunu artırmaya yardımcı olur.",
      secondary: "Sürekli gürültüyle karşı karşıya kalmak bazı kullanıcılarda yorgunluğa yol açabilir.",
    },
    {
      feature: "Konuşma Netliği Üzerindeki Etki",
      primary: "Dengeli ayarlandığında konuşmayı koruyarak yalnızca gürültüyü azaltmayı hedefler.",
      secondary: "Konuşma ve gürültü aynı şekilde işlendiğinden ek bir ayrım yapılmaz.",
    },
    {
      feature: "Pil Tüketimi",
      primary: "Sürekli sinyal analizi nedeniyle bazı modellerde pil tüketimi biraz daha yüksek olabilir.",
      secondary: "Daha az işlem yükü nedeniyle pil tüketimi genellikle daha öngörülebilirdir.",
    },
    {
      feature: "Fiyat Aralığı",
      primary: "Gelişmiş gürültü engelleme teknolojisi, genellikle cihaz fiyatını yukarı çeker.",
      secondary: "Daha basit işlemci yapısı nedeniyle genellikle daha uygun fiyatlıdır.",
    },
    {
      feature: "Uygun Ortamlar",
      primary: "Trafik, ofis, restoran gibi gürültülü ortamlarda ek konfor sağlar.",
      secondary: "Sakin ve düşük gürültülü ortamlarda yeterli performans sunabilir.",
    },
    {
      feature: "Bulunabilirlik",
      primary: "Günümüzde orta ve üst segment modellerin çoğunda yaygın olarak sunulur.",
      secondary: "Genellikle ekonomik segment modellerde daha sınırlı düzeyde bulunur.",
    },
    {
      feature: "Kimler İçin Daha Uygun Olabilir",
      primary: "Gürültülü ortamlarda sık bulunan, dinleme konforunu önceliklendiren kullanıcılar için sıkça değerlendirilir.",
      secondary: "Daha sakin ortamlarda bulunan, sade bir kullanım isteyen kullanıcılar için yeterli olabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; sizin için en uygun seçim günlük gürültü maruziyetiniz, işitme kaybınızın derecesi ve bütçenize göre bir odyometrist ile birlikte belirlenmelidir.",
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
