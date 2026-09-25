// Content for the SGK pillar page's FAQ section. Single source of truth
// for BOTH the visible accordion AND the FAQPage JSON-LD schema — the
// component builds the schema directly from this array, so the two can
// never drift apart. Own namespace, independent of the rest of sgk/*.
//
// relatedLinks: every "SGK & Haklar" sub-page now points to its real
// destination (/sgk/katki-payi, /sgk/rapor-sureci, /sgk/gerekli-belgeler,
// /sgk/cocuklarda-sgk, /sgk/yenileme-hakki), plus /markalar which is
// real — the entire series built this session is now fully linked.

export interface SgkFaqLink {
  label: string;
  href: string;
}

export interface SgkFaqItem {
  question: string;
  answer: string;
  relatedLinks?: SgkFaqLink[];
}

export interface SgkFaqContent {
  badge: string;
  heading: string;
  intro: string;
  items: SgkFaqItem[];
  help: { title: string; subtext: string; primaryLabel: string; secondaryLabel: string };
}

export const sgkFaq: SgkFaqContent = {
  badge: "Sık Sorulan Sorular",
  heading: "2026 SGK İşitme Cihazı Ödemesi Hakkında Sık Sorulan Sorular",
  intro: "SGK işitme cihazı desteğiyle ilgili en çok merak edilen sorular ve yanıtları aşağıda yer alıyor.",
  items: [
    {
      question: "SGK işitme cihazı için ne kadar ödeme yapıyor?",
      answer:
        "SGK işitme cihazı ödemesi yaş grubuna ve sigortalılık durumuna göre değişir; çalışan ve emekli bireyler için farklı tutarlar uygulanır. Güncel 2026 SGK işitme cihazı ödeme tutarlarını bu sayfadaki tabloda inceleyebilirsiniz.",
      relatedLinks: [{ label: "SGK Katkı Payı", href: "/sgk/katki-payi" }],
    },
    {
      question: "Emekliler daha fazla destek alıyor mu?",
      answer:
        "Evet, SGK emekli vatandaşlara çalışanlara kıyasla daha yüksek destek tutarları sunmaktadır. Bu fark tüm yaş gruplarında geçerlidir.",
      relatedLinks: [{ label: "SGK Katkı Payı", href: "/sgk/katki-payi" }],
    },
    {
      question: "Çocuklarda SGK ödemesi neden farklıdır?",
      answer:
        "Çocuklarda işitme kaybının erken yaşta desteklenmesi önemli olduğu için SGK, çocuk yaş gruplarında daha yüksek destek tutarları belirlemiştir. Bu sayede erken rehabilitasyon süreci desteklenmektedir.",
      relatedLinks: [{ label: "Çocuklarda SGK", href: "/sgk/cocuklarda-sgk" }],
    },
    {
      question: "İşitme cihazı pil desteği var mı?",
      answer:
        "Evet, SGK belirli şartları sağlayan kullanıcılara işitme cihazı pilleri için yıllık ödeme veya katkı payı desteği sunmaktadır.",
    },
    {
      question: "Kaç yılda bir SGK'dan yeni işitme cihazı alınabilir?",
      answer:
        "İşitme cihazı yenileme hakkı SGK mevzuatında belirlenen sürelere göre değişir. Güncel yenileme süresi ve şartları hakkında merkezimizden veya SGK'dan detaylı bilgi alabilirsiniz.",
      relatedLinks: [{ label: "Yenileme Hakkı", href: "/sgk/yenileme-hakki" }],
    },
    {
      question: "Heyet raporu (sağlık kurulu raporu) gerekli mi?",
      answer:
        "Evet, SGK desteğinden yararlanabilmek için işitme kaybını gösteren bir sağlık kurulu raporuna sahip olmak gerekir. Bu rapor ilgili hastane veya sağlık kuruluşundan alınır.",
      relatedLinks: [{ label: "Rapor Süreci", href: "/sgk/rapor-sureci" }],
    },
    {
      question: "İşitme cihazı reçetesi zorunlu mu?",
      answer:
        "Evet, sağlık kurulu raporunun yanı sıra uzman hekim tarafından düzenlenmiş bir işitme cihazı reçetesi de başvuru için gereklidir.",
      relatedLinks: [{ label: "Gerekli Belgeler", href: "/sgk/gerekli-belgeler" }],
    },
    {
      question: "Fark ücreti ödemem gerekir mi?",
      answer:
        "Seçilen işitme cihazının bedeli SGK'nın karşıladığı tutarın üzerindeyse aradaki fark kullanıcı tarafından karşılanabilir. Cihaz seçimi öncesinde bu konuda bilgi almanızı öneririz.",
    },
    {
      question: "SGK desteği tüm işitme cihazı markalarında geçerli mi?",
      answer:
        "SGK desteği, SGK'nın belirlediği teknik kriterleri karşılayan işitme cihazı modellerinde geçerlidir. Anlaşmalı merkezimizde sunduğumuz markalar hakkında detaylı bilgi alabilirsiniz.",
      relatedLinks: [{ label: "İşitme Cihazı Markaları", href: "/markalar" }],
    },
    {
      question: "SGK başvuru sürecinde destek alabilir miyim?",
      answer:
        "Evet, uzman ekibimiz rapor ve reçete sürecinden SGK başvurusuna kadar her aşamada size destek olur. Sürecin tamamında yalnız değilsiniz.",
    },
    {
      question: "SGK anlaşmalı işitme merkezine nasıl başvurulur?",
      answer:
        "Öncelikle işitme değerlendirmesi için merkezimize başvurabilir, ardından gerekli sağlık kurulu raporu ve reçete sürecini birlikte takip edebilirsiniz. Darıca'daki merkezimize telefon veya WhatsApp üzerinden ulaşarak randevu talep edebilirsiniz.",
      relatedLinks: [{ label: "İletişim", href: "/iletisim" }],
    },
  ],
  help: {
    title: "Aradığınız sorunun cevabını bulamadınız mı?",
    subtext: "Uzman ekibimiz SGK süreciyle ilgili tüm sorularınızı memnuniyetle yanıtlar.",
    primaryLabel: "Hemen Ara",
    secondaryLabel: "WhatsApp'tan Yaz",
  },
};
