// "Sorununuzun Niteliğine Göre Hangi Yol İzlenir?" karar grafiği (/servis-bakim/teknik-servis).
// İçerik, sayfanın mevcut doğrulanmış anlatımına dayanır (evolution.ts'ten taşındı; yeni iddia yok):
//   • sorun bildirimi + randevu → SERVICE_SOT H17 (randevu gerekli)
//   • merkezde ilk değerlendirme (çözülebilen sorunlar) ve teknik serviste ilk teknik kontrol İKİ AYRI aşamadır (işletme sahibi doğrulaması)
//   • merkezde yapılabilen işlem / üretici servisine yönlendirme → intro.ts, comparison.ts, SERVICE_SOT (garanti cihazları dış servise)
//   • garanti kapsamı garanti şartlarına ve arızanın niteliğine bağlıdır; garanti dışı işlemde ücret önceden paylaşılır → considerations.ts, faq.ts
//   • son kontrol: "teslimde işlevsellik birlikte kontrol edilir" → advantages.ts
// Süre veya her işlemde aynı kontrollerin yapıldığı iddiası yoktur; dallar ALTERNATİFTİR.
export const teknikServisDecision = {
  eyebrow: "YÖNLENDİRME",
  heading: "Sorununuzun Niteliğine Göre Hangi Yol İzlenir?",
  intro:
    "Cihaz merkezde ilk değerlendirmeden geçer; izlenecek yol bu değerlendirmeye göre belirlenir. Aşağıdaki dallar alternatif senaryolardır; her işlemde hepsi izlenmez.",
  start: [
    { title: "Sorunu Bildirir, Cihazı Getirirsiniz", text: "Bizi arayarak veya WhatsApp'tan yazarak sorununuzu paylaşır, randevu alır ve cihazı merkezimize getirirsiniz." },
    { title: "Merkezde İlk Değerlendirme", text: "Uzmanımız cihazı merkezimizde ilk kez değerlendirir; bazı sorunlar burada çözülebilir ve teknik servise gönderim gerekmeyebilir." },
  ],
  branches: [
    {
      key: "center",
      tag: "Alternatif 1",
      title: "Merkezde Çözülebilecek İşlem",
      text: "Sorunun niteliğine göre bazı işlemler merkezde ilk değerlendirme sırasında çözülebilir; bu durumda cihazın teknik servise gönderilmesi gerekmez.",
    },
    {
      key: "maker",
      tag: "Alternatif 2",
      title: "Teknik Servise Gönderim Gereken İşlem",
      text: "Merkezde çözülemeyen cihaz teknik servise gönderilir. Teknik serviste yapılan ilk teknik kontrolle arıza netleşir; tahmini onarım süresi ve varsa ücret bu kontrolden sonra size bildirilir.",
    },
    {
      key: "cost",
      tag: "Alternatif 3",
      title: "Garanti veya Ücret Yönünden Ayrıca Değerlendirilen İşlem",
      text: "Garanti kapsamı cihazın garanti şartlarına ve arızanın niteliğine göre belirlenir; varsa onarım ücreti teknik servisteki ilk teknik kontrolden sonra bildirilir.",
    },
  ] as { key: "center" | "maker" | "cost"; tag: string; title: string; text: string }[],
  end: {
    title: "Uygun Son Kontrol",
    text: "İşlem tamamlandığında, işlemin türüne uygun bir kontrol yapılır; onarılan cihazın işlevselliği teslimde sizinle birlikte kontrol edilir.",
  },
  note:
    "Fiziksel bir arıza yoksa, şikâyet ayar veya performans kaynaklı olabilir; bu durumda Kontrol Randevusu veya Uzaktan Ayar daha uygun bir ilk adım olabilir. İşlem süresi arızanın türüne ve değerlendirmeye göre değişir; tahmini onarım süresi, merkezdeki ilk değerlendirmeden ayrı olarak teknik servisteki ilk teknik kontrolden sonra bildirilir.",
  links: [
    { label: "Kontrol Randevusu", href: "/uygulama-ayar/kontrol-randevusu/" },
    { label: "Uzaktan Ayar", href: "/uygulama-ayar/uzaktan-ayar/" },
  ],
};
