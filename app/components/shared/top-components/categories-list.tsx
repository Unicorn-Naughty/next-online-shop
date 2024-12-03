import React from "react";
import { FiltersSorting } from "./filters-sorting";
import { TFetchCategory, TProductWithVariants } from "@/app/services/category/category";
import { ProductsList } from "./products-list";
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

  return (
    <div className={className}>
      <FiltersSorting subCategoryItem={subCategoryItem} len={len} />
      <ProductsList products={products} className="mt-[50px]" />
    </div>
  );
};
