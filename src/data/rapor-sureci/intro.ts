// "Rapor Süreci Nedir?" section for the /sgk/rapor-sureci page.
// Renders through the shared BrandPageIntro component.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const raporSureciIntro: BrandPageIntroContent = {
  badge: "RAPOR SÜRECİ NEDİR?",
  heading: "SGK İşitme Cihazı Raporu Nedir?",
  paragraphs: [
    "SGK işitme cihazı raporu, işitme kaybınızın derecesini ve cihaz ihtiyacınızı belgeleyen, tam teşekküllü bir hastanenin sağlık kurulu (heyet) tarafından düzenlenen resmi bir belgedir.",
    "Bu rapor, SGK'nın işitme cihazı desteğinden yararlanabilmeniz için gereken temel şartlardan biridir; raporsuz bir başvuru SGK tarafından değerlendirmeye alınmaz.",
    "Rapora ek olarak, uzman hekim tarafından düzenlenmiş bir işitme cihazı reçetesine de ihtiyaç duyulur; bu iki belge birlikte SGK başvurunuzun temelini oluşturur.",
    "Bu sayfa, rapor sürecinin genel aşamalarını anlatır; başvuru için gereken belgelerin tam listesi için Gerekli Belgeler sayfamızı, güncel SGK destek tutarları için ise SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi sayfamızı inceleyebilirsiniz.",
  ],
  stats: [
    { value: "Tam Teşekküllü Hastane", label: "Rapor Merkezi" },
    { value: "KBB Uzmanları", label: "Heyet Bileşimi" },
    { value: "Rapor + Reçete", label: "İki Temel Belge" },
    { value: "e-Devlet Üzerinden", label: "Durum Sorgulama" },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
