import React from "react";
import { Container } from "./container";
import { X } from "./multi-level-menu/x";
import { cn } from "@/lib/utils";


interface Props {
  className?: string;
}

export const HeaderNav: React.FC<Props> = ({className}) => {
  return (
    <Container className={cn("px-[80px]",className)}>
      <X />
    </Container>
  );
};
