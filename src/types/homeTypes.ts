import { CommentData, VidData } from "./dataTypes";

// NOTE: Media Player
export interface MediaPlayerProps {
  data: VidData | null;
}

export interface MediaPlayerContentProps {
  data: VidData | null;
}

// NOTE: Comment Box
export interface CommentBoxProps {
  data: VidData | null;
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
}

export interface MediaDescriptionChildProps {
  data: VidData | null;
}

export interface RelatedVideosProps {
  data: VidData[] | null;
  setSelectedVideo: (videoId: number) => void;
}
export interface RelatedVideosChildProps {
  video: VidData | null;
  setSelectedVideo: (videoId: number) => void;
}
