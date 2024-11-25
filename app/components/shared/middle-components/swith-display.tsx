import React from "react";
import { LayoutGrid } from "lucide-react";
import { Grid2x2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const SwithDisplay: React.FC<Props> = ({ className }) => {
  return (
    <button className={cn("flex gap-2 items-center ",className)}>
      <div className="font-medium text-[18px]">Вид каталога</div>
      <div className="flex gap-2">
        <LayoutGrid className="w-[20px] h-[20px]" />
        <Grid2x2 className="w-[20px] h-[20px]" />
      </div>
    </button>
  );
};
