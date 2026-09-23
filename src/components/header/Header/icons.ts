// ==========================================================
// Header — Icon map
// Single icon language (lucide). Data files reference icons by
// string key; components resolve the key to a lucide component
// here, so content stays free of framework imports.
// ==========================================================

import {
  Search,
  Phone,
  Calendar,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Ear,
  Star,
  Target,
  Headphones,
  Stethoscope,
  SlidersHorizontal,
  Wrench,
  Sparkles,
  ShieldCheck,
  Award,
  BatteryCharging,
  BookOpen,
  HelpCircle,
  Newspaper,
  GraduationCap,
  Users,
  Building2,
  Headset,
} from "lucide-astro";

export type IconKey =
  | "search"
  | "phone"
  | "calendar"
  | "menu"
  | "close"
  | "chevron-down"
  | "chevron-right"
  | "arrow-right"
  | "ear"
  | "star"
  | "target"
  | "headphones"
  | "stethoscope"
  | "sliders"
  | "wrench"
  | "sparkles"
  | "shield"
  | "award"
  | "battery"
  | "book"
  | "help"
  | "news"
  | "learn"
  | "users"
  | "building"
  | "headset";

export const icons: Record<IconKey, unknown> = {
  search: Search,
  phone: Phone,
  calendar: Calendar,
  menu: Menu,
  close: X,
  "chevron-down": ChevronDown,
  "chevron-right": ChevronRight,
  "arrow-right": ArrowRight,
  ear: Ear,
  star: Star,
  target: Target,
  headphones: Headphones,
  stethoscope: Stethoscope,
  sliders: SlidersHorizontal,
  wrench: Wrench,
  sparkles: Sparkles,
  shield: ShieldCheck,
  award: Award,
  battery: BatteryCharging,
  book: BookOpen,
  help: HelpCircle,
  news: Newspaper,
  learn: GraduationCap,
  users: Users,
  building: Building2,
  headset: Headset,
};
