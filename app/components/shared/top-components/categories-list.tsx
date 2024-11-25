import React from "react";
import { FiltersSorting } from "./filters-sorting";
import { TFetchCategory } from "@/app/services/category/category";
interface Props {
  className?: string;
  subCategoryItem: TFetchCategory;
  len: number;
}

export const CategoriesList: React.FC<Props> = ({
  className,
  subCategoryItem,
  len,
}) => {
  return (
    <div className={className}>
      <FiltersSorting subCategoryItem={subCategoryItem} len={len} />
    </div>
  );
};
