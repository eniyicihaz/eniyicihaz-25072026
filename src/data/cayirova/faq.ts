// Çayırova landing page — SSS. Sorular gerçek Çayırova arama niyetlerine
// (karar süreci, fiyat, SGK, kullanım, servis) cevap veriyor — Gebze
// sayfasının sorularının şehir adı değiştirilmiş hâli değil, kısmen farklı
// sorular (ör. şarjlı cihaz kullanım süresi) içeriyor. "Çayırova'da şubeniz
// var mı?" gibi bir soru bilinçli olarak eklenmedi — bu konu kullanıcıya
// gereksiz şekilde öne çıkarılmıyor; ama hiçbir yerde gerçek olmayan bir
// fiziksel şube iddiası da yok.
import { contactConfig } from "../../config/contact";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const cayirovaFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Çayırova'da İşitme Cihazı Hakkında Merak Edilenler",
  intro: "Cihaz seçimi, fiyat, SGK ve süreçlerimiz hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "İhtiyacınızı Konuşalım mı?",
    points: [
      "SGK anlaşmalı hizmet",
      "Ücretsiz ilk değerlendirme",
      "18+ marka seçeneği",
      "Satın almadan önce deneme imkânı",
    ],
    ctaLabel: "Bizi Arayın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Cihaz ve Karar",
      items: [
        {
          question: "Çayırova'da işitme cihazı seçerken nereden başlamalıyım?",
          answer: "Öncelikle ücretsiz bir işitme değerlendirmesi yaptırmanızı öneririz; sonuçlara göre size uygun cihaz seçeneklerini birlikte belirleriz.",
        },
        {
          question: "Hangi işitme cihazı türü bana daha uygun olur?",
          answer: "Kulak arkası, kulak içi, görünmez, şarjlı ve Bluetooth özellikli seçenekler arasından, işitme kaybınızın derecesine göre öneride bulunuyoruz.",
        },
        {
          question: "Cihazı satın almadan önce deneyebilir miyim?",
          answer: "Evet; önerilen cihazı satın almadan önce günlük yaşamınızda deneyebilirsiniz.",
        },
      ],
    },
    {
      label: "Fiyat ve SGK",
      items: [
        {
          question: "Çayırova işitme cihazı fiyatları neye göre belirlenir?",
          answer: "Fiyatlar teknoloji seviyesi, özellikler ve markaya göre değişir. Sabit bir rakam vermek yerine, ihtiyacınıza uygun gerçekçi seçenekleri birlikte değerlendiriyoruz.",
        },
        {
          question: "Çayırova SGK işitme cihazı desteğinden nasıl yararlanırım?",
          answer: "SGK anlaşmalı bir merkezden hizmet alarak, rapor ve reçete süreciyle SGK desteğinden yararlanabilirsiniz.",
        },
      ],
    },
    {
      label: "Kullanım ve Destek",
      items: [
        {
          question: "Şarjlı işitme cihazları günde kaç saat kullanılabilir?",
          answer: "Modern şarjlı işitme cihazları, tam şarjla genellikle gün boyu kullanım sağlar; süre modele göre değişebilir.",
        },
        {
          question: "İşitme cihazımın ayarını sonradan değiştirebilir miyim?",
          answer: "Evet; ilk ayarın ardından kullanım deneyiminize göre ince ayar ve takip desteği sağlıyoruz.",
        },
        {
          question: "Teknik servis ve bakım hizmeti sunuyor musunuz?",
          answer: "Evet; cihazınızdaki arıza ve bakım ihtiyaçlarında teknik servis desteği sunuyoruz.",
        },
      ],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
