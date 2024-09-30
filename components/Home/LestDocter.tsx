import React from "react";
import { CarouselSize } from "./doctercarosel";

function LestDocter() {
  return (
    <div className="w-full h-full bg-white mb-[117px]">
      <h1 className="text-center text-[32px] font-semibold pt-[110px]">
        Specialist Doctors
      </h1>
      <div className="flex justify-center items-center mt-6">
        {" "}
        <div className="w-[85px] h-1 bg-gradient-to-r from-[#2E9CB7] to-[#5DC19D] rounded-full"></div>
      </div>
      <p className="text-[#8D8D8D] text-base font-medium text-center pt-5">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when <br /> looking at its layout. The point
        of using Lorem Ipsum is that it has a more-or-less normal
      </p>
      <div className="pt-5 flex justify-center items-center">
        <CarouselSize />
      </div>
      <div className="pt-[90px] flex justify-center">
        <button className="w-[220px] h-[57px] border-b-4 border-[#026985] rounded-[6px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.25)] text-[#363636] text-lg font-medium">
          All Doctors
        </button>
      </div>
    </div>
  );
}

export default LestDocter;
