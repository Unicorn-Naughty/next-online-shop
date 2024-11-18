import React from "react";
import { Search } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}
export const HeaderIconsList: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("",className)}>
      <div>
        <Search />
      </div>
      <div>
        <ShoppingBag />
      </div>
      <div>
        <Heart />
      </div>
      <div>
        <img src="/public/icons/user_circle.svg" alt="" />
      </div>
    </div>
  );
};
