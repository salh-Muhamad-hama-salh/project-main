import React from "react";
import Image from "next/image";
import timeicon from "@/public/icons/timeiconhospital.svg";

import physiotherapy from "@/public/images/physiotherapy.png";
import physiotherapyone from "@/public/images/physiotherapyone.svg";
import physiotherapytwo from "@/public/images/physiotherapytwo.svg";
import physiotherapythree from "@/public/images/physiotherapythree.svg";
import physiotherapyfour from "@/public/images/physiotherapyfour.svg";

function Physiotherapy() {
  return (
    <div className="bg-white h-full w-full">
      <h1 className="text-center font-bold pt-[56px] text-[34px] text-[#36A5C1]">
        Physiotherapy Centers
      </h1>
      <div className="flex items-center justify-center gap-[100px] pb-[100px]">
        <div className="hidden xl:flex pt-[20px]">
          <Image src={physiotherapy} alt="hospitalimage" />
        </div>
        <div className="flex items-center gap-[50px] mt-12 xl:mt-0">
          <div className="flex flex-col items-center relative">
            <Image
              src={physiotherapyone}
              alt="hospitailoneitem"
              width={167}
              height={167}
              className="rounded-full border-4 cursor-pointer border-[#5DC19D] mb-[30px] transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div className="h-12 w-12 rounded-full bg-white absolute right-0 flex justify-center items-center ">
              <Image src={timeicon} alt="headertimeicon" className="z-20" />
            </div>
            <span className="text-2xl font-semibold text-black">
              Wayo Clinic{" "}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={physiotherapytwo}
              alt="hospitailoneitem"
              width={167}
              height={167}
              className="rounded-full border-4 border-[#5DC19D] cursor-pointer mb-[30px] transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <span className="text-2xl font-semibold text-black">
              Keto Hospital
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={physiotherapythree}
              alt="hospitailoneitem"
              width={167}
              height={167}
              className="rounded-full border-4 cursor-pointer border-[#5DC19D] mb-[30px] transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <span className="text-2xl font-semibold text-black">
              Bod Hospital
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={physiotherapyfour}
              alt="hospitailoneitem"
              width={167}
              height={167}
              className="rounded-full border-4 cursor-pointer border-[#5DC19D] mb-[30px] transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <span className="text-2xl font-semibold text-black">
              Hoped Hospital
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center xl:mt-[-110px] pb-[70px]">
        <button className="h-[45px] w-[170px] text-lg font-medium text-white bg-[#36A5C1] flex justify-center items-center rounded-[6px]">
          All Hospitals
        </button>
      </div>
    </div>
  );
}

export default Physiotherapy;
