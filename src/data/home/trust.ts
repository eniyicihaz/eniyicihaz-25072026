// Ana sayfa — "Güven / Kurumsal Bilgiler" (HomeTrust, Faz 2 P2 onay V1).
// Yalnızca SoT'ta doğrulanmış bilgiler:
//   BUSINESS_SOT: kuruluş 2009; Darıca merkezi Ağustos 2024.
//   COMPANY / BUSINESS_SOT: SGK anlaşmalı merkez; SERVICE_SOT H24: SGK
//     işlemlerinde destek ücretsiz.
//   PRODUCT_SOT: 18 marka satılıyor, tamamında teknik servis.
//   BUSINESS_SOT §4: ekipte odyolog (Odyoloji mezunu) ve odyometrist
//     (Odyometri mezunu) bulunur. İsim ve fotoğraf yayın rızası doğrulanmadığı
//     için yalnızca unvan kullanılır.
// Kullanılmayanlar: "2009'dan beri SGK anlaşmalı" (SGK sözleşme tarihi SoT'ta
// yok), "Uzman kadro" (doğrulanmamış sıfat).
export interface HomeTrustItem {
  value: string;
  label: string;
}

export interface HomeTrustContent {
  eyebrow: string;
  heading: string;
  intro: string;
  items: HomeTrustItem[];
  aboutLink: { label: string; href: string };
}

export const homeTrust: HomeTrustContent = {
  eyebrow: "Kurumsal Bilgiler",
  heading: "Avrasya İşitme Cihazları Hakkında",
  intro: "Karar vermeden önce bilmeniz gereken temel bilgiler.",
  items: [
    { value: "2009", label: "Avrasya İşitme Cihazları'nın kuruluş yılı" },
    { value: "Ağustos 2024", label: "Darıca merkezimizin açılışı" },
    { value: "SGK Anlaşmalı", label: "SGK işlemlerinde ücretsiz destek" },
    { value: "18 Marka", label: "Satış ve teknik servis" },
    { value: "Odyolog ve Odyometrist", label: "İşitme testi ve cihaz uygulaması ekibimiz" },
  ],
  aboutLink: { label: "Hakkımızda daha fazla bilgi", href: "/hakkimizda/" },
};
