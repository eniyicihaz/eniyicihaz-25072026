// "Kulak İçi (ITE) Nedir?" + "Nasıl Çalışır?" section for the
// /isitme-cihazlari/kulak-ici-ite page. Renders through the shared
// BrandPageIntro component. The "nasıl çalışır" explanation is folded
// into this same section's paragraphs (ITE's working principle is a
// natural extension of its definition — a dedicated component wasn't
// warranted for it, keeping the page inside BTE's existing component set).

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const kulakIciIntro: BrandPageIntroContent = {
  badge: "KULAK İÇİ (ITE) NEDİR?",
  heading: "Kulak İçi İşitme Cihazı (ITE) Nedir ve Nasıl Çalışır?",
  paragraphs: [
    "Kulak içi işitme cihazı (İngilizce kısaltmasıyla ITE — In-The-Ear), elektronik bileşenlerin tamamının kulağınızın şekline özel üretilen tek parça bir kabuk içine yerleştirildiği işitme cihazı tipidir.",
    "Kulak arkası (BTE) cihazlardan farklı olarak ayrı bir dış gövde veya tüp taşımaz; mikrofon, ses işlemcisi ve hoparlör (alıcı) aynı kulak içi kabuğun içinde bir araya gelir.",
    "Çalışma prensibi şöyledir: kabuktaki mikrofon ortam sesini toplar, dahili işlemci sesi işitme kaybınıza göre işler ve yine aynı kabuktaki hoparlör işlenmiş sesi doğrudan kulak kanalına iletir.",
    "Kabuğun boyutu küçüldükçe (tam kabuk ITE'den, kulak kanalının derinlerine yerleşen IIC'ye doğru) görünürlük azalır; ancak pil boyutu ve barındırabildiği teknoloji de buna bağlı olarak küçülür.",
  ],
  stats: [
    { value: "Hafif → Orta-İleri Derece", label: "Uygun Kayıp Aralığı" },
    { value: "Genellikle Yetişkinler", label: "Kullanım Yaş Grubu" },
    { value: "Pilli / Bazı Modelde Şarjlı", label: "Güç Seçenekleri" },
    { value: "ITE / ITC / CIC / IIC", label: "Başlıca Alt Tipler" },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
