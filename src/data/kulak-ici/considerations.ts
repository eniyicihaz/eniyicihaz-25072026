// "Dikkat Edilmesi Gerekenler" section for the /isitme-cihazlari/
// kulak-ici-ite page. Reuses the shared BrandPageIdealUser component
// (icon + title + description + tag chips grid), same technique the BTE
// master page uses for its own considerations section — visually
// differentiated from the "Kimler İçin Uygun" section above by using the
// design system's own --color-warning token (#d97706) instead of the
// page's violet accent, so the two sections read as distinct despite
// sharing markup.

import { Baby, Droplets, SprayCan, Radio, Ruler } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const kulakIciConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "ITE Seçerken Dikkat Edilmesi Gereken Noktalar",
  intro: "ITE, görünürlük ve kullanım kolaylığı açısından güçlü bir seçenektir; yine de kulak yapınıza ve yaşam tarzınıza göre değerlendirmeniz gereken birkaç pratik nokta vardır.",
  profiles: [
    {
      icon: Baby,
      title: "Çocuk Kullanıcılar",
      description: "Kişiye özel, sabit bir kalıpla üretildiğinden büyümekte olan kulak kanalına uyum sağlamaz; bu nedenle çocuklarda genellikle önerilmez.",
      suggestedFamilies: ["Çocuklarda BTE Önerilir"],
    },
    {
      icon: Droplets,
      title: "Yoğun Terleyenler",
      description: "Kulak kanalı içindeki konumu nedeniyle nem ve tere BTE'ye göre daha yakındır; günlük kurutma alışkanlığı önerilir.",
      suggestedFamilies: ["Kurutma Kutusu"],
    },
    {
      icon: SprayCan,
      title: "Kulak Kiri Üretimi Yoğun Olanlar",
      description: "Kulak kanalı içinde yer aldığından kulak kirine daha fazla maruz kalabilir; düzenli temizlik ve filtre kontrolü gerekir.",
      suggestedFamilies: ["Haftalık Temizlik", "Kulak Kiri Filtresi"],
    },
    {
      icon: Radio,
      title: "En Küçük Alt Tipleri (CIC / IIC) Değerlendirenler",
      description: "Gövde küçüldükçe pil ömrü kısalabilir ve Bluetooth gibi bazı özellikler model bazında sınırlanabilir.",
      suggestedFamilies: ["CIC", "IIC"],
    },
    {
      icon: Ruler,
      title: "Kulak Kanalı Dar veya Değişken Olanlar",
      description: "Kulak kanalı yapısı çok dar veya sık değişkenlik gösteren kullanıcılarda kişiye özel kalıbın oturması zorlaşabilir.",
      suggestedFamilies: ["Odyometrist Değerlendirmesi"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
