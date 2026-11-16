// Contact configuration — single source of truth for phone/WhatsApp
// across the site. Same real, already-established number used
// throughout the project (Header, Oticon brand page) — not a new value,
// just centralized so components stop hardcoding tel:/wa.me links.
//
// İki hat vardır ve rolleri farklıdır:
//   • `phone`    — ANA numara (cep). Sitedeki bütün "Bizi Arayın" CTA'ları ve WhatsApp bu numaradır.
//   • `landline` — merkez sabit hattı (ikincil). Yalnızca footer ve konum kartındaki telefon listesinde
//                  "Merkez" etiketiyle görünür; hiçbir ana CTA bu numaraya gitmez.
//
// `phoneReach` — TELEFONLA ULAŞILABİLİRLİK bilgisidir (işletme sahibi kararı, 2026-11-17): ana numara
// 23:59'a kadar aranabilir. Bu bilgi FİZİKSEL MERKEZ ZİYARET SAATİ DEĞİLDİR:
//   • merkez saatleri ayrı kaynaktadır (components/footer/Footer/data/company.ts → `hours`,
//     lib/open-status.ts → SCHEDULE) ve buradan etkilenmez;
//   • "Şu an açık/kapalı" satırı (OpenStatus) yalnızca merkez saatlerine göre hesaplanır;
//   • yapılandırılmış veriye (LocalBusiness openingHoursSpecification vb.) YAZILMAZ;
//   • "7/24", "24 saat" gibi bir ifadeye dönüştürülmez. Hangi günler / hangi saatten itibaren bilgisi
//     verilmediği için metinler yalnızca "23:59'a kadar" der; gün veya başlangıç saati iddiası taşımaz.
export const contactConfig = {
  phone: {
    display: "0533 773 31 99",
    href: "tel:+905337733199",
    e164: "+905337733199",
  },
  landline: {
    display: "0262 656 32 77",
    href: "tel:+902626563277",
    e164: "+902626563277",
  },
  whatsapp: {
    href: "https://wa.me/905337733199",
  },
  phoneReach: {
    /** Büyük vurgu ("23:59'A KADAR" — büyük harf CSS ile verilir; ekran okuyucu doğal okur). */
    untilLabel: "23:59'a kadar",
    /** Telefonun yanında değilken kullanılan kısa biçim (ör. menü satırı). */
    compactLabel: "Telefonla 23:59'a kadar",
    /** Merkez saatlerinin yanında, ondan AYRI duran telefon etiketi. */
    statusLabel: "Telefonla iletişim 23:59'a kadar açık",
    heading: "Telefonla Bize Ulaşın",
    text: "Bilgi almak ve randevu oluşturmak için bizi arayın.",
    cta: "Bizi Arayın",
    /** İletişim sayfasındaki ek açıklama. */
    note: "Fiziksel merkezimizin ziyaret saatleri dışında da telefonla bilgi alabilir ve randevu oluşturabilirsiniz.",
    /** Merkez (fiziksel) saat listelerinin üzerindeki ortak başlık. */
    visitHoursLabel: "Merkez Ziyaret Saatleri",
  },
};
