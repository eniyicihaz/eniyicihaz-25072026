// Category hub pages (research report N1 / project brief §6). Eleven URLs used to answer 404 (/sgk/, /teknolojiler/ …).
// Nine of them become real hub pages that gather EXISTING pages — every card is a link to an existing page and its
// text is that page's own meta description (src/config/site-map.ts). Two stay redirects because a closer existing
// page already serves the same intent: /sgk/ → /sgk-isitme-cihazi-odemesi/ and /blog/ → /bilgi-merkezi/ (public/_redirects).
//
// Texts below only describe what the linked pages already contain; no new service, number, price or claim.
export interface HubDef {
  path: string;
  title: string;
  description: string;
  badge: string;
  h1: string;
  paragraphs: string[];
  listHeading: string;
  /** "legal" = plain header, no hero and no sales CTA (PRINCIPLES §9: legal pages are exempt). */
  variant?: "legal";
}

export const hubs: Record<string, HubDef> = {
  "/uygulama-ayar/": {
    path: "/uygulama-ayar/",
    title: "Cihaz Uygulama ve Ayar Hizmetleri | Avrasya İşitme Cihazları",
    description:
      "Cihaz deneme, uygulama, kişiye özel ayar ve programlama, kalıp alımı, kontrol randevusu, uzaktan ayar ve evde hizmet: uygulama ve ayar hizmetlerimiz.",
    badge: "HİZMETLERİMİZ · UYGULAMA VE AYAR",
    h1: "Cihaz Uygulama ve Ayar Hizmetleri",
    paragraphs: [
      "Doğru cihazı seçmek sürecin yalnızca bir parçasıdır. Cihazın denenmesi, kulağınıza uygulanması, size göre ayarlanması ve düzenli kontrolü aşağıdaki hizmetlerde ayrı ayrı anlatılır.",
      "Her sayfada hizmetin nasıl işlediğini ve bir sonraki adımı bulabilirsiniz. Hangisiyle başlamanız gerektiğinden emin değilseniz bizi arayabilir veya WhatsApp'tan yazabilirsiniz.",
    ],
    listHeading: "Uygulama ve Ayar Hizmetleri",
  },
  "/servis-bakim/": {
    path: "/servis-bakim/",
    title: "Teknik Servis ve Bakım Hizmetleri | Avrasya İşitme Cihazları",
    description:
      "Teknik servis, onarım takibi, periyodik bakım, cihaz temizliği, pil ve aksesuar ile garanti işlemleri: cihazınızın satış sonrası servis ve bakım hizmetleri.",
    badge: "HİZMETLERİMİZ · SERVİS VE BAKIM",
    h1: "Teknik Servis ve Bakım Hizmetleri",
    paragraphs: [
      "Cihazınızı aldıktan sonra da hizmet devam eder: günlük temizlik, periyodik bakım, pil ve aksesuar, garanti işlemleri, onarım takibi ve teknik servis aşağıdaki sayfalarda anlatılır.",
      "Farklı marka ve modellerde işitme cihazları için bakım ve teknik destek seçenekleri hakkında bilgi alabilirsiniz. Ayrıntıları ilgili sayfalarda bulabilirsiniz.",
    ],
    listHeading: "Servis ve Bakım Hizmetleri",
  },
  "/degerlendirme/": {
    path: "/degerlendirme/",
    title: "İşitme Değerlendirme Hizmetleri | Avrasya İşitme Cihazları",
    description:
      "Ücretsiz işitme testi, odyometri, timpanometri, çocuk işitme testi, tinnitus değerlendirmesi ve online ön değerlendirme: işitme değerlendirme hizmetleri.",
    badge: "HİZMETLERİMİZ · DEĞERLENDİRME",
    h1: "İşitme Değerlendirme Hizmetleri",
    paragraphs: [
      "İşitme durumunuzu anlamanın ilk adımı bir değerlendirmedir. Ücretsiz işitme testi, odyometri, timpanometri, çocuk işitme testi, tinnitus değerlendirmesi ve online ön değerlendirme seçeneklerini buradan inceleyebilirsiniz.",
      "Online işitme testi bir klinik teşhis aracı değildir; ücretsiz işitme testi için Darıca'daki merkezimizden randevu alabilirsiniz.",
    ],
    listHeading: "Değerlendirme Hizmetleri",
  },
  "/teknolojiler/": {
    path: "/teknolojiler/",
    title: "İşitme Cihazı Teknolojileri | Avrasya İşitme Cihazları",
    description:
      "Yapay zekâ destekli işleme, gürültü engelleme, konuşma odaklı özellikler, şarjlı çözümler, kablosuz bağlantı, uzaktan kontrol ve tinnitus desteği rehberi.",
    badge: "İŞİTME CİHAZLARI · TEKNOLOJİLER",
    h1: "İşitme Cihazı Teknolojileri",
    paragraphs: [
      "Modern işitme cihazlarının sunduğu başlıca teknolojiler: yapay zekâ destekli işleme, gürültü engelleme, konuşma odaklı özellikler, şarjlı çözümler, kablosuz bağlantı, uzaktan kontrol ve tinnitus desteği.",
      "Her teknolojinin ne işe yaradığını ve cihaz seçerken nasıl değerlendirileceğini ilgili sayfada okuyabilirsiniz.",
    ],
    listHeading: "Teknoloji Rehberleri",
  },
  "/ihtiyaciniza-gore/": {
    path: "/ihtiyaciniza-gore/",
    title: "İhtiyacınıza Göre İşitme Cihazı Rehberleri | Avrasya İşitme",
    description:
      "Hafif, orta, ileri ve çok ileri derece işitme kaybı, tek taraflı kayıp, yaşlılar ve aktif yaşam için cihaz seçiminde dikkat edilecekler.",
    badge: "İŞİTME CİHAZLARI · İHTİYACINIZA GÖRE",
    h1: "İhtiyacınıza Göre İşitme Cihazı Rehberleri",
    paragraphs: [
      "İşitme kaybının derecesi, tek taraflı kayıp, yaşlılar ve aktif yaşam gibi ihtiyaç başlıklarına göre cihaz seçiminde nelere dikkat edileceğini anlatan rehberler.",
      "Rehberler genel bilgilendirme amaçlıdır; size uygun cihaz, bir işitme testi ve uzmanla yapılacak değerlendirme sonrasında netleşir.",
    ],
    listHeading: "İhtiyaca Göre Rehberler",
  },
  "/segmentler/": {
    path: "/segmentler/",
    title: "İşitme Cihazı Serileri: Premium, Standart, Ekonomik",
    description:
      "Premium, standart ve ekonomik işitme cihazı serileri neyi sunar, kimler için uygun olabilir? Serileri teknoloji düzeyine göre karşılaştırın.",
    badge: "MARKALAR · SEGMENTLER",
    h1: "İşitme Cihazı Serileri: Premium, Standart ve Ekonomik",
    paragraphs: [
      "İşitme cihazları teknoloji düzeyine göre serilere ayrılır. Premium, standart ve ekonomik serilerin neleri sunduğunu ve kimler için uygun olabileceğini karşılaştırın.",
      "Seri seçimi tek başına belirleyici değildir; işitme kaybınız, yaşam tarzınız ve bütçenizle birlikte değerlendirilir.",
    ],
    listHeading: "Cihaz Serileri",
  },
  "/neden-orijinal/": {
    path: "/neden-orijinal/",
    title: "Neden Orijinal İşitme Cihazı ve Üretici Desteği?",
    description:
      "Güvenilir teknoloji, uzun ömürlü cihaz, orijinal aksesuar, kolay değişim, ücretsiz danışmanlık, bakım ve teknik destek: orijinal cihazın önemi.",
    badge: "MARKALAR · NEDEN ORİJİNAL",
    h1: "Neden Orijinal İşitme Cihazı ve Üretici Destekli Servis?",
    paragraphs: [
      "Cihazın kendisi kadar, ardından gelen destek de önemlidir. Güvenilir teknoloji, uzun ömürlü cihaz, orijinal aksesuar, kolay değişim, ücretsiz danışmanlık ile bakım ve teknik destek bilgilerini bu sayfalarda bulabilirsiniz.",
      "Marka danışmanlığı sayfası, size uyan çözümü markadan bağımsız olarak nasıl belirlediğimizi anlatır.",
    ],
    listHeading: "Orijinal Cihaz ve Destek",
  },
  "/rehberler/": {
    path: "/rehberler/",
    title: "İşitme Cihazı Rehberleri | Avrasya İşitme Cihazları",
    description:
      "İşitme kaybı nedir, işitme cihazı nasıl seçilir, ilk kullanım ve uyum süreci nasıl işler? Adım adım işitme cihazı rehberleri.",
    badge: "BİLGİ MERKEZİ · REHBERLER",
    h1: "İşitme Cihazı Rehberleri",
    paragraphs: [
      "İşitme kaybının ne olduğundan cihaz seçimine, ilk kullanımdan uyum sürecine kadar adım adım rehberler.",
      "Sıralı okumak isterseniz İşitme Kaybı Nedir? rehberiyle başlayabilirsiniz.",
    ],
    listHeading: "Rehberler",
  },
  "/kvkk/": {
    path: "/kvkk/",
    title: "KVKK ve Gizlilik | Avrasya İşitme Cihazları",
    description:
      "Aydınlatma metni, çerez politikası, gizlilik politikası ve ilgili kişi başvuru formu: kişisel verilerin korunması ile ilgili belgeler.",
    badge: "KVKK VE GİZLİLİK",
    h1: "KVKK ve Gizlilik",
    paragraphs: ["Kişisel verilerin korunması, çerezler ve gizlilik ile ilgili metinler ve başvuru yolları."],
    listHeading: "Belgeler",
    variant: "legal",
  },
};
