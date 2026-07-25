export type AvatarSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type AvatarStatus =
  | "online"
  | "offline"
  | "busy"
  | "away";

export interface AvatarProps {
  src?: string;

  alt?: string;

  initials?: string;

  size?: AvatarSize;

  rounded?: boolean;

  bordered?: boolean;

  status?: AvatarStatus;

  class?: string;
}