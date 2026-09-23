// "Teknolojiler" deep-dive hub for the /teknolojiler/sarjli-teknolojiler
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every /isitme-cihazlari/* and
// /teknolojiler/* feature page. icon values are limited to the
// component's fixed set (brain/dna/globe/radar/bluetooth/smartphone/
// radio/layers) — "layers" for the physical battery-cell structure;
// "brain" for the "akıllı" (smart) charge-management circuit, a fitting,
// near-literal use; "smartphone" for the battery-health tracking app;
// "radar" for the electromagnetic-field physics behind inductive
// charging (a stretch mapping, same reuse pattern every prior page
// applies when the fixed icon set doesn't literally match the topic).

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const sarjliTeknolojilerTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Şarjlı Teknolojide Öne Çıkan Bileşenler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Teknolojik kapsam üreticiye ve seçilen modele göre değişebilir.",
  items: [
    {
      id: "lityum-iyon-kimya",
      icon: "layers",
      navLabel: "Lityum-İyon Pil Kimyası",
      title: "Lityum-İyon Hücre Teknolojisi",
      lead: "İşitme cihazlarında kullanılan lityum-iyon piller, küçük hacimde yüksek enerji yoğunluğu sunar.",
      howItWorks: "Pil içindeki lityum iyonları, şarj sırasında negatif elektroda, kullanım sırasında pozitif elektroda hareket ederek enerji depolar ve serbest bırakır.",
      advantages: [
        "Küçük hacimde yüksek enerji kapasitesi",
        "Diğer şarjlı pil kimyalarına göre daha uzun döngü ömrü",
        "Tekrar tekrar şarj edilebilme",
      ],
      models: ["Lityum-İyon Şarjlı Modeller"],
      expertNote: "Pil kapasitesi ve boyutu üreticiye ve cihaz tipine göre değişir; ihtiyacınıza uygun model uzman değerlendirmesiyle belirlenir.",
    },
    {
      id: "akilli-sarj-yonetimi",
      icon: "brain",
      navLabel: "Akıllı Şarj Yönetimi",
      title: "Akıllı Şarj Yönetim Devresi (BMS)",
      lead: "Dahili şarj yönetim devresi, şarj akımını ve pil sıcaklığını sürekli denetleyerek güvenli ve verimli şarjı sağlar.",
      howItWorks: "Devre, pilin doluluk seviyesini ve sıcaklığını gerçek zamanlı izler; pil tam dolduğunda veya sıcaklık güvenli aralığın dışına çıktığında şarj akımını otomatik olarak sınırlar veya keser.",
      advantages: [
        "Aşırı şarja ve aşırı ısınmaya karşı koruma",
        "Pil ömrünü uzatmaya yardımcı olan optimize edilmiş şarj döngüleri",
        "Güvenli ve tutarlı şarj deneyimi",
      ],
      models: ["Gelişmiş BMS Destekli Modeller"],
      expertNote: "Şarj yönetim devresinin kapsamı ve hassasiyeti üreticiye göre değişir.",
    },
    {
      id: "pil-sagligi-takibi",
      icon: "smartphone",
      navLabel: "Pil Sağlığı Takibi",
      title: "Uygulama Üzerinden Pil Sağlığı ve Döngü Takibi",
      lead: "Bazı modeller, şarj döngüsü sayısını ve genel pil sağlığı durumunu akıllı telefon uygulaması üzerinden görüntüleme imkânı sunar.",
      howItWorks: "Cihaz, şarj döngüsü verilerini kaydeder ve uygulamayla eşleştiğinde bu verileri kullanıcıya özetler; bazı uygulamalar pil değişim zamanı yaklaştığında bilgilendirme de sunabilir.",
      advantages: [
        "Pilin genel durumunu önceden görebilme",
        "Şarj alışkanlığınızı takip edebilme",
        "Pil değişim zamanlamasını planlamaya yardımcı olur",
      ],
      models: ["Uygulama Destekli Pil Takibi Sunan Modeller"],
      expertNote: "Pil sağlığı takibi özelliği her modelde bulunmayabilir; uygulama arayüzü üreticiye göre değişir.",
    },
    {
      id: "kablosuz-sarj-fizigi",
      icon: "radar",
      navLabel: "Kablosuz Şarj Fiziği",
      title: "İndüksiyonlu (Kablosuz) Şarjın Çalışma Prensibi",
      lead: "Bazı şarj kutuları, metal temas noktası olmadan elektromanyetik indüksiyon yoluyla pili doldurur.",
      howItWorks: "Şarj kutusundaki bobin, elektromanyetik alan oluşturarak cihazdaki alıcı bobine enerji aktarır; bu enerji pilde kimyasal olarak depolanır.",
      advantages: [
        "Metal temas noktası aşınmasını ortadan kaldırır",
        "Nem ve toza karşı ek koruma sağlayabilir",
        "Cihazı kutuya yerleştirmek yeterlidir, hizalama hassasiyeti düşüktür",
      ],
      models: ["İndüksiyonlu Şarj Destekli Modeller"],
      expertNote: "İndüksiyonlu şarj, temaslı şarja göre genellikle biraz daha uzun sürebilir; bu fark modele göre değişir.",
    },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
  accentColorNavActiveBg: "rgb(220 38 38 / 0.1)",
  accentColorCalloutBg: "rgb(220 38 38 / 0.06)",
  accentColorCalloutLabel: "#b91c1c",
};
