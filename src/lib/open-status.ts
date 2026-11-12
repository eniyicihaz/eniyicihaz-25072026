// "Şu an açık / kapalı" hesabı — saf fonksiyon (tarayıcıda ve Node'da aynı çalışır; test: scratchpad/t-open-status.mts).
//
// DOĞRULANMIŞ saatler (LOCAL_SOT / company.ts): Pazartesi–Cuma 08:45–19:00, Cumartesi 09:00–19:00, Pazar kapalı;
// resmî tatillerde kapalı. `OpenStatus.astro` derleme sırasında bu tabloyu `company.hours` metinleriyle karşılaştırır;
// uyuşmazlıkta derleme hata verir (saatler iki yerde farklı kalamaz).
//
// Saat dilimi: Europe/Istanbul (UTC+3, yıl boyu sabit; Türkiye 2016'dan beri yaz saati uygulamıyor). Kullanıcının cihaz saat
// diliminden bağımsızdır: yurt dışından bakan biri de İstanbul saatine göre doğru durumu görür.
//
// RESMÎ TATİL DOĞRULANAMIYORSA "AÇIK" DENMEZ:
//  • Tatil tablosu yalnızca HOLIDAY_COVERAGE aralığını kapsar (şu an 2026–2027). Aralığın dışında durum "bilinmiyor"dur: yalnızca
//    saatler gösterilir, açık/kapalı iddiası yapılmaz.
//  • Arife (yarım gün) günlerinde kapanış saati kuruma göre değişebileceğinden durum "bilinmiyor"dur ("arayın").
//  • Dini bayram tarihleri her yıl değişir; bu liste Diyanet takvimine dayalı ikincil kaynaklardan (haber siteleri) derlendi ve
//    HER YIL OCAK'TA Resmî Gazete/Diyanet ile yeniden doğrulanıp bir sonraki yıl eklenmelidir (docs/tech/OPEN_STATUS.md).
//  • İşletmenin özel kapanışı/uzatılmış tatili (idari izin vb.) bu tabloda yoktur → SPECIAL_DAYS ile eklenir.

export const TIME_ZONE = "Europe/Istanbul";

/** 0 = Pazar … 6 = Cumartesi (JS getDay). Dakika cinsinden açılış/kapanış; null = kapalı. */
export const SCHEDULE: Record<number, { open: number; close: number } | null> = {
  0: null,
  1: { open: 8 * 60 + 45, close: 19 * 60 },
  2: { open: 8 * 60 + 45, close: 19 * 60 },
  3: { open: 8 * 60 + 45, close: 19 * 60 },
  4: { open: 8 * 60 + 45, close: 19 * 60 },
  5: { open: 8 * 60 + 45, close: 19 * 60 },
  6: { open: 9 * 60, close: 19 * 60 },
};

export type DayKind = "closed" | "half";
export interface SpecialDay {
  date: string; // YYYY-MM-DD (İstanbul takvim günü)
  name: string;
  kind: DayKind; // closed: tam gün resmî tatil · half: arife/yarım gün → durum bilinmiyor
}

/** Tatil tablosunun kapsadığı aralık (dahil). Dışında açık/kapalı iddiası yapılmaz. */
export const HOLIDAY_COVERAGE = { from: "2026-01-01", to: "2027-12-31" };

export const SPECIAL_DAYS: SpecialDay[] = [
  // ——— 2026 ———
  { date: "2026-01-01", name: "Yılbaşı", kind: "closed" },
  { date: "2026-03-19", name: "Ramazan Bayramı arifesi", kind: "half" },
  { date: "2026-03-20", name: "Ramazan Bayramı", kind: "closed" },
  { date: "2026-03-21", name: "Ramazan Bayramı", kind: "closed" },
  { date: "2026-03-22", name: "Ramazan Bayramı", kind: "closed" },
  { date: "2026-04-23", name: "Ulusal Egemenlik ve Çocuk Bayramı", kind: "closed" },
  { date: "2026-05-01", name: "Emek ve Dayanışma Günü", kind: "closed" },
  { date: "2026-05-19", name: "Atatürk'ü Anma, Gençlik ve Spor Bayramı", kind: "closed" },
  { date: "2026-05-26", name: "Kurban Bayramı arifesi", kind: "half" },
  { date: "2026-05-27", name: "Kurban Bayramı", kind: "closed" },
  { date: "2026-05-28", name: "Kurban Bayramı", kind: "closed" },
  { date: "2026-05-29", name: "Kurban Bayramı", kind: "closed" },
  { date: "2026-05-30", name: "Kurban Bayramı", kind: "closed" },
  { date: "2026-07-15", name: "Demokrasi ve Milli Birlik Günü", kind: "closed" },
  { date: "2026-08-30", name: "Zafer Bayramı", kind: "closed" },
  { date: "2026-10-28", name: "Cumhuriyet Bayramı arifesi", kind: "half" },
  { date: "2026-10-29", name: "Cumhuriyet Bayramı", kind: "closed" },
  // ——— 2027 ———
  { date: "2027-01-01", name: "Yılbaşı", kind: "closed" },
  { date: "2027-03-08", name: "Ramazan Bayramı arifesi", kind: "half" },
  { date: "2027-03-09", name: "Ramazan Bayramı", kind: "closed" },
  { date: "2027-03-10", name: "Ramazan Bayramı", kind: "closed" },
  { date: "2027-03-11", name: "Ramazan Bayramı", kind: "closed" },
  { date: "2027-04-23", name: "Ulusal Egemenlik ve Çocuk Bayramı", kind: "closed" },
  { date: "2027-05-01", name: "Emek ve Dayanışma Günü", kind: "closed" },
  { date: "2027-05-15", name: "Kurban Bayramı arifesi", kind: "half" },
  { date: "2027-05-16", name: "Kurban Bayramı", kind: "closed" },
  { date: "2027-05-17", name: "Kurban Bayramı", kind: "closed" },
  { date: "2027-05-18", name: "Kurban Bayramı", kind: "closed" },
  { date: "2027-05-19", name: "Kurban Bayramı ve Atatürk'ü Anma, Gençlik ve Spor Bayramı", kind: "closed" },
  { date: "2027-07-15", name: "Demokrasi ve Milli Birlik Günü", kind: "closed" },
  { date: "2027-08-30", name: "Zafer Bayramı", kind: "closed" },
  { date: "2027-10-28", name: "Cumhuriyet Bayramı arifesi", kind: "half" },
  { date: "2027-10-29", name: "Cumhuriyet Bayramı", kind: "closed" },
];

