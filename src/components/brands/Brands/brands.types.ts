export interface BrandItem {
  name: string;
  slug: string;
  /** Path under /public — placeholder filenames until real logo files exist. */
  logo: string;
  /** Real intrinsic pixel dimensions of `logo` (via sharp) — set as the
   *  <img> width/height attributes so the browser reserves the correct
   *  aspect ratio before the file loads, preventing layout shift. Display
   *  size is still governed entirely by .brands__logo's CSS box. */
  logoWidth: number;
  logoHeight: number;
}

export interface BrandsTrust {
  label: string;
  description: string;
  /** SGK gerçeğini /sgk-isitme-cihazi-odemesi'e bağlar (whole pill is the link). */
  href: string;
}

export interface BrandsHubCta {
  label: string;
  href: string;
}

export interface BrandsContent {
  badge: string;
  heading: string;
  subhead: string;
  brands: BrandItem[];
  trust: BrandsTrust;
  hubCta: BrandsHubCta;
}
