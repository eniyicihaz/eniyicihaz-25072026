// "SGK başvuru kontrol listesi" — YENİ BİLGİ İÇERMEZ. Her madde sitedeki mevcut SGK sayfalarının kendi cümlelerinin kısa
// derlemesidir; tutar, süre, yüzde, gün sayısı YOKTUR (SoT: SGK tutarları yalnızca güncel tablodan, süreler "hastaneye
// göre değişir"). `source` her maddenin dayandığı sayfayı gösterir; sayfa metni değişirse bu liste de gözden geçirilmelidir.
//
//   /sgk-isitme-cihazi-odemesi/  → "SGK sürecinin 4 adımı", "Uygunluk Kontrol Listesi"
//   /sgk/rapor-sureci/           → heyet raporu, tam teşekküllü hastane, reçete, e-Devlet sorgulama
//   /sgk/gerekli-belgeler/       → kimlik, SGK kayıt bilgileri, çocuk (veli/vasi), yenileme, belgeleri nereden temin edersiniz
export interface SgkGuideItem {
  text: string;
}

export interface SgkGuideGroup {
  id: string;
  /** "Başlamadan önce" veya "1. Adım …" */
  title: string;
  lead: string;
  items: SgkGuideItem[];
  /** Ayrıntı bağlantısı (mevcut sayfa). */
  more: { href: string; label: string };
}

export const sgkGuide = {
  eyebrow: "Adım Adım",
  heading: "SGK Başvuru Kontrol Listesi (Yazdırılabilir)",
  intro:
    "SGK işitme cihazı sürecini dört adımda, işaretleyerek takip edebilirsiniz. Liste, bu sitedeki SGK rehberlerinin kısa özetidir; yazdırabilir veya PDF olarak kaydedebilirsiniz.",
  printLabel: "Listeyi yazdır / PDF kaydet",
  note:
    "Belge şartları ve destek tutarları SGK mevzuatındaki güncellemelere göre değişebilir. Hangi belgenin aslının, hangisinin fotokopisinin istendiğini ve size özel güncel listeyi merkezimizden telefon veya WhatsApp ile öğrenebilirsiniz.",
  groups: [
    {
      id: "baslamadan-once",
      title: "Başlamadan önce",
      lead: "SGK desteğinden yararlanmak için temel şartlar:",
      items: [
        { text: "SGK güvencem var" },
        { text: "İşitme kaybımı gösteren sağlık kurulu (heyet) raporum var — yoksa 2. adıma bakın" },
        { text: "Uzman hekim tarafından düzenlenmiş işitme cihazı reçetem var — yoksa 2. adıma bakın" },
        { text: "Güncel SGK şartlarını kontrol ettim" },
      ],
      more: { href: "/sgk-isitme-cihazi-odemesi/", label: "SGK işitme cihazı ödemesi rehberi" },
    },
    {
      id: "adim-1",
      title: "1. Adım — Muayene ve işitme testi",
      lead: "KBB uzmanı veya ilgili hekim muayene eder, gerekli işitme testleri yapılır ve işitme kaybı değerlendirilir.",
      items: [{ text: "KBB uzmanı / ilgili hekim muayenesi tamamlandı" }, { text: "Gerekli işitme testleri (odyometri vb.) yapıldı" }],
      more: { href: "/degerlendirme/ucretsiz-isitme-testi/", label: "Ücretsiz işitme testi" },
    },
    {
      id: "adim-2",
      title: "2. Adım — Rapor ve reçete",
      lead: "İşitme cihazı kullanımı uygun görüldüğünde rapor ve reçete düzenlenir. Rapor yalnızca tam teşekküllü bir devlet veya özel hastaneden alınabilir.",
      items: [
        { text: "Tam teşekküllü hastaneden sağlık kurulu (heyet) raporu alındı" },
        { text: "Uzman hekim reçetesi alındı (rapor tek başına yeterli değildir)" },
        { text: "Rapor ve reçetenin durumunu e-Devlet'ten kontrol ettim" },
      ],
      more: { href: "/sgk/rapor-sureci/", label: "SGK rapor süreci" },
    },
    {
      id: "adim-3",
      title: "3. Adım — Belgeler ve SGK başvurusu",
      lead: "Gerekli belgeler hazırlanır ve SGK başvuru süreci tamamlanır.",
      items: [
        { text: "Kimlik belgem hazır (nüfus cüzdanı veya kimlik kartı)" },
        { text: "SGK'ya kayıtlı bilgilerimin güncel olduğunu kontrol ettim" },
        { text: "Çocuk başvurusuysa: veli/vasi olduğumu gösteren belgeler hazır (istenebilir)" },
        { text: "Cihaz yenileme başvurusuysa: mevcut cihazıma dair bilgiler hazır (istenebilir)" },
        { text: "Belge listemi merkezle (telefon veya WhatsApp) teyit ettim" },
      ],
      more: { href: "/sgk/gerekli-belgeler/", label: "SGK için gerekli belgeler" },
    },
    {
      id: "adim-4",
      title: "4. Adım — Cihaz uygulaması ve teslim",
      lead: "Size en uygun cihaz seçilir, kişiye özel ayarlanır, kullanım eğitimi verilir ve takip süreci başlatılır.",
      items: [
        { text: "Cihaz seçimi yapıldı" },
        { text: "Cihaz kişiye özel ayarlandı" },
        { text: "Kullanım eğitimi alındı" },
        { text: "Takip (kontrol) süreci başladı" },
      ],
      more: { href: "/uygulama-ayar/cihaz-uygulama/", label: "Cihaz uygulaması" },
    },
  ] as SgkGuideGroup[],
};
