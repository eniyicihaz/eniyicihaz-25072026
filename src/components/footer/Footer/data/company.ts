// Company / contact — source of truth: COMPANY.md
//
// Telefon numaraları config/contact.ts'ten okunur (tek kaynak). Roller: "Cep" = ANA numara (bütün arama CTA'ları);
// "Merkez" = ikincil sabit hat (yalnızca bu listede). `hours` FİZİKSEL MERKEZİN ZİYARET SAATLERİDİR ve
// lib/open-status.ts → SCHEDULE ile birebir eşleşmek zorundadır (OpenStatus derlemede denetler). Telefonla
// ulaşılabilirlik ("23:59'a kadar") ayrı bilgidir: `phones[].extendedReach` yalnızca etiketi açar, `hours` değişmez.
import type { CompanyInfo } from "../footer.types";
import { contactConfig } from "../../../../config/contact";

export const company: CompanyInfo = {
  brand: "Avrasya İşitme Cihazları",
  legalName: "Avrasya İşitme Cihazları",
  tagline: "Avrasya İşitme Cihazları, 2009'da kuruldu",
  about:
    "Avrasya İşitme Cihazları; işitme değerlendirmesi, cihaz uygulaması ve teknik servis hizmetleri sunan SGK anlaşmalı bir işitme merkezidir.",
  address:
    "Fevziçakmak Mah. Dr. Zeki Acar Cad. No:77/7 Asansör 1. Kat, Darıca / Kocaeli",
  // Real Google Business Profile location for Darıca Avrasya İşitme
  // Cihazları. Every "Yol Tarifi Al" CTA and the /iletisim map iframe read
  // from these two fields — never hardcode either URL in a component.
  //
  // directionsHref is the real Google Maps Business Profile short link
  // (maps.app.goo.gl), supplied directly — not a coordinate-based
  // maps/dir/ URL. A prior lat/lng-based version was replaced because
  // reverse-geocoding those coordinates resolved to the wrong address
  // ("Mahir Sokak No:9") instead of this business's real listing; this
  // short link points straight at the verified Business Profile, so it
  // can't drift the same way.
  directionsHref: "https://maps.app.goo.gl/vKijvMzNn3D22cy26",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.509333147246!2d29.4047968764159!3d40.772815433889605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadf45ae27bdc3%3A0xfb00eafb65857912!2zRGFyxLFjYSBBdnJhc2lhIMSwxZ9pdG1lIENpaGF6bGFyxLE!5e0!3m2!1str!2str!4v1786516901339!5m2!1str!2str",
  phones: [
    // Sıra = işletme sahibinin telefon hiyerarşisi: ana/reklam hattı → alternatif ofis → diğer ofis (merkez sabit).
    // JSON-LD `telephone` dizileri bu sırayı izler (ana numara ilk). 0543 reklam hattı DEĞİLDİR (config/contact.ts).
    { label: "Cep", number: contactConfig.phone.display, href: contactConfig.phone.href, extendedReach: true },
    { label: "Alternatif ofis", number: contactConfig.altOffice.display, href: contactConfig.altOffice.href, alternate: true },
    { label: "Merkez", number: contactConfig.landline.display, href: contactConfig.landline.href },
  ],
  email: "eniyicihaz@gmail.com",
  hours: [
    { days: "Hafta içi", time: "08:45 – 19:00" },
    { days: "Cumartesi", time: "09:00 – 19:00" },
    { days: "Pazar", time: "Kapalı" },
  ],
  sgkLabel: "SGK Anlaşmalı İşitme Merkezi",
};
