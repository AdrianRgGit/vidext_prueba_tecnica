import { SideNavAnchorProps } from "@/types/layoutTypes";
import { FC } from "react";

const SideNavAnchor: FC<SideNavAnchorProps> = ({
  icon,
  enabled = true,
  active,
}) => {
  return (
    <a
      href="#"
      className={`rounded-xl p-3 transition-colors duration-200 hover:bg-sky-1 ${enabled ? "cursor-pointer" : "cursor-not-allowed"} ${active ? "bg-sky-1" : "bg-primary-2"}`}
    >
      {icon}
    </a>
  );
};

export default SideNavAnchor;
