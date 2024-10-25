import { Home } from "lucide-react";
import React from "react";

const SideNavAnchor = () => {
  return (
    <a
      href="#"
      className="rounded-xl bg-purple-2 p-4 transition-opacity duration-200 hover:opacity-50"
    >
      <Home />
    </a>
  );
};

export default SideNavAnchor;
