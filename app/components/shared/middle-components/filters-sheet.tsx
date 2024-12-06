import React from "react";
import { Button, Sheet } from "../..";

import { SlidersHorizontal } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/accordion";
import { RangeSlider } from "../low-components/range-slider";
interface Props {
  className?: string;
}

export const FiltersSheet: React.FC<Props> = () => {
  return (
    <Sheet.Sheet>
      <Sheet.SheetTrigger asChild>
        <div className="flex items-center cursor-pointer  transition-all ease-in-out hover:text-[#ac8c75]">
          <SlidersHorizontal className="w h mr-3" />
          <span className="font-medium text-[18px]">Фильтры</span>
        </div>
      </Sheet.SheetTrigger>
      <Sheet.SheetContent side="left">
        <Sheet.SheetHeader>
          <Sheet.SheetTitle>Фильтрация</Sheet.SheetTitle>
        </Sheet.SheetHeader>
          
        <RangeSlider min={0} max={10000} step={10} className="w-[250px]  mt-[25px] mx-[auto]"/>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>бренды</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>страна бренда</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>эффект</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>для кого</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Sheet.SheetFooter>
          <Sheet.SheetClose asChild>
            <Button type="submit" className="w-[100%] mt-[50px]">Показать товары</Button>
          </Sheet.SheetClose>
        </Sheet.SheetFooter>
      </Sheet.SheetContent>
    </Sheet.Sheet>
  );
};