export type StatusState = "open" | "closed" | "holiday" | "unknown";
export interface OpenStatus {
  state: StatusState;
  /** Kısa, tek satırlık metin. "unknown" durumunda boş (hiçbir iddia gösterilmez). */
  label: string;
  /** Ek açıklama (örn. "Kapanış 19:00", "Açılış: yarın 08:45"). */
  detail: string;
}

const pad = (n: number) => String(n).padStart(2, "0");
const hm = (m: number) => `${pad(Math.floor(m / 60))}:${pad(m % 60)}`;
const DAY_NAMES = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

/** İstanbul duvar saati: {date: 'YYYY-MM-DD', day: 0–6, minutes}. */
export function istanbulParts(now: Date): { date: string; day: number; minutes: number } {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    weekday: "short",
  });
  const p: Record<string, string> = {};
  for (const part of fmt.formatToParts(now)) p[part.type] = part.value;
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(p.weekday);
  return { date: `${p.year}-${p.month}-${p.day}`, day, minutes: Number(p.hour) * 60 + Number(p.minute) };
}

const inCoverage = (date: string) => date >= HOLIDAY_COVERAGE.from && date <= HOLIDAY_COVERAGE.to;
const special = (date: string) => SPECIAL_DAYS.find((d) => d.date === date);

/** 'YYYY-MM-DD' + n gün (UTC takvim aritmetiği; saat dilimi kaymasından etkilenmez). */
function addDays(date: string, n: number): { date: string; day: number } {
  const [y, m, d] = date.split("-").map(Number);
  const t = new Date(Date.UTC(y, m - 1, d + n));
  return { date: `${t.getUTCFullYear()}-${pad(t.getUTCMonth() + 1)}-${pad(t.getUTCDate())}`, day: t.getUTCDay() };
}

/** Bir sonraki KESİN açılış (tam gün, tatil değil, tablo kapsamında); belirsizse null. */
function nextOpening(fromDate: string, includeToday: boolean, nowMinutes: number): { when: string } | null {
  for (let i = includeToday ? 0 : 1; i <= 14; i++) {
    const { date, day } = addDays(fromDate, i);
    if (!inCoverage(date)) return null;
    const sp = special(date);
    if (sp?.kind === "half") return null; // arife: saat belirsiz → iddia yok
    if (sp?.kind === "closed") continue;
    const sch = SCHEDULE[day];
    if (!sch) continue;
    if (i === 0 && nowMinutes >= sch.open) continue; // bugün zaten açıldı/geçti
    // Ek (-de/-da/-e/-a) saate göre değiştiği için ("08:45'te", "09:00'da") ekli yazılmaz: "Açılış: yarın 08:45".
    const label = i === 0 ? "bugün" : i === 1 ? "yarın" : DAY_NAMES[day];
    return { when: `Açılış: ${label} ${hm(sch.open)}` };
  }
  return null;
}

export function getOpenStatus(now: Date = new Date()): OpenStatus {
  const { date, day, minutes } = istanbulParts(now);
  if (!inCoverage(date)) return { state: "unknown", label: "", detail: "" };

  const sp = special(date);
  if (sp?.kind === "half") return { state: "unknown", label: "", detail: "" };
  if (sp?.kind === "closed") {
    const next = nextOpening(date, false, minutes);
    return { state: "holiday", label: "Bugün resmî tatil, kapalıyız", detail: next ? next.when : sp.name };
  }

  const sch = SCHEDULE[day];
  if (!sch) {
    const next = nextOpening(date, false, minutes);
    return { state: "closed", label: "Şu an kapalı", detail: next ? next.when : "Pazar günleri kapalıyız" };
  }
  if (minutes >= sch.open && minutes < sch.close) {
    return { state: "open", label: "Şu an açık", detail: `Kapanış ${hm(sch.close)}` };
  }
  // Mesai dışı: sabah açılıştan önce mi, kapanıştan sonra mı?
  const next = nextOpening(date, minutes < sch.open, minutes);
  return { state: "closed", label: "Şu an kapalı", detail: next ? next.when : "" };
}
