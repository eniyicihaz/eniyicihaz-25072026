// Kaynak: 04_Internet_Sitesi_Kullanicisi_Aydinlatma_Metni.docx (KVK-AYD-04)
import type { LegalDocumentData } from "./types";
import { contactSection, controllerMeta, EFFECTIVE_DATE } from "./common";

export const aydinlatmaMetni: LegalDocumentData = {
  title: "İnternet Sitesi Kullanıcısı Aydınlatma Metni",
  meta: [
    ...controllerMeta,
    { label: "Doküman Kodu", value: "KVK-AYD-04" },
    { label: "Yürürlük", value: EFFECTIVE_DATE },
  ],
  sections: [
    {
      heading: "1. Kapsam",
      blocks: [
        {
          type: "p",
          text: "www.eniyicihaz.com üzerinde ziyaretçilerden doğrudan kişisel veri istenmesi hâlen sınırlıdır; iletişim telefon, WhatsApp, e-posta, sosyal medya ve diğer kanallardan sağlanabilmektedir. İleride website üzerinde iletişim/randevu formu açılması hâlinde form alanları yalnızca gerekli verilerle sınırlandırılacak ve bu metin güncellenecektir.",
        },
        {
          type: "p",
          text: "Web sitemizdeki online işitme testi sırasında kimlik bilgisi istenmez. Testin sonucu, cihazınızın tarayıcısında (oturum depolaması) yalnızca oturum süresince geçici olarak tutulur; Avrasya İşitme’ye veya Google Analytics/Ads dâhil üçüncü taraflara gönderilmez. Testi yeniden başlattığınızda veya tarayıcı sekmesini kapattığınızda bu kayıt silinir.",
        },
      ],
    },
    {
      heading: "2. Otomatik Toplanan Teknik Veriler",
      blocks: [
        {
          type: "ul",
          items: [
            "IP adresi ve benzeri ağ/teknik bilgiler.",
            "Tarayıcı, işletim sistemi, cihaz ve bağlantı bilgileri.",
            "Ziyaret edilen sayfalar, zaman damgaları, yönlendiren sayfa ve teknik olay kayıtları.",
            "Çerez tercihleri ve kullanıcı tarafından verildiğinde analitik/reklam etkileşim verileri.",
          ],
        },
      ],
    },
    {
      heading: "3. Google Analytics ve Google Ads",
      blocks: [
        {
          type: "p",
          text: "Google Analytics ve Google Ads dönüşüm ölçümü gelecekte kullanılacaktır. Analitik ve reklam amaçlı çerezler, zorunlu olmadıkları ölçüde kullanıcı tercihlerine göre etkinleştirilir. Performans ve reklam ölçümü kapsamında sayfa görüntüleme, kampanya parametreleri, dönüşüm olayları, cihaz/tarayıcı bilgileri ve benzeri teknik veriler işlenebilir. Kişisel sağlık bilgileri, online işitme testi sonuçları, dB değerleri veya işitme kaybı profilleri Analytics/Ads olaylarına gönderilmez.",
        },
      ],
    },
    {
      heading: "4. Google Maps ve YouTube",
      blocks: [
        {
          type: "p",
          text: "Website üzerinde Google Maps ve bazı sayfalarda YouTube gibi üçüncü taraf içerikleri kullanılabilir. Bu hizmetlerin teknik yapısına bağlı olarak çerez veya benzeri teknolojiler kullanılabileceğinden, zorunlu olmayan üçüncü taraf içerikler kullanıcı tercihiyle yüklenebilir. Harita için ayrıca Google Maps’e yönlendiren doğrudan bir bağlantı da kullanılabilir.",
        },
      ],
    },
    {
      heading: "5. Yurt Dışı Aktarım",
      blocks: [
        {
          type: "p",
          text: "Cloudflare, Google ve benzeri hizmet sağlayıcıların teknik altyapılarının yurt dışında bulunması hâlinde kişisel verilerin yurt dışına aktarımı 6698 sayılı Kanun’un 9. maddesindeki şartlara göre yürütülür.",
        },
      ],
    },
    {
      heading: "6. İletişim Kanalları",
      blocks: [
        {
          type: "p",
          text: "Website ziyaretçilerinin Avrasya İşitme’ye telefon, WhatsApp Business, e-posta, Instagram, TikTok veya diğer iletişim kanallarından ulaşması hâlinde iletilen bilgiler ilgili hizmet veya talebin gerektirdiği ölçüde işlenir. WhatsApp üzerindeki iletişim içerikleri cihaz üzerinde saklanabilir; gereksiz ve süresiz saklama yapılmaması için periyodik silme uygulanır.",
        },
      ],
    },
    contactSection,
  ],
};
