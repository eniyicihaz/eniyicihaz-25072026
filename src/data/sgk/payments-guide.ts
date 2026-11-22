// "Tablodaki tutarlar nasıl okunur?" — SGK ödeme tablosunun (payments.ts + sgk-2026-odeme-tablosu.webp) HEMEN ALTINA,
// tablonun DIŞINA konan açıklama blokları. payments.ts, tablo görseli ve 12 tutar bu dosyadan etkilenmez; burada yalnızca
// tablodaki rakamların nasıl okunacağı anlatılır.
//
// Bilginin kaynağı ayrıdır ve sayfada da ayrı gösterilir (basis bloğu):
//  - RESMÎ METİN: Resmî Gazete 17.01.2026 / 33140, Karar 2025/12 — EK-3/C-3 DO1004 = 5.087,04 ₺ ve EK-3/C-4 A10106 =
//    6,00 ₺ (görüntüden gözle teyit edildi); SUT 3.3.32 çocuk oranları (%80 / %60 / %50) ve rapor şartı (resmî sağlık
//    hizmeti sunucusu).
//  - MEDULA İŞLEM BİLGİSİ (mevzuat metni DEĞİL; işletme sahibinin doğrulaması): iki kulakta ×2, pil 104 adet / %20 KDV /
//    748,80 ₺ / 1.497,60 ₺, 5 yıl yenileme süresi, MEDULA kayıt tarihi, kulak bazında ayrı hesap.
//
// Örnek hesaplar yalnızca "tablodaki tutar ×2" ile "tavandan türetme" yöntemlerinin kuruşuna aynı sonucu verdiği satırlardan
// seçildi (ör. emekli 5-12 yaş ×2 iki yöntemde 1 kuruş farklı çıktığı için örnek yapılmadı). Maaştan kesintinin iki kulak
// tutarı bilinçli olarak yazılmaz (yuvarlama farkı riski).
// Yürürlük tarihi (24/26 Ocak) bu blokta bilinçli olarak YOKTUR: resmî metinden doğrulanamadı; tablodaki mevcut
// "Geçerlilik Tarihi" ifadesi görsele gömülü olduğu için payments.ts'te aynen durur.

export interface GuideTable {
  caption: string;
  columns: string[];
  rows: string[][];
}

export interface SgkPaymentsGuideContent {
  ear: { title: string; lead: string; paragraphs: string[]; table: GuideTable };
  child: { title: string; paragraphs: string[]; table: GuideTable; note: string };
  battery: { title: string; lead: string; table: GuideTable; note: string };
  renewal: { title: string; lead: string; paragraph: string; link: { label: string; href: string } };
  basis: {
    title: string;
    intro: string;
    officialHeading: string;
    officialItems: string[];
    medulaHeading: string;
    medulaItems: string[];
    closing: string;
    sourcesHeading: string;
    checkedLabel: string;
  };
}

