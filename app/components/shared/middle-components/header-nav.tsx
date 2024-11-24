import { LINK_NAMES } from "@/constants/const-app/navbar";
import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import { X } from "./multi-level-menu/x";

interface Props {
  className?: string;
}

export const HeaderNav: React.FC<Props> = ({ className }) => {
  return (
    <Container className="px-[80px] ">
      <X />
    </Container>
  );
};
