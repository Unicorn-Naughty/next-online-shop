'use client'
import React from "react";
interface Props {
  className?: string;
}

export const HoverSlider: React.FC<Props> = ({ className }) => { 
  return (
    <div>
      <div className="relative">
        <div className="flex overflow-hidden">
            <img className="block" src="" alt="" />
            <img className="block" src="" alt="" />
            <img className="block" src="" alt="" />
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex">
        <div className="flex-grow-1"></div>
        <div className="flex-grow-1"></div>
        <div className="flex-grow-1"></div>
      </div>
    </div>
  );
};
