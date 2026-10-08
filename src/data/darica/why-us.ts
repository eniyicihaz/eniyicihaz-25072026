// Darıca landing page — Neden Avrasya İşitme? 3 gerçek, doğrulanmış madde
// (COMPANY.md: 2009, SGK anlaşmalı, uzman kadro) — uydurma rakam yok.
import { Award, ShieldCheck, GraduationCap } from "lucide-astro";
import type { ValueGridContent } from "../../components/shared/ValueGrid/ValueGrid.astro";

export const daricaWhyUs: ValueGridContent = {
  badge: "NEDEN AVRASYA İŞİTME?",
  heading: "Neden Avrasya İşitme?",
  items: [
    { icon: Award, title: "2009'dan Beri", description: "2009'dan bu yana işitme alanındayız; Darıca merkezimiz Ağustos 2024'te açıldı." },
    { icon: ShieldCheck, title: "SGK Anlaşmalı", description: "Resmî olarak SGK ile anlaşmalı bir işitme merkeziyiz." },
    { icon: GraduationCap, title: "Uzman Kadro", description: "Odyolog ve odyometristlerden oluşan yetkin bir ekip." },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
};
