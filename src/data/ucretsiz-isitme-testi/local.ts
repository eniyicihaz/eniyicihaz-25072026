// Lokal bölümler — COMPANY.md §17: Darıca (gerçek merkez) → Gebze + Çayırova (öncelikli
// hizmet bölgesi; şube YOK, danışanlar Darıca merkezine gelir) → Kocaeli (üst bölgesel
// çerçeve). Dilovası / Tuzla / Pendik yalnızca ikincil erişim bölgesi olarak, Kocaeli
// bloğunda tek cümleyle anılır (eski sayfadaki doğrulanmış ifade: "çevresinden de işitme
// testi için bizi arayabilirsiniz").
//
// DOORWAY YASAĞI (COMPANY.md §17, QUALITY_GATES.md §2): dört blok birbirinin şehir adı
// değiştirilmiş kopyası DEĞİLDİR; her biri o bölgeden gelenin İŞİTME TESTİ ile ilgili farklı
// bir sorusunu yanıtlar ve farklı bir düzen kullanır:
//   Darıca  → "işitme testi nerede yapılır?" — gerçek merkez, adres tarifi, hazırlık (fotoğraflı)
//   Gebze   → merkeze gelmeden önce yapılacaklar (adımlar)
//   Çayırova→ randevuyu çalışma saatlerine göre planlama (gerçek saatler company.ts'ten)
//   Kocaeli → il genelinde bilgi ve erişim kanalları
// "Aynı gün test/sonuç" vaadi YOKTUR (doğrulanmadı). Şube iddiası YOKTUR. Adres, telefon ve
// saatler elle yazılmaz — company.ts (COMPANY.md kaynaklı) render edilir.
import type { LocalBlock } from "../../components/price-guide/price-guide.types";

