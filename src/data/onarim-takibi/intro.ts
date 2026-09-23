// "Onarım Takibi Nedir ve Neyi Kapsar?" section for the /servis-bakim/
// onarim-takibi page. Renders through the shared BrandPageIntro
// component. Service-process genre, same as the five prior siblings —
// no self-diagnosis disclaimer; paragraph 4 is the honest boundary:
// tracking reflects general stages, not minute-by-minute status, and
// delays beyond the expected window should be raised proactively.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const onarimTakibiIntro: BrandPageIntroContent = {
  badge: "ONARIM TAKİBİ NEDİR?",
  heading: "Onarım Takibi Nedir ve Neyi Kapsar?",
  paragraphs: [
    "Onarım takibi, Teknik Servis veya Garanti İşlemleri kapsamında bize teslim ettiğiniz cihazınızın sürecini adım adım görebilmenizi sağlayan bir hizmettir.",
    "Cihazınız teslim alındığı andan itibaren bir takip kaydı oluşturulur; teşhis, onarım ve kalite kontrolü gibi önemli aşamalarda durumu güncellenir.",
    "Önemli aşama değişikliklerinde SMS veya WhatsApp üzerinden bilgilendirilirsiniz; ayrıca istediğiniz zaman bizi arayarak güncel durumu öğrenebilirsiniz.",
    "Takip, genel aşamaları gösterir; dakika dakika bir izleme değildir. Beklenen süreden belirgin bir gecikme fark ederseniz, bizimle iletişime geçmenizi öneririz.",
  ],
  stats: [
    { value: "Aşama Aşama Görünürlük", label: "Temel Amaç" },
    { value: "SMS / WhatsApp", label: "Bildirim Kanalı" },
    { value: "Teslim Alma ile Başlar", label: "İlk Adım" },
    { value: "Tahmini Süre", label: "Beklenti Yönetimi" },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
