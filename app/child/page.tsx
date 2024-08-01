import Image from "next/image";
import logo from "@/public/logo.png";
import { Check } from "lucide-react";
import strips from "@/public/strips.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { ChildDetailsForm } from "@/components/childform";

export default function Child() {
  return (
    <main className="min-h-screen p-12 bg-[#304330] relative overflow-clip">
      <Image src={logo} width={200} alt="logo" />
      <div className="absolute bg-[#405F3F] w-screen h-[20vh] bottom-0 left-0" />      
      <div className="absolute bg-[#405F3F] w-[20vw] h-[10vh] bottom-[35vh] left-0" />
      <div className="absolute bg-[#405F3F] w-[20vw] h-[10vh] bottom-[50vh] left-[30vw]" />
      <div className="absolute bg-[#405F3F] w-[20vw] h-[10vh] bottom-[35vh] left-[60vw]" />
      <div className="absolute bg-[#405F3F] w-[20vw] h-[10vh] bottom-[50vh] left-[90vw]" />
      <div className="w-full flex flex-col items-center">
        <h2 className="text-xl font-light text-white text-center mt-10">Start the learning adventure!</h2>
        <h1 className="text-3xl font-light text-white text-center mt-6">Child Details</h1>
        <h2 className="text-xl font-light text-white text-center mt-1">Next, let's set up your child's account.</h2>
      </div>
        <div className="flex mt-10 w-full justify-center space-x-24 flex-wrap">
        <div className="bg-black rounded-3xl p-3 z-10">
          <ChildDetailsForm />
        </div>
        </div>
    </main>
  );
}
