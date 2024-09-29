import React from "react";

import Clinicdropdown from "./Clinicdropdown";
import ClinicCarosel from "./ClinicCarosel";

function Clinic() {
  return (
    <div className="bg-white w-full h-full">
      <Clinicdropdown />
      <h1 className="text-center pt-1 text-3xl font-semibold text-[#363636]">
        Clinic & Specialties
      </h1>
      <div className="flex justify-center items-center mt-6">
        {" "}
        <div className="w-[85px] h-1 bg-gradient-to-r from-[#2E9CB7] to-[#5DC19D] rounded-full"></div>
      </div>
      <p className="text-center text-[#8D8D8D] pt-5">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when <br /> looking at its layout. The point
        of using Lorem Ipsum is that it has a more-or-less normal
      </p>
      <div className="mt-[60px] flex justify-center items-center mb-[64px]">
        <ClinicCarosel />
      </div>
    </div>
  );
}

export default Clinic;
