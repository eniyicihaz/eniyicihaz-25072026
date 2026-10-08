// "Merkezimizde" kısa link listesi + evde hizmet bölümü — /iletisim (Faz 2 P2).
// Önceki 6 kartlık BrandCriteria bölümü iletişim niyetini aşıyordu; yalnızca
// ziyaret öncesi en çok aranan sayfalara linkler kaldı. Cihaz seçimi ve
// kulak kalıbı linkleri kendi sayfalarına bırakıldı.
export interface ContactShortcut {
  label: string;
  href: string;
}

export const contactShortcuts = {
  eyebrow: "Merkezimizde",
  heading: "Ziyaretten Önce Göz Atabileceğiniz Sayfalar",
  items: [
    { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi/" },
    { label: "SGK ile Cihaz Süreci", href: "/sgk-isitme-cihazi-odemesi/" },
    { label: "Teknik Servis", href: "/servis-bakim/teknik-servis/" },
    { label: "Darıca Merkezimizin Sayfası", href: "/darica-isitme-cihazlari/" },
  ] as ContactShortcut[],
};

// Evde hizmet kapsamı: LOCAL_SOURCE_OF_TRUTH §3, SERVICE_SOURCE_OF_TRUTH H16.
export const contactHomeService = {
  eyebrow: "Evde Hizmet",
  heading: "Merkeze Gelemiyorsanız",
  text: "Evde hizmetimiz Kocaeli'nin tamamını ve İstanbul Anadolu Yakası'nın tüm ilçelerini kapsar. Hizmet ücretsizdir ve randevuyla planlanır; bizi arayarak ya da WhatsApp'tan yazarak talep edebilirsiniz.",
  linkLabel: "Evde işitme cihazı hizmeti hakkında bilgi alın",
  href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti/",
};
