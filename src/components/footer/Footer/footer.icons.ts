// ==========================================================
// Footer — Icon map
// Same icon language as the header (lucide). Data files reference
// icons by string key; components resolve the key to a lucide
// component here, so content stays free of framework imports.
// ==========================================================

import {
  ShieldCheck,
  Award,
  Wrench,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Stethoscope,
  SlidersHorizontal,
  FileCheck,
  Check,
  ArrowRight,
  // Trust ribbon set — picked for even optical weight (2–3 drawing elements
  // each) and to avoid repeating any glyph used by the service cards above.
  UserRoundCheck,
  BadgeCheck,
  Target,
  Ear,
} from "lucide-astro";

export type FooterIconKey =
  | "shield"
  | "award"
  | "wrench"
  | "users"
  | "stethoscope"
  | "sliders"
  | "file-check"
  | "check"
  | "arrow"
  | "user-check"
  | "badge"
  | "target"
  | "ear"
  | "pin"
  | "phone"
  | "mail"
  | "clock"
  | "directions"
  | "facebook"
  | "instagram"
  | "youtube"
  | "whatsapp";

export const footerIcons: Record<FooterIconKey, unknown> = {
  shield: ShieldCheck,
  award: Award,
  wrench: Wrench,
  users: Users,
  stethoscope: Stethoscope,
  sliders: SlidersHorizontal,
  "file-check": FileCheck,
  check: Check,
  arrow: ArrowRight,
  "user-check": UserRoundCheck,
  badge: BadgeCheck,
  target: Target,
  ear: Ear,
  pin: MapPin,
  phone: Phone,
  mail: Mail,
  clock: Clock,
  directions: Navigation,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  whatsapp: MessageCircle,
};
