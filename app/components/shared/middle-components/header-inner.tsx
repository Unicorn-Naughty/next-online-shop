import React from "react";
import { HeaderSheet } from "../low-components/header-sheet-town";
import { HeaderIconsList } from "../low-components/header-icons-list";
interface Props {
  className?: string;
}

export const HeaderInner: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <HeaderSheet />
      {/**Лого */}
      <HeaderIconsList className="flex "/>
    </div>
  );
};
