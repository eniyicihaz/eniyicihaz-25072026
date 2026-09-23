// "Tinnitus Destekli vs Standart (Tinnitus Desteksiz)" comparison table
// for the /teknolojiler/tinnitus-cozumleri page. Renders through the
// existing, already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated, same
// technique every /isitme-cihazlari/* and /teknolojiler/* feature page's
// comparison.ts uses. Framed as neutral, general tendencies — never
// "kesinlikle daha iyi" or a treatment claim; the closing note reinforces
// that the real answer needs a KBB/audiological assessment.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const tinnitusCozumleriComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Tinnitus Destekli ile Standart (Tinnitus Desteksiz) Cihaz Karşılaştırması",
  intro: "İki seçenek arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seçim, tinnitus deneyiminize ve bir uzmanla yapacağınız değerlendirmeye göre belirlenir.",
  primaryLabel: "Tinnitus Destekli",
  secondaryLabel: "Standart (Tinnitus Desteksiz)",
  rows: [
    {
      feature: "Rahatlatıcı Ses Üretimi",
      primary: "Dahili ses üreteci, ihtiyaç anında hafif ve rahatlatıcı sesler üretebilir.",
      secondary: "Ek bir ses üretme özelliği bulunmaz.",
    },
    {
      feature: "Ses Türü Seçenekleri",
      primary: "Beyaz gürültü, doğa sesleri, fraktal ton gibi farklı ses türleri arasından seçim yapılabilir.",
      secondary: "Tinnitus'a yönelik ses seçeneği sunulmaz.",
    },
    {
      feature: "Kişiselleştirme",
      primary: "Ses türü ve seviyesi, odyometrist tarafından kişiye özel ayarlanabilir.",
      secondary: "Tinnitus'a özel bir kişiselleştirme seçeneği yoktur.",
    },
    {
      feature: "Uygulama Kontrolü",
      primary: "Bazı modellerde ses üreteci uygulama üzerinden yönetilebilir.",
      secondary: "Tinnitus'a yönelik uygulama kontrolü bulunmaz.",
    },
    {
      feature: "Kombine Kullanım",
      primary: "İşitme desteği ile rahatlatıcı ses aynı cihazda birlikte sunulabilir.",
      secondary: "Yalnızca işitme amplifikasyonu sağlar.",
    },
    {
      feature: "Pil Tüketimi",
      primary: "Ses üretecinin sürekli aktif olması pil tüketimini bir miktar artırabilir.",
      secondary: "Ek işlem yükü olmadığından pil tüketimi genellikle daha öngörülebilirdir.",
    },
    {
      feature: "Fiyat Aralığı",
      primary: "Tinnitus destek özelliği, genellikle cihaz fiyatını bir miktar yukarı çeker.",
      secondary: "Ek özellik barındırmadığından genellikle daha uygun fiyatlıdır.",
    },
    {
      feature: "Uzman Takibi İhtiyacı",
      primary: "Ses ayarlarının düzenli gözden geçirilmesi için periyodik takip önerilir.",
      secondary: "Standart işitme cihazı takibi yeterlidir.",
    },
    {
      feature: "Bulunabilirlik",
      primary: "Günümüzde orta ve üst segment modellerin çoğunda yaygın olarak sunulur.",
      secondary: "Genellikle ekonomik segment modellerde bulunmaz.",
    },
    {
      feature: "Kimler İçin Daha Uygun Olabilir",
      primary: "İşitme kaybıyla birlikte tinnitus yaşayan, destek arayan kullanıcılar için sıkça değerlendirilir.",
      secondary: "Tinnitus yaşamayan veya yalnızca işitme desteği isteyen kullanıcılar için yeterli olabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; tinnitus deneyiminiz için en uygun yaklaşım, öncelikle bir kulak burun boğaz değerlendirmesi ve ardından bir odyometrist ile birlikte belirlenmelidir.",
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
};
