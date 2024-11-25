import { TFetchCategory } from "@/app/services/category/category";
import React from "react";
import { Container } from "./container";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
  item: TFetchCategory;
}

export const TopLinksBar: React.FC<Props> = ({ className, item }) => {
  return (
    <Container className={cn("px-[20px]", className)}>
      {item.categoryItem.map((subItem, i) => (
        <Link
          className="px-[24px] font-medium flex items-center justify-center border-[##e6e6e6] border h-[60px] rounded-[9999px] transition-all ease-in-out hover:text-[#ac8c75]"
          key={i}
          href={item.url + subItem.url}
        >
          <span>{subItem.name}</span>
        </Link>
      ))}
    </Container>
  );
};
