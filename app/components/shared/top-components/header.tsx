import { cn } from "@/lib/utils";
import React from "react";
import { HeaderInner } from "../middle-components/header-inner";
interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <header className="h-[100px]  ">
        <HeaderInner className="flex justify-between" />
      </header>
      <nav></nav>
    </div>
  );
};
