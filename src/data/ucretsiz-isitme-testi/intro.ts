// "Ücretsiz İşitme Testi Nedir ve Nasıl İşler?" section for the
// /degerlendirme/ucretsiz-isitme-testi page. Renders through the shared
// BrandPageIntro component. This page's subject is a diagnostic
// procedure, so the same health-content safety discipline used
// throughout the İhtiyacınıza Göre series applies in full — paragraph 3
// is the load-bearing disclaimer: general information, not a
// self-diagnosis tool.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const ucretsizIsitmeTestiIntro: BrandPageIntroContent = {
  badge: "ÜCRETSİZ İŞİTME TESTİ NEDİR?",
  heading: "Ücretsiz İşitme Testi Nedir ve Nasıl İşler?",
  paragraphs: [
    "Ücretsiz işitme testi, işitme durumunuzun bir odyometrist tarafından profesyonel ekipmanlarla değerlendirildiği, herhangi bir ücret talep edilmeyen bir hizmettir.",
    "Test sırasında farklı frekans ve şiddetteki seslere verdiğiniz tepkiler ölçülür; bu ölçümler bir odyogram üzerinde kaydedilir.",
    "Test sonuçları, işitme kaybınızın olup olmadığını, varsa türünü ve derecesini belirlemeye yardımcı olur; ancak kesin tanı ve tedavi yönlendirmesi için sonuçların bir uzman tarafından yorumlanması gerekir.",
    "Bu sayfa genel bir bilgilendirme amacı taşır, kendi kendine tanı koymak için kullanılmamalıdır; işitme durumunuzu öğrenmenin tek güvenilir yolu bir odyometriste muayene olmaktır.",
  ],
  stats: [
    { value: "Odyometrist Eşliğinde", label: "Test Ortamı" },
    { value: "Ücretsiz", label: "Maliyet" },
    { value: "Aynı Gün Sonuç", label: "Sonuç Süresi" },
    { value: "Odyogram ile Kayıt", label: "Test Çıktısı" },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
