// "SGK desteği ve katkı payı nasıl oluşur?" paneli — SgkKatkiPayiHero'nun sağ kolonu
// (/sgk/katki-payi). Bu bir hesaplama aracı DEĞİLDİR: hiçbir tutar, oran veya geri ödeme
// vaadi içermez; yalnızca sayfanın kendi içeriğindeki (intro.ts, factors/use-cases) genel
// mekanizmayı üç adımda özetler. Güncel TL tutarları ana SGK rehberindedir
// (/sgk-isitme-cihazi-odemesi/, id: sgk-payments-title); bu sayfa kasıtlı olarak sayı vermez.

export type SgkKatkiPayiStepTone = "price" | "sgk" | "remaining";

export interface SgkKatkiPayiHeroStep {
  tone: SgkKatkiPayiStepTone;
  title: string;
  text: string;
}

export interface SgkKatkiPayiHeroPanel {
  title: string;
  steps: SgkKatkiPayiHeroStep[];
  disclaimer: string;
  link: { label: string; href: string };
}

export const sgkKatkiPayiHeroPanel: SgkKatkiPayiHeroPanel = {
  title: "SGK desteği ve katkı payı nasıl oluşur?",
  steps: [
    {
      tone: "price",
      title: "İşitme cihazının satış fiyatı",
      text: "Seçtiğiniz model ve donanıma göre belirlenir.",
    },
    {
      tone: "sgk",
      title: "SGK'nın karşıladığı tutar",
      text: "Yaş grubunuza ve çalışan veya emekli olma durumunuza göre belirlenen destek tutarıdır.",
    },
    {
      tone: "remaining",
      title: "Kişiye kalan ödeme",
      text: "Cihaz fiyatı ile SGK desteği arasındaki fark; cihaz bedeline ve geçerli desteğe göre değişebilir.",
    },
  ],
  disclaimer:
    "Bu şema genel bilgidir, hesaplama aracı değildir. Size özel tutarı randevunuzda birlikte netleştiririz.",
  link: { label: "Güncel SGK tutarlarını görün", href: "/sgk-isitme-cihazi-odemesi/#sgk-payments-title" },
};
