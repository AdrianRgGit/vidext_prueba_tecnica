import AvatarProfile from "./AvatarProfile/AvatarProfile";
import SearchBar from "./SearchBar/SearchBar";

import React from "react";

const Header = () => {
  return (
    <header className="flex max-h-20 items-center justify-between bg-red-500 px-4 py-2 lg:col-span-3">
      <SearchBar />
      <AvatarProfile />
    </header>
  );
};

export default Header;
