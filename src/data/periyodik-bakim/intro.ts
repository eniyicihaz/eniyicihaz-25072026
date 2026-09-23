// "Periyodik Bakım Nedir ve Neden Önemlidir?" section for the
// /servis-bakim/periyodik-bakim page. Renders through the shared
// BrandPageIntro component. Service-process genre, same as the
// Uygulama & Ayar series and Teknik Servis — no self-diagnosis
// disclaimer; paragraph 4 sets the honest boundary against the
// still-unbuilt Cihaz Temizliği sibling's daily-at-home-care scope.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const periyodikBakimIntro: BrandPageIntroContent = {
  badge: "PERİYODİK BAKIM NEDİR?",
  heading: "Periyodik Bakım Nedir ve Neden Önemlidir?",
  paragraphs: [
    "Periyodik bakım, işitme cihazınızın balmumu filtresi, tüp ve kulak ucu gibi zamanla aşınan parçalarının düzenli aralıklarla profesyonelce kontrol edilip yenilendiği bir randevudur.",
    "Aşınan bir balmumu filtresi veya tüp, sesin boğuklaşması ya da tamamen kesilmesi gibi sorunlara yol açabilir; periyodik bakım bu tür sorunları oluşmadan önce önlemeyi hedefler.",
    "Randevu sırasında cihazınız genel aşınma açısından incelenir, gerekli parçalar yenilenir ve fonksiyon testiyle her şeyin yolunda olduğu doğrulanır.",
    "Periyodik bakım, günlük ev bakımınızın yerini almaz; günlük temizlik ve saklama önerileri için Cihaz Temizliği sayfamızı inceleyebilirsiniz.",
  ],
  stats: [
    { value: "Önleyici Bakım", label: "Temel Amaç" },
    { value: "Filtre ve Tüp Yenileme", label: "Kapsam" },
    { value: "3-6 Ay Aralıkla", label: "Genel Öneri" },
    { value: "Kullanım Yoğunluğuna Göre", label: "Gerçek Sıklık" },
  ],
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
};
