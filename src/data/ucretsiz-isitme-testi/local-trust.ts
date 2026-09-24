// "Darıca'da İşitme Testi İçin Neden Avrasya İşitme?" — redesign plan §2,
// Bölüm 5. Renders through the shared BrandPageSignalList component,
// deliberately without icons (icon omitted per signal) to mirror the
// homepage Trust section's pure-text, whisper-quiet register as closely
// as a generic component allows. The three facts and their order
// (süreklilik → SGK → uzman kadro) are locked to match
// src/components/trust/Trust/Trust.astro's TRUST_SPECIFICATION.md-defined
// order exactly — same entity, same claims, no drift (SEARCH_STRATEGY §5
// Entity Tutarlılığı). The closing sentence is the one genuinely new,
// specific local detail on the whole site — the real landmark directions
// from COMPANY.md's "Adres Tarifi", never used elsewhere yet.
import type { BrandPageSignalListContent } from "../../components/brand-page/BrandPageSignalList/BrandPageSignalList.astro";

export const ucretsizIsitmeTestiLocalTrust: BrandPageSignalListContent = {
  badge: "NEDEN AVRASYA İŞİTME",
  heading: "Darıca'da İşitme Testi İçin Neden Avrasya İşitme?",
  intro: "Darıca'da işitme testi arıyorsanız, kararınızı vermeden önce bilmeniz gereken birkaç gerçek.",
  signals: [
    {
      title: "2009'dan Beri",
      description: "Avrasya İşitme, aynı ekiple, aynı adreste yıllardır Darıca'da hizmet veriyor.",
    },
    {
      title: "SGK Anlaşmalı",
      description: "Resmî olarak SGK ile anlaşmalı bir işitme merkeziyiz.",
    },
    {
      title: "Uzman Kadro",
      description: "Odyolog ve odyometristlerden oluşan, alanında yetkin bir ekip.",
    },
  ],
  closing:
    "Merkezimiz, Palandöken Eczanesi'nin üst katında, Farabi Ağız ve Diş Sağlığı Merkezi girişinin tam karşısında yer alır — Darıca merkezden kolayca ulaşabilirsiniz.",
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
