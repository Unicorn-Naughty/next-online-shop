import React from "react";
import { Carousel, Skeleton } from "../..";
import Link from "next/link";
import { TFetchProduct } from "@/app/services/products/products";

interface Props {
  className?: string;
  items: TFetchProduct[];
  loading: boolean;
}

export const SmallProductsSlider: React.FC<Props> = ({ items, loading }) => {
  return (
    <>
      {loading ? (
        <Carousel.Carousel className="w-full">
          <Carousel.CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Carousel.CarouselItem key={index} className="basis-1/5">
                <div className="mb-[24px]">
                  <Skeleton className="w-[253px] h-[253px]" />
                </div>
                <Skeleton className="w-[253px] mb-[20px] h-[40px]" />
                <div className="flex justify-between">
                  <Skeleton className="w-[65px] h-[24px]" />
                  <Skeleton className="w-[65px] h-[24px]" />
                </div>
              </Carousel.CarouselItem>
            ))}
          </Carousel.CarouselContent>
        </Carousel.Carousel>
      ) : (
        <Carousel.Carousel className="w-full">
          <Carousel.CarouselContent className="-ml-1">
            {items.map((item, index) => (
              <Carousel.CarouselItem key={index} className="basis-1/5">
                <Link href="#" className="p-1">
                  <div className="mb-[24px]">
                    <img src={item.imageURL} alt="" className="" />
                  </div>
                  <h1 className="mb-[20px] h-[40px] font-semibold">{item.name}</h1>
                  <div className="flex gap-[29px]">
                    <div>{item.type}</div>
                    <div className="font-semibold">{item.variants[0].price}</div>
                  </div>
                </Link>
              </Carousel.CarouselItem>
            ))}
          </Carousel.CarouselContent>
          <Carousel.CarouselPrevious className="top-[-58px] right-7" />
          <Carousel.CarouselNext className="top-[-58px] right-0" />
        </Carousel.Carousel>
      )}
    </>
  );
};
