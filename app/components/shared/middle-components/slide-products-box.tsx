import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  className?: string;
  title: string;
  children: React.ReactNode;
}

export const SlideProductsBox: React.FC<Props> = ({
  className,
  title,
  children,
}) => {
  return (
    <div className={cn("", className)}>
      <h2 className="mb-[32px] text-[30px] font-medium">{title}</h2>

      {children}
    </div>
  );
};
