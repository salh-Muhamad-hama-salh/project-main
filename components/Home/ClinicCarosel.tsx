"use client";
import React, { useState } from "react";
import Image from "next/image";
import dll from "@/public/images/dllicon.svg";
import laq from "@/public/images/lagicon.svg";
import ddan from "@/public/images/ddanicon.svg";
import syakan from "@/public/images/syakanicon.svg";
import meshk from "@/public/images/meshkicon.svg";
import lefticon from "@/public/icons/lefticon.svg";
import righticon from "@/public/icons/righticon.svg";
// import border from "@/public/icons/border.svg";

const items = [
  { src: dll, label: "Urology" },
  { src: laq, label: "Neurology" },
  { src: meshk, label: "Orthopedic" },
  { src: ddan, label: "Cardiologist" },
  { src: syakan, label: "Dentist" },
];

function Clinicitem() {
  const [visibleItems, setVisibleItems] = useState(items.slice(0, 5)); // Show 5 items by default
  const [startIndex, setStartIndex] = useState(0);

  const handleRightIconClick = () => {
    const newStartIndex = (startIndex + 1) % items.length;
    const newVisibleItems = items
      .slice(newStartIndex, newStartIndex + 5)
      .concat(items.slice(0, (newStartIndex + 5) % items.length))
      .slice(0, 5);
    setStartIndex(newStartIndex);
    setVisibleItems(newVisibleItems);
  };

  const handleLeftIconClick = () => {
    const newStartIndex = (startIndex - 1 + items.length) % items.length;
    const newVisibleItems = items
      .slice(newStartIndex, newStartIndex + 5)
      .concat(items.slice(0, (newStartIndex + 5) % items.length))
      .slice(0, 5);
    setStartIndex(newStartIndex);
    setVisibleItems(newVisibleItems);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex justify-center items-center gap-x-[20px] md:gap-x-[50px] lg:gap-x-[75px]">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-y-[22px] cursor-pointer flex-shrink-0 w-auto mt-[50px]"
            >
              <div className="w-[100px] h-[100px] lg:w-[125px] lg:h-[125px] bg-white hover:bg-gradient-to-r from-[#2E9CB7] to-[#5DC19D] ease-in-out shadow-[0px_0px_3px_rgba(0,_0,_0,_0.25)] rounded-full flex items-center justify-center relative transition-all duration-300 group">
                <Image
                  src={item.src}
                  alt={item.label}
                  className="w-[70px] h-[70px] transition-all duration-300 filter group-hover:brightness-0 group-hover:invert "
                />
                {/* <Image
                  src={border}
                  alt="border"
                  className="absolute left-0 "
                /> */}
                <div className="w-[8px] h-[8px] bg-gradient-to-r from-[#2E9CB7] to-[#5DC19D] rounded-full absolute top-[-5px] transition-all duration-300 group-hover:bg-white"></div>
                <div className="w-[8px] h-[8px] bg-gradient-to-r from-[#2E9CB7] to-[#5DC19D] rounded-full absolute bottom-[-5px] transition-all duration-300 group-hover:bg-white"></div>
              </div>
              <span className="text-[16px] hover:text-[#026985] md:text-[18px] lg:text-[20px] text-[#363636] font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[30px] flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-[10px] h-[10px] rounded-full ${
              index === startIndex ? "bg-[#2E9CB7]" : "bg-[#8D8D8D]"
            }`}
          ></button>
        ))}
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-x-[80px] mt-[26px] cursor-pointer">
        <div
          onClick={handleLeftIconClick}
          className="flex justify-center items-center shadow-[0px_0px_3px_rgba(0,_0,_0,_0.25)] bg-white rounded-full w-[20px] h-[20px]"
        >
          <Image src={lefticon} alt="lefticon" />
        </div>
        <div
          onClick={handleRightIconClick}
          className="flex justify-center items-center cursor-pointer shadow-[0px_0px_3px_rgba(0,_0,_0,_0.25)] bg-white rounded-full w-[20px] h-[20px]"
        >
          <Image src={righticon} alt="righticon" />
        </div>
      </div>
    </div>
  );
}

export default Clinicitem;
