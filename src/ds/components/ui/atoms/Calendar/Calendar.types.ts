export interface CalendarDay {
  date: number;
  currentMonth?: boolean;
  today?: boolean;
  selected?: boolean;
  disabled?: boolean;
}

export interface CalendarProps {
  month: string;
  year: number;
  weekdays?: string[];
  days?: CalendarDay[];
  class?: string;
}