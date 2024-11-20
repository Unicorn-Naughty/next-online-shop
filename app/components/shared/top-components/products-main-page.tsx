"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { SmallProductsSlider } from "../middle-components/small-products-slider";
import { SlideProductsBox } from "../middle-components/slide-products-box";
import { Container } from "../middle-components/container";
import { useProducts } from "@/app/hooks/use-products";
import { BigProductsSlider } from "../middle-components/big-products-slider";
interface Props {
  className?: string;
}

export const ProductsMainPage: React.FC<Props> = ({ className }) => {
  const newProducts = useProducts("new-products");
  const reccomendProducts = useProducts("reccomend-products");
  const salesProducts = useProducts("sales-products");
  return (
    <div className={cn("flex flex-col gap-[50px]", className)}>
      <Container className="px-[120px]">
        <SlideProductsBox title="Новинки">
          <SmallProductsSlider items={newProducts.products} loading={newProducts.loading} />
        </SlideProductsBox>
      </Container>
      <Container className="px-10">
        <SlideProductsBox title="Акционные товары">
          <BigProductsSlider items={salesProducts.products} loading={salesProducts.loading} />
        </SlideProductsBox>
      </Container>
      <Container className="px-[120px]">
        <SlideProductsBox title="Рекомендуемые товары">
          <SmallProductsSlider items={reccomendProducts.products} loading={reccomendProducts.loading} />
        </SlideProductsBox>
      </Container>
    </div>
  );
};
