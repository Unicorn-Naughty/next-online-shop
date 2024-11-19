import { LINK_NAMES } from "@/constants/const-app/navbar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Container } from "./container";
interface Props {
  className?: string;
}

export const HeaderNav: React.FC<Props> = ({ className }) => {
  return (
    <nav className={cn("", className)}>
      <Container className="px-[80px]">
        <ul className="flex justify-between">
          {LINK_NAMES.map((item, i) => (
            <li
              className="pt-[3px] border-b-[2px] border-transparent pb-[18px] hover:border-b-[2px] hover:border-black transition-all"
              key={i}
            >
              {item.path === "/catalog" ? (
                <button type="button">{item.name}</button>
              ) : (
                <Link href={item.path}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
