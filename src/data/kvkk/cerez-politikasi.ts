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
            ["Analitik", "Google Analytics 4 ile ziyaret ve kullanım istatistikleri", "Kapalı / açık rıza gerekir"],
            ["Reklam ölçüm", "Google Ads dönüşüm ölçümü (ör. reklamdan gelen telefon veya WhatsApp tıklaması). Kişiselleştirilmiş reklam izni verilmez.", "Kapalı / açık rıza gerekir"],
          ],
        },
      ],
    },
    {
      heading: "3. Tercih Yönetimi",
      blocks: [
        {
          type: "p",
          text: "Kullanıcılar çerez tercihlerini eşit görünürlükteki “Tümünü kabul et”, “Tümünü reddet” ve “Tercihleri yönet” seçenekleriyle yönetebilir. Analitik ve reklam ölçüm çerezleri, kullanıcı açıkça izin vermeden etkinleştirilmez; bir seçim yapılana kadar Google Tag Manager, Google Analytics veya Google Ads etiketleri yüklenmez ve Google’a istek gönderilmez. Tercih değişikliği sayfa altındaki “Çerez Tercihleri” bağlantısından daha sonra tekrar yapılabilir; bir izin geri alındığında ilgili ölçüm etiketleri bundan sonra çalışmaz.",
        },
        {
          type: "p",
          text: "Çerez tercihleriniz, benzeri teknolojiler kapsamında cihazınızın tarayıcısında (yerel depolama) saklanır. Bu kayıtta tercihleriniz, hangi seçenekle (tümünü kabul / tümünü reddet / özel seçim) karar verdiğiniz, tercihin yapıldığı tarih ve bu Politika’nın sürüm bilgisi yer alır; siz bir seçim yapmadan hiçbir kayıt oluşturulmaz; kayıt yalnızca tercihlerinizin uygulanması amacıyla kullanılır, kimliğinizi belirleyen bir bilgi içermez ve sunucumuza gönderilmez. Bu Politika’nın sürümü değiştiğinde tercihiniz yeniden istenebilir.",
        },
      ],
    },
    {
      heading: "4. Google Analytics",
      blocks: [
        {
          type: "p",
          text: "Yalnızca Analitik iznini verirseniz Google Analytics 4 kullanılır; sayfa görüntüleme, olay, kampanya, cihaz ve benzeri kullanım verileri istatistik amacıyla işlenebilir. Sağlık verileri, online işitme testi sonuçları veya dB değerleri Analytics’e gönderilmez.",
        },
      ],
    },
    {
      heading: "5. Google Ads Dönüşüm Ölçümü",
      blocks: [
        {
          type: "p",
          text: "Google Ads dönüşüm ölçümü yalnızca Reklam ölçüm iznini verirseniz etkinleşir ve yalnızca telefon veya WhatsApp bağlantısına gerçekten tıklandığında bir dönüşüm olayı gönderilir; olayda telefon numarası, WhatsApp bağlantısı veya sağlık bilgisi bulunmaz. Kişiselleştirilmiş reklam (ad_personalization) izni hiçbir durumda verilmez ve remarketing/kitle oluşturulmaz. Reklam çerezleri zorunlu değildir.",
        },
      ],
    },
    {
      heading: "6. Google Maps ve YouTube",
      blocks: [
        {
          type: "p",
          text: "Harita veya video gömülü içerikler üçüncü taraf sağlayıcılar tarafından sunulabilir. Bu içerikler siz ilgili “Haritayı yükle / Videoyu yükle” düğmesine basana kadar yüklenmez ve sağlayıcıya istek gönderilmez; düğme yalnızca o içeriği, o sayfa ziyareti için yükler. Dilerseniz içeriği yüklemeden doğrudan dış bağlantıyı kullanabilirsiniz.",
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
          text: "“Sitemizin çalışması için zorunlu çerezleri kullanıyoruz. Analitik ve reklam ölçüm çerezlerini yalnızca açık tercihinize göre etkinleştiriyoruz; seçim yapana kadar Google’a istek gönderilmez. Tercihlerinizi dilediğiniz zaman değiştirebilirsiniz.”",
        },
        { type: "p", text: "Butonlar: “Tümünü kabul et” | “Tümünü reddet” | “Tercihleri yönet”" },
      ],
    },
    {
      heading: "9. Cloudflare Web Analytics ve Teknik Performans Ölçümü",
      blocks: [
        {
          type: "p",
          text: "Web sitemiz Cloudflare altyapısı üzerinden sunulmaktadır ve sitede Cloudflare Web Analytics (gerçek kullanıcı performans ölçümü) kullanılmaktadır. Bu ölçüm, 4. bölümdeki Google Analytics ve 5. bölümdeki Google Ads ölçümlerinden ayrıdır; yukarıda açıklanan Analitik ve Reklam ölçüm tercihlerine bağlı olarak açılıp kapanmaz ve çerez tercih panelinde ayrı bir çerez kategorisi olarak sunulmaz.",
        },
        {
          type: "p",
          text: "Amaç: sitenin sayfa yükleme hızı ve kullanıcı deneyimi performansının teknik olarak izlenmesi ve iyileştirilmesidir.",
        },
        {
          type: "p",
          text: "Avrupa Birliği (AB) ziyaretçileri: Cloudflare Web Analytics ayarlarında, AB ülkelerinden gelen ziyaretçiler için JavaScript ölçüm kodunun (beacon) yüklenmesini engelleyen seçenek etkin durumdadır. Cloudflare’ın panel açıklamasına göre bu durumda ölçüm kodu AB’den gelen ziyaretçilere enjekte edilmez; bu nedenle bu ziyaretçilere yönelik Cloudflare Web Analytics JavaScript performans ölçümü gerçekleştirilmez. Bu açıklama yalnızca Cloudflare Web Analytics JavaScript ölçümüne ilişkindir ve yalnızca AB kapsamındadır.",
        },
        {
          type: "p",
          text: "Cloudflare’ın teknik belgelerine göre ölçüm, tarayıcının Performance API’leri üzerinden yapılır ve aşağıdaki teknik bilgiler işlenebilir:",
        },
        {
          type: "ul",
          items: [
            "Sayfa yükleme ve boyama zamanlamaları ile LCP, CLS, INP, FCP ve TTFB gibi performans ölçümleri.",
            "Sayfa yükleme kimliği, girilen sayfanın yolu ve yönlendiren sayfa bilgisi.",
            "Ölçümün yapıldığı zaman ve tarayıcının bellek kullanımına ilişkin teknik bilgiler.",
          ],
        },
        {
          type: "p",
          text: "Cloudflare, Web Analytics ölçümünde sorgu parametrelerini (internet adresinde “?” işaretinden sonra gelen bölümü) kaydetmediğini belirtmektedir.",
        },
        {
          type: "p",
          text: "Çerez ve yerel depolama: Cloudflare’ın teknik belgelerine göre ölçüm betiği tarayıcınızda çerez, localStorage, sessionStorage veya IndexedDB oluşturmaz ve bunlara erişmez; ölçüm verileri yalnızca tarayıcı belleğinde bulunur ve sayfa yenilendiğinde kaybolur.",
        },
        {
          type: "p",
          text: "IP adresi: Ölçüm isteği, her internet isteğinde olduğu gibi IP adresinizle birlikte Cloudflare’a ulaşır. Cloudflare, bu adresin en yakın veri merkezinde silindiğini ve ana veritabanlarında veya loglarında saklanmadığını belirtmektedir.",
        },
        {
          type: "p",
          text: "İşleme yeri: Cloudflare, performans verilerinin genellikle en yakın Cloudflare veri merkezinde işlendiğini, ancak verinin ortaya çıktığı ülke veya bölgeden farklı bir ülke ya da bölgede işlenebileceğini belirtmektedir. Yurt dışına aktarıma ilişkin bilgi İnternet Sitesi Kullanıcısı Aydınlatma Metni’nde yer almaktadır.",
        },
      ],
    },
    contactSection,
  ],
};
