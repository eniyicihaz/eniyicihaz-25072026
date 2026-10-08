// "Hizmet Bölgeleri" section for the /iletisim page — the one canonical,
// full version of the service-area block (P1-B). Facts come only from
// LOCAL_SOURCE_OF_TRUTH: single physical center in Darıca (§2), verified
// bus lines per area [TIME-SENSITIVE] (§2), home-service area = all of
// Kocaeli + all İstanbul Anadolu Yakası districts (§3). No branch is
// implied for any listed area. Other pages no longer repeat this block
// with city names swapped; they link here or state the scope in their own
// context instead.
//
// `href` is set only where a real landing page exists.

export type ServiceAreaTier = "merkez" | "oncelikli" | "cevre";

export interface ServiceAreaItem {
  name: string;
  tier: ServiceAreaTier;
  description: string;
  href?: string;
}

export interface ContactServiceAreaContent {
  eyebrow: string;
  heading: string;
  intro: string;
  tierLabels: Record<ServiceAreaTier, string>;
  items: ServiceAreaItem[];
  closing: string;
}

export const contactServiceArea: ContactServiceAreaContent = {
  eyebrow: "Hizmet Bölgeleri",
  heading: "Hangi Bölgelerden Ulaşabilirsiniz?",
  intro:
    "Tek fiziksel merkezimiz Darıca'dadır; başka ilçede şubemiz yok. Aşağıda, merkezimize toplu taşımayla ulaşımda kullanılan hatları bölge bölge bulabilirsiniz. Hat bilgileri değişebilir.",
  tierLabels: {
    merkez: "Merkez",
    oncelikli: "Gebze ve Çayırova",
    cevre: "Diğer Bağlantılar",
  },
  items: [
    {
      name: "Darıca",
      tier: "merkez",
      description: "Merkezimiz Farabi Devlet Hastanesi durağının karşısında, Palandöken Eczanesi'nin üst katındadır.",
      href: "/darica-isitme-cihazlari/",
    },
    {
      name: "Gebze",
      tier: "oncelikli",
      description: "502, 440, 510 ve 515 numaralı otobüs hatları.",
      href: "/gebze-isitme-cihazlari/",
    },
    {
      name: "Çayırova",
      tier: "oncelikli",
      description: "550 numaralı otobüs hattı.",
      href: "/cayirova-isitme-cihazlari/",
    },
    {
      name: "Beylikbağı",
      tier: "cevre",
      description: "415 ve 425 numaralı otobüs hatları.",
    },
    {
      name: "Dilovası",
      tier: "cevre",
      description: "410 numaralı otobüs hattı.",
    },
    {
      name: "Mutlukent",
      tier: "cevre",
      description: "510 numaralı otobüs hattı.",
    },
  ],
  closing:
    "Merkeze gelemiyorsanız: evde işitme cihazı hizmetini Kocaeli'nin tüm ilçelerinde ve İstanbul Anadolu Yakası'nın tüm ilçelerinde veriyoruz.",
};
