// "Garanti İşlemleri Nedir ve Neyi Kapsar?" section for the
// /servis-bakim/garanti-islemleri page. Renders through the shared
// BrandPageIntro component. Service-process genre, same as the four
// prior siblings — no self-diagnosis disclaimer; paragraph 4 draws the
// explicit line between this page (defect coverage) and Kolay Değişim
// (satisfaction-based exchange).

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const garantiIslemleriIntro: BrandPageIntroContent = {
  badge: "GARANTİ İŞLEMLERİ NEDİR?",
  heading: "Garanti İşlemleri Nedir ve Neyi Kapsar?",
  paragraphs: [
    "Garanti işlemleri, cihazınızda üretim kaynaklı bir kusur tespit edildiğinde, üreticinin sunduğu garanti kapsamında onarım veya parça değişimi talep edebileceğiniz resmi bir süreçtir.",
    "Garanti kapsamı yalnızca üretim kaynaklı sorunları içerir; su teması, düşme veya yetkisiz müdahale gibi kullanıcı kaynaklı hasarlar genellikle kapsam dışında kalır.",
    "Garanti talebinde bulunmak için satın alma faturanız ve garanti belgeniz gereklidir; bu belgeler süreç boyunca saklanmalıdır.",
    "Garanti işlemleri, beklentilerinizi karşılamayan veya ihtiyacınız değişen bir cihaz için model değişimi sunan Kolay Değişim güvencemizden farklıdır; o süreç hakkında Kolay Değişim sayfamızdan bilgi alabilirsiniz.",
  ],
  stats: [
    { value: "Üretim Kaynaklı Sorunlar", label: "Kapsam" },
    { value: "Fatura ve Garanti Belgesi", label: "Gerekli Belgeler" },
    { value: "Yetkili Kanal Şartı", label: "Geçerlilik Koşulu" },
    { value: "Şeffaf Süreç", label: "Yaklaşımımız" },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
