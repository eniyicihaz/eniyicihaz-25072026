// M8 (FAQ) content for the /isitme-cihazlari hub page — its final
// section, closing it before the Footer. Renders through the now-generic
// BrandFaq component. Deliberately distinct questions from
// brands/faq.ts (which already covers BTE-vs-ITE and şarjlı-vs-pilli at
// the brand-catalog level) — these go deeper into device-type-specific
// topics not covered there, to avoid duplicating content between the
// two hub pages.

import type { BrandFaqContent } from "../../components/brands/BrandFaq/BrandFaq.astro";

export const devicesFaq: BrandFaqContent = {
  eyebrow: "Sık Sorulan Sorular",
  heading: "İşitme Cihazı Çeşitleri Hakkında Merak Edilenler",
  intro:
    "Cihaz türleri ve teknolojileriyle ilgili en sık karşılaştığımız soruları burada yanıtladık.",
  items: [
    {
      question: "Görünmez (CIC) cihazlar herkese uygun mu?",
      answer:
        "Görünmez cihazlar, kulak kanalı yapısı ve işitme kaybı derecesi uygun olan kullanıcılar için tercih edilebilir. Uygunluk, kulak muayenesi ve işitme testi sonrasında netleşir.",
    },
    {
      question: "Çocuklar için mutlaka özel bir cihaz mı gerekir?",
      answer:
        "Çocuklara özel tasarlanan modeller, büyümeye uygun kalıp ve dayanıklılık gibi ek özellikler sunar; bu nedenle çocuklarda genellikle bu modeller tercih edilir.",
    },
    {
      question: "Suya dayanıklı cihazlar tamamen su geçirmez mi?",
      answer:
        "Suya dayanıklılık seviyesi modelden modele değişir; günlük terleme ve hafif neme karşı koruma sağlasa da, cihazın suya tamamen daldırılması genellikle önerilmez.",
    },
    {
      question: "Tinnitus (kulak çınlaması) çözümleri nasıl çalışır?",
      answer:
        "Bazı cihazlar, tinnitus deneyimini yönetmeye yardımcı olan hafif arka plan sesleri üretebilir. Bu özellik, işitme kaybı desteğine ek bir işlevdir.",
    },
    {
      question: "Uzaktan kontrol özelliği ne işe yarar?",
      answer:
        "Uzaktan kontrol, cihaz ayarlarınızın uzaktan bir uzman tarafından güncellenmesini sağlar; her ayar değişikliği için merkeze gelmenize gerek kalmayabilir.",
    },
    {
      question: "Aktif bir yaşam sürüyorsam hangi özelliklere dikkat etmeliyim?",
      answer:
        "Suya dayanıklılık, sağlam bir yapı ve güvenli bir kulak içi sabitleme, aktif yaşam tarzına uygun cihaz türlerinde öne çıkan özelliklerdir.",
    },
  ],
};
