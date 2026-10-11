// "Yaygın Servis Ağı Nedir ve Neden Önemlidir?" section for the
// /neden-orijinal/yaygin-servis-agi page. Renders through the shared
// BrandPageIntro component. Same trust-topic genre as the two prior
// pages — no self-diagnosis disclaimer here since the subject is service
// infrastructure, not hearing health; paragraph 4 states the practical
// takeaway (mobility/travel benefit) the page builds toward.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const yayginServisAgiIntro: BrandPageIntroContent = {
  badge: "ÜRETİCİ YETKİLİ SERVİS",
  heading: "Üretici Yetkili Servis Desteği Neden Önemlidir?",
  paragraphs: [
    "Servis desteği; cihazınızın bakım, temizlik, onarım ve garanti işlemleri için ulaşabileceğiniz teknik destektir.",
    "Üretici yetkisi, servis işlemlerinin üreticinin garanti ve servis koşullarına uygun yürütülebilmesi anlamına gelir. Garanti kapsamı ise cihazın garanti şartlarına ve arızanın niteliğine bağlıdır.",
    "Orijinal olmayan veya paralel ithal ürünler genellikle üretici garantisi kapsamı dışında kalır; bu durum, arıza anında destek bulmayı zorlaştırabilir.",
    "Avrasya İşitme'nin 18 markanın tamamı için üretici servis yetkisi bulunmaktadır; fiziksel hizmet noktamız Darıca'daki merkezimizdir.",
  ],
  stats: [
    { value: "18 Marka", label: "Üretici Servis Yetkisi" },
    { value: "Darıca", label: "Fiziksel Hizmet Noktası" },
    { value: "Garanti Şartlarına Göre", label: "Kapsam Değerlendirmesi" },
    { value: "İşlemden Önce", label: "Kapsam ve Ücret Bilgisi" },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
