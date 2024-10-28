import { HeaderProps } from "@/types/layoutTypes";
import AvatarProfile from "./AvatarProfile/AvatarProfile";
import SearchBar from "./SearchBar/SearchBar";
import React, { FC, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Header: FC<HeaderProps> = ({ data, isLoading }) => {
  return (
    <header className="flex items-center justify-between px-4 py-2 lg:col-span-3">
      {isLoading ? (
        <Skeleton className="h-10 rounded-md bg-skeleton-1 lg:w-1/2" />
      ) : (
        <SearchBar />
      )}

      {isLoading ? (
        <Skeleton className="h-10 w-36 rounded-full bg-skeleton-1" />
      ) : (
        <AvatarProfile data={data} />
      )}
    </header>
  );
};

export default Header;
