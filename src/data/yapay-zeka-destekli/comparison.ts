// "Yapay Zeka Destekli vs Standart (Kural Tabanlı)" comparison table for
// the /teknolojiler/yapay-zeka-destekli page. Renders through the
// existing, already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated, same
// technique every /isitme-cihazlari/* feature page's comparison.ts uses.
// Framed as neutral, general tendencies — never "kesinlikle daha iyi";
// the closing note reinforces that the real answer needs an assessment
// with an odyometrist.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const yapayZekaDestekliComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Yapay Zeka Destekli ile Standart (Kural Tabanlı) Cihaz Karşılaştırması",
  intro: "İki işleme yaklaşımı arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seçim, günlük ortam çeşitliliğinize ve önceliklerinize göre değişir.",
  primaryLabel: "Yapay Zeka Destekli",
  secondaryLabel: "Standart (Kural Tabanlı)",
  rows: [
    {
      feature: "Ortam Algılama",
      primary: "Ortamı gerçek zamanlı analiz ederek otomatik optimize eder.",
      secondary: "Önceden tanımlanmış birkaç program arasında sınırlı otomatik geçiş yapar.",
    },
    {
      feature: "Konuşma Netliği",
      primary: "Konuşmayı arka plan gürültüsünden ayırt etmeye yardımcı olan gelişmiş algoritmalar kullanır.",
      secondary: "Gürültü azaltma daha temel algoritmalarla sağlanır.",
    },
    {
      feature: "Kişiselleştirme",
      primary: "Bazı modeller kullanım alışkanlıklarınızı öğrenerek ayarlarını kişiselleştirir.",
      secondary: "Ayarlar genellikle sabittir, zaman içinde öğrenme özelliği taşımaz.",
    },
    {
      feature: "Manuel Müdahale İhtiyacı",
      primary: "Çoğu durumda manuel program değişikliği gerektirmez.",
      secondary: "Ortam değiştiğinde manuel program seçimi gerekebilir.",
    },
    {
      feature: "Pil Tüketimi",
      primary: "Sürekli analiz süreçleri nedeniyle bazı modellerde pil tüketimi biraz daha yüksek olabilir.",
      secondary: "Daha az işlem yükü nedeniyle pil tüketimi genellikle daha öngörülebilirdir.",
    },
    {
      feature: "Fiyat Aralığı",
      primary: "Gelişmiş işlemci teknolojisi, genellikle cihaz fiyatını yukarı çeker.",
      secondary: "Daha basit işlemci yapısı nedeniyle genellikle daha uygun fiyatlıdır.",
    },
    {
      feature: "Uygulama Entegrasyonu",
      primary: "Çoğu model, öğrenme ve kişiselleştirme için akıllı telefon uygulamasıyla entegre çalışır.",
      secondary: "Uygulama entegrasyonu genellikle sınırlı veya yoktur.",
    },
    {
      feature: "Karmaşık Ortamlarda Performans",
      primary: "Karmaşık ve değişken ses ortamlarında daha hassas bir uyum sağlamayı hedefler.",
      secondary: "Basit ve öngörülebilir ortamlarda yeterli performans sunabilir.",
    },
    {
      feature: "Bulunabilirlik",
      primary: "Günümüzde üst ve orta-üst segment modellerin çoğunda yaygın olarak sunulur.",
      secondary: "Genellikle orta ve ekonomik segment modellerde görülür.",
    },
    {
      feature: "Kimler İçin Daha Uygun Olabilir",
      primary: "Sürekli değişen ortamlarda bulunan, manuel ayarla uğraşmak istemeyen kullanıcılar için sıkça değerlendirilir.",
      secondary: "Daha sabit ve öngörülebilir ortamlarda bulunan, sade bir kullanım isteyen kullanıcılar için yeterli olabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; sizin için en uygun seçim günlük ortam çeşitliliğiniz, teknoloji kullanım alışkanlığınız ve bütçenize göre bir odyometrist ile birlikte belirlenmelidir.",
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
