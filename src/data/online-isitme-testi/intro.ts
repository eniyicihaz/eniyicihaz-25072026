// "Online İşitme Taraması Nedir ve Nasıl Çalışır?" section for the
// /degerlendirme/online-isitme-testi page. Renders through the shared
// BrandPageIntro component. Paragraph 2 carries the load-bearing
// technical disclaimer (no dB/dB HL — calibration of the user's
// headphones/device is unknown) and paragraph 4 the clinical-vs-online
// distinction, consistent with
// src/data/ucretsiz-isitme-testi/comparison.ts.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const onlineIsitmeTestiIntro: BrandPageIntroContent = {
  badge: "ONLINE İŞİTME TARAMASI NEDİR?",
  heading: "Online İşitme Taraması Nedir ve Nasıl Çalışır?",
  paragraphs: [
    "Online işitme taraması, kulaklığınız üzerinden farklı frekanslardaki saf ses tonlarını dinleyip \"Duydum\" veya \"Duymadım\" şeklinde yanıt verdiğiniz, tarayıcı tabanlı bir ön değerlendirmedir.",
    "Sistem, verdiğiniz yanıtlara göre her frekans için sesi göreli olarak kısar veya açar; kulaklığınızın veya cihazınızın kalibrasyonu bilinmediğinden bu, dB veya dB HL cinsinden bir ölçüm değildir — yalnızca göreli bir karşılaştırmadır.",
    "Sonuç ekranı, sağ ve sol kulağınız için frekans bazlı, tamamen nötr bir tarama özeti sunar; hiçbir tanısal yorum veya sonuç içermez.",
    "Bu tarama, Darıca'daki merkezimizde odyometrist eşliğinde yapılan profesyonel işitme testinin yerini tutmaz; yalnızca genel bir ön fikir verir ve sizi doğru adıma — bir uzmana danışmaya — yönlendirir.",
  ],
  stats: [
    { value: "3–4 Dakika", label: "Ortalama Süre" },
    { value: "5 Frekans", label: "500–8000 Hz" },
    { value: "Ücretsiz", label: "Maliyet" },
    { value: "Veri Toplanmaz", label: "Gizlilik" },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
};
