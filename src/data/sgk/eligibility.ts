// Content for the SGK pillar page's eligibility section — answers "Ben
// SGK işitme cihazı desteğinden yararlanabilir miyim?". Distinct from
// process/knowledge/payments/insight: this section is the page's
// eligibility (uygunluk) check, not a repeat of the process or figures
// already covered. Own namespace, independent of the other sgk/* files.
//
// relatedLinks: "SGK Katkı Payı", "Rapor Süreci", "Gerekli Belgeler" and
// "Çocuklarda SGK" point to their real pages (/sgk/katki-payi,
// /sgk/rapor-sureci, /sgk/gerekli-belgeler, /sgk/cocuklarda-sgk); no
// dedicated "SGK mevzuatı" page exists, so that entry anchors to this
// page's own current-rates section instead of inventing a URL.

export interface SgkEligibilityGroup {
  title: string;
  text: string;
}

export interface SgkEligibilityLink {
  label: string;
  href: string;
}

export interface SgkEligibilityContent {
  badge: string;
  heading: string;
  intro: string;
  checklistLabel: string;
  checklist: string[];
  groups: SgkEligibilityGroup[];
  notice: { label: string; text: string };
  relatedLabel: string;
  relatedLinks: SgkEligibilityLink[];
  action: {
    title: string;
    questions: string[];
    closing: string;
    ctaHeading: string;
    ctaPrimaryLabel: string;
    ctaSecondaryLabel: string;
  };
}

export const sgkEligibility: SgkEligibilityContent = {
  badge: "SGK Uygunluk Şartları",
  heading: "Kimler SGK İşitme Cihazı Desteğinden Yararlanabilir?",
  intro:
    "SGK desteğinden yararlanabilmek için karşılamanız gereken temel şartları aşağıda inceleyebilirsiniz.",
  checklistLabel: "Uygunluk Kontrol Listesi",
  checklist: [
    "SGK güvencesine sahip olmak",
    "İşitme kaybını gösteren sağlık kurulu raporuna sahip olmak",
    "Uzman hekim tarafından düzenlenmiş reçeteye sahip olmak",
    "Güncel SGK şartlarını karşılamak",
    "Gerekli belgeleri eksiksiz hazırlamak",
  ],
  groups: [
    {
      title: "Çalışanlar",
      text: "Aktif sigortalı çalışanlar, gerekli şartları sağlamaları halinde SGK katkı payından yararlanabilir.",
    },
    {
      title: "Emekliler",
      text: "Emekli vatandaşlar SGK kapsamında daha yüksek destek tutarlarından yararlanabilir.",
    },
    {
      title: "Çocuklar",
      text: "Çocuk hastalarda SGK destek tutarları daha yüksektir ve erken rehabilitasyon desteklenmektedir.",
    },
    {
      title: "İşitme Kaybı Bulunan Bireyler",
      text: "Sağlık kurulu raporu bulunan ve uzman hekim tarafından uygun görülen kişiler başvuru yapabilir.",
    },
  ],
  notice: {
    label: "Unutmayın",
    text: "SGK desteğinden yararlanabilmek için yalnızca sigortalı olmak yeterli değildir. Gerekli rapor ve reçete şartlarının da sağlanması gerekir.",
  },
  relatedLabel: "Bu konuyla ilgili devamı",
  relatedLinks: [
    { label: "SGK Katkı Payı", href: "/sgk/katki-payi" },
    { label: "Rapor Süreci", href: "/sgk/rapor-sureci" },
    { label: "Gerekli Belgeler", href: "/sgk/gerekli-belgeler" },
    { label: "Çocuklarda SGK", href: "/sgk/cocuklarda-sgk" },
    { label: "Güncel SGK Ödeme Tutarları", href: "#sgk-payments-title" },
  ],
  action: {
    title: "SGK Desteği Almaya Uygun Musunuz?",
    questions: [
      "SGK güvenceniz var mı?",
      "İşitme kaybınızı gösteren raporunuz var mı?",
      "Uzman hekim reçeteniz mevcut mu?",
      "İşitme cihazı kullanımı önerildi mi?",
    ],
    closing:
      "Bu soruların çoğuna \"Evet\" cevabı veriyorsanız büyük olasılıkla SGK desteğinden yararlanabilirsiniz.",
    ctaHeading: "Durumunuzu ücretsiz değerlendirelim.",
    ctaPrimaryLabel: "Hemen Ara",
    ctaSecondaryLabel: "WhatsApp'tan Yaz",
  },
};
