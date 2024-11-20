import React from "react";
import { Carousel } from "../..";
import { api } from "@/app/services/api-client";

interface Props {
  className?: string;
}

export const SmallProductsSlider: React.FC<Props> = async ({ className }) => {
  const newProducts = await api.products.fetchProducts("new-products");
  console.log(newProducts);

  return (
    <Carousel.Carousel className="w-full">
      <Carousel.CarouselContent className="">
        {newProducts.map((item, index) => (
          <Carousel.CarouselItem key={index} className="lg:basis-1/3">
            <h1>{item.name}</h1>
          </Carousel.CarouselItem>
        ))}
      </Carousel.CarouselContent>
      <Carousel.CarouselPrevious className="top-0 right-2" />
      <Carousel.CarouselNext className="top-0 right-0" />
    </Carousel.Carousel>
  );
};
