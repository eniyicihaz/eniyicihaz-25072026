// "e-Devlet'te Rapor ve Reçete Sorgulama" — /sgk/rapor-sureci sayfasında "Rapor Sisteminin Bileşenleri" bölümünün hemen
// altındaki, iki resmî e-Devlet hizmetine doğrudan bağlantı veren sade bölüm. Renders through SgkReportEDevlet
// (src/components/sgk/SgkReportEDevlet).
//
// DOĞRULANAN (2026-11-23, turkiye.gov.tr'nin kendi hizmet sayfaları; hizmetler giriş ister):
//  - "Rapor Bilgisi Sorgulama": sağlık hizmet sunucusu tarafından düzenlenmiş, hasta alt bezi, tıbbi sarf malzeme, işitme
//    cihazı ve hazır ortez protez gibi medikal malzemelerin kullanımına ilişkin RAPORLARIN LİSTESİ.
//  - "Medikal Reçete Bilgileri Sorgulama": aynı malzemelere (işitme cihazı dâhil) ait SGK REÇETELERİ ve reçeteye ait
//    katılım payı tutarı.
//  - Giriş yöntemleri (hizmet sayfasında listelenen): e-Devlet Şifresi, Mobil İmza, Elektronik İmza, T.C. Kimlik Kartı,
//    İnternet Bankacılığı.
// DOĞRULANAMAYAN → sayfada İDDİA EDİLMEZ: bu hizmetlerin rapor/reçetenin işlem aşamasını, geçerlilik süresini veya anlık
// durumunu göstermesi (ekran alanları giriş gerektirdiği için görülemedi). "Medikal Malzeme Sorgulama" ve "Kullanımı
// Bitmemiş Malzeme Bilgisi Sorgulama" malzeme KAYDIdır, rapor/reçete sorgusu değildir; burada kullanılmaz.
// Hizmet adı/bağlantısı değişirse yalnızca bu dosya güncellenir.

export interface RaporEDevletService {
  label: string;
  href: string;
  description: string;
}

export interface RaporSureciEDevletContent {
  badge: string;
  heading: string;
  intro: string;
  services: RaporEDevletService[];
  caveat: string;
  newTabNote: string;
}

export const raporSureciEDevlet: RaporSureciEDevletContent = {
  badge: "E-DEVLET SORGULAMA",
  heading: "e-Devlet'te Rapor ve Reçete Sorgulama",
  intro:
    "SGK, e-Devlet üzerinden işitme cihazı gibi medikal malzemelere ilişkin rapor ve reçete kayıtlarınızı listeleyen iki hizmet sunar. Hizmetlere ulaşmak için e-Devlet girişi yapmanız gerekir.",
  services: [
    {
      label: "Sosyal Güvenlik Kurumu – Rapor Bilgisi Sorgulama",
      href: "https://www.turkiye.gov.tr/sosyal-guvenlik-rapor-bilgisi-sorgulama",
      description: "Medikal malzemelerin (işitme cihazı dâhil) kullanımına ilişkin raporlarınızın listesini sorgulamanızı sağlar.",
    },
    {
      label: "Sosyal Güvenlik Kurumu – Medikal Reçete Bilgileri Sorgulama",
      href: "https://www.turkiye.gov.tr/sosyal-guvenlik-medikal-recete-bilgileri-sorgulama",
      description: "Medikal malzemelere (işitme cihazı dâhil) ait SGK reçetelerinizi ve reçeteye ait katılım payı tutarını sorgulamanızı sağlar.",
    },
  ],
  caveat:
    "Bu hizmetlerin raporunuzun veya reçetenizin işlem aşamasını, geçerlilik süresini ya da anlık durumunu gösterdiğini garanti edemiyoruz. Güncel durumunuz için merkezimizden bilgi alabilirsiniz.",
  newTabNote: "Bağlantılar e-Devlet'in kendi sayfasını yeni sekmede açar.",
};
