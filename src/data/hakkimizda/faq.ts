// SSS — Hakkımızda. Renders through the existing BrandPageFaq (FAQPage
// schema auto-generated). Yalnızca sitede/company.ts'te desteklenen
// bilgiler kullanıldı.
import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const hakkimizdaFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Avrasya İşitme Cihazları Hakkında Merak Edilenler",
  intro: "Merkezimiz, hizmet bölgemiz ve çalışma şeklimiz hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Merkezimiz Hakkında Bilgi Almak İster misiniz?",
    points: ["Darıca'da SGK anlaşmalı merkez", "Marka bağımsız değerlendirme", "Satış sonrası destek", "Gebze, Çayırova'dan kolay ulaşım"],
    ctaLabel: "Bizi Arayın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        { question: "Avrasya İşitme Cihazları nerede hizmet veriyor?", answer: "Merkezimiz Darıca'dadır; Gebze ve Çayırova'dan gelen danışanlarımıza da hizmet veriyoruz." },
        { question: "Hangi işitme cihazı markalarıyla çalışıyorsunuz?", answer: "Farklı üreticilerin işitme cihazı çözümlerini değerlendirebiliyoruz; güncel marka listemizi Markalar sayfamızdan inceleyebilirsiniz." },
        { question: "İşitme cihazı aldıktan sonra ayar desteği veriyor musunuz?", answer: "Evet; cihaz tesliminden sonra da kontrol ve ayar desteği sağlıyoruz." },
        { question: "Merkeze gelmeden önce randevu almam gerekir mi?", answer: "Randevu almanızı öneririz; telefon veya WhatsApp'tan bize ulaşabilirsiniz." },
      ],
    },
    {
      label: "Bölgemizden Ulaşım",
      items: [
        { question: "Darıca'da mı hizmet veriyorsunuz?", answer: "Evet; merkezimiz Darıca'dadır." },
        { question: "Gebze'den gelip hizmet alabilir miyim?", answer: "Evet; Gebze'den randevu alarak merkezimize ulaşabilirsiniz." },
        { question: "Çayırova'dan gelip hizmet alabilir miyim?", answer: "Evet; Çayırova'dan da randevu alarak merkezimize ulaşabilirsiniz." },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
