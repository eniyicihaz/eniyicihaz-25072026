// FAQ hub for the /teknolojiler/kablosuz-baglanti page. Renders through
// the shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. The price question never states
// a figure — only the variables that shape price — same restraint every
// brand/category page's faq.ts uses.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const kablosuzBaglantiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Kablosuz Bağlantı Özellikleri Hakkında Merak Edilenler",
  intro: "Kablosuz bağlantı protokolleri, uygunluk kriterleri ve kullanım şekli hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Hâlâ karar veremediniz mi?",
    points: ["Ücretsiz işitme testi", "Demo cihaz denemesi", "Uzman odyometrist desteği", "SGK danışmanlığı"],
    ctaLabel: "Hemen İletişime Geç",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Kablosuz bağlantı özellikleri ile Bluetooth arasındaki fark nedir?",
          answer:
            "Bluetooth, telefon ve TV ile doğrudan bağlantıyı kapsar; detaylı bilgi için Bluetooth Özellikli Cihazlar sayfamızı inceleyebilirsiniz. Kablosuz bağlantı özellikleri ise telesarmal, Roger/FM uzaktan mikrofon ve kulaktan kulağa bağlantı gibi ek protokolleri de kapsayan daha geniş bir kategoridir.",
        },
        {
          question: "Telesarmal (telecoil) nedir?",
          answer:
            "Cihazdaki küçük bir bobinin, mekana kurulu manyetik döngü sisteminin yaydığı sinyali doğrudan algılayarak sesi aktardığı, uzun süredir kullanılan bir kablosuz bağlantı teknolojisidir.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Telesarmal her yerde çalışır mı?",
          answer:
            "Hayır, telesarmal yalnızca döngü sistemi altyapısına sahip mekanlarda çalışır; bu tür sistemler tiyatro, ibadethane ve bazı toplantı salonlarında bulunabilir.",
        },
        {
          question: "Roger sistemi kimler için uygundur?",
          answer:
            "Okul, toplantı gibi ortamlarda uzak mesafeden net ses almak isteyen kullanıcılar için sıkça değerlendirilir; özellikle öğrencilerde ve iş hayatında aktif kullanıcılarda tercih edilir.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "Roger vericisi ayrıca mı satın alınmalı?",
          answer:
            "Evet, Roger/FM verici mikrofon genellikle cihazdan bağımsız, ayrıca temin edilmesi gereken bir aksesuardır.",
        },
        {
          question: "Kulaktan kulağa bağlantı için özel bir ayar gerekir mi?",
          answer:
            "Hayır, kulaktan kulağa (NFMI) bağlantı genellikle otomatik olarak çalışır; iki uyumlu cihazın kullanılması yeterlidir.",
        },
        {
          question: "CROS/BiCROS sistemi nasıl çalışır?",
          answer:
            "İyi duymayan kulaktaki cihaz bir mikrofon ve verici görevi görür; topladığı sesi kablosuz olarak iyi duyan kulaktaki cihaza aktarır.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, kablosuz bağlantı özellikli işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği kablosuz bağlantı protokolüne göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan kullanıcılar bu özelliklere sahip cihazlar için de destekten yararlanabilir.",
        },
        {
          question: "Kablosuz bağlantı özellikli işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen marka ve model, cihaz tipi (BTE/RIC veya ITE), desteklenen protokol sayısı ve gerekli ek aksesuarlar belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
};
