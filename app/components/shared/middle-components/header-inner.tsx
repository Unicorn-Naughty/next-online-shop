import React from "react";
import { HeaderSheet } from "../low-components/header-sheet-town";
import { HeaderIconsList } from "../low-components/header-icons-list";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import Link from "next/link";
interface Props {
  className?: string;
}

export const HeaderInner: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn("px-[40px] h-[60px]", className)}>
      <HeaderSheet />
      <Link href="/">
        <div>
          <img src="/logo-header.png" alt="" />
        </div>
      </Link>
      <HeaderIconsList className="flex " />
    </Container>
  );
};
