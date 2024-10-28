import { UserData } from "./dataTypes";

export interface SideNavAnchorProps {
  icon: React.ReactNode;
  enabled?: boolean;
  active?: boolean;
}

export interface HeaderProps {
  data: UserData | null;
  isLoading: boolean;
}
