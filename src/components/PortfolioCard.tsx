"use client";
import Image from "next/image";
import React, { useState } from "react";
import portfolio_img from "../assets/portfolio_img.png";
import { HardDriveUpload } from "lucide-react";
import Link from "next/link";

const PortfolioCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="bg-black h-screen p-14 relative">
      <h1 className="text-white">ABOUT</h1>
      <p className="text-white ">Hi! I am a Full Stack Developer.</p>
      <p className="text-white mt-12">Find more about me below!</p>
      <div
        className="text-white border-solid border-pink-500 absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 h-[50%] w-[30%] rounded-lg border-2 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative">
          <Image
            src={portfolio_img}
            alt="portfolio_img"
            className={`transition-all duration-300 ${
              isHovered ? "filter blur-sm" : ""
            }`}
          />
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                href="https://devanshbotter.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl mr-4 hover:text-pink-500"
              >
                <HardDriveUpload />
              </Link>
            </div>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#e6e6e6] to-transparent"></div>
      </div>
    </div>
  );
};

export default PortfolioCard;
