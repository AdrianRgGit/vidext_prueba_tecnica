import CustomAvatar from "@/components/CustomElements/CustomAvatar/CustomAvatar";
import { Skeleton } from "@/components/ui/skeleton";
import { CommentBoxCardProps } from "@/types/homeTypes";
import { FC } from "react";

const CommentBoxCard: FC<CommentBoxCardProps> = ({ data, isLoading }) => {
  if (isLoading)
    return <Skeleton className="h-20 w-full overflow-y-hidden bg-skeleton-1" />;

  return (
    <div className="flex items-center gap-x-2">
      <CustomAvatar width="min-w-16" src={data?.avatar} />

      <div className="max-h-20 overflow-y-hidden">
        <h3>{data?.username}</h3>
        <p className="text-sm text-gray-1">{data?.comment}</p>
      </div>
    </div>
  );
};

export default CommentBoxCard;
