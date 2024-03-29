"use client";
import React from "react";
import Link from "next/link";
import HoverCard from "./HoverCard";

const AiOption = () => {
  return (
    <div className="">
      <h1 className="text-white font-extrabold text-4xl mb-10 md:mb-0">
        Try For Free
      </h1>
      <div className=" text-extrabold w-[90vw] md:w-[70vw] md:mt-12  flex flex-wrap justify-center gap-4 md:gap-2 min-h-[21rem] rounded-2xl relative">
        <Link
          className="cursor-pointer font-bold rounded-2xl flex justify-center items-center"
          href="/icebreaker"
        >
          <HoverCard
            divColor="coralDark"
            ballColor="white"
            textColor="white"
            width={400}
            height={200}
            text="Unleash Awesome Icebreakers"
          />
        </Link>
        <Link
          className="cursor-pointer font-bold rounded-2xl flex justify-center items-center"
          href="/dateNight"
        >
          <HoverCard
            divColor="white"
            ballColor="coralDark"
            textColor="coralDark"
            width={500}
            height={200}
            text="Give Me Date Night Ideas"
          />
        </Link>
        <Link
          className="cursor-pointer font-bold rounded-2xl flex justify-center items-center"
          href="/flirtyResponse"
        >
          <HoverCard
            divColor="coralDark"
            ballColor="white"
            textColor="white"
            width={600}
            height={200}
            text="Tingle their spine with flirty response"
          />
        </Link>
        <Link
          className="cursor-pointer font-bold rounded-2xl flex justify-center items-center"
          href="/sayThis"
        >
          <HoverCard
            divColor="white"
            ballColor="coralDark"
            textColor="black"
            width={300}
            height={200}
            text="They said this, what should i say next"
          />
        </Link>
        <Link
          className="cursor-pointer font-bold rounded-2xl flex justify-center items-center"
          href="/pickupLine"
        >
          <HoverCard
            divColor="coralDark"
            ballColor="white"
            textColor="white"
            width={700}
            height={100}
            text="Banger pickup line"
          />
        </Link>
      </div>
    </div>
  );
};

export default AiOption;
