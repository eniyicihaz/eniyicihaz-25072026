// "Görünmez (CIC) Nedir?" + "Diğer Kulak İçi Tiplerinden Farkı" section
// for the /isitme-cihazlari/gorunmez-cic page. Renders through the shared
// BrandPageIntro component. The "farkı nedir" explanation is folded into
// this same section's paragraphs, same technique the ITE/Şarj
// Edilebilir/Bluetooth/Çocuklara Özel pages use.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const gorunmezCicIntro: BrandPageIntroContent = {
  badge: "GÖRÜNMEZ (CIC) NEDİR?",
  heading: "Görünmez (CIC) İşitme Cihazı Nedir ve Diğer Kulak İçi Tiplerinden Farkı Nedir?",
  paragraphs: [
    "Görünmez (CIC – Completely-In-Canal) işitme cihazı, kulak kanalının derinlerine, kulak zarına yakın bir noktaya yerleşen, kulak içi (ITE) ailesinin en küçük alt tipidir.",
    "IIC (Invisible-In-Canal) adı verilen bir üst-alt tip ise kanalın daha da derinine yerleşerek CIC'den bile daha az görünür bir yerleşim sunabilir.",
    "Küçük gövdesi nedeniyle sınırlı bileşen alanına sahiptir; bu da ses gücü kapasitesini ve bazı ek özellikleri (örneğin yönlü mikrofon) diğer kulak içi tiplerine kıyasla sınırlayabilir.",
    "Kulak kanalınıza özel üretildiğinden, öncesinde kulak izi alınması ve kanal boyutunuzun uygunluğunun değerlendirilmesi gerekir.",
  ],
  stats: [
    { value: "Kanalın Derinlerinde", label: "Yerleşim Konumu" },
    { value: "Hafif – Orta/İleri Derece", label: "Uygun İşitme Kaybı Aralığı" },
    { value: "10A / 10", label: "Tipik Pil Boyutu" },
    { value: "Kulak İzine Özel", label: "Üretim Yöntemi" },
  ],
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
};
