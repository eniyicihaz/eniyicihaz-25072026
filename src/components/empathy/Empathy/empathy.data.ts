import type { EmpathyContent } from "./empathy.types";

// Locked copy — EMPATHY_SPECIFICATION.md §2 Story Architecture.
// Four beats: opening → development → emotional peak → transition.
// Red-line check (PRINCIPLES §4/§5): no "kayıp/korku/hüzün" wording; the
// transition line reframes the peak immediately — Core Emotion is Güven,
// not sadness.
export const empathy: EmpathyContent = {
  heading: "Tanıdık geliyor mu?",
  lines: [
    { text: "Kalabalık bir masada, kahkahalar arasında kaybolan bir cümle." },
    { text: "Televizyonun sesini, fark ettirmeden bir tık daha açmak." },
    { text: "Mesele duymamak değil; yavaşça uzaklaşmak.", emphasis: true },
    { text: "Bunlar kayıp değil, sadece netliği bekleyen anlar." },
  ],
};
