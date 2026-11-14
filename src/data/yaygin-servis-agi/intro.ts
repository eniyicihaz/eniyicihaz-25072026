// "Yaygın Servis Ağı Nedir ve Neden Önemlidir?" section for the
// /neden-orijinal/yaygin-servis-agi page. Renders through the shared
// BrandPageIntro component. Same trust-topic genre as the two prior
// pages — no self-diagnosis disclaimer here since the subject is service
// infrastructure, not hearing health; paragraph 4 states the practical
// takeaway (mobility/travel benefit) the page builds toward.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const yayginServisAgiIntro: BrandPageIntroContent = {
  badge: "BAKIM VE TEKNİK DESTEK",
  heading: "Bakım ve Teknik Destek Neden Önemlidir?",
  paragraphs: [
    "Servis desteği; cihazınızın bakım, temizlik, onarım ve garanti işlemleri için ulaşabileceğiniz teknik destektir.",
    "Yapılacak işlem cihazın markasına, modeline ve arızanın türüne göre belirlenir. Garanti kapsamı ise cihazın garanti şartlarına ve arızanın niteliğine bağlıdır.",
    "Orijinal olmayan veya paralel ithal ürünler genellikle üretici garantisi kapsamı dışında kalır; bu durum, arıza anında destek bulmayı zorlaştırabilir.",
    "Bakım ve teknik destek seçenekleri cihazınızın markasına ve modeline göre değişir; ayrıntılı bilgiyi Darıca'daki merkezimizden alabilirsiniz.",
  ],
  stats: [
    { value: "Farklı Marka ve Modeller", label: "Bakım ve Teknik Destek" },
    { value: "Darıca", label: "Fiziksel Hizmet Noktası" },
    { value: "Garanti Şartlarına Göre", label: "Kapsam Değerlendirmesi" },
    { value: "İşlemden Önce", label: "Kapsam ve Ücret Bilgisi" },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
