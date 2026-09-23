// "Bilgi Merkezi Girişi" — homepage's lowest-commitment section (plan
// §B position 10). Not a replacement for /bilgi-merkezi, just a
// "öğrenmeye devam et" gate for visitors not yet ready to contact —
// 3 real, already-published guide pages (mirrors
// src/data/knowledge/showcase.ts's real knowledgeMega topics — no
// invented article/link) + a link to the hub itself.

export interface KnowledgeGateTopic {
  label: string;
  href: string;
}

export interface KnowledgeGateContent {
  eyebrow: string;
  heading: string;
  intro: string;
  topics: KnowledgeGateTopic[];
  hubCta: { label: string; href: string };
}

export const knowledgeGate: KnowledgeGateContent = {
  eyebrow: "Bilgi Merkezi",
  heading: "Henüz Karar Vermediyseniz, Öğrenmeye Devam Edin",
  intro: "İşitme sağlığı hakkında merak ettikleriniz için hazırladığımız rehberlere göz atabilirsiniz.",
  topics: [
    { label: "İşitme Kaybı Nedir?", href: "/rehberler/isitme-kaybi-nedir" },
    { label: "Cihaz Seçim Rehberi", href: "/rehberler/cihaz-secim-rehberi" },
    { label: "İlk Kullanım Rehberi", href: "/rehberler/ilk-kullanim-rehberi" },
  ],
  hubCta: { label: "Bilgi Merkezi'ni Keşfedin", href: "/bilgi-merkezi" },
};
