"use client";
import React, { useState } from "react";
import Image from "next/image";
import headericon from "@/public/icons/headericon.svg";
import notificationicon from "@/public/icons/notificationicon.svg";
import playicon from "@/public/icons/playicon.svg";
import language from "@/public/icons/languageicon.svg";

function Header() {
  const [showicon, setshowicon] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-[37px] bg-[#026985] text-white">
      <div>
        <h1 className="text-sm font-medium ml-[113px]">
          Sağlık Sizden, Destek Bizden
        </h1>
      </div>
      <div className="flex items-center mr-[65px] gap-12">
        <div
          className={`flex items-center gap-7 transition-transform duration-500 ease-in-out ${
            showicon
              ? "translate-x-0 opacity-100"
              : "translate-x-[100px] opacity-0"
          }`}
        >
          <Image
            src={playicon}
            alt="playvideo"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src={language}
            alt="languge"
            width={17}
            height={17}
            className="cursor-pointer"
          />
        </div>
        <Image
          src={notificationicon}
          alt="notificationicon"
          width={18}
          height={18}
          className="cursor-pointer"
        />
        <Image
          src={headericon}
          alt="headericon"
          width={13}
          height={13}
          className="cursor-pointer"
          onClick={() => {
            setshowicon(!showicon);
          }}
        />
      </div>
    </div>
  );
}

export default Header;
