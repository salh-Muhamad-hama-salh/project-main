import React from "react";
import Image from "next/image";
import imfomationicon from "@/public/icons/information.svg";
import hospitalimage from "@/public/images/hospitalimage.png";
import hospitailoneitem from "@/public/images/hospitaloneitem.png";
import hospitailtwoitem from "@/public/images/hospitaltwoitem.svg";
import hospitailthreeitem from "@/public/images/hospitalthreeitem.svg";
import hospitailfouritem from "@/public/images/hospitalfouritem.svg";
import timeicon from "@/public/icons/timeiconhospital.svg";

function Hospitals() {
  return (
    <div className="bg-[#36A5C1] h-full w-full">
      <div className="flex justify-end pt-[56px] pr-[25px]">
        {" "}
        <Image src={imfomationicon} alt="imfomationicon" className="" />
      </div>

      <h1 className="text-center font-bold text-[34px] text-white">
        Hospitals
      </h1>
      <div className="flex items-center justify-center gap-[100px] pb-[100px]">
        <div className="hidden xl:flex pt-[20px]">
          <Image src={hospitalimage} alt="hospitalimage" />
        </div>
        <div className="flex items-center gap-[50px] mt-12 xl:mt-0">
          <div className="flex flex-col items-center relative">
            <Image
              src={hospitailoneitem}
              alt="hospitailoneitem"
              width={167}
              height={167}
              className="rounded-full border-4 cursor-pointer mb-[30px] transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div className="h-12 w-12 rounded-full bg-white absolute right-0 flex justify-center items-center ">
              <Image src={timeicon} alt="headertimeicon" className="z-20" />
            </div>
            <span className="text-2xl font-semibold text-white">
              Wayo Clinic{" "}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={hospitailtwoitem}
              alt="hospitailoneitem"
              width={167}
              height={167}
              className="rounded-full border-4 cursor-pointer mb-[30px] transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <span className="text-2xl font-semibold text-white">
              Keto Hospital
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={hospitailthreeitem}
              alt="hospitailoneitem"
              width={167}
              height={167}
              className="rounded-full border-4 cursor-pointer mb-[30px] transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <span className="text-2xl font-semibold text-white">
              Bod Hospital
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={hospitailfouritem}
              alt="hospitailoneitem"
              width={167}
              height={167}
              className="rounded-full border-4 cursor-pointer mb-[30px] transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <span className="text-2xl font-semibold text-white">
              Hoped Hospital
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center xl:mt-[-110px] pb-[70px]">
        <button className="h-[45px] w-[170px] text-lg font-medium bg-white text-[#36A5C1] flex justify-center items-center rounded-[6px]">
          All Hospitals
        </button>
      </div>
    </div>
  );
}

export default Hospitals;
