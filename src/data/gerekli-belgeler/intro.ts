// "Gerekli Belgeler Nelerdir?" section for the /sgk/gerekli-belgeler
// page. Renders through the shared BrandPageIntro component.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const gerekliBelgelerIntro: BrandPageIntroContent = {
  badge: "GEREKLİ BELGELER NELERDİR?",
  heading: "SGK Başvurusu İçin Gerekli Belgeler Nelerdir?",
  paragraphs: [
    "SGK işitme cihazı başvurunuzun temelini sağlık kurulu raporu ve uzman hekim reçetesi oluşturur; bu iki belgenin nasıl alındığını Rapor Süreci sayfamızda ayrıntılı olarak anlatıyoruz.",
    "Bu iki temel belgeye ek olarak, kimlik belgeniz ve SGK'ya kayıtlı bilgilerinizin güncel olması da başvurunun sorunsuz ilerlemesi için önemlidir.",
    "Çocuklar, emekliler veya cihaz yenileyen kullanıcılar gibi bazı gruplar için ek belgeler istenebilir; bu farklar duruma göre değişebilir.",
    "Bu sayfa, belge kategorilerini genel hatlarıyla anlatır; size özel güncel ve eksiksiz belge listesi için randevunuzda merkezimizden veya Rapor Süreci sayfamızdan bilgi alabilirsiniz.",
  ],
  stats: [
    { value: "Rapor + Reçete", label: "Temel Belgeler" },
    { value: "Kimlik Bilgileri", label: "SGK Kaydı" },
    { value: "Duruma Göre Değişir", label: "Ek Belgeler" },
    { value: "Randevuda Netleşir", label: "Kesin Liste" },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
