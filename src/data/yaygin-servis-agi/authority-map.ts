// "Bakım ve Teknik Destek Sürecinde Neler Ele Alınır?" merkez-ve-ilke grafiği (/neden-orijinal/yaygin-servis-agi).
// Kaynaklar (yeni iddia yok; 2026-11-14 işletme sahibi kararıyla marka sayısı ve üretici yetkisi ifadeleri kaldırıldı): fiziksel hizmet noktası Darıca,
// garanti kapsamının garanti şartlarına ve arızanın niteliğine bağlı olması, işlem/ücret bilgisinin süreç içinde paylaşılması
// (teknik-servis/considerations.ts, yaygin-servis-agi/faq.ts). Harita, şube işareti veya servis ağı görseli KULLANILMAZ;
// teknik desteğin her işlemin ücretsiz olduğu anlamına gelmediği açıkça yazılır.
export const authorityMap = {
  eyebrow: "BAKIM VE TEKNİK DESTEK",
  heading: "Bakım ve Teknik Destek Sürecinde Neler Ele Alınır?",
  intro:
    "Bakım ve teknik destek sürecinde dört konu birlikte ele alınır.",
  hub: { title: "Avrasya İşitme — Darıca", text: "Bakım ve teknik destek" },
  items: [
    {
      title: "Marka ve Modele Göre Kapsam",
      text: "Yapılacak işlemin kapsamı markaya, modele ve arızanın türüne göre değişir.",
    },
    {
      title: "Cihaza Uygun Teknik Değerlendirme",
      text: "İşlem, cihazın yapısına uygun şekilde değerlendirilir; gerekiyorsa cihazla uyumlu parça belirlenir.",
    },
    {
      title: "Garanti Koşullarının İncelenmesi",
      text: "Garanti kapsamı, cihazın garanti şartlarına ve arızanın niteliğine göre incelenir.",
    },
    {
      title: "İşlem ve Ücret Hakkında Bilgilendirme",
      text: "İşlemin kapsamı ve varsa ücret konusunda süreç içinde sizinle iletişime geçilir.",
    },
  ],
  note:
    "Teknik destek, her işlemin ücretsiz olduğu veya her arızanın garanti kapsamında değerlendirileceği anlamına gelmez. Fiziksel hizmet noktamız Darıca'daki merkezimizdir; servis için randevu gerekir.",
  link: { label: "Arıza ve teknik servis süreci için Teknik Servis", href: "/servis-bakim/teknik-servis/" },
};