export const sgkPaymentsGuide: SgkPaymentsGuideContent = {
  ear: {
    title: "Tablodaki tutarlar tek kulak içindir",
    lead: "Yukarıdaki tablodaki her tutar tek kulak, yani tek işitme cihazı içindir.",
    paragraphs: [
      "İki kulağa cihaz uygulanıyor ve her iki cihaz için SGK koşulları sağlanıyorsa tablodaki tutar ikiyle çarpılır. Emekli için “Maaştan Kesinti” sütunundaki tutar da tek cihaz içindir.",
      "SGK'nın işitme kaybı ölçütleri ilgili kulak için ayrı ayrı aranır.",
    ],
    table: {
      caption: "İki kulak için örnek hesap",
      columns: ["Grup", "Tek kulak (tablodaki tutar)", "İki kulak (×2)"],
      rows: [
        ["Yetişkin, çalışan", "4.069,63 ₺", "8.139,26 ₺"],
        ["Yetişkin, emekli", "5.087,04 ₺", "10.174,08 ₺"],
        ["5-12 yaş, çalışan", "6.511,41 ₺", "13.022,82 ₺"],
      ],
    },
  },
  child: {
    title: "Çocuk tutarları nasıl hesaplanır?",
    paragraphs: [
      "Çocuk tutarları, yetişkin tutarının SUT'taki çocuk oranlarıyla artırılmasıyla bulunur (SUT 3.3.32): 0-4 yaş için %80, 5-12 yaş için %60 ve 13-18 yaş için %50 artırılarak karşılanır.",
      "Hesabın başlangıcı yetişkin emekli tutarı olan 5.087,04 ₺'dir. Bu rakam, SUT fiyat listesindeki (EK-3/C-3) “Dijital programlanabilir işitme cihazı” kaleminin (DO1004) fiyatıdır.",
    ],
    table: {
      caption: "Çocuk tutarlarının hesabı (emekli sütunu)",
      columns: ["Yaş grubu", "Artış oranı", "Hesap", "Tablodaki emekli tutarı"],
      rows: [
        ["0-4 yaş", "%80", "5.087,04 ₺ × 1,80", "9.156,67 ₺"],
        ["5-12 yaş", "%60", "5.087,04 ₺ × 1,60", "8.139,26 ₺"],
        ["13-18 yaş", "%50", "5.087,04 ₺ × 1,50", "7.630,56 ₺"],
      ],
    },
    note: "Çalışan tutarı, aynı yaş grubundaki emekli tutarının %80'idir; emekli maaşından yapılan kesinti ise emekli tutarının %10'u kadardır. Tablodaki 12 tutarın hepsi bu orantılarla oluşur.",
  },
  battery: {
    title: "Pil desteği ve KDV hesabı",
    lead: "SGK, işitme cihazı başına yıllık 104 adet pil bedelini karşılar.",
    table: {
      caption: "2026 pil desteği hesabı",
      columns: ["Kalem", "Tutar"],
      rows: [
        ["Pil birim bedeli (KDV hariç)", "6,00 ₺"],
        ["Birim bedel + %20 KDV", "7,20 ₺"],
        ["Tek cihaz: yıllık 104 adet (104 × 7,20 ₺)", "748,80 ₺"],
        ["İki cihaz: yıllık 208 adet", "1.497,60 ₺"],
      ],
    },
    note: "Başka bir deyişle 104 adet pilin KDV hariç bedeli 624,00 ₺'dir; üzerine 124,80 ₺ KDV eklenince tek cihaz için 748,80 ₺ olur. İki cihazda pil adedi ve tutar iki katına çıkar.",
  },
  renewal: {
    title: "Yenileme süresi 5 yıldır",
    lead: "SGK kapsamındaki işitme cihazı yenileme süresi, çocuklar dâhil bütün yaş gruplarında 5 yıldır.",
    paragraph:
      "Süre, önceki cihazın MEDULA sistemine kaydedildiği tarihten itibaren hesaplanır. Sağ ve sol kulak cihazlarının kayıt tarihleri farklıysa her kulağın süresi ayrı hesaplanır.",
    link: {
      label: "Yenileme hakkı: örnek hesap, süre dolmadan yenileme ve e-Devlet sorgulama",
      href: "/sgk/yenileme-hakki/",
    },
  },
  basis: {
    title: "Bilginin dayanağı",
    intro:
      "Bu bölümdeki bilgilerin hangisinin resmî metinlere, hangisinin merkezimizin işlem bilgisine dayandığını ayırıyoruz.",
    officialHeading: "Resmî metinlerde yer alanlar",
    officialItems: [
      "Yetişkin emekli tutarı 5.087,04 ₺: SUT fiyat listesi EK-3/C-3, DO1004 (Dijital programlanabilir işitme cihazı). Kaynak: Resmî Gazete, 17 Ocak 2026, sayı 33140, Karar No: 2025/12.",
      "Çocuk oranları (%80, %60, %50): SUT 3.3.32.",
      "Pil birim bedeli 6,00 ₺: SUT fiyat listesi EK-3/C-4, A10106 (İşitme cihazı pili). Kaynak: aynı Karar.",
      "Sağlık kurulu raporunun resmî sağlık hizmeti sunucularında düzenlenmesi: SUT 3.3.32.",
    ],
    medulaHeading: "Merkezimizin MEDULA uygulamasındaki işlem bilgisine dayananlar (mevzuat metni değildir)",
    medulaItems: [
      "İki kulakta tablodaki tutarın ikiyle çarpılması.",
      "Pil için yıllık 104 adet ve KDV dâhil 748,80 ₺ hesabı (iki cihazda 208 adet ve 1.497,60 ₺).",
      "5 yıllık yenileme süresinin MEDULA kayıt tarihinden başlaması ve her kulağın ayrı hesaplanması.",
    ],
    closing:
      "Tutarlar ve koşullar SGK mevzuatındaki değişikliklerle güncellenebilir; güncel durum için merkezimizden bilgi alabilirsiniz.",
    sourcesHeading: "Resmî kaynaklar",
    checkedLabel: "Son kontrol:",
  },
};
