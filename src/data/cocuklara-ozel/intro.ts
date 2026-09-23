// "Çocuklara Özel Nedir?" + "Nasıl Farklıdır?" section for the
// /isitme-cihazlari/cocuklara-ozel page. Renders through the shared
// BrandPageIntro component. The "nasıl farklıdır" explanation is folded
// into this same section's paragraphs, same technique the ITE/Şarj
// Edilebilir/Bluetooth pages use.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const cocuklaraOzelIntro: BrandPageIntroContent = {
  badge: "ÇOCUKLARA ÖZEL NEDİR?",
  heading: "Çocuklara Özel İşitme Cihazı Nedir ve Yetişkin Cihazlarından Farkı Nedir?",
  paragraphs: [
    "Çocuklara özel işitme cihazı, belirli bir fiziksel cihaz tipi değildir; çocuk kullanıcıların ihtiyaçlarına göre ek güvenlik önlemleri ve dayanıklılık özellikleriyle donatılmış kulak arkası (BTE) modelleridir.",
    "Kulak arkası (BTE) tipi, büyüyen kulağa kolayca uyarlanabilen kalıp değişimi imkânı nedeniyle çocuklarda en sık tercih edilen cihaz tipidir.",
    "Standart yetişkin modellerinden temel farkı; kilitli pil kapağı, daha dayanıklı gövde, renkli tasarım seçenekleri ve okul ortamına yönelik Roger/FM sistem uyumluluğudur.",
    "Cihazın kapsamı ve özellikleri, çocuğun yaşına, işitme kaybının derecesine ve yaşam tarzına göre bir odyometrist tarafından belirlenir.",
  ],
  stats: [
    { value: "Yenidoğan Taraması Sonrası", label: "Tipik Erken Tanı Süreci" },
    { value: "Kilitli Pil Kapağı", label: "Öne Çıkan Güvenlik Özelliği" },
    { value: "Kulak Arkası (BTE)", label: "En Sık Tercih Edilen Cihaz Tipi" },
    { value: "Yaşa Göre Değişir", label: "Kalıp Yenileme Sıklığı" },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
};
