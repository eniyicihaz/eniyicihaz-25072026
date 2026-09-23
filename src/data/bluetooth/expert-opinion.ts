// "Uzman Yorumu" section for the /isitme-cihazlari/bluetooth-ozellikli
// page. Renders through the shared BrandPageExpertOpinion component.
// Framed as the clinic's own general assessment, not a named/personal
// testimonial — same safe pattern used on the BTE/ITE/Şarj Edilebilir
// master pages.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const bluetoothExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Bluetooth özellikli işitme cihazları; telefon, TV ve uygulama üzerinden bağlantıyı aktif kullanan, teknolojiye yatkın kullanıcılarda sunduğu kullanım kolaylığı nedeniyle klinik pratiğimizde sıkça değerlendirdiğimiz bir özelliktir.",
  note: "Ancak bağlantı özelliği tek başına yeterli değildir; cihaz tipi, işitme kaybınızın derecesi ve günlük teknoloji kullanımınız birlikte değerlendirilmelidir.",
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
