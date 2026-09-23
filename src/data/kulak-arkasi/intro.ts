// "Kulak Arkası (BTE) Nedir?" section for the /isitme-cihazlari/
// kulak-arkasi-bte page. Renders through the shared BrandPageIntro
// component (editorial copy + stat list), same pattern brand pages use
// for their "brand story" section.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const kulakArkasiIntro: BrandPageIntroContent = {
  badge: "KULAK ARKASI (BTE) NEDİR?",
  heading: "Kulak Arkası İşitme Cihazı (BTE) Nedir?",
  paragraphs: [
    "Kulak arkası işitme cihazı (İngilizce kısaltmasıyla BTE — Behind-The-Ear), elektronik bileşenlerin tamamının kulak kepçesinin arkasına yerleşen bir gövde içinde toplandığı işitme cihazı tipidir.",
    "Gövdede işlenen ses; ince bir tüp aracılığıyla kulak kanalına yerleştirilen kişiye özel bir kalıba veya kulak kanalındaki ayrı bir alıcıya (RIC/ince tüp modellerde) iletilir.",
    "Daha büyük gövdesi sayesinde daha güçlü bir hoparlör, daha uzun ömürlü pil ve daha fazla teknolojik özellik barındırabilir; bu nedenle hafif kayıplardan çok ileri derece kayıplara kadar geniş bir yelpazede kullanılabilir.",
  ],
  stats: [
    { value: "Hafif → Çok İleri", label: "Uygun Kayıp Aralığı" },
    { value: "0 - 99 Yaş", label: "Kullanılabilir Yaş Aralığı" },
    { value: "Pilli / Şarjlı", label: "Güç Seçenekleri" },
    { value: "BTE / RIC", label: "Başlıca Alt Tipler" },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
