import { cn } from "@/lib/utils";
import { Button } from "../../index";
import React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Container } from "../middle-components/container";
import { Reccomends } from "../low-components/reccomends";
interface Props {
  className?: string;
}

export const MainBlogBlock: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn("px-[120px]",className)}>
      <div className={cn("flex ")}>
        <div>
          <img src="/anotherPics/Rectangle 7.jpg" alt="" />
        </div>
        <div className="w-[681px] ml-[72px]">
          <h2 className="mb-[12px] font-medium text-[26px]">
            Ведущий эксперт на российском рынке профессиональной косметики
            <br /> из Кореи—ККshop™
          </h2>
          <p className="mb-[22px]">
            Мы делаем мир профессиональной корейской косметики доступным
            для каждого косметолога в России, предоставляя возможность работать
            с лучшими достижениями корейских учёных и специалистов в области
            сохранения здоровья и ухода за кожей
          </p>
          <Link href="#">
            <Button variant="default" className="w-[150px]">
              <p>Подробнее</p>
              <MoveRight />
            </Button>
          </Link>
        </div>
      </div>
      <Reccomends className="mt-[36px]" />
    </Container>
  );
};
