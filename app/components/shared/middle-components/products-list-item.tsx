import { TProductWithVariants } from "@/app/services/category/category";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
interface Props {
  className?: string;
  product: TProductWithVariants;
}

export const ProductsListItem: React.FC<Props> = ({ className, product }) => {
  return (
    <div className={cn("", className)}>
      <Link href="#" className={cn("")}>
        <div className="mb-[24px]">
          <div>
            <img src={product.imageURL} alt="" className="" />
          </div>
        </div>
        <h1 className="mb-[20px] h-[40px] font-semibold">{product.name}</h1>
        <div className="flex gap-[29px]">
          <div>{product.type}</div>
          <div className="font-semibold">{product.variants[0].price}</div>
        </div>
      </Link>
    </div>
  );
};
