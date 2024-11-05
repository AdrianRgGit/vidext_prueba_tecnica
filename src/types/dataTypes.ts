export interface UserData {
  id: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  avatar: string;
}

export interface CommentData {
  videoId: number;
  id: number;
  createdAt: string;
  updatedAt: string;
  username: string;
  avatar: string;
  comment: string;
}

export interface VidData {
  id: number;
  createdAt: string;
  updatedAt: string;
  username: string;
  avatar: string;
  title: string;
  description: string;
  url: string;
  banner: string;
  views: number;
  likes: number;
  followers: number;
  comments: CommentData[];
}
