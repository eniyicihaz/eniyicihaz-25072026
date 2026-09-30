// Yerel bölüm — TEK ana H2 ("Darıca'daki Merkezimizde İşitme Testi ve Ulaşım") altında üç H3:
//   1) Adres ve merkezi bulma  (Darıca — gerçek merkez, fotoğraf, adres tarifi, güven bilgisi TEK kez)
//   2) Gebze ve Çayırova'dan gelenler  ("şubemiz yok" bilgisi YALNIZCA burada, bir kez; Çayırova
//      çalışma saatleri split kartı korunur)
//   3) Kocaeli'nin diğer ilçelerinden  (çok kısa)
// COMPANY.md §17: Gebze/Çayırova'da şube YOK, danışanlar Darıca merkezine gelir. Dilovası / Tuzla /
// Pendik ifadeleri bu sayfadan ÇIKARILDI (işletme teyidi yok; Tuzla/Pendik Kocaeli dışında).
// Hazırlık listesi (belge / ilaç / önceki sonuç) yalnızca "Testten önce" H3'ünde yaşar.
// DOORWAY YASAĞI (QUALITY_GATES.md §2): bloklar şehir adı değiştirilmiş kopyalar değil,
// farklı sorulara farklı düzenle cevap verir. "Aynı gün test/sonuç" vaadi YOKTUR.
// Adres, telefon ve saatler elle yazılmaz — company.ts (COMPANY.md kaynaklı) render edilir.
import type { LocalBlock } from "../../components/price-guide/price-guide.types";

export const localSection = {
  id: "darica",
  eyebrow: "Darıca · Gerçek Merkezimiz",
  heading: "Darıca'daki Merkezimizde İşitme Testi ve Ulaşım",
  intro:
    "Merkezimiz Darıca'dadır; Gebze, Çayırova ve Kocaeli'nin diğer ilçelerinden gelen danışanlarımız da aynı merkeze randevuyla gelir.",
};

export const localBlocks: LocalBlock[] = [
  {
    id: "darica-adres",
    variant: "center",
    eyebrow: "Darıca",
    heading: "Adres ve Merkezi Bulma",
    lead:
      "Darıca'da işitme testi, Avrasya İşitme'nin Darıca'daki merkezinde, uzman odyometrist eşliğinde yapılır.",
    paragraphs: [
      "Merkezimiz Palandöken Eczanesi'nin üst katındadır; Farabi Ağız ve Diş Sağlığı Merkezi girişinin tam karşısında yer alır ve asansörle 1. kata çıkılır. Adres, telefon ve yol tarifi fotoğrafın altında.",
      "Avrasya İşitme 2009'dan beri aynı ekiple ve aynı adreste hizmet veriyor ve resmî olarak SGK ile anlaşmalıdır. Önceden randevu almanızı tavsiye ederiz.",
    ],
    // Mevcut gerçek fotoğraf, olduğu gibi: 1448 × 1086 (işletme tarafından doğrulanan gerçek cadde cephesi;
    // üzerindeki 0543 386 6360 numarası gerçek işletme numarasıdır).
    photo: {
      src: "/images/pages/hakkimizda-tabela-cadde.webp",
      alt: "Darıca'da Avrasya İşitme Cihazları merkezinin cadde cephesi: İşitme Cihazları Satış ve Uygulama Merkezi, İşitme Testi ve SGK anlaşması tabelaları",
      width: 1448,
      height: 1086,
    },
    links: [{ label: "Darıca işitme cihazları sayfası", href: "/darica-isitme-cihazlari/" }],
  },
  {
    id: "gebze-cayirova",
    variant: "hours",
    layout: "split",
    eyebrow: "Gebze · Çayırova",
    heading: "Gebze ve Çayırova'dan Gelenler",
    lead:
      "Gebze ve Çayırova'da şubemiz yoktur; bu ilçelerden gelen danışanlarımız işitme testi için Darıca'daki merkezimize randevuyla gelir. Darıca, Gebze'ye bitişik olduğundan ulaşım kolaydır.",
    paragraphs: [
      "Çalışan, aile bakımı üstlenen ya da hafta içi vakti kısıtlı biri için randevu zamanını doğru seçmek önemlidir. Merkezimiz hafta içi ve cumartesi günü açıktır; çalışma saatleri yandaki kartta.",
      "Sonuçlar görüşmede sizinle birlikte değerlendirildiği için acele etmeden vakit ayırabileceğiniz bir saat seçmenizi öneririz. İsterseniz bir yakınınızla birlikte gelebilirsiniz.",
    ],
    links: [
      { label: "Gebze işitme cihazları sayfası", href: "/gebze-isitme-cihazlari/" },
      { label: "Çayırova işitme cihazları sayfası", href: "/cayirova-isitme-cihazlari/" },
    ],
  },
  {
    id: "kocaeli",
    variant: "channels",
    eyebrow: "Kocaeli",
    heading: "Kocaeli'nin Diğer İlçelerinden",
    lead:
      "Kocaeli'nin diğer ilçelerinden gelenler de aynı merkezden randevu alabilir; gelmeden önce sorularınızı telefon veya WhatsApp ile iletebilirsiniz.",
    paragraphs: [],
    links: [
      { label: "Kocaeli işitme cihazları sayfası", href: "/kocaeli-isitme-cihazlari/" },
      { label: "Bilgi merkezi", href: "/bilgi-merkezi/" },
    ],
  },
];
