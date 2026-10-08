// Kocaeli landing page — SSS (Faz 2 P2, Kocaeli V1). Yalnızca bölgesel
// niyete (şube, evde hizmet alanı, ulaşım) ait 3 soru. Cihaz türü, fiyat,
// SGK tutarı, şarj/Bluetooth, alışma ve ayar soruları kendi pillar
// sayfalarına aittir ve buraya taşınmaz. Hat zaman notu ilçe listesinde
// bir kez verilir; burada tekrarlanmaz.
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const kocaeliFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Kocaeli'den Gelenlerin Soruları",
  intro: "Merkez, evde hizmet ve ulaşım hakkında kısa cevaplar.",
  categories: [
    {
      label: "Merkez ve Ulaşım",
      items: [
        {
          question: "Kocaeli'nin başka ilçelerinde şubeniz var mı?",
          answer: "Hayır. Tek fiziksel merkezimiz Darıca'dadır; diğer ilçelerden gelen danışanlarımıza burada hizmet veriyoruz.",
        },
        {
          question: "Hangi ilçelerden hangi hatla gelebilirim?",
          answer: "Gebze, Çayırova, Beylikbağı, Dilovası ve Mutlukent için hat numaraları bu sayfadaki ilçe listesinde yer alıyor.",
        },
        {
          question: "Evde hizmeti hangi bölgelerde veriyorsunuz?",
          answer: "Kocaeli'nin tamamında ve İstanbul Anadolu Yakası'nın tüm ilçelerinde. Hizmet ücretsizdir ve randevuyla planlanır.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
