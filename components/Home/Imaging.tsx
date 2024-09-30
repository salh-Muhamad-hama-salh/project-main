import React from "react";
import Image from "next/image";
import timeicon from "@/public/icons/timeiconhospital.svg";
import imaging from "@/public/images/imaging.png";
import imagingone from "@/public/images/imagingone.svg";
import imagingtwo from "@/public/images/imagingtwo.svg";
import imagingthree from "@/public/images/imagingthree.svg";
import imagingfour from "@/public/images/imagingfour.svg";

function Imaging() {
  return (
    <div className="bg-[#36A5C1] h-full w-full">
      <h1 className="text-center font-bold pt-[56px] text-[34px] text-white">
        Imaging Center
      </h1>
      <div className="flex items-center justify-center gap-[100px] pb-[100px]">
        <div className="hidden xl:flex pt-[20px]">
          <Image src={imaging} alt="hospitalimage" />
        </div>
        <div className="flex items-center gap-[50px] mt-12 xl:mt-0">
          <div className="flex flex-col items-center relative">
            <Image
              src={imagingone}
              alt="hospitailoneitem"
              width={167}
              height={167}
              className="rounded-full cursor-pointer mb-[30px] transition-transform duration-300 ease-in-out hover:scale-110"
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
              src={imagingtwo}
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
              src={imagingthree}
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
              src={imagingfour}
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

export default Imaging;
