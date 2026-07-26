// Hero content — transcribed from the reference design (hero son.png).
// Source of truth for facts: COMPANY.md (2009, SGK anlaşmalı, 18+ marka).
// "Binlerce Mutlu Kullanıcı" from the reference was replaced with "Kişiye
// Özel Yaklaşım" — a verifiable, timeless claim already used precedent in
// this project, instead of an invented/unverifiable user count (PRINCIPLES §5).
import type { HeroContent } from "./hero.types";

export const hero: HeroContent = {
  badge: "İşitme Sağlığınız İçin En Doğru Adrestesiniz",
  headlineLine1: "Duymak,",
  headlineLine2: "anlamaktır.",
  subhead:
    "İşitme kaybı yalnızca duymamak değildir. Anlamak, iletişim kurmak ve sevdiklerinizle bağ kurmaktır.",
  ctaPrimary: { label: "Ücretsiz İşitme Testi", href: "/iletisim" },
  ctaSecondary: { label: "Bizi Arayın", href: "tel:+905337733199" },
  cards: [
    {
      image: "/images/heroes/hero-01.webp",
      alt: "Gülümseyen yaşlı bir kadın",
      icon: "waves",
      title: "Daha iyi duyun",
      text: "Hayatın her anını net ve doğal duyun.",
    },
    {
      image: "/images/heroes/hero-02.webp",
      alt: "Kızı kulağına fısıldarken gülümseyen anne",
      icon: "message",
      title: "Daha iyi anlayın",
      text: "Konuşmaları net anlayın, iletişimin keyfini yaşayın.",
    },
    {
      image: "/images/heroes/hero-03.webp",
      alt: "Birbirine sarılan dede ve torunu",
      icon: "heart",
      title: "Daha iyi yaşayın",
      text: "Sevdiklerinizle daha güçlü bağlar kurun, hayatın tadını çıkarın.",
    },
  ],
  trustItems: [
    { icon: "award", value: "2009'dan beri", label: "Güvenle yanınızdayız" },
    { icon: "shield", value: "SGK Anlaşmalı", label: "Merkez" },
    { icon: "users", value: "Kişiye Özel", label: "Yaklaşım" },
    { icon: "gem", value: "18+ Marka", label: "Konusunda Uzman" },
  ],
};
