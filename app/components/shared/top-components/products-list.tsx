/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Container } from "../middle-components/container";
import { cn } from "@/lib/utils";
import { ProductsListItem } from "../middle-components/products-list-item";
import { TProductWithVariants } from "@/app/services/category/category";
import { TSorting } from "../middle-components/dropdown-sorting";
interface Props {
  className?: string;
  products: TProductWithVariants[];
  catalogState: boolean;
  sortBy: TSorting;
}

export const ProductsList: React.FC<Props> = ({
  className,
  products,
  catalogState,
  sortBy,
}) => {
  const sortedProducts = products.sort((a, b): any => {
    if (sortBy === TSorting.CHIP) {
      return a.variants[0].price - b.variants[0].price;
    }
    if (sortBy === TSorting.EXP) {
      return b.variants[0].price - a.variants[0].price;
    }
  });

  return (
    <Container className={cn("px-[40px]", className)}>
      <div className="flex flex-wrap items-start ">
        {sortedProducts.map((product, i) => {
          return (
            <ProductsListItem
              className={cn(
                " hover:text-[#813b02b6] transition-all ease-in-out ",
                catalogState
                  ? "[&:nth-child(6n+3)]:w-[calc(50%-20px)] [&:nth-child(6n+4)]:mt-[-238px] [&:nth-child(6n+4)]:w-[calc(50%-20px)] w-[calc(25%-10px)]"
                  : " w-[calc(25%-10px)]"
              )}
              product={product}
              key={i}
            />
          );
        })}
      </div>
    </Container>
  );
};
