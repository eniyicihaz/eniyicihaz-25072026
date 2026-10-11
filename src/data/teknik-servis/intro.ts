// "Teknik Servis Nedir ve Neyi Kapsar?" section for the /servis-bakim/
// teknik-servis page. Renders through the shared BrandPageIntro
// component. Service-process genre, same as the Uygulama & Ayar
// series — no self-diagnosis disclaimer; paragraph 4 is the honest
// boundary that some repairs require manufacturer shipping, which
// affects turnaround time.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const teknikServisIntro: BrandPageIntroContent = {
  badge: "TEKNİK SERVİS KAPSAMI",
  heading: "Teknik Servisin Kapsamı ve İşleyişi",
  paragraphs: [
    "Teknik servis kapsamında cihazınızdaki ses, güç, bağlantı veya fiziksel hasar kaynaklı sorunlar Darıca'daki merkezimizde incelenir; yapılacak işlem sorunun niteliğine göre belirlenir.",
    "Cihazınız önce merkezimizde ilk değerlendirmeden geçer; bazı sorunlar burada çözülebilir. Merkezde çözülemeyen cihaz teknik servise gönderilir ve arıza teknik serviste yapılan ilk teknik kontrolle netleşir.",
    "Garanti kapsamı cihazın garanti şartlarına ve arızanın niteliğine göre belirlenir; ayrıntılar aşağıdaki bölümlerde yer alır.",
    "İşlem süresi arızanın türüne ve gerektiğinde teknik servisin veya yedek parçanın beklenmesine göre değişebilir. Tahmini onarım süresi ve varsa ücret, merkezdeki ilk değerlendirmeden ayrı olarak teknik servisteki ilk teknik kontrolden sonra bildirilir.",
  ],
  stats: [
    { value: "Merkezde İlk Kontrol", label: "Başvuru Sonrası İlk Adım" },
    { value: "18 Marka", label: "Üretici Servis Yetkisi" },
    { value: "Garanti Değerlendirmesi", label: "Cihaz ve Arıza Türüne Göre" },
    { value: "Dijital Servis Kaydı", label: "Cihaz Teslim Edildiğinde" },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
};
