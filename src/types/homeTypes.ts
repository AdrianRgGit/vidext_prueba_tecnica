import { CommentData, VidData } from "./dataTypes";

// NOTE: Media Player
export interface MediaPlayerProps {
  data: VidData | null;
  isLoading: boolean;
}

export interface MediaPlayerContentProps {
  data: VidData | null;
}

// NOTE: Comment Box
export interface CommentBoxProps {
  data: VidData | null;
  isLoading: boolean;
}

export interface CommentBoxHeaderProps {
  data: VidData | null;
}

export interface CommentBoxCardProps {
  data: CommentData | null;
}

// NOTE: Media Description
export interface MediaDescriptionProps {
  data: VidData | null;
  isLoading: boolean;
}

export interface MediaDescriptionChildProps {
  data: VidData | null;
}
