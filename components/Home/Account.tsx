import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import profilelogoicon from "@/public/icons/profilelogoicon.svg";
import wingicon from "@/public/icons/wingicon.svg";
import accounticon from "@/public/icons/accounticon.svg";
import favoritesicon from "@/public/icons/favoriteicon.svg";
import locationicon from "@/public/icons/locationicon.svg";
import campaignicon from "@/public/icons/campaignicon.svg";
import activeicon from "@/public/icons/activeicon.svg";
import calendaricon from "@/public/icons/calendaricon.svg";
import logoutiocn from "@/public/icons/logouticon.svg";

function Account() {
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-white w-[32px] h-[32px] rounded-[8px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.25)] flex items-center justify-center focus:border-none focus:outline outline-none">
          <Image
            src={profilelogoicon}
            alt="profilelogoicon"
            width={25}
            height={25}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col w-[194px] rounded-[16px]">
          <DropdownMenuLabel className="flex items-center gap-2 justify-center">
            <span className="text-[#FF0079] text-base font-bold text-center">
              John Luke
            </span>
            <Image src={wingicon} alt="wingicon" width={20} height={20} />
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center gap-[22px] pl-[14px]">
            <Image src={accounticon} alt="accounticon" width={21} height={21} />
            <span className="text-[#363636] text-base font-normal">
              Account
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-[22px] pl-[14px]">
            <Image
              src={favoritesicon}
              alt="accounticon"
              width={21}
              height={21}
            />
            <span className="text-[#363636] text-base font-normal">
              Favorites
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-[22px] pl-[14px]">
            <Image
              src={locationicon}
              alt="accounticon"
              width={21}
              height={21}
            />
            <span className="text-[#363636] text-base font-normal">
              Address
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-[22px] pl-[14px]">
            <Image
              src={campaignicon}
              alt="accounticon"
              width={21}
              height={21}
            />
            <span className="text-[#363636] text-base font-normal">
              Campaign
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-[22px] pl-[14px]">
            <Image src={activeicon} alt="accounticon" width={21} height={21} />
            <span className="text-[#363636] text-base font-normal">
              active devices
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-[22px] pl-[14px]">
            <Image
              src={calendaricon}
              alt="accounticon"
              width={21}
              height={21}
            />
            <span className="text-[#363636] text-base font-normal">
              appointments
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-[22px] pl-[14px]">
            <Image src={logoutiocn} alt="accounticon" width={21} height={21} />
            <span className="text-[#363636] text-base font-normal">Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Account;
