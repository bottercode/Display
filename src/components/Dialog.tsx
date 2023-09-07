"use client";
import Image from "next/image";
import React, { useState } from "react";
import showcase1_display from "../assets/showcase1_display.png";
import showcase2_display from "../assets/showcase2_display.png";
import showcase3_display from "../assets/showcase3_display.png";
import { ArrowDown, ArrowUp } from "lucide-react";
import ImageCard from "./ImageCard";
import ImageCardLinks from "./ImageCardLinks";
import Link from "next/link";
const Dialog = () => {
  const [num, setNum] = useState(1);
  const imageSources = [
    showcase1_display,
    showcase2_display,
    showcase3_display,
    showcase2_display,
  ];
  const totalImages = imageSources.length;
  const pages = Array.from({ length: totalImages }, (_, index) => ({
    page: index + 1,
  }));

  const handleButtonClick = (direction: "up" | "down") => {
    if (direction === "up" && num > 1) {
      setNum(num - 1);
    } else if (direction === "down" && num < pages.length) {
      setNum(num + 1);
    }
  };

  const imageCardContent = [
    {
      category: "FULL STACK APPLICATION",
      type: "Personal Project",
      name: "NEXIT",
      title: "NEXIT",
      description:
        "Nexit is a full stack web application having communities where you can connect with like minded people and do all the fun stuffs.",
      github: "https://github.com/bottercode/nexit",
      deploy: "https://nexit-gamma.vercel.app/",
    },
    {
      category: "FRONTEND DESIGN",
      title: "POD",
      name: "POD",
      type: "Personal Project",
      description:
        "POD is just a frontend design depicting a landing design for a podcast application. More responsive can be made on demand applicable for 2xl and bigger screens.",
      github: "https://github.com/bottercode/podcast",
      deploy: "https://podcast-design.vercel.app/",
    },
    {
      category: "FULL STACK APPLICATION",
      title: "AI ANALYSIS PREDICTION",
      name: "PREDICTION",
      type: "Freelance Project",
      description:
        "Ai Analysis Prediction is a full stack web application consisting of display charts thats fetches live data from the apis handled in the backend.",
      github: "https://github.com/bottercode/stockworld-AIPrediction",
      deploy: "https://stockworld-ai-prediction.vercel.app/",
    },
    {
      category: "FULL STACK APPLICATION",
      title: "QUEELER",
      name: "QUEELER",
      type: "Personal Project",
      description:
        "Nexit is a full stack web application that was made to make the chatting more interactive and fun loving process.",
      github: "https://github.com/bottercode/stockworld-AIPrediction",
      deploy: "https://stockworld-ai-prediction.vercel.app/",
    },
  ];

  const currentImageIndex = Math.min(num - 1, imageSources.length - 1);

  return (
    <div className="absolute w-[60%]  h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-full h-full relative">
        <div className="absolute flex gap-20 p-7 z-10">
          <p className="text-white max-sm:text-[10px] ">
            <Link href="/about">ABOUT</Link>
          </p>
          <p className="text-white max-sm:text-[10px]">
            <Link href="/#">PROJECTS</Link>
          </p>
        </div>

        <h1 className="text-gray-500 tracking-[.1rem] font-extrabold text-[90px] -rotate-90 -translate-x-[40%] translate-y-[130%] opacity-60 absolute left-0 top-40 z-1 max-sm:text-6xl max-sm:-translate-x-[70%] max-md:-translate-x-[65%] max-md:translate-y-full max-lg:-translate-x-[65%] max-lg:translate-y-[8%] max-2xl:translate-y-[30%]">
          {imageCardContent[currentImageIndex]?.name}
        </h1>
        <p className="text-[#e18f69] font-semibold -rotate-90 text-xl -translate-x-[30%] max-sm:text-[15px] max-sm:-translate-x-[90%] max-md:text-[15px] max-md:-translate-x-[120%] absolute left-0 top-1/2 z-2 max-lg:-translate-x-[80%]">
          Devansh Dwivedi
        </p>
        <span className="text-[#e18f69] font-semibold -rotate-90  text-sm absolute left-2 top-1/2 z-2 max-sm:text-[10px] max-sm:-translate-x-[120%] max-md:text-[10px] max-md:-translate-x-[160%] max-lg:-translate-x-[80%]">
          {imageCardContent[currentImageIndex]?.type}
        </span>
        <Image
          src={imageSources[currentImageIndex]}
          alt={`showcase${currentImageIndex + 1}_display`}
          quality={100}
          className="w-[70%] h-[72.5%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-sm:aspect-square max-md:aspect-square"
        />
        <ImageCard
          category={imageCardContent[currentImageIndex]?.category}
          title={imageCardContent[currentImageIndex]?.title}
          description={imageCardContent[currentImageIndex]?.description}
          github={imageCardContent[currentImageIndex]?.github}
          deploy={imageCardContent[currentImageIndex]?.deploy}
        />

        <ImageCardLinks />
        <div className="absolute flex items-center flex-col left-[85%] p-7 gap-11 z-10 ml-40 max-sm:p-3 max-sm:ml-16 max-sm:text-[10px] max-sm:top-4 max-md:p-10 max-md:ml-16 max-md:top-4 ">
          <p className="text-white">LIST</p>
          <ArrowUp
            className="text-white hover:text-[#CE8264]"
            onClick={() => handleButtonClick("up")}
          />
          {pages.map((pg, i) => (
            <button
              key={i}
              className="text-white bold p-4 max-2xl:mb-0 max-2xl:p-1 mb-4 hover:text-[#CE8264] hover:underline "
              onClick={() => handleButtonClick("down")}
            >
              {pg.page}
            </button>
          ))}
          <ArrowDown
            className="text-white hover:text-[#CE8264]"
            onClick={() => handleButtonClick("down")}
          />
        </div>
      </div>
    </div>
  );
};

export default Dialog;
