// "Kablosuz Bağlantı Özellikleri Nedir?" + "Hangi Protokolleri Kapsar?"
// section for the /teknolojiler/kablosuz-baglanti page. Renders through
// the shared BrandPageIntro component. The "hangi protokolleri kapsar"
// explanation is folded into this same section's paragraphs, same
// technique every /isitme-cihazlari/* and /teknolojiler/* feature page
// uses. Paragraph 3 explicitly cross-references the Bluetooth Özellikli
// Cihazlar page rather than re-explaining phone/TV Bluetooth streaming.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const kablosuzBaglantiIntro: BrandPageIntroContent = {
  badge: "KABLOSUZ BAĞLANTI ÖZELLİKLERİ NEDİR?",
  heading: "Kablosuz Bağlantı Özellikleri Nedir ve Hangi Protokolleri Kapsar?",
  paragraphs: [
    "Kablosuz bağlantı özellikleri, işitme cihazının telefon ve TV dışındaki kaynaklarla iletişim kurmasını sağlayan bir dizi farklı kablosuz protokolü ifade eder.",
    "Bu teknoloji belirli bir fiziksel cihaz tipi değildir; hem kulak arkası (BTE/RIC) hem de kulak içi (ITE/ITC) ailelerinde sunulabilen bir donanım ve protokol özelliğidir.",
    "Kapsadığı başlıca protokoller şunlardır: telesarmal (telecoil) döngü sistemleri, Roger/FM uzaktan mikrofon sistemleri ve kulaktan kulağa (ear-to-ear) manyetik indüksiyon bağlantısı. Doğrudan telefon ve TV bağlantısı için Bluetooth Özellikli Cihazlar sayfamızı inceleyebilirsiniz.",
    "Desteklenen protokoller ve uyumlu aksesuarlar üreticiye ve seçilen modele göre değişebilir.",
  ],
  stats: [
    { value: "Telecoil, Roger/FM, NFMI", label: "Başlıca Protokoller" },
    { value: "Toplu Alan Sistemleri", label: "Telesarmal Kullanım Alanı" },
    { value: "Düşük Güç Tüketimi", label: "Kulaktan Kulağa Bağlantı Avantajı" },
    { value: "Modelden Modele Değişir", label: "Aksesuar Uyumluluğu" },
  ],
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
};
