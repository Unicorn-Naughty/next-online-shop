'use client'
import { cn } from "@/lib/utils";
import React from "react";
import { Button, Carousel } from "../..";
import { MoveRight } from "lucide-react";
import { Container } from "../middle-components/container";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
interface Props {
  className?: string;
}

{
  /**
    Тест массив для слайдера
    */
}

const slideritems = [
  {
    title: "SKINDOM",
    text: "Специальные цены только до 30 апреля",
    image: "/slider/slider.png",
  },
  {
    title: "SKINDOM",
    text: "Специальные цены только до 30 апреля",
    image: "/slider/slider.png",
  },
  {
    title: "SKINDOM",
    text: "Специальные цены только до 30 апреля",
    image: "/slider/slider.png",
  },
  {
    title: "SKINDOM",
    text: "Специальные цены только до 30 апреля",
    image: "/slider/slider.png",
  },
  {
    title: "SKINDOM",
    text: "Специальные цены только до 30 апреля",
    image: "/slider/slider.png",
  },
  {
    title: "SKINDOM",
    text: "Специальные цены только до 30 апреля",
    image: "/slider/slider.png",
  },
];
export const SliderMainPage: React.FC<Props> = ({ className }) => {
  return (
    <Carousel.Carousel
      plugins={[Autoplay({ delay: 3000, stopOnInteraction: true,  })]}
      className="w-full min-h-[calc(100vh-108px)] cursor-grab"
    >
      <Carousel.CarouselContent className="">
        {slideritems.map((item, index) => (
          <Carousel.CarouselItem
            className={cn(
              `min-h-[calc(100vh-108px)] bg-[url('/slider/slider.png')]  bg-no-repeat bg-top bg-cover relative`,
              className
            )}
            key={index}
          >
            <Container className="top-[90px] absolute ml-[275px] max-[1400px]:ml-[100px]">
              <h1 className="font-bold text-[95px] uppercase">{item.title}</h1>
              <p className="font-medium  text-[24px] leading-[36px] mb-[45px]">
                {item.text}
              </p>
              <Link href="#">
                <Button variant="default" className="items-center uppercase">
                  <p>Перейти в каталог</p>
                  <MoveRight />
                </Button>
              </Link>
            </Container>
          </Carousel.CarouselItem>
        ))}
      </Carousel.CarouselContent>
      <Carousel.CarouselPrevious
        variant="ghost"
        className="left-0 top-[50%] ml-[50px]"
      />
      <Carousel.CarouselNext
        variant="ghost"
        className="right-0 top-[50%] mr-[50px]"
      />
    </Carousel.Carousel>
  );
};
