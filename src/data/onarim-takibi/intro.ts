// "Onarım Takibi Nedir ve Neyi Kapsar?" section for the /servis-bakim/
// onarim-takibi page. Renders through the shared BrandPageIntro
// component. Service-process genre, same as the five prior siblings —
// no self-diagnosis disclaimer; paragraph 4 is the honest boundary:
// tracking reflects general stages, not minute-by-minute status, and
// delays beyond the expected window should be raised proactively.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const onarimTakibiIntro: BrandPageIntroContent = {
  badge: "ONARIM TAKİBİ NASIL İŞLER?",
  heading: "Onarım Takibi Nasıl İşler?",
  paragraphs: [
    "Cihazınız bize teslim edildiğinde dijital bir servis kaydı oluşturulur; süreç ilerledikçe durum bilgisi bu kayıt üzerinden takip edilir.",
    "Kayıt personelimiz tarafından kullanılır; internet üzerinden kendi kaydınızı görüntüleyebileceğiniz bir sistem değildir.",
    "Gerektiğinde personelimiz SMS veya WhatsApp aracılığıyla sizi manuel olarak bilgilendirir. Bu, her aşamada otomatik bir mesaj gönderileceği anlamına gelmez.",
    "Güncel durumu öğrenmek için bizi telefonla arayabilir veya WhatsApp'tan yazabilirsiniz. Beklenen süreden belirgin bir gecikme fark ederseniz de bizimle iletişime geçmenizi öneririz.",
  ],
  stats: [
    { value: "Dijital Servis Kaydı", label: "Cihaz Teslim Edildiğinde" },
    { value: "SMS / WhatsApp", label: "Gerektiğinde Manuel Bilgilendirme" },
    { value: "Telefon / WhatsApp", label: "Durum Sorma Kanalları" },
    { value: "Genel Aşamalar", label: "Dakika Dakika İzleme Değildir" },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
