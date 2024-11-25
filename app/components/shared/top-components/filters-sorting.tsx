import { getNoun } from "@/lib/get-noun";
import { cn } from "@/lib/utils";
import React from "react";
import { DropdownSorting } from "../middle-components/dropdown-sorting";
import { FiltersSheet } from "../middle-components/filters-sheet";
import { TopLinksBar } from "../middle-components/top-links-bar";
import { Container } from "../middle-components/container";
import { TFetchCategory } from "@/app/services/category/category";
import { SwithDisplay } from "../middle-components/swith-display";
interface Props {
  className?: string;
  subCategoryItem: TFetchCategory;
  len: number;
}

export const FiltersSorting: React.FC<Props> = ({ className, len,subCategoryItem }) => {
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
            <DropdownSorting />
          </div>
          <div className="w-[200px]">
            {len} {len && getNoun(len, "продукт", "продукта", "продуктов")}
          </div>
          <div></div>
          <SwithDisplay/>
        </Container>
      </div>
    </div>
  );
};
