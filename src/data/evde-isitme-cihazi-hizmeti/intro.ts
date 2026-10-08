// Evde İşitme Cihazı Hizmeti — "Hizmet bölgesi" bloğu (Faz 2 P2).
// Önceki "Ne sunuyoruz" girişi, 8 maddelik işlem kapsamı ve 4 stat
// kaldırıldı: hangi işlemlerin evde yapıldığı SoT'ta doğrulanmadı
// (SERVICE_SOT H16 yalnızca "merkezde verilen hizmetlerin kapsamı
// doğrultusunda" diyor); "3 İlçe", "uzman", "tercih edilen" gibi ifadeler
// de doğrulanmamıştı. Süre aralığı H16'dan: 10–60 dakika (değişken).
export interface EvdeHizmetAreaBlock {
  badge: string;
  heading: string;
  paragraphs: string[];
}

export const evdeHizmetArea: EvdeHizmetAreaBlock = {
  badge: "HİZMET BÖLGESİ",
  heading: "Nerelerde Evde Hizmet Veriyoruz?",
  paragraphs: [
    "Evde hizmetimiz Kocaeli'nin tamamını ve İstanbul Anadolu Yakası'nın tüm ilçelerini kapsar. Hizmet ücretsizdir ve randevuyla planlanır; süresi yapılacak işleme göre yaklaşık 10–60 dakika arasında değişir.",
    "Evde hizmet, merkezimizde verdiğimiz hizmetlerin kapsamı doğrultusunda sunulur; hangi işlemin evde yapılabileceğini randevuda birlikte netleştiriyoruz.",
    "Evde hizmet verilen yerlerde şubemiz yoktur; tek fiziksel merkezimiz Darıca'dadır.",
  ],
};
