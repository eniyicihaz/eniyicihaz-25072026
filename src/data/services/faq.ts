// M8 (FAQ) content for the /hizmetlerimiz hub page — its final section,
// closing it before the Footer. Renders through the now-generic BrandFaq
// component. General, process-level questions distinct from the
// topic-specific FAQ sections already on each individual service's own
// page, and from brands/faq.ts and devices/faq.ts's own questions.

import type { BrandFaqContent } from "../../components/brands/BrandFaq/BrandFaq.astro";

export const servicesFaq: BrandFaqContent = {
  eyebrow: "Sık Sorulan Sorular",
  heading: "Hizmetlerimiz Hakkında Merak Edilenler",
  intro:
    "Hangi hizmete ne zaman ihtiyaç duyacağınızla ilgili en sık karşılaştığımız soruları burada yanıtladık.",
  items: [
    {
      question: "Hangi hizmeti ne zaman almalıyım?",
      answer:
        "Süreciniz genellikle değerlendirmeyle başlar; cihaz sahibi olduktan sonra uygulama ve ayar, zamanla da bakım ve servis ihtiyacı ortaya çıkar. Hangi aşamada olduğunuzdan emin değilseniz, bizimle iletişime geçebilirsiniz.",
    },
    {
      question: "Değerlendirme hizmetleri ücretli mi?",
      answer:
        "İşitme testimiz ücretsizdir. Diğer hizmetlerin kapsamı ve varsa ücretlendirmesi hakkında randevunuzda bilgi verilir.",
    },
    {
      question: "Randevu almadan merkeze gelebilir miyim?",
      answer:
        "Size daha hızlı ve kesintisiz hizmet verebilmek için önceden randevu almanızı öneririz.",
    },
    {
      question: "Uzaktan ayar hizmeti hangi durumlarda kullanılabilir?",
      answer:
        "Uzaktan ayar, bazı küçük ayar ihtiyaçlarında merkeze gelmeden destek almanızı sağlar; kapsamı cihaz modelinize göre değişebilir.",
    },
    {
      question: "Garanti dışı bir arızada ne olur?",
      answer:
        "Garanti kapsamı dışında kalan arızalar teknik servisimiz tarafından değerlendirilir; süreç ve varsa maliyeti hakkında önceden bilgilendirilirsiniz.",
    },
    {
      question: "Hizmetler SGK kapsamında mı?",
      answer:
        "SGK desteği, belirlenen kriterlere göre işitme cihazı alımında uygulanır; hizmetler özelinde güncel bilgi için SGK & Haklar sayfalarımızı inceleyebilirsiniz.",
    },
  ],
};
