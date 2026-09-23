// "İlk Kullanım Rehberi Nedir ve Neden Önemlidir?" section for the
// /rehberler/ilk-kullanim-rehberi page. Renders through the shared
// BrandPageIntro component. Educational genre, same as İşitme Kaybı
// Nedir? ve Cihaz Seçim Rehberi — paragraph 4 sets the honest boundary
// against marka-özel talimatlar and the professional fitting
// appointment.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const ilkKullanimRehberiIntro: BrandPageIntroContent = {
  badge: "İLK KULLANIM REHBERİ NEDİR?",
  heading: "İlk Kullanım Rehberi Nedir ve Neden Önemlidir?",
  paragraphs: [
    "İlk kullanım rehberi, yeni işitme cihazınızı ilk günlerde nasıl takıp çıkaracağınızı, temel kontrollerini nasıl kullanacağınızı ve ne kadar süreyle takmanız gerektiğini anlatan pratik bir başlangıç kılavuzudur.",
    "Cihazınızın profesyonel olarak ayarlanması ve size uygulanması, uygulama randevunuzda zaten tamamlanmıştır; bu rehber, o randevudan sonraki günlük kullanım pratiğine odaklanır.",
    "İlk günlerde farklı bir ses algısı yaşamak normaldir; bu rehber, kısa vadeli pratik bilgileri kapsar, uzun vadeli alışma süreciyle ilgili detaylı bilgi için Uyum Süreci sayfamızı inceleyebilirsiniz.",
    "Bu rehber genel bir çerçeve sunar; cihazınıza özel talimatlar için kullanım kılavuzunuza veya odyometristinize başvurmanız önerilir.",
  ],
  stats: [
    { value: "Takma ve Çıkarma", label: "İlk Adım" },
    { value: "Temel Kontroller", label: "Günlük Kullanım" },
    { value: "Kademeli Süre Artışı", label: "İlk Hafta Önerisi" },
    { value: "Basit Sorun Giderme", label: "Pratik Destek" },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
