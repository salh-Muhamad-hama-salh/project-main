import React from "react";
import Image from "next/image";
import background from "@/public/icons/backgroundex.svg";
import imageimage from "@/public/images/imagedr.png";
import cardimage from "@/public/images/cardimage.svg";
import right from "@/public/icons/righticon.svg";
import lefticon from "@/public/icons/lefticon.svg";
import ddan from "@/public/icons/ddan.svg";
import meshk from "@/public/icons/meshk.svg";
import qach from "@/public/icons/laq.svg";
import gwrchela from "@/public/icons/gwrchela.svg";
import syakan from "@/public/icons/syakan.svg";

function Explore() {
  return (
    <div className="w-full h-full bg-[#36A5C1] relative">
      <Image
        src={background}
        alt="background"
        className=" absolute top-5 right-12"
      />
      <h1 className="text-[47px] font-semibold text-center pt-[66px] text-white">
        Explore Our Medical Specializations
      </h1>
      <p className="text-lg text-[#FFF4F4] pt-[42px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut <br /> labore et dolore magna aliqua.
      </p>
      <div className="flex ml-0 xl:ml-[240px] mt-82">
        <div className="hidden xl:flex xl:absolute top-[230px] ">
          <div className="hidden xl:flex mb-[200px] relative">
            <div className="w-[371px] h-[465px] border-4 rounded-t-full absolute top-11 "></div>
            <div className="w-[371px] h-[465px] border-dashed border-4 rounded-t-full absolute top-[55px] left-[-10px]"></div>
            <Image
              src={imageimage}
              alt="drphoto"
              className="w-[374px] h-[510px] z-10"
            />
          </div>
        </div>

        <div className="xl:grid xl:grid-cols-4 grid grid-cols-4 xl:ml-[310px] mx-auto mt-[90px] ">
          <div className="relative">
            <Image
              src={cardimage}
              alt="cardimage"
              className="w-[220px] h-[220px]"
            />
            <Image
              src={ddan}
              alt="ddan"
              className="absolute top-8 left-[80px]"
            />
            <span className="absolute top-[100px] left-[70px] text-xl font-medium text-white">
              Urology
            </span>
            <span className="absolute top-[130px] left-[80px] text-sm font-medium text-white">
              Urology
            </span>
          </div>
          <div className="xl:ml-[-40px] relative">
            <Image
              src={cardimage}
              alt="cardimage"
              className="w-[220px] h-[220px]"
            />
            <Image
              src={meshk}
              alt="ddan"
              className="absolute top-8 left-[80px]"
            />
            <span className="absolute top-[100px] left-[70px] text-xl font-medium text-white">
              Urology
            </span>
            <span className="absolute top-[130px] left-[80px] text-sm font-medium text-white">
              Urology
            </span>
          </div>
          <div className="xl:ml-[-80px] relative">
            <Image
              src={cardimage}
              alt="cardimage"
              className="w-[220px] h-[220px]"
            />
            <Image
              src={qach}
              alt="ddan"
              className="absolute top-4 left-[80px]"
            />
            <span className="absolute top-[100px] left-[70px] text-xl font-medium text-white">
              Urology
            </span>
            <span className="absolute top-[130px] left-[80px] text-sm font-medium text-white">
              Urology
            </span>
          </div>
          <div className="xl:ml-[-115px] relative">
            <Image
              src={cardimage}
              alt="cardimage"
              className="w-[220px] h-[220px]"
            />
            <Image
              src={ddan}
              alt="ddan"
              className="absolute top-8 left-[80px]"
            />
            <span className="absolute top-[100px] left-[70px] text-xl font-medium text-white">
              Urology
            </span>
            <span className="absolute top-[130px] left-[80px] text-sm font-medium text-white">
              Urology
            </span>
          </div>

          <div className=" xl:mt-[-40px] relative">
            <Image
              src={cardimage}
              alt="cardimage"
              className="w-[220px] h-[220px]"
            />
            <Image
              src={syakan}
              alt="ddan"
              className="absolute top-8 left-[70px]"
            />
            <span className="absolute top-[100px] left-[70px] text-xl font-medium text-white">
              Urology
            </span>
            <span className="absolute top-[130px] left-[80px] text-sm font-medium text-white">
              Urology
            </span>
          </div>
          <div className="xl:mt-[-40px] xl:ml-[-40px] relative">
            <Image
              src={cardimage}
              alt="cardimage"
              className="w-[220px] h-[220px]"
            />
            <Image
              src={ddan}
              alt="ddan"
              className="absolute top-8 left-[80px]"
            />
            <span className="absolute top-[100px] left-[70px] text-xl font-medium text-white">
              Urology
            </span>
            <span className="absolute top-[130px] left-[80px] text-sm font-medium text-white">
              Urology
            </span>
          </div>
          <div className="xl:mt-[-40px] xl:ml-[-80px] relative">
            <Image
              src={cardimage}
              alt="cardimage"
              className="w-[220px] h-[220px]"
            />
            <Image
              src={gwrchela}
              alt="ddan"
              className="absolute top-8 left-[80px]"
            />
            <span className="absolute top-[100px] left-[70px] text-xl font-medium text-white">
              Urology
            </span>
            <span className="absolute top-[130px] left-[80px] text-sm font-medium text-white">
              Urology
            </span>
          </div>
          <div className="xl:mt-[-40px] xl:ml-[-115px] relative">
            <Image
              src={cardimage}
              alt="cardimage"
              className="w-[220px] h-[220px]"
            />
            <Image
              src={ddan}
              alt="ddan"
              className="absolute top-8 left-[80px]"
            />
            <span className="absolute top-[100px] left-[70px] text-xl font-medium text-white">
              Urology
            </span>
            <span className="absolute top-[130px] left-[80px] text-sm font-medium text-white">
              Urology
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end mr-[255px] gap-4">
        <div className="bg-white w-[32px] h-[32px] mb-[60px] rounded-[8px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.25)] flex items-center justify-center cursor-pointer">
          <Image src={lefticon} alt="lefticon" width={8} height={8} />
        </div>
        <div className="bg-white w-[32px] mb-[60px] h-[32px] rounded-[8px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.25)] flex items-center justify-center cursor-pointer">
          <Image src={right} alt="right" />
        </div>
      </div>
    </div>
  );
}

export default Explore;
