// M4 (Brand Decision) content for the "Tüm Markalar" (/markalar) page. This
// page is built up modularly (M1, M2, M3…), each an independent
// section/component — this file only ever holds M4's data.
//
// Deliberately not a brand-vs-brand comparison: the project has no verified
// per-brand technical specs or expert commentary, so a feature-comparison
// table would mean inventing claims about real medical-device
// manufacturers. Instead this section helps the user name their own
// priority, then hands them to an honest next step (a real consultation) —
// the same CTA content already used elsewhere on the site (tel/WhatsApp),
// not a new claim.

export interface DecisionScenario {
  icon: any;
  title: string;
  description: string;
}

export interface BrandDecisionContent {
  eyebrow: string;
  heading: string;
  intro: string;
  scenarios: DecisionScenario[];
  panel: {
    title: string;
    description: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
}

import { Activity, Smartphone, Zap, EyeOff, Wallet, Compass } from "lucide-astro";

export const brandDecision: BrandDecisionContent = {
  eyebrow: "Karar Adımı",
  heading: "Size Daha Yakın Olan Hangisi?",
  intro:
    "Doğru marka, teknik bir sıralamadan çok kişisel önceliklerinize bağlıdır. Aşağıdaki tanımlardan size en yakın olanı bulmanız, doğru yönlendirmeyi almanızı kolaylaştırır.",
  scenarios: [
    {
      icon: Activity,
      title: "Aktif ve Hareketli Bir Yaşam Sürüyorum",
      description: "Spor, sosyal ortam ve dış mekanda güvenle kullanabileceğiniz bir çözüm arıyorsanız.",
    },
    {
      icon: Smartphone,
      title: "Teknolojiyle İç İçe Kullanım İstiyorum",
      description: "Akıllı telefon ve günlük teknolojilerle bağlantılı kullanım sizin için öncelikliyse.",
    },
    {
      icon: Zap,
      title: "Basit ve Pratik Kullanım İstiyorum",
      description: "Karmaşık ayarlarla uğraşmadan sorunsuz bir günlük kullanım istiyorsanız.",
    },
    {
      icon: EyeOff,
      title: "Estetik ve Fark Edilmezlik Önemli",
      description: "Cihazın görünürlüğü sizin için belirleyici bir tercih noktasıysa.",
    },
    {
      icon: Wallet,
      title: "Ekonomik ve Güvenilir Bir Seçenek Arıyorum",
      description: "Bütçenize uygun, güvenilir bir seçenek arıyorsanız.",
    },
    {
      icon: Compass,
      title: "Karar Vermekte Zorlanıyorum",
      description: "Hangi markanın size uygun olduğuna karar veremiyorsanız, uzman desteği alabilirsiniz.",
    },
  ],
  panel: {
    title: "Hangi Tanım Size Uygun Olursa Olsun",
    description:
      "Uzman odyoloğumuz, ücretsiz işitme testi sonrasında size en uygun markayı birlikte belirler.",
    ctaPrimary: { label: "Hemen Ara", href: "tel:+905337733199" },
    ctaSecondary: { label: "WhatsApp'tan Yazın", href: "https://wa.me/905337733199" },
  },
};
