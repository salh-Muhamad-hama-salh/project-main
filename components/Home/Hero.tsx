import React from "react";
import backroundhero from "@/public/icons/backgroundhero.svg";
import imagehero from "@/public/images/imagehero.svg";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Hero() {
  return (
    <div className="bg-[#2E9CB7] w-full h-[616px] relative flex justify-center items-center xl:items-center xl:justify-between">
      <Image
        src={backroundhero}
        alt="hero"
        layout="fill"
        objectFit="cover"
        className="opacity-70 absolute top-0 left-0"
      />

      <div className="hidden xl:flex xl:mt-12 xl:ml-[110px]">
        <Image
          src={imagehero}
          alt="imagehero"
          width={486}
          height={571}
          className="z-20"
        />
      </div>
      <div className="flex justify-between items-center">
        {" "}
        <div className="w-[430px] h-[450px] bg-white rounded-[21px] shadow-2xl xl:mr-[240px] z-20">
          <h1 className="text-xl text-center font-semibold text-[#404040] pt-[25px] pb-[33px]">
            Search Doctor & Get Appointment
          </h1>
          <Label
            htmlFor="email"
            className="pl-[60px] text-[#363636] text-sm font-medium"
          >
            Search Doctor{" "}
          </Label>
          <Input
            className="mx-[55px] mt-2 w-[330px] mb-5 h-[45px]"
            type="text"
            placeholder="Doctor name"
          />
          <Label
            htmlFor="email"
            className="pl-[60px] text-[#363636] text-sm font-medium"
          >
            Section
          </Label>
          <Select>
            <SelectTrigger className="w-[330px] mx-[55px] mb-5 border-2 mt-2 h-[45px]">
              <SelectValue placeholder="Doktor" />
            </SelectTrigger>
            <SelectContent className="w-[330px]">
              <SelectItem value="light">One</SelectItem>
              <SelectItem value="dark">Two</SelectItem>
              <SelectItem value="system">Three</SelectItem>
            </SelectContent>
          </Select>
          <Label
            htmlFor="email"
            className="pl-[60px] text-[#363636] text-sm font-medium"
          >
            Specialities
          </Label>
          <Select>
            <SelectTrigger className="w-[330px] mx-[55px] border-2 mt-2 h-[45px]">
              <SelectValue placeholder="Doktor" />
            </SelectTrigger>
            <SelectContent className="w-[330px]">
              <SelectItem value="light">One</SelectItem>
              <SelectItem value="dark">Two</SelectItem>
              <SelectItem value="system">Three</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex justify-center items-center mt-[35px]">
            <button className="h-[40px] text-white text-2xl font-semibold w-[330px] text-center bg-gradient-to-r to-[#09E5AB] from-[#13C585]  rounded-[5px]">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
