import React from "react";
import { Button, Input, Label, Sheet } from "../..";
import { Triangle } from "lucide-react";

interface Props {
  className?: string;
}

export const HeaderSheet: React.FC<Props> = () => {
  return (
    <Sheet.Sheet>
      <Sheet.SheetTrigger asChild>
        <div className="flex items-center cursor-pointer hover:opacity-50 transition-all">
          <Triangle className="w-[12px] rotate-180 mr-2" />
          <span>Москва</span>
        </div>
      </Sheet.SheetTrigger>
      <Sheet.SheetContent>
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
