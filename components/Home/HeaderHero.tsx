"use client";
import React, { useState } from "react";
import Image from "next/image";
import headertimeicon from "@/public/icons/headertimeicon.svg";
import clinic from "@/public/icons/clilicicon.svg";
import right from "@/public/icons/righticon.svg";
import lefticon from "@/public/icons/lefticon.svg";
import { initialItemList } from "./Headerherolest";

const newItem = {
  src: clinic, // Icon for the new item
  Title: "New", // Title for the new item
  alt: "New", // Alt text for the new item
};

function HeaderHero() {
  const [itemList, setItemList] = useState(initialItemList);
  const [newItemAdded, setNewItemAdded] = useState(false);
  const [showFirstItem, setShowFirstItem] = useState(true);

  const handleRightClick = () => {
    if (!newItemAdded) {
      setItemList([...itemList, newItem]); // Add new item at the end
      setNewItemAdded(true); // Track that new item has been added
      setShowFirstItem(false); // Hide the first item
    }
  };

  const handleLeftClick = () => {
    if (newItemAdded) {
      const newList = [...itemList];
      newList.pop(); // Remove the new item from the end
      setItemList(newList);
      setNewItemAdded(false); // Track that new item has been removed
      setShowFirstItem(true); // Show the first item again
    }
  };

  return (
    <div className="flex items-center w-full h-[55px] pl-[114px] justify-between">
      <div className="w-[1140px] h-full flex items-center">
        <div className="w-full h-full flex items-center overflow-hidden gap-12 md:gap-[80px] lg:gap-[70px] justify-between">
          {showFirstItem && ( // Conditionally render the first item
            <div className="flex items-center gap-3">
              <Image
                src={itemList[0].src}
                alt={itemList[0].alt}
                width={21}
                height={21}
              />
              <span className="hidden xl:flex xl:text-base xl:font-medium xl:text-[#363636] hover:text-[#2E9CB7] duration-400 cursor-pointer ease-in-out">
                {itemList[0].Title}
              </span>
            </div>
          )}
          {itemList.slice(1).map(
            (
              item,
              index // Render the rest of the items
            ) => (
              <div
                key={index + 1}
                className="flex items-center gap-3 cursor-pointer "
              >
                <Image src={item.src} alt={item.alt} width={21} height={21} />
                <span className="hidden xl:flex xl:text-[14px] xl:font-medium xl:text-[#363636] hover:text-[#2E9CB7] duration-400 ease-in-out">
                  {item.Title}
                </span>
              </div>
            )
          )}
        </div>
        <div className="h-full flex items-center justify-center m-2 ml-6">
          {newItemAdded ? (
            <Image
              src={lefticon}
              alt="lefticon"
              width={10}
              height={10}
              onClick={handleLeftClick} // Remove new item on left click
              className="cursor-pointer"
            />
          ) : (
            <Image
              src={right}
              alt="right"
              width={10}
              height={10}
              onClick={handleRightClick} // Add new item on right click
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
      <div className="bg-[#2E9CB7] w-[250px] h-full flex items-center justify-center gap-2 rounded-tl-md">
        <Image
          src={headertimeicon}
          alt="heaertimeicon"
          width={24}
          height={24}
        />
        <span className="hidden lg:flex lg:text-base lg:font-medium text-white">
          Available 7/24
        </span>
      </div>
    </div>
  );
}

export default HeaderHero;
