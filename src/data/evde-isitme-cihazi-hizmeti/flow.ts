// Evde hizmet mini akışı (HomeVisitFlow) — YENİ BİLGİ YOK. Cümleler /uygulama-ayar/evde-isitme-cihazi-hizmeti/ sayfasının kendi
// metnidir: hizmet bölgesi (Kocaeli'nin tamamı + İstanbul Anadolu Yakası'nın tüm ilçeleri), ücretsiz ve randevulu, süre yaklaşık
// 10–60 dakika, "hangi işlemin evde yapılabileceği randevuda birlikte netleştirilir", ani işitme kaybı/ağrı/akıntıda önce sağlık
// kuruluşu. Eski `scope.ts` (evde yapılabilecek işlemlerin tek tek sayımı) SAYFADAN BİLİNÇLİ OLARAK KALDIRILDIĞI için burada
// kullanılmaz: ihtiyaç seçenekleri yalnızca konuyu mesaja taşır, "bu işlem evde yapılır" vaadi vermez.
export interface FlowRegion {
  id: string;
  label: string;
  hint: string;
  /** true: sitede belirtilen evde hizmet bölgesi içinde. */
  covered: boolean;
  /** Sonuç ekranındaki bölge cümlesi. */
  statement: string;
}

export interface FlowNeed {
  id: string;
  label: string;
}

export const homeVisitFlow = {
  eyebrow: "2 Adımda Talep",
  heading: "Evde Hizmet İçin Bölgenizi ve İhtiyacınızı Seçin",
  intro: "Cevaplarınız kaydedilmez; yalnızca size uygun bilgiyi gösterir ve WhatsApp mesajını önceden doldurur.",
  regionQuestion: "Hangi bölgedesiniz?",
  needQuestion: "Evde hangi konuda destek istiyorsunuz?",
  regions: [
    {
      id: "kocaeli",
      label: "Kocaeli",
      hint: "Darıca, Gebze, Çayırova ve diğer tüm ilçeler",
      covered: true,
      statement: "Kocaeli'nin tüm ilçeleri evde hizmet bölgemizdedir.",
    },
    {
      id: "istanbul-anadolu",
      label: "İstanbul Anadolu Yakası",
      hint: "Anadolu Yakası'nın tüm ilçeleri",
      covered: true,
      statement: "İstanbul Anadolu Yakası'nın tüm ilçeleri evde hizmet bölgemizdedir.",
    },
    {
      id: "diger",
      label: "Başka bir bölge",
      hint: "Kocaeli veya Anadolu Yakası dışında",
      covered: false,
      statement: "Sitede belirttiğimiz evde hizmet bölgesi Kocaeli ve İstanbul Anadolu Yakası'dır. Bulunduğunuz yer için bizi arayarak sorabilirsiniz.",
    },
  ] as FlowRegion[],
  needs: [
    { id: "test", label: "İşitme değerlendirmesi / test" },
    { id: "ayar", label: "Cihaz ayarı veya kontrolü" },
    { id: "bakim", label: "Cihaz bakımı veya temizliği" },
    { id: "pil", label: "Pil veya aksesuar" },
    { id: "deneme", label: "Cihaz denemek veya seçmek" },
    { id: "emin-degilim", label: "Henüz emin değilim" },
  ] as FlowNeed[],
  /** Sayfanın kendi cümleleri (sonuçta, bölge kapsam içindeyse gösterilir). */
  facts: [
    "Evde hizmet ücretsizdir ve randevuyla planlanır.",
    "Süre, yapılacak işleme göre yaklaşık 10–60 dakika arasında değişir.",
    "Evde hizmet, merkezimizde verdiğimiz hizmetlerin kapsamı doğrultusunda sunulur; hangi işlemin evde yapılabileceğini randevuda birlikte netleştiriyoruz.",
  ],
  safety:
    "Kulağınızda aniden gelişen bir işitme kaybı, ağrı veya akıntı fark ederseniz evde hizmet talep etmeden önce en kısa sürede bir sağlık kuruluşuna başvurun.",
};
