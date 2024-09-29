import Image from "next/image";
import React from "react";
import downicon from "@/public/icons/downicon.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import dricon from "@/public/icons/dricon.svg";
import laicon from "@/public/icons/laicon.svg";
import phaicon from "@/public/icons/phaicon.svg";
import oricon from "@/public/icons/oricon.svg";
import hospitalicon from "@/public/icons/hospitalicon.svg";

function Clinicdropdown() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-transparent w-[32px] focus:border-none focus:outline outline-none h-[32px] rounded-[8px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.25)] flex items-center justify-center cursor-pointer ml-[36px] mt-[84px]">
          <Image src={downicon} alt="downicon" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-ful p-4 bg-transparent border-none  shadow-none ">
          <DropdownMenuLabel className="flex justify-center items-center pb-6">
            <Image src={dricon} alt="dricon" />
          </DropdownMenuLabel>
          <DropdownMenuLabel className="flex justify-center items-center">
            <Image src={laicon} alt="dricon" />
          </DropdownMenuLabel>
          <DropdownMenuLabel className="flex justify-center items-center">
            <Image src={phaicon} alt="dricon" />
          </DropdownMenuLabel>
          <DropdownMenuLabel className="flex justify-center items-center">
            <Image src={oricon} alt="dricon" />
          </DropdownMenuLabel>
          <DropdownMenuLabel className="flex justify-center items-center">
            <Image src={hospitalicon} alt="dricon" />
          </DropdownMenuLabel>
          <DropdownMenuLabel className="flex justify-center items-center">
            <Image src={hospitalicon} alt="dricon" />
          </DropdownMenuLabel>
          <DropdownMenuLabel className="flex justify-center items-center">
            <Image src={hospitalicon} alt="dricon" />
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default Clinicdropdown;
