import React from "react";
import Image from "next/image";
import drlogo from "@/public/icons/dr.logo.svg";
import Account from "./Account";
import City from "./City";
import campaignicon from "@/public/icons/campaignicon.svg";
import map from "@/public/icons/map.svg";

function HeaderLogo() {
  return (
    <div className="flex justify-between items-center w-full h-[96px]">
      <div className="ml-[113px]">
        <Image src={drlogo} alt="drlogo" width={193} height={61} />
      </div>
      <div className="flex items-center mr-[62px] gap-6">
        <div className="bg-white w-[32px] h-[32px] rounded-[8px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.25)] flex items-center justify-center cursor-pointer">
          <Image src={map} alt="campaignicon" width={19} height={19} />
        </div>
        <div className="bg-white w-[32px] h-[32px] rounded-[8px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.25)] flex items-center justify-center cursor-pointer">
          <Image src={campaignicon} alt="campaignicon" width={19} height={19} />
        </div>
        <City />
        <Account />
      </div>
    </div>
  );
}

export default HeaderLogo;
