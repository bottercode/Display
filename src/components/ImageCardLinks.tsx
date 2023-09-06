import React from "react";

const ImageCardLinks = () => {
  return (
    <div className="border-white w-[30%] h-[9%] bg-white absolute top-[90.5%] left-[30%] -translate-x-1/2 -translate-y-1/2 max-sm:text-[10px] max-2xl:left-[30%]">
      <div className="flex items-center justify-center py-4 gap-10 max-sm:gap-0 max-sm:my-0 max-lg:gap-2 max-2xl:py-1 ">
        <h1 className="text-black font-bold pl-5 text-[20px] max-sm:pl-2 max-sm:pr-2 max-lg:pl-1 max-lg:text-[10px] max-2xl:text-[12px] max-2xl ">
          View On
        </h1>
        <hr className="w-28 h-1 my-4 bg-black border-0 max-md:w-5 max-md:mr-5 max-sm:my-[2px] max-md:my-10 max-lg:w-10 max-2xl:w-20"></hr>
      </div>
    </div>
  );
};

export default ImageCardLinks;
