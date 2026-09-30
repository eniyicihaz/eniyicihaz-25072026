// Kaynak: 05_Gizlilik_ve_Website_Kisisel_Verilerin_Korunmasi_Politikasi.docx (WEB-GIZ-05)
import type { LegalDocumentData } from "./types";
import { contactSection, controllerMeta, EFFECTIVE_DATE } from "./common";

export const gizlilikPolitikasi: LegalDocumentData = {
  title: "Gizlilik ve Kişisel Verilerin Korunması Politikası",
  meta: [
    ...controllerMeta,
    { label: "Doküman Kodu", value: "WEB-GIZ-05" },
    { label: "Yürürlük", value: EFFECTIVE_DATE },
  ],
  sections: [
    {
      heading: "1. Politikanın Amacı",
      blocks: [
        {
          type: "p",
          text: "Bu Politika, www.eniyicihaz.com ziyaretçilerinin, müşterilerinin, adaylarının, tedarikçilerinin ve diğer ilgili kişilerin kişisel verilerinin hangi temel ilkelerle korunduğunu açıklar. Politika, KVKK Aydınlatma Metinlerinin yerini tutmaz; aydınlatma yükümlülüğü ilgili işlem sırasında ayrıca yerine getirilir.",
        },
      ],
    },
    {
      heading: "2. Veri Güvenliği",
      blocks: [
        {
          type: "ul",
          items: [
            "Fiziki dosyalara erişim görevle sınırlandırılır.",
            "Noah, İşitsoft ve Uyumsoft kullanıcı erişimleri yetki bazlı yönetilir.",
            "Özel nitelikli verilere erişim yalnızca görev gerektirdiği ölçüde sağlanır.",
            "Yedekleme ve bulut hizmetleri yetkisiz erişime karşı korunur.",
            "Veri ihlali şüphesi hâlinde olay yönetimi prosedürü uygulanır.",
          ],
        },
      ],
    },
    {
      heading: "3. Üçüncü Taraf Hizmetler",
      blocks: [
        {
          type: "p",
          text: "Website altyapısında Cloudflare; harita/içerik hizmetlerinde Google Maps ve YouTube; gelecekte analitik ve dönüşüm ölçümünde Google Analytics ve Google Ads kullanılabilir. Bu hizmetlerin her biri için ilgili teknik ve hukuki aktarım koşulları ayrıca değerlendirilir.",
        },
      ],
    },
    {
      heading: "4. Pazarlama",
      blocks: [
        {
          type: "p",
          text: "Ticari elektronik iletiler yalnızca yürürlükteki 6563 sayılı Kanun, ilgili Yönetmelik ve İleti Yönetim Sistemi (İYS) kuralları çerçevesinde, gerekli izinler ve ret mekanizmaları oluşturularak gönderilir.",
        },
      ],
    },
    {
      heading: "5. Haklar",
      blocks: [
        {
          type: "p",
          text: "İlgili kişiler Kanun’un 11. maddesindeki haklarını kullanabilirler. Başvuru kanalları: yazılı başvuru, KEP ve daha önce sistemde kayıtlı bulunan e-posta adresi.",
        },
      ],
    },
    contactSection,
  ],
};
