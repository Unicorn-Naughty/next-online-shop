import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  className?: string;
}

const reccomendsCards = [
  {
    title: (
      <p>
        Безупречный состав <br /> и эффективность
      </p>
    ),
  },
  {
    title: (
      <p>
        Натуральность и <br /> экологичность
      </p>
    ),
  },
  {
    title: (
      <p>
        Наличный и <br /> безналичный расчет
      </p>
    ),
  },
  {
    title: (
      <p>
        Доставка <br /> по всей России
      </p>
    ),
  },
];

export const Reccomends: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex gap-6", className)}>
      {reccomendsCards.map((item, i) => (
        <div className="p-5 border border-#2b2b2b w-[400px] uppercase" key={i}>
          {item.title}
        </div>
      ))}
    </div>
  );
};
