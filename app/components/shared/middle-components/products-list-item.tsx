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
          <div className="relative">
            <div className="absolute top-0 left-0  h-8 w-8">
              {product.tag === "new" ? (
                <div title="этот товар новинка">
                  <img
                    src="/products-icons/6c6162656c3634633238366433316131666231663031383937323134318db8eb26197ada0.png"
                    alt="asf"
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <img src={product.imageURL} alt="" className="" />
          </div>
        </div>
        <div className="text-right ">
          <h1 className="mb-[15px] text-right  font-semibold">
            <span className="text-[25px]">{product.name}</span>
          </h1>
          <div className="">
            <div className="text-[15px]">{product.type}</div>
            <div className="font-semibold text-[18px]">
              {product.variants[0].price} ₽
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
