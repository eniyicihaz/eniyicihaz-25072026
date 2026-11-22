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
        "SGK işitme cihazı ödemesi yaş grubuna ve sigortalılık durumuna göre değişir; çalışan ve emekli bireyler için farklı tutarlar uygulanır. Güncel 2026 SGK işitme cihazı ödeme tutarlarını bu sayfadaki tabloda inceleyebilirsiniz. Tablodaki tutarlar tek kulak (tek cihaz) içindir.",
      relatedLinks: [{ label: "SGK Katkı Payı", href: "/sgk/katki-payi/" }],
    },
    {
      question: "İki kulağa işitme cihazı takılırsa SGK ne kadar öder?",
      answer:
        "Tablodaki her tutar tek kulak içindir. İki kulağa cihaz uygulanıyor ve her iki cihaz için SGK koşulları sağlanıyorsa tablodaki tutar ikiyle çarpılır. Örneğin yetişkin çalışan için 4.069,63 ₺ olan tutar iki kulakta 8.139,26 ₺, yetişkin emekli için 5.087,04 ₺ olan tutar 10.174,08 ₺ olur. Bu çarpım, merkezimizin MEDULA uygulamasındaki işlem bilgisine dayanır.",
    },
    {
      question: "Emekliler daha fazla destek alıyor mu?",
      answer:
        "Evet, SGK emekli vatandaşlara çalışanlara kıyasla daha yüksek destek tutarları sunmaktadır. Bu fark tüm yaş gruplarında geçerlidir.",
      relatedLinks: [{ label: "SGK Katkı Payı", href: "/sgk/katki-payi/" }],
    },
    {
      question: "Çocuklarda SGK ödemesi neden farklıdır?",
      answer:
        "Çocuklarda işitme kaybının erken yaşta desteklenmesi önemli olduğu için SGK, çocuk yaş gruplarında daha yüksek destek tutarları belirlemiştir. Bu sayede erken rehabilitasyon süreci desteklenmektedir. Çocuk tutarları, yetişkin tutarına 0-4 yaş için %80, 5-12 yaş için %60 ve 13-18 yaş için %50 oranında artış uygulanarak bulunur (SUT 3.3.32).",
      relatedLinks: [{ label: "Çocuklarda SGK", href: "/sgk/cocuklarda-sgk/" }],
    },
    {
      question: "İşitme cihazı pil desteği var mı?",
      answer:
        "Evet, SGK belirli şartları sağlayan kullanıcılara işitme cihazı başına yıllık 104 adet pil bedelini karşılar. Pil birim bedeli 6,00 ₺'dir; %20 KDV eklenince 7,20 ₺ olur. Tek cihaz için 2026 pil desteği 748,80 ₺ (104 × 7,20 ₺) tutarındadır. İki cihaz için yıllık 208 adet pil ve 1.497,60 ₺ destek uygulanır.",
    },
    {
      question: "Kaç yılda bir SGK'dan yeni işitme cihazı alınabilir?",
      answer:
        "SGK kapsamındaki işitme cihazı yenileme süresi, çocuklar dâhil bütün yaş gruplarında 5 yıldır. Süre, önceki cihazın MEDULA sistemine kaydedildiği tarihten itibaren hesaplanır. Sağ ve sol kulak cihazlarının kayıt tarihleri farklıysa her kulağın süresi ayrı hesaplanır.",
      relatedLinks: [{ label: "Yenileme Hakkı", href: "/sgk/yenileme-hakki/" }],
    },
    {
      question: "Sağ ve sol kulak cihazlarının kayıt tarihleri farklıysa yenileme nasıl hesaplanır?",
      answer:
        "Her kulağın süresi, o kulaktaki cihazın MEDULA kayıt tarihinden itibaren ayrı hesaplanır. Örneğin sağ kulak cihazı 10.03.2023'te, sol kulak cihazı 15.09.2024'te kaydedildiyse sağ kulak için 5 yıllık süre 10.03.2028'de, sol kulak için 15.09.2029'da dolar (varsayımsal örnek).",
      relatedLinks: [{ label: "Yenileme Hakkı", href: "/sgk/yenileme-hakki/" }],
    },
    {
      question: "Heyet raporu (sağlık kurulu raporu) gerekli mi?",
      answer:
        "Evet, SGK desteğinden yararlanabilmek için işitme kaybını gösteren bir sağlık kurulu raporuna sahip olmak gerekir. Rapor, SGK'nın kabul ettiği resmî sağlık hizmeti sunucusunda (devlet hastanesi gibi) düzenlenmelidir; özel hastane raporları SGK tarafından kabul edilmez.",
      relatedLinks: [{ label: "Rapor Süreci", href: "/sgk/rapor-sureci/" }],
    },
    {
      question: "İşitme cihazı reçetesi zorunlu mu?",
      answer:
        "Evet, sağlık kurulu raporunun yanı sıra uzman hekim tarafından düzenlenmiş bir işitme cihazı reçetesi de başvuru için gereklidir.",
      relatedLinks: [{ label: "Gerekli Belgeler", href: "/sgk/gerekli-belgeler/" }],
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
      relatedLinks: [{ label: "İşitme Cihazı Markaları", href: "/markalar/" }],
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
      relatedLinks: [{ label: "İletişim", href: "/iletisim/" }],
    },
  ],
  help: {
    title: "Aradığınız sorunun cevabını bulamadınız mı?",
    subtext: "Uzman ekibimiz SGK süreciyle ilgili tüm sorularınızı memnuniyetle yanıtlar.",
    primaryLabel: "Bizi Arayın",
    secondaryLabel: "WhatsApp'tan Yazın",
  },
};
