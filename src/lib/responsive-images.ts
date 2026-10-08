// Responsive görsel yardımcıları (Phase 2 Görsel + Performance paketi).
// `src/data/image-manifest.json`, her görsel için gerçek (doğal) boyutu ve üretilmiş küçük varyantları
// (`<ad>-400.webp`, `<ad>-640.webp` …) listeler. Manifestte olmayan görsel için srcset üretilmez ve
// width/height çağıran tarafın verdiği değerde kalır — böylece hiçbir sayfa kırılmaz.
import manifest from "../data/image-manifest.json";

interface ManifestEntry {
  w: number;
  h: number;
  v: Record<string, string>;
}

const M = manifest as Record<string, ManifestEntry>;

/** Doğal genişlik/yükseklik (manifestte varsa). */
export function imageDims(src: string): { width: number; height: number } | undefined {
  const e = M[src];
  return e ? { width: e.w, height: e.h } : undefined;
}

/** "-400 400w, -640 640w, orijinal 1024w" biçiminde srcset; varyant yoksa undefined. */
export function imageSrcset(src: string): string | undefined {
  const e = M[src];
  if (!e) return undefined;
  const parts = Object.entries(e.v)
    .map(([w, p]) => ({ w: Number(w), p }))
    .sort((a, b) => a.w - b.w)
    .map((x) => `${x.p} ${x.w}w`);
  if (!parts.length) return undefined;
  parts.push(`${src} ${e.w}w`);
  return parts.join(", ");
}
