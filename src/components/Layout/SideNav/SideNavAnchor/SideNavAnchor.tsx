import { Home } from "lucide-react";
import React from "react";

const SideNavAnchor = () => {
  return (
    <a
      href="#"
      className="bg-primary-2 rounded-xl p-3 transition-colors duration-200 hover:bg-sky-1"
    >
      <Home />
    </a>
  );
};

export default SideNavAnchor;
