"use client";
import React from "react";
import { FiltersSorting } from "./filters-sorting";
import {
  TFetchCategory,
  TProductWithVariants,
} from "@/app/services/category/category";
import { ProductsList } from "./products-list";
import { TSorting } from "../middle-components/dropdown-sorting";
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
  const products: TProductWithVariants[] = [];
  subCategoryItem.categoryItem.forEach((item) =>
    item.products?.forEach((product) => products.push(product))
  );

  const [catalogState, setCatalogShow] = React.useState(false);
  const [sortBy, setSortBy] = React.useState<TSorting>(TSorting.POPULAR);
  
  const gridDispl = () => setCatalogShow(true);
  const flexDispl = () => setCatalogShow(false);

  return (
    <div className={className}>
      <FiltersSorting
        sortBy={sortBy}
        setSortBy={setSortBy}
        gridDispl={gridDispl}
        flexDispl={flexDispl}
        subCategoryItem={subCategoryItem}
        len={len}
        catalogState={catalogState}
      />
      <ProductsList
        catalogState={catalogState}
        sortBy={sortBy}
        products={products}
        className="mt-[50px]"
      />
    </div>
  );
};
