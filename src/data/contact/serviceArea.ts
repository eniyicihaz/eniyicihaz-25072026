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
    "Merkezimize toplu taşımayla ulaşımda kullanılan hatları bölge bölge bulabilirsiniz. Hat bilgileri zamanla değişebilir; yola çıkmadan önce güncel durumu kontrol edin.",
  tierLabels: {
    merkez: "Merkez",
    oncelikli: "Gebze ve Çayırova",
    cevre: "Diğer Bağlantılar",
  },
  items: [
    {
      name: "Darıca",
      tier: "merkez",
      description: "Tek fiziksel merkezimiz.",
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
    "Bu bölgelerin hiçbirinde şubemiz yok; hizmetin tamamı Darıca'daki merkezimizde verilir.",
};
