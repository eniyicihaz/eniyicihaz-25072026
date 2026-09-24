// Type contract for the HearingScreen organism (online hearing screening
// widget). See docs plan: online-isitme-taramasi implementation plan §3.
//
// IMPORTANT — locked, non-diagnostic language rule (plan §5.1): nothing in
// this file's *user-facing* consumers may ever surface `levelStep` or any
// derived numeric/dB value. `FrequencyOutcome.band` is an internal-only
// classification; the UI always renders it through the neutral sentence
// map in hearing-screen.data.ts, never as a raw label or number.

export type Ear = "right" | "left";

export type FrequencyHz = 500 | 1000 | 2000 | 4000 | 8000;

export type Stage = "intro" | "headphone-check" | "testing" | "result";

/** Which side the user reported hearing the channel-check tone from. */
export type ChannelCheckAnswer = "left" | "right" | "both" | "unsure";

export interface TrialLog {
  ear: Ear;
  frequency: FrequencyHz;
  levelStep: number; // 0–9, a RELATIVE step — never a dB/dB HL value
  heard: boolean;
  isCatchTrial: boolean; // true = no tone was actually played
  timestamp: number;
}

/**
 * `band` is an internal classification only. It is never rendered as-is —
 * always translated through NEUTRAL_OUTCOME_COPY (hearing-screen.data.ts)
 * into one of three fixed, non-diagnostic sentences.
 */
export type OutcomeBand = "comfortable" | "strained" | "missed";

export interface FrequencyOutcome {
  frequency: FrequencyHz;
  finalStep: number; // internal only, never displayed
  band: OutcomeBand;
  reversalCount: number;
  trialCount: number;
  suspectedGuessing: boolean; // true if a catch trial was reported as "heard"
}

export interface ScreeningResult {
  right: FrequencyOutcome[];
  left: FrequencyOutcome[];
  channelCheck: ChannelCheckAnswer | null;
  completedAt: number;
}

/**
 * Overall, whole-screening summary derived from all 10 FrequencyOutcome
 * entries (5 frequencies x 2 ears). Computed fresh from ScreeningResult
 * each time (finish + reload-restore) — never persisted separately, so
 * there is a single source of truth. See hearing-screen.data.ts's
 * `overallProfileThresholds`/`overallProfileContent`.
 */
export type OverallProfileKey = "comfortable" | "some-strain" | "multi-strain";

/** Per-frequency adaptive run state while a single (ear, frequency) pair is in progress. */
export interface TrialRunState {
  ear: Ear;
  frequency: FrequencyHz;
  step: number;
  direction: "up" | "down" | null;
  reversals: number[];
  trials: TrialLog[];
}
