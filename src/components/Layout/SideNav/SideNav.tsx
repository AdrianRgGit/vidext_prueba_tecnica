import React from "react";

const SideNav = () => {
  return (
    <aside className="hidden lg:block row-span-3 bg-slate-400">
      <nav className="flex h-full flex-col gap-y-4 items-center justify-center max-h-screen fixed">
        <a href="#">Home</a>
        <a href="#">Home</a>
        <a href="#">Home</a>
        <a href="#">Home</a>
        <a href="#">Home</a>
        <a href="#">Home</a>
        <a href="#">Home</a>
      </nav>
    </aside>
  );
};

export default SideNav;
