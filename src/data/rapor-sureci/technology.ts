// "Rapor Sisteminin Bileşenleri" deep-dive hub for the
// /sgk/rapor-sureci page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior series. icon values are limited to the component's
// fixed set (brain/dna/globe/radar/bluetooth/smartphone/radio/layers)
// — "brain" for the heyet's clinical decision-making; "globe" for the
// electronic report (e-rapor) rule; "smartphone" for SGK's two e-Devlet
// services; "radar" for tracking the report's progress through its stages.
//
// e-rapor rule (checked 2026-11-23). SOURCED: SUT 1.10(1) — providers that use
// the MEDULA hospital system issue reports electronically and the chief
// physician approves them electronically ("sağlık kurulu raporlarına ait
// istisnai düzenlemeler SUT'ta ayrıca belirtilmiştir"); SGK 2026 hearing-aid
// contract — "Rapor" is defined as the electronic report issued by a health
// board of a contracted public provider, and md. 3.2.3 says prescription and
// report are checked in MEDULA; SUT 3.3.32 sets the conditions for SGK to cover
// the device. The SUT's hearing-aid article itself never mentions e-rapor.
// NOT SOURCED (removed — do not reintroduce): "hospital enters the report into
// SGK's e-Rapor system", "valid in every SGK-contracted centre across the
// country / in another city", "no need to carry the report", "reduces manual
// errors", and any equation of an electronic record with SGK acceptance. An
// e-rapor record is NOT the same as SGK/MEDULA acceptance.
//
// e-Devlet rule (verified 2026-11-23 against the official turkiye.gov.tr
// service pages, which are login-gated): ONLY these two services are named —
//   "Rapor Bilgisi Sorgulama"          → lists the user's reports on medical
//        materials incl. hearing aids  (/sosyal-guvenlik-rapor-bilgisi-sorgulama)
//   "Medikal Reçete Bilgileri Sorgulama" → SGK prescriptions for medical
//        materials incl. hearing aids + the prescription's participation
//        amount                         (/sosyal-guvenlik-medikal-recete-bilgileri-sorgulama)
// Their descriptions say nothing about report/prescription STATUS, validity
// or process stage, so this page must NOT claim "durum", "geçerlilik" or
// "anlık takip" via e-Devlet. "Medikal Malzeme Sorgulama" and "Kullanımı
// Bitmemiş Malzeme Bilgisi Sorgulama" are supplied-material records, not
// report/prescription lookups, and are not used here.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const raporSureciTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Rapor Sisteminin Bileşenleri",
  intro: "Her bileşeni seçerek nasıl çalıştığını inceleyebilirsiniz. Bu bölüm, rapor sürecinin arkasındaki sistemin nasıl işlediğini anlatır.",
  items: [
    {
      id: "heyet-degerlendirmesi",
      icon: "brain",
      navLabel: "Heyet Değerlendirmesi",
      title: "Sağlık Kurulunun Klinik Değerlendirmesi",
      lead: "Sağlık kurulu, test sonuçlarınızı ve muayene bulgularınızı bir araya getirerek raporunuzu düzenler.",
      howItWorks: "Kurulda görevli hekimler, odyometri sonuçlarınızı ve klinik muayene bulgularınızı birlikte değerlendirerek işitme kaybı derecenizi ve cihaz ihtiyacınızı raporlar.",
      advantages: [
        "Birden fazla uzmanın değerlendirmesinden geçer",
        "Klinik bulgularla test sonuçlarını bir arada değerlendirir",
        "Objektif ve standart bir değerlendirme sağlar",
      ],
      models: ["Sağlık Kurulu Raporu"],
      expertNote: "Heyet toplantı sıklığı hastaneye göre değişebilir; randevu almadan önce ilgili hastaneden bilgi almanızı öneririz.",
    },
    {
      id: "e-rapor-sistemi",
      icon: "globe",
      navLabel: "Elektronik Rapor",
      title: "Raporun Elektronik Ortamda Düzenlenmesi",
      lead: "SUT'a göre MEDULA hastane sistemini kullanan sağlık hizmeti sunucuları raporları elektronik ortamda düzenler.",
      howItWorks: "Bu sunucularda düzenlenen raporlar başhekimlik tarafından elektronik ortamda onaylanır. SGK'nın işitme cihazı merkezleriyle yaptığı 2026 sözleşmesi de işitme cihazı raporunu elektronik rapor olarak tanımlar ve rapor ile reçetenin MEDULA sisteminden kontrol edildiğini belirtir. Raporun elektronik sistemde kayıtlı olması tek başına SGK'nın kabul ettiği anlamına gelmez; kabul için SUT'ta ve sözleşmede ayrıca tanımlı koşullar aranır.",
      advantages: [
        "Raporlar elektronik ortamda düzenlenir ve onaylanır",
        "Cihaz işlemi sırasında rapor ve reçete MEDULA sisteminden kontrol edilir",
        "Elektronik kayıt ile SGK'nın kabulü aynı şey değildir",
      ],
      models: ["Elektronik Rapor (e-rapor)"],
      expertNote: "Bu açıklama SUT 1.10 ve SGK'nın 2026 işitme cihazı sözleşmesine dayanır; her hastane ve her rapor için aynı işleyişi garanti etmez. Güncel koşullar için merkezimizden bilgi alabilirsiniz.",
    },
    {
      id: "dijital-rapor-sorgulama",
      icon: "smartphone",
      navLabel: "Dijital Rapor Sorgulama",
      title: "e-Devlet'te SGK Rapor ve Reçete Sorgulama Hizmetleri",
      lead: "SGK, e-Devlet üzerinden işitme cihazı gibi medikal malzemelere ilişkin raporlarınızı ve reçetelerinizi sorgulayabileceğiniz iki ayrı hizmet sunar.",
      howItWorks: "Hizmetlere e-Devlet girişi yaparak ulaşılır. e-Devlet'in hizmet tanımına göre \"Rapor Bilgisi Sorgulama\" raporlarınızın listesini, \"Medikal Reçete Bilgileri Sorgulama\" ise reçetelerinizi ve reçeteye ait katılım payı tutarını sorgulamanızı sağlar. Raporunuzun veya reçetenizin işlem aşaması, geçerlilik süresi gibi ayrıntıları gösterip göstermediklerini garanti edemiyoruz.",
      advantages: [
        "Raporlarınızı ve reçetelerinizi e-Devlet üzerinden sorgulayabilirsiniz",
        "Ekranda görünen bilgiyi merkezimizle birlikte değerlendirebiliriz",
        "Güncel süreç durumunuz için merkezimizden bilgi alabilirsiniz",
      ],
      models: ["Rapor Bilgisi Sorgulama", "Medikal Reçete Bilgileri Sorgulama"],
      expertNote: "Hizmetlere giriş için e-Devlet'in sunduğu kimlik doğrulama yöntemlerinden biri gerekir (e-Devlet Şifresi, Mobil İmza, Elektronik İmza, T.C. Kimlik Kartı veya İnternet Bankacılığı).",
    },
    {
      id: "surec-takibi",
      icon: "radar",
      navLabel: "Süreç Takibi",
      title: "Raporunuzun Aşamalarını Takip Etme",
      lead: "Rapor süreci, muayeneden raporun düzenlenip onaylanmasına ve reçeteye kadar birkaç ayrı aşamadan oluşur.",
      howItWorks: "Süreçle ilgili bilgi için başvurduğunuz hastaneyle iletişime geçebilirsiniz; e-Devlet'teki rapor ve reçete sorgulama hizmetleri de ilgili kayıtları listeleyebilir, ancak işlem aşamasını gösterdiklerini garanti edemiyoruz. Merkezimiz de sürecinizi takip etmenize yardımcı olur.",
      advantages: [
        "Sürecin hangi aşamada olduğunu bilirsiniz",
        "Olası gecikmeleri erken fark edebilirsiniz",
        "Belirsizlik hissini azaltır",
      ],
      models: ["Süreç Takibi"],
      expertNote: "Sürecinizle ilgili güncel durumu öğrenmek için bizimle iletişime geçebilirsiniz.",
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
  accentColorNavActiveBg: "rgb(8 145 178 / 0.1)",
  accentColorCalloutBg: "rgb(8 145 178 / 0.06)",
  accentColorCalloutLabel: "#0e7490",
};
