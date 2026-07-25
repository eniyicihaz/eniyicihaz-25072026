export interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  date?: string;
  completed?: boolean;
}

export interface TimelineProps {
  items: TimelineItem[];
  class?: string;
}