"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import { Dropdown } from "../..";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
}

export enum TSorting {
  POPULAR = "по популярности",
  SALE = "по размеру скидки",
  CHIP = "сначала дешевле",
  EXP = "сначала дороже",
}

export const DropdownSorting: React.FC<Props> = () => {
  const [sortBy, setSortBy] = React.useState<TSorting>(TSorting.POPULAR);
  return (
    <Dropdown.DropdownMenu>
      <Dropdown.DropdownMenuTrigger asChild>
        <div
          className="flex items-center ml-[25px] h-[25px] w-[250px] cursor-pointer transition-all ease-in-out hover:text-[#ac8c75] font-medium text-[18px] group"
        >
          <button className="w-[180px] mr-[5px]">{sortBy}</button>
          <ChevronDown
            className={cn(
              "w-[20px] h-[20px] mt-[5px] group-data-[state=open]:rotate-180 transition-all ease-in"
            )}
          />
        </div>
      </Dropdown.DropdownMenuTrigger>
      <Dropdown.DropdownMenuContent className="w-56">
        <Dropdown.DropdownMenuRadioGroup
          value={sortBy}
          onValueChange={setSortBy}
        >
          <Dropdown.DropdownMenuRadioItem value={TSorting.POPULAR}>
            {TSorting.POPULAR}
          </Dropdown.DropdownMenuRadioItem>
          <Dropdown.DropdownMenuRadioItem value={TSorting.SALE}>
            {TSorting.SALE}
          </Dropdown.DropdownMenuRadioItem>
          <Dropdown.DropdownMenuRadioItem value={TSorting.CHIP}>
            {TSorting.CHIP}
          </Dropdown.DropdownMenuRadioItem>
          <Dropdown.DropdownMenuRadioItem value={TSorting.EXP}>
            {TSorting.EXP}
          </Dropdown.DropdownMenuRadioItem>
        </Dropdown.DropdownMenuRadioGroup>
      </Dropdown.DropdownMenuContent>
    </Dropdown.DropdownMenu>
  );
};
