"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import strips from "@/public/strips.png";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";

export default function Child() {
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  useEffect(() => {
    const timer = setTimeout(() => setProgress(75), 500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <main className="min-h-screen py-12 px-60 bg-[#304330] relative overflow-clip">
      <Image src={logo} width={200} alt="logo" />
      <div className="absolute bg-[#405F3F] w-screen h-[20vh] bottom-0 left-0" />      
      <div className="absolute bg-[#405F3F] w-[20vw] h-[10vh] bottom-[35vh] left-0" />
      <div className="absolute bg-[#405F3F] w-[20vw] h-[10vh] bottom-[50vh] left-[30vw]" />
      <div className="absolute bg-[#405F3F] w-[20vw] h-[10vh] bottom-[35vh] left-[60vw]" />
      <div className="absolute bg-[#405F3F] w-[20vw] h-[10vh] bottom-[50vh] left-[90vw]" />
      <div className="px-7 pt-2">
        <Progress value={progress} className="rounded-sm h-2" />
      </div>
      <div className="w-full flex flex-col items-center -mt-2">
        <h1 className="text-4xl font-light text-white text-center mt-20"> User’s learning plan overview’s</h1>
      </div>
        <div className="flex mt-16 w-full justify-center space-x-24 flex-wrap">
        <div className="bg-black rounded-3xl p-3 z-10">
          <Card className="h-[36rem] z-20 w-[70vw] rounded-3xl px-32 relative -mt-5 -ml-5 border-2 border-black">
            <CardHeader>
              <Image src={strips} alt="strips" className="absolute left-[-2rem] top-2"/>
            </CardHeader>
            <CardContent>
               <div className="flex justify-between">
                <h2 className="text-black text-3xl">Selected Plan</h2>
                <div className="flex space-y-2 mt-0 font-normal text-sm flex-col text-black">
                    <h4 className="flex"><Check className="text-green-600 mr-2" />5-day free trial</h4>
                    <h4 className="flex"><Check className="text-green-600 mr-2" />Start preparing for 11+ grammar and private school exams.</h4>
                    <h4 className="flex"><Check className="text-green-600 mr-2" />2 mock tests per month.</h4>
                    <h4 className="flex"><Check className="text-green-600 mr-2" />No charges until your 5-day free trial ends.</h4>
                    <Button variant="link" className="text-blue-500 underline hover:underline-offset-0 mr-auto" >Change Plan</Button>
                </div>
               </div> 
               <Separator className="my-5 bg-black" />
               <div className="flex justify-between">
                <h2 className="text-black text-3xl my-auto">Billed</h2>
                <div className="flex mt-10  font-normal text-sm flex-col items-center text-black">
                    <h2 className="">£59.99 / month</h2>
                    <Button variant="link" className="text-blue-500 underline hover:underline-offset-0 mr-auto" >Have a discount code?</Button>
                </div>
               </div>
               <div className="flex justify-end w-full">
               <Button
                  className="bg-green-600 px-16 mt-14 hover:bg-green-400 snipcart-add-item"
                  data-item-id="plan-59.99"
                  data-item-name="Learning Plan"
                  data-item-price="59.99"
                  data-item-url="/"
                  data-item-description="Start preparing for 11+ grammar and private school exams."
                  data-item-image="/avatar1.png"
                >
                  Next
                </Button> 
               </div>
            </CardContent>
          </Card>
        </div>
        </div>
        <div hidden id="snipcart" data-api-key="N2NjYzdiZDMtMTA4OC00MWYyLWIwYzQtYTZkY2ZmNmU1YTUwNjM4NTgxMTc3Njk0MzEyNTE1"></div>
    </main>
  );
}
