// Video guide content for the Oticon brand page (/markalar/oticon),
// directly under Why Oticon and before the Final CTA. Independent of the
// /markalar hub page's M1...M8 modules — its own data namespace, only
// ever holding this one brand's content.
//
// The video itself and every term below (BrainHearing®, 4D Sensor, DNN,
// Oticon Companion) are the same real, already-established facts used
// elsewhere on this page — nothing new is claimed here, only presented
// alongside the actual video.

export interface VideoGuideChecklistItem {
  label: string;
}

export interface VideoGuideCta {
  label: string;
  href: string;
}

export interface OticonVideoGuideContent {
  badge: string;
  heading: string;
  intro: string;
  youtubeId: string;
  videoTitle: string;
  panelTitle: string;
  panelDescription: string;
  checklist: string[];
  infoCardTitle: string;
  infoCardItems: string[];
  ctaText: string;
  ctaPrimary: VideoGuideCta;
  ctaSecondary: VideoGuideCta;
}

export const oticonVideoGuide: OticonVideoGuideContent = {
  badge: "OTICON VİDEO REHBERİ",
  heading: "Oticon Teknolojilerini Yakından İnceleyin",
  intro:
    "Oticon işitme cihazlarının teknolojileri, kullanım avantajları ve yeni nesil çözümleri hakkında videoyu izleyebilirsiniz.",
  youtubeId: "_uBr1fk7bs4",
  videoTitle: "Oticon Intent İncelemesi | 4D Sensör Teknolojisi, BrainHearing",
  panelTitle: "Oticon Intent ve Yeni Nesil Teknolojiler",
  panelDescription:
    "Oticon Intent, markanın yeni nesil platformlarından biridir. 4D Sensör teknolojisi sayesinde kullanıcının dinleme davranışlarını analiz ederek daha doğal bir işitme deneyimi sunmayı hedefler.",
  checklist: [
    "BrainHearing®",
    "4D Sensör Teknolojisi",
    "Deep Neural Network",
    "Bluetooth Bağlantıları",
    "Oticon Companion",
    "Yeni Nesil Dinleme Deneyimi",
  ],
  infoCardTitle: "Bu videoda neler öğreneceksiniz?",
  infoCardItems: [
    "Oticon Intent platformu",
    "Kullanıcı davranışı odaklı 4D Sensörler",
    "BrainHearing yaklaşımı",
    "Gürültülü ortamlarda konuşma performansı",
    "Kablosuz bağlantı özellikleri",
  ],
  ctaText: "Oticon teknolojilerini yakından deneyimlemek için ücretsiz işitme testi oluşturabilirsiniz.",
  ctaPrimary: { label: "Hemen Ara", href: "tel:+905337733199" },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: "https://wa.me/905337733199" },
};
