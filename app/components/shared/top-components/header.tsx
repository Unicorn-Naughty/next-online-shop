import { cn } from "@/lib/utils";
import React from "react";
import { HeaderInner } from "../middle-components/header-inner";
interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("", className)}>
      <HeaderInner className="flex justify-between items-center bg-white" />
    </header>
  );
};
