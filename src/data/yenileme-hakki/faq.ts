// FAQ hub for the /sgk/yenileme-hakki page. Renders through the shared
// BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. The 5-year period (MEDULA record
// date, each ear separately) is answered directly here as well as on
// the pillar page (owner-confirmed; see hero.ts / renewal-guide.ts).
// Early renewal = only the two SUT exceptions; "hearing loss
// progression" is NOT a reason. e-Devlet: only the two service names
// are stated, never that they show the renewal date or the MEDULA
// record date, and "no record shown" is never read as "the right has
// arisen".

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const yenilemeHakkiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Yenileme Hakkı Hakkında Merak Edilenler",
  intro: "Standart ve erken yenileme, eski cihaz ve süreç hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Yenileme Zamanınızı Öğrenmek İster misiniz?",
    points: ["Ücretsiz kontrol", "Kişiye özel değerlendirme", "Şeffaf süreç", "Uzman rehberliği"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "SGK işitme cihazı kaç yılda bir yenilenir?",
          answer:
            "SGK kapsamındaki işitme cihazı yenileme süresi, çocuklar dâhil bütün yaş gruplarında 5 yıldır. Süre, önceki cihazın MEDULA sistemine kaydedildiği tarihten itibaren hesaplanır.",
        },
        {
          question: "Sağ ve sol kulak cihazlarının tarihleri farklıysa süre nasıl hesaplanır?",
          answer:
            "Her kulağın süresi ayrı hesaplanır. Örneğin sağ kulak cihazı 10.03.2023'te, sol kulak cihazı 15.09.2024'te kaydedildiyse sağ kulak için 5 yıllık süre 10.03.2028'de, sol kulak için 15.09.2029'da dolar (varsayımsal örnek).",
        },
        {
          question: "Yenileme hakkımın doğup doğmadığını nasıl öğrenebilirim?",
          answer:
            "Süre, önceki cihazınızın MEDULA'ya kaydedildiği tarihe göre hesaplanır; merkezimizden bilgi alabilirsiniz. SGK'nın e-Devlet'teki Medikal Malzeme Sorgulama ve Kullanımı Bitmemiş Malzeme Bilgisi Sorgulama hizmetlerini de kullanabilirsiniz; ancak bu hizmetlerin işitme cihazı için hangi ayrıntıları gösterdiğini garanti edemiyoruz. Sorguda kayıt görünmemesi, yenileme hakkının doğduğu anlamına gelmez.",
        },
        {
          question: "Yenilerken farklı bir marka seçebilir miyim?",
          answer:
            "Evet; yenileme sırasında istediğiniz SGK anlaşmalı markayı ve modeli, ihtiyacınıza göre yeniden değerlendirebilirsiniz.",
        },
      ],
    },
    {
      label: "Erken Yenileme",
      items: [
        {
          question: "Süre dolmadan yenileme hangi durumlarda mümkündür?",
          answer:
            "SUT yalnızca iki istisna tanır: büyüme ve gelişme çağındaki çocuğun cihazı büyümesi nedeniyle kullanamaması veya cihazın kullanıcı kasıt ve kusuru olmadan arızalanıp kullanılamaz hâle gelmesi ve onarımının sağlanamaması. İkisinde de durumun sağlık raporuyla belgelenmesi gerekir.",
        },
        {
          question: "İşitme kaybım ilerledi, cihazı hemen yenileyebilir miyim?",
          answer:
            "İşitme kaybının ilerlemesi tek başına süre dolmadan yenileme için yeterli değildir; SUT'taki istisnalar arasında yer almaz. Cihazınızın ayarlarının güncellenmesi gibi seçenekleri merkezimizde birlikte değerlendirebiliriz.",
        },
        {
          question: "Erken yenileme talebini nasıl başlatabilirim?",
          answer:
            "Cihazınız kullanıcı kusuru olmadan arızalandıysa veya çocuğun büyümesi nedeniyle kullanılamıyorsa, bizimle iletişime geçerek sağlık raporu ve başvuru sürecini birlikte planlayabilirsiniz.",
        },
        {
          question: "Cihazım kaybolursa veya çalınırsa SGK yenisini karşılar mı?",
          answer:
            "SUT'a göre kayıp veya çalıntı hâlinde, miat süresi dolana kadar yeni cihazın bedeli SGK tarafından karşılanmaz.",
        },
        {
          question: "Cihaz garantisi yenileme hakkını etkiler mi?",
          answer:
            "Garanti kapsamındaki bir arıza önce garanti süreciyle değerlendirilir; garanti dışı ve onarılamaz durumlarda erken yenileme gündeme gelebilir. Detaylı bilgi için Garanti İşlemleri sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Rapor",
      items: [
        {
          question: "Yenileme için özel hastaneden alınan rapor geçerli mi?",
          answer:
            "Hayır. SUT'a göre sağlık kurulu raporu resmî sağlık hizmeti sunucularında düzenlenmelidir; özel hastane raporları SGK tarafından kabul edilmez.",
        },
      ],
    },
    {
      label: "Eski Cihaz",
      items: [
        {
          question: "Yenileme sonrası eski cihazıma ne olur?",
          answer:
            "Eski cihazınız size aittir; isterseniz yedek cihaz olarak saklayabilir veya merkezimizle bu konuda görüşebilirsiniz.",
        },
      ],
    },
    {
      label: "Çocuklar",
      items: [
        {
          question: "Çocuklarda yenileme süreci farklı mı işler?",
          answer:
            "Yenileme süresi çocuklar için de 5 yıldır. Çocuğun büyümesi nedeniyle cihaz kullanılamıyorsa, bu durum sağlık raporuyla belgelenirse süre dolmadan yenileme değerlendirilebilir. Detaylı bilgi için Çocuklarda SGK sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
