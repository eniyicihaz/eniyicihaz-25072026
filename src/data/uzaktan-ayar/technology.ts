// "Teknolojiler" deep-dive hub for the /uygulama-ayar/uzaktan-ayar
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior series. Deliberately
// scoped to SESSION logistics rather than device technology — the
// device-side app control, physical remote and AI-suggestion mechanics
// are already covered in depth on the /teknolojiler/uzaktan-kontrol
// page and are not re-explained here. icon values are limited to the
// component's fixed set (brain/dna/globe/radar/bluetooth/smartphone/
// radio/layers) — "radar" for the pre-session compatibility check
// (consistent with its detection/scanning mapping across the site);
// "globe" for the internet-based video-call connection (consistent
// with Uzaktan Kontrol's own mapping for its "uzaktan-destek" item);
// "bluetooth" for the device's wireless link to the session; "brain"
// for the session-summary record kept for continuity.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const uzaktanAyarTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Uzaktan Ayar Oturumunun Bileşenleri",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Cihaz teknolojisinin kendisi hakkında detaylı bilgi için Uzaktan Kontrol Özellikleri sayfamızı inceleyebilirsiniz.",
  items: [
    {
      id: "uygunluk-kontrolu",
      icon: "radar",
      navLabel: "Uygunluk Kontrolü",
      title: "Cihaz ve Uygulama Uygunluk Kontrolü",
      lead: "Randevu öncesinde, cihazınızın ve akıllı telefonunuzun uzaktan ayara uygun olup olmadığı kontrol edilir.",
      howItWorks: "Cihaz modeliniz ve kullandığınız uygulama sürümü, uzaktan destek özelliğini destekleyip desteklemediği açısından incelenir.",
      advantages: [
        "Oturum öncesinde olası uyumsuzlukları önceden tespit eder",
        "Randevu zamanınızın verimli kullanılmasını sağlar",
        "Gerekirse alternatif bir randevu türü önerilmesine imkân tanır",
      ],
      models: ["Uzaktan Destek Uyumlu Modeller"],
      expertNote: "Tüm cihaz modelleri uzaktan ayarı desteklemeyebilir; uygunluk önceden teyit edilir.",
    },
    {
      id: "video-goruşme-baglantisi",
      icon: "globe",
      navLabel: "Video Görüşme Bağlantısı",
      title: "Güvenli Video Görüşme Bağlantısı",
      lead: "Oturum, internet üzerinden gerçekleştirilen güvenli bir video görüşmesiyle yürütülür.",
      howItWorks: "Belirlenen randevu saatinde, size iletilen bağlantı üzerinden odyometristinizle görüntülü olarak bağlanırsınız.",
      advantages: [
        "Kliniğe gelmeden yüz yüze bir görüşme deneyimi sunar",
        "Geri bildiriminizi anlık olarak iletmenize imkân tanır",
        "Kararlı bir internet bağlantısıyla her yerden erişilebilir",
      ],
      models: ["Video Görüşme Altyapısı"],
      expertNote: "Görüşme, yalnızca planlanan randevu saatinde ve sizin katılımınızla gerçekleşir.",
    },
    {
      id: "cihaz-baglantisi",
      icon: "bluetooth",
      navLabel: "Cihaz Bağlantısı",
      title: "Cihazın Uygulamaya Kablosuz Bağlantısı",
      lead: "Cihazınız, oturum boyunca akıllı telefonunuzdaki uygulamaya kablosuz olarak bağlı kalır.",
      howItWorks: "Cihaz, Bluetooth üzerinden telefonunuza bağlanır; uygulama, bu bağlantı üzerinden odyometristinizin yaptığı ayar güncellemelerini cihaza iletir.",
      advantages: [
        "Ayar güncellemelerinin anında cihaza yansımasını sağlar",
        "Ek bir donanıma ihtiyaç duymadan çalışır",
        "Oturum boyunca kararlı bir bağlantı sunar",
      ],
      models: ["Bluetooth Bağlantılı Modeller"],
      expertNote: "Bağlantı kalitesi, telefonunuzun ve cihazınızın uyumluluğuna göre değişebilir.",
    },
    {
      id: "oturum-sonrasi-kayit",
      icon: "brain",
      navLabel: "Oturum Sonrası Kayıt",
      title: "Oturum Sonrası Değerlendirme Kaydı",
      lead: "Oturumda yapılan değişiklikler, sonraki randevularınızda süreklilik sağlamak amacıyla kaydedilir.",
      howItWorks: "Odyometristiniz, oturum sırasında yapılan ayar güncellemelerini ve geri bildiriminizi dosyanıza not eder.",
      advantages: [
        "Sonraki randevularda tekrar baştan başlamanızı gerektirmez",
        "Zaman içindeki ayar geçmişinizin takip edilmesine yardımcı olur",
        "Hangi odyometristle görüştüğünüzden bağımsız olarak süreklilik sağlar",
      ],
      models: ["Oturum Kayıt Sistemi"],
      expertNote: "Kayıtlarınız yalnızca klinik ekibimiz tarafından, bakım sürekliliği amacıyla kullanılır.",
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
  accentColorNavActiveBg: "rgb(22 163 74 / 0.1)",
  accentColorCalloutBg: "rgb(22 163 74 / 0.06)",
  accentColorCalloutLabel: "#15803d",
};
