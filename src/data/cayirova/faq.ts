// Çayırova landing page — SSS (Faz 2 P2, Çayırova V1). Yalnızca Çayırova
// kullanıcısına özgü, doğrulanmış 3 soru. Randevusuz ziyaret bilgisi
// "gelmeden önce" notuna, deneme bilgisi ilgili hizmet sayfasına bırakıldı;
// Gebze SSS'inin soru/cevapları kopyalanmıyor.
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const cayirovaFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Çayırova'dan Gelecekler İçin",
  intro: "Merkez, ulaşım ve evde hizmet hakkında kısa cevaplar.",
  categories: [
    {
      label: "Merkez ve Ulaşım",
      items: [
        {
          question: "Çayırova'da merkeziniz var mı?",
          answer: "Hayır, Çayırova'da şubemiz bulunmuyor. Tek fiziksel merkezimiz Darıca'dadır; tüm hizmetlerimizi orada veriyoruz.",
        },
        {
          question: "Çayırova'dan hangi hatla gelebilirim?",
          answer: "Çayırova'dan merkezimize 550 numaralı hatla ulaşabilirsiniz. Hat bilgileri değişebileceği için yola çıkmadan önce kontrol etmenizi öneririz.",
        },
        {
          question: "Evime gelerek hizmet veriyor musunuz?",
          answer: "Evet. Evde hizmetimiz Kocaeli genelini kapsar; Çayırova da bu alandadır. Hizmet ücretsizdir ve randevuyla planlanır.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
