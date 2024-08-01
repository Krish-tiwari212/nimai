import React, { useState } from 'react'
import Image from 'next/image'

interface CardInterface {
  image?: string;
  text?: string;
  selectedtitle?: String;
  setSelectedtitle?: (string: any) => void;
}

const CardSignUpPage = ({
  image = "",
  text = "",
  selectedtitle = "",
  setSelectedtitle = (string: any) => {},
}: CardInterface) => {
  const [selected, setSelected] = useState<String>("hi");
  return (
    <button
      onClick={(e) => {
        const extractedTitle = text.split(" ").pop();
        if (extractedTitle) {
          setSelectedtitle(extractedTitle);
          setSelected(extractedTitle);
        }
      }}
      className=" w-24 h-28 border md:w-28 md:h-32 lg:w-32 lg:h-36 xl:w-36 xl:h-40 border-black rounded-lg relative py-3 sm:py-4 hover:border-[#28B925] xl:py-6"
    >
      <div className="w-[50%] h-[60%] relative object-contain top-[10%] left-[25%]">
        <Image src={image} alt={image} fill priority />
      </div>
      <div className="relative text-[2.8vw] top-[25%] text-center sm:text-[2vw] md:text-[1.8vw] lg:text-[1.5vw] xl:text-[1.2vw]">
        {text}
      </div>
      <div
        className={`rounded-full absolute w-[12%] h-[10%] top-2 right-2 border ${
          selected === selectedtitle ? "bg-[#28B925]" : "border-black "
        }`}
      ></div>
    </button>
  );
};

export default CardSignUpPage;
