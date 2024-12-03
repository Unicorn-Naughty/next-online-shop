import React from "react";
import { Container } from "../middle-components/container";
import { cn } from "@/lib/utils";
import { ProductsListItem } from "../middle-components/products-list-item";
import { TProductWithVariants } from "@/app/services/category/category";
interface Props {
  className?: string;
  products: TProductWithVariants[];
}

export const ProductsList: React.FC<Props> = ({ className, products }) => {
  return (
    <Container className={cn("px-[40px]", className)}>
      <div className="flex flex-wrap gap-[15px]">
        {products.map((product, i) => {
          const index = i + 1;
          const bigSlide =
            index % 3 === 0 ? "w-[calc(50%-10px)]" : "w-[calc(25%-10px)]";
          return (
            <ProductsListItem
              className={cn("", bigSlide)}
              product={product}
              key={i}
            />
          );
        })}
      </div>
    </Container>
  );
};
