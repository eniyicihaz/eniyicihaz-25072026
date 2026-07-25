import type { SoundRoomContent } from "./sound-room.types";

// Locked content — SOUND_ROOM_SPECIFICATION.md §2/§3/§8.
// Disclaimer text is locked verbatim ("kilitli, kopyada değişmez", §2) — do
// not reword. Thread order and relative spacing follow §3's table (low
// frequency resolves first, "çocuk kahkahası" deliberately last). Exact
// alignThreshold values are an implementation-time tuning choice (Group B
// per the Design Review) chosen so every thread reaches full alignment
// exactly at clarity 100 and the first thread is already partly discernible
// at clarity 0, matching §3's description.
export const soundRoom: SoundRoomContent = {
  heading: "Netlik Deneyimi",
  contextSentence: "Kaydırın ve netliğin farkını görün.",
  clarityLabel: "Netlik",
  noiseLabel: "Gürültü",
  signalLabel: "Sinyal",
  disclaimer:
    "Bu bir örnekleme deneyimidir, işitme testi değildir. Gerçek değerlendirme için ücretsiz işitme testimize davetlisiniz.",
  threads: [
    { label: "Trafik sesi", alignThreshold: 10, order: 1 },
    { label: "Konuşma", alignThreshold: 30, order: 2 },
    { label: "Kapı zili", alignThreshold: 44, order: 3 },
    { label: "Fısıltı", alignThreshold: 58, order: 4 },
    { label: "Kuş cıvıltısı", alignThreshold: 72, order: 5 },
    { label: "Çocuk kahkahası", alignThreshold: 86, order: 6 },
  ],
};
