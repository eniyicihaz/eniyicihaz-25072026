// Content for the SGK pillar page's second section — the 4-step process
// flow (/sgk-isitme-cihazi-odemesi). Independent of hero.ts; its own
// namespace since this page will keep growing module by module.
//
// Step hrefs all point back to the pillar page itself for now — the SGK
// hub's future sub-pages (rapor süreci, gerekli belgeler, ...) don't exist
// yet. Swap each href once its real destination page is built; nothing
// else in the component needs to change.

export interface SgkProcessStep {
  number: string;
  title: string;
  description: string;
  href: string;
}

export interface SgkProcessContent {
  eyebrow: string;
  heading: string;
  subheading: string;
  steps: SgkProcessStep[];
  stepLinkLabel: string;
  infoItems: string[];
  cta: { heading: string; buttonLabel: string; href: string };
}

export const sgkProcess: SgkProcessContent = {
  eyebrow: "Adım Adım SGK Süreci",
  heading: "SGK İşitme Cihazı Desteğinden Nasıl Yararlanabilirsiniz?",
  subheading:
    "İşitme testinden cihaz teslimine kadar SGK başvuru süreci dört ana adımda ilerler. SGK katkı payından yararlanmanın adımlarını aşağıda bulabilirsiniz.",
  steps: [
    {
      number: "01",
      title: "Muayene ve İşitme Testi",
      description:
        "KBB uzmanı veya ilgili hekim tarafından muayene olunur, gerekli işitme testleri tamamlanır ve işitme kaybı değerlendirilir.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
    {
      number: "02",
      title: "Rapor ve Reçete",
      description:
        "İşitme cihazı kullanımı uygun görüldüğünde işitme cihazı raporu ve reçete düzenlenir.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
    {
      number: "03",
      title: "SGK Başvurusu",
      description:
        "Gerekli belgeler hazırlanır ve SGK başvuru süreci tamamlanır. İşlemler SGK mevzuatına uygun şekilde yürütülür.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
    {
      number: "04",
      title: "Cihaz Uygulaması ve Teslim",
      description:
        "Size en uygun işitme cihazı seçilir, kişiye özel ayarlanır, kullanım eğitimi verilir ve takip süreci başlatılır.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  stepLinkLabel: "Detaylı Bilgi",
  infoItems: [
    "SGK Anlaşmalı Merkez",
    "Ücretsiz Danışmanlık",
    "Belgelerde Destek",
    "Kişiye Özel Cihaz Ayarı",
  ],
  cta: {
    heading: "SGK süreci hakkında daha fazla bilgi almak ister misiniz?",
    buttonLabel: "SGK Rehberini İncele",
    href: "/sgk-isitme-cihazi-odemesi",
  },
};
