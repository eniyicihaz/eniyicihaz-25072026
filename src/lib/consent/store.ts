// Tercih kaydı: localStorage (erişilemezse yalnızca bellek). Kişisel kimlik
// veya ziyaretçi ID'si saklanmaz — yalnızca sürüm, zaman damgası, seçilen
// seçenek (method) ve kategori seçimleri.
//
// Yalnızca kullanıcı bir seçenek seçtiğinde kayıt yazılır (ilk ziyarette otomatik
// kabul/ret kaydı YOKTUR). `method` alanı olmayan eski kayıtlar (varsayılan kabulden
// kalmış olabilir) açık rıza sayılmaz: yok sayılır ve temizlenir.
import {
  CONSENT_MAX_AGE_DAYS,
  CONSENT_POLICY_VERSION,
  CONSENT_STORAGE_KEY,
  ALL_DENIED,
  CONSENT_METHODS,
  OPTIONAL_CATEGORIES,
  type ConsentChoices,
  type ConsentMethod,
} from "./config";

export interface ConsentRecord {
  /** Kaydın yazıldığı politika sürümü. */
  v: string;
  /** ISO zaman damgası. */
  ts: string;
  /** Kullanıcının verdiği karar: tümünü kabul / tümünü reddet / özel seçim. */
  method: ConsentMethod;
  choices: ConsentChoices;
}

let memory: ConsentRecord | null = null;

function parse(raw: string | null): ConsentRecord | null {
  if (!raw) return null;
  try {
    const o = JSON.parse(raw) as Partial<ConsentRecord>;
    if (!o || typeof o.v !== "string" || typeof o.ts !== "string" || !o.choices) return null;
    if (!CONSENT_METHODS.includes(o.method as ConsentMethod)) return null; // açık seçim izi yok → rıza değil
    const choices = { ...ALL_DENIED };
    for (const k of OPTIONAL_CATEGORIES) choices[k] = o.choices[k] === true;
    // method ile seçimler tutarlı olmalı; değilse kayıt güvenilmezdir.
    const all = OPTIONAL_CATEGORIES.every((k) => choices[k]);
    const none = OPTIONAL_CATEGORIES.every((k) => !choices[k]);
    if ((o.method === "accept_all" && !all) || (o.method === "reject_all" && !none)) return null;
    return { v: o.v, ts: o.ts, method: o.method as ConsentMethod, choices };
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
  let storageUsable = true;
  try {
    rec = parse(window.localStorage.getItem(CONSENT_STORAGE_KEY));
  } catch {
    storageUsable = false;
  }
  // Bellek yalnızca depolama HİÇ erişilemezse yedektir. Depolama okunabiliyorsa kaynak odur: başka
  // sekmede silinen/değişen/geçersiz kayıt, bu sekmedeki eski bellek kaydıyla geri getirilmez.
  if (!storageUsable) rec = memory;
  if (rec && isCurrent(rec)) {
    memory = rec;
    return rec;
  }
  memory = null;
  if (storageUsable) discardLegacy();
  return null;
}

/**
 * `storage` olayının `newValue` değerinden tercih üretir (yazma YAPMAZ → sekmeler arası döngü olmaz).
 * `null` (kayıt silindi), geçersiz, method'suz veya eski sürüm → null: eski bellek kaydına DÖNÜLMEZ,
 * çağıran tüm isteğe bağlı izinleri reddedilmiş kabul eder. Geçerli kayıtta bellek eşitlenir.
 */
export function consentFromStorageValue(raw: string | null): ConsentRecord | null {
  const rec = parse(raw);
  if (rec && isCurrent(rec)) {
    memory = rec;
    return rec;
  }
  memory = null;
  return null;
}

/** Geçersiz/eski (method'suz, eski sürüm, süresi dolmuş) kaydı siler; yoksa hiçbir şey yapmaz. */
function discardLegacy(): void {
  try {
    if (window.localStorage.getItem(CONSENT_STORAGE_KEY) !== null) window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    // depolama kapalı
  }
}

export function writeConsent(choices: ConsentChoices, method: ConsentMethod): ConsentRecord {
  const rec: ConsentRecord = { v: CONSENT_POLICY_VERSION, ts: new Date().toISOString(), method, choices: { ...choices } };
  memory = rec;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(rec));
  } catch {
    // Depolama kapalı (ör. bazı gizli modlar): tercih yalnızca bu sayfa ömrü boyunca geçerli.
  }
  return rec;
}
