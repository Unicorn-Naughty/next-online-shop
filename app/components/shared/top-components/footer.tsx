import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return <footer className={cn("h-[100px] bg-black flex justify-center items-center text-white", className)}>Footer</footer>;
};
