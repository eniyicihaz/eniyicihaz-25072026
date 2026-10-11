// "Onarım Genel Olarak Hangi Aşamalardan Geçer?" zaman çizelgesi ve "Durum bilgisi nasıl alınır?" alanı (/servis-bakim/onarim-takibi).
// Doğrulanmış işleyiş: cihaz teslim edildiğinde dijital servis kaydı oluşur; durum telefonla veya WhatsApp'tan sorulabilir;
// gerektiğinde personel SMS/WhatsApp ile MANUEL bilgilendirir. Kayıt müşterinin internetten izlediği bir panel DEĞİLDİR; otomatik mesaj,
// canlı takip veya her aşamada bildirim yoktur. Aşamalar onarımın GENEL akışıdır (evolution.ts'ten taşındı).
export const onarimTimeline = {
  eyebrow: "GENEL SÜREÇ",
  heading: "Onarım Genel Olarak Hangi Aşamalardan Geçer?",
  intro:
    "Aşağıdaki beş aşama onarımın genel işleyişini anlatır. Bu bir kullanıcı panelinde canlı izlenen bir sistem değildir; aşamalar ve süre arızaya göre değişebilir. Bazı sorunlar merkezde çözülebildiğinden her cihaz teknik servise gönderilmez.",
  steps: [
    {
      tone: "blue",
      title: "Teslim Alınır",
      text: "Cihazınız merkezimizde teslim alınır ve dijital bir servis kaydı oluşturulur.",
    },
    {
      tone: "teal",
      title: "Merkezde İlk Değerlendirme",
      text: "Uzmanımız cihazı merkezde ilk kez değerlendirir; bazı sorunlar burada çözülebilir.",
      link: { label: "Teknik servis süreci", href: "/servis-bakim/teknik-servis/" },
    },
    {
      tone: "violet",
      title: "Gerekirse Teknik Servise Gönderilir",
      text: "Merkezde çözülemeyen cihaz teknik servise gönderilir; teknik serviste ilk teknik kontrol yapılır ve arıza netleşir.",
    },
    {
      tone: "navy",
      title: "Süre ve Ücret Bildirilir",
      text: "Tahmini onarım süresi ve varsa ücret, teknik servisteki ilk teknik kontrolden sonra bildirilir; parça veya teknik servis beklenebilir.",
    },
    {
      tone: "sky",
      title: "Onarım ve Teslim Bilgisi",
      text: "Onarım tamamlanıp kontrol edildikten sonra cihazın teslim durumu hakkında sizinle iletişime geçilir.",
    },
  ] as { tone: "blue" | "teal" | "violet" | "navy" | "sky"; title: string; text: string; link?: { label: string; href: string } }[],
  info: {
    title: "Durum Bilgisi Nasıl Alınır?",
    lead: "Cihazınız serviste olduğu sürece güncel durumu üç yoldan öğrenebilirsiniz:",
    items: [
      { kind: "phone", title: "Telefonla sorabilirsiniz", text: "Bizi arayarak cihazınızın güncel durumunu sorabilirsiniz." },
      { kind: "whatsapp", title: "WhatsApp üzerinden yazabilirsiniz", text: "WhatsApp'tan yazarak durum bilgisi isteyebilirsiniz." },
      { kind: "manual", title: "Gerektiğinde personel bilgilendirir", text: "Personelimiz gerektiğinde sizi SMS veya WhatsApp ile manuel olarak bilgilendirir." },
    ] as { kind: "phone" | "whatsapp" | "manual"; title: string; text: string }[],
    caution:
      "Dijital servis kaydı personelimiz tarafından kullanılır; internetten canlı izleyebileceğiniz bir panel değildir. Otomatik mesaj veya her aşamada bildirim gönderilmez.",
  },
};
