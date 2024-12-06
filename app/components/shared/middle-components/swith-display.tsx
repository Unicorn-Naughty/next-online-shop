import React from "react";
import { LayoutGrid } from "lucide-react";
import { Grid2x2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { TSorting } from "./dropdown-sorting";

interface Props {
  className?: string;
  gridDispl: VoidFunction;
  flexDispl: VoidFunction;
  catalogState: boolean;
}

export const SwithDisplay: React.FC<Props> = ({
  className,
  gridDispl,
  flexDispl,
  catalogState,
}) => {
  return (
    <div className={cn("flex gap-2 items-center ", className)}>
      <div className="font-medium text-[18px]">Вид каталога</div>
      <div className="flex gap-2">
        <button onClick={gridDispl} className={catalogState ? "opacity-50" : ""}>
          <LayoutGrid className={cn("w-[20px] h-[20px]")} />
        </button>
        <button onClick={flexDispl} className={!catalogState ? "opacity-50" : ""}>
          <Grid2x2 className="w-[20px] h-[20px]" />
        </button>
      </div>
    </div>
  );
};
