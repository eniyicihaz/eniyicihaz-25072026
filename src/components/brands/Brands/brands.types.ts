export interface BrandItem {
  name: string;
  slug: string;
  /** Path under /public — placeholder filenames until real logo files exist. */
  logo: string;
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
