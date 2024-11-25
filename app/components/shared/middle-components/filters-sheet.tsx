"use client";
import React from "react";
import { Button, Input, Label, Sheet } from "../..";

import { SlidersHorizontal } from "lucide-react";
interface Props {
  className?: string;
}

export const FiltersSheet: React.FC<Props> = () => {
  return (
    <Sheet.Sheet>
      <Sheet.SheetTrigger asChild>
        <div className="flex items-center cursor-pointer  transition-all ease-in-out hover:text-[#ac8c75]">
          <SlidersHorizontal className="w h mr-3"/>
          <span className="font-medium text-[18px]">Фильтры</span>
        </div>
      </Sheet.SheetTrigger>
      <Sheet.SheetContent side="left">
        <Sheet.SheetHeader>
          <Sheet.SheetTitle>Edit profile</Sheet.SheetTitle>
          <Sheet.SheetDescription>
            Make changes to your profile here. Click save when youre done.
          </Sheet.SheetDescription>
        </Sheet.SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <Sheet.SheetFooter>
          <Sheet.SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </Sheet.SheetClose>
        </Sheet.SheetFooter>
      </Sheet.SheetContent>
    </Sheet.Sheet>
  );
};
