import React from "react";
import { Search } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

{
  /**
  icons массив временный
  */
}
const icons = [
  {
    elem: <Search className="size-[20px]" />,
  },
  {
    elem: <ShoppingBag className="size-[20px]" />,
  },
  {
    elem: <Heart className="size-[20px]" />,
  },
  {
    elem: <img src="/icons/user_circle.svg" className="size-[20px]" alt="" />,
  },
];
export const HeaderIconsList: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      {icons.map((item, i) => (
        <button className="ml-[25px]" key={i}>{item.elem}</button>
      ))}
    </div>
  );
};
