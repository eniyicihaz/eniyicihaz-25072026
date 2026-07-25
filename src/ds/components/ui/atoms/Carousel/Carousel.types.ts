export interface CarouselItem {
  id: string;
  image?: string;
  alt?: string;
  title?: string;
  description?: string;
}

export interface CarouselProps {
  items?: CarouselItem[];
  showControls?: boolean;
  showIndicators?: boolean;
  autoplay?: boolean;
  interval?: number;
  class?: string;
}