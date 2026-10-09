// Gebze landing page — SSS (Gebze sade sürüm). 5 soru; cevaplar gövdede ayrıntısı
// verilmeyen YENİ bilgi taşır (ilk ziyaret adımları, rapor/reçete yokken sıra,
// çocuk testi, arıza süreci) veya zorunlu entity cevabıdır (şube yok).
// Kaynak: LOCAL_SOURCE_OF_TRUTH §1/§5; SERVICE_SOURCE_OF_TRUTH H1/H4/H17/H21/
// §2.5–§2.9/§2.15. Hastane adı, mesafe, güzergâh, fiyat/SGK tutarı YAZILMAZ.
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const gebzeFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Gebze'den Gelenlerin Sık Sorduğu Sorular",
  intro: "Gövdede ayrıntısı olmayan sorular için kısa cevaplar.",
  categories: [
    {
      label: "Sık Sorulanlar",
      items: [
        {
          question: "Gebze'de şubeniz var mı?",
          answer:
            "Hayır. Tek fiziksel merkezimiz Darıca'dadır; Gebze'den gelen danışanlarımızı Darıca'daki merkezimizde ağırlıyoruz.",
        },
        {
          question: "İlk ziyarette neler yapılır?",
          answer:
            "Önce talepleriniz sorulur ve kısa bir öykü alınır; sonra işitme testi yapılır (güncel testiniz varsa onun üzerinden ilerlenir). İşitme kaybı varsa cihaz seçimi ve demoya geçilir; şüpheli bir durum varsa KBB hekimine yönlendirme yapılır. Süre işlemlere göre yaklaşık 1–2 saattir ve kesin bir taahhüt değildir.",
        },
        {
          question: "Raporum veya reçetem henüz yoksa ne yapmalıyım?",
          answer:
            "Gelmeden önce arayın. İki sıradan biri izlenebilir: önce merkeze gelip rapor, reçete ve testi sonra temin etmek ya da önce işitme testini yaptırıp satın alma başladığında rapor ve reçeteyi almak. Hangisinin size uygun olduğunu birlikte belirleriz.",
        },
        {
          question: "Çocuğum için işitme testi yaptırabilir miyim?",
          answer:
            "Evet. 3 yaş ve üstü çocuklar için oyun odyometrisi yapılır; bu test ücretlidir ve randevu gerekir. Ücretsiz işitme testi 5 yaş ve üstü içindir.",
        },
        {
          question: "Cihazım arızalanırsa ne yapmalıyım?",
          answer:
            "Randevu için arayın ve cihazınızı getirin. Teknik servis genellikle 3 gün içinde tamamlanır; garanti kapsamındaki cihazlar gerektiğinde dış servise gönderilir. Her sorun uzaktan veya evde çözülemeyebilir.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