export const localBlocks: LocalBlock[] = [
  {
    id: "darica",
    variant: "center",
    eyebrow: "Darıca · Gerçek Merkezimiz",
    heading: "Darıca'da Ücretsiz İşitme Testi",
    lead:
      "Darıca'da ücretsiz işitme testi, Avrasya İşitme'nin Darıca'daki gerçek merkezinde, uzman odyometrist eşliğinde ve herhangi bir ücret talep edilmeden yapılır.",
    paragraphs: [
      "Merkezimiz Palandöken Eczanesi'nin üst katındadır; Farabi Ağız ve Diş Sağlığı Merkezi girişinin tam karşısında yer alır ve asansörle 1. kata çıkılır. Darıca merkezden kolayca ulaşabilirsiniz.",
      "Avrasya İşitme 2009'dan beri aynı ekiple ve aynı adreste hizmet veriyor ve resmî olarak SGK ile anlaşmalıdır. Önceden randevu almanızı tavsiye ederiz.",
    ],
    items: [
      { title: "Önceki test sonuçlarınız", text: "Daha önce yaptırdığınız bir işitme testi varsa yanınızda bulundurun." },
      { title: "İlaç listeniz", text: "Kullandığınız ilaçların listesini getirmeniz faydalı olabilir." },
      { title: "SGK belgeleriniz", text: "SGK sürecini düşünüyorsanız ilgili belgelerinizi yanınıza alın." },
    ],
    // Mevcut gerçek fotoğraf, olduğu gibi: 1448 × 1086. Cadde tabelası — "merkez nerede, nasıl bulunur?" sorusunu yanıtlar.
    photo: {
      src: "/images/pages/hakkimizda-tabela-cadde.webp",
      alt: "Darıca'da cadde üzerindeki Avrasya İşitme Cihazları tabelası",
      width: 1448,
      height: 1086,
    },
    links: [
      { label: "Darıca işitme cihazları sayfası", href: "/darica-isitme-cihazlari/" },
      { label: "Randevu ve iletişim", href: "/iletisim/" },
    ],
  },
  {
    id: "gebze",
    variant: "steps",
    eyebrow: "Gebze",
    heading: "Gebze'den İşitme Testi İçin Gelenler",
    lead:
      "Gebze'de fiziksel bir şubemiz yoktur; Gebze'den işitme testi için gelen danışanlarımızı Darıca'daki merkezimizde ağırlıyoruz.",
    paragraphs: [
      "Darıca, Gebze'ye bitişik olduğundan merkezimize ulaşım kolaydır. Gelmeden önce aşağıdaki adımlar süreci kolaylaştırır.",
    ],
    items: [
      { title: "1. Randevu alın", text: "Telefon veya WhatsApp ile randevunuzu oluşturun; işitme testi için randevu almanızı öneririz." },
      { title: "2. Bilgilerinizi hazırlayın", text: "Varsa önceki test sonuçlarınızı ve kullandığınız ilaçların listesini yanınıza alın." },
      { title: "3. Belgeleri sorun", text: "SGK sürecini düşünüyorsanız hangi belgelerle geleceğinizi randevuda öğrenin." },
      { title: "4. Sonuçları birlikte değerlendirin", text: "Testin ardından odyogramınız görüşmede sizinle birlikte yorumlanır." },
    ],
    links: [
      { label: "Gebze işitme cihazları sayfası", href: "/gebze-isitme-cihazlari/" },
      { label: "SGK için gerekli belgeler", href: "/sgk/gerekli-belgeler/" },
    ],
  },
  {
    id: "cayirova",
    variant: "hours",
    eyebrow: "Çayırova",
    heading: "Çayırova'dan İşitme Testi İçin Gelenler",
    lead:
      "Çayırova'da da şubemiz yoktur; Çayırova'dan gelen danışanlarımız işitme testi için Darıca'daki merkezimizi ziyaret eder ve aynı randevu süreci geçerlidir.",
    paragraphs: [
      "Çalışan, aile bakımı üstlenen ya da hafta içi vakti kısıtlı biri için randevu zamanını doğru seçmek önemlidir. Merkezimiz hafta içi ve cumartesi günü açıktır; çalışma saatleri aşağıdadır.",
      "Sonuçlar görüşmede sizinle birlikte değerlendirildiği için acele etmeden vakit ayırabileceğiniz bir saat seçmenizi öneririz. İsterseniz bir yakınınızla birlikte gelebilirsiniz.",
    ],
    links: [
      { label: "Çayırova işitme cihazları sayfası", href: "/cayirova-isitme-cihazlari/" },
      { label: "Randevu ve iletişim", href: "/iletisim/" },
    ],
  },
  {
    id: "kocaeli",
    variant: "channels",
    eyebrow: "Kocaeli",
    heading: "Kocaeli Genelinde İşitme Testi",
    lead:
      "Merkezimiz Darıca'dadır; Kocaeli genelinde işitme testi hakkında bilgi ve danışmanlık desteği sunuyoruz.",
    paragraphs: [
      "Merkeze gelmeden önce bilgi almak isteyenler için birkaç yol var. Dilovası, Tuzla ve Pendik çevresinden de işitme testi için bizi arayabilirsiniz.",
    ],
    items: [
      { title: "Telefon ve WhatsApp", text: "Sorularınızı iletin, randevu alın; hangi belgelerle geleceğinizi öğrenin." },
      { title: "Online işitme taraması", text: "Merkeze gelmeden önce kulaklığınızla ön bir tarama yapabilirsiniz; bu, merkezdeki testin yerine geçmez." },
      { title: "Bilgi merkezi", text: "İşitme sağlığı ve test süreci hakkındaki rehberlerimizi okuyabilirsiniz." },
      { title: "Ücretsiz işitme testi", text: "Kesin değerlendirme için merkezimizde odyometrist eşliğinde test yaptırabilirsiniz." },
    ],
    links: [
      { label: "Kocaeli işitme cihazları sayfası", href: "/kocaeli-isitme-cihazlari/" },
      { label: "Online işitme testi", href: "/degerlendirme/online-isitme-testi/" },
      { label: "Bilgi merkezi", href: "/bilgi-merkezi/" },
    ],
  },
];
