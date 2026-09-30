// Kaynak: 06_Cerez_Politikasi.docx (WEB-CRZ-06)
import type { LegalDocumentData } from "./types";
import { contactSection, controllerMeta, EFFECTIVE_DATE } from "./common";

export const cerezPolitikasi: LegalDocumentData = {
  title: "Çerez Politikası",
  meta: [
    ...controllerMeta,
    { label: "Doküman Kodu", value: "WEB-CRZ-06" },
    { label: "Yürürlük", value: EFFECTIVE_DATE },
  ],
  sections: [
    {
      heading: "1. Çerez Nedir?",
      blocks: [
        {
          type: "p",
          text: "Çerezler, ziyaret edilen internet sitesinin tarayıcı veya cihaz üzerinde sakladığı küçük veri dosyalarıdır. Benzeri teknolojiler de bu Politika kapsamında değerlendirilir.",
        },
      ],
    },
    {
      heading: "2. Kullanılabilecek Çerez Kategorileri",
      blocks: [
        {
          type: "table",
          head: ["Kategori", "Amaç", "Varsayılan durum"],
          rows: [
            ["Zorunlu", "Güvenlik, oturum, tercihlerin teknik olarak uygulanması, sitenin çalışması", "Açık"],
            ["Analitik", "Google Analytics ile ziyaret ve kullanım istatistikleri, dönüşüm ölçümü", "Kapalı / açık rıza gerekir"],
            ["Reklam/Pazarlama", "Google Ads dönüşüm, remarketing ve reklam ölçümü", "Kapalı / açık rıza gerekir"],
            ["Üçüncü taraf içerik", "Google Maps, YouTube ve benzeri içerik/harita hizmetleri", "Kapalı / gerektiğinde açık rıza"],
          ],
        },
      ],
    },
    {
      heading: "3. Tercih Yönetimi",
      blocks: [
        {
          type: "p",
          text: "Kullanıcılar çerez tercihlerini “Tümünü Kabul Et”, “Sadece Gerekli” ve “Tercihler” seçenekleriyle yönetebilir. Analitik, reklam/pazarlama ve zorunlu olmayan üçüncü taraf çerezler, gerekli teknik ve hukuki koşullar sağlanmadan etkinleştirilmez. Tercih değişikliği daha sonra tekrar yapılabilir.",
        },
        {
          type: "p",
          text: "Çerez tercihleriniz, benzeri teknolojiler kapsamında cihazınızın tarayıcısında (yerel depolama) saklanır. Bu kayıtta tercihleriniz, tercihin yapıldığı tarih ve bu Politika’nın sürüm bilgisi yer alır; kayıt yalnızca tercihlerinizin uygulanması amacıyla kullanılır, kimliğinizi belirleyen bir bilgi içermez ve sunucumuza gönderilmez. Bu Politika’nın sürümü değiştiğinde tercihiniz yeniden istenebilir.",
        },
      ],
    },
    {
      heading: "4. Google Analytics",
      blocks: [
        {
          type: "p",
          text: "Google Analytics kullanıldığında sayfa görüntüleme, olay, kampanya, cihaz ve benzeri kullanım verileri istatistik ve dönüşüm ölçümü amacıyla işlenebilir. Sağlık verileri, online işitme testi sonuçları veya dB değerleri Analytics’e gönderilmez.",
        },
      ],
    },
    {
      heading: "5. Google Ads / Remarketing",
      blocks: [
        {
          type: "p",
          text: "Google Ads reklam ölçümü ve remarketing çerezleri yalnızca gerekli tercih/izin mekanizması kapsamında etkinleştirilir. Reklam/pazarlama amaçlı çerezler zorunlu değildir.",
        },
      ],
    },
    {
      heading: "6. Google Maps ve YouTube",
      blocks: [
        {
          type: "p",
          text: "Harita veya video gömülü içerikler üçüncü taraf sağlayıcılar tarafından sunulabilir. Kullanıcı tarafından seçilen tercih doğrultusunda yüklenebilir. Ziyaretçinin çerez tercihini etkilememek amacıyla doğrudan dış bağlantı tercih edilebilir.",
        },
      ],
    },
    {
      heading: "7. Çerezleri Silme",
      blocks: [
        {
          type: "p",
          text: "Kullanıcılar, kullandıkları tarayıcı ve cihazın gizlilik/çerez ayarlarından çerezleri silebilir veya engelleyebilir. Tarayıcıya ve cihaza göre menü adları değişebilir.",
        },
        {
          type: "p",
          text: "Tercih kaydınızı, sayfa altındaki “Çerez Tercihleri” bağlantısından değiştirebilir veya tarayıcınızın site verilerini silerek kaldırabilirsiniz.",
        },
      ],
    },
    {
      heading: "8. Çerez Banner Metni - Site Uygulaması",
      blocks: [
        {
          type: "quote",
          text: "“Sitemizin çalışması için zorunlu çerezleri kullanıyoruz. Analitik ve reklam/pazarlama çerezleri ile zorunlu olmayan üçüncü taraf içerikleri yalnızca tercihinize göre etkinleştiriyoruz. Tercihlerinizi dilediğiniz zaman değiştirebilirsiniz.”",
        },
        { type: "p", text: "Butonlar: “Tümünü Kabul Et” | “Sadece Gerekli” | “Tercihler”" },
      ],
    },
    contactSection,
  ],
};
