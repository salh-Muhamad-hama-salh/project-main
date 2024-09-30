import * as React from "react";
import CardDocter from "./CardDocter";
import Image from "next/image";
import righticon from "@/public/icons/righticon.svg";
import lefticon from "@/public/icons/lefticon.svg";
// dwatr dabet era ba props chak bkaytw datakan bnere bo bashakay tr gwlm

export function CarouselSize() {
  return (
    <div className="flex justify-center items-center gap-12 lg:gap-4 xl:gap-6">
      <button className="h-9 w-9 bg-[#DCDCDC] rounded-full flex justify-center items-center">
        <Image src={lefticon} alt="lefticon" width={10} height={10} />
      </button>
      <div>
        <CardDocter />
      </div>
      <div className="hidden lg:flex">
        <CardDocter />
      </div>
      <div className="hidden xl:flex">
        <CardDocter />
      </div>
      <button className="h-9 w-9 bg-[#2E9CB7] rounded-full flex justify-center items-center">
        <Image src={righticon} alt="righticon" width={10} height={10} />
      </button>
    </div>
  );
}
//md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5
