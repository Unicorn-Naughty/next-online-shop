import React from "react";
import { Carousel, Skeleton } from "../..";
import { TFetchProduct } from "@/app/services/products/products";
import Link from "next/link";
import Autoplay from 'embla-carousel-autoplay'
interface Props {
  className?: string;
  items: TFetchProduct[];
  loading: boolean;
}

export const BigProductsSlider: React.FC<Props> = ({ items, loading }) => {
  return (
    <>
      {loading ? (
        <Carousel.Carousel className="w-full">
          <Carousel.CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Carousel.CarouselItem key={index} className="basis-1/3">
                <div className="mb-[15px]">
                  <Skeleton className="w-[486px] h-[486px]" />
                </div>
                <Skeleton className="w-[486px] mb-[20px] h-[48px]" />
                <Skeleton className="w-[65px] h-[24px]" />
              </Carousel.CarouselItem>
            ))}
          </Carousel.CarouselContent>
        </Carousel.Carousel>
      ) : (
        <Carousel.Carousel className="w-full" plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}>
          <Carousel.CarouselContent className="-ml-1">
            {items.map((item, index) => (
              <Carousel.CarouselItem
                key={index}
                className="basis-1/3  hover:text-[#813b02b6] transition-all ease-in-out"
              >
                <Link href="#" className="p-1">
                  <div className="mb-[5px]">
                    <img src={item.imageURL} alt="" className="" />
                  </div>
                  <h1 className="font-semibold text-[30px] h-[48px] uppercase leading-6 mb-[20px]">
                    {item.name}
                  </h1>
                  <div>{item.type}</div>
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
