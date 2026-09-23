// "Kablosuz Bağlantı Destekli vs Standart (Sınırlı Bağlantılı)"
// comparison table for the /teknolojiler/kablosuz-baglanti page. Renders
// through the existing, already-generic KulakArkasiComparison component
// (see src/components/kulak-arkasi/) — reused as-is, not duplicated, same
// technique every /isitme-cihazlari/* and /teknolojiler/* feature page's
// comparison.ts uses. Framed as neutral, general tendencies — never
// "kesinlikle daha iyi"; the closing note reinforces that the real answer
// needs an assessment with an odyometrist.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const kablosuzBaglantiComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Kablosuz Bağlantı Destekli ile Standart (Sınırlı Bağlantılı) Cihaz Karşılaştırması",
  intro: "İki yaklaşım arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seçim, gündelik hayatınızda karşılaştığınız ortamlara göre değişir.",
  primaryLabel: "Kablosuz Bağlantı Destekli",
  secondaryLabel: "Standart (Sınırlı Bağlantılı)",
  rows: [
    {
      feature: "Toplu Alan Sistemi Uyumu",
      primary: "Telesarmal döngü sistemi bulunan mekanlarda doğrudan ses alabilir.",
      secondary: "Telesarmal desteği olmadığından bu sistemlerden faydalanamaz.",
    },
    {
      feature: "Uzaktan Mikrofon Desteği",
      primary: "Roger/FM verici mikrofonlarla uyumlu çalışabilir.",
      secondary: "Uzaktan mikrofon aksesuarlarını desteklemeyebilir.",
    },
    {
      feature: "Kulaktan Kulağa Senkronizasyon",
      primary: "İki cihaz arasında kablosuz veri paylaşımı yaparak tutarlı bir deneyim sunar.",
      secondary: "Cihazlar birbirinden bağımsız çalışır, ortak senkronizasyon olmaz.",
    },
    {
      feature: "Tek Taraflı Kayıp Desteği",
      primary: "CROS/BiCROS gibi sistemlerle iyi duyan kulağa kablosuz aktarım yapılabilir.",
      secondary: "Tek taraflı kayıplarda kablosuz aktarım seçeneği sunmaz.",
    },
    {
      feature: "Aksesuar Ekosistemi",
      primary: "Geniş bir aksesuar ve protokol desteğiyle farklı ortamlara uyum sağlar.",
      secondary: "Sınırlı veya hiç aksesuar uyumluluğu sunmayabilir.",
    },
    {
      feature: "Pil Tüketimi",
      primary: "Ek kablosuz protokollerin sürekli aktif olması pil tüketimini bir miktar artırabilir.",
      secondary: "Daha az işlem yükü nedeniyle pil tüketimi genellikle daha öngörülebilirdir.",
    },
    {
      feature: "Fiyat Aralığı",
      primary: "Geniş kablosuz protokol desteği, genellikle cihaz fiyatını yukarı çeker.",
      secondary: "Daha basit donanım yapısı nedeniyle genellikle daha uygun fiyatlıdır.",
    },
    {
      feature: "Kurulum Karmaşıklığı",
      primary: "Bazı protokoller (Roger, telesarmal) ek aksesuar ve kurulum gerektirebilir.",
      secondary: "Ek bir kurulum veya aksesuar gerektirmez, kullanımı daha basittir.",
    },
    {
      feature: "Bulunabilirlik",
      primary: "Günümüzde üst ve orta-üst segment modellerin çoğunda yaygın olarak sunulur.",
      secondary: "Genellikle ekonomik segment modellerde daha sınırlı düzeyde bulunur.",
    },
    {
      feature: "Kimler İçin Daha Uygun Olabilir",
      primary: "Okul, toplantı, ibadethane gibi özel kablosuz altyapıya sahip ortamlarda sık bulunan kullanıcılar için sıkça değerlendirilir.",
      secondary: "Bu tür özel ortamlara daha az maruz kalan, sade bir kullanım isteyen kullanıcılar için yeterli olabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; sizin için en uygun seçim günlük ortamlarınız, işitme kaybınızın türü ve bütçenize göre bir odyometrist ile birlikte belirlenmelidir.",
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
};
