// "Garanti Talebi Süreci Nasıl İşler?" section for the /servis-bakim/
// garanti-islemleri page. Reuses the shared BrandPageTechEvolution
// component in its original "stage" sense (era / what it brought / who
// it's for / tags) — repurposed here as an ordered set of claim-process
// steps, same technique used throughout this session's service pages.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const garantiIslemleriEvolution: BrandPageTechEvolutionContent = {
  badge: "SÜREÇ ADIMLARI",
  heading: "Garanti Talebi Süreci Nasıl İşler?",
  intro: "Belge kontrolünden teslime kadar izlenen beş adımlık süreci bir araya getirdik.",
  stages: [
    {
      era: "Garanti Belgesi Kontrolü",
      whatItBrought: "Fatura ve garanti belgeniz kontrol edilerek cihazınızın garanti durumu doğrulanır.",
      bestFor: "Sürecin ilk adımı",
      families: ["Belge Kontrolü"],
    },
    {
      era: "Sorun Bildirimi ve Kapsam Değerlendirmesi",
      whatItBrought: "Yaşadığınız sorun dinlenir ve garanti kapsamına girip girmediği değerlendirilir.",
      bestFor: "Kapsam belirleme",
      families: ["Kapsam Değerlendirmesi"],
    },
    {
      era: "Teşhis",
      whatItBrought: "Sorunun üretim kaynaklı olup olmadığını netleştirmek için cihaz teknik olarak incelenir.",
      bestFor: "Neden tespiti",
      families: ["Teknik Teşhis"],
    },
    {
      era: "Onarım veya Parça Değişimi",
      whatItBrought: "Garanti kapsamında olduğu doğrulanan sorun, ücretsiz onarım veya parça değişimiyle giderilir.",
      bestFor: "Çözümün uygulanması",
      families: ["Garanti Kapsamlı Onarım"],
    },
    {
      era: "Teslim ve Garanti Güncellemesi",
      whatItBrought: "Cihazınız teslim edilir; garanti kaydınız güncellenir.",
      bestFor: "Sürecin tamamlanması",
      families: ["Teslim ve Kayıt"],
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
