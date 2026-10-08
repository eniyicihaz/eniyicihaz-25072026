// Darıca hub — "SGK İşlemleri Merkezimizde Nasıl Yürür?" (ValueGrid, 3 kart).
// Eski jenerik kartlar (rehberlik / katkı payı / yenileme) yerine merkezdeki
// gerçek işleyiş. Kaynak: SERVICE_SOURCE_OF_TRUTH §3 (işlemler merkez
// tarafından yürütülüyor; destek tablosu gösterilip sözlü açıklanıyor; kalan
// tutar açıklanıyor), H24 (SGK desteği ücretsiz, randevu gerekmez), §2.9
// (iki başlangıç senaryosu), §2.15 (merkez içi süre SGK'lı/SGK'sız aynı).
// BİLİNÇLİ OLARAK YOK: tutarlar, hastane adları, kurul/rapor prosedürü,
// yenileme süresi, katkı payı mantığı — resmî doğrulama / kullanıcı bilgisi
// bekliyor (SERVICE_SOT §3). Ayrıntı için sayfada SGK pillar linki var.
import { HandHelping, Receipt, GitBranch } from "lucide-astro";
import type { ValueGridContent } from "../../components/shared/ValueGrid/ValueGrid.astro";

export const daricaSgk: ValueGridContent = {
  badge: "SGK İŞLEMLERİ",
  heading: "SGK İşlemleri Merkezimizde Nasıl Yürür?",
  intro: "SGK anlaşmalı merkezimizde SGK işlemleriniz merkezimiz tarafından yürütülür.",
  items: [
    {
      icon: HandHelping,
      title: "Ücretsiz ve Randevusuz Destek",
      description: "SGK işlemlerindeki desteğimiz ücretsizdir ve randevu gerektirmez.",
    },
    {
      icon: Receipt,
      title: "Destek Tablosu ve Kalan Tutar",
      description: "SGK destek tablosunu merkezimizde gösterip açıklıyor, sizin ödeyeceğiniz kalan tutarı netleştiriyoruz.",
    },
    {
      icon: GitBranch,
      title: "İki Başlangıç Yolu",
      description:
        "Önce merkezimize gelip rapor, reçete ve işitme testini sonradan tamamlayabilir ya da işitme testinizi yaptırdıktan sonra gelebilirsiniz. Merkezdeki işlem süresi SGK'lı ve SGK'sız danışanlar için aynıdır.",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
};
