"use client";
import React, { useState } from "react";
import CardDocter from "./CardDocter";
import Image from "next/image";
import righticon from "@/public/icons/righticon.svg";
import lefticon from "@/public/icons/lefticon.svg";

export function CarouselSize() {
  // State to hold all the card components
  const [cards, setCards] = useState([
    <CardDocter key={0} />,
    <CardDocter key={1} />,
    <CardDocter key={2} />,
    <CardDocter key={3} />,
    <CardDocter key={4} />,
  ]);

  // State to keep track of the current index for the visible "window"
  const [visibleStart, setVisibleStart] = useState(0);
  const visibleCount = 3; // Number of cards to show at once

  // Function to add a new card and remove the first visible card
  const addNewCard = () => {
    // Ensure we don't go out of bounds of the array
    if (visibleStart + visibleCount < cards.length) {
      setVisibleStart(visibleStart + 1);
    } else {
      // Optional: You can add logic to either loop or stop at the end of the array
      // If you want infinite scrolling, you can add new cards to the end here
      const newCard = <CardDocter key={cards.length} />;
      setCards([...cards, newCard]);
      setVisibleStart(visibleStart + 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-12 lg:gap-4 xl:gap-6">
      <button
        className="h-9 w-9 bg-[#DCDCDC] rounded-full flex justify-center items-center"
        disabled={visibleStart === 0} // Disable left button if at the start
        onClick={() => setVisibleStart(Math.max(0, visibleStart - 1))}
      >
        <Image src={lefticon} alt="lefticon" width={10} height={10} />
      </button>
      <div className="flex gap-6">
        {cards
          .slice(visibleStart, visibleStart + visibleCount)
          .map((card, index) => (
            <div key={visibleStart + index} className="flex-shrink-0">
              {card}
            </div>
          ))}
      </div>
      <button
        className="h-9 w-9 bg-[#2E9CB7] rounded-full flex justify-center items-center"
        onClick={addNewCard}
      >
        <Image src={righticon} alt="righticon" width={10} height={10} />
      </button>
    </div>
  );
}
