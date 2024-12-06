import { getNoun } from "@/lib/get-noun";
import { cn } from "@/lib/utils";
import React from "react";
import {
  DropdownSorting,
  TSorting,
} from "../middle-components/dropdown-sorting";
import { FiltersSheet } from "../middle-components/filters-sheet";
import { TopLinksBar } from "../middle-components/top-links-bar";
import { Container } from "../middle-components/container";
import { TFetchCategory } from "@/app/services/category/category";
import { SwithDisplay } from "../middle-components/swith-display";
interface Props {
  className?: string;
  subCategoryItem: TFetchCategory;
  len: number;
  gridDispl: VoidFunction;
  flexDispl: VoidFunction;
  sortBy: TSorting;
  catalogState: boolean
  setSortBy: React.Dispatch<React.SetStateAction<TSorting>>;
}

export const FiltersSorting: React.FC<Props> = ({
  className,
  len,
  subCategoryItem,
  catalogState,
  gridDispl,
  flexDispl,
  setSortBy,
  sortBy,
}) => {
  return (
    <div className={cn("", className)}>
      <TopLinksBar
        item={subCategoryItem}
        className=" flex justify-center gap-7"
      />
      <div className="flex border-[#e6e6e6] border-t mt-[25px] ">
        <Container className="px-[40px] mt-[25px] flex justify-between">
          <div className="flex items-center">
            <FiltersSheet />
            <DropdownSorting sortBy={sortBy} setSortBy={setSortBy} />
          </div>
          <div className="w-[200px]">
            {len} {len && getNoun(len, "продукт", "продукта", "продуктов")}
          </div>
          <div></div>
          <SwithDisplay catalogState={catalogState} gridDispl={gridDispl} flexDispl={flexDispl} />
        </Container>
      </div>
    </div>
  );
};
