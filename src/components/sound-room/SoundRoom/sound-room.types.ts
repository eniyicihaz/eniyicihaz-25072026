export interface SoundRoomThreadData {
  label: string;
  /** 0-100 — the clarity value at which this thread finishes resolving into signal. */
  alignThreshold: number;
  /** 1-6 — matches the order in SOUND_ROOM_SPECIFICATION.md §3. */
  order: number;
}

export interface SoundRoomContent {
  heading: string;
  contextSentence: string;
  clarityLabel: string;
  noiseLabel: string;
  signalLabel: string;
  disclaimer: string;
  threads: SoundRoomThreadData[];
}
