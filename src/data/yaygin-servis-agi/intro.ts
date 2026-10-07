// "Yaygın Servis Ağı Nedir ve Neden Önemlidir?" section for the
// /neden-orijinal/yaygin-servis-agi page. Renders through the shared
// BrandPageIntro component. Same trust-topic genre as the two prior
// pages — no self-diagnosis disclaimer here since the subject is service
// infrastructure, not hearing health; paragraph 4 states the practical
// takeaway (mobility/travel benefit) the page builds toward.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const yayginServisAgiIntro: BrandPageIntroContent = {
  badge: "SERVİS DESTEĞİ NEDİR?",
  heading: "Servis Desteği Nedir ve Neden Önemlidir?",
  paragraphs: [
    "Servis desteği; cihazınızın bakım, temizlik, onarım ve garanti işlemleri için ulaşabileceğiniz teknik destektir.",
    "Orijinal ürünlerde garanti kapsamındaki işlemler üreticinin garanti koşullarına göre yürütülür.",
    "Orijinal olmayan veya paralel ithal ürünler genellikle üretici garantisi kapsamı dışında kalır; bu durum, arıza anında destek bulmayı zorlaştırabilir.",
    "Avrasya İşitme'de sattığımız 18 markanın tamamında Darıca'daki merkezimizde teknik servis veriyoruz.",
  ],
  stats: [
    { value: "18 Marka", label: "Teknik Servis Kapsamı" },
    { value: "3 Gün İçinde", label: "Teknik Servis Teslimi" },
    { value: "1–3 Gün", label: "Onarım Teslimi" },
    { value: "Ücretsiz", label: "Garanti İşlemleri" },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
