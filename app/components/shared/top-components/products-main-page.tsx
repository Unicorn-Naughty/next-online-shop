import { cn } from "@/lib/utils";
import React from "react";
import { SmallProductsSlider } from "../middle-components/small-products-slider";
interface Props {
  className?: string;
}

export const ProductsMainPage: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <SmallProductsSlider/>
    </div>
  );
};
