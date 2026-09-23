// "Pil ve Aksesuar Seçenekleri Nelerdir?" section for the
// /servis-bakim/pil-aksesuar page. Renders through the shared
// BrandPageIntro component. Product-info genre, distinct from the
// appointment-based Uygulama & Ayar and Servis & Bakım siblings — no
// self-diagnosis disclaimer; paragraph 4 sets the honest expectation
// that exact compatibility depends on your specific device model.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const pilAksesuarIntro: BrandPageIntroContent = {
  badge: "PİL VE AKSESUAR SEÇENEKLERİ NELERDİR?",
  heading: "Pil ve Aksesuar Seçenekleri Nelerdir?",
  paragraphs: [
    "İşitme cihazları genellikle iki ana güç kaynağıyla çalışır: tek kullanımlık çinko-hava piller veya yeniden şarj edilebilen lityum-iyon sistemler.",
    "Aksesuarlar ise saklama kutuları, temizlik kitleri, tutucu klips ve kordonlar ile yedek kulak ucu veya filtre stoklarını kapsar.",
    "Hangi pil türünün veya aksesuarın size uygun olduğu, cihaz modelinize ve günlük kullanım alışkanlığınıza göre değişir.",
    "Kesin uyumluluk, cihaz markanıza ve modelinize göre değişir; size uygun seçenekleri randevunuzda birlikte belirleriz.",
  ],
  stats: [
    { value: "Çinko-Hava veya Şarjlı", label: "İki Ana Seçenek" },
    { value: "Saklama ve Temizlik Kiti", label: "Temel Aksesuarlar" },
    { value: "Modelinize Göre Değişir", label: "Uyumluluk" },
    { value: "Kişiye Özel Öneri", label: "Yaklaşımımız" },
  ],
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
};
