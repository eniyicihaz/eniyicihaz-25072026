// "İşitme cihazı nasıl çalışır?" — üç adımlı ses yolu + cihazın temel parçaları.
// Genel, doğrulanabilir bilgi; hiçbir marka/model teknik iddiası yok.
// Görsel gerçek dosyadır; `imageNeeded` yalnızca görsel yoksa kullanılan yedek alandır.
import { Mic, Cpu, Volume2, BatteryCharging, Bluetooth } from "lucide-astro";
import type { GuideSectionMeta } from "../../components/price-guide/price-guide.types";
import type { AnatomyMapContent } from "../../components/device-guide/device-guide.types";

export const anatomySection: GuideSectionMeta = {
  id: "nasil-calisir",
  eyebrow: "Nasıl Çalışır?",
  heading: "İşitme Cihazı Nasıl Çalışır? Cihazın Temel Parçaları",
  intro:
    "Türü ne olursa olsun, bir işitme cihazı aynı yolu izler: sesi alır, kişinin işitme kaybına göre işler ve kulağa iletir. Bu yolu bilmek, özellikleri ve türleri karşılaştırırken işinize yarar.",
};

export const anatomy: AnatomyMapContent = {
  // Gerçek görsel, olduğu gibi: 1448 × 1086 (4:3), WebP.
  image: {
    src: "/images/device-guide/isitme-cihazi-parcalari.webp",
    alt: "İşitme cihazının dış gövdesini ve iç parçalarını yakın çekim kutucuklarla gösteren temsili görsel",
    width: 1448,
    height: 1086,
  },
  steps: [
    {
      title: "Ses alınır",
      text: "Cihazdaki mikrofon(lar) çevredeki sesi elektrik sinyaline çevirir. Birden fazla mikrofon, sesin yönünü ayırt etmeye yardımcı olabilir.",
    },
    {
      title: "Ses işlenir",
      text: "İşlemci, sinyali kişinin işitme testi sonucuna göre ayarlanmış programla işler; hangi seslerin ne kadar öne çıkarılacağı bu ayarla belirlenir.",
    },
    {
      title: "Ses iletilir",
      text: "Hoparlör (alıcı), işlenmiş sesi kulak kanalına iletir. Alıcı gövdede veya kulak kanalında olabilir; bu, cihaz türünü de belirler.",
    },
  ],
  parts: [
    { icon: Mic, title: "Mikrofon", text: "Çevredeki sesi alır. Kulak arkası ve RIC cihazlarda genellikle daha fazla mikrofon bulunabilir." },
    { icon: Cpu, title: "İşlemci", text: "Sesi analiz eder ve kişiye özel ayara göre düzenler. Gürültü yönetimi ve program seçimi burada yapılır." },
    { icon: Volume2, title: "Hoparlör / alıcı", text: "İşlenmiş sesi kulak kanalına verir. RIC'te alıcı kanal içindedir; kulak arkasında ses tüple ulaşır." },
    { icon: BatteryCharging, title: "Pil / şarj", text: "Değiştirilebilir küçük pil veya dahili şarjlı batarya olabilir. Türe ve modele göre değişir." },
    { icon: Bluetooth, title: "Bağlantı", text: "Bazı modellerde telefon, TV ve uygulama bağlantısı için kablosuz modül bulunur; her modelde olmayabilir." },
  ],
};
