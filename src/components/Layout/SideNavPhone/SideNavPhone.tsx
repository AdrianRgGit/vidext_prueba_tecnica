import { CirclePlus, Clapperboard, Home, Menu, Podcast, X } from "lucide-react";
import { useEffect, useState } from "react";
import SideNavAnchor from "../SideNav/SideNavAnchor/SideNavAnchor";

const SideNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);
  let scrollTimer: NodeJS.Timeout;

  const toggleSideNav = () => {
    setIsVisible(!isVisible);
  };

  const handleScroll = () => {
    setShowButton(true);
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      setShowButton(false);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button
          onClick={toggleSideNav}
          className={`fixed left-0 top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-r-full bg-primary-2 p-2 text-white transition duration-300 ${
            isVisible ? "translate-x-20" : "translate-x-0 opacity-70"
          }`}
        >
          {isVisible ? <X /> : <Menu />}
        </button>
      )}

      <aside
        className={`fixed z-10 flex h-screen w-20 flex-col items-center justify-center gap-y-8 border-r border-gray-1/50 bg-primary-1 transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "-translate-x-20"
        }`}
      >
        <SideNavAnchor icon={<Home />} enabled={false} />
        <SideNavAnchor icon={<Clapperboard />} active />
        <SideNavAnchor icon={<Podcast />} enabled={false} />
        <SideNavAnchor icon={<CirclePlus />} enabled={false} />
      </aside>
    </>
  );
};

export default SideNav;
