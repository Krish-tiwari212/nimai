"use client"

import React from "react";
import Image from "next/image";
import LoginForm from "./ui/LoginForm";

const SignUpPage = () => {
  return (
    <div className="h-screen w-full bg-[#405F3F]">
      <div className="relative w-full h-full overflow-hidden ">
        <LoginForm />
        <div className="object-contain absolute w-[150%] h-[180%] sm:w-full top-[-40%] right-[-5%] sm:right-0 sm:h-full sm:top-[30%] z-20 xl:h-[80%] xl:top-[30%]">
          <Image
            src="/Ellipse 5.svg"
            alt="/Ellipse 5.svg"
            fill
            priority
          />
        </div>
        <div className="object-contain absolute  w-[140%] h-[180%] sm:w-full top-[-20%] sm:h-full sm:top-[34%] z-20 xl:h-[90%] xl:top-[30%]">
          <Image
            src="/Ellipse 6.svg"
            alt="/Ellipse 6.svg"
            fill
            priority
          />
        </div>
        <div className="w-full h-full sm:w-[130%] lg:h-[130%] object-contain absolute bottom-[28%] xl:w-[140%] xl:h-[150%]">
          <Image
            src="/Rectangle 46.svg"
            alt="/Rectangle 46.svg"
            fill
            priority
          />
        </div>
        <div className="w-[35%] h-full object-contain absolute bottom-[45%] left-[60%] z-10 sm:w-[20%] sm:left-[75%] lg:w-[15%] lg:left-[80%] lg:bottom-[40%]">
          <Image src="/Logo.svg" alt="/images/Logo.svg" fill priority />
        </div>
        <div className="w-full h-full object-contain absolute bottom-[28%] bg-[#405F3F] opacity-80"></div>
        <div className="w-[85%] h-[60%] object-contain absolute top-[49%] right-[15%] z-20  sm:right-[-15%] sm:top-[35%] md:h-[80%] lg:h-full md:top-[20%] lg:top-[-5%] lg:right-[-12%] xl:h-[110%]">
          <Image
            src="/Rectangle 7.svg"
            alt="/Rectangle 7.svg"
            fill
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
