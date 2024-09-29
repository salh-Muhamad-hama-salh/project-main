import React from "react";
import downicon from "@/public/icons/downicon.svg";
import locationicon from "@/public/icons/locationicon.svg";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function City() {
  return (
    <div>
      <Select defaultValue="Sula">
        <SelectTrigger className="w-[120px] h-[32px] rounded-[11px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.25)] flex items-center justify-between px-[13px]">
          <Image src={locationicon} alt="locationicon" width={18} height={18} />
          <SelectValue
            placeholder="Theme"
            className="text-[#363636] text-sm "
          />
          <Image src={downicon} alt="locationicon" width={16} height={16} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Erbil" className="text-[#363636] text-base">
            Erbil
          </SelectItem>
          <SelectItem value="Sula" className="text-[#363636] text-base">
            Sulaymaniyah
          </SelectItem>
          <SelectItem value="Duhok" className="text-[#363636] text-base">
            Duhok
          </SelectItem>
          <SelectItem value="Zakho" className="text-[#363636] text-base">
            Zakho
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default City;

//
