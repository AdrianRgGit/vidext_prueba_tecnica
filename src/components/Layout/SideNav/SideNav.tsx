import { CirclePlus, Clapperboard, Home, Podcast } from "lucide-react";
import SideNavAnchor from "./SideNavAnchor/SideNavAnchor";

const SideNav = () => {
  return (
    <aside
      className={`border-gray-1/50 fixed flex h-screen w-20 flex-col items-center justify-center gap-y-8 border-r bg-primary-1`}
    >
      <SideNavAnchor icon={<Home />} enabled={false} />
      <SideNavAnchor icon={<Clapperboard />} active />
      <SideNavAnchor icon={<Podcast />} enabled={false} />
      <SideNavAnchor icon={<CirclePlus />} enabled={false} />
    </aside>
  );
};

export default SideNav;
