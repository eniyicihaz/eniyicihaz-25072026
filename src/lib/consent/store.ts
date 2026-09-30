// Tercih kaydı: localStorage (erişilemezse yalnızca bellek). Kişisel kimlik
// veya ziyaretçi ID'si saklanmaz — yalnızca sürüm, zaman damgası ve
// kategori seçimleri.
import {
  CONSENT_MAX_AGE_DAYS,
  CONSENT_POLICY_VERSION,
  CONSENT_STORAGE_KEY,
  DEFAULT_CHOICES,
  OPTIONAL_CATEGORIES,
  type ConsentChoices,
} from "./config";

export interface ConsentRecord {
  /** Kaydın yazıldığı politika sürümü. */
  v: string;
  /** ISO zaman damgası. */
  ts: string;
  choices: ConsentChoices;
}

let memory: ConsentRecord | null = null;

function parse(raw: string | null): ConsentRecord | null {
  if (!raw) return null;
  try {
    const o = JSON.parse(raw) as Partial<ConsentRecord>;
    if (!o || typeof o.v !== "string" || typeof o.ts !== "string" || !o.choices) return null;
    const choices = { ...DEFAULT_CHOICES };
    for (const k of OPTIONAL_CATEGORIES) choices[k] = o.choices[k] === true;
    return { v: o.v, ts: o.ts, choices };
  } catch {
    return null;
  }
}

function isCurrent(rec: ConsentRecord): boolean {
  if (rec.v !== CONSENT_POLICY_VERSION) return false;
  // Zaman aşımı yalnızca hukuki metinde bir süre tanımlanırsa uygulanır.
  if (CONSENT_MAX_AGE_DAYS === null) return true;
  const t = Date.parse(rec.ts);
  if (Number.isNaN(t)) return false;
  return Date.now() - t < CONSENT_MAX_AGE_DAYS * 86_400_000;
}

/** Geçerli (güncel sürüm, süresi dolmamış) kayıt; yoksa null → kullanıcıya sorulur. */
export function readConsent(): ConsentRecord | null {
  let rec: ConsentRecord | null = null;
  try {
    rec = parse(window.localStorage.getItem(CONSENT_STORAGE_KEY));
  } catch {
    rec = null;
  }
  rec = rec ?? memory;
  return rec && isCurrent(rec) ? rec : null;
}

export function writeConsent(choices: ConsentChoices): ConsentRecord {
  const rec: ConsentRecord = { v: CONSENT_POLICY_VERSION, ts: new Date().toISOString(), choices: { ...choices } };
  memory = rec;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(rec));
  } catch {
    // Depolama kapalı (ör. bazı gizli modlar): tercih yalnızca bu sayfa ömrü boyunca geçerli.
  }
  return rec;
}
