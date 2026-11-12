// Corporate hero theme (redesign): every non-brand hero (guides, technology, device types, needs, segments,
// SGK, service pages …) shares ONE dark brand-navy surface with the logo's teal as the single accent, instead of
// the former per-page colour rotation (orange, green, violet …). Brand pages (/markalar/*) opt out with
// `variant="brand"` on BrandPageHero and keep their own brand colours (a deliberate, topic-specific difference).
//
// The page data files keep their own colours untouched (they stay valid brand data); this helper only decides
// which colours the hero components read. All values are hex because readableTextOn() parses hex.
// Palette source: the real logo (see variables.css): navy #043556 / deep #03263e · teal #3ea4aa · light teal #8fd3d7.

export const CORPORATE_HERO = {
  accentColor: "#8fd3d7",
  accentColorHover: "#b8e6e9",
  accentColorSoft: "rgb(143 211 215 / 0.14)",
  accentColorBorder: "rgb(143 211 215 / 0.42)",
  heroBackground: "var(--hero-bg)",
  heroBaseBg: "#03263e",
  heroWaveColor: "#3ea4aa",
  heroWaveOpacity: "0.16",
  ctaTextColor: "#03263e",
} as const;

type AnyHero = Record<string, any>;

/** Returns a copy of `data` whose colour fields are replaced by the corporate theme (content fields untouched). */
export function withCorporateHero<T extends AnyHero>(data: T): T {
  const next: AnyHero = { ...data, ...CORPORATE_HERO };
  // Drop per-page overrides that were written for a differently coloured hero (light/violet/orange variants).
  for (const key of [
    "heroAccent", "heroAccentHover", "floatingCardBg", "heroTextColor", "heroTextMuted", "heroFeatureLabelColor",
    "heroFeatureDescColor", "heroFloatingDescColor", "heroFeatureCardBg", "heroFeatureCardBorder",
    "heroFloatingCardBorder", "heroOutlineText", "heroOutlineBorder", "heroOutlineHoverBg", "heroOutlineHoverBorder",
    "heroFeatureHoverBg", "heroFeatureHoverBorder", "heroImageGlow", "heroImageMask",
  ]) {
    delete next[key];
  }
  if (Array.isArray(data.features)) {
    next.features = data.features.map((f: AnyHero) => ({ ...f, accent: CORPORATE_HERO.accentColor }));
  }
  return next as T;
}

// ---------------------------------------------------------------------------------------------------------------
// Section accents (light sections): every `accentColor*` field of a BrandPage* section is replaced by the brand
// primary (logo blue, deepened for contrast) so intro / ideal-user / FAQ / related-content sections all read as one
// system. Brand pages opt out with `variant="brand"`.

function lightAccent(key: string): string {
  const k = key.replace(/^accentColor/, "");
  if (k === "") return "#05618a";
  if (k === "Hover") return "#04526f";
  if (/Soft/.test(k)) return "rgb(5 97 138 / 0.10)";
  if (/BadgeBg/.test(k)) return "rgb(5 97 138 / 0.08)";
  if (/BadgeBorder/.test(k)) return "rgb(5 97 138 / 0.32)";
  if (/BadgeText/.test(k)) return "#05618a";
  if (/HoverBorder/.test(k)) return "rgb(5 97 138 / 0.5)";
  if (/Glow/.test(k)) return "rgb(62 164 170 / 0.20)";
  if (/Shadow/.test(k)) return "rgb(5 97 138 / 0.40)";
  if (/Focus/.test(k)) return "rgb(5 97 138 / 0.50)";
  if (/Border/.test(k)) return "rgb(5 97 138 / 0.35)";
  if (/IconBgHover/.test(k)) return "rgb(5 97 138 / 0.18)";
  if (/Bg$/.test(k)) return "rgb(5 97 138 / 0.10)"; // IconBg, NavActiveBg, CalloutBg, NewTagBg, LevelTagBg, HoverBg … are tints, never solid
  if (k === "Dark") return "#043556";
  return "#05618a"; // CalloutLabel and any other solid accent use
}

export function withCorporateSection<T extends AnyHero>(data: T): T {
  const next: AnyHero = { ...data };
  for (const key of Object.keys(data)) {
    if (key.startsWith("accentColor")) next[key] = lightAccent(key);
  }
  return next as T;
}

/** The closing CTA card is a dark navy block: its accent is the light logo teal, button text dark navy. */
export function withCorporateFinalCta<T extends AnyHero>(data: T): T {
  const next: AnyHero = {
    ...data,
    accentColor: "#8fd3d7",
    accentColorHover: "#b8e6e9",
    accentColorGlow: "rgb(62 164 170 / 0.28)",
    accentColorShadow: "rgb(143 211 215 / 0.35)",
    accentColorShadowHover: "rgb(143 211 215 / 0.5)",
    accentColorFocus: "rgb(143 211 215 / 0.6)",
    accentColorTrustBg: "rgb(143 211 215 / 0.14)",
    ctaTextColor: "#03263e",
  };
  for (const key of [
    "cardBg", "cardBorder", "badgeBg", "badgeBorder", "badgeText", "headingColor", "descColor", "outlineText",
    "outlineBorder", "outlineHoverBg", "outlineHoverBorder", "outlineHoverText", "trustBorderTop", "trustItemBg",
    "trustItemBorder", "trustLabelColor", "ctaAccent", "ctaAccentHover",
  ]) {
    delete next[key];
  }
  return next as T;
}
