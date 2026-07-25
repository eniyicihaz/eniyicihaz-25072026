// Hero content — source of truth: COMPANY.md (facts: 2009, SGK anlaşmalı,
// odyolog/odyometrist yetkinliği, yetkili teknik servis) + PRINCIPLES.md
// (Brand DNA §1, tone §4, no guarantees/fear/price §5, dual brand §2).
// Locked copy per HERO_SPECIFICATION.md.
import type { HeroContent } from "./hero.types";

export const hero: HeroContent = {
  eyebrow: "2009'dan beri · SGK Anlaşmalı",
  headline: "Duymak, anlamaktır.",
  subhead:
    "Mesele sesin ne kadar yüksek olduğu değil, ne kadar anlaşılıyor olduğu.",
  cta: { label: "Ücretsiz İşitme Testi", href: "/iletisim" },
  trust: [
    "Uzman Odyolog & Odyometrist",
    "Kişiye Özel Değerlendirme",
    "Yetkili Teknik Servis",
  ],
  brandLockup: "Eniyicihaz.com güvencesiyle, Avrasya İşitme uzmanlığıyla.",
  tagline: "Daha net duyun, hayata daha yakın olun.",
  scrollCue: "Netliği görün",
};
