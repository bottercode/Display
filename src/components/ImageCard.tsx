import { GithubIcon, Upload } from "lucide-react";
import Link from "next/link";
import React from "react";

const ImageCard = ({ category, title, description, github, deploy }: any) => {
  return (
    <div className="border-white w-[50%] h-[70%] bg-white absolute top-[60.099%] max-2xl:top-[60%] left-[70%] -translate-x-1/2 -translate-y-1/2 opacity-90">
      <div className="flex flex-col p-4 max-sm:p-0 max-md:p-1 max-lg:p-1">
        <h1 className="text-black max-sm:text-[10px] max-lg:text-[12px] font-bold">
          {category}
        </h1>
        <h1 className="text-black font-bold text-3xl mt-10 max-sm:text-[14px] max-md:text-base max-xl:text-4xl max-lg:text-2xl">
          {title}
        </h1>
        <hr className="w-14 h-2 my-4 bg-black border-0 ml-1 max-sm:my-5 max-sm:w-5 max-md:my-10"></hr>
        <p className="text-3xl max-sm:text-[8px] max-sm:tracking-tighter max-md:text-[20px] max-lg:text-[13px] max-2xl:text-[15px]">
          {description}
        </p>
        <div className="flex fixed bottom-6 gap-4 max-2xl:bottom-3">
          <Link href={`${github}`}>
            <GithubIcon className="hover:fill-[#CE8264]" />
          </Link>
          <Link href={`${deploy}`}>
            <Upload className="hover:fill-[#CE8264]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
