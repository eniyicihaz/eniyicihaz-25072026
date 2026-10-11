// "Üretici Servis Yetkisi Sizin İçin Ne Anlama Gelir?" merkez-ve-ilke grafiği (/neden-orijinal/yaygin-servis-agi).
// Kaynaklar (yeni iddia yok): 18 marka üretici servis yetkisi (işletme sahibi doğrulaması), fiziksel hizmet noktası Darıca,
// garanti kapsamının garanti şartlarına ve arızanın niteliğine bağlı olması, işlem/ücret bilgisinin süreç içinde paylaşılması
// (teknik-servis/considerations.ts, yaygin-servis-agi/faq.ts). Harita, şube işareti veya servis ağı görseli KULLANILMAZ;
// yetkinin her işlemin ücretsiz olduğu anlamına gelmediği açıkça yazılır.
export const authorityMap = {
  eyebrow: "SERVİS YETKİSİ",
  heading: "Üretici Servis Yetkisi Sizin İçin Ne Anlama Gelir?",
  intro:
    "18 markadaki üretici servis yetkisi, servis sürecinde dört konunun üreticinin koşullarına uygun ele alınmasına yardımcı olur.",
  hub: { title: "Avrasya İşitme — Darıca", text: "18 markada üretici servis yetkisi", count: "18" },
  items: [
    {
      title: "Üretici Yetkisi ve Servis Kapsamı",
      text: "Yetki 18 markanın tamamı için geçerlidir; yapılacak işlemin kapsamı markaya, modele ve arızanın türüne göre değişir.",
    },
    {
      title: "Cihaza Uygun Teknik Değerlendirme",
      text: "İşlem, cihazın yapısına ve üreticinin koşullarına uygun şekilde değerlendirilir; gerekiyorsa doğru parça belirlenir.",
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
    "Servis yetkisi, her işlemin ücretsiz olduğu veya her arızanın garanti kapsamında değerlendirileceği anlamına gelmez. Fiziksel hizmet noktamız Darıca'daki merkezimizdir; servis için randevu gerekir.",
  link: { label: "Arıza ve teknik servis süreci için Teknik Servis", href: "/servis-bakim/teknik-servis/" },
};
