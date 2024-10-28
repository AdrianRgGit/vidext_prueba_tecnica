export interface UserData {
  id: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  avatar: string;
}

export interface CommentData {
  id: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  avatar: string;
  comment: string;
}

export interface VidData {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  url: string;
  comments: CommentData[];
  views: number;
  likes: number;
}
