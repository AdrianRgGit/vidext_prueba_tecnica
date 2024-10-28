export interface UserData {
  id: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  profile_pic: string;
}

export interface VidData {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  url: string;
  comments: string[];
  views: number;
  likes: number;
}
