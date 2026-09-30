// KVKK / hukuki sayfalar için veri modeli. Metinler Avrasya İşitme'nin
// hazırladığı Word belgelerinden (KVK-AYD-04, WEB-GIZ-05, WEB-CRZ-06,
// KVK-FRM-14) birebir alınmıştır; burada yalnızca sayfaya uygun yapıya
// (başlık / paragraf / liste / tablo) bölünmüştür. İçerik değişikliği
// gerekiyorsa kaynak belge güncellenmeli, sonra buraya yansıtılmalıdır.

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][]; fillable?: boolean }
  | { type: "quote"; text: string }
  | { type: "checks"; items: string[] }
  | { type: "fill"; lines: number }
  | { type: "fields"; items: string[] };

export interface LegalSection {
  heading?: string;
  /** h2 (default) or h3 — mirrors Heading1 / Heading2 of the source document. */
  level?: 2 | 3;
  blocks: LegalBlock[];
}

export interface LegalMetaItem {
  label: string;
  value: string;
}

export interface LegalDocumentData {
  title: string;
  meta: LegalMetaItem[];
  sections: LegalSection[];
}
