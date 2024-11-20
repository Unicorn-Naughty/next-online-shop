import { cn } from "@/lib/utils";
import React from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Container } from "../middle-components/container";
interface Props {
  className?: string;
}

export const MailingBlock: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn("px-[120px] relative", className)}>
      <div className="w-[800px] flex justify-end bg-[#f3f3f3] p-20 ml-auto mr-0 mt-0 mb-0 relative">
        <div className="absolute top-[30px] left-[-500px]">
          <img src="/anotherPics/Rectangle 34.jpg" alt="" />
        </div>
        <div className="w-[400px]">
          <h2 className="font-medium leading-[52px] text-[48px] mb-[15px]">
            Подпишитесь <br /> на рассылку
          </h2>
          <p className="mb-[20px] text-[22px] leading-[28px]">
            Узнай первым о старте скидок и специальных <br /> предложений!
          </p>
          <Label className="">
            <Input
              className="border-b mb-[30px] text-[22px] leading-[28px] font-normal bg-transparent"
              placeholder="Введите почту"
            />
          </Label>
          <Button className="uppercase w-[100%]">Подписаться</Button>
        </div>
      </div>
    </Container>
  );
};
